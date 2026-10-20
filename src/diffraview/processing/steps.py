"""Backend-neutral processing steps."""

from __future__ import annotations

from dataclasses import dataclass, field
from enum import Enum

from ..app_types import SoftwareBackend, Status


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

# GUI target (tab) that receives each step's log, progress and status
STEP_TARGETS = {
    StepId.IMPORT: "import",
    StepId.FIND_SPOTS: "find_spots",
    StepId.INDEX: "index",
    StepId.REFINE_BRAVAIS_SETTINGS: "index",
    StepId.REINDEX: "index",
    StepId.REFINE: "refine",
    StepId.INTEGRATE: "integrate",
    StepId.EXPORT: "integrate",
}

# Step whose output files each step reads (import reads images)
STEP_INPUT_FROM = {
    StepId.FIND_SPOTS: StepId.IMPORT,
    StepId.INDEX: StepId.FIND_SPOTS,
    StepId.REFINE_BRAVAIS_SETTINGS: StepId.INDEX,
    StepId.REINDEX: StepId.INDEX,
    StepId.REFINE: StepId.INDEX,
    StepId.INTEGRATE: StepId.REFINE,
    StepId.EXPORT: StepId.INTEGRATE,
}

# Steps whose results are invalidated when a step is run again
SUCCEEDING_STEPS = {
    StepId.FIND_SPOTS: [
        StepId.INDEX,
        StepId.REFINE_BRAVAIS_SETTINGS,
        StepId.REINDEX,
        StepId.REFINE,
        StepId.INTEGRATE,
        StepId.EXPORT,
    ],
    StepId.INDEX: [
        StepId.REFINE_BRAVAIS_SETTINGS,
        StepId.REINDEX,
        StepId.REFINE,
        StepId.INTEGRATE,
        StepId.EXPORT,
    ],
    StepId.REINDEX: [StepId.REFINE, StepId.INTEGRATE, StepId.EXPORT],
    StepId.REFINE: [StepId.INTEGRATE, StepId.EXPORT],
    StepId.INTEGRATE: [StepId.EXPORT],
}


@dataclass
class StepOutputs:
    """DIALS files a step produced, relative to the processing dir."""

    expt: str | None = None
    refl: str | None = None

    def files(self) -> list[str]:
        return [f for f in (self.expt, self.refl) if f is not None]


@dataclass
class StepInputs:
    """Absolute paths a step reads: images for import, DIALS files otherwise."""

    images: list[str] = field(default_factory=list)
    expt: str | None = None
    refl: str | None = None


@dataclass
class Step:
    """A step's last run: which backend ran it and what it produced."""

    id: StepId
    args: dict[str, str] = field(default_factory=dict)
    log: str = ""
    status: Status = Status.Default
    backend: SoftwareBackend | None = None
    outputs: StepOutputs | None = None
    command: list[str] | None = None

    def clear_result(self):
        self.backend = None
        self.outputs = None
        self.command = None


def create_workflow() -> dict[StepId, Step]:
    return {step_id: Step(step_id) for step_id in StepId}


@dataclass
class StepResult:
    success: bool
    # Unformatted log (stdout on success, the error otherwise)
    output: str
    outputs: StepOutputs | None = None
    command: list[str] | None = None
