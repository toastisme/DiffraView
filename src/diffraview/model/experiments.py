"""Experiment (.expt) data shared by all experiment types."""

from __future__ import annotations

import json
import numpy as np
from dxtbx.model import Experiment, ExperimentList
from dxtbx.serialize import load
from math import acos
from os.path import isfile, join
from pathlib import Path
from typing import Dict
from .. import experiment_params
from ..app_types import ExperimentType

DEFAULT_DESCRIPTIONS = {"instrument": "Unknown", "experiment": "Unknown"}


class ExperimentModel:
    def _get_experiment(self, idx=0) -> Experiment:
        experiments = self._get_experiments()
        assert idx < len(experiments)
        return experiments[idx]

    def _get_experiment_type(self) -> ExperimentType:

        # Assume all experiments are same type
        experiment = self._get_experiment()
        match experiment.get_type().__str__():
            case "STILL":
                return ExperimentType.STILL
            case "ROTATION":
                return ExperimentType.ROTATION
            case "TOF":
                return ExperimentType.TOF
            case "LAUE":
                return ExperimentType.LAUE

    def _get_experiments(self) -> ExperimentList:
        experiments = load.experiment_list(self.current_expt_file)
        assert experiments is not None
        return experiments

    def _get_fmt_instance(self, idx=0):
        expt = self._get_experiment(idx)
        self.fmt_instance = expt.imageset.get_format_class().get_instance(
            expt.imageset.paths()[idx], **expt.imageset.data().get_params()
        )
        return self.fmt_instance

    def get_expt_json(self, expt_file=None):
        if expt_file is None:
            expt_file = self.current_expt_file
        with open(expt_file, "r") as g:
            expt_file = json.load(g)
        return expt_file

    def get_experiment_view_json(self):

        def get_panel_corners(expt_file):
            panel_corners = []
            panels = expt_file["detector"][0]["panels"]

            for panel in panels:
                px_size = panel["pixel_size"]
                pxs = panel["image_size"]
                p_size = (px_size[0] * pxs[0], px_size[1] * pxs[1])
                fa = np.array(panel["fast_axis"]) * p_size[0] / 1000.0
                sa = np.array(panel["slow_axis"]) * p_size[1] / 1000.0
                o = np.array(panel["origin"]) / 1000.0

                # Corners
                c1 = tuple(o)
                c2 = tuple(o + fa)
                c3 = tuple(o + fa + sa)
                c4 = tuple(o + sa)
                panel_corners.append([c1, c2, c3, c4])

            return panel_corners

        def get_beam_direction(expt_file):
            beam = expt_file["beam"][0]
            return beam["direction"]

        with open(self.current_expt_file, "r") as g:
            expt_file = json.load(g)
            img_data, panel_size = self.get_image_data_2d()

        return {
            "panel_corners": get_panel_corners(expt_file),
            "beam_direction": get_beam_direction(expt_file),
            "image_data_2d": img_data,
            "panel_size": panel_size,
        }

    def get_image_range(self):
        try:
            return self._get_experiment().imageset.get_array_range()
        except AttributeError:
            return (0, len(self._get_experiment().imageset))

    def get_beam_params(self, expt_file):
        beam = expt_file["beam"][0]
        params = {}
        params["Sample to Source Direction"] = str(tuple(beam["direction"]))
        params["Sample to Moderator Distance (mm)"] = str(
            beam["sample_to_moderator_distance"]
        )
        return [params]

    def get_panel_sizes(self, expt_file=None):
        if expt_file is None:
            expt_file = self.get_expt_json()
        # (px)
        return tuple(
            [tuple(i["image_size"]) for i in expt_file["detector"][0]["panels"]]
        )

    def get_num_detector_panels(self):
        expt_json = self.get_expt_json()
        return len(expt_json["detector"][0]["panels"])

    def get_detector_params(self, expt_file):
        panels = expt_file["detector"][0]["panels"]
        params = []
        for i in range(len(panels)):
            panels[i]["fast_axis"] = [round(j, 3) for j in panels[i]["fast_axis"]]
            panels[i]["slow_axis"] = [round(j, 3) for j in panels[i]["slow_axis"]]
            panels[i]["origin"] = [round(j, 3) for j in panels[i]["origin"]]
            params.append(
                {
                    "Name": panels[i]["name"],
                    "Origin (mm)": str(tuple(panels[i]["origin"])),
                    "Fast Axis": str(tuple(panels[i]["fast_axis"])),
                    "Slow Axis": str(tuple(panels[i]["slow_axis"])),
                    "Pixels": str(tuple(panels[i]["image_size"])),
                    "Pixel Size (mm)": str(tuple(panels[i]["pixel_size"])),
                }
            )
        return params

    def get_goniometer_params(self, expt_file):
        return [{"Orientation (deg)": "0"}]

    def get_crystal_params(self, expt_file):
        crystals = expt_file["crystal"]
        if crystals:
            crystal_params = []
            for crystal in crystals:
                a = np.array(crystal["real_space_a"])
                b = np.array(crystal["real_space_b"])
                c = np.array(crystal["real_space_c"])
                a_mag = round(np.linalg.norm(a), 3)
                b_mag = round(np.linalg.norm(b), 3)
                c_mag = round(np.linalg.norm(c), 3)
                unit_a = a / a_mag
                unit_b = b / b_mag
                unit_c = c / c_mag
                gamma = str(round(acos(np.dot(unit_a, unit_b)) * (180 / np.pi), 3))
                beta = str(round(acos(np.dot(unit_a, unit_c)) * (180 / np.pi), 3))
                alpha = str(round(acos(np.dot(unit_c, unit_b)) * (180 / np.pi), 3))

                crystal_params.append(
                    {
                        "a": a_mag,
                        "b": b_mag,
                        "c": c_mag,
                        "alpha": alpha,
                        "beta": beta,
                        "gamma": gamma,
                        "Space Group": "".join(
                            crystal["space_group_hall_symbol"].strip().split()
                        ),
                    }
                )
            return crystal_params
        return [
            {
                "a": "-",
                "b": "-",
                "c": "-",
                "alpha": "-",
                "beta": "-",
                "gamma": "-",
                "Space Group": "-",
            }
        ]

    def get_experiment_params(self):
        with open(self.current_expt_file, "r") as g:
            expt_file = json.load(g)
            experiment_params = []
            experiment_params.append(self.get_beam_params(expt_file))
            experiment_params.append(self.get_detector_params(expt_file))
            experiment_params.append(self.mode.get_sequence_params(expt_file))
            experiment_params.append(self.get_goniometer_params(expt_file))
            experiment_params.append(self.get_crystal_params(expt_file))
        return experiment_params

    def get_change_of_basis(self, solution_number: str) -> str:
        summary_file = join(self.processing_dir, "bravais_summary.json")
        with open(summary_file, "r") as g:
            f = json.load(g)
        return f[solution_number]["cb_op"]

    def get_bravais_settings_crystal(self, crystal_id: str) -> Dict:
        filename = join(self.processing_dir, f"bravais_setting_{crystal_id}.expt")
        assert isfile(filename), f"Trying to open {filename} but it does not exist"
        with open(filename, "r") as g:
            json_file = json.load(g)
        return json_file["crystal"][0]  # Assume only one crystal in file

    def get_bravais_lattices_table(self):
        summary_file = join(self.processing_dir, "bravais_summary.json")
        with open(summary_file, "r") as g:
            f = json.load(g)

        results_table = []
        for i in range(1, len(f) + 1):
            raw_result = f[str(i)]
            if raw_result["min_cc"] is None:
                min_cc = "-"
            else:
                min_cc = round(raw_result["min_cc"], 3)
            if raw_result["max_cc"] is None:
                max_cc = "-"
            else:
                max_cc = round(raw_result["max_cc"], 3)
            unit_cell = [round(i, 2) for i in raw_result["unit_cell"]]
            result = {
                "Candidate": str(i),
                "Metric Fit": str(round(raw_result["max_angular_difference"], 3)),
                "RMSD": str(round(raw_result["rmsd"], 3)),
                "Min/Max CC": f"{min_cc}/{max_cc}",
                "#Spots": str(raw_result["nspots"]),
                "Lattice": raw_result["bravais"],
                "Unit Cell": str(tuple(unit_cell)),
                "Recommended": str(raw_result["recommended"]),
            }
            results_table.append(result)
        return results_table

    def get_instrument_name(self, idx=0):
        return self._get_description(idx, "instrument", "get_instrument_name")

    def get_experiment_description(self, idx=0):
        return self._get_description(idx, "experiment", "get_experiment_description")

    def _get_description(self, idx, key, getter):
        """User-edited value, else the format class's, else a default."""
        edited = self.descriptions.get(str(idx), {}).get(key)
        if edited is not None:
            return edited
        try:
            return getattr(self._get_fmt_instance(idx=idx), getter)()
        except Exception:
            # Not all format classes have these getters
            return DEFAULT_DESCRIPTIONS[key]

    def set_description(self, idx, instrument=None, experiment=None):
        edited = self.descriptions.setdefault(str(idx), {})
        if instrument is not None:
            edited["instrument"] = instrument
        if experiment is not None:
            edited["experiment"] = experiment

    def get_crystal_summary(self):
        if self.current_expt_file is None:
            return ""
        all_crystal_params = self.get_crystal_params(self.get_expt_json())
        crystal_summary = []
        for crystal_params in all_crystal_params:
            summary = ""
            summary += "a: " + str(crystal_params["a"]) + " "
            summary += "b: " + str(crystal_params["b"]) + " "
            summary += "c:" + str(crystal_params["c"]) + " "
            summary += "\u03b1: " + str(crystal_params["alpha"]) + " "
            summary += "\u03b2: " + str(crystal_params["beta"]) + " "
            summary += "\u03b3: " + str(crystal_params["gamma"]) + " "
            summary += "SG: " + str(crystal_params["Space Group"])
            crystal_summary.append(summary)
        return crystal_summary

    def get_goniometer_phi_angles(self):
        experiments = self._get_experiments()
        angles = []
        for idx, expt in enumerate(experiments):
            fmt_instance = expt.imageset.get_format_class().get_instance(
                expt.imageset.paths()[idx], **expt.imageset.data().get_params()
            )
            angles.append(fmt_instance.get_goniometer_phi_angle())
        return angles

    def get_experiment_ids(self):
        expt_json = self.get_expt_json()
        return list(range(len(expt_json["experiment"])))

    def get_imageset_ids(self):
        expt_json = self.get_expt_json()
        return list(range(len(expt_json["imageset"])))

    def get_num_experiments(self):
        expt_json = self.get_expt_json()
        return len(expt_json["imageset"])

    def get_experiment_names(self):
        expt_json = self.get_expt_json()
        names = {}
        for idx, i in enumerate(expt_json["imageset"]):
            name = Path(i["template"]).name
            names[name] = str(idx)
        return names

    def get_crystal_ids_map(self):
        # Returns {expt_id : crystal_id}
        expt_json = self.get_expt_json()
        crystal_ids = {"-1": "-1"}
        for idx, expt in enumerate(expt_json["experiment"]):
            if "crystal" in expt:
                crystal_ids[str(idx)] = str(expt["crystal"])
            else:
                crystal_ids[str(idx)] = "-1"
        return crystal_ids

    def get_crystal_ids(self):
        expt_json = self.get_expt_json()
        return list(range(len(expt_json["crystal"])))

    def get_crystal_json(self, crystal_id: int) -> Dict:
        expt_json = self.get_expt_json()
        assert crystal_id < len(expt_json["crystal"])
        return expt_json["crystal"][crystal_id]

    def update_expt_crystal(self, crystal_id: str, crystal_json: Dict) -> None:
        expt_json = self.get_expt_json()
        expt_json["crystal"][int(crystal_id)] = crystal_json
        with open(join(self.processing_dir, "reindexed.expt"), "w") as g:
            json.dump(expt_json, g, indent=4)

    def update_current_experiment_viewer_expt_id(self, expt_id):
        self.current_experiment_viewer_expt_id = expt_id

    def get_current_experiment_viewer_expt_id(self):
        return self.current_experiment_viewer_expt_id
