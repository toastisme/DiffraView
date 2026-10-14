"""Running processing steps and saving/loading their parameters."""

import asyncio
import re
from dataclasses import dataclass

from ..algorithm_status import AlgorithmStatus
from ..app_types import Status
from ..backends.dials.phil import find_spots_phil_with_scan_range, params_from_phil
from ..dialogs import PHIL_WILDCARD, select_paths, select_save_path
from ..processing.steps import STEP_TARGETS, StepId
from ..router import Run, command

PHIL_TABS = ("find_spots", "index", "refine", "integrate")

# Client command -> step it runs
STEP_COMMANDS = {
    "dials.import": StepId.IMPORT,
    "dials.find_spots": StepId.FIND_SPOTS,
    "dials.index": StepId.INDEX,
    "dials.refine_bravais_settings": StepId.REFINE_BRAVAIS_SETTINGS,
    "dials.refine": StepId.REFINE,
    "dials.integrate": StepId.INTEGRATE,
    "dials.export": StepId.EXPORT,
}

# Steps whose failure log includes their log files
_FULL_LOG_ON_FAILURE = (StepId.IMPORT, StepId.INDEX)


@dataclass
class DIALSTask:
    name: str
    task: asyncio.Task


def step_commands(fn):
    """Register fn for every STEP_COMMANDS entry, reporting to its tab."""
    for name, step_id in STEP_COMMANDS.items():
        fn = command(name, run=Run.TASK, status=STEP_TARGETS[step_id])(fn)
    return fn


class WorkflowHandlers:
    """
    execute_step runs any step. Per-step behaviour lives in optional hooks, looked
    up by step name:
      _prepare_<step>(msg, args) -> bool: edit args before running; False aborts
      _progress_parser_<step>() -> callable(log contents) -> percent | None
      _adjust_<step>_output(output_params, finished): edit params before sending
      _after_<step>(output_params, args): update viewers after success
    """

    @step_commands
    async def run_step(self, msg):
        await self.execute_step(STEP_COMMANDS[msg["command"]], msg)

    async def execute_step(self, step_id: StepId, msg: dict):
        args = dict(msg.get("args", {}))

        prepare = getattr(self, f"_prepare_{step_id.value}", None)
        if prepare is not None and not await prepare(msg, args):
            return
        progress_parser = getattr(self, f"_progress_parser_{step_id.value}", None)

        self.setup_task(
            step_id=step_id,
            algorithm_args=args,
            progress_parser=progress_parser() if progress_parser else None,
        )
        self.active_task_algorithm = DIALSTask(
            STEP_TARGETS[step_id],
            asyncio.create_task(self.file_manager.run(step_id)),
        )
        await self.active_task_algorithm.task

        algorithm_status = self.file_manager.last_algorithm_status()
        if algorithm_status == AlgorithmStatus.cancelled:
            self.clean_up_after_task()
            return
        finished = algorithm_status == AlgorithmStatus.finished

        kwargs = {}
        if step_id == StepId.INTEGRATE:
            kwargs["integration_type"] = args.get("integration_type", "observed")
        output_params = self.file_manager.get_output_params(step_id, **kwargs)
        if not finished and step_id in _FULL_LOG_ON_FAILURE:
            output_params = {
                STEP_TARGETS[step_id]: {
                    "log": self.file_manager.get_algorithm_log(step_id),
                    "status": Status.Failed.value,
                }
            }

        adjust = getattr(self, f"_adjust_{step_id.value}_output", None)
        if adjust is not None:
            adjust(output_params, finished)

        for update_params_command, params in output_params.items():
            await self.send("gui", {"params": params}, command=update_params_command)

        after = getattr(self, f"_after_{step_id.value}", None)
        if finished and after is not None:
            await after(output_params, args)

        self.clean_up_after_task()

    async def _send_reflection_table(
        self, output_params, command="update_reflection_table"
    ):
        """Send the reflection table in output_params to the viewers."""
        key = (
            "calculatedReflectionTableMsgpack"
            if command == "update_calculated_integrated_reflection_table"
            else "reflectionTableMsgpack"
        )
        msg = {"refl_msgpack": output_params["update_root_params"][key]}
        await self.send("experiment_viewer", dict(msg), command=command)
        await self.send("rlv", msg, command=command)

    async def _send_experiment_to_rlv(self, output_params):
        """Send the new reflections to the viewers and crystal to the RLV."""
        refl_msgpack = output_params["update_root_params"]["reflectionTableMsgpack"]
        await self.send(
            "experiment_viewer",
            {"refl_msgpack": refl_msgpack},
            command="update_reflection_table",
        )
        expt = self.file_manager.get_expt_json()
        await self.send("rlv", expt, command="update_experiment")
        await self.send(
            "rlv", {"refl_msgpack": refl_msgpack}, command="update_reflection_table"
        )

    # Import

    async def _prepare_import(self, msg, args):
        await self.clear_experiment()
        await self.send(
            "gui",
            {"params": {"status": Status.Loading.value}},
            command="update_import_params",
        )
        self.file_manager.add_active_file(msg, self.processing_dir)
        return True

    def _adjust_import_output(self, output_params, finished):
        if finished and "update_root_params" in output_params:
            root_params = output_params["update_root_params"]
            root_params["openFileKeys"] = self.file_manager.get_open_file_keys()
            root_params["currentFileKey"] = self.file_manager.get_current_file_key()

    async def _after_import(self, output_params, args):
        await self.send(
            "gui",
            {"params": {"status": "Loading"}},
            command="update_experiment_viewer_params",
        )

        # First send experiment details
        expt = self.file_manager.get_expt_json()
        await self.send(
            "experiment_viewer", {"expt": expt}, command="update_experiment"
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
        await self.send("rlv", expt, command="new_experiment")

    # Find spots

    async def _prepare_find_spots(self, msg, args):
        if "tof_range" in msg or "wavelength_range" in msg:
            try:
                fr1, fr2 = self.file_manager.tof_range_to_scan_range(
                    tof_range=msg.get("tof_range"),
                    wavelength_range=msg.get("wavelength_range"),
                )
                args["scan_range"] = f"{fr1},{fr2}"
            except (KeyError, ZeroDivisionError):
                pass
        return True

    def _progress_parser_find_spots(self):
        num_imagesets = len(self.file_manager.get_imageset_ids())
        return lambda contents: self._find_spots_progress_parser(
            contents, num_imagesets
        )

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

    def _adjust_find_spots_output(self, output_params, finished):
        if "update_find_spots_params" in output_params:
            output_params["update_find_spots_params"]["progress"] = 0

    async def _after_find_spots(self, output_params, args):
        await self._send_reflection_table(output_params)
        # Re-running find spots invalidates any crystal/reciprocal cell
        # data from a previous indexing run.
        await self.send("rlv", {}, command="clear_reciprocal_cells")

    # Index and refine

    async def _after_index(self, output_params, args):
        self.file_manager.set_selected_input_files(
            selected_files=["indexed.expt", "indexed.refl"],
            step_id=StepId.REFINE,
        )
        await self._send_experiment_to_rlv(output_params)

    async def _after_refine(self, output_params, args):
        await self._send_experiment_to_rlv(output_params)

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
            step_id=StepId.REFINE,
        )
        self.file_manager.set_selected_input_files(
            selected_files=[new_expt_filename, new_refl_filename],
            step_id=StepId.REFINE_BRAVAIS_SETTINGS,
        )

        output_params = self.file_manager.get_output_params(StepId.REINDEX)

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

    # Integrate and export

    async def _prepare_integrate(self, msg, args):
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
                await self.send(
                    "gui",
                    {"log": log, "success": False},
                    command="update_integrate_params",
                )
                return False
        return True

    async def _after_integrate(self, output_params, args):
        if args.get("integration_type", "observed") == "calculated":
            await self._send_reflection_table(
                output_params, command="update_calculated_integrated_reflection_table"
            )
        else:
            await self._send_reflection_table(output_params)

    async def _prepare_export(self, msg, args):
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
        if not filename:
            return False
        args[f"{file_format}.hklout"] = filename
        return True

    # Phil files

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
