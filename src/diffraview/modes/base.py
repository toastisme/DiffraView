"""What changes with the type of experiment (TOF, Laue, rotation, ...)."""

from __future__ import annotations

from ..app_types import ExperimentType
from ..processing.steps import StepId


class ExperimentMode:
    """
    Created by ActiveFile once import has found the experiment type. Reads the
    dataset through self.af. Subclasses provide _<step>_output_params methods
    returning {gui command: params} for each step.
    """

    experiment_type: ExperimentType
    # Optional tools this mode provides (see handlers using requires=)
    features: frozenset[str] = frozenset()

    def __init__(self, af):
        self.af = af

    def output_params(self, step_id: StepId, **kwargs) -> dict:
        builder = getattr(self, f"_{step_id.value}_output_params", None)
        if builder is None:
            raise NotImplementedError(
                f"{type(self).__name__} has no output for {step_id.value}"
            )
        return builder(**kwargs)

    def on_step_finished(self, step_id: StepId, args: dict) -> None:
        """Called after a step succeeds."""

    def last_integration_using_calculated(self) -> bool:
        return False
