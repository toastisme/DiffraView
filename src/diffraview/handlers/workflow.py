"""Running processing steps and saving/loading their parameters."""

import asyncio
import re
from dataclasses import dataclass

from ..algorithm_status import AlgorithmStatus
from ..app_types import SoftwareBackend, Status
from ..backends.dials.backend import INTEGRATE_MASK_ARG
from ..backends.dials.phil import find_spots_phil_with_scan_range, params_from_phil
from ..dialogs import PHIL_WILDCARD, select_paths, select_save_path
from ..protocol import CAPABILITIES
from ..processing.steps import STEP_TARGETS, StepId, StepOutputs
from ..router import Run, command

PHIL_TABS = ("find_spots", "index", "refine", "integrate", "scale")

# Steps run by a backend (reindexing is done by DiffraView itself)
RUNNABLE_STEPS = frozenset(StepId) - {StepId.REINDEX}

# Steps whose failure log includes their log files
_FULL_LOG_ON_FAILURE = (StepId.IMPORT, StepId.INDEX)


@dataclass
class DIALSTask:
    name: str
    task: asyncio.Task


def _step(payload: dict) -> StepId:
    step_id = StepId(payload["step"])
    if step_id not in RUNNABLE_STEPS:
        raise ValueError(f"{step_id.value} cannot be run with workflow.run")
    return step_id


def _input_from(payload: dict) -> StepId | None:
    """Step whose outputs the step reads in place of its usual input."""
    input_from = payload.get("input_from")
    return StepId(input_from) if input_from else None


class WorkflowHandlers:
    """
    execute_step runs any step. Per-step behaviour lives in optional hooks, looked
    up by step name:
      _prepare_<step>(msg, args) -> bool: edit args before running; False aborts
      _progress_parser_<step>() -> callable(log contents) -> percent | None
      _adjust_<step>_output(output_params, finished): edit params before sending
      _before_<step>_output(output_params, finished): send messages before them
      _after_<step>(output_params, args): update viewers after success
    """

    @command(
        "workflow.run",
        run=Run.TASK,
        status=lambda payload: STEP_TARGETS[StepId(payload["step"])],
    )
    async def run_step(self, msg):
        await self.execute_step(_step(msg), msg)

    async def execute_step(self, step_id: StepId, msg: dict):
        args = dict(msg.get("args", {}))

        prepare = getattr(self, f"_prepare_{step_id.value}", None)
        if prepare is not None and not await prepare(msg, args):
            return
        progress_parser = getattr(self, f"_progress_parser_{step_id.value}", None)

        # Backend for this step; defaults to the one chosen at import
        backend_name = msg.get("backend")
        self.setup_task(
            step_id=step_id,
            backend_name=backend_name,
            algorithm_args=args,
            progress_parser=progress_parser() if progress_parser else None,
        )
        self.active_task_algorithm = DIALSTask(
            STEP_TARGETS[step_id],
            asyncio.create_task(
                self.file_manager.run(step_id, backend_name, _input_from(msg))
            ),
        )
        await self.active_task_algorithm.task

        algorithm_status = self.file_manager.last_algorithm_status()
        if algorithm_status == AlgorithmStatus.cancelled:
            self.clean_up_after_task()
            return
        finished = algorithm_status == AlgorithmStatus.finished

        kwargs = {}
        if step_id == StepId.INTEGRATE:
            kwargs["integration_type"] = self._integration_type(args)
        if not finished and step_id in _FULL_LOG_ON_FAILURE:
            output_params = {
                STEP_TARGETS[step_id]: {
                    "log": self.file_manager.get_algorithm_log(step_id),
                    "status": Status.Failed.value,
                }
            }
        else:
            output_params = self.file_manager.get_output_params(step_id, **kwargs)

        adjust = getattr(self, f"_adjust_{step_id.value}_output", None)
        if adjust is not None:
            adjust(output_params, finished)
        before = getattr(self, f"_before_{step_id.value}_output", None)
        if before is not None:
            await before(output_params, finished)

        for update_params_command, params in output_params.items():
            await self.update_state(update_params_command, params)

        after = getattr(self, f"_after_{step_id.value}", None)
        if finished and after is not None:
            await after(output_params, args)

        self.clean_up_after_task()

    async def _send_reflection_table(self, output_params, calculated=False):
        """Send the reflection table in output_params to the viewers."""
        root = output_params["root"]
        if calculated:
            msg_type = "reflections.update_calculated"
            payload = {"refl_msgpack": root["calculatedReflectionTableMsgpack"]}
        else:
            msg_type = "reflections.update"
            payload = {"refl_msgpack": root["reflectionTableMsgpack"]}
        await self.send_viewer("experiment_viewer", msg_type, payload)
        await self.send_viewer("rlv", msg_type, payload)

    async def _send_experiment_to_rlv(self, output_params):
        """Send the new reflections to the viewers and crystal to the RLV."""
        refl_msgpack = output_params["root"]["reflectionTableMsgpack"]
        await self.send_viewer(
            "experiment_viewer",
            "reflections.update",
            {"refl_msgpack": refl_msgpack},
        )
        expt = self.file_manager.get_expt_json()
        await self.send_viewer("rlv", "experiment.update", expt)
        await self.send_viewer(
            "rlv",
            "reflections.update",
            {"refl_msgpack": refl_msgpack},
        )

    # Import

    async def _prepare_import(self, msg, args):
        await self.clear_experiment()
        await self.update_state("import", {"status": Status.Loading.value})
        self.file_manager.add_active_file(msg, self.processing_dir)
        return True

    def _adjust_import_output(self, output_params, finished):
        if finished and "root" in output_params:
            root_params = output_params["root"]
            root_params["openFileKeys"] = self.file_manager.get_open_file_keys()
            root_params["currentFileKey"] = self.file_manager.get_current_file_key()

    async def _before_import_output(self, output_params, finished):
        # The client routes tab updates by experiment type
        if finished:
            await self.notify(CAPABILITIES, **self.file_manager.get_capabilities())

    async def _after_import(self, output_params, args):
        await self.update_state("experiment_viewer", {"status": "Loading"})

        # First send experiment details
        expt = self.file_manager.get_expt_json()
        await self.send_experiment_viewer_settings()
        await self.send_viewer("experiment_viewer", "experiment.update", {"expt": expt})

        # Send images one panel at a time
        await self.send_images(report_progress=True)

        await self.update_state(
            "experiment_viewer", {"status": "Default", "progress": 0}
        )
        await self.send_viewer("rlv", "experiment.new", expt)

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
        self._add_mask_arg(msg, args, "spotfinder.lookup.mask")
        return True

    def _add_mask_arg(self, msg, args, arg_name):
        """The mask drawn in the experiment viewer, unless use_mask is false (DIALS only)."""
        active_file = self.file_manager.selected_file
        backend = SoftwareBackend(msg.get("backend") or active_file.software_backend)
        use_mask = msg.get("use_mask", True) and active_file.mask is not None
        if use_mask and backend == SoftwareBackend.DIALS:
            args[arg_name] = active_file.mask["file"]

    def _progress_parser_find_spots(self):
        num_imagesets = len(self.file_manager.get_imageset_ids())

        def progress_parser(contents):
            return self._find_spots_progress_parser(contents, num_imagesets)

        return progress_parser

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
        if "find_spots" in output_params:
            output_params["find_spots"]["progress"] = 0

    async def _after_find_spots(self, output_params, args):
        await self._send_reflection_table(output_params)
        # Re-running find spots invalidates any crystal/reciprocal cell
        # data from a previous indexing run.
        await self.send_viewer("rlv", "reciprocal_cells.clear")

    # Index and refine

    async def _after_index(self, output_params, args):
        await self._send_experiment_to_rlv(output_params)

    async def _after_refine(self, output_params, args):
        await self._send_experiment_to_rlv(output_params)

    @command("workflow.reindex", run=Run.TASK, status="index")
    async def run_dials_reindex(self, msg):

        assert "id" in msg
        assert "crystal_id" in msg
        lattice_id: str = msg["id"]
        crystal_id: str = msg["crystal_id"]
        basis = self.file_manager.get_change_of_basis(lattice_id)
        # Refined and integrated results are in the old basis
        self.file_manager.reset_after_index()
        self.file_manager.reindex_reflections_with_crystal_id(crystal_id, basis)
        crystal_json = self.file_manager.get_bravais_settings_crystal(int(lattice_id))
        self.file_manager.update_expt_crystal(crystal_id, crystal_json)

        # Later steps read the reindexed files in place of the indexed ones
        self.file_manager.set_step_outputs(
            StepId.INDEX, StepOutputs("reindexed.expt", "reindexed.refl")
        )

        output_params = self.file_manager.get_output_params(StepId.REINDEX)

        for update_params_command in output_params:
            await self.update_state(
                update_params_command, output_params[update_params_command]
            )

        refl_data = output_params["root"]["reflectionTable"]
        reflection_table_msgpack = output_params["root"][
            "reflectionTableMsgpack"
        ]
        await self.send_viewer(
            "experiment_viewer",
            "reflections.update",
            {"refl_msgpack": reflection_table_msgpack},
        )

        expt = self.file_manager.get_expt_json()
        expt["reindexed_cell"] = True
        await self.send_viewer("rlv", "experiment.update", expt)

        await self.send_viewer(
            "rlv",
            "reflections.update",
            {"refl_msgpack": reflection_table_msgpack},
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
                await self.update_state("integrate", {"log": log, "status": "Failed"})
                return False
        self._add_mask_arg(msg, args, INTEGRATE_MASK_ARG)
        return True

    def _integration_type(self, args) -> str:
        return self.file_manager.selected_file.mode.integration_type(args)

    async def _after_integrate(self, output_params, args):
        if self._integration_type(args) == "calculated":
            await self._send_reflection_table(output_params, calculated=True)
        else:
            await self._send_reflection_table(output_params)

    async def _prepare_apply_symmetry(self, msg, args):
        try:
            args.update(
                self.file_manager.selected_file.symmetry_reindex_args(msg["id"])
            )
        except (ValueError, IndexError, OSError) as e:
            await self.update_state("integrate", {"log": str(e), "status": "Failed"})
            return False
        return True

    async def _after_apply_symmetry(self, output_params, args):
        calculated = self.file_manager.last_integration_using_calculated()
        await self._send_reflection_table(output_params, calculated=calculated)
        expt = self.file_manager.get_expt_json()
        await self.send_viewer("rlv", "experiment.update", expt)

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

    @command("workflow.save_params")
    async def save_phil(self, msg):
        tab = msg["step"]
        assert tab in PHIL_TABS
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
        await self.update_state(
            "root", {"userMessage": f"Saved Phil file to {filepath}"}
        )

    @command("workflow.load_params")
    async def load_phil(self, msg):
        tab = msg["step"]
        assert tab in PHIL_TABS
        filepaths = select_paths(msg, "Select Phil file", wildcard=PHIL_WILDCARD)
        if not filepaths:
            return
        with open(filepaths[0], "r") as f:
            content = f.read()
        params = params_from_phil(
            tab, content, self.file_manager, self.file_manager.get_experiment_type()
        )
        await self.update_state(tab, params)
