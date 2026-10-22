import asyncio
import json
import logging
import os
import traceback

import aiofiles
import msgpack
import websockets

from .processing.steps import STEP_TARGETS, StepId
from .app_types import Status
from .handlers import (
    FileHandlers,
    MaskHandlers,
    PlannerHandlers,
    PluginHandlers,
    ReflectionHandlers,
    TOFHandlers,
    UtilsHandlers,
    ViewerHandlers,
    WorkflowHandlers,
)
from .open_file_manager import OpenFileManager
from .plugin_manager import PluginManager
from .protocol import (
    ERROR,
    LOST_CONNECTION,
    REPLACED_CLOSE_CODE,
    STATE_UPDATE,
    ProtocolError,
    parse_server_message,
)
from .router import Run, build_registry, command, status_target
from .static_files import process_request
from .utils import add_environment_to_path, get_formatted_text


class DiffraViewServer(
    FileHandlers,
    PluginHandlers,
    WorkflowHandlers,
    TOFHandlers,
    PlannerHandlers,
    ReflectionHandlers,
    ViewerHandlers,
    MaskHandlers,
    UtilsHandlers,
):
    """
    Owns the client connections and the active task. Commands are handled by
    the @command methods in handlers/.
    """

    def __init__(self, server_addr: str, server_port: str, initial_processing_dir=None):
        # The dials.* commands this server runs must be found on PATH.
        add_environment_to_path()
        self.server_addr = server_addr
        self.server_port = server_port
        self.file_manager = OpenFileManager()
        self.plugin_manager = PluginManager()
        self.connections = {}
        self.cancel_log_stream = True
        self.active_task = None
        self.active_task_name = None
        self.active_task_algorithm = None
        self.active_log_stream = None
        self._planner_scan_cancel = False
        self._planner_cancel_flag_ref = None
        self.loaded = False
        self.processing_dir = None
        self.initial_processing_dir = initial_processing_dir
        self.background_tasks = set()
        self.image_request = 0  # newest experiment viewer image request
        self.commands = build_registry(self)

    async def run(self):
        logging.getLogger("websockets.server").setLevel(logging.CRITICAL)
        self.server = await websockets.serve(
            self.handler,
            self.server_addr,
            self.server_port,
            max_size=1000 * 1024 * 1024,
            process_request=process_request,
        )
        await asyncio.Future()

    async def handler(self, websocket):
        try:
            await self.listen_to_client(websocket)
        except Exception as e:
            print(f"Handler error: {e}")

    def handle_task_exception(self, task):
        if task.cancelled():
            if self.active_task is not None:
                algorithm_name = (
                    self.active_task_algorithm.name
                    if self.active_task_algorithm is not None
                    else self.active_task_name
                )
                if algorithm_name is not None:
                    asyncio.create_task(
                        self.update_state(
                            algorithm_name, {"status": Status.Default.value}
                        )
                    )
            self.clean_up_after_task()
            return
        log = None
        if task.exception():
            log = "".join(traceback.format_exception(task.exception()))
            print(f"[handle_task_exception] {log}", flush=True)
            log = get_formatted_text(log)
        elif not task.done():
            log = f"Unknown exception after running {self.active_task_name}"

        if log is not None:
            if self.active_task_name is None:
                asyncio.create_task(
                    self.notify(ERROR, error=log)
                )

            else:
                asyncio.create_task(
                    self.update_state(
                        self.active_task_name, {"log": log, "status": "Failed"}
                    )
                )
            self.clean_up_after_task()

    async def listen_to_client(self, websocket):
        while True:
            try:
                msg = json.loads(await websocket.recv())
                if not self.is_server_msg(msg):
                    continue
                msg_type, payload = parse_server_message(msg)
                if msg_type == "session.connect":
                    await self.record_connection(payload, websocket)
                else:
                    await self.dispatch(msg_type, payload)
                await asyncio.sleep(0)

            except websockets.ConnectionClosed as e:
                print(f"WebSocket connection closed: {e}")
                break

            except json.JSONDecodeError as e:
                print(f"Failed to decode message: {e}")

            except ProtocolError as e:
                print(f"Ignoring message: {e}")

            except Exception as e:
                print(f"An error occurred handling command: {e}")
                if self.gui_connection_established():
                    self.run_in_background(
                        self.notify(ERROR, error=str(e))
                    )

        self.remove_client(websocket)

    async def dispatch(self, msg_type: str, payload: dict):
        entry = self.commands.get(msg_type)
        if entry is None:
            raise ProtocolError(f"Unknown message type {msg_type}")
        method, spec = entry
        if spec.requires is not None and not await self._mode_provides(spec):
            return
        match spec.run:
            case Run.INLINE:
                await method(payload)
            case Run.TASK:
                self.start_active_task(method(payload), status_target(spec, payload))
            case Run.BACKGROUND:
                self.run_in_background(method(payload))

    async def _mode_provides(self, spec) -> bool:
        active_file = self.file_manager.selected_file
        mode = active_file.mode if active_file is not None else None
        if mode is None:
            print(f"Ignoring {spec.name}: no experiment loaded")
            return False
        if spec.requires in mode.features:
            return True
        if spec.optional:
            return False
        error = f"{spec.name} is not available for {mode.experiment_type.value} data"
        await self.notify(ERROR, error=error)
        return False

    def start_active_task(self, coro, status_target: str | None):
        self.active_task = asyncio.create_task(coro)
        self.active_task_name = status_target
        self.active_task.add_done_callback(self.handle_task_exception)

    def run_in_background(self, coro):
        task = asyncio.create_task(coro)
        self.background_tasks.add(task)
        task.add_done_callback(self._background_task_done)

    def _background_task_done(self, task):
        self.background_tasks.discard(task)
        if task.cancelled() or task.exception() is None:
            return
        log = "".join(traceback.format_exception(task.exception()))
        print(f"[background task] {log}", flush=True)
        if self.gui_connection_established():
            error = {"error": str(task.exception())}
            self.run_in_background(self.notify(ERROR, **error))

    async def record_connection(self, msg, websocket):
        conn_id = msg["id"]
        old_ws = self.connections.get(conn_id)
        self.connections[conn_id] = websocket
        if old_ws is not None and old_ws is not websocket:
            # Opened in another window; only the newest one is used
            self.run_in_background(
                old_ws.close(REPLACED_CLOSE_CODE, "Opened in another window")
            )
        print(f"Connection established with {conn_id}")
        if self.all_connections_established():
            self.loaded = True
            if self.initial_processing_dir:
                self.start_active_task(
                    self.run_dials_import_processing_folder(
                        {"folder": self.initial_processing_dir}
                    ),
                    "import",
                )

    def remove_client(self, websocket):
        for client_id, ws in list(self.connections.items()):
            if ws == websocket:
                del self.connections[client_id]
                print(f"Removed connection for client {client_id}")
                break

    async def lost_connection_error(self):
        await self.notify(LOST_CONNECTION)

    def is_server_msg(self, msg: dict) -> bool:
        return "channel" in msg and msg["channel"] == "server"

    def gui_connection_established(self):
        return "gui" in self.connections

    def all_connections_established(self):
        required_connections = [
            "gui",
            "experiment_viewer",
            "rlv",
            "experiment_planner",
            "shoebox_viewer",
        ]
        for i in required_connections:
            if i not in self.connections:
                return False
        return True

    async def stream_log_file(self, file_path, command, progress_parser=None):
        sent_contents = False
        current_contents = ""
        last_progress = 0
        while True:
            if os.path.exists(file_path):
                async with aiofiles.open(file_path, mode="r") as file:
                    contents = await file.read()
                    if contents != current_contents:
                        log = "<br>".join([i[:60] for i in contents.split("\n")])
                        params = {"log": log}
                        if progress_parser is not None:
                            progress = progress_parser(contents)
                            if progress is not None:
                                progress = max(progress, last_progress)
                                last_progress = progress
                                params["progress"] = progress
                        await self.update_state(command, params)
                        sent_contents = True
                        current_contents = contents
            if self.cancel_log_stream and sent_contents:
                return
            await asyncio.sleep(0000.1)

        # Status is set to Default when the RLV viewer sends rlv_mesh_ready

    async def update_state(self, target: str, params: dict):
        """Update the state of a GUI tab or viewer (e.g. "find_spots", "root")."""
        await self.send(
            "gui", {"type": STATE_UPDATE, "target": target, "params": params}
        )

    async def notify(self, msg_type: str, **fields):
        """Send a GUI message other than a state update (see protocol.py)."""
        await self.send("gui", {"type": msg_type, **fields})

    async def send(self, channel: str, msg: dict):
        """Send JSON to a connection (gui or a viewer)."""
        websocket = await self._get_connection(channel)
        if websocket is None:
            return
        msg["channel"] = channel
        await websocket.send(json.dumps(msg))

    async def send_viewer(self, viewer: str, msg_type: str, payload=None):
        """Send {type, payload} to a viewer."""
        await self.send(viewer, {"type": msg_type, "payload": payload or {}})

    async def send_binary(self, viewer: str, msg_type: str, payload: dict):
        """Send {type, payload} to a viewer as msgpack (image and mesh data)."""
        websocket = await self._get_connection(viewer)
        if websocket is None:
            return
        await websocket.send(msgpack.packb({"type": msg_type, "payload": payload}))

    async def _get_connection(self, channel: str):
        websocket = self.connections.get(channel)
        if websocket is None:
            print(f"No connection for {channel}")
            if channel != "gui" and self.loaded:
                await self.lost_connection_error()
        return websocket

    def clean_up_after_task(self):
        self.cancel_log_stream = True
        self.active_log_stream = None
        self.active_task_algorithm = None
        self.active_task_name = None

    def setup_task(
        self,
        step_id: StepId,
        algorithm_args: dict[str, str],
        backend_name=None,
        progress_parser=None,
    ):
        """Set the step's args and stream its log file to its GUI tab."""
        target = STEP_TARGETS[step_id]
        self.active_task_name = target
        self.file_manager.set_selected_file_algorithm_args(
            step_id=step_id, args=algorithm_args
        )

        if self.active_log_stream is not None:
            self.active_log_stream.cancel()
            self.active_log_stream = None
        log_file = self.file_manager.get_log_file(step_id, backend_name)
        if log_file is None:
            return
        log_file_path = os.path.join(
            self.file_manager.get_current_processing_dir(), log_file
        )
        if os.path.exists(log_file_path):
            os.remove(log_file_path)

        self.cancel_log_stream = False
        self.active_log_stream = asyncio.create_task(
            self.stream_log_file(
                file_path=log_file_path,
                command=target,
                progress_parser=progress_parser,
            )
        )

    @command("session.cancel", run=Run.INLINE)
    async def cancel_active_task(self, msg=None):
        if self.active_task is None:
            self.clean_up_after_task()
            return

        # Can happen when completed just as user was attempting to stop
        if self.active_task_algorithm is not None:
            algorithm_name = self.active_task_algorithm.name
            try:
                self.active_task.cancel()
                await self.active_task
            except (asyncio.CancelledError, asyncio.exceptions.CancelledError):
                pass
        else:
            self._planner_scan_cancel = True
            if (
                hasattr(self, "_planner_cancel_flag_ref")
                and self._planner_cancel_flag_ref is not None
            ):
                self._planner_cancel_flag_ref[0] = True
            try:
                self.active_task.cancel()
                await self.active_task
            except (asyncio.CancelledError, asyncio.exceptions.CancelledError):
                pass
        self.clean_up_after_task()
        return


def main():
    import argparse

    parser = argparse.ArgumentParser(description="DiffraView WebSocket server")
    parser.add_argument("server_addr", nargs="?", default="127.0.0.1")
    parser.add_argument("server_port", nargs="?", default="50010")
    parser.add_argument("--processing-dir", default=None)
    args = parser.parse_args()
    server = DiffraViewServer(
        server_addr=args.server_addr,
        server_port=args.server_port,
        initial_processing_dir=args.processing_dir,
    )
    asyncio.run(server.run())


if __name__ == "__main__":
    main()
