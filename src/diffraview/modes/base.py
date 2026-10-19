"""What changes with the type of experiment (TOF, Laue, rotation, ...)."""

from __future__ import annotations

import numpy as np
from dials.array_family import flex

from ..app_types import ExperimentType
from ..processing.steps import StepId


class ExperimentMode:
    """
    Created by ActiveFile once import has found the experiment type. Reads the
    dataset through self.af. Subclasses provide _<step>_output_params methods
    returning {gui target: params} for each step, and the methods below that
    raise NotImplementedError; nothing here assumes an experiment type.
    """

    experiment_type: ExperimentType
    # Optional tools this mode provides (see handlers using requires=)
    features: frozenset[str] = frozenset()
    # Viewer tabs the GUI shows for this mode
    viewers: tuple[str, ...] = ("experiment_viewer", "rlv")

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

    def integration_type(self, args: dict) -> str:
        """Reflections ("observed" or "calculated") integrate with args uses."""
        raise NotImplementedError

    def last_integration_using_calculated(self) -> bool:
        raise NotImplementedError

    def reflection_fields(self, table, calculated: bool) -> dict:
        """
        Reflection table fields only this mode has, {field: row -> value}, for
        an observed or (calculated) integrated calculated reflection table.
        """
        return {}

    def default_image_range(self, num_images: int) -> tuple[int, int]:
        """Imageset indices the experiment viewer first shows summed."""
        raise NotImplementedError

    def experiment_viewer_settings(self) -> dict:
        """Sent to the experiment viewer as settings.update after import."""
        raise NotImplementedError

    def normalise_images(self, panels: list[np.ndarray]) -> list[np.ndarray]:
        """Panel pixel values scaled to 0-1 for the experiment viewer."""
        raise NotImplementedError

    def restored_params(self) -> dict:
        """Extra {gui target: params} sent when a processing folder is opened."""
        return {}

    def add_export_bool_to_integrated_reflections(
        self, min_partiality: float, min_isigi: float, use_profile_intensities: bool
    ) -> None:
        integrated_reflections_file_path = self.af.require_step_output(
            StepId.INTEGRATE, "refl"
        )
        reflection_table_raw = self.af._get_reflection_table_raw(
            refl_file=integrated_reflections_file_path
        )
        partiality_sel = reflection_table_raw["partiality"] > min_partiality
        if use_profile_intensities:
            i_type = "prf"
        else:
            i_type = "sum"
        intensities = reflection_table_raw[f"intensity.{i_type}.value"]
        sigmas = flex.sqrt(reflection_table_raw[f"intensity.{i_type}.variance"])
        isigi = intensities / sigmas
        isigi_sel = isigi > min_isigi
        reflection_table_raw["exported"] = partiality_sel & isigi_sel
        reflection_table_raw.as_msgpack_file(integrated_reflections_file_path)
