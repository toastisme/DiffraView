from __future__ import annotations

import asyncio
import json

from os import remove
from os.path import basename, dirname, isfile, join
from typing import Dict
from . import utils
from .algorithm_status import AlgorithmStatus
from .app_types import SoftwareBackend, Status
from .backends import available_backends, get_backend
from .backends.dials.backend import recover_legacy_state
from .backends.dials.mask import generate_mask, remove_mask
from .model import ExperimentModel, ImageModel, ReflectionModel
from .modes import create_mode
from .processing import manifest
from .processing.backend import Backend
from .processing.steps import (
    STEP_INPUT_FROM,
    STEP_WORKFLOW_STATE,
    SUCCEEDING_STEPS,
    StepId,
    StepInputs,
    StepOutputs,
    create_workflow,
)


class ActiveFile(ExperimentModel, ReflectionModel, ImageModel):
    """
    Manages all data relating to a file imported in the via the GUI
    """

    def __init__(
        self,
        file_dir: str | None,
        filenames: list[str] | None,
        file_key: str,
        software_backend: str,
        processing_dir: str,
    ) -> None:
        self.workflow_state = None
        self.processing_dir = processing_dir  # Where processing files are stored
        self.steps = create_workflow()
        self.descriptions = {}  # User-edited, by experiment index
        self.source = None  # The run the folder was made from (e.g. xia2)
        # Mask used to find spots ({"file", "polygons"}) and polygons drawn since
        self.mask = None
        self.mask_polygons = []
        self.mask_drawing = False  # A polygon is being drawn
        # No new images given so ActiveFile must be processing folder
        if filenames is None:
            self._load_recorded_steps()
        self.file_dir = self.get_file_dir(file_dir)  # Where images are stored
        self.filenames = self.get_filenames(filenames)
        self.file_key = file_key
        # Backend for steps run without naming one
        self.software_backend = SoftwareBackend(software_backend)
        self._backends = {}
        self.experiment_type = None
        self.file_paths = [join(self.file_dir, filename) for filename in self.filenames]
        self.current_expt_file = None
        self.current_refl_file = None
        self.refl_indexed_map = None
        self.fmt_instance = None
        self.reflection_table_raw = None
        # Set once the experiment type is known, after import
        self.mode = None
        self.active_process = None
        self.last_algorithm_status = None
        self.last_algorithm_output = None
        self.current_experiment_viewer_expt_id = 0
        self.last_experiment_viewer_debug_settings = None
        self.command_history = {}

        if filenames is None:
            self.setup_state()

    def get_file_dir(self, file_dir: str | None) -> str:
        if file_dir is not None:
            return file_dir
        expt_json = self.get_expt_json(self.require_step_output(StepId.IMPORT, "expt"))
        return dirname(expt_json["imageset"][0]["template"])

    def get_filenames(self, filenames: list[str] | None) -> list[str]:
        if filenames is not None:
            return filenames
        expt_json = self.get_expt_json(self.require_step_output(StepId.IMPORT, "expt"))
        return [basename(i["template"]) for i in expt_json["imageset"]]

    def backend_for(self, name: SoftwareBackend | None = None) -> Backend:
        name = SoftwareBackend(name) if name else self.software_backend
        if name not in self._backends:
            self._backends[name] = get_backend(name)
        return self._backends[name]

    def step_output(self, step_id: StepId, kind: str) -> str | None:
        """Absolute path of the expt or refl file step_id produced, if any."""
        outputs = self.steps[step_id].outputs
        filename = getattr(outputs, kind) if outputs is not None else None
        return join(self.processing_dir, filename) if filename else None

    def require_step_output(self, step_id: StepId, kind: str) -> str:
        path = self.step_output(step_id, kind)
        if path is None:
            raise FileNotFoundError(f"No {kind} file from {step_id.value}")
        return path

    def set_step_outputs(self, step_id: StepId, outputs: StepOutputs) -> None:
        """Replace a step's outputs (e.g. after reindexing) and make them current."""
        self.steps[step_id].outputs = outputs
        self.current_expt_file = self.step_output(step_id, "expt")
        self.current_refl_file = self.step_output(step_id, "refl")
        self._save_manifest()

    def _load_recorded_steps(self):
        recorded = manifest.load(self.processing_dir)
        if recorded is not None:
            self.steps.update(recorded)
            self.descriptions = manifest.load_descriptions(self.processing_dir)
            self.source = manifest.load_source(self.processing_dir)
            self.mask = manifest.load_mask(self.processing_dir)
            if self.mask is not None:
                self.mask_polygons = list(self.mask["polygons"])
            self._forget_steps_without_inputs()
            return
        legacy = recover_legacy_state(self.processing_dir)
        assert legacy is not None, "No filenames given and no output files found"
        for step_id, step_outputs in legacy.items():
            self.steps[step_id].backend = SoftwareBackend.DIALS
            self.steps[step_id].outputs = step_outputs

    def _forget_steps_without_inputs(self):
        """
        Forget results of steps whose input step has none (e.g. export kept in
        manifests written before re-running a step also reset it).
        """
        for step_id, step in self.steps.items():
            source = STEP_INPUT_FROM.get(step_id)
            if step.outputs and source is not None and not self.steps[source].outputs:
                step.clear_result()

    def _save_manifest(self):
        manifest.save(
            self.processing_dir, self.steps, self.descriptions, self.source, self.mask
        )

    async def store_mask(self) -> None:
        """Mask the drawn polygons when finding spots."""
        mask_file = await generate_mask(
            self.require_step_output(StepId.IMPORT, "expt"),
            self.mask_polygons,
            self.processing_dir,
        )
        self.mask = {"file": mask_file, "polygons": list(self.mask_polygons)}
        self._save_manifest()

    def clear_mask(self) -> None:
        self.mask_polygons = []
        self.mask_drawing = False
        if self.mask is not None:
            remove_mask(self.processing_dir)
            self.mask = None
            self._save_manifest()

    def mask_state(self) -> dict:
        """Experiment viewer params for the mask buttons."""
        return {
            "maskDrawing": self.mask_drawing,
            "maskStored": self.mask is not None,
            "maskStorable": bool(self.mask_polygons)
            and (self.mask is None or self.mask_polygons != self.mask["polygons"]),
        }

    def set_description(self, idx, instrument=None, experiment=None):
        super().set_description(idx, instrument=instrument, experiment=experiment)
        self._save_manifest()

    def _set_current_files(self):
        """Current files are the latest outputs along the workflow."""
        self.current_expt_file = None
        self.current_refl_file = None
        for step_id in self.steps:
            self.current_expt_file = (
                self.step_output(step_id, "expt") or self.current_expt_file
            )
            self.current_refl_file = (
                self.step_output(step_id, "refl") or self.current_refl_file
            )

    def setup_state(self):
        """Restore state from the recorded steps of a processing folder."""
        last_step = self.get_last_successful_step()
        assert last_step is not None
        self._set_current_files()
        self._on_experiment_type_known()
        self._load_command_history()
        self._update_workflow_state(last_step)

    def _on_experiment_type_known(self):
        self.experiment_type = self._get_experiment_type()
        self.mode = create_mode(self.experiment_type, self)

    def _update_workflow_state(self, step_id: StepId):
        if step_id in STEP_WORKFLOW_STATE:
            self.workflow_state = STEP_WORKFLOW_STATE[step_id]

    def _post_process_algorithm(
        self, step_id: StepId, algorithm_args: Dict[str, str]
    ):

        self._reset_steps(SUCCEEDING_STEPS.get(step_id, []))

        if step_id == StepId.IMPORT:
            self._on_experiment_type_known()
        self.mode.on_step_finished(step_id, algorithm_args)

    def _delete_unused_files(self, files: list[str]) -> None:
        """Delete files no recorded step still uses."""
        in_use = {
            f
            for step in self.steps.values()
            if step.outputs is not None
            for f in step.outputs.files()
        }
        for filename in files:
            path = join(self.processing_dir, filename)
            if filename not in in_use and isfile(path):
                remove(path)

    def _reset_steps(self, step_ids: list[StepId]) -> None:
        """Forget the results of step_ids and delete their files."""
        files = []
        for step_id in step_ids:
            step = self.steps[step_id]
            if step.outputs is not None:
                files += step.outputs.files()
            files += self.backend_for(step.backend).log_files(
                step_id, self.experiment_type
            )
            step.clear_result()
        self._delete_unused_files(files)

    def capabilities(self) -> dict:
        """What the GUI can show and run for this dataset (see protocol.py)."""
        return {
            "backend": self.software_backend.value,
            "experimentType": self.experiment_type.value,
            "features": sorted(self.mode.features),
            "viewers": list(self.mode.viewers),
            "backends": {
                name.value: [
                    step.value
                    for step in StepId
                    if self.backend_for(name).supports(step, self.experiment_type)
                ]
                for name in available_backends()
            },
        }

    def get_last_successful_step(self) -> StepId | None:
        """Furthest step along the workflow with results."""
        done = [step_id for step_id, step in self.steps.items() if step.outputs]
        return done[-1] if done else None

    def step_inputs(self, step_id: StepId) -> StepInputs | None:
        """Files step_id reads, or None if they are not available."""
        if step_id == StepId.IMPORT:
            if not all(isfile(p) for p in self.file_paths):
                return None
            return StepInputs(images=list(self.file_paths))
        source = STEP_INPUT_FROM[step_id]
        expt = self.step_output(source, "expt")
        refl = self.step_output(source, "refl")
        if expt is None or not isfile(expt) or (refl is not None and not isfile(refl)):
            return None
        return StepInputs(expt=expt, refl=refl)

    def can_run(self, step_id: StepId) -> bool:
        return self.step_inputs(step_id) is not None

    def _fail(self, step_id: StepId, log: str) -> None:
        self.last_algorithm_status = AlgorithmStatus.failed
        self.steps[step_id].status = Status.Failed
        self.steps[step_id].log = log

    async def run(
        self, step_id: StepId, backend_name: SoftwareBackend | None = None
    ) -> None:
        """Run a step; the result is in last_algorithm_status."""
        step = self.steps[step_id]
        try:
            backend = self.backend_for(backend_name)
        except (NotImplementedError, ValueError):
            self._fail(step_id, f"{backend_name} is not available")
            return
        if not backend.supports(step_id, self.experiment_type):
            self._fail(step_id, f"{backend.name.value} cannot run {step_id.value}")
            return
        inputs = self.step_inputs(step_id)
        if inputs is None:
            self._fail(step_id, "Unable to run algorithm")
            return

        step.status = Status.Loading
        try:
            result = await backend.run_step(
                step_id, inputs, step.args, self.processing_dir, self.experiment_type
            )
        except asyncio.CancelledError:
            self.last_algorithm_status = AlgorithmStatus.cancelled
            step.status = Status.Default
            raise
        except Exception as e:
            self._fail(step_id, str(e))
            return

        print(f"Ran command {result.command}")
        step.log = utils.get_formatted_text(result.output)
        if not result.success:
            self._fail(step_id, step.log)
            self.last_algorithm_output = step.log
            return

        old_files = step.outputs.files() if step.outputs else []
        step.backend = backend.name
        step.outputs = result.outputs
        step.command = result.command
        self._delete_unused_files(old_files)

        self._update_workflow_state(step_id)
        self.last_algorithm_status = AlgorithmStatus.finished
        step.status = Status.Default
        if result.outputs is not None:
            self.current_expt_file = (
                self.step_output(step_id, "expt") or self.current_expt_file
            )
            self.current_refl_file = (
                self.step_output(step_id, "refl") or self.current_refl_file
            )
        self._post_process_algorithm(step_id, step.args)
        self._save_manifest()

    def update_arg(
        self, step_id: StepId, param_name: str, param_value: str
    ) -> None:
        self.steps[step_id].args[param_name] = param_value

    def set_args(self, step_id: StepId, args: Dict[str, str]) -> None:
        # Keep the last find_spots scan_range unless a new one is given
        old_args = self.steps[step_id].args
        if step_id == StepId.FIND_SPOTS and "scan_range" in old_args:
            args.setdefault("scan_range", old_args["scan_range"])
        self.steps[step_id].args = args

    async def cancel_active_process(self):
        if self.active_process is not None:
            self.active_process.terminate()
            await self.active_process.communicate()
        self.active_process = None
        self.last_algorithm_status = AlgorithmStatus.cancelled

        # reflection table does not exist
        # save as separate reflection file that is appended after find spots

        # send new data to viewers

    def get_algorithm_log(self, step_id: StepId):
        step = self.steps[step_id]
        log = ""
        for log_file in self.backend_for(step.backend).log_files(
            step_id, self.experiment_type
        ):
            log_file_path = join(self.processing_dir, log_file)
            if isfile(log_file_path):
                with open(log_file_path, "r") as g:
                    log += utils.get_formatted_text(g.read())
        return log + step.log

    def get_step_log(self, step_id: StepId) -> str:
        """
        The log a tab shows for a step: its output if run in this session,
        else its log files (e.g. in a reopened folder).
        """
        return self.steps[step_id].log or self.get_algorithm_log(step_id)

    def _load_command_history(self):
        # Written before diffraview_state.json replaced it
        command_history_path = join(self.processing_dir, "command_history.log")
        if isfile(command_history_path):
            with open(command_history_path, "r") as g:
                self.command_history = json.load(g)
