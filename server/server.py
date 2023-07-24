import asyncio
import websockets
import json
from algorithm_types import AlgorithmType

from open_file_manager import OpenFileManager

class DIALSServer:
    """
    Websocket Channels

    server
    experiment_viewer
    rlv
    gui

    Server Commands

    record_connection
    update_lineplot
    dials.import

    GUI Commands

    update_import_log
    update_find_spots_log
    update_index_log
    update_refine_log
    update_integrate_log
    update_lineplot

    Experiment Viewer Commands

    update_experiment
    """


    def __init__(self, server_addr: str, server_port: str):
        self.server_addr = server_addr
        self.file_manager = OpenFileManager()
        self.connections = {}
        self.server = websockets.serve(
            self.handler, 
            server_addr, 
            server_port, 
            max_size=100 * 1024 * 1024
        )

    def run(self):
        asyncio.get_event_loop().run_until_complete(self.server)
        asyncio.get_event_loop().run_forever()

    async def handler(self, websocket):

        while True:

            msg = await websocket.recv()
            msg = json.loads(msg)

            if not self.is_server_msg(msg):
                continue

            command = msg["command"]

            if command == "record_connection":
                self.connections[msg["id"]] = websocket

            elif command == "update_lineplot":
                await self.update_lineplot(msg)

            elif command == "dials.import":
                await self.run_dials_import(msg)

            await asyncio.sleep(0)


    def is_server_msg(self, msg : dict) -> bool:
        return "channel" in msg and msg["channel"] == "server"

    async def update_lineplot(self, msg):
        coords = (msg["panel_pos"][0], msg["panel_pos"][1])
        x, y = await self.file_manager.get_pixel_spectra(
            msg["panel_idx"], 
            coords
        )
        msg = {
            "x" : x,
            "y" : y,
            "title" : f"{msg['name']} {coords}"
        }
        await self.send_to_gui(msg, command="update_lineplot")


    async def run_dials_import(self, msg):
        self.file_manager.add_active_file(msg["filename"], msg["file"])
        log = self.file_manager.run(AlgorithmType.dials_import)
        

        experiment_viewer_msg = self.file_manager.get_expt_json()
        await self.send_to_experiment_viewer(
            experiment_viewer_msg,
            command="update_experiment"
        )

        gui_msg = {"log": log}
        await self.send_to_gui(gui_msg, command="update_import_log")

    async def send_to_gui(self, msg, command=None):
        msg["channel"] = "gui"
        if command is not None:
            msg["command"] = command
        await self.connections["gui"].send(json.dumps(msg))

    async def send_to_experiment_viewer(self, msg, command=None):
        msg["channel"] = "experiment_viewer"
        if command is not None:
            msg["command"] = command
        await self.connections["experiment_viewer"].send(json.dumps(msg))

if __name__ == "__main__":
    server = DIALSServer(server_addr="127.0.0.1", server_port="8888")
    server.run()
