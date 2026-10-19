"""Experiment modes: behaviour that depends on the type of experiment."""

from __future__ import annotations

from ..app_types import ExperimentType
from .base import ExperimentMode


def create_mode(experiment_type: ExperimentType, af) -> ExperimentMode:
    match experiment_type:
        case ExperimentType.TOF:
            from .tof import TOFMode

            return TOFMode(af)
        case ExperimentType.ROTATION:
            from .rotation import RotationMode

            return RotationMode(af)
        case ExperimentType.LAUE:
            from .laue import LaueMode

            return LaueMode(af)
    raise NotImplementedError(f"{experiment_type.value} experiments")
