import asyncio
import websockets
import json
from algorithm_types import AlgorithmType
from dataclasses import dataclass
import os
import aiofiles
import numpy as np
import io
import sys

from open_file_manager import OpenFileManager
from algorithm_status import AlgorithmStatus
import tkinter as tk
from tkinter import filedialog
from dials.array_family import flex

from dxtbx import flumpy

@dataclass
class DIALSTask:
    name: str
    task: asyncio.Task


class DIALSServer:

    algorithms = {
        "dials.import": AlgorithmType.dials_import,
        "dials.find_spots": AlgorithmType.dials_find_spots,
        "dials.index": AlgorithmType.dials_index,
        "dials.refine": AlgorithmType.dials_refine,
        "dials.refine_bravais_settings": AlgorithmType.dials_refine_bravais_settings,
        "dials.reindex": AlgorithmType.dials_reindex,
        "dials.integrate": AlgorithmType.dials_integrate,
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
        self.active_task = None
        self.active_task_name = None
        self.active_task_algorithm = None
        self.active_log_stream = None
        self.loaded = False

    def run(self):
        asyncio.get_event_loop().run_until_complete(self.server)
        asyncio.get_event_loop().run_forever()

    async def handler(self, websocket, path):
        try:
            await self.listen_to_client(websocket)
        except Exception as e:
            print(f"Handler error: {e}")

    def handle_task_exception(self, task):
        try:
            if task.exception():
                log = task.get_stack()
                log += task.exception()
                gui_msg = {"log": log}
                gui_msg["success"] = False
                asyncio.create_task(
                    self.send_to_gui(gui_msg, command=self.active_task_name)
                )
        except:
            pass

    async def listen_to_client(self, websocket):
        """
        Handle individual client websocket connection.
        """
        async def handle_command(command, msg):


            if command == "record_connection":
                self.connections[msg["id"]] = websocket
                if self.loaded == True:
                    self.active_task = asyncio.create_task(self.lost_connection_error())
                print(f"Connection established with {msg['id']}")
                if self.all_connections_established():
                    self.loaded = True

            elif command == "update_lineplot":
                await self.update_lineplot(msg)

            elif command == "remove_reflection":
                await self.remove_reflection(msg)

            elif command == "browse_file":
                self.active_task = asyncio.create_task(self.run_browse_file(msg))

            elif command == "browse_files_for_import":
                self.active_task = asyncio.create_task(
                    self.run_browse_files_for_import(msg)
                )
                self.active_task_name = "update_import_log"
                self.active_task.add_done_callback(self.handle_task_exception)

            elif command == "dials.import":
                self.active_task = asyncio.create_task(self.run_dials_import(msg))
                self.active_task_name = "update_import_log"
                self.active_task.add_done_callback(self.handle_task_exception)

            elif command == "dials.find_spots":
                self.active_task = asyncio.create_task(self.run_dials_find_spots(msg))
                self.active_task_name = command
                self.active_task.add_done_callback(self.handle_task_exception)

            elif command == "dials.index":
                self.active_task = asyncio.create_task(self.run_dials_index(msg))
                self.active_task_name = command
                self.active_task.add_done_callback(self.handle_task_exception)

            elif command == "dials.refine_bravais_settings":
                self.active_task = asyncio.create_task(
                    self.run_dials_refine_bravais_settings(msg)
                )
                self.active_task_name = command
                self.active_task.add_done_callback(self.handle_task_exception)

            elif command == "dials.reindex":
                self.active_task = asyncio.create_task(self.run_dials_reindex(msg))
                self.active_task_name = command
                self.active_task.add_done_callback(self.handle_task_exception)

            elif command == "dials.refine":
                self.active_task = asyncio.create_task(self.run_dials_refine(msg))
                self.active_task_name = command
                self.active_task.add_done_callback(self.handle_task_exception)

            elif command == "dials.integrate":
                self.active_task = asyncio.create_task(self.run_dials_integrate(msg))
                self.active_task_name = command
                self.active_task.add_done_callback(self.handle_task_exception)

            elif command == "dials.update_tof_range":
                self.update_tof_range(msg)

            elif command == "dials.update_algorithm_arg":
                self.update_algorithm_arg(msg)

            elif command == "update_active_file":
                algorithm = asyncio.create_task(self.update_active_file(msg))

            elif command == "update_planner_goniometer_phi":
                algorithm = asyncio.create_task(self.update_planner_goniometer_phi(msg))

            elif command == "clear_planner_user_predicted_reflections":
                algorithm = asyncio.create_task(
                    self.clear_planner_user_predicted_reflections(msg)
                )

            elif command == "get_next_best_planner_orientation":
                algorithm = asyncio.create_task(
                    self.get_next_best_planner_orientation(msg)
                )
            elif command == "store_planner_reflections":
                algorithm = asyncio.create_task(self.store_planner_reflections(msg))

            elif command == "clear_planner_reflections":
                algorithm = asyncio.create_task(self.clear_planner_reflections(msg))

            elif command == "recalculate_planner_reflections":
                algorithm = asyncio.create_task(
                    self.recalculate_planner_reflections(msg)
                )

            elif command == "update_experiment_planner_params":
                algorithm = asyncio.create_task(
                    self.update_experiment_planner_params(msg)
                )

            elif command == "update_integration_profiler":
                algorithm = asyncio.create_task(self.update_integration_profiler(msg))

            elif command == "cancel_active_task":
                await self.cancel_active_task()

            elif command == "update_visible_experiment":
                algorithm = asyncio.create_task(self.update_visible_experiment(msg))

            elif command == "new_reflection_xy":
                algorithm = asyncio.create_task(self.new_reflection_xy(msg))

            elif command == "cancel_new_reflection":
                algorithm = asyncio.create_task(self.cancel_new_reflection())

            elif command == "new_reflection_z":
                algorithm = asyncio.create_task(self.new_reflection_z(msg))

            elif command == "add_new_reflection":
                algorithm = asyncio.create_task(self.add_new_reflection())

            elif command == "save_hkl_file":
                algorithm = asyncio.create_task(self.save_hkl_file())

            elif command == "update_experiment_images":
                algorithm = asyncio.create_task(self.update_experiment_images(msg))
                
            elif command == "update_experiment_description":
                algorithm = asyncio.create_task(self.update_experiment_description(msg))

            elif command == "select_experiment_viewer_experiment":
                algorithm = asyncio.create_task(
                    self.select_experiment_viewer_experiment(msg)
                )

            elif command == "update_user_dmin":
                algorithm = asyncio.create_task(self.update_user_dmin(msg))

            elif command == "show_rlv_orientation_view":
                algorithm = asyncio.create_task(self.update_rlv_view(command))
            elif command == "show_rlv_crystal_view":
                algorithm = asyncio.create_task(self.update_rlv_view(command))
            else:
                print(f"Unknown command {command}")

        while True:
            try:
                msg = await websocket.recv()
                msg = json.loads(msg)

                if not self.is_server_msg(msg):
                    continue

                command = msg["command"]
                await handle_command(command, msg)
                await asyncio.sleep(0)

            except websockets.ConnectionClosedError as e:
                print(f"WebSocket connection closed: {e}")
                break  

            except json.JSONDecodeError as e:
                print(f"Failed to decode message: {e}")
                continue  

            except Exception as e:
                print(f"An error occurred: {e}")
                break

        self.remove_client(websocket)

    def remove_client(self, websocket):
        for client_id, ws in list(self.connections.items()):
            if ws == websocket:
                del self.connections[client_id]
                print(f"Removed connection for client {client_id}")
                break

    async def lost_connection_error(self):
        await self.send_to_gui({}, command="lost_connection_error")

    
    def is_server_msg(self, msg: dict) -> bool:
        return "channel" in msg and msg["channel"] == "server"

    def gui_connection_established(self):
        return "gui" in self.connections

    def all_connections_established(self):
        required_connections = ["gui", "experiment_viewer", "rlv", "experiment_planner"]
        for i in required_connections:
            if i not in self.connections:
                return False
        return True

    async def stream_log_file(self, file_path, command):
        sent_contents = False
        current_contents = ""
        while True:
            if os.path.exists(file_path):
                async with aiofiles.open(file_path, mode="r") as file:
                    contents = await file.read()
                    if contents != current_contents:
                        log = "<br>".join(contents.split("\n"))
                        await self.send_to_gui({"log": log}, command=command)
                        sent_contents = True
                        current_contents = contents
            if self.cancel_log_stream and sent_contents:
                return
            await asyncio.sleep(0000.1)

    async def update_integration_profiler(self, msg):

        self.file_manager.update_integration_profiler_params(
            float(msg["A"]),
            float(msg["alpha"]),
            float(msg["beta"]),
            float(msg["sigma"]),
            int(msg["tof_bbox"]),
        )
        
        refl_id = msg["reflection_id"]
        shoebox, expt_id = (
            self.file_manager.get_predicted_shoebox(refl_id)
        )
        (
            tof,
            projected_intensity,
            projected_background,
            line_profile,
            fit_intensity,
            fit_sigma,
            summation_intensity,
            summation_sigma,
        ) = self.file_manager.get_line_integration_for_shoebox(
            expt_id, shoebox,
        )

        gui_msg = {}
        gui_msg["integrationProfilerTOF"] = tof.tolist()
        gui_msg["integrationProfilerIntensity"] = projected_intensity.tolist()
        gui_msg["integrationProfilerBackground"] = projected_background.tolist()
        gui_msg["integrationProfilerLine"] = tuple(line_profile)
        gui_msg["integrationProfilerLineValue"] = fit_intensity
        gui_msg["integrationProfilerLineSigma"] = fit_sigma
        gui_msg["integrationProfilerSummationValue"] = summation_intensity
        gui_msg["integrationProfilerSummationSigma"] = summation_sigma

        await self.send_to_gui(gui_msg, command="update_integration_profiler")

    async def update_lineplot(self, msg):
        await self.send_to_experiment_viewer(
            {"expt_id": msg["expt_id"]}, command="select_expt"
        )
        coords = (msg["panel_pos"][0], msg["panel_pos"][1])
        x, y, bbox_pos, centroid_pos = await self.file_manager.get_lineplot_data(
            int(msg["panel_idx"]), coords, int(msg["expt_id"])
        )

        gui_msg = {
            "x": x,
            "y": y,
            "bboxPos": bbox_pos,
            "centroidPos": centroid_pos,
            "title": f"{msg['name']} {coords}",
            "updateTableSelection": False,
            "updateIntegrationProfiler": False,
        }

        if "expt_id" in msg:
            gui_msg["expt_id"] = msg["expt_id"]

        if "remove_reflection" in msg and msg["remove_reflection"] is True:
            await self.send_to_gui(gui_msg, command="update_lineplot")
            return

        if not ("highlight_on_panel" in msg and msg["highlight_on_panel"] is True):
            gui_msg["updateTableSelection"] = True

        if "update_integration_profiler" in msg:
            assert "id" in msg
            if msg["update_integration_profiler"]:
                refl_id = msg["id"]
                shoebox, expt_id = (
                    self.file_manager.get_predicted_shoebox(refl_id)
                )
                x0, x1, y0, y1, z0, z1 = shoebox.bbox
                bbox_lengths = [z1 - z0, y1 - y0, x1 - x0]
                shoebox_data = flumpy.to_numpy(shoebox.data).copy()
                shoebox_data_2d = np.sum(shoebox_data, 0)
                shoebox_data /= np.max(shoebox_data)
                shoebox_data_2d /= np.max(shoebox_data_2d)
                shoebox_data = shoebox_data.tolist()
                shoebox_data_2d = shoebox_data_2d.tolist()
                mask_data = flumpy.to_numpy(shoebox.mask)
                mask_data_2d = np.zeros(mask_data.shape[1:], dtype=mask_data.dtype)
                
                # Check for Foreground (1 << 2 = 4) along z-axis
                foreground_any = np.any(mask_data & (1 << 2), axis=0)
                # Check for Background (1 << 1 = 2) along z-axis
                background_any = np.any(mask_data & (1 << 1), axis=0)
                
                # Set Foreground first (takes precedence)
                mask_data_2d[foreground_any] |= (1 << 2)  
                # Set Background where there's no Foreground
                mask_data_2d[~foreground_any & background_any] |= (1 << 1)  
                
                # Always set Valid bit where we set either Foreground or Background
                mask_data_2d[foreground_any | background_any] |= (1 << 0)
                mask_data_2d = mask_data_2d.tolist()
                shoebox_viewer_msg = {
                    "data": shoebox_data,
                    "mask": mask_data,
                    "bbox_lengths": bbox_lengths,
                }
                # await self.send_to_shoebox_viewer(
                #    shoebox_viewer_msg, command="update_reflection"
                # )

                await self.send_to_gui({
                    "shoebox_data_2d" : shoebox_data_2d,
                    "mask_data_2d" : mask_data_2d
                    }, 
                    command="update_shoebox_viewer_2d")

                (
                    tof,
                    projected_intensity,
                    projected_background,
                    line_profile,
                    fit_intensity,
                    fit_sigma,
                    summation_intensity,
                    summation_sigma,
                ) = self.file_manager.get_line_integration_for_shoebox(
                    expt_id, shoebox,
                )

                if len(tof) != 0:
                    gui_msg["updateIntegrationProfiler"] = True
                    gui_msg["integrationProfilerTOF"] = tof.tolist()
                    gui_msg["integrationProfilerIntensity"] = (
                        projected_intensity.tolist()
                    )
                    gui_msg["integrationProfilerBackground"] = (
                        projected_background.tolist()
                    )
                    gui_msg["integrationProfilerLine"] = tuple(line_profile)
                    gui_msg["integrationProfilerLineValue"] = fit_intensity
                    gui_msg["integrationProfilerLineSigma"] = fit_sigma
                    gui_msg["integrationProfilerSummationValue"] = summation_intensity
                    gui_msg["integrationProfilerSummationSigma"] = summation_sigma
                else:
                    gui_msg["updateIntegrationProfiler"] = False

        await self.send_to_gui(gui_msg, command="update_lineplot")

        if "highlight_on_panel" in msg and msg["highlight_on_panel"] is True:
            experiment_viewer_msg = {
                "name": msg["name"],
                "panelIdx": msg["panel_idx"],
                "panelPos": msg["panel_pos"],
            }
            await self.send_to_experiment_viewer(
                experiment_viewer_msg, command="highlight_reflection"
            )

    async def remove_reflection(self, msg):
        assert "reflection_id" in msg
        self.file_manager.remove_reflection(int(msg["reflection_id"]))
        refl_data = self.file_manager.get_reflections_per_panel()
        summary = self.file_manager.get_reflections_summary()
        gui_msg = {"reflection_table": refl_data, "reflections_summary": summary}
        await self.send_to_gui(gui_msg, command="update_reflection_table")

        await self.send_to_experiment_viewer(
            refl_data, command="update_reflection_table"
        )

        await self.send_to_rlv(refl_data, command="update_reflection_table")
        if msg["isSelectedReflection"]:
            await self.send_to_gui({}, command="clear_lineplot")

    async def new_reflection_xy(self, msg):
        panel_idx = msg["panel_idx"]
        expt_id = msg["expt_id"]
        bbox = msg["bbox"]
        self.file_manager.new_reflection_xy(panel_idx, expt_id, bbox)
        lineplot_msg = {
            "panel_idx": panel_idx,
            "expt_id": expt_id,
            "panel_pos": (int((bbox[3] + bbox[2]) / 2), int((bbox[1] + bbox[0]) / 2)),
            "name": msg["panel_name"],
        }
        await self.update_lineplot(lineplot_msg)
        await self.send_to_gui({}, command="new_reflection_xy")

    async def new_reflection_z(self, msg):
        bbox = msg["bbox"]
        self.file_manager.new_reflection_z(bbox)

    async def cancel_new_reflection(self):
        self.file_manager.cancel_new_reflection()
        await self.send_to_gui({}, command="cancel_new_reflection")

    async def add_new_reflection(self):
        await self.send_to_experiment_viewer({}, command="loading_reflection")
        await self.send_to_gui({}, command="updating_experiment_viewer")
        self.file_manager.add_new_reflection()
        refl_data = self.file_manager.get_reflections_per_panel()
        summary = self.file_manager.get_reflections_summary()
        gui_msg = {"reflection_table": refl_data, "reflections_summary": summary}
        await self.send_to_gui(gui_msg, command="update_reflection_table")

        await self.send_to_experiment_viewer(
            refl_data, command="update_reflection_table"
        )

        new_reflection = self.file_manager.get_new_reflection()
        x0, x1, y0, y1, z0, z1 = new_reflection["bbox"]
        coords = (int((y0 + y1) / 2), int((x0 + x1) / 2))
        experiment_viewer_msg = {
            "panelIdx": new_reflection["panel_idx"],
            "panelPos": coords,
            "focusOnPanel": False,
        }
        await self.send_to_experiment_viewer(
            experiment_viewer_msg, command="highlight_reflection"
        )
        await self.send_to_gui({}, command="finished_updating_experiment_viewer")

        await self.send_to_rlv(refl_data, command="update_reflection_table")

    async def run_browse_file(self, msg):

        root = tk.Tk()
        root.withdraw()

        filename = filedialog.askopenfilename()
        if filename is not None and filename != "" and len(filename) > 0:
            msg["value"] = filename
            await self.send_to_gui(msg, command="selected_file")

    async def run_browse_files_for_import(self, msg):

        root = tk.Tk()
        root.withdraw()

        filenames = filedialog.askopenfilenames()
        if filenames is not None and filenames != "" and len(filenames) > 0:
            msg["filenames"] = filenames
            await self.run_dials_import(msg)
        else:
            await self.send_to_gui({}, command="enable_browse_files_button")

    async def run_dials_import(self, msg):

        # Clear viewers
        await self.send_to_gui({}, command="clear_experiment")
        await self.send_to_experiment_viewer({}, command="clear_experiment")
        await self.send_to_rlv({}, command="clear_experiment")
        await self.send_to_experiment_planner({}, command="clear_experiment")

        self.file_manager.add_active_file(msg)
        log_filename = "dials.import.log"
        args = {}
        if "args" in msg:
            args = msg["args"]

        self.setup_task(
            algorithm_type=AlgorithmType.dials_import,
            log_filename=log_filename,
            algorithm_args=args,
        )
        self.active_task_algorithm = DIALSTask(
            "update_import_log",
            asyncio.create_task(self.file_manager.run(AlgorithmType.dials_import)),
        )

        await self.active_task_algorithm.task
        algorithm_status = self.file_manager.last_algorithm_status()

        if algorithm_status == AlgorithmStatus.cancelled:
            self.clean_up_after_task()
            return

        log = self.active_task_algorithm.task.result()
        self.clean_up_after_task()

        gui_msg = {"log": log}

        match algorithm_status:

            case AlgorithmStatus.failed:
                gui_msg["success"] = False
                await self.send_to_gui(gui_msg, command="update_import_log")

            case AlgorithmStatus.finished:
                gui_msg["success"] = True
                gui_msg["instrument_name"] = self.file_manager.get_instrument_name()
                gui_msg["experiment_description"] = (
                    self.file_manager.get_experiment_description()
                )
                gui_msg["tof_range"] = self.file_manager.get_tof_range()
                gui_msg["open_file_keys"] = self.file_manager.get_open_file_keys()
                gui_msg["current_file_key"] = self.file_manager.get_current_file_key()
                gui_msg["goniometer_orientation"] = 0
                gui_msg["predicted_reflections"] = 0
                gui_msg["num_experiments"] = self.file_manager.get_num_experiments()
                gui_msg["experiment_names"] = self.file_manager.get_experiment_names()
                await self.send_to_gui(gui_msg, command="update_experiment")

                await self.send_to_experiment_viewer({}, command="loading_images")

                experiment_viewer_msg = {"expt": self.file_manager.get_expt_json()}
                experiment_viewer_msg["image_data"] = (
                    self.file_manager.get_flattened_image_data()
                )
                await self.send_to_experiment_viewer(
                    experiment_viewer_msg, command="update_experiment"
                )

                await self.send_to_gui(
                    {}, command="finished_updating_experiment_viewer"
                )

                rlv_msg = experiment_viewer_msg["expt"]
                await self.send_to_rlv(rlv_msg, command="new_experiment")

    async def run_dials_find_spots(self, msg):

        args = {}
        if "args" in msg:
            args = msg["args"]

        log_filename = "dials.find_spots.log"

        try:
            self.setup_task(
                algorithm_type=AlgorithmType.dials_find_spots,
                log_filename=log_filename,
                algorithm_args=args,
            )
            self.active_task_algorithm = DIALSTask(
                "update_find_spots_log",
                asyncio.create_task(
                    self.file_manager.run(AlgorithmType.dials_find_spots)
                ),
            )

            await self.active_task_algorithm.task

        except (asyncio.CancelledError, asyncio.exceptions.cancelled):
            self.clean_up_after_task()
            return

        algorithm_status = self.file_manager.last_algorithm_status()
        if algorithm_status == AlgorithmStatus.cancelled:
            self.clean_up_after_task()
            return

        log = self.active_task_algorithm.task.result()
        gui_msg = {"log": log}
        self.clean_up_after_task()

        match algorithm_status:

            case AlgorithmStatus.failed:
                gui_msg["success"] = False
                await self.send_to_gui(gui_msg, command="update_find_spots_log")

            case AlgorithmStatus.finished:
                gui_msg["success"] = True
                self.file_manager.add_additional_data_to_reflections()  # rlps and idxs
                refl_data = self.file_manager.get_reflections_per_panel()
                gui_msg["reflections_summary"] = (
                    self.file_manager.get_reflections_summary()
                )
                gui_msg["reflection_table"] = refl_data

                await self.send_to_gui(gui_msg, command="update_find_spots_log")

                await self.send_to_experiment_viewer(
                    refl_data, command="update_reflection_table"
                )

                await self.send_to_rlv(refl_data, command="update_reflection_table")

    async def run_dials_index(self, msg):

        args = {}
        if "args" in msg:
            args = msg["args"]

        log_filename = "dials.index.log"

        try:
            self.setup_task(
                algorithm_type=AlgorithmType.dials_index,
                log_filename=log_filename,
                algorithm_args=args,
            )
            self.active_task_algorithm = DIALSTask(
                "update_index_log",
                asyncio.create_task(self.file_manager.run(AlgorithmType.dials_index)),
            )

            await self.active_task_algorithm.task

        except (asyncio.CancelledError, asyncio.exceptions.cancelled):
            self.clean_up_after_task()
            return

        algorithm_status = self.file_manager.last_algorithm_status()
        if algorithm_status == AlgorithmStatus.cancelled:
            self.clean_up_after_task()
            return

        log = self.active_task_algorithm.task.result()
        gui_msg = {"log": log}
        self.clean_up_after_task()

        match algorithm_status:
            case AlgorithmStatus.failed:
                gui_msg["success"] = False
                await self.send_to_gui(gui_msg, command="update_index_log")
            case AlgorithmStatus.finished:
                # self.file_manager.add_calculated_frames_to_reflections()  # rlps and idxs
                gui_msg["success"] = True
                refl_data = self.file_manager.get_reflections_per_panel()
                gui_msg["reflections_summary"] = (
                    self.file_manager.get_reflections_summary()
                )
                gui_msg["crystal_summary"] = self.file_manager.get_crystal_summary()
                gui_msg["reflection_table"] = refl_data
                gui_msg["crystal_ids"] = list(range(len(gui_msg["crystal_summary"])))
                await self.send_to_gui(gui_msg, command="update_index_log")

                await self.send_to_experiment_viewer(
                    refl_data, command="update_reflection_table"
                )

                expt = self.file_manager.get_expt_json()
                await self.send_to_rlv(expt, command="update_experiment")
                await self.send_to_rlv(refl_data, command="update_reflection_table")

    async def populate_experiment_planner(self, dmin=None):

        await self.send_to_gui({}, command="updating_experiment_planner")

        max_expt_predicted_reflections = 1e5
        await self.send_to_experiment_planner({}, command="clear_experiment")
        await self.send_to_gui({}, command="clear_planner_orientations")
        expt = self.file_manager.get_expt_json()
        await self.send_to_experiment_planner(expt, command="update_experiment")

        # For each orientation (expt), get the observed and predicted reflections
        # Then filter predicted miller indices for unique set over all orientations
        all_predicted_miller_indices = []
        all_observed_miller_indices = []
        total_asu_refl = None

        expt_ids = self.file_manager.get_experiment_ids()
        reflections_by_phi = {}
        for i in expt_ids:
            asu_refl, asu_p_refl, phi = (
                self.file_manager.get_asu_predicted_and_observed_reflections(
                    i, dmin=dmin
                )
            )
            asu_p_refl["id"] = flex.int(len(asu_p_refl), i)
            asu_refl["id"] = flex.int(len(asu_refl), i)
            if total_asu_refl is None:
                total_asu_refl = asu_refl

            if len(asu_p_refl) > max_expt_predicted_reflections:
                await self.send_to_experiment_planner(
                    {
                        "error": "Error: Predicted reflections > maximum allowed number. Try increasing dmin"
                    },
                    command="display_error",
                )
                await self.send_to_gui(
                    {}, command="finished_updating_experiment_planner"
                )
                return

            else:
                sel = flex.bool(len(asu_refl), True)
                for r in range(len(asu_refl)):
                    if asu_refl["miller_index"][r] in all_observed_miller_indices:
                        sel[r] = False
                        continue
                    all_observed_miller_indices.append(asu_refl["miller_index"][r])
                total_asu_refl.extend(asu_refl.select(sel))

            if (len(asu_p_refl)) == 0:
                expt_completeness = 0
            else:
                expt_completeness = round((len(asu_refl) / len(asu_p_refl)) * 100, 2)

            asu_p_refl_data = self.file_manager.get_reflections_per_panel(
                reflection_table=asu_p_refl
            )

            filtered_asu_p_refl_data = {}
            filtered_p_num_reflections = 0
            for panel_refl_data in asu_p_refl_data:
                panel_data = []
                for j in range(len(asu_p_refl_data[panel_refl_data])):
                    if (
                        asu_p_refl_data[panel_refl_data][j]["millerIdx"]
                        in all_predicted_miller_indices
                    ):
                        continue
                    panel_data.append(asu_p_refl_data[panel_refl_data][j])
                    all_predicted_miller_indices.append(
                        asu_p_refl_data[panel_refl_data][j]["millerIdx"]
                    )
                    filtered_p_num_reflections += 1
                filtered_asu_p_refl_data[panel_refl_data] = panel_data
                
            if phi not in reflections_by_phi:
                reflections_by_phi[phi] = {
                    "predicted_refl_data": filtered_asu_p_refl_data,
                    "expt_ids" : [i],
                    "predicted_num_reflections": filtered_p_num_reflections,
                    "completeness" : [expt_completeness]
                }

            else:
                for p in filtered_asu_p_refl_data:
                    if p in reflections_by_phi[phi]["predicted_refl_data"]:
                        reflections_by_phi[phi]["predicted_refl_data"][p] += filtered_asu_p_refl_data[p]
                    else:
                        reflections_by_phi[phi]["predicted_refl_data"][p] = filtered_asu_p_refl_data[p]
                reflections_by_phi[phi]["expt_ids"].append(i)
                reflections_by_phi[phi]["predicted_num_reflections"] += filtered_p_num_reflections
                reflections_by_phi[phi]["completeness"].append(expt_completeness)


        for phi in reflections_by_phi:
            await self.send_to_experiment_planner(
                {
                    "refl_data": [],
                    "expt_ids": reflections_by_phi[phi]["expt_ids"],
                    "phi": phi,
                    "predicted_refl_data": reflections_by_phi[phi]["predicted_refl_data"],
                },
                command="add_exp_orientation",
            )

            await self.send_to_gui(
                {
                    "orientation": phi,
                    "predicted_num_reflections": reflections_by_phi[phi]["predicted_num_reflections"],
                    "num_reflections": 0,
                    "completeness": 0,
                },
                command="add_planner_orientation",
            )

        self.file_manager.update_experiment_planner_params("num_stored_orientations", len(reflections_by_phi))
        self.file_manager.update_experiment_planner_params("current_miller_indices", all_predicted_miller_indices)



        await self.send_to_gui({}, command="finished_updating_experiment_planner")

    async def run_dials_refine_bravais_settings(self, msg):
        args = {}
        if "args" in msg:
            args = msg["args"]

        log_filename = "dials.refine_bravais_settings.log"

        try:
            self.setup_task(
                algorithm_type=AlgorithmType.dials_refine_bravais_settings,
                log_filename=log_filename,
                algorithm_args=args,
            )
            self.active_task_algorithm = DIALSTask(
                "update_index_log",
                asyncio.create_task(
                    self.file_manager.run(AlgorithmType.dials_refine_bravais_settings)
                ),
            )

            await self.active_task_algorithm.task

        except (asyncio.CancelledError, asyncio.exceptions.cancelled):
            self.clean_up_after_task()
            return

        algorithm_status = self.file_manager.last_algorithm_status()
        if algorithm_status == AlgorithmStatus.cancelled:
            self.clean_up_after_task()
            return

        log = self.active_task_algorithm.task.result()
        gui_msg = {"log": log}
        self.clean_up_after_task()

        match algorithm_status:

            case AlgorithmStatus.failed:
                gui_msg["success"] = False
                await self.send_to_gui(gui_msg, command="update_index_log")

            case AlgorithmStatus.finished:
                gui_msg["success"] = True
                gui_msg["bravais_lattices"] = (
                    self.file_manager.get_bravais_lattices_table()
                )
                await self.send_to_gui(gui_msg, command="update_index_log")

    async def run_dials_reindex(self, msg):

        assert "id" in msg
        assert "crystal_id" in msg
        lattice_id: str = msg["id"]
        crystal_id: str = msg["crystal_id"] 
        basis = self.file_manager.get_change_of_basis(lattice_id)
        self.file_manager.reindex_reflections_with_crystal_id(crystal_id, basis)
        crystal_json = self.file_manager.get_bravais_settings_crystal(int(lattice_id))
        self.file_manager.update_expt_crystal(crystal_id, crystal_json)

        new_expt_filename = "reindexed.expt"
        new_refl_filename = "reindexed.refl"
        self.file_manager.set_current_expt_file(new_expt_filename)
        self.file_manager.set_current_refl_file(new_refl_filename)
        self.file_manager.set_selected_input_files(
            selected_files=[new_expt_filename, new_refl_filename],
            algorithm_type=AlgorithmType.dials_refine,
        )
        self.file_manager.set_selected_input_files(
            selected_files=[new_expt_filename, new_refl_filename],
            algorithm_type=AlgorithmType.dials_refine_bravais_settings,
        )

        refl_data = self.file_manager.get_reflections_per_panel()
        gui_msg = {"log": ""}
        gui_msg["reflections_summary"] = (
            self.file_manager.get_reflections_summary()
        )
        gui_msg["crystal_summary"] = self.file_manager.get_crystal_summary()
        gui_msg["crystal_ids"] = list(range(len(gui_msg["crystal_summary"])))
        gui_msg["reflection_table"] = refl_data
        gui_msg["reindexed_cell"] = True
        await self.send_to_gui(gui_msg, command="update_index_log")

        await self.send_to_experiment_viewer(
            refl_data, command="update_reflection_table"
        )

        expt = self.file_manager.get_expt_json()
        expt["reindexed_cell"] = True
        await self.send_to_rlv(expt, command="update_experiment")

        await self.send_to_rlv(refl_data, command="update_reflection_table")

    async def run_dials_refine(self, msg):
        args = {}
        if "args" in msg:
            args = msg["args"]

        log_filename = "dials.refine.log"

        try:
            self.setup_task(
                algorithm_type=AlgorithmType.dials_refine,
                log_filename=log_filename,
                algorithm_args=args,
            )
            self.active_task_algorithm = DIALSTask(
                "update_refine_log",
                asyncio.create_task(self.file_manager.run(AlgorithmType.dials_refine)),
            )

            await self.active_task_algorithm.task

        except (asyncio.CancelledError, asyncio.exceptions.cancelled):
            self.clean_up_after_task()
            return

        algorithm_status = self.file_manager.last_algorithm_status()
        if algorithm_status == AlgorithmStatus.cancelled:
            self.clean_up_after_task()
            return

        log = self.active_task_algorithm.task.result()
        gui_msg = {"log": log}
        self.clean_up_after_task()

        match algorithm_status:

            case AlgorithmStatus.failed:
                gui_msg["success"] = False
                await self.send_to_gui(gui_msg, command="update_refine_log")

            case AlgorithmStatus.finished:
                refl_data = self.file_manager.get_reflections_per_panel()
                self.file_manager.calculate_bbox_sigma_b()
                gui_msg = {"log": log}
                gui_msg["reflections_summary"] = (
                    self.file_manager.get_reflections_summary()
                )
                gui_msg["reflection_table"] = refl_data
                gui_msg["crystal_summary"] = self.file_manager.get_crystal_summary()
                gui_msg["crystal_ids"] = list(range(len(gui_msg["crystal_summary"])))
                await self.send_to_gui(gui_msg, command="update_refine_log")

                await self.send_to_experiment_viewer(
                    refl_data, command="update_reflection_table"
                )

                expt = self.file_manager.get_expt_json()
                await self.send_to_rlv(expt, command="update_experiment")
                await self.send_to_rlv(refl_data, command="update_reflection_table")

    async def run_dials_integrate(self, msg):
        args = {}
        if "args" in msg:
            args = msg["args"]

        log_filename = "tof_integrate.log"

        absorption_params = [
            "target_spectrum.sample_radius",
            "target_spectrum.scattering_x_section",
            "target_spectrum.absorption_x_section"
        ]
        for p in absorption_params:
            if p in args and args[p] == "":
                log = f"Spherical absorption correction is selected but {p} has no value."
                gui_msg = {"log":log}
                gui_msg["success"] = False
                await self.send_to_gui(gui_msg, command="update_integrate_log")
                return

        try:
            self.setup_task(
                algorithm_type=AlgorithmType.dials_integrate,
                log_filename=log_filename,
                algorithm_args=args,
            )
            self.active_task_algorithm = DIALSTask(
                "update_integrate_log",
                asyncio.create_task(
                    self.file_manager.run(AlgorithmType.dials_integrate)
                ),
            )

            await self.active_task_algorithm.task

        except (asyncio.CancelledError, asyncio.exceptions.cancelled):
            self.clean_up_after_task()
            return

        algorithm_status = self.file_manager.last_algorithm_status()
        if algorithm_status == AlgorithmStatus.cancelled:
            self.clean_up_after_task()
            return

        log = self.active_task_algorithm.task.result()
        gui_msg = {"log": log}
        self.clean_up_after_task()

        match algorithm_status:

            case AlgorithmStatus.failed:
                gui_msg["success"] = False
                await self.send_to_gui(gui_msg, command="update_integrate_log")

            case AlgorithmStatus.finished:
                refl_data = self.file_manager.get_integrated_reflections_per_panel()
                gui_msg = {"log": log}
                gui_msg["reflections_summary"] = (
                    self.file_manager.get_reflections_summary()
                )
                gui_msg["reflection_table"] = refl_data
                gui_msg["crystal_summary"] = self.file_manager.get_crystal_summary()
                gui_msg["crystal_ids"] = list(range(len(gui_msg["crystal_summary"])))
                await self.send_to_gui(gui_msg, command="update_integrate_log")

                await self.send_to_experiment_viewer(
                    refl_data, command="update_reflection_table"
                )

                await self.send_to_rlv(refl_data, command="update_reflection_table")

    async def save_hkl_file(self):

        root = tk.Tk()
        root.withdraw()
        filename = filedialog.asksaveasfilename(
            defaultextension=".hkl",
            filetypes=[("All files", "*.*")],
            title="Save file as",
        )

        if filename:
            self.file_manager.save_hkl_file(filename)
            msg = f"Saved .hkl file to {filename}"
            await self.send_to_gui({"message": msg}, command="display_message")

    def update_tof_range(self, msg):
        num_images = (msg["tof_max"] - msg["tof_min"]) / msg["step_tof"]
        ir1 = (
            (msg["current_tof_min"] - msg["tof_min"])
            / (msg["tof_max"] - msg["tof_min"])
        ) * (num_images - 1) + 1
        ir2 = (
            (msg["current_tof_max"] - msg["tof_min"])
            / (msg["tof_max"] - msg["tof_min"])
        ) * (num_images - 1) + 1
        self.file_manager.update_selected_file_arg(
            algorithm_type=AlgorithmType.dials_find_spots,
            param_name="scan_range",
            param_value=f"{int(ir1)},{int(ir2)}",
        )

    async def select_experiment_viewer_experiment(self, msg):
        assert "expt_id" in msg
        await self.send_to_experiment_viewer(msg, command="select_expt")

    async def update_user_dmin(self, msg):
        assert "dmin" in msg
        self.file_manager.update_user_dmin(dmin=msg["dmin"])

    async def update_experiment_images(self, msg):
        tof_range = None
        if "tof_range" in msg:
            tof_range = msg["tof_range"]
        image_data = self.file_manager.update_experiment_images(
            tof_range=tof_range,
            update_find_spots_range=True)
        await self.send_to_experiment_viewer(
            {"image_data": image_data}, command="update_image_data"
        )

    async def update_experiment_description(self, msg):
        assert (
            "expt_id" in msg
        ), "No expt_id found when trying to update experiment description"
        expt_id = int(msg["expt_id"])
        description = self.file_manager.get_experiment_description(idx=expt_id)
        await self.send_to_gui(
            {"experiment_description": description},
            command="update_experiment_description",
        )

    def set_algorithm_args(self, msg):
        assert "algorithm_type" in msg
        assert msg["algorithm_type"] in self.algorithms
        assert "args" in msg
        self.file_manager.set_selected_file_algorithm_args(
            algorithm_type=self.algorithms[msg["algorithm_type"]], args=msg["args"]
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

    async def update_active_file(self, msg):

        assert "name" in msg
        active_file = msg["name"]
        if active_file == self.file_manager.selected_file.file_key:
            return
        self.file_manager.set_active_file(active_file)

        await self.send_to_gui({}, command="clear_experiment")
        await self.send_to_experiment_viewer({}, command="clear_experiment")
        await self.send_to_rlv({}, command="clear_experiment")
        refl_data = self.file_manager.get_reflections_per_panel()
        expt = self.file_manager.get_expt_json()
        logs = self.file_manager.get_algorithm_logs()
        gui_msg = {"expt": expt, "algorithm_logs": logs}
        if refl_data is not None:
            gui_msg["reflection_table"] = refl_data
        gui_msg["reflections_summary"] = self.file_manager.get_reflections_summary()
        gui_msg["crystal_summary"] = self.file_manager.get_crystal_summary()
        gui_msg["crystal_ids"] = list(range(len(gui_msg["crystal_summary"])))
        gui_msg["instrument_name"] = self.file_manager.get_instrument_name()
        gui_msg["experiment_description"] = (
            self.file_manager.get_experiment_description()
        )
        gui_msg["tof_range"] = self.file_manager.get_tof_range()
        gui_msg["active_filename"] = self.file_manager.get_current_filename()
        await self.send_to_gui(gui_msg, command="load_experiment")

        await self.send_to_experiment_viewer(expt, command="update_experiment")

        await self.send_to_rlv(expt["expt"], command="update_experiment")

        if refl_data is not None:
            await self.send_to_experiment_viewer(
                refl_data, command="update_reflection_table"
            )

            await self.send_to_rlv(refl_data, command="update_reflection_table")

    async def clear_planner_user_predicted_reflections(self, msg):
        assert "num_initial_orientations" in msg
        await self.send_to_gui(msg, command="clear_planner_user_predicted_reflections")

    async def update_planner_goniometer_phi(self, msg):
        await self.send_to_gui({}, command="updating_experiment_planner")
        assert "phi" in msg

        phi = msg["phi"]
        orientations, _, num_stored_orientations = self.file_manager.get_experiment_planner_params()
        dmin = self.file_manager.get_user_dmin()
        if len(orientations) == 0:
            await self.send_to_experiment_planner({}, command="clear_experiment")
            expt = self.file_manager.get_expt_json()
            await self.send_to_experiment_planner(expt, command="update_experiment")

        try:
            dmin = float(dmin)
        except ValueError:
            await self.send_to_experiment_planner(
                {"error": "Error: invalid dmin value"}, command="display_error"
            )
            return
        if dmin < 0.1:
            await self.send_to_experiment_planner(
                {"error": "Error: invalid dmin value"}, command="display_error"
            )
            return

        refl_data = self.file_manager.predict_reflection_table(
            dmin, phi, orientations[:num_stored_orientations]
        )

        num_reflections = 0
        for i in refl_data:
            num_reflections += len(refl_data[i])

        await self.send_to_experiment_planner(
            refl_data, command="update_predicted_reflection_table"
        )

        await self.send_to_gui(
            {
                "orientation": phi,
                "reflections": num_reflections,
                "last_data_from_experiment": msg["last_data_from_experiment"],
            },
            command="update_planner_orientation",
        )
        await self.send_to_gui({}, command="finished_updating_experiment_planner")

    async def get_next_best_planner_orientation(self, msg):

        await self.send_to_gui({}, command="updating_experiment_planner")
        assert "orientations" in msg
        assert "dmin" in msg

        orientations, _, _ = self.file_manager.get_experiment_planner_params()
        if len(orientations) == 0:
            await self.send_to_experiment_planner({}, command="clear_experiment")
            expt = self.file_manager.get_expt_json()
            await self.send_to_experiment_planner(expt, command="update_experiment")

        num_exp_orientations = len(self.file_manager.get_imageset_ids())
        orientations = msg["orientations"]
        if len(orientations) > num_exp_orientations:
            orientations = orientations[:-1]
        best_phi, best_refl_data = self.file_manager.get_best_expt_orientation(
            orientations, float(msg["dmin"])
        )
        if best_phi is None:
            await self.send_to_experiment_planner(
                {"error":"No new reflections found"}, command="display_error")
            return
        num_reflections = 0
        for i in best_refl_data:
            num_reflections += len(best_refl_data[i])

        await self.send_to_gui(
            {"orientation": best_phi, "reflections": num_reflections},
            command="update_planner_orientation",
        )

        await self.send_to_experiment_planner(
            {"phi": best_phi}, command="update_params"
        )

        await self.send_to_experiment_planner(
            best_refl_data, command="update_predicted_reflection_table"
        )
        await self.send_to_gui({}, command="finished_updating_experiment_planner")

    async def store_planner_reflections(self, msg):
        self.file_manager.update_experiment_planner_params("num_stored_orientations", len(msg["orientations"]))
        await self.send_to_experiment_planner({}, command="store_active_reflections")

    async def clear_planner_reflections(self, msg):
        self.file_manager.clear_experiment_planner_params()
        await self.send_to_experiment_planner({}, command="clear_predicted_reflections")

    async def recalculate_planner_reflections(self, msg):
        assert "dmin" in msg
        try:
            dmin = float(msg["dmin"])
            if dmin < 0.1:
                await self.send_to_experiment_planner(
                    {"error": "Error: invalid dmin value"}, command="display_error"
                )
                return
        except ValueError:
            await self.send_to_experiment_planner(
                {"error": "Error: invalid dmin value"}, command="display_error"
            )
            return

        await self.clear_planner_reflections(msg)
        self.file_manager.update_user_dmin(dmin)
        await self.populate_experiment_planner(dmin=dmin)

    async def update_experiment_planner_params(self, msg):
        assert "orientations" in msg
        assert "num_reflections" in msg
        self.file_manager.update_experiment_planner_params(
            "orientations", msg["orientations"]
        )
        self.file_manager.update_experiment_planner_params(
            "num_reflections",msg["num_reflections"]
        )
    
    async def update_rlv_view(self, view: str):
        await self.send_to_rlv({}, command=view)

    async def send_to_gui(self, msg, command=None):
        msg["channel"] = "gui"
        if command is not None:
            msg["command"] = command
        await self.connections["gui"].send(json.dumps(msg))

    async def send_to_shoebox_viewer(self, msg, command=None):
        msg["channel"] = "shoebox_viewer"
        if command is not None:
            msg["command"] = command
        await self.connections["shoebox_viewer"].send(json.dumps(msg))

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

    async def send_to_experiment_planner(self, msg, command=None):
        msg["channel"] = "experiment_planner"
        if command is not None:
            msg["command"] = command
        await self.connections["experiment_planner"].send(json.dumps(msg))

    def clean_up_after_task(self):
        self.cancel_log_stream = True
        self.active_log_stream = None
        self.active_task_algorithm = None

    def setup_task(
        self,
        algorithm_type: AlgorithmType,
        log_filename: str,
        algorithm_args: dict[str, str],
    ):

        commands = {
            AlgorithmType.dials_import: "update_import_log",
            AlgorithmType.dials_find_spots: "update_find_spots_log",
            AlgorithmType.dials_index: "update_index_log",
            AlgorithmType.dials_refine_bravais_settings: "update_index_log",
            AlgorithmType.dials_reindex: "update_index_log",
            AlgorithmType.dials_refine: "update_refine_log",
            AlgorithmType.dials_integrate: "update_integrate_log",
        }

        log_file_path = os.path.join(
            self.file_manager.get_current_file_dir(), log_filename
        )

        if os.path.exists(log_file_path):
            os.remove(log_file_path)

        self.cancel_log_stream = False
        self.active_log_stream = asyncio.create_task(
            self.stream_log_file(
                file_path=log_file_path, command=commands[algorithm_type]
            )
        )
        self.file_manager.set_selected_file_algorithm_args(
            algorithm_type=algorithm_type, args=algorithm_args
        )

    async def cancel_active_task(self):
        if self.active_task is None:
            assert self.active_task_algorithm is None
            assert self.active_log_stream is None
            return

        # Can happen when completed just as user was attempting to stop
        if self.active_task_algorithm is not None:
            algorithm_name = self.active_task_algorithm.name
            self.active_task.cancel()
            await self.active_task
            await self.send_to_gui({}, command=f"cancel_{algorithm_name}")
        self.clean_up_after_task()
        return


if __name__ == "__main__":
    if len(sys.argv) == 3:
        server_addr = sys.argv[1]
        server_port = sys.argv[2]
        server = DIALSServer(server_addr=server_addr, server_port=server_port)
    else:
        server = DIALSServer(server_addr="127.0.0.1", server_port="50010")
    server.run()
