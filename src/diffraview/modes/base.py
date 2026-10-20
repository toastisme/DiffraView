"""What changes with the type of experiment (TOF, Laue, rotation, ...)."""

from __future__ import annotations

import dials.algorithms.rs_mapper as recviewer
import numpy as np
from dials.array_family import flex
from dxtbx import flumpy

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

    def display_scales(self, panels: list[np.ndarray]) -> list[float]:
        """
        Per panel, the factor the experiment viewer multiplies counts by to
        show them (0 black, 1 or more white).
        """
        raise NotImplementedError

    def restored_params(self) -> dict:
        """Extra {gui target: params} sent when a processing folder is opened."""
        return {}

    def fill_rs_grid(
        self, experiments, max_resolution, grid, counts, stop=None, progress=None
    ) -> None:
        """
        Adds pixel counts to grid, and the number of pixels to counts, at the
        voxel of each pixel's rlp
        """
        raise NotImplementedError

    def scale_rs_grid(self, grid: np.ndarray) -> np.ndarray:
        """
        Mean counts per voxel scaled for the viewer's mesh threshold slider
        (0.1 to 1).
        """
        return grid

    def get_rs_viewer_data(
        self, grid_size: int, max_resolution: float, stop=None, progress=None
    ):
        """None if stopped."""
        experiments = self.af._get_experiments()
        rec_range = 1 / (max_resolution + 1e-3)

        # Auto-scale grid_size so adjacent reciprocal lattice points have at
        # least 4 voxels between them.
        # Cap at 512 to limit memory
        crystals = [e.crystal for e in experiments if e.crystal is not None]
        if crystals:
            max_cell = max(max(c.get_unit_cell().parameters()[:3]) for c in crystals)
            required_grid_size = int(np.ceil(8 * rec_range * max_cell))
            grid_size = min(max(grid_size, required_grid_size), 512)

        grid = flex.double(flex.grid(grid_size, grid_size, grid_size), 0)
        counts = flex.int(flex.grid(grid_size, grid_size, grid_size), 0)
        step = 2.0 * rec_range / grid_size
        self.fill_rs_grid(experiments, max_resolution, grid, counts, stop, progress)
        if stop is not None and stop.is_set():
            return None

        recviewer.normalize_voxels(grid, counts)
        rlp_min = (-rec_range, -rec_range, -rec_range)
        rlp_max = (rec_range, rec_range, rec_range)
        arr = self.scale_rs_grid(flumpy.to_numpy(grid))
        arr = np.minimum(arr, np.finfo(np.float16).max).astype(np.float16)
        compressed_arr = self.af.compress_image_data(arr)
        return compressed_arr, arr.shape, rlp_min, rlp_max, step

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
