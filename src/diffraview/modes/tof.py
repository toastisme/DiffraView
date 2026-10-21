"""Time-of-flight Laue experiments."""

from __future__ import annotations

import cctbx.array_family.flex
import dials.algorithms.rs_mapper as recviewer
import json
import numpy as np
import scipy

from dials.algorithms.spot_finding.factory import FilterRunner
from dials.algorithms.spot_finding.finder import shoeboxes_to_reflection_table
from dials.array_family import flex
from dials.model.data import PixelList, PixelListLabeller
from dxtbx.model import ExperimentList, tof_helpers
from dxtbx.serialize import load
from os.path import isfile, join
from typing import Tuple
from ..app_types import ExperimentType, Status
from ..processing.steps import StepId
from .base import ExperimentMode
from .tof_planner import TOFPlanner
from .tof_profiler import TOFProfiler


class TOFMode(TOFProfiler, TOFPlanner, ExperimentMode):
    experiment_type = ExperimentType.TOF
    features = frozenset(
        {
            "tof_range",
            "lineplot",
            "integration_profiler",
            "planner",
            "reciprocal_space_mesh",
        }
    )
    viewers = ("experiment_viewer", "rlv", "experiment_planner", "integration_profiler")
    # Laue experiments have no time-of-flight scan to interpolate over
    has_tof_scan = True

    def __init__(self, af):
        super().__init__(af)
        self.new_reflection = None
        self.experimentPlannerParams = {
            "orientations": [],
            "num_reflections": [],
            "num_stored_orientations": 0,
            "stored_miller_indices": [],
            "current_miller_indices": [],
        }
        self.integration_profiler_params = {
            "A": 200,
            "alpha": 1.0,
            "beta": 0.2,
            "sigma": 1.0,
            "tof_padding": 50,
            "xy_padding": 5,
        }
        self.user_dmin = None
        self.shoebox_cache = {}
        self.shoebox_params_cache = {}
        self.bbox_sigma_b = None
        self.tof_to_frame_interpolators = None
        self.frame_to_tof_interpolators = None
        if self.has_tof_scan:
            self.tof_to_frame_interpolators = self._get_tof_frame_interpolators()
            self.frame_to_tof_interpolators = self._get_frame_tof_interpolators()

    def on_step_finished(self, step_id: StepId, args: dict) -> None:
        if step_id == StepId.EXPORT:
            self.add_export_bool_to_integrated_reflections(
                float(args["mtz.partiality_threshold"]),
                float(args["mtz.min_isigi"]),
                args["intensity"] == "profile",
            )

    def tof_range_to_image_range(self, tof_range) -> tuple[int, int]:
        tof_to_frame = self.tof_to_frame_interpolators[0]
        tof_min = max(tof_range[0], tof_to_frame.x[0])
        tof_max = min(tof_range[1], tof_to_frame.x[-1])
        ir1 = max(1, tof_to_frame(tof_min))
        ir2 = tof_to_frame(tof_max)
        return (int(ir1), int(ir2))

    def _get_tof_frame_interpolators(self) -> Tuple[scipy.interpolate.interp1]:
        tof_to_frame_interpolators = []
        file_path = self.af.require_step_output(StepId.IMPORT, "expt")
        for expt in load.experiment_list(file_path):
            tof = expt.scan.get_property("time_of_flight")  # (usec)
            frames = list(range(len(tof)))
            tof_to_frame_interpolators.append(
                tof_helpers.tof_to_frame_interpolator(tof, frames)
            )
        return tof_to_frame_interpolators

    def _get_frame_tof_interpolators(self) -> Tuple[scipy.interpolate.interp1]:
        frame_tof_interpolators = []
        file_path = self.af.require_step_output(StepId.IMPORT, "expt")
        for expt in load.experiment_list(file_path):
            tof = expt.scan.get_property("time_of_flight")  # (usec)
            frames = list(range(len(tof)))
            frame_tof_interpolators.append(
                tof_helpers.frame_to_tof_interpolator(frames, tof)
            )
        return frame_tof_interpolators

    def get_pixel_bbox_centroid_positions(
        self,
        reflections,
        panel: int,
        pixel_pos: Tuple[int, int],
        imageset_id: int,
    ) -> Tuple[list, list, list, list]:
        """
        Finds any bounding boxes within px and py on panel
        and returns their pz positions along with
        the centroid pz position.
        """

        reflections = reflections.select(reflections["panel"] == panel)
        if "imageset_id" in reflections:
            reflections = reflections.select(reflections["imageset_id"] == imageset_id)
        else:
            reflections = reflections.select(reflections["id"] == imageset_id)
        x0, x1, y0, y1, z0, z1 = reflections["bbox"].parts()

        py = int(pixel_pos[0])
        px = int(pixel_pos[1])

        valid_reflections = reflections.select(
            (px >= x0) & (px <= x1) & (py >= y0) & (py <= y1)
        )

        if valid_reflections is None or len(valid_reflections) == 0:
            return [], [], [], []

        miller_indices = []
        x0, x1, y0, y1, z0, z1 = valid_reflections["bbox"].parts()

        if "xyzobs.px.value" in valid_reflections:
            _, _, centroid_z = valid_reflections["xyzobs.px.value"].parts()
        elif "xyzcal.px" in valid_reflections:
            _, _, centroid_z = valid_reflections["xyzcal.px"].parts()
        else:
            raise ValueError("No xyz data found in reflection table")
        if "miller_index" in valid_reflections:
            miller_indices = valid_reflections["miller_index"]

        bbox_z = tuple([(z0[i], z1[i]) for i in range(len(z0))])

        return (
            bbox_z,
            tuple(centroid_z),
            tuple(valid_reflections["idx"]),
            tuple(miller_indices),
        )

    def _bbox_pos_to_tof(self, bbox_pos, ids, imageset_id: int) -> list:
        bbox_pos_tof = []
        for idx, i in enumerate(bbox_pos):
            bbox_pos_tof.append(
                {
                    "x1": float(self.frame_to_tof_interpolators[imageset_id](i[0])),
                    "x2": float(self.frame_to_tof_interpolators[imageset_id](i[1])),
                    "id": ids[idx],
                }
            )
        return bbox_pos_tof

    def get_lineplot_data(
        self,
        panel_idx: int,
        panel_pos: Tuple[int, int],
        imageset_id: int,
        reflection_type: str = "observed",
    ) -> Tuple[Tuple[float], Tuple[float], Tuple[dict], Tuple[dict], Tuple[dict]]:

        x, y = self.af.get_pixel_spectra(panel_idx, panel_pos, imageset_id)

        integration_refl_table = self.af.step_output(self.af.integrated_step(), "refl")

        if reflection_type == "calculated_integrated":
            assert integration_refl_table and isfile(integration_refl_table)
            reflection_table = self.af._get_reflection_table_raw(
                refl_file=integration_refl_table
            )
        else:
            reflection_table = self.af._get_reflection_table_raw(reload=False)
        if reflection_table is None:
            return (tuple(x), tuple(y), (), (), ())

        bbox_pos, centroid_pos, ids, miller_idxs = (
            self.get_pixel_bbox_centroid_positions(
                reflection_table, panel_idx, panel_pos, imageset_id
            )
        )

        bbox_pos_tof = self._bbox_pos_to_tof(bbox_pos, ids, imageset_id)
        centroid_pos_tof = []

        for idx in range(len(centroid_pos)):
            centroid_pos_tof.append(
                {
                    "x": float(
                        self.frame_to_tof_interpolators[imageset_id](centroid_pos[idx])
                    ),
                    "y": y[int(centroid_pos[idx])],
                    "id": ids[idx],
                    "millerIdx": miller_idxs[idx] if len(miller_idxs) != 0 else "",
                }
            )

        # Also compute the calculated/integrated bbox range for the same pixel,
        # if integration has been run, so both can be shown together in the GUI.
        calculated_bbox_pos_tof = []
        if (
            reflection_type != "calculated_integrated"
            and integration_refl_table
            and isfile(integration_refl_table)
        ):
            calculated_reflection_table = self.af._get_reflection_table_raw(
                refl_file=integration_refl_table
            )
            if calculated_reflection_table is not None:
                calc_bbox_pos, _, calc_ids, _ = self.get_pixel_bbox_centroid_positions(
                    calculated_reflection_table, panel_idx, panel_pos, imageset_id
                )
                calculated_bbox_pos_tof = self._bbox_pos_to_tof(
                    calc_bbox_pos, calc_ids, imageset_id
                )

        return (
            tuple(x),
            tuple(y),
            tuple(bbox_pos_tof),
            tuple(centroid_pos_tof),
            tuple(calculated_bbox_pos_tof),
        )

    def add_calculated_frames_to_reflections(self):

        if self.af.current_refl_file is None:
            return

        reflections = self.af._get_reflection_table_raw()
        if "tof_cal" not in reflections:
            reflections["tof_cal"] = flex.double(reflections.nrows())
        if "L1" not in reflections:
            reflections["L1"] = flex.double(reflections.nrows())

        tof_cal = flex.double(reflections.nrows())
        L1 = flex.double(reflections.nrows())

        panel_numbers = cctbx.array_family.flex.size_t(reflections["panel"])
        expt = ExperimentList.from_file(self.af.current_expt_file)[0]

        for i_panel in range(len(expt.detector)):
            sel = panel_numbers == i_panel
            expt_reflections = reflections.select(sel)
            x, y, _ = expt_reflections["xyzcal.mm"].parts()
            s1 = expt.detector[i_panel].get_lab_coord(
                cctbx.array_family.flex.vec2_double(x, y)
            )
            expt_L1 = s1.norms() * 10**-3
            expt_tof_cal = flex.double(expt_reflections.nrows())

            for idx in range(len(expt_reflections)):
                wavelength = expt_reflections[idx]["wavelength_cal"]
                expt_tof_cal[idx] = expt.beam.get_tof_from_wavelength(
                    wavelength, expt_L1[idx]
                )
            tof_cal.set_selected(sel, expt_tof_cal)
            L1.set_selected(sel, expt_L1)

        reflections["tof_cal"] = tof_cal
        reflections["L1"] = L1

        x, y, z = reflections["xyzcal.px"].parts()
        xyz = cctbx.array_family.flex.vec3_double(len(reflections))

        for i in range(len(reflections)):
            wavelength = reflections["wavelength_cal"][i]
            L1 = reflections["L1"][i]
            tof = expt.beam.get_tof_from_wavelength(wavelength, L1)
            frame = expt.sequence.get_frame_from_tof(tof)
            xyz[i] = (x[i], y[i], frame)
        reflections["xyzcal.px"] = xyz

        reflections.as_msgpack_file(self.af.current_refl_file)

    def get_tof_range(self):
        with open(self.af.current_expt_file, "r") as g:
            expt_file = json.load(g)
            scan = expt_file["scan"][0]
            tof = scan["properties"]["time_of_flight"]  # (usec)
            min_tof = round(min(tof), 3)
            max_tof = round(max(tof), 3)
            num_images = scan["image_range"][1] - scan["image_range"][0]
            return (min_tof, max_tof, (max_tof - min_tof) / num_images)

    def wavelength_range_to_tof(
        self, wavelength_range: Tuple[float, float], expt_id: int = 0
    ) -> Tuple[float, float]:
        expt = self.af._get_experiment(expt_id)
        distance = expt.beam.get_sample_to_source_distance() * 10**-3  # (m)
        distance = distance
        tof_min = tof_helpers.tof_from_wavelength(distance, wavelength_range[0])  # (s)
        tof_min = tof_min * 1e6  # (usec)
        tof_max = tof_helpers.tof_from_wavelength(distance, wavelength_range[1])  # (s)
        tof_max = tof_max * 1e6  # (usec)

        return (tof_min, tof_max)

    def tof_range_to_wavelength(
        self, tof_range: Tuple[float, float], expt_id: int = 0
    ) -> Tuple[float, float]:
        expt = self.af._get_experiment(expt_id)
        distance = expt.beam.get_sample_to_source_distance() * 10**-3  # (m)
        wl_min = tof_helpers.wavelength_from_tof(distance, tof_range[0] * 1e-6)  # (s)
        wl_max = tof_helpers.wavelength_from_tof(distance, tof_range[1] * 1e-6)  # (s)
        return (wl_min, wl_max)

    def tof_range_to_scan_range(
        self,
        tof_range: Tuple[float, float] = None,
        wavelength_range: Tuple[float, float] = None,
        expt_id: int = 0,
    ) -> Tuple[int, int]:
        if wavelength_range is not None:
            tof_range = self.wavelength_range_to_tof(wavelength_range, expt_id)
        tof_to_frame = self.tof_to_frame_interpolators[expt_id]
        tof_min = max(tof_range[0], tof_to_frame.x[0])
        tof_max = min(tof_range[1], tof_to_frame.x[-1])
        fr1 = int(round(float(tof_to_frame(tof_min)))) + 1
        fr2 = int(round(float(tof_to_frame(tof_max)))) + 1
        return (fr1, fr2)

    def scan_range_to_tof_range(
        self, scan_range: Tuple[int, int], expt_id: int = 0
    ) -> Tuple[float, float]:
        frame_to_tof = self.frame_to_tof_interpolators[expt_id]
        fr1, fr2 = scan_range
        tof_min = round(float(frame_to_tof(fr1 - 1)), 3)
        tof_max = round(float(frame_to_tof(fr2 - 1)), 3)
        return (tof_min, tof_max)

    def get_sequence_params(self, expt_file):
        sequence = expt_file["sequence"][0]
        params = {}
        params["Image Range"] = str(tuple(sequence["image_range"]))
        min_tof = round(sequence["tof_in_seconds"][0], 3)
        max_tof = round(sequence["tof_in_seconds"][-1], 3)
        min_wavelength = round(sequence["wavelengths"][0], 3)
        max_wavelength = round(sequence["wavelengths"][-1], 3)
        params["ToF Range (s)"] = str((min_tof, max_tof))
        params["Wavelength Range (A)"] = str((min_wavelength, max_wavelength))
        return [params]

    def new_reflection_xy(self, panel_idx, expt_id, bbox):
        self.new_reflection = {"panel_idx": panel_idx, "expt_id": expt_id, "bbox": bbox}

    def get_new_reflection(self):
        return self.new_reflection

    def cancel_new_reflection(self):
        self.new_reflection = None

    def new_reflection_z(self, bbox):
        if self.new_reflection is not None:
            expt = self.af._get_experiment(self.new_reflection["expt_id"])
            frame0 = expt.sequence.get_frame_from_tof(bbox[0] * 10**-6)
            frame1 = expt.sequence.get_frame_from_tof(bbox[1] * 10**-6)

            self.new_reflection["bbox"] = self.new_reflection["bbox"][:4] + [
                frame0,
                frame1,
            ]

    def add_new_reflection(self):
        if self.new_reflection is None:
            return

        experiment = self.af._get_experiment(idx=int(self.new_reflection["expt_id"]))
        imageset = experiment.imageset
        x0, x1, y0, y1, z0, z1 = [int(i) for i in self.new_reflection["bbox"]]
        if x0 > x1:
            x0, x1 = x1, x0
        if y0 > y1:
            y0, y1 = y1, y0
        if z0 > z1:
            z0, z1 = z1, z0

        pixel_labeller = PixelListLabeller()
        for frame in range(z0, z1):
            img = imageset.get_corrected_data(frame)[self.new_reflection["panel_idx"]]
            mask = flex.bool(img.accessor(), False)
            mask[y0:y1, x0:x1] = flex.bool(mask[y0:y1, x0:x1].accessor(), True)
            plist = PixelList(frame, img, mask)
            pixel_labeller.add(plist)
        panel = int(self.new_reflection["panel_idx"])
        shoeboxes = flex.shoebox()
        creator = flex.PixelListShoeboxCreator(
            pixel_labeller, panel, 0, False, 1, 999999, False
        )
        shoeboxes.extend(creator.result())
        r = shoeboxes_to_reflection_table(imageset, shoeboxes, FilterRunner([]))

        experiments = self.af._get_experiments()

        # reflection table already exists
        # add reflection to existing table and overwrite the file
        if self.af.current_refl_file is not None:
            reflection_table = self.af._get_reflection_table_raw()
            if "imageset" in reflection_table:
                r["imageset_id"] = flex.int(1, int(self.new_reflection["expt_id"]))
            if "id" in reflection_table:
                r["id"] = flex.int(1, int(self.new_reflection["expt_id"]))
            if "idx" in reflection_table:
                r["idx"] = flex.int(1, int(len(reflection_table)))
            r.add_beam_data(experiments)
            r = self.af.add_additional_data_to_reflections(r)
            r.set_flags(flex.bool(1, True), r.flags.strong)

            reflection_table.extend(r)
            reflection_table.as_msgpack_file(self.af.current_refl_file)
            return

    def integration_type(self, args: dict) -> str:
        return args.get("integration_type", "observed")

    def reflection_fields(self, table, calculated: bool) -> dict:
        # The z of xyz*.mm is the time of flight
        fields = {}
        if "xyzobs.mm.value" in table:
            fields["tof"] = lambda i: table["xyzobs.mm.value"][i][2]
        if calculated and "xyzcal.mm" in table:
            fields["tofCal"] = lambda i: table["xyzcal.mm"][i][2]
        elif not calculated and "tof_cal" in table:
            fields["tofCal"] = lambda i: table["tof_cal"][i] * 10**6
        return fields

    def experiment_viewer_settings(self) -> dict:
        # A click shows the pixel's spectrum in the lineplot, so mark it
        return {"show_click_marker": True}

    def default_image_range(self, num_images: int) -> tuple[int, int]:
        # All time-of-flight images summed
        return (0, num_images)

    def display_scales(self, panels: list[np.ndarray]) -> list[float]:
        # Each panel's maximum is white
        scales = []
        for data in panels:
            data_max = float(np.max(data))
            scales.append(1 / data_max if data_max > 0 else 1.0)
        return scales

    def last_integration_using_calculated(self) -> bool:
        integrate = self.af.steps[StepId.INTEGRATE]
        if integrate.command is not None:
            return integrate.args.get("integration_type") == "calculated"

        if "dials.tof_integrate" in self.af.command_history:
            for i in self.af.command_history["dials.tof_integrate"]:
                if "integration_type" in i and i.split("=")[1] == "calculated":
                    return True
            return False

        for log_filename in ("tof_integrate.log", "dials.tof_integrate.log"):
            log_path = join(self.af.processing_dir, log_filename)
            if isfile(log_path):
                with open(log_path, "r") as f:
                    if "Calculated dmin from observed reflections:" not in f.read():
                        return True

        return False

    def restored_params(self) -> dict:
        find_spots_params = {}
        integrate_params = {}
        try:
            min_tof, max_tof, step_tof = self.get_tof_range()
        except KeyError:
            return {}
        min_wavelength, max_wavelength = self.tof_range_to_wavelength(
            (min_tof, max_tof)
        )
        for params in (find_spots_params, integrate_params):
            params["minTOF"] = min_tof
            params["maxTOF"] = max_tof
            params["stepTOF"] = step_tof
            params["minWavelength"] = round(min_wavelength, 4)
            params["maxWavelength"] = round(max_wavelength, 4)
            params["currentMinWavelength"] = round(min_wavelength, 4)
            params["currentMaxWavelength"] = round(max_wavelength, 4)
        return {"find_spots": find_spots_params, "integrate": integrate_params}

    def fill_rs_grid(
        self, experiments, max_resolution, grid, counts, stop=None, progress=None
    ):
        # One C++ call, so no progress, and stop only takes effect once it returns
        nproc = 8
        recviewer.process_tof_experiment_list(
            experiments, max_resolution, grid, counts, nproc, True
        )

    def _import_output_params(self, **kwargs) -> dict:

        status = self.af.steps[StepId.IMPORT].status
        assert status is not Status.Loading, (
            f"Trying to get params for {StepId.IMPORT} but status is {status}"
        )

        import_params = {
            "log": self.af.steps[StepId.IMPORT].log,
            "status": status.value,
        }

        if status == Status.Failed:
            return {"import": import_params}

        elif status == Status.Default:
            root_params = {}
            find_spots_params = {}
            rlv_params = {}
            import_params["instrumentName"] = self.af.get_instrument_name()
            import_params["experimentDescription"] = (
                self.af.get_experiment_description()
            )

            root_params["numExperiments"] = self.af.get_num_experiments()
            root_params["experimentNames"] = self.af.get_experiment_names()

            min_tof, max_tof, step_tof = self.get_tof_range()
            find_spots_params["minTOF"] = min_tof
            find_spots_params["maxTOF"] = max_tof
            find_spots_params["stepTOF"] = step_tof
            min_wavelength, max_wavelength = self.tof_range_to_wavelength(
                (min_tof, max_tof)
            )
            find_spots_params["minWavelength"] = round(min_wavelength, 4)
            find_spots_params["maxWavelength"] = round(max_wavelength, 4)
            find_spots_params["currentMinWavelength"] = round(min_wavelength, 4)
            find_spots_params["currentMaxWavelength"] = round(max_wavelength, 4)
            find_spots_params["enabled"] = True

            integrate_params = {
                "minTOF": min_tof,
                "maxTOF": max_tof,
                "stepTOF": step_tof,
                "minWavelength": round(min_wavelength, 4),
                "maxWavelength": round(max_wavelength, 4),
                "currentMinWavelength": round(min_wavelength, 4),
                "currentMaxWavelength": round(max_wavelength, 4),
            }

            rlv_params["enabled"] = False

            return {
                "root": root_params,
                "import": import_params,
                "find_spots": find_spots_params,
                "integrate": integrate_params,
                "rlv": rlv_params,
            }

    def _find_spots_output_params(self, **kwargs) -> dict:
        status = self.af.steps[StepId.FIND_SPOTS].status
        assert status != Status.Loading, (
            f"Trying to get params for {StepId.FIND_SPOTS} but status is {status}"
        )

        find_spots_params = {
            "log": self.af.steps[StepId.FIND_SPOTS].log,
            "status": status.value,
        }

        if status == Status.Failed:
            return {"find_spots": find_spots_params}

        elif status == Status.Default:
            import_params = {}
            index_params = {}
            root_params = {}
            rlv_params = {}

            self.af.add_additional_data_to_reflections()  # rlps and idxs
            refl_data = self.af.get_reflections_per_panel()
            import_params["reflectionsSummary"] = self.af.get_reflections_summary()
            root_params["reflectionTable"] = refl_data
            root_params["resetCalculatedReflectionTable"] = True
            root_params["reflectionTableMsgpack"] = (
                self.af.get_reflection_table_msgpack()
            )
            index_params["enabled"] = True

            rlv_params["enabled"] = True

            reflection_table_raw = self.af._get_reflection_table_raw(reload=False)
            experiment_viewer_params = {
                "hasObservedReflections": reflection_table_raw is not None
                and len(reflection_table_raw) > 0,
                "hasIntegratedReflections": False,
            }

            return {
                "root": root_params,
                "import": import_params,
                "find_spots": find_spots_params,
                "index": index_params,
                "rlv": rlv_params,
                "experiment_viewer": experiment_viewer_params,
            }

    def _index_output_params(self, **kwargs) -> dict:

        status = self.af.steps[StepId.INDEX].status
        assert status is not Status.Loading, (
            f"Trying to get params for {StepId.INDEX} but status is {status}"
        )

        index_params = {
            "log": self.af.get_step_log(StepId.INDEX),
            "status": status.value,
        }

        if status == Status.Failed:
            return {"index": index_params}

        import_params = {}
        root_params = {}
        refine_params = {"enabled": True}
        experiment_planner_params = {"enabled": True}

        index_params["status"] = Status.Default.value
        refl_data = self.af.get_reflections_per_panel()
        root_params["reflectionTableMsgpack"] = self.af.get_reflection_table_msgpack()
        import_params["reflectionsSummary"] = self.af.get_reflections_summary()
        import_params["crystalSummary"] = self.af.get_crystal_summary()
        root_params["reflectionTable"] = refl_data
        root_params["resetCalculatedReflectionTable"] = True
        index_params["crystalIDs"] = list(range(len(import_params["crystalSummary"])))
        index_params["detectSymmetryEnabled"] = True

        experiment_viewer_params = {"hasIntegratedReflections": False}

        return {
            "root": root_params,
            "import": import_params,
            "index": index_params,
            "refine": refine_params,
            "experiment_planner": experiment_planner_params,
            "experiment_viewer": experiment_viewer_params,
        }

    def _refine_output_params(self, **kwargs) -> dict:

        status = self.af.steps[StepId.REFINE].status
        assert status is not Status.Loading, (
            f"Trying to get params for {StepId.REFINE} but status is {status}"
        )

        refine_params = {
            "log": self.af.steps[StepId.REFINE].log,
            "status": status.value,
        }

        if status == Status.Failed:
            return {"refine": refine_params}

        root_params = {}
        import_params = {}
        index_params = {}
        integrate_params = {"enabled": True}
        integration_profiler_params = {"enabled": True}
        refl_data = self.af.get_reflections_per_panel()
        self.calculate_bbox_sigma_b()
        import_params["reflectionsSummary"] = self.af.get_reflections_summary()
        root_params["reflectionTable"] = refl_data
        root_params["reflectionTableMsgpack"] = self.af.get_reflection_table_msgpack()
        root_params["resetCalculatedReflectionTable"] = True
        import_params["crystalSummary"] = self.af.get_crystal_summary()
        index_params["crystalIDs"] = list(range(len(import_params["crystalSummary"])))

        min_tof, max_tof, step_tof = self.get_tof_range()
        integrate_params["minTOF"] = min_tof
        integrate_params["maxTOF"] = max_tof
        integrate_params["stepTOF"] = step_tof
        min_wavelength, max_wavelength = self.tof_range_to_wavelength(
            (min_tof, max_tof)
        )
        integrate_params["minWavelength"] = round(min_wavelength, 4)
        integrate_params["maxWavelength"] = round(max_wavelength, 4)
        integrate_params["currentMinWavelength"] = round(min_wavelength, 4)
        integrate_params["currentMaxWavelength"] = round(max_wavelength, 4)

        experiment_viewer_params = {"hasIntegratedReflections": False}

        return {
            "root": root_params,
            "import": import_params,
            "index": index_params,
            "refine": refine_params,
            "integration_profiler": integration_profiler_params,
            "integrate": integrate_params,
            "experiment_viewer": experiment_viewer_params,
        }

    def _refine_bravais_settings_output_params(self, **kwargs) -> dict:
        status = self.af.steps[StepId.INDEX].status
        assert status is not Status.Loading, (
            f"Trying to get params for {StepId.INDEX} but status is {status}"
        )

        index_params = {
            "log": self.af.get_step_log(StepId.INDEX),
            "status": status.value,
        }

        if status == Status.Failed:
            return {"index": index_params}

        elif status == Status.Default:
            index_params["status"] = Status.Default.value
            index_params["bravaisLattices"] = self.af.get_bravais_lattices_table()
            index_params["detectSymmetryOpen"] = True
            return {"index": index_params}

    def _reindex_output_params(self, **kwargs) -> dict:
        status = self.af.steps[StepId.INDEX].status
        assert status is not Status.Loading, (
            f"Trying to get params for {StepId.INDEX} but status is {status}"
        )

        index_params = {"status": status.value}

        if status == Status.Failed:
            return {"index": index_params}

        elif status == Status.Default:
            index_params["status"] = Status.Default.value

            import_params = {}
            root_params = {}

            refl_data = self.af.get_reflections_per_panel()
            import_params = {}
            root_params = {}
            refine_params = {"enabled": True}

            import_params["reflectionsSummary"] = self.af.get_reflections_summary()
            import_params["crystalSummary"] = self.af.get_crystal_summary()
            index_params["crystalIDs"] = list(
                range(len(import_params["crystalSummary"]))
            )
            root_params["reflectionTable"] = refl_data
            root_params["reflectionTableMsgpack"] = (
                self.af.get_reflection_table_msgpack()
            )
            root_params["resetCalculatedReflectionTable"] = True

        experiment_viewer_params = {"hasIntegratedReflections": False}

        return {
            "root": root_params,
            "import": import_params,
            "index": index_params,
            "refine": refine_params,
            "experiment_viewer": experiment_viewer_params,
        }

    def _integrate_output_params(self, **kwargs) -> dict:
        status = self.af.steps[StepId.INTEGRATE].status
        assert status is not Status.Loading, (
            f"Trying to get params for {StepId.INTEGRATE} but status is {status}"
        )

        integrate_params = {
            "log": self.af.steps[StepId.INTEGRATE].log,
            "status": status.value,
        }

        if status == Status.Failed:
            return {"integrate": integrate_params}

        elif status == Status.Default:
            integrate_params["status"] = Status.Default.value
            integrate_params["exportEnabled"] = True
            integrate_params.update(self.af.symmetry_params())

            import_params = {}
            index_params = {}
            root_params = {}

            integration_type = kwargs.get("integration_type", "observed")

            self.af.add_idxs_to_integrated_reflections()
            refl_data = self.af.get_integrated_reflections_per_panel(
                integration_type=integration_type
            )
            reflection_table = self.af.get_integrated_reflections_msgpack(
                integration_type=integration_type
            )
            import_params["reflectionsSummary"] = (
                self.af.get_integrated_reflections_summary(
                    integration_type=integration_type
                )
            )
            if integration_type == "calculated":
                root_params["calculatedReflectionTable"] = refl_data
                root_params["calculatedReflectionTableMsgpack"] = reflection_table
            else:
                root_params["reflectionTableMsgpack"] = reflection_table
                root_params["reflectionTable"] = refl_data
            import_params["crystalSummary"] = self.af.get_crystal_summary()
            index_params["crystalIDs"] = list(
                range(len(import_params["crystalSummary"]))
            )

            integrated_reflections_file_path = self.af.require_step_output(
                self.af.integrated_step(), "refl"
            )
            integrated_reflection_table_raw = self.af._get_reflection_table_raw(
                refl_file=integrated_reflections_file_path
            )
            experiment_viewer_params = {
                "hasIntegratedReflections": integrated_reflection_table_raw is not None
                and len(integrated_reflection_table_raw) > 0,
            }

            return {
                "root": root_params,
                "import": import_params,
                "index": index_params,
                "integrate": integrate_params,
                "experiment_viewer": experiment_viewer_params,
            }

    def _symmetry_output_params(self, **kwargs) -> dict:
        status = self.af.steps[StepId.SYMMETRY].status
        return {
            "integrate": {
                "log": self.af.steps[StepId.SYMMETRY].log,
                "status": status.value,
                "symmetryResultsOpen": status == Status.Default,
                **self.af.symmetry_params(),
            }
        }

    def _apply_symmetry_output_params(self, **kwargs) -> dict:
        step = self.af.steps[StepId.APPLY_SYMMETRY]
        apply_params = {"log": step.log, "status": step.status.value}
        if step.status == Status.Failed:
            return {"integrate": apply_params}
        if self.last_integration_using_calculated():
            integration_type = "calculated"
        else:
            integration_type = "observed"
        output_params = self._integrate_output_params(
            integration_type=integration_type
        )
        output_params["integrate"].update(apply_params)
        return output_params

    def _export_output_params(self, **kwargs) -> dict:
        status = self.af.steps[StepId.EXPORT].status
        assert status is not Status.Loading, (
            f"Trying to get params for {StepId.INTEGRATE} but status is {status}"
        )

        export_params = {
            "log": self.af.get_step_log(StepId.INTEGRATE),
            "status": status.value,
        }

        if status == Status.Failed:
            return {"integrate": export_params}

        elif status == Status.Default:
            export_params["status"] = Status.Default.value

            import_params = {}
            root_params = {}

            integration_type = "observed"
            if self.last_integration_using_calculated():
                integration_type = "calculated"

            self.af.add_idxs_to_integrated_reflections()

            refl_data = self.af.get_integrated_reflections_per_panel(
                integration_type=integration_type
            )
            reflection_table = self.af.get_integrated_reflections_msgpack(
                integration_type=integration_type
            )
            import_params["reflectionsSummary"] = (
                self.af.get_exported_reflections_summary(
                    integration_type=integration_type
                )
            )
            if integration_type == "calculated":
                root_params["calculatedReflectionTable"] = refl_data
                root_params["calculatedReflectionTableMsgpack"] = reflection_table
            else:
                root_params["reflectionTableMsgpack"] = reflection_table
                root_params["reflectionTable"] = refl_data
            import_params["crystalSummary"] = self.af.get_crystal_summary()

            return {
                "root": root_params,
                "import": import_params,
            }
