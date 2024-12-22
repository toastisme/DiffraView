import asyncio
import websockets
import json
from algorithm_types import AlgorithmType
from dataclasses import dataclass
import os
import aiofiles
import sys

from open_file_manager import OpenFileManager
from algorithm_status import AlgorithmStatus
import tkinter as tk
from tkinter import filedialog
from dials.array_family import flex
from app_types import Status

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
                self.active_task_name = "update_import_params"
                self.active_task.add_done_callback(self.handle_task_exception)
            elif command == "browse_processing_folder_for_import":
                self.active_task = asyncio.create_task(
                    self.run_browse_processing_folder_for_import(msg)
                )

            elif command == "dials.import":
                self.active_task = asyncio.create_task(self.run_dials_import(msg))
                self.active_task_name = "update_import_params"
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
                algorithm = asyncio.create_task(self.save_hkl_file(msg))

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
            elif command == "update_experiment_viewer_debug_image":
                algorithm = asyncio.create_task(self.update_experiment_viewer_debug_image(msg))
            elif command == "toggle_experiment_viewer_debug":
                algorithm = asyncio.create_task(self.toggle_experiment_viewer_debug(msg))
            elif command == "set_experiment_viewer_debug_to_image":
                algorithm = asyncio.create_task(self.set_experiment_viewer_debug_to_image())
            elif command == "set_experiment_viewer_debug_to_threshold":
                algorithm = asyncio.create_task(self.set_experiment_viewer_debug_to_threshold())
            elif command == "toggle_experiment_viewer_sidebar":
                algorithm = asyncio.create_task(self.toggle_experiment_viewer_sidebar())
            elif command == "toggle_rlv_sidebar":
                algorithm = asyncio.create_task(self.toggle_rlv_sidebar())
            elif command == "toggle_experiment_planner_sidebar":
                algorithm = asyncio.create_task(self.toggle_experiment_planner_sidebar())
            elif command == "toggle_shoebox_viewer_sidebar":
                algorithm = asyncio.create_task(self.toggle_shoebox_viewer_sidebar())
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
                        log = "<br>".join([i[:60]for i in contents.split("\n")])
                        await self.send_to_gui({"params":{"log": log}}, command=command)
                        sent_contents = True
                        current_contents = contents
            if self.cancel_log_stream and sent_contents:
                return
            await asyncio.sleep(0000.1)

    async def update_integration_profiler(self, msg):

        """
        self.file_manager.update_integration_profiler_params(
            float(msg["A"]),
            float(msg["alpha"]),
            float(msg["beta"]),
            float(msg["sigma"]),
            int(msg["tof_padding"]),
            int(msg["xy_padding"])
        )
        """

        incident_radius = msg["vanadium_sample_radius"]
        try:
            incident_radius = float(incident_radius)
        except ValueError:
            incident_radius = None
        incident_number_density = msg["vanadium_sample_number_density"]
        try:
            incident_number_density = float(incident_number_density)
        except ValueError:
            incident_number_density = None
        incident_scattering_x_section = msg["vanadium_scattering_x_section"]
        try:
            incident_scattering_x_section = float(incident_scattering_x_section)
        except ValueError:
            incident_scattering_x_section = None
        incident_absorption_x_section = msg["vanadium_absorption_x_section"]
        try:
            incident_absorption_x_section = float(incident_absorption_x_section)
        except ValueError:
            incident_absorption_x_section = None

        sample_radius = msg["sample_radius"]
        try:
            sample_radius = float(sample_radius)
        except ValueError:
            sample_radius = None
        sample_number_density = msg["sample_number_density"]
        try:
            sample_number_density = float(sample_number_density)
        except ValueError:
            sample_number_density = None
        sample_scattering_x_section = msg["scattering_x_section"]
        try:
            sample_scattering_x_section = float(sample_scattering_x_section)
        except ValueError:
            sample_scattering_x_section = None
        sample_absorption_x_section = msg["absorption_x_section"]
        try:
            sample_absorption_x_section = float(sample_absorption_x_section)
        except ValueError:
            sample_absorption_x_section = None
        
        refl_id = msg["reflection_id"]
        if "type" in msg:
            reflection_type =  msg["type"]
        else:
            reflection_type = "observed"
        shoebox, expt_id = (
            self.file_manager.get_predicted_shoebox(
                refl_id,
                tof_padding=float(msg["tof_padding"]),
                xy_padding=float(msg["xy_padding"]),
                empty_run=msg["empty_run"],
                incident_run=msg["incident_run"],
                incident_radius=incident_radius,
                incident_number_density=incident_number_density,
                incident_scattering_x_section=incident_scattering_x_section,
                incident_absorption_x_section=incident_absorption_x_section,
                sample_radius=sample_radius,
                sample_number_density=sample_number_density,
                sample_scattering_x_section=sample_scattering_x_section,
                sample_absorption_x_section=sample_absorption_x_section,
                apply_lorentz_correction=bool(msg["apply_lorentz"]),
                apply_incident_spectrum=bool(msg["apply_incident_spectrum"]),
                apply_spherical_absorption=bool(msg["apply_spherical_absorption"]),
                reflection_type=reflection_type
            )
        )

        x0, x1, y0, y1, z0, z1 = shoebox.bbox
        bbox_lengths = [z1 - z0, y1 - y0, x1 - x0]
        shoebox_data_2d, mask_data_2d = self.file_manager.get_shoebox_data_2d(shoebox)
        shoebox_data, mask_data = self.file_manager.get_normalised_shoebox_data(shoebox)
        shoebox_viewer_msg = {
            "data": shoebox_data,
            "mask": mask_data,
            "bbox_lengths": bbox_lengths,
        }
        await self.send_to_shoebox_viewer(
            shoebox_viewer_msg, command="update_reflection"
        )
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
        reflection_type = "observed"
        if "type" in msg:
            reflection_type = msg["type"]
        x, y, bbox_pos, centroid_pos = await self.file_manager.get_lineplot_data(
            int(msg["panel_idx"]), coords, int(msg["expt_id"]), reflection_type
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

        if "update_integration_profiler" in msg and msg["update_integration_profiler"]:
            assert "reflection_id" in msg
            await self.update_integration_profiler(msg)



    async def remove_reflection(self, msg):
        assert "reflection_id" in msg
        reflection_type =  "observed"
        if "type" in msg:
            reflection_type = msg["type"]
        self.file_manager.remove_reflection(int(msg["reflection_id"]), reflection_type)
        has_calculated_integrated_reflections = "has_calculated_integrated_reflections" in msg and msg["has_calculated_integrated_reflections"]
        if has_calculated_integrated_reflections:
            summary = self.file_manager.get_integrated_reflections_summary(integration_type="calculated")
        else:
            summary = self.file_manager.get_reflections_summary()

        refl_data = self.file_manager.get_reflections_per_panel()
        await self.send_to_experiment_viewer(
            refl_data, command="update_reflection_table"
        )

        await self.send_to_experiment_viewer(
            refl_data, command="update_reflection_table"
        )
        gui_msg = {"reflection_table": refl_data, "reflections_summary": summary}
        if has_calculated_integrated_reflections:
            if reflection_type == "calculated": # calculated integrated reflections have changed
                calculated_refl_data = self.file_manager.get_integrated_reflections_per_panel(integration_type="calculated")
                gui_msg["calculated_reflection_table"] = calculated_refl_data
                await self.send_to_experiment_viewer(
                    calculated_refl_data, command="update_calculated_integrated_reflection_table"
                )
                await self.send_to_rlv(calculated_refl_data, command="update_calculated_integrated_reflection_table")


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

    async def run_browse_processing_folder_for_import(self, msg):

        root = tk.Tk()
        root.withdraw()

        selected_folder = filedialog.askdirectory()
        if selected_folder:
            msg["folder"] = selected_folder
            await self.run_dials_import_processing_folder(msg)
        else:
            await self.send_to_gui({}, command="enable_browse_files_button")

    
    async def clear_experiment(self):
        await self.send_to_gui({}, command="clear_experiment")
        await self.send_to_experiment_viewer({}, command="clear_experiment")
        await self.send_to_rlv({}, command="clear_experiment")
        await self.send_to_experiment_planner({}, command="clear_experiment")
        await self.send_to_shoebox_viewer({}, command="clear_shoebox")

    async def run_dials_import(self, msg):

        await self.clear_experiment()
        await self.send_to_gui(
            {"params" : {"status" : Status.Loading.value}},
            command="update_import_params"
        )

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
            "update_import_params",
            asyncio.create_task(self.file_manager.run(AlgorithmType.dials_import)),
        )

        await self.active_task_algorithm.task
        algorithm_status = self.file_manager.last_algorithm_status()

        if algorithm_status == AlgorithmStatus.cancelled:
            self.clean_up_after_task()
            return

        log = self.active_task_algorithm.task.result()
        self.clean_up_after_task()

        import_params = {"log": log}
        find_spots_params = {}
        root_params = {}

        match algorithm_status:

            case AlgorithmStatus.failed:
                import_params["status"] = Status.Failed.value
                await self.send_to_gui({"params" : import_params}, command="update_import_params")

            case AlgorithmStatus.finished:

                import_params["status"] = Status.Default.value
                import_params["instrumentName"] = self.file_manager.get_instrument_name()
                import_params["experimentDescription"] = (
                    self.file_manager.get_experiment_description()
                )

                root_params["openFileKeys"] = self.file_manager.get_open_file_keys()
                root_params["currentFileKey"] = self.file_manager.get_current_file_key()
                root_params["numExperiments"] = self.file_manager.get_num_experiments()
                root_params["experimentNames"] = self.file_manager.get_experiment_names()

                min_tof, max_tof, step_tof = self.file_manager.get_tof_range()
                find_spots_params["minTOF"] = min_tof
                find_spots_params["maxTOF"] = max_tof
                find_spots_params["stepTOF"] = step_tof
                find_spots_params["enabled"] = True

                await self.send_to_gui({"params" : root_params}, command="update_root_params")
                await self.send_to_gui({"params" : import_params}, command="update_import_params")
                await self.send_to_gui({"params" : find_spots_params}, command="update_find_spots_params")

                await self.send_to_experiment_viewer({}, command="loading_images")

                # First send experiment details
                experiment_viewer_msg = {"expt": self.file_manager.get_expt_json()}
                await self.send_to_experiment_viewer(
                    experiment_viewer_msg, command="update_experiment"
                )

                # Then send images one at a time
                for expt_id in range(self.file_manager.get_num_experiments()):
                    for panel_idx in range(self.file_manager.get_num_detector_panels()):
                        panel_image_data = self.file_manager.get_flattened_image_data(panel_idx=panel_idx, expt_id=expt_id)
                        await self.send_to_experiment_viewer(
                            {
                                "image_data" : panel_image_data,
                                "panel_idx": panel_idx,
                                "expt_id" : expt_id
                            }, command="add_panel_image_data"
                        )

                await self.send_to_gui(
                    {}, command="finished_updating_experiment_viewer"
                )

                rlv_msg = experiment_viewer_msg["expt"]
                await self.send_to_rlv(rlv_msg, command="new_experiment")

    async def run_dials_import_processing_folder(self, msg):
        # Clear viewers
        await self.send_to_gui({}, command="clear_experiment")
        await self.send_to_experiment_viewer({}, command="clear_experiment")
        await self.send_to_rlv({}, command="clear_experiment")
        await self.send_to_experiment_planner({}, command="clear_experiment")
        await self.send_to_shoebox_viewer({}, command="clear_shoebox")

        self.file_manager.add_active_processing_folder(msg["folder"])

        last_successful_command = self.file_manager.get_last_successful_command()
        assert last_successful_command is not None, "Setting up state from last successful command but command is None"

        refl_data = None
        gui_msg = {"last_successful_command" : last_successful_command}
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

        gui_msg["import_log"] = self.file_manager.get_algorithm_log(AlgorithmType.dials_import)

        if last_successful_command != "dials.import":
            gui_msg["find_spots_log"] = self.file_manager.get_algorithm_log(AlgorithmType.dials_find_spots)
            if last_successful_command == "dials.tof_integrate":
                if self.file_manager.last_integration_using_calculated():
                    integration_type="calculated"
                else:
                    integration_type="observed"

                integrated_refl_data = self.file_manager.get_integrated_reflections_per_panel(integration_type=integration_type)
                gui_msg["integrate_log"] = self.file_manager.get_algorithm_log(AlgorithmType.dials_integrate)
                if integration_type == "calculated":
                    gui_msg["calculated_reflection_table"] = integrated_refl_data
                    refl_data = self.file_manager.get_reflections_per_panel()
                    gui_msg["reflection_table"] = refl_data
                else: 
                    gui_msg["reflection_table"] = integrated_refl_data
                    refl_data = integrated_refl_data
                gui_msg["reflections_summary"] = (
                    self.file_manager.get_integrated_reflections_summary(integration_type=integration_type)
                )

            else:
                gui_msg["reflections_summary"] = (
                    self.file_manager.get_reflections_summary()
                )
                refl_data = self.file_manager.get_reflections_per_panel()

                gui_msg["reflection_table"] = refl_data

        if last_successful_command in ("dials.index", "dials.refine", "dials.tof_integrate"):
            gui_msg["index_log"] = self.file_manager.get_algorithm_log(AlgorithmType.dials_index)
            gui_msg["refine_log"] = self.file_manager.get_algorithm_log(AlgorithmType.dials_refine)
            gui_msg["crystal_summary"] = self.file_manager.get_crystal_summary()
            gui_msg["crystal_ids"] = list(range(len(gui_msg["crystal_summary"])))

        await self.send_to_gui(gui_msg, command="import_processing_folder")
        
        await self.send_to_gui(
            {}, command="updating_experiment_viewer"
        )

        ## Send experiment to viewers 
        await self.send_to_experiment_viewer({}, command="loading_images")

        expt = self.file_manager.get_expt_json()

        # Send experiment details
        experiment_viewer_msg = {"expt": expt}
        await self.send_to_experiment_viewer(
            experiment_viewer_msg, command="update_experiment"
        )

        # Send refl data before images as images take the longest
        await self.send_to_rlv(expt, command="new_experiment")

        if refl_data is not None:
            await self.send_to_experiment_viewer(
                refl_data, command="update_reflection_table"
            )
            await self.send_to_rlv(expt, command="update_experiment")
            await self.send_to_rlv(refl_data, command="update_reflection_table")
        if "calculated_reflection_table" in gui_msg:
            await self.send_to_rlv(
                gui_msg["calculated_reflection_table"],
                command="update_calculated_integrated_reflection_table")
            await self.send_to_experiment_viewer(
                gui_msg["calculated_reflection_table"],
                command="update_calculated_integrated_reflection_table")


        # Then send images one at a time
        for expt_id in range(self.file_manager.get_num_experiments()):
            for panel_idx in range(self.file_manager.get_num_detector_panels()):
                panel_image_data = self.file_manager.get_flattened_image_data(panel_idx=panel_idx, expt_id=expt_id)
                await self.send_to_experiment_viewer(
                    {
                        "image_data" : panel_image_data,
                        "panel_idx": panel_idx,
                        "expt_id" : expt_id
                    }, command="add_panel_image_data"
                )

        await self.send_to_gui(
            {}, command="finished_updating_experiment_viewer"
        )



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
                "update_find_spots_params",
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
        self.clean_up_after_task()

        import_params = {}
        find_spots_params = {"log": log}
        index_params = {}
        root_params = {}

        match algorithm_status:

            case AlgorithmStatus.failed:
                find_spots_params["status"] = Status.Failed.value
                await self.send_to_gui({"params" : find_spots_params}, command="update_find_spots_params")

            case AlgorithmStatus.finished:
                find_spots_params["status"] = Status.Default.value
                self.file_manager.add_additional_data_to_reflections()  # rlps and idxs
                refl_data = self.file_manager.get_reflections_per_panel()
                import_params["reflectionsSummary"] = (
                    self.file_manager.get_reflections_summary()
                )
                root_params["reflectionTable"] = refl_data
                index_params["enabled"] = True

                await self.send_to_gui({"params" : root_params}, command="update_root_params")
                await self.send_to_gui({"params" : import_params}, command="update_import_params")
                await self.send_to_gui({"params" : find_spots_params}, command="update_find_spots_params")
                await self.send_to_gui({"params" : index_params}, command="update_index_params")

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
                "update_index_params",
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
        self.clean_up_after_task()

        import_params = {}
        index_params = {"log": log}
        root_params = {}

        match algorithm_status:

            case AlgorithmStatus.failed:
                index_params["status"] = Status.Failed.value
                await self.send_to_gui({"params", index_params}, command="update_index_params")

            case AlgorithmStatus.finished:
                index_params["status"] = Status.Default.value
                refl_data = self.file_manager.get_reflections_per_panel()
                import_params["reflectionsSummary"] = (
                    self.file_manager.get_reflections_summary()
                )
                import_params["crystalSummary"] = self.file_manager.get_crystal_summary()
                root_params["reflectionTable"] = refl_data
                index_params["crystalIDs"] = list(range(len(import_params["crystalSummary"])))
                await self.send_to_gui({"params" : root_params}, command="update_root_params")
                await self.send_to_gui({"params" : import_params}, command="update_import_params")
                await self.send_to_gui({"params" : index_params}, command="update_index_params")

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
                "update_index_params",
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
        index_params = {"log": log}
        self.clean_up_after_task()

        match algorithm_status:

            case AlgorithmStatus.failed:
                index_params["status"] = Status.Failed.value
                await self.send_to_gui({"params" : index_params}, command="update_index_params")

            case AlgorithmStatus.finished:
                index_params["status"] = Status.Default.value
                index_params["bravaisLattices"] = (
                    self.file_manager.get_bravais_lattices_table()
                )
                await self.send_to_gui({"params", index_params}, command="update_index_params")

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
        import_params = {}
        index_params = {"log": ""}
        root_params = {}

        import_params["reflectionsSummary"] = (
            self.file_manager.get_reflections_summary()
        )
        import_params["crystalSummary"] = self.file_manager.get_crystal_summary()
        index_params["crystalIDs"] = list(range(len(import_params["crystalSummary"])))
        root_params["reflectionTable"] = refl_data

        await self.send_to_gui({"params" : root_params}, command="update_root_params")
        await self.send_to_gui({"params" : import_params}, command="update_import_params")
        await self.send_to_gui({"params" : index_params}, command="update_index_params")

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
                "update_refine_params",
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
        self.clean_up_after_task()

        import_params = {}
        index_params = {}
        refine_params = {"log": log}
        root_params = {}


        match algorithm_status:

            case AlgorithmStatus.failed:
                refine_params["status"] = Status.Failed.value
                await self.send_to_gui({"params" : refine_params}, command="update_refine_params")

            case AlgorithmStatus.finished:
                refine_params["status"] = Status.Default.value
                refl_data = self.file_manager.get_reflections_per_panel()
                self.file_manager.calculate_bbox_sigma_b()
                import_params["reflectionsSummary"] = (
                    self.file_manager.get_reflections_summary()
                )
                root_params["reflectionTable"] = refl_data
                import_params["crystalSummary"] = self.file_manager.get_crystal_summary()
                index_params["crystalIDs"] = list(range(len(import_params["crystalSummary"])))

                await self.send_to_gui({"params" : root_params}, command="update_root_params")
                await self.send_to_gui({"params" : import_params}, command="update_import_params")
                await self.send_to_gui({"params" : index_params}, command="update_index_params")
                await self.send_to_gui({"params" : refine_params}, command="update_refine_params")

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

        integration_type = "observed"
        if "integration_type" in args:
            integration_type = args["integration_type"]

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
                await self.send_to_gui(gui_msg, command="update_integrate_params")
                return

        try:
            self.setup_task(
                algorithm_type=AlgorithmType.dials_integrate,
                log_filename=log_filename,
                algorithm_args=args,
            )
            self.active_task_algorithm = DIALSTask(
                "update_integrate_params",
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
        root_params = {}
        import_params = {}
        index_params = {}
        integrate_params = {"log": log}
        self.clean_up_after_task()

        match algorithm_status:

            case AlgorithmStatus.failed:
                integrate_params["status"] = Status.Failed.value
                await self.send_to_gui({"params", integrate_params}, command="update_integrate_params")

            case AlgorithmStatus.finished:
                integrate_params["status"] = Status.Default.value
                self.file_manager.add_idxs_to_integrated_reflections()
                refl_data = self.file_manager.get_integrated_reflections_per_panel(integration_type=integration_type)
                import_params["reflectionsSummary"] = (
                    self.file_manager.get_integrated_reflections_summary(integration_type=integration_type)
                )
                if integration_type == "calculated":
                    root_params["calculatedReflectionTable"] = refl_data
                else:
                    root_params["reflectionTable"] = refl_data
                import_params["crystalSummary"] = self.file_manager.get_crystal_summary()
                index_params["crystalIDs"] = list(range(len(import_params["crystalSummary"])))

                await self.send_to_gui({"params" : root_params}, command="update_root_params")
                await self.send_to_gui({"params" : import_params}, command="update_import_params")
                await self.send_to_gui({"params" : index_params}, command="update_index_params")
                await self.send_to_gui({"params" : integrate_params}, command="update_integrate_params")


                if integration_type == "calculated":
                    await self.send_to_experiment_viewer(
                        refl_data, command="update_calculated_integrated_reflection_table"
                    )

                    await self.send_to_rlv(refl_data, command="update_calculated_integrated_reflection_table")
                else:
                    await self.send_to_experiment_viewer(
                        refl_data, command="update_reflection_table"
                    )

                    await self.send_to_rlv(refl_data, command="update_reflection_table")

    async def save_hkl_file(self, msg):

        root = tk.Tk()
        root.withdraw()
        filename = filedialog.asksaveasfilename(
            defaultextension=".hkl",
            filetypes=[("All files", "*.*")],
            title="Save file as",
        )

        try:
            min_partiality = float(msg["min_partiality"])
        except ValueError:
            min_partiality  = None
        try:
            min_i_sigma = float(msg["min_i_sigma"])
        except ValueError:
            min_i_sigma  = None


        if filename:
            self.file_manager.save_hkl_file(filename, min_partiality, min_i_sigma)
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
        for expt_id in range(self.file_manager.get_num_experiments()):
            for panel_idx in range(self.file_manager.get_num_detector_panels()):
                panel_image_data = self.file_manager.get_flattened_image_data(panel_idx=panel_idx, expt_id=expt_id, tof_range=tof_range)
                await self.send_to_experiment_viewer(
                    {
                        "image_data" : panel_image_data,
                        "panel_idx": panel_idx,
                        "expt_id" : expt_id
                    }, command="add_panel_image_data"
                )

    async def toggle_experiment_viewer_sidebar(self):
        await self.send_to_experiment_viewer(
            {}, command="toggle_sidebar"
        )

    async def toggle_rlv_sidebar(self):
        await self.send_to_rlv(
            {}, command="toggle_sidebar"
        )

    async def toggle_experiment_planner_sidebar(self):
        await self.send_to_experiment_planner(
            {}, command="toggle_sidebar"
        )

    async def toggle_shoebox_viewer_sidebar(self):
        await self.send_to_shoebox_viewer(
            {}, command="toggle_sidebar"
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

        current_expt_id = self.file_manager.get_current_experiment_viewer_expt_id()
        if current_expt_id != expt_id:
            self.file_manager.update_current_experiment_viewer_expt_id(expt_id)
            if "in_debug_mode" in msg and msg["in_debug_mode"]:
                await self.update_experiment_viewer_debug_image(
                    {"idx" : None, "threshold_algorithm" : None, 
                           "algorithm_params": None}
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

    async def update_experiment_viewer_debug_image(self, msg):
        if not "show_loading" in msg or msg["show_loading"]:
            await self.send_to_gui({}, command="updating_experiment_viewer")
        expt_id = self.file_manager.get_current_experiment_viewer_expt_id()
        images, mask = self.file_manager.get_threshold_debug_data(
            expt_id,
            msg["idx"],
            msg["threshold_algorithm"],
            msg["algorithm_params"]
        )

        for panel_idx, image in enumerate(images):
            await self.send_to_experiment_viewer(
                {
                    "image_data" : image,
                    "mask_data" : mask[panel_idx],
                    "panel_idx": panel_idx,
                    "expt_id" : expt_id
                }, command="add_debug_panel_image_data"
            )
        if not "show_loading" in msg or msg["show_loading"]:
            await self.send_to_gui({}, command="finished_updating_experiment_viewer")

    async def toggle_experiment_viewer_debug(self, msg):
        await self.send_to_experiment_viewer(
            {
                "debug_mode" : msg["debug_mode"],
            }, command="toggle_debug_mode"
        )

    async def set_experiment_viewer_debug_to_image(self):
        await self.send_to_experiment_viewer(
            {}, command="set_debug_to_image"
        )

    async def set_experiment_viewer_debug_to_threshold(self):
        await self.send_to_experiment_viewer(
            {}, command="set_debug_to_threshold"
        )
            
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
            AlgorithmType.dials_import: "update_import_params",
            AlgorithmType.dials_find_spots: "update_find_spots_params",
            AlgorithmType.dials_index: "update_index_params",
            AlgorithmType.dials_refine_bravais_settings: "update_index_params",
            AlgorithmType.dials_reindex: "update_index_params",
            AlgorithmType.dials_refine: "update_refine_params",
            AlgorithmType.dials_integrate: "update_integrate_params",
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
