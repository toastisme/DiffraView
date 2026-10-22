"""Monochromatic rotation experiments (e.g. X-ray)."""

from __future__ import annotations

import dials.algorithms.rs_mapper as recviewer
import numpy as np
from dials.array_family import flex
from dxtbx import flumpy
from scitbx import matrix

from ..app_types import ExperimentType, Status
from ..processing.steps import StepId
from .base import ExperimentMode

DISPLAY_SCALE = 0.04


class RotationMode(ExperimentMode):
    experiment_type = ExperimentType.ROTATION
    features = frozenset({"reciprocal_space_mesh"})
    viewers = ("experiment_viewer", "rlv")

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
        scale_params = {"enabled": steps[StepId.INTEGRATE].outputs is not None}
        if steps[StepId.SCALE].outputs is not None:
            scale_params["log"] = self.af.get_algorithm_log(StepId.SCALE)
        return {
            "find_spots": {"numImages": self.af.get_num_images()},
            "scale": scale_params,
        }

    def fill_rs_grid(
        self, experiments, max_resolution, grid, counts, stop=None, progress=None
    ):
        # As dials.rs_mapper, but in the frame of the reflection table's rlp
        rec_range = 1 / (max_resolution + 1e-3)
        # Experiments of one imageset (e.g. several lattices) share images
        expts = []
        for expt in experiments:
            if not any(expt.imageset is e.imageset for e in expts):
                expts.append(expt)
        total = sum(len(e.imageset) * len(e.detector) for e in expts)
        done = 0
        for expt in expts:
            imageset = expt.imageset
            gonio, scan, s0 = expt.goniometer, expt.scan, expt.beam.get_s0()
            setting_inv = matrix.sqr(gonio.get_setting_rotation()).inverse()
            fixed_inv = matrix.sqr(gonio.get_fixed_rotation()).inverse()
            axis = gonio.get_rotation_axis_datum()
            mask = imageset.get_mask(0)
            for i_panel, panel in enumerate(expt.detector):
                nfast, nslow = panel.get_image_size()
                xy = recviewer.get_target_pixels(
                    panel, s0, nfast, nslow, max_resolution
                )
                # Masked pixels are left out of the map
                pixels = flumpy.to_numpy(xy).astype(int)
                in_mask = mask[i_panel].as_numpy_array()[pixels[:, 1], pixels[:, 0]]
                xy = xy.select(flumpy.from_numpy(in_mask))
                centres = xy + (0.5, 0.5)
                s1 = panel.get_lab_coord(panel.pixel_to_millimeter(centres))
                s1 = s1 / s1.norms() * (1 / expt.beam.get_wavelength())
                S = tuple(setting_inv) * (s1 - s0)
                for i in range(len(imageset)):
                    if stop is not None and stop.is_set():
                        return
                    phi = scan.get_angle_from_array_index(i + 0.5, deg=False)
                    rlp = tuple(fixed_inv) * S.rotate_around_origin(axis, -phi)
                    data = imageset.get_raw_data(i)[i_panel]
                    if not isinstance(data, (flex.int, flex.double)):
                        data = data.as_double()
                    recviewer.fill_voxels(data, grid, counts, rlp, xy, rec_range)
                    done += 1
                    if progress is not None:
                        progress(done / total)

    def scale_rs_grid(self, grid):
        # X-ray background is a few counts, far above the slider; 1 is 10x the
        # median voxel with data, so the slider picks out peaks
        filled = grid[grid > 0]
        if filled.size == 0:
            return grid
        return grid / (10 * np.median(filled))

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
            "rlv": {"enabled": False},
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
            "scale": {"enabled": True, "log": "", "status": Status.Default.value},
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
        return {"scale": scale_params}

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
