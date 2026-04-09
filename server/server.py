import asyncio
import websockets
import json
import time
import re
from algorithm_types import AlgorithmType
from dataclasses import dataclass
import os
import aiofiles
import sys
import traceback
from dxtbx import flumpy
import numpy as np

from open_file_manager import OpenFileManager
from algorithm_status import AlgorithmStatus
import wx
from dials.array_family import flex
from app_types import Status
import msgpack
from utils import get_formatted_text
from dials.command_line.tof_integrate import get_predicted_observed_reflections


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
        self.server_port = server_port
        self.file_manager = OpenFileManager()
        self.connections = {}
        self.cancel_log_stream = True
        self.active_task = None
        self.active_task_name = None
        self.active_task_algorithm = None
        self.active_log_stream = None
        self.loaded = False
        self.processing_dir = None

    async def run(self):
        self.server = await websockets.serve(
            self.handler,
            self.server_addr,
            self.server_port,
            max_size=1000 * 1024 * 1024,
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
                algorithm_name = self.active_task_algorithm.name
                asyncio.create_task(
                    self.send_to_gui(
                        {"params": {"status": Status.Default.value}},
                        command=algorithm_name,
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
                    self.send_to_gui({"error": log}, command="display_error")
                )

            else:
                asyncio.create_task(
                    self.send_to_gui(
                        {"params": {"log": log, "status": "Failed"}},
                        command=self.active_task_name,
                    )
                )
            self.clean_up_after_task()

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
                self.active_task = asyncio.create_task(self.update_lineplot(msg))
                self.active_task.add_done_callback(self.handle_task_exception)

            elif command == "clicked_on_panel":
                self.active_task = asyncio.create_task(self.update_lineplot(msg))
                self.active_task.add_done_callback(self.handle_task_exception)

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
                self.active_task.add_done_callback(self.handle_task_exception)
                self.active_task_name = "update_import_params"

            elif command == "browse_for_processing_folder":
                self.active_task = asyncio.create_task(
                    self.run_browse_for_processing_folder(msg)
                )

            elif command == "dials.import":
                self.active_task = asyncio.create_task(self.run_dials_import(msg))
                self.active_task_name = "update_import_params"
                self.active_task.add_done_callback(self.handle_task_exception)

            elif command == "dials.find_spots":
                self.active_task = asyncio.create_task(self.run_dials_find_spots(msg))
                self.active_task_name = command
                self.active_task.add_done_callback(self.handle_task_exception)

            elif command == "save_find_spots_phil":
                self.active_task = asyncio.create_task(self.save_find_spots_phil(msg))

            elif command == "load_find_spots_phil":
                self.active_task = asyncio.create_task(self.load_find_spots_phil(msg))

            elif command == "save_index_phil":
                self.active_task = asyncio.create_task(self.save_index_phil(msg))

            elif command == "load_index_phil":
                self.active_task = asyncio.create_task(self.load_index_phil(msg))

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
                self.active_task = asyncio.create_task(
                    self.update_integration_profiler(msg)
                )
                self.active_task.add_done_callback(self.handle_task_exception)

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
            elif command == "show_rlv_resolution_view":
                algorithm = asyncio.create_task(self.update_rlv_view(command))
            elif command == "update_experiment_viewer_debug_image":
                algorithm = asyncio.create_task(
                    self.update_experiment_viewer_debug_image(msg)
                )
            elif command == "toggle_experiment_viewer_debug":
                algorithm = asyncio.create_task(
                    self.toggle_experiment_viewer_debug(msg)
                )
            elif command == "set_experiment_viewer_debug_to_image":
                algorithm = asyncio.create_task(
                    self.set_experiment_viewer_debug_to_image()
                )
            elif command == "set_experiment_viewer_debug_to_threshold":
                algorithm = asyncio.create_task(
                    self.set_experiment_viewer_debug_to_threshold()
                )
            elif command == "toggle_experiment_viewer_sidebar":
                algorithm = asyncio.create_task(self.toggle_experiment_viewer_sidebar())
            elif command == "toggle_rlv_sidebar":
                algorithm = asyncio.create_task(self.toggle_rlv_sidebar())
            elif command == "toggle_experiment_planner_sidebar":
                algorithm = asyncio.create_task(
                    self.toggle_experiment_planner_sidebar()
                )
            elif command == "toggle_shoebox_viewer_sidebar":
                algorithm = asyncio.create_task(self.toggle_shoebox_viewer_sidebar())
            elif command == "update_integration_profiler_method":
                algorithm = asyncio.create_task(
                    self.update_integration_profiler_method(msg)
                )
            elif command == "update_rs_mapper_mesh":
                self.active_task = asyncio.create_task(self.update_reciprocal_space_mesh(msg))
                self.active_task_name = "update_rlv_params"
            elif command == "show_rlv_mesh":
                algorithm = asyncio.create_task(self.show_reciprocal_space_mesh())
            elif command == "hide_rlv_mesh":
                algorithm = asyncio.create_task(self.hide_reciprocal_space_mesh())
            elif command == "cancel_rlv_mesh":
                await self.cancel_rlv_mesh()
            elif command == "rlv_mesh_ready":
                await self.send_to_gui(
                    {"params": {"status": Status.Default.value, "progress": 100}},
                    command="update_rlv_params",
                )
                await self.send_to_gui(
                    {"params": {"progress": 0}}, command="update_rlv_params"
                )
            elif command == "highlight_reflection_rlv":
                algorithm = asyncio.create_task(self.highlight_reflection_rlv(msg))
            elif command == "clicked_reflection_rlv":
                self.active_task = asyncio.create_task(self.clicked_reflection_rlv(msg))
                self.active_task.add_done_callback(self.handle_task_exception)
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

            except websockets.ConnectionClosed as e:
                print(f"WebSocket connection closed: {e}")
                break

            except json.JSONDecodeError as e:
                print(f"Failed to decode message: {e}")
                continue

            except Exception as e:
                print(f"An error occurred handling command: {e}")
                if self.gui_connection_established():
                    asyncio.create_task(
                        self.send_to_gui({"error": str(e)}, command="display_error")
                    )
                continue

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
                        await self.send_to_gui({"params": params}, command=command)
                        sent_contents = True
                        current_contents = contents
            if self.cancel_log_stream and sent_contents:
                return
            await asyncio.sleep(0000.1)

    async def update_reciprocal_space_mesh(self, msg):
        await self.send_to_gui(
            {"params": {"status": Status.Loading.value, "progress": 5}},
            command="update_rlv_params",
        )
        if "max_resolution" in msg:
            max_resolution = float(msg["max_resolution"])
        else:
            max_resolution = 2
        if "grid_size" in msg:
            grid_size = int(msg["grid_size"])
        else:
            grid_size = 192
        data, shape, rlp_min, rlp_max, rlp_step = self.file_manager.get_rs_viewer_data(
            max_resolution=max_resolution, grid_size=grid_size
        )
        await self.send_image_data_to_rlv(
            {
                "mesh_data": data,
                "mesh_dimensions": shape,
                "rlp_min": tuple(rlp_min),
                "rlp_max": tuple(rlp_max),
                "rlp_step": rlp_step,
            },
            command="update_mesh",
        )
        await self.send_to_gui(
            {"params": {"progress": 50}}, command="update_rlv_params"
        )
        # Status is set to Default when the RLV viewer sends rlv_mesh_ready

    async def cancel_rlv_mesh(self):
        if self.active_task is not None:
            self.active_task.cancel()
            try:
                await self.active_task
            except (asyncio.CancelledError, asyncio.exceptions.CancelledError):
                pass
        self.clean_up_after_task()
        await self.send_to_rlv({}, command="cancel_mesh")
        await self.send_to_gui(
            {"params": {"status": Status.Default.value, "progress": 0}},
            command="update_rlv_params",
        )

    async def show_reciprocal_space_mesh(self):
        await self.send_to_rlv({}, command="show_mesh")

    async def hide_reciprocal_space_mesh(self):
        await self.send_to_rlv({}, command="hide_mesh")

    async def update_integration_profiler(self, msg):

        self.active_task_name = "update_integration_profiler_params"
        integration_profiler_params = {}
        integrate_params = {}

        # Clear data
        if "erase_data" in msg and msg["erase_data"]:
            integration_profiler_params["summationValue"] = 0
            integration_profiler_params["summationSigma"] = 0
            integration_profiler_params["seedSkewnessValue"] = 0
            integration_profiler_params["seedSkewnessSigma"] = 0
            integration_profiler_params["profile1DValue"] = 0
            integration_profiler_params["profile1DSigma"] = 0
            integration_profiler_params["profile3DValue"] = 0
            integration_profiler_params["profile3DSigma"] = 0
            await self.send_to_shoebox_viewer({}, command="clear_shoebox")
            await self.send_to_gui(
                {
                    "params": {
                        "shoebox2D": [],
                        "shoeboxMaskEllipse2D": [],
                        "shoeboxMaskSeedSkewness2D": [],
                        "shoeboxMaskProfile1D2D": [],
                        "shoeboxMaskProfile3D2D": [],
                        "lineProfile1D": [],
                        "lineProfile3D": [],
                    }
                },
                command="update_integration_profiler_params",
            )

        refl_id = msg["reflection_id"]

        results = self.file_manager.get_line_integration_for_reflection(refl_id, msg)
        success = results["success"]
        tof = results["tof"]
        raw_intensity = results["projected_raw_intensity"]
        projected_intensity = results["projected_corrected_intensity"]
        projected_background = results["projected_background"]
        fit_intensity = results["prf_intensity"]
        fit_sigma = results["prf_sigma"]
        summation_intensity = results["sum_intensity"]
        summation_sigma = results["sum_sigma"]
        refl = results["refl"]

        if not success:
            integration_profiler_params["status"] = "Failed"
            await self.send_to_gui(
                {"params": integration_profiler_params},
                command="update_integration_profiler_params",
            )
            return

        mask_model = msg["mask_model"]
        integration_method = msg["method"]

        integration_profiler_params["tOF"] = tof.tolist()
        integration_profiler_params["rawIntensity"] = raw_intensity.tolist()
        integration_profiler_params["intensity"] = projected_intensity.tolist()
        integration_profiler_params["background"] = projected_background.tolist()
        shoebox = refl[0]["shoebox"]
        if fit_sigma <= 0 and (
            integration_method == "profile1d" or integration_method == "profile3d"
        ):
            msg = "Failed to optimise to a non-trivial solution"
            await self.send_to_gui(
                {"params": {"userMessage": msg}}, command="update_root_params"
            )
            await self.send_to_gui(
                {
                    "params": {
                        "status": "Failed",
                    }
                },
                command="update_integration_profiler_params",
            )
            return

        if integration_method == "profile1d":
            line_profile = np.array(results["line_profile"])
            integration_profiler_params["lineProfile1D"] = tuple(line_profile)
            integration_profiler_params["profile1DValue"] = fit_intensity
            integration_profiler_params["profile1DSigma"] = fit_sigma
            _, profile_mask_data, _, profile_mask_data_2d = (
                self.file_manager.get_shoebox_mask_using_profile1d(
                    shoebox, line_profile
                )
            )
            integrate_params["profile1DAlpha"] = round(results["profile1d_alpha"], 3)
            integrate_params["profile1DBeta"] = round(results["profile1d_beta"], 3)
            integrate_params["profile1DA"] = round(results["profile1d_A"], 3)

        elif integration_method == "profile3d":
            line_profile_3d = flumpy.to_numpy(results["profile_3d"]).sum(axis=(0, 1))
            integration_profiler_params["lineProfile3D"] = tuple(line_profile_3d)
            integration_profiler_params["profile3DValue"] = fit_intensity
            integration_profiler_params["profile3DSigma"] = fit_sigma
            integrate_params["profile3DAlpha"] = round(results["profile3d_alpha"], 3)
            integrate_params["profile3DBeta"] = round(results["profile3d_beta"], 3)

        if integration_method == "summation" and mask_model == "seed_skewness":
            integration_profiler_params["seedSkewnessValue"] = summation_intensity
            integration_profiler_params["seedSkewnessSigma"] = summation_sigma
        else:
            integration_profiler_params["summationValue"] = summation_intensity
            integration_profiler_params["summationSigma"] = summation_sigma

        await self.send_to_gui(
            {"params": integration_profiler_params},
            command="update_integration_profiler_params",
        )
        await self.send_to_gui(
            {"params": integrate_params}, command="update_integrate_params"
        )

        x0, x1, y0, y1, z0, z1 = shoebox.bbox
        bbox_lengths = [z1 - z0, y1 - y0, x1 - x0]

        if integration_method == "profile3d":
            if not results["profile_3d"]:
                msg = "Failed to optimise to a non-trivial solution"
                await self.send_to_gui(
                    {"params": {"userMessage": msg}}, command="update_root_params"
                )
                await self.send_to_gui(
                    {
                        "params": {
                            "status": "Failed",
                        }
                    },
                    command="update_integration_profiler_params",
                )
                return

            profile_3d = flumpy.to_numpy(results["profile_3d"])
            profile_3d = np.transpose(profile_3d, axes=(2, 1, 0))

            _, profile_mask_data, _, profile_mask_data_2d = (
                self.file_manager.get_shoebox_mask_using_profile3d(shoebox, profile_3d)
            )
        shoebox_data, mask_data = self.file_manager.get_normalised_shoebox_data(shoebox)
        shoebox_data_2d, mask_data_2d = self.file_manager.get_shoebox_data_2d(shoebox)

        if integration_method == "profile1d" or integration_method == "profile3d":
            shoebox_viewer_msg = {
                "data": shoebox_data,
                "mask": mask_data,
                "bbox_lengths": bbox_lengths,
                "integration_method": "summation",
            }
            await self.send_to_shoebox_viewer(
                shoebox_viewer_msg, command="update_reflection"
            )
            shoebox_viewer_msg = {
                "data": shoebox_data,
                "mask": profile_mask_data,
                "bbox_lengths": bbox_lengths,
                "integration_method": integration_method,
            }
            await self.send_to_shoebox_viewer(
                shoebox_viewer_msg, command="update_reflection"
            )
        else:
            shoebox_viewer_msg = {
                "data": shoebox_data,
                "mask": mask_data,
                "bbox_lengths": bbox_lengths,
                "integration_method": integration_method,
            }
            await self.send_to_shoebox_viewer(
                shoebox_viewer_msg, command="update_reflection"
            )
        if integration_method == "seed_skewness":
            await self.send_to_gui(
                {
                    "params": {
                        "shoebox2D": shoebox_data_2d,
                        "shoeboxMaskSeedSkewness2D": mask_data_2d,
                    }
                },
                command="update_integration_profiler_params",
            )
        elif integration_method == "profile1d":
            await self.send_to_gui(
                {
                    "params": {
                        "shoebox2D": shoebox_data_2d,
                        "shoeboxMaskProfile1D2D": profile_mask_data_2d,
                        "shoeboxMaskEllipse2D": mask_data_2d,
                    }
                },
                command="update_integration_profiler_params",
            )
        elif integration_method == "profile3d":
            await self.send_to_gui(
                {
                    "params": {
                        "shoebox2D": shoebox_data_2d,
                        "shoeboxMaskProfile3D2D": profile_mask_data_2d,
                        "shoeboxMaskEllipse2D": mask_data_2d,
                    }
                },
                command="update_integration_profiler_params",
            )
        else:
            await self.send_to_gui(
                {
                    "params": {
                        "shoebox2D": shoebox_data_2d,
                        "shoeboxMaskEllipse2D": mask_data_2d,
                    }
                },
                command="update_integration_profiler_params",
            )

    async def update_lineplot(self, msg):
        await self.send_to_experiment_viewer(
            {"expt_id": msg["expt_id"]}, command="select_expt"
        )
        coords = (int(msg["panel_pos"][0]), int(msg["panel_pos"][1]))
        print(f"{msg=}")
        reflection_type = "observed"
        if "type" in msg:
            reflection_type = msg["type"]
        x, y, bbox_pos, centroid_pos = await self.file_manager.get_lineplot_data(
            int(msg["panel_idx"]), coords, int(msg["expt_id"]), reflection_type
        )

        root_params = {}

        if len(centroid_pos) > 0:
            root_params["selectedReflectionID"] = centroid_pos[0]["id"]

        experiment_viewer_params = {
            "lineplot": {
                "x": x,
                "y": y,
            },
            "bboxPos": bbox_pos,
            "centroidPos": centroid_pos,
            "title": f"{msg['name']} {coords}",
        }

        if "expt_id" in msg:
            root_params["selectedReflectionTableExptID"] = msg["expt_id"]

        if "remove_reflection" in msg and msg["remove_reflection"] is True:
            await self.send_to_gui(
                {"params": experiment_viewer_params},
                command="update_experiment_viewer_params",
            )
            return

        await self.send_to_gui(
            {"params": experiment_viewer_params},
            command="update_experiment_viewer_params",
        )
        await self.send_to_gui({"params": root_params}, command="update_root_params")

        if "highlight_on_panel" in msg and msg["highlight_on_panel"] is True:
            experiment_viewer_msg = {
                "name": msg["name"],
                "panelIdx": msg["panel_idx"],
                "panelPos": msg["panel_pos"],
            }
            await self.send_to_experiment_viewer(
                experiment_viewer_msg, command="highlight_reflection"
            )

            if "reflection_id" in msg:
                rlp = self.file_manager.get_rlp_for_reflection(
                    int(msg["reflection_id"])
                )
                if rlp is not None:
                    await self.send_to_rlv({"rlp": rlp}, command="highlight_reflection")

        if "update_integration_profiler" in msg and msg["update_integration_profiler"]:
            assert "reflection_id" in msg
            await self.update_integration_profiler(msg)

    async def clicked_reflection_rlv(self, msg):
        rlp = msg["rlp"]
        expt_id = int(msg["expt_id"])
        refl_info = self.file_manager.find_reflection_by_rlp(rlp, expt_id)
        if refl_info is None:
            return
        lineplot_msg = {
            "channel": "server",
            "command": "update_lineplot",
            "panel_idx": refl_info["panel_idx"],
            "panel_pos": refl_info["panel_pos"],
            "name": refl_info["panel_name"],
            "expt_id": expt_id,
            "highlight_on_panel": True,
            "reflection_id": refl_info["idx"],
        }
        await self.update_lineplot(lineplot_msg)

    async def highlight_reflection_rlv(self, msg):
        if "reflection_id" not in msg:
            return
        rlp = self.file_manager.get_rlp_for_reflection(int(msg["reflection_id"]))
        if rlp is not None:
            await self.send_to_rlv({"rlp": rlp}, command="highlight_reflection")

    async def remove_reflection(self, msg):
        assert "reflection_id" in msg
        reflection_type = "observed"
        if "type" in msg:
            reflection_type = msg["type"]
        self.file_manager.remove_reflection(int(msg["reflection_id"]), reflection_type)
        has_calculated_integrated_reflections = (
            "has_calculated_integrated_reflections" in msg
            and msg["has_calculated_integrated_reflections"]
        )
        if has_calculated_integrated_reflections:
            summary = self.file_manager.get_integrated_reflections_summary(
                integration_type="calculated"
            )
        else:
            summary = self.file_manager.get_reflections_summary()

        refl_data = self.file_manager.get_reflections_per_panel()
        reflection_table = self.file_manager.get_reflection_table()
        await self.send_to_experiment_viewer(
            refl_data, command="update_reflection_table"
        )

        gui_msg = {"reflection_table": refl_data, "reflections_summary": summary}
        if has_calculated_integrated_reflections:
            if (
                reflection_type == "calculated"
            ):  # calculated integrated reflections have changed
                calculated_refl_data = (
                    self.file_manager.get_integrated_reflections_per_panel(
                        integration_type="calculated"
                    )
                )
                calculated_reflection_table = (
                    self.file_manager.get_integrated_reflections_msgpack(
                        integration_type="calculated"
                    )
                )
                gui_msg["calculated_reflection_table"] = calculated_refl_data
                await self.send_to_experiment_viewer(
                    {"refl_msgpack": calculated_reflection_table},
                    command="update_calculated_integrated_reflection_table",
                )
                await self.send_to_rlv(
                    {"refl_msgpack": calculated_reflection_table},
                    command="update_calculated_integrated_reflection_table",
                )

        await self.send_to_rlv(
            {"refl_msgpack": reflection_table}, command="update_reflection_table"
        )
        await self.send_to_experiment_viewer(
            {"refl_msgpack": reflection_table}, command="update_reflection_table"
        )
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
        reflection_table = self.file_manager.get_reflection_table_msgpack()
        summary = self.file_manager.get_reflections_summary()
        gui_msg = {"reflection_table": refl_data, "reflections_summary": summary}
        await self.send_to_gui(gui_msg, command="update_reflection_table")

        await self.send_to_experiment_viewer(
            {"refl_msgpack": reflection_table}, command="update_reflection_table"
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

        await self.send_to_rlv(
            {"refl_msgpack": reflection_table}, command="update_reflection_table"
        )

    async def run_browse_file(self, msg):

        app = wx.App(False)
        dialog = wx.FileDialog(
            None, "Select files", wildcard="*.*", style=wx.FD_OPEN | wx.FD_MULTIPLE
        )

        if dialog.ShowModal() == wx.ID_OK:
            filenames = dialog.GetPaths()
            if filenames is not None and filenames != "" and len(filenames) == 1:
                integrate_params = {msg["update_param"]: filenames[0]}
                await self.send_to_gui(
                    {"params": integrate_params}, command="update_integrate_params"
                )
        dialog.Destroy()
        app.Destroy()

    async def run_browse_files_for_import(self, msg):
        app = wx.App(False)
        dialog = wx.FileDialog(
            None, "Select files", wildcard="*.*", style=wx.FD_OPEN | wx.FD_MULTIPLE
        )

        if dialog.ShowModal() == wx.ID_OK:
            filenames = dialog.GetPaths()
            if filenames:
                msg["filenames"] = filenames
                await self.run_dials_import(msg)
            else:
                await self.send_to_gui(
                    {"params": {"browseImagesEnabled": True}},
                    command="update_import_params",
                )
        else:
            await self.send_to_gui(
                {"params": {"browseImagesEnabled": True}},
                command="update_import_params",
            )
        dialog.Destroy()
        app.Destroy()

    async def run_browse_for_processing_folder(self, msg):

        app = wx.App(False)
        dialog = wx.DirDialog(
            None,
            "Select a folder for processing",
            style=wx.DD_DEFAULT_STYLE | wx.DD_DIR_MUST_EXIST,
        )

        if dialog.ShowModal() == wx.ID_OK:
            selected_folder = dialog.GetPath()
            if selected_folder:
                self.processing_dir = selected_folder
                await self.send_to_gui(
                    {"params": {"processingDir": selected_folder}},
                    command="update_root_params",
                )
                await self.send_to_gui(
                    {"params": {"browseImagesEnabled": True}},
                    command="update_import_params",
                )
            else:
                await self.send_to_gui(
                    {"params": {"browseImagesEnabled": True}},
                    command="update_import_params",
                )

        dialog.Destroy()
        app.Destroy()

    async def run_browse_processing_folder_for_import(self, msg):

        app = wx.App(False)
        dialog = wx.DirDialog(
            None,
            "Select a folder for processing",
            style=wx.DD_DEFAULT_STYLE | wx.DD_DIR_MUST_EXIST,
        )

        if dialog.ShowModal() == wx.ID_OK:
            selected_folder = dialog.GetPath()
            if selected_folder:
                msg["folder"] = selected_folder
                await self.run_dials_import_processing_folder(msg)
            else:
                await self.send_to_gui(
                    {"params": {"browseImagesEnabled": True}},
                    command="update_import_params",
                )
        else:
            await self.send_to_gui(
                {"params": {"browseImagesEnabled": True}},
                command="update_import_params",
            )
        dialog.Destroy()
        app.Destroy()

    async def clear_experiment(self):
        await self.send_to_gui({}, command="clear_experiment")
        await self.send_to_experiment_viewer({}, command="clear_experiment")
        await self.send_to_rlv({}, command="clear_experiment")
        await self.send_to_experiment_planner({}, command="clear_experiment")
        await self.send_to_shoebox_viewer({}, command="clear_shoebox")

    async def run_dials_import(self, msg):

        await self.clear_experiment()
        await self.send_to_gui(
            {"params": {"status": Status.Loading.value}}, command="update_import_params"
        )

        self.file_manager.add_active_file(msg, self.processing_dir)
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

        try:
            await self.active_task_algorithm.task
        except Exception as e:
            await self.send_to_gui(
                {"params": {"log": e.__str__(), "status": "Failed"}},
                command="update_import_params",
            )
            return

        algorithm_status = self.file_manager.last_algorithm_status()

        if algorithm_status == AlgorithmStatus.failed:
            log = self.file_manager.get_algorithm_log(AlgorithmType.dials_import)
            await self.send_to_gui(
                {"params": {"log": log, "status": "Failed"}},
                command="update_import_params",
            )
            return

        if algorithm_status == AlgorithmStatus.cancelled:
            self.clean_up_after_task()
            return

        output_params = self.file_manager.get_output_params(AlgorithmType.dials_import)

        if (
            algorithm_status == AlgorithmStatus.finished
            and "update_root_params" in output_params
        ):
            output_params["update_root_params"]["openFileKeys"] = (
                self.file_manager.get_open_file_keys()
            )
            output_params["update_root_params"]["currentFileKey"] = (
                self.file_manager.get_current_file_key()
            )

        for update_params_command in output_params:
            await self.send_to_gui(
                {"params": output_params[update_params_command]},
                command=update_params_command,
            )

        if algorithm_status == AlgorithmStatus.finished:
            await self.send_to_gui(
                {"params": {"status": "Loading"}},
                command="update_experiment_viewer_params",
            )

            # First send experiment details
            experiment_viewer_msg = {"expt": self.file_manager.get_expt_json()}
            await self.send_to_experiment_viewer(
                experiment_viewer_msg, command="update_experiment"
            )

            # Send images one panel at a time
            image_dimensions = self.file_manager.get_panel_sizes()
            num_experiments = self.file_manager.get_num_experiments()
            for expt_id in range(num_experiments):
                expt_image_data = self.file_manager.get_flattened_image_data(
                    expt_id=expt_id
                )
                for panel_idx, panel_image_data in enumerate(expt_image_data):
                    await self.send_image_data_to_experiment_viewer(
                        {
                            "image_data": panel_image_data,
                            "panel_idx": panel_idx,
                            "expt_id": expt_id,
                            "image_dimensions": image_dimensions,
                        },
                        command="add_panel_image_data",
                    )
                progress = min(int((expt_id + 1) / num_experiments * 100), 99)
                await self.send_to_gui(
                    {"params": {"progress": progress}},
                    command="update_experiment_viewer_params",
                )

            await self.send_to_gui(
                {"params": {"status": "Default", "progress": 0}},
                command="update_experiment_viewer_params",
            )

            rlv_msg = experiment_viewer_msg["expt"]
            await self.send_to_rlv(rlv_msg, command="new_experiment")

        self.clean_up_after_task()

    async def load_active_state(self):

        if self.file_manager.selected_file is None:
            return

        last_successful_command = self.file_manager.get_last_successful_command()
        assert last_successful_command is not None, (
            "Setting up state from last successful command but command is None"
        )

        root_params = {}
        import_params = {}
        find_spots_params = {}
        index_params = {}
        refine_params = {}
        integrate_params = {}
        rlv_params = {}
        experiment_planner_params = {}
        integration_profiler_params = {}

        refl_data = None
        reflection_table = None

        import_params["instrumentName"] = self.file_manager.get_instrument_name()
        import_params["experimentDescription"] = (
            self.file_manager.get_experiment_description()
        )
        import_params["log"] = self.file_manager.get_algorithm_log(
            AlgorithmType.dials_import
        )

        root_params["openFileKeys"] = self.file_manager.get_open_file_keys()
        root_params["currentFileKey"] = self.file_manager.get_current_file_key()
        root_params["numExperiments"] = self.file_manager.get_num_experiments()
        root_params["experimentNames"] = self.file_manager.get_experiment_names()

        try:
            min_tof, max_tof, step_tof = self.file_manager.get_tof_range()
            find_spots_params["minTOF"] = min_tof
            find_spots_params["maxTOF"] = max_tof
            find_spots_params["stepTOF"] = step_tof
        except KeyError:
            pass
        find_spots_params["enabled"] = True

        if last_successful_command != "dials.import":
            find_spots_params["log"] = self.file_manager.get_algorithm_log(
                AlgorithmType.dials_find_spots
            )
            rlv_params["enabled"] = True
            index_params["enabled"] = True
            if last_successful_command == "dials.tof_integrate":
                integrate_params["exportEnabled"] = True
                if self.file_manager.last_integration_using_calculated():
                    integration_type = "calculated"
                else:
                    integration_type = "observed"

                integrated_refl_data = (
                    self.file_manager.get_integrated_reflections_per_panel(
                        integration_type=integration_type
                    )
                )
                integrated_refl_table = (
                    self.file_manager.get_integrated_reflections_msgpack(
                        integration_type=integration_type
                    )
                )
                integrate_params["log"] = self.file_manager.get_algorithm_log(
                    AlgorithmType.dials_integrate
                )
                if integration_type == "calculated":
                    root_params["calculatedReflectionTable"] = integrated_refl_data
                    root_params["calculatedReflectionTableMsgpack"] = (
                        integrated_refl_table
                    )
                    refl_data = self.file_manager.get_reflections_per_panel()
                    reflection_table = self.file_manager.get_reflection_table_msgpack()
                    root_params["reflectionTable"] = refl_data
                    root_params["reflectionTableMsgpack"] = reflection_table
                else:
                    root_params["reflectionTable"] = integrated_refl_data
                    root_params["reflectionTableMsgpack"] = integrated_refl_table
                    refl_data = integrated_refl_data
                    reflection_table = integrated_refl_table

                import_params["reflectionsSummary"] = (
                    self.file_manager.get_integrated_reflections_summary(
                        integration_type=integration_type
                    )
                )

            else:
                import_params["reflectionsSummary"] = (
                    self.file_manager.get_reflections_summary()
                )
                refl_data = self.file_manager.get_reflections_per_panel()
                reflection_table = self.file_manager.get_reflection_table_msgpack()

                root_params["reflectionTable"] = refl_data
                root_params["reflectionTableMsgpack"] = reflection_table

        if last_successful_command in (
            "dials.index",
            "dials.refine",
            "dials.tof_integrate",
        ):
            index_params["log"] = self.file_manager.get_algorithm_log(
                AlgorithmType.dials_index
            )
            refine_params["log"] = self.file_manager.get_algorithm_log(
                AlgorithmType.dials_refine
            )
            import_params["crystalSummary"] = self.file_manager.get_crystal_summary()
            index_params["crystalIDs"] = list(
                range(len(import_params["crystalSummary"]))
            )
            index_params["detectSymmetryEnabled"] = True
            experiment_planner_params["enabled"] = True
            refine_params["enabled"] = True
            if last_successful_command != "dials.index":
                integration_profiler_params["enabled"] = True
                integrate_params["enabled"] = True

        await self.send_to_gui({"params": root_params}, command="update_root_params")
        await self.send_to_gui(
            {"params": import_params}, command="update_import_params"
        )
        await self.send_to_gui(
            {"params": find_spots_params}, command="update_find_spots_params"
        )
        await self.send_to_gui({"params": index_params}, command="update_index_params")
        await self.send_to_gui(
            {"params": refine_params}, command="update_refine_params"
        )
        await self.send_to_gui(
            {"params": integrate_params}, command="update_integrate_params"
        )
        await self.send_to_gui({"params": rlv_params}, command="update_rlv_params")
        await self.send_to_gui(
            {"params": experiment_planner_params},
            command="update_experiment_planner_params",
        )
        await self.send_to_gui(
            {"params": integration_profiler_params},
            command="update_integration_profiler_params",
        )

        await self.send_to_gui(
            {"params": {"status": Status.Loading.value}},
            command="update_experiment_viewer_params",
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
                {"refl_msgpack": reflection_table}, command="update_reflection_table"
            )
            await self.send_to_rlv(expt, command="update_experiment")
            await self.send_to_rlv(
                {"refl_msgpack": reflection_table}, command="update_reflection_table"
            )

        if "calculatedReflectionTable" in root_params:
            await self.send_to_rlv(
                root_params["calculatedReflectionTable"],
                command="update_calculated_integrated_reflection_table",
            )

            await self.send_to_experiment_viewer(
                {"refl_msgpack": root_params["calculatedReflectionTableMsgpack"]},
                command="update_calculated_integrated_reflection_table",
            )

        # Send images one panel at a time
        image_dimensions = self.file_manager.get_panel_sizes()
        for expt_id in range(self.file_manager.get_num_experiments()):
            t_fetch = time.perf_counter()
            expt_image_data = self.file_manager.get_flattened_image_data(
                expt_id=expt_id
            )
            print(
                f"[timing] get_flattened_image_data expt {expt_id}: {time.perf_counter() - t_fetch:.3f}s"
            )
            t_send = time.perf_counter()
            for panel_idx, panel_image_data in enumerate(expt_image_data):
                await self.send_image_data_to_experiment_viewer(
                    {
                        "image_data": panel_image_data,
                        "panel_idx": panel_idx,
                        "expt_id": expt_id,
                        "image_dimensions": image_dimensions,
                    },
                    command="add_panel_image_data",
                )
            print(
                f"[timing] send {len(expt_image_data)} panels expt {expt_id}: {time.perf_counter() - t_send:.3f}s"
            )

        await self.send_to_gui(
            {"params": {"status": Status.Default.value}},
            command="update_experiment_viewer_params",
        )

    async def run_dials_import_processing_folder(self, msg):
        await self.clear_experiment()
        if "softwareBackend" in msg:
            software_backend = msg["softwareBackend"]
        else:
            software_backend = "DIALS"

        self.file_manager.add_active_processing_folder(msg["folder"], software_backend)
        await self.load_active_state()

    @staticmethod
    def _find_spots_progress_parser(contents: str, num_imagesets: int) -> int | None:
        sections = re.split(r"Finding strong spots in imageset \d+", contents)
        active_sections = sections[1:] if len(sections) > 1 else sections

        # Use first total to compute the overall total
        images_per_imageset = None
        for section in active_sections:
            total_match = re.search(r"Finding spots in image \d+ to (\d+)", section)
            if total_match:
                images_per_imageset = int(total_match.group(1))
                break

        if images_per_imageset is None or images_per_imageset == 0:
            return None

        grand_total = images_per_imageset * num_imagesets
        images_processed = 0

        for i, section in enumerate(active_sections):
            is_last_section = i == len(active_sections) - 1
            if is_last_section:
                image_matches = re.findall(
                    r"Found \d+ strong pixels on image (\d+)", section
                )
                images_processed += int(image_matches[-1]) if image_matches else 0
            else:
                images_processed += images_per_imageset

        return min(int(images_processed / grand_total * 100), 99)

    async def run_dials_find_spots(self, msg):

        args = {}
        if "args" in msg:
            args = msg["args"]

        log_filename = "dials.find_spots.log"

        num_imagesets = len(self.file_manager.get_imageset_ids())
        progress_parser = lambda contents: self._find_spots_progress_parser(
            contents, num_imagesets
        )

        self.setup_task(
            algorithm_type=AlgorithmType.dials_find_spots,
            log_filename=log_filename,
            algorithm_args=args,
            progress_parser=progress_parser,
        )
        self.active_task_algorithm = DIALSTask(
            "update_find_spots_params",
            asyncio.create_task(self.file_manager.run(AlgorithmType.dials_find_spots)),
        )

        await self.active_task_algorithm.task

        algorithm_status = self.file_manager.last_algorithm_status()
        if algorithm_status == AlgorithmStatus.cancelled:
            self.clean_up_after_task()
            return

        output_params = self.file_manager.get_output_params(
            AlgorithmType.dials_find_spots
        )

        if "update_find_spots_params" in output_params:
            output_params["update_find_spots_params"]["progress"] = 0

        for update_params_command in output_params:
            await self.send_to_gui(
                {"params": output_params[update_params_command]},
                command=update_params_command,
            )

        if algorithm_status == AlgorithmStatus.finished:
            reflection_table_msgpack = output_params["update_root_params"][
                "reflectionTableMsgpack"
            ]

            await self.send_to_experiment_viewer(
                {"refl_msgpack": reflection_table_msgpack},
                command="update_reflection_table",
            )
            await self.send_to_rlv(
                {"refl_msgpack": reflection_table_msgpack},
                command="update_reflection_table",
            )

        self.clean_up_after_task()

    async def run_dials_index(self, msg):

        args = {}
        if "args" in msg:
            args = msg["args"]

        log_filename = "dials.index.log"

        self.setup_task(
            algorithm_type=AlgorithmType.dials_index,
            log_filename=log_filename,
            algorithm_args=args,
        )
        self.active_task_algorithm = DIALSTask(
            "update_index_params",
            asyncio.create_task(self.file_manager.run(AlgorithmType.dials_index)),
        )

        try:
            await self.active_task_algorithm.task
        except Exception as e:
            await self.send_to_gui(
                {"params": {"log": e.__str__(), "status": "Failed"}},
                command="update_index_params",
            )
            return

        algorithm_status = self.file_manager.last_algorithm_status()

        if algorithm_status == AlgorithmStatus.failed:
            log = self.file_manager.get_algorithm_log(AlgorithmType.dials_index)
            await self.send_to_gui(
                {"params": {"log": log, "status": "Failed"}},
                command="update_index_params",
            )
            return

        if algorithm_status == AlgorithmStatus.cancelled:
            self.clean_up_after_task()
            return

        output_params = self.file_manager.get_output_params(AlgorithmType.dials_index)

        for update_params_command in output_params:
            await self.send_to_gui(
                {"params": output_params[update_params_command]},
                command=update_params_command,
            )

        if algorithm_status == AlgorithmStatus.finished:
            reflection_table_msgpack = output_params["update_root_params"][
                "reflectionTableMsgpack"
            ]

            await self.send_to_experiment_viewer(
                {"refl_msgpack": reflection_table_msgpack},
                command="update_reflection_table",
            )

            expt = self.file_manager.get_expt_json()
            await self.send_to_rlv(expt, command="update_experiment")
            await self.send_to_rlv(
                {"refl_msgpack": reflection_table_msgpack},
                command="update_reflection_table",
            )

        self.clean_up_after_task()

    async def populate_experiment_planner(self, dmin=None):

        await self.send_to_gui(
            {
                "params": {
                    "status": Status.Loading.value,
                    "orientations": [],
                    "predReflections": [],
                }
            },
            command="updating_experiment_planner_params",
        )

        max_expt_predicted_reflections = 1e5
        await self.send_to_experiment_planner({}, command="clear_experiment")
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

            if len(asu_p_refl) > max_expt_predicted_reflections:
                await self.send_to_experiment_planner(
                    {
                        "error": "Error: Predicted reflections > maximum allowed number. Try increasing dmin"
                    },
                    command="display_error",
                )
                await self.send_to_gui(
                    {
                        "params": {
                            "status": Status.Default.value,
                        }
                    },
                    command="updating_experiment_planner_params",
                )
                return

            if total_asu_refl is None:
                total_asu_refl = asu_refl
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
                    "expt_ids": [i],
                    "predicted_num_reflections": filtered_p_num_reflections,
                    "completeness": [expt_completeness],
                }

            else:
                for p in filtered_asu_p_refl_data:
                    if p in reflections_by_phi[phi]["predicted_refl_data"]:
                        reflections_by_phi[phi]["predicted_refl_data"][p] += (
                            filtered_asu_p_refl_data[p]
                        )
                    else:
                        reflections_by_phi[phi]["predicted_refl_data"][p] = (
                            filtered_asu_p_refl_data[p]
                        )
                reflections_by_phi[phi]["expt_ids"].append(i)
                reflections_by_phi[phi]["predicted_num_reflections"] += (
                    filtered_p_num_reflections
                )
                reflections_by_phi[phi]["completeness"].append(expt_completeness)

        for phi in reflections_by_phi:
            await self.send_to_experiment_planner(
                {
                    "refl_data": [],
                    "expt_ids": reflections_by_phi[phi]["expt_ids"],
                    "phi": phi,
                    "predicted_refl_data": reflections_by_phi[phi][
                        "predicted_refl_data"
                    ],
                },
                command="add_exp_orientation",
            )

            await self.send_to_gui(
                {
                    "params": {
                        "addEntry": (
                            phi,
                            reflections_by_phi[phi]["predicted_num_reflections"],
                            sum(reflections_by_phi[phi]["completeness"])
                            / len(reflections_by_phi[phi]["completeness"]),
                        ),
                    }
                },
                command="update_experiment_planner_params",
            )

        self.file_manager.update_experiment_planner_params(
            "num_stored_orientations", len(reflections_by_phi)
        )
        self.file_manager.update_experiment_planner_params(
            "current_miller_indices", all_predicted_miller_indices
        )

        await self.send_to_gui(
            {"params": {"status": Status.Default.value}},
            command="update_experiment_planner_params",
        )

    async def run_dials_refine_bravais_settings(self, msg):
        args = {}
        if "args" in msg:
            args = msg["args"]

        log_filename = "dials.refine_bravais_settings.log"

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

        algorithm_status = self.file_manager.last_algorithm_status()
        if algorithm_status == AlgorithmStatus.cancelled:
            self.clean_up_after_task()
            return

        output_params = self.file_manager.get_output_params(
            AlgorithmType.dials_refine_bravais_settings
        )

        for update_params_command in output_params:
            await self.send_to_gui(
                {"params": output_params[update_params_command]},
                command=update_params_command,
            )
        self.clean_up_after_task()

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

        output_params = self.file_manager.get_output_params(AlgorithmType.dials_reindex)

        for update_params_command in output_params:
            await self.send_to_gui(
                {"params": output_params[update_params_command]},
                command=update_params_command,
            )

        refl_data = output_params["update_root_params"]["reflectionTable"]
        reflection_table_msgpack = output_params["update_root_params"][
            "reflectionTableMsgpack"
        ]
        await self.send_to_experiment_viewer(
            {"refl_msgpack": reflection_table_msgpack},
            command="update_reflection_table",
        )

        expt = self.file_manager.get_expt_json()
        expt["reindexed_cell"] = True
        await self.send_to_rlv(expt, command="update_experiment")

        await self.send_to_rlv(
            {"refl_msgpack": reflection_table_msgpack},
            command="update_reflection_table",
        )

    async def run_dials_refine(self, msg):
        args = {}
        if "args" in msg:
            args = msg["args"]

        log_filename = "dials.refine.log"

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

        algorithm_status = self.file_manager.last_algorithm_status()
        if algorithm_status == AlgorithmStatus.cancelled:
            self.clean_up_after_task()
            return

        output_params = self.file_manager.get_output_params(AlgorithmType.dials_refine)

        for update_params_command in output_params:
            await self.send_to_gui(
                {"params": output_params[update_params_command]},
                command=update_params_command,
            )

        if algorithm_status == AlgorithmStatus.finished:
            refl_data = output_params["update_root_params"]["reflectionTable"]
            reflection_table_msgpack = output_params["update_root_params"][
                "reflectionTableMsgpack"
            ]
            await self.send_to_experiment_viewer(
                {"refl_msgpack": reflection_table_msgpack},
                command="update_reflection_table",
            )

            expt = self.file_manager.get_expt_json()
            await self.send_to_rlv(expt, command="update_experiment")
            await self.send_to_rlv(
                {"refl_msgpack": reflection_table_msgpack},
                command="update_reflection_table",
            )
        self.clean_up_after_task()

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
            "target_spectrum.absorption_x_section",
        ]
        for p in absorption_params:
            if p in args and args[p] == "":
                log = (
                    f"Spherical absorption correction is selected but {p} has no value."
                )
                gui_msg = {"log": log}
                gui_msg["success"] = False
                await self.send_to_gui(gui_msg, command="update_integrate_params")
                return

        self.setup_task(
            algorithm_type=AlgorithmType.dials_integrate,
            log_filename=log_filename,
            algorithm_args=args,
        )
        self.active_task_algorithm = DIALSTask(
            "update_integrate_params",
            asyncio.create_task(self.file_manager.run(AlgorithmType.dials_integrate)),
        )

        await self.active_task_algorithm.task

        algorithm_status = self.file_manager.last_algorithm_status()
        if algorithm_status == AlgorithmStatus.cancelled:
            self.clean_up_after_task()
            return

        output_params = self.file_manager.get_output_params(
            AlgorithmType.dials_integrate, integration_type=integration_type
        )

        for update_params_command in output_params:
            await self.send_to_gui(
                {"params": output_params[update_params_command]},
                command=update_params_command,
            )

        if algorithm_status == AlgorithmStatus.finished:
            if integration_type == "calculated":
                reflection_table_msgpack = output_params["update_root_params"][
                    "calculatedReflectionTableMsgpack"
                ]
                await self.send_to_experiment_viewer(
                    {"refl_msgpack": reflection_table_msgpack},
                    command="update_calculated_integrated_reflection_table",
                )
                await self.send_to_rlv(
                    {"refl_msgpack": reflection_table_msgpack},
                    command="update_calculated_integrated_reflection_table",
                )

            else:
                reflection_table_msgpack = output_params["update_root_params"][
                    "reflectionTableMsgpack"
                ]
                await self.send_to_experiment_viewer(
                    {"refl_msgpack": reflection_table_msgpack},
                    command="update_reflection_table",
                )
                await self.send_to_rlv(
                    {"refl_msgpack": reflection_table_msgpack},
                    command="update_reflection_table",
                )
        self.clean_up_after_task()

    async def save_hkl_file(self, msg):

        app = wx.App(False)

        dialog = wx.FileDialog(
            None,
            message="Save file as",
            wildcard="All files (*.*)|*.*",
            style=wx.FD_SAVE | wx.FD_OVERWRITE_PROMPT,
        )

        dialog.SetWildcard("All files (*.*)|*.*|HKL files (*.hkl)|*.hkl")
        dialog.SetFilename("untitled.hkl")

        filename = None
        if dialog.ShowModal() == wx.ID_OK:
            filename = dialog.GetPath()

        dialog.Destroy()
        app.Destroy()

        try:
            min_partiality = float(msg["min_partiality"])
        except ValueError:
            min_partiality = None
        try:
            min_i_sigma = float(msg["min_i_sigma"])
        except ValueError:
            min_i_sigma = None

        if filename:
            self.file_manager.save_hkl_file(filename, min_partiality, min_i_sigma)
            msg = f"Saved .hkl file to {filename}"
            await self.send_to_gui(
                {"params": {"userMessage": msg}}, command="update_root_params"
            )

    # Maps flat/nested Phil keys to FindSpotsContext camelCase param names
    _FIND_SPOTS_PHIL_MAP: dict[str, str] = {
        "threshold.algorithm":                              "algorithm",
        "spotfinder.threshold.algorithm":                  "algorithm",
        "gain":                                            "gain",
        "spotfinder.threshold.dispersion.gain":            "gain",
        "sigma_strong":                                    "sigmaStrong",
        "spotfinder.threshold.dispersion.sigma_strong":    "sigmaStrong",
        "sigma_background":                                "sigmaBackground",
        "spotfinder.threshold.dispersion.sigma_background":"sigmaBackground",
        "global_threshold":                                "globalThreshold",
        "spotfinder.threshold.dispersion.global_threshold":"globalThreshold",
        "kernel_size":                                     "kernelSize",
        "spotfinder.threshold.dispersion.kernel_size":     "kernelSize",
        "min_local":                                       "minLocal",
        "spotfinder.threshold.dispersion.min_local":       "minLocal",
        "radial_profile.n_iqr":                            "iQR",
        "spotfinder.threshold.radial_profile.n_iqr":       "iQR",
        "radial_profile.n_bins":                           "nBins",
        "spotfinder.threshold.radial_profile.n_bins":      "nBins",
        "radial_profile.blur":                             "blur",
        "spotfinder.threshold.radial_profile.blur":        "blur",
    }

    @staticmethod
    def _parse_phil(content: str) -> dict[str, str]:
        """Flatten nested Phil content to {dotted.key: value}."""
        result = {}
        scope_stack = []
        for line in content.splitlines():
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if line.endswith("{"):
                scope_stack.append(line[:-1].strip())
            elif line == "}":
                if scope_stack:
                    scope_stack.pop()
            elif "=" in line:
                key, _, value = line.partition("=")
                key = key.strip()
                value = value.strip()
                # Strip leading * used by Phil to mark the selected enum value
                if value.startswith("*"):
                    value = value[1:]
                full_key = ".".join(scope_stack + [key]) if scope_stack else key
                result[full_key] = value
        return result

    async def save_find_spots_phil(self, msg):
        app = wx.App(False)
        dialog = wx.FileDialog(
            None,
            message="Save find_spots Phil file",
            wildcard="Phil files (*.phil)|*.phil|All files (*.*)|*.*",
            style=wx.FD_SAVE | wx.FD_OVERWRITE_PROMPT,
        )
        dialog.SetFilename("find_spots.phil")

        if dialog.ShowModal() == wx.ID_OK:
            filepath = dialog.GetPath()
            with open(filepath, "w") as f:
                f.write(msg["content"])
            await self.send_to_gui(
                {"params": {"userMessage": f"Saved Phil file to {filepath}"}},
                command="update_root_params",
            )

        dialog.Destroy()
        app.Destroy()

    async def load_find_spots_phil(self, msg):
        app = wx.App(False)
        dialog = wx.FileDialog(
            None,
            "Select Phil file",
            wildcard="Phil files (*.phil)|*.phil|All files (*.*)|*.*",
            style=wx.FD_OPEN,
        )

        if dialog.ShowModal() == wx.ID_OK:
            filepath = dialog.GetPath()
            with open(filepath, "r") as f:
                content = f.read()

            flat = self._parse_phil(content)
            params = {}
            advanced_parts = []

            for phil_key, value in flat.items():
                if phil_key in self._FIND_SPOTS_PHIL_MAP:
                    params[self._FIND_SPOTS_PHIL_MAP[phil_key]] = value
                else:
                    advanced_parts.append(f"{phil_key}={value}")

            params["advancedOptions"] = " ".join(advanced_parts)
            await self.send_to_gui(
                {"params": params}, command="update_find_spots_params"
            )

        dialog.Destroy()
        app.Destroy()

    # Maps flat/nested Phil keys to IndexContext camelCase param names
    _INDEX_PHIL_MAP: dict[str, str] = {
        "indexing.method":                                      "indexingMethod",
        "method":                                               "indexingMethod",
        "indexing.known_symmetry.space_group":                  "initialSpacegroup",
        "known_symmetry.space_group":                           "initialSpacegroup",
        "space_group":                                          "initialSpacegroup",
        "indexing.known_symmetry.unit_cell":                    "initialUnitCell",
        "known_symmetry.unit_cell":                             "initialUnitCell",
        "unit_cell":                                            "initialUnitCell",
        "indexing.index_assignment.simple.hkl_tolerance":       "hKLTolerance",
        "index_assignment.simple.hkl_tolerance":                "hKLTolerance",
        "hkl_tolerance":                                        "hKLTolerance",
        "refinement.reflections.outlier.algorithm":             "outlierAlgorithm",
        "reflections.outlier.algorithm":                        "outlierAlgorithm",
    }

    async def save_index_phil(self, msg):
        app = wx.App(False)
        dialog = wx.FileDialog(
            None,
            message="Save index Phil file",
            wildcard="Phil files (*.phil)|*.phil|All files (*.*)|*.*",
            style=wx.FD_SAVE | wx.FD_OVERWRITE_PROMPT,
        )
        dialog.SetFilename("index.phil")

        if dialog.ShowModal() == wx.ID_OK:
            filepath = dialog.GetPath()
            with open(filepath, "w") as f:
                f.write(msg["content"])
            await self.send_to_gui(
                {"params": {"userMessage": f"Saved Phil file to {filepath}"}},
                command="update_root_params",
            )

        dialog.Destroy()
        app.Destroy()

    async def load_index_phil(self, msg):
        app = wx.App(False)
        dialog = wx.FileDialog(
            None,
            "Select Phil file",
            wildcard="Phil files (*.phil)|*.phil|All files (*.*)|*.*",
            style=wx.FD_OPEN,
        )

        if dialog.ShowModal() == wx.ID_OK:
            filepath = dialog.GetPath()
            with open(filepath, "r") as f:
                content = f.read()

            flat = self._parse_phil(content)
            params = {}
            advanced_parts = []

            for phil_key, value in flat.items():
                if phil_key in self._INDEX_PHIL_MAP:
                    params[self._INDEX_PHIL_MAP[phil_key]] = value
                else:
                    advanced_parts.append(f"{phil_key}={value}")

            params["advancedOptions"] = " ".join(advanced_parts)
            await self.send_to_gui(
                {"params": params}, command="update_index_params"
            )

        dialog.Destroy()
        app.Destroy()

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
        await self.send_to_gui(
            {"params": {"updateTOFRangeEnabled": False}},
            command="update_find_spots_params",
        )
        await self.send_to_gui(
            {"params": {"status": "Loading"}}, command="update_experiment_viewer_params"
        )
        tof_range = None
        if "tof_range" in msg:
            tof_range = msg["tof_range"]

        image_dimensions = self.file_manager.get_panel_sizes()
        for expt_id in range(self.file_manager.get_num_experiments()):
            t_fetch = time.perf_counter()
            expt_image_data = self.file_manager.get_flattened_image_data(
                expt_id=expt_id, tof_range=tof_range
            )
            print(
                f"[timing] get_flattened_image_data expt {expt_id}: {time.perf_counter() - t_fetch:.3f}s"
            )
            t_send = time.perf_counter()
            for panel_idx, panel_image_data in enumerate(expt_image_data):
                await self.send_image_data_to_experiment_viewer(
                    {
                        "image_data": panel_image_data,
                        "panel_idx": panel_idx,
                        "expt_id": expt_id,
                        "image_dimensions": image_dimensions,
                    },
                    command="add_panel_image_data",
                )
            print(
                f"[timing] send {len(expt_image_data)} panels expt {expt_id}: {time.perf_counter() - t_send:.3f}s"
            )
        await self.send_to_gui(
            {"params": {"status": "Default"}}, command="update_experiment_viewer_params"
        )
        await self.send_to_gui(
            {"params": {"updateTOFRangeEnabled": True}},
            command="update_find_spots_params",
        )

    async def toggle_experiment_viewer_sidebar(self):
        await self.send_to_experiment_viewer({}, command="toggle_sidebar")

    async def toggle_rlv_sidebar(self):
        await self.send_to_rlv({}, command="toggle_sidebar")

    async def toggle_experiment_planner_sidebar(self):
        await self.send_to_experiment_planner({}, command="toggle_sidebar")

    async def toggle_shoebox_viewer_sidebar(self):
        await self.send_to_shoebox_viewer({}, command="toggle_sidebar")

    async def update_integration_profiler_method(self, msg):
        await self.send_to_shoebox_viewer(
            {"integration_method": msg["integration_method"]},
            command="update_integration_method",
        )

    async def update_experiment_description(self, msg):
        assert "expt_id" in msg, (
            "No expt_id found when trying to update experiment description"
        )
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
                    {"idx": None, "threshold_algorithm": None, "algorithm_params": None}
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
        await self.clear_experiment()
        await self.load_active_state()

    async def clear_planner_user_predicted_reflections(self, msg):
        assert "num_initial_orientations" in msg
        await self.send_to_gui(msg, command="clear_planner_user_predicted_reflections")

    async def update_planner_goniometer_phi(self, msg):
        await self.send_to_gui(
            {"params": {"status": Status.Loading.value}},
            command="update_experiment_planner_params",
        )
        assert "phi" in msg

        phi = msg["phi"]
        orientations, _, num_stored_orientations = (
            self.file_manager.get_experiment_planner_params()
        )
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
                "params": {
                    "updateEntry": (phi, num_reflections),
                    "status": Status.Default.value,
                }
            },
            command="update_experiment_planner_params",
        )

    async def get_next_best_planner_orientation(self, msg):

        await self.send_to_gui(
            {"params": {"status": Status.Loading.value}},
            command="update_experiment_planner_params",
        )
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
                {"error": "No new reflections found"}, command="display_error"
            )
            return
        num_reflections = 0
        for i in best_refl_data:
            num_reflections += len(best_refl_data[i])

        await self.send_to_gui(
            {"params": {"updateEntry": (best_phi, num_reflections)}},
            command="update_experiment_planner_params",
        )

        await self.send_to_experiment_planner(
            {"phi": best_phi}, command="update_params"
        )

        await self.send_to_experiment_planner(
            best_refl_data, command="update_predicted_reflection_table"
        )
        await self.send_to_gui(
            {"params": {"status": Status.Default.value}},
            command="update_experiment_planner_params",
        )

    async def store_planner_reflections(self, msg):
        self.file_manager.update_experiment_planner_params(
            "num_stored_orientations", len(msg["orientations"])
        )
        await self.send_to_experiment_planner({}, command="store_active_reflections")

    async def clear_planner_reflections(self, msg):
        self.file_manager.clear_experiment_planner_params()
        await self.send_to_gui(
            {"params": {"clearUserData": True}},
            command="update_experiment_planner_params",
        )
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
            "num_reflections", msg["num_reflections"]
        )

    async def update_rlv_view(self, view: str):
        await self.send_to_rlv({}, command=view)

    async def update_experiment_viewer_debug_image(self, msg):
        if not "show_loading" in msg or msg["show_loading"]:
            await self.send_to_gui(
                {"params": {"status": "Loading"}},
                command="update_experiment_viewer_params",
            )

        expt_id = self.file_manager.get_current_experiment_viewer_expt_id()
        images, mask = self.file_manager.get_threshold_debug_data(
            expt_id, msg["idx"], msg["threshold_algorithm"], msg["algorithm_params"]
        )

        image_dimensions = self.file_manager.get_panel_sizes()
        await self.send_image_data_to_experiment_viewer(
            {
                "image_data": images,
                "mask_data": mask,
                "image_dimensions": image_dimensions,
            },
            command="add_debug_image_data",
        )
        if not "show_loading" in msg or msg["show_loading"]:
            await self.send_to_gui(
                {"params": {"status": "Default"}},
                command="update_experiment_viewer_params",
            )

    async def toggle_experiment_viewer_debug(self, msg):
        await self.send_to_experiment_viewer(
            {
                "debug_mode": msg["debug_mode"],
            },
            command="toggle_debug_mode",
        )

    async def set_experiment_viewer_debug_to_image(self):
        await self.send_to_experiment_viewer({}, command="set_debug_to_image")

    async def set_experiment_viewer_debug_to_threshold(self):
        await self.send_to_experiment_viewer({}, command="set_debug_to_threshold")

    async def send_to_gui(self, msg, command=None):
        msg["channel"] = "gui"
        if command is not None:
            msg["command"] = command
        await self.connections["gui"].send(json.dumps(msg))

    async def send_to_shoebox_viewer(self, msg, command=None):

        if "shoebox_viewer" not in self.connections:
            await self.lost_connection_error()
            return

        msg["channel"] = "shoebox_viewer"
        if command is not None:
            msg["command"] = command
        await self.connections["shoebox_viewer"].send(json.dumps(msg))

    async def send_image_data_to_experiment_viewer(self, msg, command=None):
        if "experiment_viewer" not in self.connections:
            await self.lost_connection_error()
            return
        if command is not None:
            msg["command"] = command
        msg = msgpack.packb(msg)

        await self.connections["experiment_viewer"].send(msg)

    async def send_to_experiment_viewer(self, msg, command=None):

        if "experiment_viewer" not in self.connections:
            await self.lost_connection_error()
            return

        msg["channel"] = "experiment_viewer"
        if command is not None:
            msg["command"] = command
        await self.connections["experiment_viewer"].send(json.dumps(msg))

    async def send_image_data_to_rlv(self, msg, command=None):
        if "rlv" not in self.connections:
            await self.lost_connection_error()
            return
        if command is not None:
            msg["command"] = command
        msg = msgpack.packb(msg)

        await self.connections["rlv"].send(msg)

    async def send_to_rlv(self, msg, command=None):

        if "rlv" not in self.connections:
            await self.lost_connection_error()
            return

        msg["channel"] = "rlv"
        if command is not None:
            msg["command"] = command
        await self.connections["rlv"].send(json.dumps(msg))

    async def send_to_experiment_planner(self, msg, command=None):

        if "experiment_planner" not in self.connections:
            await self.lost_connection_error()
            return

        msg["channel"] = "experiment_planner"
        if command is not None:
            msg["command"] = command
        await self.connections["experiment_planner"].send(json.dumps(msg))

    def clean_up_after_task(self):
        self.cancel_log_stream = True
        self.active_log_stream = None
        self.active_task_algorithm = None
        self.active_task_name = None

    def setup_task(
        self,
        algorithm_type: AlgorithmType,
        log_filename: str,
        algorithm_args: dict[str, str],
        progress_parser=None,
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

        self.active_task_name = commands[algorithm_type]

        log_file_path = os.path.join(
            self.file_manager.get_current_processing_dir(), log_filename
        )

        if os.path.exists(log_file_path):
            os.remove(log_file_path)

        if self.active_log_stream is not None:
            self.active_log_stream.cancel()
        self.cancel_log_stream = False
        self.active_log_stream = asyncio.create_task(
            self.stream_log_file(
                file_path=log_file_path,
                command=commands[algorithm_type],
                progress_parser=progress_parser,
            )
        )
        self.file_manager.set_selected_file_algorithm_args(
            algorithm_type=algorithm_type, args=algorithm_args
        )

    async def cancel_active_task(self):
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
    asyncio.run(server.run())
