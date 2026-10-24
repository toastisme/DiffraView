"""What changes with the type of experiment (TOF, Laue, rotation, ...)."""

from __future__ import annotations

import os

import dials.algorithms.rs_mapper as recviewer
import numpy as np
from dials.array_family import flex
from dxtbx import flumpy

from ..app_types import ExperimentType
from ..processing.steps import StepId

# The mesh's grid_size is its voxels across at this resolution (Å)
RS_GRID_REFERENCE_RESOLUTION = 1.0


def rs_grid_step(experiments, grid_size: int) -> float:
    """
    Voxel size (1/Å), independent of the mesh's resolution limit so meshes at
    different limits share voxels. At least 4 voxels between lattice points.
    """
    step = 2 / (RS_GRID_REFERENCE_RESOLUTION * grid_size)
    crystals = [e.crystal for e in experiments if e.crystal is not None]
    if crystals:
        max_cell = max(max(c.get_unit_cell().parameters()[:3]) for c in crystals)
        step = min(step, 1 / (4 * max_cell))
    return step


def crop_rs_grid(grid: np.ndarray, step: float, max_resolution: float):
    """
    The voxels of grid (centred on voxel n/2) within 2 * ceil(1 / (d * step)
    + 0.5) voxels across, zero where the voxel centre is beyond the limit.
    """
    centre = grid.shape[0] // 2
    half = int(np.ceil(1 / (max_resolution * step) + 0.5))
    region = slice(centre - half, centre + half)
    cropped = grid[region, region, region].copy()
    rlp = np.arange(-half, half) * step
    r2 = rlp[:, None] ** 2 + rlp[None, :] ** 2
    for i, z in enumerate(rlp):
        cropped[i][r2 + z**2 > 1 / max_resolution**2] = 0
    return cropped


def rs_grid_shells(n: int, step: float) -> np.ndarray:
    """Resolution shell (one voxel thick) of each voxel's centre."""
    rlp = (np.arange(n) - n // 2) * step
    r2 = (rlp[:, None] ** 2 + rlp[None, :] ** 2).astype(np.float32)
    shells = np.empty((n, n, n), np.int32)
    for i, z in enumerate(rlp):
        shells[i] = (np.sqrt(r2 + z**2) / step).astype(np.int32)
    return shells


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
    # Most voxels across the reciprocal space mesh, to limit memory
    max_rs_grid_size = 320

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
        self,
        experiments,
        max_resolution,
        rec_range,
        grid,
        counts,
        stop=None,
        progress=None,
    ) -> None:
        """
        Adds pixel counts to grid, and the number of pixels to counts, at the
        voxel of each pixel's rlp. The grid spans -rec_range to rec_range.
        """
        raise NotImplementedError

    def rs_grid_values(
        self, experiments, max_resolution, rec_range, n, stop=None, progress=None
    ):
        """
        Value of each voxel of a grid n across spanning -rec_range to
        rec_range, from pixels to max_resolution; -1 where no pixel. None if
        stopped. By default the mean counts, from fill_rs_grid.
        """
        grid = flex.double(flex.grid(n, n, n), 0)
        counts = flex.int(flex.grid(n, n, n), 0)
        self.fill_rs_grid(
            experiments, max_resolution, rec_range, grid, counts, stop, progress
        )
        if stop is not None and stop.is_set():
            return None
        recviewer.normalize_voxels(grid, counts)
        values = flumpy.to_numpy(grid).astype(np.float32)
        values[flumpy.to_numpy(counts) == 0] = -1
        return values

    def scale_rs_grid(self, grid: np.ndarray, step: float) -> np.ndarray:
        """
        rs_grid_values scaled for the viewer's mesh threshold slider (0.1 to
        1), 0 where no pixel. A voxel's value may depend on its resolution
        shell, which is complete in the grid, but not on the grid's size, so
        meshes at different limits look the same.
        """
        return np.maximum(grid, 0)

    def get_rs_viewer_data(
        self, grid_size: int, max_resolution: float, stop=None, progress=None
    ):
        """
        (data, shape, rlp_min, rlp_max, step, capped), capped if the voxels
        were made larger to keep to max_rs_grid_size; None if stopped.
        """
        experiments = self.af._get_experiments()
        step = rs_grid_step(experiments, grid_size)
        # Filled a voxel beyond the limit, so voxels within it hold all their
        # pixels and a mesh is a crop of any mesh with the same step
        half = int(np.ceil(1 / (max_resolution * step) + 1.5))
        capped = half > self.max_rs_grid_size // 2
        if capped:
            half = self.max_rs_grid_size // 2
            step = 1 / (max_resolution * (half - 1.5))
        scaled = self._scaled_rs_grid(experiments, step, half, stop, progress)
        if scaled is None:
            return None

        arr = crop_rs_grid(scaled, step, max_resolution)
        arr = np.minimum(arr, np.finfo(np.float16).max).astype(np.float16)
        rec_range = arr.shape[0] // 2 * step
        rlp_min = (-rec_range, -rec_range, -rec_range)
        rlp_max = (rec_range, rec_range, rec_range)
        compressed_arr = self.af.compress_image_data(arr)
        return compressed_arr, arr.shape, rlp_min, rlp_max, step, capped

    def _scaled_rs_grid(self, experiments, step, half, stop=None, progress=None):
        """
        scale_rs_grid of a grid 2 * half voxels across, or of a larger one
        kept from an earlier mesh of the same expt and step.
        """
        expt_file = self.af.current_expt_file
        key = (expt_file, os.stat(expt_file).st_mtime_ns, step)
        cache = getattr(self, "_rs_grid_cache", None)
        if cache is not None and cache[0] == key and cache[1].shape[0] >= 2 * half:
            return cache[1]
        self._rs_grid_cache = None

        # Pixels out to the grid's last voxel centres
        fill_resolution = 1 / ((half - 0.5) * step)
        values = self.rs_grid_values(
            experiments, fill_resolution, half * step, 2 * half, stop, progress
        )
        if values is None:
            return None
        scaled = self.scale_rs_grid(values, step)
        self._rs_grid_cache = (key, scaled)
        return scaled

    def add_export_bool_to_integrated_reflections(
        self, min_partiality: float, min_isigi: float, use_profile_intensities: bool
    ) -> None:
        integrated_reflections_file_path = self.af.require_step_output(
            self.af.integrated_step(), "refl"
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
