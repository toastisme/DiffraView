"""Interface each processing package (DIALS, XDS, ...) implements."""

from __future__ import annotations

from abc import ABC, abstractmethod
from dataclasses import dataclass

from ..app_types import ExperimentType, SoftwareBackend
from .steps import Step, StepId, StepResult


@dataclass
class RecoveredState:
    """Where an existing processing folder got to."""

    last_step: StepId
    expt_file: str
    refl_file: str | None
    # step -> selected_files override
    selected_files: dict[StepId, list[str]]


class Backend(ABC):
    name: SoftwareBackend

    @abstractmethod
    def create_steps(self, image_paths: list[str]) -> dict[StepId, Step]:
        """Steps available before the experiment type is known."""

    def configure_steps(
        self, steps: dict[StepId, Step], experiment_type: ExperimentType
    ) -> None:
        """Adjust steps once import has determined the experiment type."""

    @abstractmethod
    def command_line(self, step: Step) -> list[str]:
        """Program and arguments to run step."""

    @abstractmethod
    def parse_result(self, step: Step, stdout: str, stderr: str) -> StepResult:
        """Whether a finished run succeeded, and the output to show."""

    @abstractmethod
    def recover_state(
        self, processing_dir: str, steps: dict[StepId, Step]
    ) -> RecoveredState | None:
        """State of an existing processing folder, or None if nothing ran."""
