import asyncio
import websockets
import json
from algorithm_types import AlgorithmType
import os
import aiofiles

from open_file_manager import OpenFileManager


class DIALSServer:
    """
    WebSocket Channels

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
    remove_reflection

    Experiment Viewer Commands

    update_experiment
    """

    algorithms = {
        "dials.import": AlgorithmType.dials_import,
        "dials.find_spots": AlgorithmType.dials_find_spots,
        "dials.index": AlgorithmType.dials_index,
        "dials.refine": AlgorithmType.dials_refine,
        "dials.refine_bravais_settings": AlgorithmType.dials_refine_bravais_settings,
        "dials.reindex": AlgorithmType.dials_reindex,
        "dials.integrate": AlgorithmType.dials_integrate
    }

    def __init__(self, server_addr: str, server_port: str):
        self.server_addr = server_addr
        self.file_manager = OpenFileManager()
        self.connections = {}
        self.server = websockets.serve(
            self.handler,
            server_addr,
            server_port,
            max_size=1000 * 1024 * 1024,
        )
        self.cancel_log_stream = True

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
                print("new connection", msg)
                self.connections[msg["id"]] = websocket

            elif command == "update_lineplot":
                await self.update_lineplot(msg)

            elif command == "remove_reflection":
                await self.remove_reflection(msg)

            elif command == "dials.import":
                await self.run_dials_import(msg)

            elif command == "dials.find_spots":
                algorithm = asyncio.create_task(self.run_dials_find_spots(msg))
            elif command == "dials.index":
                algorithm = asyncio.create_task(self.run_dials_index(msg))
            elif command == "dials.refine_bravais_settings":
                algorithm = asyncio.create_task(
                    self.run_dials_refine_bravais_settings(msg))
            elif command == "dials.reindex":
                algorithm = asyncio.create_task(self.run_dials_reindex(msg))
            elif command == "dials.refine":
                algorithm = asyncio.create_task(self.run_dials_refine(msg))
            elif command == "dials.integrate":
                algorithm = asyncio.create_task(self.run_dials_integrate(msg))
            elif command == "dials.update_tof_range":
                self.update_tof_range(msg)
            elif command == "dials.update_algorithm_arg":
                self.update_algorithm_arg(msg)
            else:
                print(f"Unknown command {command}")

            await asyncio.sleep(0)

    def is_server_msg(self, msg: dict) -> bool:
        return "channel" in msg and msg["channel"] == "server"

    async def stream_log_file(self, file_path, command):
        sent_contents = False
        current_contents = ""
        while True:
            if os.path.exists(file_path):
                async with aiofiles.open(file_path, mode='r') as file:
                    contents = await file.read()
                    if contents != current_contents:
                        log = "<br>".join(contents.split("\n"))
                        await self.send_to_gui({"log": log}, command=command)
                        sent_contents = True
                        current_contents = contents
            if self.cancel_log_stream and sent_contents:
                return
            await asyncio.sleep(0000.1)  # Adjust the interval as needed

    async def update_lineplot(self, msg):
        coords = (msg["panel_pos"][0], msg["panel_pos"][1])
        x, y, bbox_pos, centroid_pos = await self.file_manager.get_lineplot_data(
            int(msg["panel_idx"]),
            coords
        )

        gui_msg = {
            "x": x,
            "y": y,
            "bboxPos": bbox_pos,
            "centroidPos": centroid_pos,
            "title": f"{msg['name']} {coords}",
            "updateTableSelection": False
        }

        if ("remove_reflection" in msg and msg["remove_reflection"] is True):
            await self.send_to_gui(gui_msg, command="update_lineplot")
            return

        if not ("highlight_on_panel" in msg and msg["highlight_on_panel"] is True):
            gui_msg["updateTableSelection"] = True

        await self.send_to_gui(gui_msg, command="update_lineplot")

        if "highlight_on_panel" in msg and msg["highlight_on_panel"] is True:
            experiment_viewer_msg = {
                "name": msg["name"],
                "panelIdx": msg["panel_idx"],
                "panelPos": msg["panel_pos"]
            }
            await self.send_to_experiment_viewer(
                experiment_viewer_msg,
                command="highlight_reflection"
            )

    async def remove_reflection(self, msg):
        assert "reflection_id" in msg
        self.file_manager.remove_reflection(int(msg["reflection_id"]))
        refl_data = self.file_manager.get_reflections_per_panel()
        await self.send_to_experiment_viewer(
            refl_data,
            command="update_reflection_table"
        )

        await self.send_to_rlv(
            refl_data,
            command="update_reflection_table"
        )
        lineplot_msg = msg
        lineplot_msg["remove_reflection"] = True
        await self.update_lineplot(lineplot_msg)
        summary = self.file_manager.get_reflections_summary()
        gui_msg = {"reflection_table": refl_data,
                   "reflections_summary": summary}
        await self.send_to_gui(gui_msg,
                               command="update_reflection_table"
                               )

    async def run_dials_import(self, msg):
        await self.send_to_gui({}, command="clear_experiment")
        await self.send_to_experiment_viewer({}, command="clear_experiment")
        await self.send_to_rlv({}, command="clear_experiment")

        self.file_manager.add_active_file(msg["filename"], msg["file"])
        log_file = "dials.import.log"
        file_path = os.path.join(
            self.file_manager.get_current_file_dir(), log_file)

        if os.path.exists(file_path):
            os.remove(file_path)

        self.cancel_log_stream = False
        logger_stream = asyncio.create_task(
            self.stream_log_file(
                file_path=file_path,
                command="update_import_log"
            )
        )

        assert "args" in msg

        self.file_manager.set_selected_file_algorithm_args(
            algorithm_type=self.algorithms["dials.import"],
            args=msg["args"]
        )
        dials_algorithm = asyncio.create_task(
            self.file_manager.run(AlgorithmType.dials_import)
        )
        await dials_algorithm
        log, success = dials_algorithm.result()
        self.cancel_log_stream = True

        gui_msg = {"log": log}
        if success:
            gui_msg["success"] = True
            gui_msg["instrument_name"] = self.file_manager.get_instrument_name()
            gui_msg["experiment_description"] = self.file_manager.get_experiment_description()
            gui_msg["tof_range"] = self.file_manager.get_tof_range()
            await self.send_to_gui(gui_msg, command="update_experiment")

            experiment_viewer_msg = self.file_manager.get_expt_json()
            await self.send_to_experiment_viewer(
                experiment_viewer_msg,
                command="update_experiment"
            )

            rlv_msg = experiment_viewer_msg["expt"]
            await self.send_to_rlv(
                rlv_msg,
                command="update_experiment"
            )
        else:
            logger_stream.cancel()
            gui_msg["success"] = False
            await self.send_to_gui(gui_msg, command="update_import_log")

    async def run_dials_find_spots(self, msg):

        assert "args" in msg

        self.file_manager.set_selected_file_algorithm_args(
            algorithm_type=self.algorithms["dials.find_spots"],
            args=msg["args"]
        )

        log_file = "dials.find_spots.log"
        file_path = os.path.join(
            self.file_manager.get_current_file_dir(), log_file)

        if os.path.exists(file_path):
            os.remove(file_path)

        self.cancel_log_stream = False
        logger_stream = asyncio.create_task(
            self.stream_log_file(
                file_path=file_path,
                command="update_find_spots_log"
            )
        )
        dials_algorithm = asyncio.create_task(
            self.file_manager.run(AlgorithmType.dials_find_spots)
        )
        await dials_algorithm
        log, success = dials_algorithm.result()
        self.cancel_log_stream = True

        gui_msg = {"log": log}
        if success:
            gui_msg["success"] = True
            self.file_manager.add_additional_data_to_reflections()  # rlps and idxs

            refl_data = self.file_manager.get_reflections_per_panel()
            gui_msg["reflections_summary"] = self.file_manager.get_reflections_summary()
            gui_msg["reflection_table"] = refl_data
            await self.send_to_gui(gui_msg, command="update_find_spots_log")

            await self.send_to_experiment_viewer(
                refl_data,
                command="update_reflection_table"
            )

            await self.send_to_rlv(
                refl_data,
                command="update_reflection_table"
            )
        else:
            logger_stream.cancel()
            gui_msg["success"] = False
            await self.send_to_gui(gui_msg, command="update_find_spots_log")

    async def run_dials_index(self, msg):
        assert "args" in msg

        self.file_manager.set_selected_file_algorithm_args(
            algorithm_type=self.algorithms["dials.index"],
            args=msg["args"]
        )

        log_file = "dials.index.log"
        file_path = os.path.join(
            self.file_manager.get_current_file_dir(), log_file)

        if os.path.exists(file_path):
            os.remove(file_path)

        self.cancel_log_stream = False
        logger_stream = asyncio.create_task(
            self.stream_log_file(
                file_path=file_path,
                command="update_index_log"
            )
        )
        dials_algorithm = asyncio.create_task(
            self.file_manager.run(AlgorithmType.dials_index)
        )
        await dials_algorithm
        log, success = dials_algorithm.result()
        self.cancel_log_stream = True

        gui_msg = {"log": log}

        if success:
            gui_msg["success"] = True
            refl_data = self.file_manager.get_reflections_per_panel()
            gui_msg["reflections_summary"] = self.file_manager.get_reflections_summary()
            gui_msg["crystal_summary"] = self.file_manager.get_crystal_summary()
            gui_msg["reflection_table"] = refl_data
            await self.send_to_gui(gui_msg, command="update_index_log")

            await self.send_to_experiment_viewer(
                refl_data,
                command="update_reflection_table"
            )

            expt = self.file_manager.get_expt_json()["expt"]
            await self.send_to_rlv(
                expt,
                command="update_experiment"
            )

            await self.send_to_rlv(
                refl_data,
                command="update_reflection_table"
            )
        else:
            logger_stream.cancel()
            gui_msg["success"] = False
            await self.send_to_gui(gui_msg, command="update_index_log")

    async def run_dials_refine_bravais_settings(self, msg):
        log_file = "dials.refine_bravais_settings.log"
        file_path = os.path.join(
            self.file_manager.get_current_file_dir(), log_file)

        if os.path.exists(file_path):
            os.remove(file_path)

        self.cancel_log_stream = False
        logger_stream = asyncio.create_task(
            self.stream_log_file(
                file_path=file_path,
                command="update_index_log"
            )
        )
        dials_algorithm = asyncio.create_task(
            self.file_manager.run(AlgorithmType.dials_refine_bravais_settings)
        )
        await dials_algorithm
        log, success = dials_algorithm.result()
        self.cancel_log_stream = True

        gui_msg = {"log": log}
        gui_msg["bravais_lattices"] = self.file_manager.get_bravais_lattices_table()
        await self.send_to_gui(gui_msg, command="update_index_log")

    async def run_dials_reindex(self, msg):
        log_file = "dials.reindex.log"
        file_path = os.path.join(
            self.file_manager.get_current_file_dir(), log_file)

        if os.path.exists(file_path):
            os.remove(file_path)

        self.cancel_log_stream = False
        logger_stream = asyncio.create_task(
            self.stream_log_file(
                file_path=file_path,
                command="update_index_log"
            )
        )

        assert "id" in msg
        lattice_id: str = msg["id"]

        basis = self.file_manager.get_change_of_basis(lattice_id)
        self.file_manager.update_selected_file_arg(
            algorithm_type=AlgorithmType.dials_reindex,
            param_name="change_of_basis_op",
            param_value=basis,
        )

        dials_algorithm = asyncio.create_task(
            self.file_manager.run(AlgorithmType.dials_reindex)
        )
        await dials_algorithm
        log, success = dials_algorithm.result()
        self.cancel_log_stream = True

        refine_expt_filename = f"bravais_setting_{lattice_id}.expt"
        refine_refl_filename = "reindexed.refl"

        self.file_manager.set_current_expt_file(refine_expt_filename)
        self.file_manager.set_current_refl_file(refine_refl_filename)

        self.file_manager.set_selected_input_files(
            selected_files=[refine_expt_filename, refine_refl_filename],
            algorithm_type=AlgorithmType.dials_refine,
        )

        refl_data = self.file_manager.get_reflections_per_panel()
        gui_msg = {"log": log}
        gui_msg["reflections_summary"] = self.file_manager.get_reflections_summary()
        gui_msg["crystal_summary"] = self.file_manager.get_crystal_summary()
        gui_msg["reflection_table"] = refl_data
        gui_msg["reindexed_cell"] = True
        await self.send_to_gui(gui_msg, command="update_index_log")

        await self.send_to_experiment_viewer(
            refl_data,
            command="update_reflection_table"
        )

        expt = self.file_manager.get_expt_json()["expt"]
        expt["reindexed_cell"] = True
        await self.send_to_rlv(
            expt,
            command="update_experiment"
        )

        await self.send_to_rlv(
            refl_data,
            command="update_reflection_table"
        )

    async def run_dials_refine(self, msg):
        assert "args" in msg

        self.file_manager.set_selected_file_algorithm_args(
            algorithm_type=self.algorithms["dials.refine"],
            args=msg["args"]
        )
        log_file = "dials.refine.log"
        file_path = os.path.join(
            self.file_manager.get_current_file_dir(), log_file)

        if os.path.exists(file_path):
            os.remove(file_path)

        self.cancel_log_stream = False
        logger_stream = asyncio.create_task(
            self.stream_log_file(
                file_path=file_path,
                command="update_refine_log"
            )
        )
        dials_algorithm = asyncio.create_task(
            self.file_manager.run(AlgorithmType.dials_refine)
        )
        await dials_algorithm
        log, success = dials_algorithm.result()
        self.cancel_log_stream = True

        refl_data = self.file_manager.get_reflections_per_panel()
        gui_msg = {"log": log}
        gui_msg["reflections_summary"] = self.file_manager.get_reflections_summary()
        gui_msg["reflection_table"] = refl_data
        gui_msg["crystal_summary"] = self.file_manager.get_crystal_summary()
        await self.send_to_gui(gui_msg, command="update_refine_log")

        await self.send_to_experiment_viewer(
            refl_data,
            command="update_reflection_table"
        )

        await self.send_to_rlv(
            refl_data,
            command="update_reflection_table"
        )

    async def run_dials_integrate(self, msg):
        log_file = "simple_tof_integrate.log"
        file_path = os.path.join(
            self.file_manager.get_current_file_dir(), log_file)

        if os.path.exists(file_path):
            os.remove(file_path)

        self.cancel_log_stream = False
        logger_stream = asyncio.create_task(
            self.stream_log_file(
                file_path=file_path,
                command="update_integrate_log"
            )
        )
        dials_algorithm = asyncio.create_task(
            self.file_manager.run(AlgorithmType.dials_integrate)
        )
        await dials_algorithm
        log = dials_algorithm.result()
        self.cancel_log_stream = True

        refl_data = self.file_manager.get_integrated_reflections_per_panel()
        gui_msg = {"log": log}
        gui_msg["reflections_summary"] = self.file_manager.get_reflections_summary()
        gui_msg["reflection_table"] = refl_data
        gui_msg["crystal_summary"] = self.file_manager.get_crystal_summary()
        await self.send_to_gui(gui_msg, command="update_integrate_log")

        await self.send_to_experiment_viewer(
            refl_data,
            command="update_reflection_table"
        )

        await self.send_to_rlv(
            refl_data,
            command="update_reflection_table"
        )

    def update_tof_range(self, msg):
        num_images = (msg["tof_max"] - msg["tof_min"])/msg["step_tof"]
        ir1 = ((msg["current_tof_min"] - msg["tof_min"]) /
               (msg["tof_max"] - msg["tof_min"])) * (num_images - 1) + 1
        ir2 = ((msg["current_tof_max"] - msg["tof_min"]) /
               (msg["tof_max"] - msg["tof_min"])) * (num_images - 1) + 1
        self.file_manager.update_selected_file_arg(
            algorithm_type=AlgorithmType.dials_find_spots,
            param_name="scan_range",
            param_value=f"{int(ir1)},{int(ir2)}"
        )

    def set_algorithm_args(self, msg):
        assert "algorithm_type" in msg
        assert msg["algorithm_type"] in self.algorithms
        assert "args" in msg
        self.file_manager.set_selected_file_algorithm_args(
            algorithm_type=self.algorithms[msg["algorithm_type"]],
            args=msg["args"]
        )

    def update_algorithm_arg(self, msg):

        assert "algorithm_type" in msg
        assert msg["algorithm_type"] in self.algorithms
        assert "param_name" in msg
        assert "param_value" in msg

        self.file_manager.update_selected_file_arg(
            algorithm_type=self.algorithms[msg["algorithm_type"]],
            param_name=msg["param_name"],
            param_value=msg["param_value"],
        )

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

    async def send_to_rlv(self, msg, command=None):
        msg["channel"] = "rlv"
        if command is not None:
            msg["command"] = command
        await self.connections["rlv"].send(json.dumps(msg))


if __name__ == "__main__":
    server = DIALSServer(server_addr="127.0.0.1", server_port="8888")
    server.run()
