"""Runs processing steps with the dials.* command line programs."""

from __future__ import annotations

from os.path import isfile, join

from ...app_types import ExperimentType, SoftwareBackend
from ...processing.backend import Backend, RecoveredState
from ...processing.steps import Step, StepId, StepResult

# Text in stderr that means a run failed
_FAILURE_MESSAGES = (
    "error",
    "No suitable lattice could be found",
    "Sorry: ",
    "Unable to set joint_indexing automatically",
)
# dials.import reports bad arguments on stdout
_BAD_ARGUMENTS = "Unable to handle the following arguments"

_TOF_TYPES = (ExperimentType.TOF, ExperimentType.LAUE)


class DIALSBackend(Backend):
    name = SoftwareBackend.DIALS

    def create_steps(self, image_paths: list[str]) -> dict[StepId, Step]:
        # Order matters: recover_state walks steps in this order
        steps = [
            Step(
                id=StepId.IMPORT,
                command="dials.import",
                log_file="dials.import.log",
                output_log_files=["dials.import.log"],
                required_files=image_paths,
                output_experiment_file="imported.expt",
                output_reflections_file=None,
            ),
            Step(
                id=StepId.FIND_SPOTS,
                command="dials.find_spots",
                log_file="dials.find_spots.log",
                output_log_files=["dials.find_spots.log"],
                required_files=["imported.expt"],
                output_experiment_file="imported.expt",
                output_reflections_file="strong.refl",
                succeeding_steps=[
                    StepId.INDEX,
                    StepId.REFINE_BRAVAIS_SETTINGS,
                    StepId.REINDEX,
                    StepId.REFINE,
                    StepId.INTEGRATE,
                ],
            ),
            Step(
                id=StepId.INDEX,
                command="dials.index",
                log_file="dials.index.log",
                output_log_files=[
                    "dials.index.log",
                    "dials.refine_bravais_settings.log",
                    "dials.reindex.log",
                ],
                required_files=["imported.expt", "strong.refl"],
                output_experiment_file="indexed.expt",
                output_reflections_file="indexed.refl",
                succeeding_steps=[
                    StepId.REFINE_BRAVAIS_SETTINGS,
                    StepId.REINDEX,
                    StepId.REFINE,
                    StepId.INTEGRATE,
                ],
            ),
            Step(
                id=StepId.REFINE_BRAVAIS_SETTINGS,
                command="dials.refine_bravais_settings",
                log_file="dials.refine_bravais_settings.log",
                output_log_files=["dials.refine.log"],
                required_files=["indexed.expt", "indexed.refl"],
                output_experiment_file=None,
                output_reflections_file=None,
            ),
            Step(
                id=StepId.REINDEX,
                command="dials.reindex",
                log_file=None,
                required_files=["indexed.refl"],
                output_experiment_file=None,
                output_reflections_file="reindexed.refl",
                succeeding_steps=[StepId.REFINE, StepId.INTEGRATE],
            ),
            Step(
                id=StepId.REFINE,
                command="dials.refine",
                log_file="dials.refine.log",
                output_log_files=["dials.refine.log"],
                required_files=["indexed.expt", "indexed.refl"],
                output_experiment_file="refined.expt",
                output_reflections_file="refined.refl",
                succeeding_steps=[StepId.INTEGRATE],
            ),
            Step(
                id=StepId.INTEGRATE,
                command="dials.integrate",
                log_file="dials.integrate.log",
                output_log_files=["dials.integrate.log"],
                required_files=["refined.expt", "refined.refl"],
                # The gui keeps pointing at refined.refl after integration, as
                # integrated.refl loses reflections, and loads it when needed
                output_experiment_file="integrated.expt",
                output_reflections_file="integrated.refl",
            ),
            Step(
                id=StepId.EXPORT,
                command="dials.export",
                log_file="dials.export.log",
                output_log_files=["dials.export.log"],
                required_files=["integrated.expt", "integrated.refl"],
                output_experiment_file="integrated.expt",
                output_reflections_file="integrated.refl",
            ),
        ]
        return {step.id: step for step in steps}

    def configure_steps(
        self, steps: dict[StepId, Step], experiment_type: ExperimentType
    ) -> None:
        integrate = steps[StepId.INTEGRATE]
        if experiment_type in _TOF_TYPES:
            integrate.command = "dials.tof_integrate"
            integrate.log_file = "tof_integrate.log"
        else:
            integrate.command = "dials.integrate"
            integrate.log_file = "dials.integrate.log"
        integrate.output_log_files = [integrate.log_file]

    def command_line(self, step: Step) -> list[str]:
        return (
            [step.command]
            + list(step.input_files())
            + [f"{name}={value}" for name, value in step.args.items()]
        )

    def parse_result(self, step: Step, stdout: str, stderr: str) -> StepResult:
        failed = _BAD_ARGUMENTS + ":" in stdout or any(
            message in stderr for message in _FAILURE_MESSAGES
        )
        if not failed:
            return StepResult(success=True, output=stdout)
        return StepResult(success=False, output=self._error_text(step, stdout, stderr))

    @staticmethod
    def _error_text(step: Step, stdout: str, stderr: str) -> str:
        if step.id == StepId.IMPORT and stdout:
            if "not found" in stdout:
                return stdout[: stdout.find("not found")] + "not found"
            if _BAD_ARGUMENTS in stdout and "usage" in stdout:
                return stdout[: stdout.find("usage")]
        return stderr

    def recover_state(
        self, processing_dir: str, steps: dict[StepId, Step]
    ) -> RecoveredState | None:
        last_step = None
        expt_file = None
        refl_file = None
        selected_files = {}

        for step_id, step in steps.items():
            if step.output_experiment_file is None:
                continue
            output_expt_file = join(processing_dir, step.output_experiment_file)

            # Reindexing after indexing replaces the indexed files
            if step_id == StepId.INDEX:
                reindexed_expt = join(processing_dir, "reindexed.expt")
                reindexed_refl = join(processing_dir, "reindexed.refl")
                if isfile(reindexed_expt) and isfile(reindexed_refl):
                    last_step, expt_file, refl_file = (
                        step_id,
                        reindexed_expt,
                        reindexed_refl,
                    )
                    reindexed = ["reindexed.expt", "reindexed.refl"]
                    selected_files[StepId.REFINE] = reindexed
                    selected_files[StepId.REFINE_BRAVAIS_SETTINGS] = list(reindexed)
                    continue

            if not isfile(output_expt_file):
                break
            if step.output_reflections_file is not None:
                output_refl_file = join(processing_dir, step.output_reflections_file)
                if not isfile(output_refl_file):
                    break
                refl_file = output_refl_file
            last_step, expt_file = step_id, output_expt_file

        if last_step is None:
            return None
        return RecoveredState(last_step, expt_file, refl_file, selected_files)
