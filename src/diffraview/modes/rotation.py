"""Monochromatic rotation experiments (e.g. X-ray)."""

from __future__ import annotations

from os.path import getmtime

import dials.algorithms.rs_mapper as recviewer
import numpy as np
from dxtbx import flumpy
from dxtbx.serialize import load
from scitbx import matrix

from ..app_types import ExperimentType, Status
from ..backends.dials.beam_position import (
    BeamPositionResult,
    beam_centres,
    search_beam_position,
)
from ..processing.steps import StepId
from .base import ExperimentMode, rs_grid_shells

DISPLAY_SCALE = 0.04
# The mesh threshold slider's 1, in times the background at that resolution
RS_GRID_SCALE = 20


def image_angle(scan, i: int) -> float:
    """Mid-angle (radians) of the imageset's image i."""
    # Array indices start at image_range[0] - 1, not 0
    return scan.get_angle_from_array_index(
        scan.get_array_range()[0] + i + 0.5, deg=False
    )


def shell_medians(shells: np.ndarray, values: np.ndarray) -> np.ndarray:
    """Median of values in each shell index (1 where a shell has none or 0)."""
    order = np.lexsort((values, shells))
    sorted_values = values[order]
    counts = np.bincount(shells, minlength=shells.max() + 1 if shells.size else 1)
    starts = np.concatenate(([0], np.cumsum(counts)[:-1]))
    medians = np.ones(len(counts), np.float32)
    has = counts > 0
    medians[has] = sorted_values[starts[has] + counts[has] // 2]
    medians[medians <= 0] = 1
    return medians


class RotationMode(ExperimentMode):
    experiment_type = ExperimentType.ROTATION
    features = frozenset({"reciprocal_space_mesh", "beam_position_search"})
    viewers = ("experiment_viewer", "rlv")

    def __init__(self, af):
        super().__init__(af)
        self.optimised_expt = None

    async def search_beam_position(
        self, args: dict[str, str], on_progress=None
    ) -> BeamPositionResult:
        """dials.search_beam_position of the current expt."""
        af = self.af
        if af.current_expt_file is None:
            raise RuntimeError("Nothing to search yet")
        refl = None
        if args.get("method", "default") == "default":
            refl = af.step_output(StepId.FIND_SPOTS, "refl")
            if refl is None:
                raise RuntimeError(
                    "The default method needs spots: run Find Spots first"
                )
        self.optimised_expt = None
        searched = self._expt_version()
        result = await search_beam_position(
            af.current_expt_file, refl, args, af.processing_dir, on_progress
        )
        if result.optimised_expt is not None:
            self.optimised_expt = (result.optimised_expt, searched)
        return result

    def _expt_version(self) -> tuple[str, float]:
        return self.af.current_expt_file, getmtime(self.af.current_expt_file)

    def beam_centres(self, optimised: bool = False) -> list[dict]:
        """Beam centres of the current expt, or of the last search's."""
        if optimised:
            return beam_centres(self.optimised_expt[0])
        if self.af.current_expt_file is None:
            return []
        return beam_centres(self.af.current_expt_file)

    def use_optimised_beam_position(self) -> None:
        """Replace the current expt with the last search's, and update the current reflections' rlps."""
        af = self.af
        if self.optimised_expt is None:
            raise RuntimeError("No optimised beam position to use")
        optimised, searched = self.optimised_expt
        if searched != self._expt_version():
            raise RuntimeError(
                "The experiments have changed since the search: search again"
            )
        experiments = load.experiment_list(optimised, check_format=False)
        experiments.as_file(af.current_expt_file)
        self.optimised_expt = None
        if af.current_refl_file is not None:
            table = af._get_reflection_table_raw()
            if "xyzobs.px.value" in table:
                table.centroid_px_to_mm(experiments)
                table.map_centroids_to_reciprocal_space(experiments)
                table.as_msgpack_file(af.current_refl_file)

    def on_step_finished(self, step_id: StepId, args: dict) -> None:
        if step_id == StepId.EXPORT:
            self.add_export_bool_to_integrated_reflections(
                float(args["mtz.partiality_threshold"]),
                float(args["mtz.min_isigi"]),
                args["intensity"] == "profile",
            )

    def integration_type(self, args: dict) -> str:
        # dials.integrate always predicts reflections
        return "calculated"

    def last_integration_using_calculated(self) -> bool:
        return True

    def experiment_viewer_settings(self) -> dict:
        # No lineplot, so a click shows nothing to mark
        return {"show_click_marker": False}

    def default_image_range(self, num_images: int) -> tuple[int, int]:
        # The first image only (stack 1)
        return (0, min(1, num_images))

    def display_scales(self, panels: list[np.ndarray]) -> list[float]:
        pixels = np.clip(np.concatenate([p.ravel() for p in panels]), 0, None)
        percentile = float(np.percentile(pixels, 90))
        scale = DISPLAY_SCALE / percentile if percentile > 0 else DISPLAY_SCALE / 2
        return [scale] * len(panels)

    def restored_params(self) -> dict:
        steps = self.af.steps
        scale_params = {
            "enabled": steps[StepId.INTEGRATE].outputs is not None,
            "reportAvailable": self.af.step_report(StepId.SCALE) is not None,
        }
        if steps[StepId.SCALE].outputs is not None:
            scale_params["log"] = self.af.get_algorithm_log(StepId.SCALE)
            scale_params["exportEnabled"] = True
        return {
            "find_spots": {"numImages": self.af.get_num_images()},
            "scale": scale_params,
        }

    def rs_grid_values(
        self, experiments, max_resolution, rec_range, n, stop=None, progress=None
    ):
        # The brightest pixel, as a mean buries sharp spots in background
        step = 2 * rec_range / n
        half = n // 2
        values = np.full(n**3, -1, np.float32)
        # Experiments of one imageset (e.g. several lattices) share images
        expts = []
        for expt in experiments:
            if not any(expt.imageset is e.imageset for e in expts):
                expts.append(expt)
        total = sum(len(e.imageset) for e in expts)
        done = 0
        for expt in expts:
            imageset = expt.imageset
            gonio, scan, s0 = expt.goniometer, expt.scan, expt.beam.get_s0()
            setting_inv = matrix.sqr(gonio.get_setting_rotation()).inverse()
            fixed_inv = matrix.sqr(gonio.get_fixed_rotation()).inverse()
            axis = matrix.col(gonio.get_rotation_axis_datum())
            # As dials.rs_mapper, but in the frame of the reflection table's rlp
            panels = []
            for panel in expt.detector:
                nfast, nslow = panel.get_image_size()
                xy = recviewer.get_target_pixels(
                    panel, s0, nfast, nslow, max_resolution
                )
                s1 = panel.get_lab_coord(panel.pixel_to_millimeter(xy + (0.5, 0.5)))
                s1 = s1 / s1.norms() * (1 / expt.beam.get_wavelength())
                S = flumpy.to_numpy(tuple(setting_inv) * (s1 - s0)).astype(np.float32)
                pixels = flumpy.to_numpy(xy).astype(np.int64)
                panels.append((S, pixels[:, 1] * nfast + pixels[:, 0]))
            for i in range(len(imageset)):
                if stop is not None and stop.is_set():
                    return None
                rotation = fixed_inv * axis.axis_and_angle_as_r3_rotation_matrix(
                    -image_angle(scan, i)
                )
                # Rows of S to voxel coordinates; all > 0 within the grid
                to_voxel = np.array(rotation, np.float32).reshape(3, 3).T / step
                data = imageset.get_raw_data(i)
                # Each image's mask, which includes its overloads
                mask = imageset.get_mask(i)
                for (S, pixels), panel_data, panel_mask in zip(panels, data, mask):
                    ind = (S @ to_voxel + (half + 0.5)).astype(np.int64)
                    np.clip(ind, 0, n - 1, out=ind)
                    voxel = (ind[:, 0] * n + ind[:, 1]) * n + ind[:, 2]
                    counts = panel_data.as_numpy_array().ravel()[pixels]
                    counts = np.maximum(counts, 0).astype(np.float32)
                    # -1 leaves a voxel with only masked pixels empty
                    counts[~panel_mask.as_numpy_array().ravel()[pixels]] = -1
                    np.maximum.at(values, voxel, counts)
                done += 1
                if progress is not None:
                    progress(done / total)
        return values.reshape(n, n, n)

    def scale_rs_grid(self, grid, step):
        # Times the median voxel of its resolution shell, as the background
        # falls with resolution; RS_GRID_SCALE times is the slider's 1
        filled = grid >= 0
        shell = rs_grid_shells(grid.shape[0], step)
        filled_shell = shell[filled]
        filled_values = grid[filled]
        medians = shell_medians(filled_shell, filled_values)
        scaled = np.zeros(grid.shape, np.float32)
        scaled[filled] = filled_values / (RS_GRID_SCALE * medians[filled_shell])
        return scaled

    def get_sequence_params(self, expt_file):
        scan = expt_file["scan"][0]
        return [
            {
                "Image Range": str(tuple(scan["image_range"])),
                "Oscillation (deg)": str(tuple(scan["oscillation"])),
            }
        ]

    def _step_params(self, step_id: StepId) -> tuple[dict, Status]:
        status = self.af.steps[step_id].status
        assert status is not Status.Loading, (
            f"Trying to get params for {step_id} but status is {status}"
        )
        return {"log": self.af.get_step_log(step_id), "status": status.value}, status

    def _crystal_params(self, import_params: dict, index_params: dict) -> None:
        import_params["crystalSummary"] = self.af.get_crystal_summary()
        index_params["crystalIDs"] = list(range(len(import_params["crystalSummary"])))

    def _observed_reflection_params(self, root_params: dict, import_params: dict):
        import_params["reflectionsSummary"] = self.af.get_reflections_summary()
        root_params["reflectionTable"] = self.af.get_reflections_per_panel()
        root_params["reflectionTableMsgpack"] = self.af.get_reflection_table_msgpack()
        root_params["resetCalculatedReflectionTable"] = True

    def _import_output_params(self, **kwargs) -> dict:
        import_params, status = self._step_params(StepId.IMPORT)
        if status == Status.Failed:
            return {"import": import_params}

        import_params["instrumentName"] = self.af.get_instrument_name()
        import_params["experimentDescription"] = self.af.get_experiment_description()
        root_params = {
            "numExperiments": self.af.get_num_experiments(),
            "experimentNames": self.af.get_experiment_names(),
        }
        find_spots_params = {"enabled": True, "numImages": self.af.get_num_images()}
        return {
            "root": root_params,
            "import": import_params,
            "find_spots": find_spots_params,
            "rlv": {"enabled": True},
        }

    def _find_spots_output_params(self, **kwargs) -> dict:
        find_spots_params, status = self._step_params(StepId.FIND_SPOTS)
        if status == Status.Failed:
            return {"find_spots": find_spots_params}

        root_params = {}
        import_params = {}
        self.af.add_additional_data_to_reflections()  # rlps and idxs
        self._observed_reflection_params(root_params, import_params)

        reflection_table_raw = self.af._get_reflection_table_raw(reload=False)
        return {
            "root": root_params,
            "import": import_params,
            "find_spots": find_spots_params,
            "index": {"enabled": True},
            "rlv": {"enabled": True},
            "experiment_viewer": {
                "hasObservedReflections": reflection_table_raw is not None
                and len(reflection_table_raw) > 0,
                "hasIntegratedReflections": False,
            },
        }

    def _index_output_params(self, **kwargs) -> dict:
        index_params, status = self._step_params(StepId.INDEX)
        if status == Status.Failed:
            return {"index": index_params}

        root_params = {}
        import_params = {}
        self._observed_reflection_params(root_params, import_params)
        self._crystal_params(import_params, index_params)
        index_params["detectSymmetryEnabled"] = True
        return {
            "root": root_params,
            "import": import_params,
            "index": index_params,
            "refine": {"enabled": True},
            "experiment_viewer": {"hasIntegratedReflections": False},
        }

    def _refine_bravais_settings_output_params(self, **kwargs) -> dict:
        index_params, status = self._step_params(StepId.INDEX)
        if status == Status.Failed:
            return {"index": index_params}

        index_params["bravaisLattices"] = self.af.get_bravais_lattices_table()
        index_params["detectSymmetryOpen"] = True
        return {"index": index_params}

    def _reindex_output_params(self, **kwargs) -> dict:
        index_params, status = self._step_params(StepId.INDEX)
        del index_params["log"]
        if status == Status.Failed:
            return {"index": index_params}

        root_params = {}
        import_params = {}
        self._observed_reflection_params(root_params, import_params)
        self._crystal_params(import_params, index_params)
        return {
            "root": root_params,
            "import": import_params,
            "index": index_params,
            "refine": {"enabled": True},
            "experiment_viewer": {"hasIntegratedReflections": False},
        }

    def _refine_output_params(self, **kwargs) -> dict:
        refine_params, status = self._step_params(StepId.REFINE)
        if status == Status.Failed:
            return {"refine": refine_params}

        root_params = {}
        import_params = {}
        index_params = {}
        self._observed_reflection_params(root_params, import_params)
        self._crystal_params(import_params, index_params)
        return {
            "root": root_params,
            "import": import_params,
            "index": index_params,
            "refine": refine_params,
            "integrate": {"enabled": True},
            "experiment_viewer": {"hasIntegratedReflections": False},
        }

    def _calculated_reflection_params(self, root_params: dict) -> None:
        self.af.add_idxs_to_integrated_reflections()
        root_params["calculatedReflectionTable"] = (
            self.af.get_integrated_reflections_per_panel(integration_type="calculated")
        )
        root_params["calculatedReflectionTableMsgpack"] = (
            self.af.get_integrated_reflections_msgpack(integration_type="calculated")
        )

    def _integrate_output_params(self, **kwargs) -> dict:
        integrate_params, status = self._step_params(StepId.INTEGRATE)
        if status == Status.Failed:
            return {"integrate": integrate_params}

        integrate_params["exportEnabled"] = True
        integrate_params.update(self.af.symmetry_params())
        root_params = {}
        import_params = {}
        index_params = {}
        self._calculated_reflection_params(root_params)
        import_params["reflectionsSummary"] = (
            self.af.get_integrated_reflections_summary(integration_type="calculated")
        )
        self._crystal_params(import_params, index_params)

        integrated = self.af._get_reflection_table_raw(
            refl_file=self.af.require_step_output(self.af.integrated_step(), "refl")
        )
        return {
            "root": root_params,
            "import": import_params,
            "index": index_params,
            "integrate": integrate_params,
            # Integrating or applying symmetry resets scaling
            "scale": {
                "enabled": True,
                "log": "",
                "status": Status.Default.value,
                "reportAvailable": False,
                "exportEnabled": False,
            },
            "experiment_viewer": {
                "hasIntegratedReflections": integrated is not None
                and len(integrated) > 0,
            },
        }

    def _symmetry_output_params(self, **kwargs) -> dict:
        symmetry_params, status = self._step_params(StepId.SYMMETRY)
        symmetry_params.update(self.af.symmetry_params())
        symmetry_params["symmetryResultsOpen"] = status == Status.Default
        return {"integrate": symmetry_params}

    def _apply_symmetry_output_params(self, **kwargs) -> dict:
        apply_params, status = self._step_params(StepId.APPLY_SYMMETRY)
        if status == Status.Failed:
            return {"integrate": apply_params}
        output_params = self._integrate_output_params()
        output_params["integrate"].update(apply_params)
        return output_params

    def _scale_output_params(self, **kwargs) -> dict:
        scale_params, status = self._step_params(StepId.SCALE)
        scale_params["reportAvailable"] = self.af.step_report(StepId.SCALE) is not None
        scale_params["exportEnabled"] = self.af.steps[StepId.SCALE].outputs is not None
        return {"scale": scale_params}

    def _scaled_export_params(self, step_id: StepId) -> dict:
        params, status = self._step_params(step_id)
        # Keep the scale log in the tab
        if status != Status.Failed:
            params["log"] = self.af.get_step_log(StepId.SCALE)
        return {"scale": params}

    def _export_scaled_output_params(self, **kwargs) -> dict:
        return self._scaled_export_params(StepId.EXPORT_SCALED)

    def _merge_output_params(self, **kwargs) -> dict:
        return self._scaled_export_params(StepId.MERGE)

    def _export_output_params(self, **kwargs) -> dict:
        export_params, status = self._step_params(StepId.EXPORT)
        # Keep the integrate log in the tab
        export_params["log"] = self.af.get_step_log(StepId.INTEGRATE)
        if status == Status.Failed:
            return {"integrate": export_params}

        root_params = {}
        import_params = {}
        self._calculated_reflection_params(root_params)
        import_params["reflectionsSummary"] = self.af.get_exported_reflections_summary(
            integration_type="calculated"
        )
        import_params["crystalSummary"] = self.af.get_crystal_summary()
        return {
            "root": root_params,
            "import": import_params,
            "integrate": export_params,
        }
