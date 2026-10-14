"""Backend-neutral processing steps."""

from __future__ import annotations

from dataclasses import dataclass, field
from enum import Enum
from os import remove
from os.path import isfile, join

from ..app_types import Status


class StepId(str, Enum):
    IMPORT = "import"
    FIND_SPOTS = "find_spots"
    INDEX = "index"
    REFINE_BRAVAIS_SETTINGS = "refine_bravais_settings"
    REINDEX = "reindex"
    REFINE = "refine"
    INTEGRATE = "integrate"
    EXPORT = "export"


class WorkflowState(Enum):
    imported = 1
    found_spots = 2
    indexed = 3
    refined = 4
    integrated = 5


# Workflow state reached after each step succeeds
STEP_WORKFLOW_STATE = {
    StepId.IMPORT: WorkflowState.imported,
    StepId.FIND_SPOTS: WorkflowState.found_spots,
    StepId.INDEX: WorkflowState.indexed,
    StepId.REFINE: WorkflowState.refined,
    StepId.INTEGRATE: WorkflowState.integrated,
}

# GUI command that receives each step's log, progress and status
STEP_TARGETS = {
    StepId.IMPORT: "update_import_params",
    StepId.FIND_SPOTS: "update_find_spots_params",
    StepId.INDEX: "update_index_params",
    StepId.REFINE_BRAVAIS_SETTINGS: "update_index_params",
    StepId.REINDEX: "update_index_params",
    StepId.REFINE: "update_refine_params",
    StepId.INTEGRATE: "update_integrate_params",
    StepId.EXPORT: "update_integrate_params",
}


@dataclass
class Step:
    """A step's command, files and the state of its last run."""

    id: StepId
    command: str
    # Log streamed to the GUI while running
    log_file: str | None
    required_files: list[str]
    output_experiment_file: str | None
    output_reflections_file: str | None
    output_log_files: list[str] = field(default_factory=list)
    # Reset before running this step
    succeeding_steps: list[StepId] = field(default_factory=list)
    # Optional override for required_files
    selected_files: list[str] = field(default_factory=list)
    args: dict[str, str] = field(default_factory=dict)
    log: str = ""
    status: Status = Status.Default

    def input_files(self) -> list[str]:
        return self.selected_files or self.required_files

    def reset(self, processing_dir: str):
        for path in [
            self.output_experiment_file,
            self.output_reflections_file,
        ] + self.output_log_files:
            if path:
                abs_path = join(processing_dir, path)
                if isfile(abs_path):
                    remove(abs_path)


@dataclass
class StepResult:
    success: bool
    # Unformatted log (stdout on success, the error otherwise)
    output: str
