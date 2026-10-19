"""Reflection (.refl) data shared by all experiment types."""

from __future__ import annotations

import base64
import cctbx.array_family.flex
import json
import numpy as np
from collections import defaultdict
from dials.array_family import flex
from dxtbx import flumpy
from dxtbx.serialize import load
from os.path import isfile, join
from typing import Dict
from .. import experiment_params
from ..processing.steps import StepId, WorkflowState


class ReflectionModel:
    def _get_reflection_table_raw(self, reload=True, refl_file=None, update_cache=True):
        if self.current_refl_file is None and refl_file is None:
            return None

        if self.reflection_table_raw is not None and not reload:
            return self.reflection_table_raw

        # from_file reads both the HDF5 and legacy msgpack formats
        if refl_file is not None:
            return flex.reflection_table.from_file(refl_file)

        reflection_table_raw = flex.reflection_table.from_file(self.current_refl_file)

        if update_cache:
            self.reflection_table_raw = reflection_table_raw
        return self.reflection_table_raw

    def reflection_table_missing_idx(self) -> bool:
        if self.current_refl_file is None:
            return False
        table = self._get_reflection_table_raw()
        return table is not None and "idx" not in table

    def add_crystal_ids_to_reflection_table(self, refl_table):
        crystal_id_map = self.get_crystal_ids_map()
        refl_crystal_ids = flex.int(len(refl_table), -1)
        for i in range(len(refl_table)):
            expt_id = str(refl_table[i]["id"])
            refl_crystal_ids[i] = int(crystal_id_map[expt_id])

        refl_table["crystal_id"] = refl_crystal_ids
        return refl_table

    @staticmethod
    def _reflection_table_to_msgpack(refl_table, compressed=True):
        """
        Serialises a reflection table to send to the browser viewers.
        Shoeboxes are not used by the viewers and make up most of the table
        size, so are excluded. select() returns a new table, so the
        (possibly cached) input table is left unchanged.
        """
        if "shoebox" in refl_table:
            refl_table = refl_table.select(
                tuple(k for k in refl_table.keys() if k != "shoebox")
            )
        refl_table = refl_table.as_msgpack()
        if compressed:
            return base64.b64encode(refl_table).decode("utf-8")
        return refl_table

    def get_reflection_table_msgpack(
        self, reload=True, refl_file=None, compressed=True
    ):
        refl_table = self._get_reflection_table_raw(reload=reload, refl_file=refl_file)

        refl_table = self.add_crystal_ids_to_reflection_table(refl_table)
        return self._reflection_table_to_msgpack(refl_table, compressed=compressed)

    def _add_additional_data(
        self, reflection_table, experiments, calculated=False, idxs=None
    ):
        """
        Adds rlps, peak intensities and idxs to reflection table.
        idxs are row indices unless given explicitly
        """

        reflection_table.centroid_px_to_mm(experiments)
        reflection_table.map_centroids_to_reciprocal_space(
            experiments, calculated=calculated
        )

        if idxs is None:
            idxs = cctbx.array_family.flex.int(len(reflection_table))
            for i in range(len(reflection_table)):
                idxs[i] = i

        peak_intensities = cctbx.array_family.flex.double(len(reflection_table))
        for i in range(len(reflection_table)):
            peak_intensities[i] = max(reflection_table[i]["shoebox"].data)
        reflection_table["idx"] = idxs
        reflection_table["peak_intensity"] = peak_intensities
        return reflection_table

    def add_additional_data_to_reflections(
        self, open_reflection_table=None, output_file=None, calculated=False
    ):
        """
        Adds rlps, peak intensities and idxs to reflection table
        """

        if self.current_refl_file is None and open_reflection_table is None:
            return

        if open_reflection_table is None:
            reflection_table = self._get_reflection_table_raw()
        else:
            reflection_table = open_reflection_table

        reflection_table = self._add_additional_data(
            reflection_table, self._get_experiments(), calculated=calculated
        )

        if open_reflection_table is not None:
            return reflection_table

        if output_file is None:
            reflection_table.as_msgpack_file(self.current_refl_file)
        else:
            reflection_table.as_msgpack_file(output_file)

    def remove_reflection(self, reflection_id: int, reflection_type: str = "observed"):
        if self.current_refl_file is None:
            return

        if reflection_type == "calculated_integrated":
            integration_refl_table = self.step_output(StepId.INTEGRATE, "refl")
            assert integration_refl_table and isfile(integration_refl_table)
            reflection_table = self._get_reflection_table_raw(
                refl_file=integration_refl_table
            )
            sel = reflection_table["idx"] != reflection_id
            reflection_table = reflection_table.select(sel)
            reflection_table.as_msgpack_file(integration_refl_table)
        else:
            reflection_table = self._get_reflection_table_raw()
            sel = reflection_table["idx"] != reflection_id
            reflection_table = reflection_table.select(sel)
            reflection_table.as_msgpack_file(self.current_refl_file)

    def get_rlp_json(self):
        reflection_table = self._get_reflection_table_raw()
        rlps = list(reflection_table["rlp"])
        ids = [0 for i in range(len(rlps))]
        return {"rlp": rlps, "experiment_id": ids}

    def find_reflection_by_rlp(self, rlp, expt_id: int):
        reflection_table = self._get_reflection_table_raw()
        if reflection_table is None or "rlp" not in reflection_table:
            return None

        if "imageset_id" in reflection_table:
            expt_sel = reflection_table["imageset_id"] == expt_id
        elif "id" in reflection_table:
            expt_sel = reflection_table["id"] == expt_id
        else:
            expt_sel = None

        expt_reflections = (
            reflection_table.select(expt_sel)
            if expt_sel is not None
            else reflection_table
        )
        if len(expt_reflections) == 0:
            return None

        if "xyzobs.px.value" not in expt_reflections:
            return None

        tx, ty, tz = rlp[0], rlp[1], rlp[2]
        rlps = expt_reflections["rlp"]
        min_dist_sq = float("inf")
        min_i = -1
        for i in range(len(rlps)):
            r = rlps[i]
            d = (r[0] - tx) ** 2 + (r[1] - ty) ** 2 + (r[2] - tz) ** 2
            if d < min_dist_sq:
                min_dist_sq = d
                min_i = i

        if min_i < 0:
            return None

        panel_idx = int(expt_reflections["panel"][min_i])
        xyzobs = expt_reflections["xyzobs.px.value"][min_i]
        panel_pos = [float(xyzobs[1]), float(xyzobs[0])]
        idx = (
            int(expt_reflections["idx"][min_i]) if "idx" in expt_reflections else min_i
        )

        with open(self.current_expt_file, "r") as g:
            expt_file = json.load(g)
            panel_names = [p["Name"] for p in self.get_detector_params(expt_file)]

        panel_name = (
            panel_names[panel_idx] if panel_idx < len(panel_names) else str(panel_idx)
        )
        return {
            "panel_idx": panel_idx,
            "panel_pos": panel_pos,
            "panel_name": panel_name,
            "idx": idx,
        }

    def get_rlp_for_reflection(self, reflection_id: int):
        """Returns the RLP [x, y, z] for a single reflection by its idx value."""
        reflection_table = self._get_reflection_table_raw()
        if reflection_table is None or "rlp" not in reflection_table:
            return None
        if "idx" in reflection_table:
            idxs = reflection_table["idx"]
            sel = idxs == reflection_id
            rows = sel.iselection()
            if len(rows) == 0:
                return None
            return list(reflection_table["rlp"][rows[0]])
        else:
            # No idx column: fall back to direct row index
            if reflection_id < 0 or reflection_id >= len(reflection_table):
                return None
            return list(reflection_table["rlp"][reflection_id])

    def get_integrated_reflections_msgpack(
        self, integration_type: str, compressed=True
    ):
        refined_reflections_file_path = self.require_step_output(StepId.REFINE, "refl")
        refined_reflection_table = self._get_reflection_table_raw(
            refl_file=refined_reflections_file_path
        )
        integrated_reflections_file_path = self.require_step_output(
            StepId.INTEGRATE, "refl"
        )
        reflection_table_raw = self._get_reflection_table_raw(
            refl_file=integrated_reflections_file_path
        )

        if integration_type == "calculated":
            reflection_table_raw = self.add_crystal_ids_to_reflection_table(
                reflection_table_raw
            )
            return self._reflection_table_to_msgpack(
                reflection_table_raw, compressed=compressed
            )

        # Integrated reflections are a subset of refined reflections
        if "idx" in reflection_table_raw:
            idx_map = {
                reflection_table_raw[i]["idx"]: i
                for i in range(len(reflection_table_raw))
            }
        else:
            idx_map = {}

        if "intensity.sum.value" in reflection_table_raw:
            summation_intensities = flex.double(len(refined_reflection_table), -1)
        else:
            summation_intensities = None
        if "intensity.prf.value" in reflection_table_raw:
            prf_intensities = flex.double(len(refined_reflection_table), -1)
        else:
            prf_intensities = None
        if "partiality" in reflection_table_raw:
            partiality = flex.double(len(refined_reflection_table), -1)
        else:
            partiality = None

        for i in range(len(refined_reflection_table)):
            idx = refined_reflection_table["idx"][i]
            if idx in idx_map:  # if reflection was integrated add info
                if summation_intensities is not None:
                    summation_intensities[i] = reflection_table_raw[idx_map[idx]][
                        "intensity.sum.value"
                    ]
                if prf_intensities is not None:
                    prf_intensities[i] = reflection_table_raw[idx_map[idx]][
                        "intensity.prf.value"
                    ]
                if partiality is not None:
                    partiality[i] = reflection_table_raw[idx_map[idx]]["partiality"]

        if summation_intensities is not None:
            refined_reflection_table["intensity.sum.value"] = summation_intensities
            refined_reflection_table.set_flags(
                summation_intensities > 0, refined_reflection_table.flags.integrated_sum
            )
        if prf_intensities is not None:
            refined_reflection_table["intensity.prf.value"] = prf_intensities
            refined_reflection_table.set_flags(
                prf_intensities > 0, refined_reflection_table.flags.integrated_prf
            )
        if partiality is not None:
            refined_reflection_table["partiality"] = partiality

        refl_table = self.add_crystal_ids_to_reflection_table(refined_reflection_table)
        return self._reflection_table_to_msgpack(refl_table, compressed=compressed)

    def get_integrated_reflections_per_panel(self, integration_type: str):

        refined_reflections_file_path = self.require_step_output(StepId.REFINE, "refl")
        refined_reflection_table = self._get_reflection_table_raw(
            refl_file=refined_reflections_file_path
        )
        integrated_reflections_file_path = self.require_step_output(
            StepId.INTEGRATE, "refl"
        )
        reflection_table_raw = self._get_reflection_table_raw(
            refl_file=integrated_reflections_file_path
        )

        if integration_type == "calculated":
            return self.get_reflections_per_panel(reflection_table=reflection_table_raw)

        # Integrated reflections are a subset of refined reflections
        if "idx" in reflection_table_raw:
            idx_map = {
                reflection_table_raw[i]["idx"]: i
                for i in range(len(reflection_table_raw))
            }
        else:
            idx_map = {}

        refl_data = defaultdict(list)
        self.refl_indexed_map = {}

        crystal_ids = self.get_crystal_ids_map()

        contains_xyz_obs = "xyzobs.px.value" in refined_reflection_table
        mode_fields = self.mode.reflection_fields(
            refined_reflection_table, calculated=True
        )
        contains_xyz_cal = "xyzcal.px" in refined_reflection_table
        contains_miller_idxs = "miller_index" in refined_reflection_table
        contains_wavelength = "wavelength" in refined_reflection_table
        contains_peak_intensities = "peak_intensity" in refined_reflection_table
        contains_wavelength_cal = "wavelength_cal" in refined_reflection_table
        contains_profile_intensities = "intensity.prf.value" in reflection_table_raw
        contains_partiality = "partiality" in reflection_table_raw
        contains_exported = "exported" in reflection_table_raw

        if "imageset_id" in reflection_table_raw:
            expt_ids = "imageset_id"
        elif "id" in reflection_table_raw:
            expt_ids = "id"
        else:
            expt_ids = None

        num_unindexed = 0
        num_indexed = 0
        with open(self.current_expt_file, "r") as g:
            expt_file = json.load(g)
            panel_names = [i["Name"] for i in self.get_detector_params(expt_file)]
        for i in range(len(refined_reflection_table)):
            idx = refined_reflection_table["idx"][i]
            panel = refined_reflection_table["panel"][i]
            panel_name = panel_names[panel]
            refl = {
                "bbox": refined_reflection_table["bbox"][i],
                "indexed": False,
                "panelName": panel_name,
                "id": idx,
                "calculatedOnly": True,
            }

            refl["crystalID"] = crystal_ids[str(refined_reflection_table["id"][i])]
            if expt_ids is not None:
                refl["exptID"] = refined_reflection_table[expt_ids][i]
            else:
                refl["exptID"] = 0

            if contains_xyz_obs:
                refl["xyzObs"] = refined_reflection_table["xyzobs.px.value"][i]

            if contains_xyz_cal:
                refl["xyzCal"] = refined_reflection_table["xyzcal.px"][i]

            if contains_wavelength:
                refl["wavelength"] = refined_reflection_table["wavelength"][i]

            if contains_wavelength_cal:
                refl["wavelengthCal"] = refined_reflection_table["wavelength_cal"][i]

            for field, value in mode_fields.items():
                refl[field] = value(i)

            if contains_peak_intensities:
                refl["peakIntensity"] = refined_reflection_table["peak_intensity"][i]

            if contains_miller_idxs:
                miller_idx = refined_reflection_table["miller_index"][i]
                refl["millerIdx"] = miller_idx
                if miller_idx != (0, 0, 0):
                    refl["indexed"] = True
                    refl["indexed_id"] = num_indexed
                    self.refl_indexed_map[num_indexed] = miller_idx
                    num_indexed += 1
                else:
                    refl["indexed_id"] = num_unindexed
                    num_unindexed += 1
            else:
                refl["unindexed_id"] = num_unindexed
                num_unindexed += 1

            if idx in idx_map:  # if reflection was integrated add info
                refl["summedIntensity"] = reflection_table_raw[idx_map[idx]][
                    "intensity.sum.value"
                ]
                if contains_profile_intensities:
                    refl["profileIntensity"] = reflection_table_raw[idx_map[idx]][
                        "intensity.prf.value"
                    ]
                if contains_partiality:
                    refl["partiality"] = reflection_table_raw[idx_map[idx]][
                        "partiality"
                    ]

                if contains_exported:
                    refl["exported"] = reflection_table_raw[idx_map[idx]]["exported"]

            refl_data[panel].append(refl)
        return refl_data

    def get_asu_reflections(
        observed_miller_idxs,
        predicted_miller_idxs,
        observed_wavelength,
        predicted_wavelength,
        is_asu_reflection,
        space_group,
    ):

        # predicted miller idxs are all in asu
        # convert observed miller idxs to asu equivalent

        pass

    def get_asu_reflections_per_panel(self, per_expt=False):
        reflection_table_raw = self._get_reflection_table_raw()
        assert "miller_index" in reflection_table_raw, (
            "Trying to get asu reflections but miller_index not found in reflection_table"
        )
        indices = reflection_table_raw["miller_index"]
        asu_reflections = flex.bool(len(reflection_table_raw))
        space_group = self._get_experiment().crystal.get_space_group()
        get_asu_reflections(indices, asu_reflections, space_group)
        asu_reflection_table = reflection_table_raw.select(asu_reflections)
        return self.get_reflections_per_panel(
            reflection_table=asu_reflection_table, per_expt=per_expt
        )

    def get_reflections_per_panel(
        self, reflection_table=None, per_expt=False, refl_file=None
    ):
        if reflection_table is None:
            reflection_table_raw = self._get_reflection_table_raw(refl_file=refl_file)
        else:
            reflection_table_raw = reflection_table
        if reflection_table_raw is None:
            return None

        if per_expt:
            expt_refl_data = []
            for i in range(len(self._get_experiments())):
                expt_reflections = reflection_table_raw.select(
                    reflection_table_raw["id"] == i
                )
                expt_refl_data.append(
                    self.get_reflections_per_panel(
                        reflection_table=expt_reflections, per_expt=False
                    )
                )
            return expt_refl_data

        refl_data = defaultdict(list)
        self.refl_indexed_map = {}

        contains_xyz_obs = "xyzobs.px.value" in reflection_table_raw
        mode_fields = self.mode.reflection_fields(
            reflection_table_raw, calculated=False
        )
        contains_xyz_cal = "xyzcal.px" in reflection_table_raw
        contains_miller_idxs = "miller_index" in reflection_table_raw
        contains_wavelength = "wavelength" in reflection_table_raw
        contains_wavelength_cal = "wavelength_cal" in reflection_table_raw
        contains_peak_intensities = "peak_intensity" in reflection_table_raw
        contains_bbox = "bbox" in reflection_table_raw
        contains_idx = "idx" in reflection_table_raw
        contains_profile_intensities = "intensity.prf.value" in reflection_table_raw
        contains_summation_intensities = "intensity.sum.value" in reflection_table_raw
        contains_partiality = "partiality" in reflection_table_raw
        contains_exported = "exported" in reflection_table_raw

        if "imageset_id" in reflection_table_raw:
            expt_ids = "imageset_id"
        elif "id" in reflection_table_raw:
            expt_ids = "id"
        else:
            expt_ids = None

        crystal_ids = self.get_crystal_ids_map()

        num_unindexed = 0
        num_indexed = 0
        with open(self.current_expt_file, "r") as g:
            expt_file = json.load(g)
            panel_names = [i["Name"] for i in self.get_detector_params(expt_file)]

        for i in range(len(reflection_table_raw)):
            panel = reflection_table_raw["panel"][i]
            panel_name = panel_names[panel]
            refl = {"indexed": False, "panelName": panel_name, "calculatedOnly": False}
            if contains_idx:
                refl["id"] = reflection_table_raw["idx"][i]
            if expt_ids is not None:
                refl["exptID"] = reflection_table_raw[expt_ids][i]
            else:
                refl["exptID"] = 0

            refl["crystalID"] = crystal_ids[str(reflection_table_raw["id"][i])]

            if contains_bbox:
                refl["bbox"] = reflection_table_raw["bbox"][i]

            if contains_xyz_obs:
                refl["xyzObs"] = reflection_table_raw["xyzobs.px.value"][i]

            if contains_xyz_cal:
                refl["xyzCal"] = reflection_table_raw["xyzcal.px"][i]

            if contains_wavelength:
                refl["wavelength"] = reflection_table_raw["wavelength"][i]

            if contains_wavelength_cal:
                refl["wavelengthCal"] = reflection_table_raw["wavelength_cal"][i]

            for field, value in mode_fields.items():
                refl[field] = value(i)

            if contains_peak_intensities:
                refl["peakIntensity"] = reflection_table_raw["peak_intensity"][i]

            if contains_summation_intensities:
                refl["summedIntensity"] = reflection_table_raw["intensity.sum.value"][i]

            if contains_profile_intensities:
                refl["profileIntensity"] = reflection_table_raw["intensity.prf.value"][
                    i
                ]
            if contains_partiality:
                refl["partiality"] = reflection_table_raw["partiality"][i]

            if contains_exported:
                refl["exported"] = reflection_table_raw["exported"][i]

            if contains_miller_idxs:
                miller_idx = reflection_table_raw["miller_index"][i]
                refl["millerIdx"] = miller_idx
                if miller_idx != (0, 0, 0):
                    refl["indexed"] = True
                    refl["indexed_id"] = num_indexed
                    self.refl_indexed_map[num_indexed] = miller_idx
                    num_indexed += 1
                else:
                    refl["indexed_id"] = num_unindexed
                    num_unindexed += 1
            else:
                refl["unindexed_id"] = num_unindexed
                num_unindexed += 1

            refl_data[panel].append(refl)
        return refl_data

    def get_reflection_table(self):

        def is_predicted(reflection_table):
            return "wavelength_cal" in reflection_table

        if self.current_refl_file is None:
            return experiment_params.reflection_table_values

        reflection_table_raw = self._get_reflection_table_raw()
        reflection_table = []
        optional_columns = ["miller_index"]

        if is_predicted(reflection_table_raw):
            wavelength_key = "wavelength_cal"
            tof_key = "tof_cal"
            xyz_px_key = "xyzcal.px"
            xyz_mm_key = "xyzcal.mm"
        else:
            wavelength_key = "wavelength"
            tof_key = "tof"
            xyz_px_key = "xyzobs.px.value"
            xyz_mm_key = "xyzobs.px.value"

        for idx in range(len(reflection_table_raw)):
            i = reflection_table_raw[idx]
            optional = {}
            for j in optional_columns:
                if j in i:
                    optional[j] = str(i[j])
                else:
                    optional[j] = "-"
            r = {
                "Panel": str(i["panel"]),
                "xy (px)": str(tuple([round(j, 3) for j in i[xyz_px_key][:2]])),
                "xy (mm)": str(tuple([round(j, 3) for j in i[xyz_mm_key][:2]])),
                "ToF (usec)": str(round(i[tof_key] * 10**6, 3)),
                "Wavelength (A)": str(round(i[wavelength_key], 3)),
                "Frame": str(round(i[xyz_px_key][2], 3)),
                "s1": str(tuple([round(j, 3) for j in i["s1"]])),
                "Miller Index": optional["miller_index"],
                "rlp": str(tuple([round(j, 3) for j in i["rlp"]])),
                "Bounding Box": str(i["bbox"]),
                "Intensity Sum (AU)": str(round(i["intensity.sum.value"], 3)),
            }
            reflection_table.append(r)
        return reflection_table

    def get_integrated_reflections_summary(self, integration_type: str):
        if self.current_refl_file is None:
            return ""

        if integration_type == "observed":
            return self.get_reflections_summary()

        refined_file_path = self.require_step_output(StepId.REFINE, "refl")
        integrated_file_path = self.require_step_output(StepId.INTEGRATE, "refl")

        assert isfile(refined_file_path)
        assert isfile(integrated_file_path)

        refined_refl_table = self._get_reflection_table_raw(refl_file=refined_file_path)
        integrated_refl_table = self._get_reflection_table_raw(
            refl_file=integrated_file_path
        )

        num_observed_reflections = len(refined_refl_table)
        num_indexed = (
            refined_refl_table.get_flags(refined_refl_table.flags.indexed)
        ).count(True)
        percentage_indexed = round((num_indexed / num_observed_reflections) * 100, 2)

        num_calculated_reflections = len(integrated_refl_table)
        num_integrated = integrated_refl_table.get_flags(
            integrated_refl_table.flags.integrated, all=False
        ).count(True)
        percentage_integrated = round(
            (num_integrated / num_calculated_reflections) * 100, 2
        )

        return f"{num_observed_reflections} observed ({percentage_indexed}% indexed) | {num_calculated_reflections} calculated ({percentage_integrated}% integrated)"

    def get_exported_reflections_summary(self, integration_type: str):
        if self.current_refl_file is None:
            return ""

        if integration_type == "observed":
            return self.get_reflections_summary()

        refined_file_path = self.require_step_output(StepId.REFINE, "refl")
        integrated_file_path = self.require_step_output(StepId.INTEGRATE, "refl")

        assert isfile(refined_file_path)
        assert isfile(integrated_file_path)

        refined_refl_table = self._get_reflection_table_raw(refl_file=refined_file_path)
        integrated_refl_table = self._get_reflection_table_raw(
            refl_file=integrated_file_path
        )

        num_observed_reflections = len(refined_refl_table)
        num_indexed = (
            refined_refl_table.get_flags(refined_refl_table.flags.indexed)
        ).count(True)
        percentage_indexed = round((num_indexed / num_observed_reflections) * 100, 2)

        num_calculated_reflections = len(integrated_refl_table)
        num_integrated = integrated_refl_table.get_flags(
            integrated_refl_table.flags.integrated, all=False
        ).count(True)
        percentage_integrated = round(
            (num_integrated / num_calculated_reflections) * 100, 2
        )

        num_exported = integrated_refl_table["exported"].count(True)
        percentage_exported = round(
            (num_exported / num_calculated_reflections) * 100, 2
        )

        return f"{num_observed_reflections} observed ({percentage_indexed}% indexed) | {num_calculated_reflections} calculated ({percentage_integrated}% integrated) | ({percentage_exported}% exported)"

    def get_reflections_summary(self):
        if self.current_refl_file is None:
            return ""

        if self.workflow_state == WorkflowState.integrated:
            # current_refl_file points to integrated.refl once integration has
            # run, but percentage_indexed/num_reflections must always refer to
            # the full observed set, not the integrated subset.
            refl_table = self._get_reflection_table_raw(
                refl_file=self.require_step_output(StepId.REFINE, "refl")
            )
        else:
            refl_table = self._get_reflection_table_raw()
        num_reflections = len(refl_table)
        if "miller_index" in refl_table:
            num_indexed = (refl_table.get_flags(refl_table.flags.indexed)).count(True)
            percentage_indexed = round((num_indexed / num_reflections) * 100, 2)
            if self.workflow_state == WorkflowState.integrated:
                i_refl_table = self._get_reflection_table_raw(
                    refl_file=self.require_step_output(StepId.INTEGRATE, "refl")
                )
                num_integrated = i_refl_table.get_flags(
                    i_refl_table.flags.integrated, all=False
                ).count(True)
                percentage_integrated = round(
                    (num_integrated / num_reflections) * 100, 2
                )
                return f"{num_reflections} observed ({percentage_indexed}% indexed, {percentage_integrated}% integrated)"
            return f"{num_reflections} observed ({percentage_indexed}% indexed)"

        else:
            return f"{num_reflections} observed "

    def reindex_reflections_with_crystal_id(self, crystal_id: str, basis: str) -> None:
        from dials.command_line.reindex import reindex_reflections
        from cctbx.sgtbx import change_of_basis_op

        basis = change_of_basis_op(basis)
        reflections = self._get_reflection_table_raw()
        crystal_ids_map = self.get_crystal_ids_map()
        expt_ids = [i for i in crystal_ids_map if crystal_ids_map[i] == crystal_id]
        for expt_id in expt_ids:
            sel = reflections["id"] == int(expt_id)
            expt_reflections = reflections.select(sel)
            expt_reflections = reindex_reflections([expt_reflections], basis, None)
            expt_reflections["id"] = flex.int(len(expt_reflections), int(expt_id))
            reflections.set_selected(sel, expt_reflections)

        reflections.as_msgpack_file(join(self.processing_dir, "reindexed.refl"))

    def save_hkl_file(self, filename, min_partiality, min_i_sigma):
        reflections = self._get_reflection_table_raw(
            refl_file=self.require_step_output(StepId.INTEGRATE, "refl")
        )
        output_reflections_as_hkl(reflections, filename, min_partiality, min_i_sigma)

    def add_idxs_to_reflection_file(self, refl_file_path: str) -> None:
        """
        Adds an idx column to refl_file_path if it does not have one,
        so that reflections can be identified across processing steps
        """
        if not isfile(refl_file_path):
            return
        reflection_table_raw = self._get_reflection_table_raw(refl_file=refl_file_path)
        if "idx" not in reflection_table_raw:
            idxs = flumpy.from_numpy(
                np.arange(len(reflection_table_raw)).astype("int32")
            )
            reflection_table_raw["idx"] = idxs
            reflection_table_raw.as_msgpack_file(refl_file_path)

    def _get_refined_idx_map(self, refined_reflection_table) -> Dict:
        """
        Maps (experiment id, observed centroid) to idx for refined reflections.
        Reflections whose key is not unique are mapped to None, as they
        cannot be identified unambiguously
        """
        idx_map = {}
        for i in range(len(refined_reflection_table)):
            key = (
                refined_reflection_table["id"][i],
                tuple(refined_reflection_table["xyzobs.px.value"][i]),
            )
            if key in idx_map:
                idx_map[key] = None
            else:
                idx_map[key] = int(refined_reflection_table["idx"][i])
        return idx_map

    def add_idxs_to_integrated_reflections(self, reflection_table_raw=None):
        """
        Integrated reflections can be a subset of refined reflections, so
        their idx values cannot be row indices; they must be the idx of the
        same reflection in refined.refl. Reflections are matched on
        experiment id and observed centroid, which integration leaves
        unchanged. Integrated reflections with no match in refined.refl
        (e.g. calculated predictions) are given idx values above the range
        used by refined.refl so that they remain unique
        """
        integrated_reflections_file_path = self.step_output(StepId.INTEGRATE, "refl")
        refined_reflections_file_path = self.step_output(StepId.REFINE, "refl")
        if not integrated_reflections_file_path or not isfile(
            integrated_reflections_file_path
        ):
            return
        integrated_reflection_table = self._get_reflection_table_raw(
            refl_file=integrated_reflections_file_path
        )
        if "idx" in integrated_reflection_table:
            return

        if not refined_reflections_file_path or not isfile(
            refined_reflections_file_path
        ):
            self.add_idxs_to_reflection_file(integrated_reflections_file_path)
            return

        refined_reflection_table = self._get_reflection_table_raw(
            refl_file=refined_reflections_file_path
        )
        can_match = (
            "idx" in refined_reflection_table
            and "xyzobs.px.value" in refined_reflection_table
            and "xyzobs.px.value" in integrated_reflection_table
        )
        if can_match:
            refined_idx_map = self._get_refined_idx_map(refined_reflection_table)
            next_idx = max(refined_reflection_table["idx"], default=-1) + 1
        else:
            refined_idx_map = {}
            next_idx = len(refined_reflection_table)

        idxs = flex.int(len(integrated_reflection_table), -1)
        for i in range(len(integrated_reflection_table)):
            idx = None
            if can_match:
                key = (
                    integrated_reflection_table["id"][i],
                    tuple(integrated_reflection_table["xyzobs.px.value"][i]),
                )
                idx = refined_idx_map.get(key)
            if idx is None:
                idx = next_idx
                next_idx += 1
            idxs[i] = idx

        integrated_reflection_table["idx"] = idxs
        integrated_reflection_table.as_msgpack_file(integrated_reflections_file_path)

    def add_additional_data_to_reflection_file(
        self, expt_file: str, refl_file: str
    ) -> None:
        """
        Adds rlps, peak intensities and idxs to refl_file if it is
        missing them, leaving any existing idxs unchanged
        """
        refl_file_path = join(self.processing_dir, refl_file)
        expt_file_path = join(self.processing_dir, expt_file)
        if not isfile(refl_file_path) or not isfile(expt_file_path):
            return

        reflection_table = self._get_reflection_table_raw(refl_file=refl_file_path)
        if "idx" in reflection_table and "peak_intensity" in reflection_table:
            return

        # Peak intensities require shoeboxes
        if "shoebox" not in reflection_table:
            self.add_idxs_to_reflection_file(refl_file_path)
            return

        idxs = reflection_table["idx"] if "idx" in reflection_table else None
        reflection_table = self._add_additional_data(
            reflection_table, load.experiment_list(expt_file_path), idxs=idxs
        )
        reflection_table.as_msgpack_file(refl_file_path)

    def add_additional_data_to_processing_reflections(self) -> None:
        """
        Adds rlps, peak intensities and idxs to the reflection files in the
        processing dir that are missing them. Called when a processing
        folder is loaded, as files not made by the GUI do not have
        these columns
        """
        for step_id in (StepId.FIND_SPOTS, StepId.INDEX, StepId.REFINE):
            expt_file = self.step_output(step_id, "expt")
            refl_file = self.step_output(step_id, "refl")
            if expt_file and refl_file:
                self.add_additional_data_to_reflection_file(expt_file, refl_file)

        # Done last as integrated idxs are matched against refined.refl
        self.add_idxs_to_integrated_reflections()
