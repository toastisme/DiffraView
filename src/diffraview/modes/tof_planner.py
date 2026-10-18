"""Experiment planner: predicting reflections for new orientations."""

from __future__ import annotations

import json
import numpy as np

from collections import defaultdict
from copy import deepcopy
from dials.algorithms.scaling.combine_intensities import map_indices_to_asu
from dials.algorithms.spot_prediction import TOFReflectionPredictor
from dials.array_family import flex
from dxtbx.model import Goniometer, tof_helpers


class TOFPlanner:
    """Mixed into TOFMode; state is set up in TOFMode.__init__."""

    def get_asu_predicted_and_observed_reflections(self, expt_id, dmin=None):

        # Get observed reflections with asu miller indices
        reflection_table_raw = self.af._get_reflection_table_raw(
            reload=True, update_cache=False
        )
        observed_reflections = reflection_table_raw.select(
            reflection_table_raw["id"] == expt_id
        )
        experiments = self.af._get_experiments()
        expt = self.af._get_experiment(idx=expt_id)
        observed_reflections["miller_index"] = map_indices_to_asu(
            observed_reflections["miller_index"], expt.crystal.get_space_group()
        )

        # Filter observed based on dmin
        observed_reflections.compute_d_single(expt)
        observed_reflections = observed_reflections.select(
            observed_reflections["d"] >= dmin
        )

        # Get predicted
        phi_deg = self.af.get_goniometer_phi_angles()[expt_id]
        phi = phi_deg * np.pi / 180.0
        if dmin is None:
            dmin = self.get_dmin()
        predictor = TOFReflectionPredictor(expt, float(dmin))
        predicted_reflections = predictor.all_reflections_for_asu(phi)
        predicted_reflections["id"] = flex.int(len(predicted_reflections), expt_id)
        predicted_reflections["s0"] = predicted_reflections["s0_cal"]
        predicted_reflections.calculate_entering_flags(experiments)

        # Add ToF to xyzcal.mm
        wavelength_cal = predicted_reflections["wavelength_cal"]
        x_cal, y_cal, _ = predicted_reflections["xyzcal.mm"].parts()
        L1_cal = flex.double(len(predicted_reflections))
        for i_panel in range(len(expt.detector)):
            sel = predicted_reflections["panel"] == i_panel
            x_cal_p = x_cal.select(sel)
            y_cal_p = y_cal.select(sel)
            s1_cal = expt.detector[i_panel].get_lab_coord(
                flex.vec2_double(x_cal_p, y_cal_p)
            )
            L1_cal_p = s1_cal.norms() * 10**-3  # (m)
            L1_cal.set_selected(sel, L1_cal_p)

        distance = expt.beam.get_sample_to_source_distance() * 10**-3  # (m)
        distance = distance + L1_cal
        tof_cal = tof_helpers.tof_from_wavelength(distance, wavelength_cal)  # (s)
        tof_cal = tof_cal * 1e6  # (usec)
        predicted_reflections["xyzcal.mm"] = flex.vec3_double(x_cal, y_cal, tof_cal)

        # Add frame to xyzcal.px
        expt_tof = expt.scan.get_property("time_of_flight")  # (usec)
        frames = list(range(len(expt_tof)))
        tof_to_frame = tof_helpers.tof_to_frame_interpolator(expt_tof, frames)
        tof_cal.set_selected(tof_cal < min(expt_tof), min(expt_tof))
        tof_cal.set_selected(tof_cal > max(expt_tof), max(expt_tof))
        reflection_frames = flex.double(tof_to_frame(tof_cal))
        px, py, _ = predicted_reflections["xyzcal.px"].parts()
        predicted_reflections["xyzcal.px"] = flex.vec3_double(px, py, reflection_frames)

        # Get observed matches to predicted
        _, _, unmatched_observed_reflections = (
            predicted_reflections.match_with_reference(observed_reflections)
        )

        # Some predicted reflections will be missed due to being on panel edges
        # These can still be observed, so take the union of calculated positions
        # of observed, and predicted
        predicted_reflections.extend(unmatched_observed_reflections)

        return observed_reflections, predicted_reflections, phi_deg

    def predict_reflection_table(self, dmin, phi, current_angles):
        if self.af.current_expt_file is None:
            return

        with open(self.af.current_expt_file, "r") as g:
            expt_file = json.load(g)

        # Get an expt per crystal
        expts = []
        for expt in self.af._get_experiments():
            if expt.crystal not in [e.crystal for e in expts]:
                e = deepcopy(expt)
                goniometer = Goniometer()
                goniometer.set_rotation_axis((0, 1, 0))
                goniometer.rotate_around_origin((0, 1, 0), phi)
                e.goniometer = goniometer
                expts.append(e)

        current_miller_indices = self.get_experiment_planner_miller_indices()

        refl_data = defaultdict(list)
        for crystal_id, expt in enumerate(expts):
            predictor = TOFReflectionPredictor(expt, float(dmin))
            reflection_table_raw = predictor.all_reflections_for_asu(
                phi * np.pi / 180.0
            )

            contains_xyz_cal = "xyzcal.px" in reflection_table_raw
            contains_wavelength_cal = "wavelength_cal" in reflection_table_raw
            contains_tof_cal = "tof_cal" in reflection_table_raw

            panel_names = [i["Name"] for i in self.af.get_detector_params(expt_file)]

            new_miller_indices = []
            for i in range(len(reflection_table_raw)):
                if reflection_table_raw["miller_index"][i] in current_miller_indices:
                    continue
                new_miller_indices.append(reflection_table_raw["miller_index"][i])
                panel = reflection_table_raw["panel"][i]
                panel_name = panel_names[panel]
                refl = {
                    "panelName": panel_name,
                    "millerIdx": reflection_table_raw["miller_index"][i],
                    "indexed": True,
                    "crystalID": crystal_id,
                }

                if contains_xyz_cal:
                    refl["xyzCal"] = reflection_table_raw["xyzcal.px"][i]

                if contains_wavelength_cal:
                    refl["wavelengthCal"] = reflection_table_raw["wavelength_cal"][i]

                if contains_tof_cal:
                    refl["tofCal"] = reflection_table_raw["tof_cal"][i]

                refl_data[panel].append(refl)
        self.update_experiment_planner_params(
            "current_miller_indices", current_miller_indices + new_miller_indices
        )
        return refl_data

    def get_best_expt_orientation(
        self,
        current_angles,
        dmin,
        scan_phi_min,
        scan_phi_max,
        scan_phi_step,
        cancel_flag=None,
    ):

        def parse_reflections(reflection_table_raw, miller_indices):

            if reflection_table_raw is None:
                return None

            refl_data = defaultdict(list)
            with open(self.af.current_expt_file, "r") as g:
                expt_file = json.load(g)

            contains_xyz_cal = "xyzcal.px" in reflection_table_raw
            contains_wavelength_cal = "wavelength_cal" in reflection_table_raw
            contains_tof_cal = "tof_cal" in reflection_table_raw
            contains_crystal_id = "crystal_id" in reflection_table_raw

            panel_names = [i["Name"] for i in self.af.get_detector_params(expt_file)]

            for i in range(len(reflection_table_raw)):
                if reflection_table_raw["miller_index"][i] in miller_indices:
                    continue
                panel = reflection_table_raw["panel"][i]
                panel_name = panel_names[panel]
                refl = {
                    "panelName": panel_name,
                    "millerIdx": reflection_table_raw["miller_index"][i],
                    "indexed": True,
                }
                if contains_crystal_id:
                    refl["crystalID"] = reflection_table_raw["crystal_id"][i]

                if contains_xyz_cal:
                    refl["xyzCal"] = reflection_table_raw["xyzcal.px"][i]

                if contains_wavelength_cal:
                    refl["wavelengthCal"] = reflection_table_raw["wavelength_cal"][i]

                if contains_tof_cal:
                    refl["tof_cal"] = reflection_table_raw["tof_cal"][i]

                refl_data[panel].append(refl)
            return refl_data

        if self.af.current_expt_file is None:
            return

        stored_miller_indices = self.experimentPlannerParams["stored_miller_indices"]
        # Coarse search
        best_new_miller_indices = []
        best_refl_table = None
        best_angle = None
        scan_data = []
        angles = list(np.arange(scan_phi_min, scan_phi_max, scan_phi_step))
        total = len(angles)
        for step, angle in enumerate(angles):
            if cancel_flag is not None and cancel_flag[0]:
                return
            # Get an expt per crystal
            expts = []
            angle_max_count = 0
            for expt in self.af._get_experiments():
                if expt.crystal not in [e.crystal for e in expts]:
                    e = deepcopy(expt)
                    goniometer = Goniometer()
                    goniometer.set_rotation_axis((0, 1, 0))
                    goniometer.rotate_around_origin((0, 1, 0), angle)
                    e.goniometer = goniometer
                    expts.append(e)
                for crystal_id, crystal_expt in enumerate(expts):
                    predictor = TOFReflectionPredictor(crystal_expt, float(dmin))
                    refl_table = predictor.all_reflections_for_asu(
                        angle * np.pi / 180.0
                    )
                    new_miller_indices = [
                        i
                        for i in refl_table["miller_index"]
                        if i not in stored_miller_indices
                    ]
                    if len(new_miller_indices) > angle_max_count:
                        angle_max_count = len(new_miller_indices)
                    if len(new_miller_indices) > len(best_new_miller_indices):
                        best_new_miller_indices = new_miller_indices
                        best_refl_table = refl_table
                        best_refl_table["crystal_id"] = flex.int(
                            len(best_refl_table), crystal_id
                        )
                        best_angle = angle
            scan_data.append([float(angle), angle_max_count])
            yield int((step + 1) * 100 / total), None

        if best_refl_table is not None:
            self.update_experiment_planner_params(
                "current_miller_indices",
                stored_miller_indices + best_new_miller_indices,
            )
            yield (
                100,
                (
                    best_angle,
                    parse_reflections(best_refl_table, stored_miller_indices),
                    scan_data,
                ),
            )
        else:
            yield 100, (None, None, scan_data)

    def update_experiment_planner_params(self, key, value):
        self.experimentPlannerParams[key] = value

    def get_experiment_planner_params(self):
        return (
            self.experimentPlannerParams["orientations"],
            self.experimentPlannerParams["num_reflections"],
            self.experimentPlannerParams["num_stored_orientations"],
        )

    def get_experiment_planner_miller_indices(self):
        return self.experimentPlannerParams["current_miller_indices"]

    def clear_experiment_planner_params(self):
        self.experimentPlannerParams = {
            "orientations": [],
            "num_reflections": [],
            "num_stored_orientations": 0,
            "stored_miller_indices": [],
            "current_miller_indices": [],
            "completeness": [],
        }

    def get_dmin(self):
        # Use the average wavelength for a more realistic estimation of dmin
        experiment = self.af._get_experiment()
        unit_s0 = experiment.beam.get_unit_s0()
        wavelength_range = experiment.beam.get_wavelength_range()
        wl = (wavelength_range[0] + wavelength_range[1]) / 2.0
        s0 = (unit_s0[0] / wl, unit_s0[1] / wl, unit_s0[2] / wl)
        dmin = experiment.detector.get_max_resolution(s0)
        return dmin

    def update_user_dmin(self, dmin):
        self.user_dmin = dmin

    def get_user_dmin(self):
        return self.user_dmin
