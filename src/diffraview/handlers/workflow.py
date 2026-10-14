"""Running processing steps and saving/loading their parameters."""

import asyncio
from dataclasses import dataclass
import re
from ..algorithm_status import AlgorithmStatus
from ..algorithm_types import AlgorithmType
from ..app_types import Status
from ..backends.dials.phil import find_spots_phil_with_scan_range, params_from_phil
from ..dialogs import PHIL_WILDCARD, select_paths, select_save_path
from ..router import Run, command


PHIL_TABS = ("find_spots", "index", "refine", "integrate")


@dataclass
class DIALSTask:
    name: str
    task: asyncio.Task


class WorkflowHandlers:
    @command("dials.import", run=Run.TASK, status="update_import_params")
    async def run_dials_import(self, msg):

        await self.clear_experiment()
        await self.send(
            "gui",
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
            await self.send(
                "gui",
                {"params": {"log": e.__str__(), "status": "Failed"}},
                command="update_import_params",
            )
            return

        algorithm_status = self.file_manager.last_algorithm_status()

        if algorithm_status == AlgorithmStatus.failed:
            log = self.file_manager.get_algorithm_log(AlgorithmType.dials_import)
            await self.send(
                "gui",
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
            await self.send(
                "gui",
                {"params": output_params[update_params_command]},
                command=update_params_command,
            )

        if algorithm_status == AlgorithmStatus.finished:
            await self.send(
                "gui",
                {"params": {"status": "Loading"}},
                command="update_experiment_viewer_params",
            )

            # First send experiment details
            experiment_viewer_msg = {"expt": self.file_manager.get_expt_json()}
            await self.send(
                "experiment_viewer", experiment_viewer_msg, command="update_experiment"
            )

            # Send images one panel at a time
            image_dimensions = self.file_manager.get_panel_sizes()
            num_experiments = self.file_manager.get_num_experiments()
            for expt_id in range(num_experiments):
                expt_image_data = self.file_manager.get_flattened_image_data(
                    expt_id=expt_id
                )
                for panel_idx, panel_image_data in enumerate(expt_image_data):
                    await self.send_binary(
                        "experiment_viewer",
                        {
                            "image_data": panel_image_data,
                            "panel_idx": panel_idx,
                            "expt_id": expt_id,
                            "image_dimensions": image_dimensions,
                        },
                        command="add_panel_image_data",
                    )
                progress = min(int((expt_id + 1) / num_experiments * 100), 99)
                await self.send(
                    "gui",
                    {"params": {"progress": progress}},
                    command="update_experiment_viewer_params",
                )

            await self.send(
                "gui",
                {"params": {"status": "Default", "progress": 0}},
                command="update_experiment_viewer_params",
            )

            rlv_msg = experiment_viewer_msg["expt"]
            await self.send("rlv", rlv_msg, command="new_experiment")

        self.clean_up_after_task()

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

    @command("dials.find_spots", run=Run.TASK, status="update_find_spots_params")
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

        if "tof_range" in msg or "wavelength_range" in msg:
            try:
                fr1, fr2 = self.file_manager.tof_range_to_scan_range(
                    tof_range=msg.get("tof_range"),
                    wavelength_range=msg.get("wavelength_range"),
                )
                self.file_manager.update_selected_file_arg(
                    algorithm_type=AlgorithmType.dials_find_spots,
                    param_name="scan_range",
                    param_value=f"{fr1},{fr2}",
                )
            except (KeyError, ZeroDivisionError):
                pass

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
            await self.send(
                "gui",
                {"params": output_params[update_params_command]},
                command=update_params_command,
            )

        if algorithm_status == AlgorithmStatus.finished:
            reflection_table_msgpack = output_params["update_root_params"][
                "reflectionTableMsgpack"
            ]

            await self.send(
                "experiment_viewer",
                {"refl_msgpack": reflection_table_msgpack},
                command="update_reflection_table",
            )
            await self.send(
                "rlv",
                {"refl_msgpack": reflection_table_msgpack},
                command="update_reflection_table",
            )
            # Re-running find spots invalidates any crystal/reciprocal cell
            # data from a previous indexing run.
            await self.send("rlv", {}, command="clear_reciprocal_cells")

        self.clean_up_after_task()

    @command("dials.index", run=Run.TASK, status="update_index_params")
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
            await self.send(
                "gui",
                {"params": {"log": e.__str__(), "status": "Failed"}},
                command="update_index_params",
            )
            return

        algorithm_status = self.file_manager.last_algorithm_status()

        if algorithm_status == AlgorithmStatus.failed:
            log = self.file_manager.get_algorithm_log(AlgorithmType.dials_index)
            await self.send(
                "gui",
                {"params": {"log": log, "status": "Failed"}},
                command="update_index_params",
            )
            return

        if algorithm_status == AlgorithmStatus.cancelled:
            self.clean_up_after_task()
            return

        output_params = self.file_manager.get_output_params(AlgorithmType.dials_index)

        for update_params_command in output_params:
            await self.send(
                "gui",
                {"params": output_params[update_params_command]},
                command=update_params_command,
            )

        if algorithm_status == AlgorithmStatus.finished:
            new_expt_filename = "indexed.expt"
            new_refl_filename = "indexed.refl"
            self.file_manager.set_selected_input_files(
                selected_files=[new_expt_filename, new_refl_filename],
                algorithm_type=AlgorithmType.dials_refine,
            )
            reflection_table_msgpack = output_params["update_root_params"][
                "reflectionTableMsgpack"
            ]

            await self.send(
                "experiment_viewer",
                {"refl_msgpack": reflection_table_msgpack},
                command="update_reflection_table",
            )

            expt = self.file_manager.get_expt_json()
            await self.send("rlv", expt, command="update_experiment")
            await self.send(
                "rlv",
                {"refl_msgpack": reflection_table_msgpack},
                command="update_reflection_table",
            )

        self.clean_up_after_task()

    @command(
        "dials.refine_bravais_settings", run=Run.TASK, status="update_index_params"
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
            await self.send(
                "gui",
                {"params": output_params[update_params_command]},
                command=update_params_command,
            )
        self.clean_up_after_task()

    @command("dials.reindex", run=Run.TASK, status="update_index_params")
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
            await self.send(
                "gui",
                {"params": output_params[update_params_command]},
                command=update_params_command,
            )

        refl_data = output_params["update_root_params"]["reflectionTable"]
        reflection_table_msgpack = output_params["update_root_params"][
            "reflectionTableMsgpack"
        ]
        await self.send(
            "experiment_viewer",
            {"refl_msgpack": reflection_table_msgpack},
            command="update_reflection_table",
        )

        expt = self.file_manager.get_expt_json()
        expt["reindexed_cell"] = True
        await self.send("rlv", expt, command="update_experiment")

        await self.send(
            "rlv",
            {"refl_msgpack": reflection_table_msgpack},
            command="update_reflection_table",
        )

    @command("dials.refine", run=Run.TASK, status="update_refine_params")
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
            await self.send(
                "gui",
                {"params": output_params[update_params_command]},
                command=update_params_command,
            )

        if algorithm_status == AlgorithmStatus.finished:
            refl_data = output_params["update_root_params"]["reflectionTable"]
            reflection_table_msgpack = output_params["update_root_params"][
                "reflectionTableMsgpack"
            ]
            await self.send(
                "experiment_viewer",
                {"refl_msgpack": reflection_table_msgpack},
                command="update_reflection_table",
            )

            expt = self.file_manager.get_expt_json()
            await self.send("rlv", expt, command="update_experiment")
            await self.send(
                "rlv",
                {"refl_msgpack": reflection_table_msgpack},
                command="update_reflection_table",
            )
        self.clean_up_after_task()

    @command("dials.integrate", run=Run.TASK, status="update_integrate_params")
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
                await self.send("gui", gui_msg, command="update_integrate_params")
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
            await self.send(
                "gui",
                {"params": output_params[update_params_command]},
                command=update_params_command,
            )

        if algorithm_status == AlgorithmStatus.finished:
            if integration_type == "calculated":
                reflection_table_msgpack = output_params["update_root_params"][
                    "calculatedReflectionTableMsgpack"
                ]
                await self.send(
                    "experiment_viewer",
                    {"refl_msgpack": reflection_table_msgpack},
                    command="update_calculated_integrated_reflection_table",
                )
                await self.send(
                    "rlv",
                    {"refl_msgpack": reflection_table_msgpack},
                    command="update_calculated_integrated_reflection_table",
                )

            else:
                reflection_table_msgpack = output_params["update_root_params"][
                    "reflectionTableMsgpack"
                ]
                await self.send(
                    "experiment_viewer",
                    {"refl_msgpack": reflection_table_msgpack},
                    command="update_reflection_table",
                )
                await self.send(
                    "rlv",
                    {"refl_msgpack": reflection_table_msgpack},
                    command="update_reflection_table",
                )
        self.clean_up_after_task()

    @command("dials.export")
    async def run_dials_export(self, msg):

        args = {}
        if "args" in msg:
            args = msg["args"]

        file_format = args.get("format", "mtz")

        match file_format:
            case "shelx":
                wildcard = "All files (*.*)|*.*|HKL files (*.hkl)|*.hkl"
                default_name = "exported.hkl"
            case "mtz":
                wildcard = "All files (*.*)|*.*|MTZ files (*.mtz)|*.mtz"
                default_name = "exported.mtz"
            case _:
                raise NotImplementedError

        filename = select_save_path(msg, "Save file as", default_name, wildcard)

        if filename:
            log_filename = "dials.export.log"
            args[f"{file_format}.hklout"] = filename
            self.setup_task(
                algorithm_type=AlgorithmType.dials_export,
                log_filename=log_filename,
                algorithm_args=args,
            )
            self.active_task_algorithm = DIALSTask(
                "update_integrate_params",
                asyncio.create_task(self.file_manager.run(AlgorithmType.dials_export)),
            )

            await self.active_task_algorithm.task

            output_params = self.file_manager.get_output_params(
                AlgorithmType.dials_export
            )

            for update_params_command in output_params:
                await self.send(
                    "gui",
                    {"params": output_params[update_params_command]},
                    command=update_params_command,
                )

            self.clean_up_after_task()

    @command(*(f"save_{tab}_phil" for tab in PHIL_TABS))
    async def save_phil(self, msg):
        tab = msg["command"].removeprefix("save_").removesuffix("_phil")
        filepath = select_save_path(
            msg, f"Save {tab} Phil file", f"{tab}.phil", PHIL_WILDCARD
        )
        if not filepath:
            return
        content = msg["content"]
        if tab == "find_spots" and "tof_range" in msg:
            content = find_spots_phil_with_scan_range(
                content, msg["tof_range"], self.file_manager
            )
        with open(filepath, "w") as f:
            f.write(content)
        await self.send(
            "gui",
            {"params": {"userMessage": f"Saved Phil file to {filepath}"}},
            command="update_root_params",
        )

    @command(*(f"load_{tab}_phil" for tab in PHIL_TABS))
    async def load_phil(self, msg):
        tab = msg["command"].removeprefix("load_").removesuffix("_phil")
        filepaths = select_paths(msg, "Select Phil file", wildcard=PHIL_WILDCARD)
        if not filepaths:
            return
        with open(filepaths[0], "r") as f:
            content = f.read()
        params = params_from_phil(tab, content, self.file_manager)
        await self.send("gui", {"params": params}, command=f"update_{tab}_params")
