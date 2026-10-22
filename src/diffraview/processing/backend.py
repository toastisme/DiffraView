"""Interface each processing package (DIALS, XDS, ...) implements."""

from __future__ import annotations

from abc import ABC, abstractmethod

from ..app_types import ExperimentType, SoftwareBackend
from .steps import StepId, StepInputs, StepResult


class Backend(ABC):
    """
    Runs steps. Every backend reads and writes DIALS .expt/.refl files, so
    steps run by different backends can follow each other.
    """

    name: SoftwareBackend

    @abstractmethod
    def supports(self, step_id: StepId, experiment_type: ExperimentType | None) -> bool:
        """Whether this backend can run step_id."""

    @abstractmethod
    def log_file(
        self, step_id: StepId, experiment_type: ExperimentType | None
    ) -> str | None:
        """Log streamed to the GUI while step_id runs (relative to processing dir)."""

    @abstractmethod
    def log_files(
        self, step_id: StepId, experiment_type: ExperimentType | None
    ) -> list[str]:
        """Logs shown for, and removed when resetting, step_id."""

    def report_file(
        self, step_id: StepId, experiment_type: ExperimentType | None
    ) -> str | None:
        """HTML report step_id writes (relative to processing dir), if any."""
        return None

    @abstractmethod
    async def run_step(
        self,
        step_id: StepId,
        inputs: StepInputs,
        args: dict[str, str],
        processing_dir: str,
        experiment_type: ExperimentType | None,
    ) -> StepResult:
        """
        Run step_id and return the DIALS files it produced. Backends other than
        DIALS convert inputs/outputs and work in a subfolder of processing_dir.
        """
