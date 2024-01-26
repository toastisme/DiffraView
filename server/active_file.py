from __future__ import annotations

import json
import os
from dataclasses import dataclass
from math import acos
from os.path import isfile, join
from typing import Dict, List, Tuple

import experiment_params
import numpy as np
from algorithm_types import AlgorithmType
import asyncio

from dxtbx.model import Experiment
from dxtbx.serialize import load
from dials.array_family import flex
from dials.algorithms.spot_prediction import TOFReflectionPredictor
from dxtbx.model import ExperimentList
from dxtbx.model import BeamFactory, DetectorFactory, CrystalFactory, GoniometerFactory
from dials.algorithms.integration.fit.tof_line_profile import (
    compute_line_profile_data_for_reflection
)
from dials.algorithms.profile_model.gaussian_rs import Model as GaussianRSProfileModel
from dials_algorithms_integration_integrator_ext import ShoeboxProcessor
from dials.extensions.simple_background_ext import SimpleBackgroundExt
from dials.extensions.simple_centroid_ext import SimpleCentroidExt
from dials.model.data import make_image
from dxtbx import flumpy

from collections import defaultdict
from algorithm_status import AlgorithmStatus

import cctbx.array_family.flex

@dataclass
class DIALSAlgorithm:

    """
    Holds basic information of the requirments and history of an algorithm
    """

    name: AlgorithmType
    command: str
    args: Dict[str, str]
    log: str
    # optional override to use in place of required_files
    selected_files: List[str]
    required_files: List[str]
    output_experiment_file: str
    output_reflections_file: str


class ActiveFile:

    """
    Manages all data relating to a file imported in the via the GUI
    """

    def __init__(self, file_dir: str, filenames: list[str], file_key: str) -> None:
        self.file_dir = file_dir
        self.filenames = filenames
        self.file_key = file_key
        self.file_paths = [join(file_dir, filename) for filename in filenames]
        self.current_expt_file = None
        self.current_refl_file = None
        self.refl_indexed_map = None
        self.fmt_instance = None
        self.reflection_table_raw = None
        self.setup_algorithms(filenames)
        self.experimentPlannerParams = {"orientations" : [], "num_reflections" : []}
        self.integration_profiler_params = {
            "A" :  200,
            "alpha" : 0.4,
            "beta" : 0.4,
            "sigma" : 8.0,
            "tof_bbox" : 10
        }
        self.active_process = None
        self.last_algorithm_status = None

    def setup_algorithms(self, filenames: list[str]):
        self.algorithms = {
            AlgorithmType.dials_import: DIALSAlgorithm(
                name=AlgorithmType.dials_import,
                command="dials.import",
                args={},
                log="",
                required_files=filenames,
                selected_files=[],
                output_experiment_file="imported.expt",
                output_reflections_file=None,
            ),
            AlgorithmType.dials_find_spots: DIALSAlgorithm(
                name=AlgorithmType.dials_find_spots,
                command="dials.find_spots",
                args={},
                log="",
                selected_files=[],
                required_files=["imported.expt"],
                output_experiment_file="imported.expt",
                output_reflections_file="strong.refl",
            ),
            AlgorithmType.dials_index: DIALSAlgorithm(
                name=AlgorithmType.dials_index,
                command="dials.index",
                args={},
                log="",
                selected_files=[],
                required_files=["imported.expt", "strong.refl"],
                output_experiment_file="indexed.expt",
                output_reflections_file="indexed.refl",
            ),
            AlgorithmType.dials_refine_bravais_settings: DIALSAlgorithm(
                name=AlgorithmType.dials_refine_bravais_settings,
                command="dials.refine_bravais_settings",
                args={},
                log="",
                selected_files=[],
                required_files=["indexed.expt", "indexed.refl"],
                output_experiment_file="indexed.expt",
                output_reflections_file="indexed.refl",
            ),
            AlgorithmType.dials_reindex: DIALSAlgorithm(
                name=AlgorithmType.dials_reindex,
                command="dials.reindex",
                args={},
                log="",
                selected_files=[],
                required_files=["indexed.refl"],
                output_experiment_file=None,
                output_reflections_file="reindexed.refl",
            ),
            AlgorithmType.dials_refine: DIALSAlgorithm(
                name=AlgorithmType.dials_refine,
                command="dials.refine",
                args={},
                log="",
                selected_files=[],
                required_files=["indexed.expt", "indexed.refl"],
                output_experiment_file="refined.expt",
                output_reflections_file="refined.refl",
            ),
            AlgorithmType.dials_integrate: DIALSAlgorithm(
                name=AlgorithmType.dials_integrate,
                command="dev.dials.simple_tof_integrate",
                args={},
                log="",
                selected_files=[],
                required_files=["refined.expt", "refined.refl"],
                output_experiment_file="integrated.expt",
                output_reflections_file="integrated.refl",
            ),
        }

    def _get_experiment(self, idx=0) -> Experiment:
        file_path = join(self.file_dir, "imported.expt")
        experiment = load.experiment_list(file_path)[idx]
        assert experiment is not None
        return experiment

    def _get_fmt_instance(self, idx=0):
        expt = self._get_experiment(idx)
        self.fmt_instance = expt.imageset.get_format_class().get_instance(
            expt.imageset.paths()[idx], **expt.imageset.data().get_params()
        )
        return self.fmt_instance

    def get_lineplot_data(self,
                          panel_idx: int,
                          panel_pos: Tuple[int, int]) -> Tuple[Tuple(float), Tuple(float)]:

        x, y = self.get_pixel_spectra(panel_idx, panel_pos)

        reflection_table = self._get_reflection_table_raw(reload=False)
        if reflection_table is None:
            return (tuple(x), tuple(y), (), ())

        sequence = self._get_fmt_instance().get_sequence()
        bbox_pos, centroid_pos, ids, miller_idxs = reflection_table.get_pixel_bbox_centroid_positions(
            panel_idx, panel_pos
        )

        bbox_pos_tof = []
        centroid_pos_tof = []

        scan_range = self.algorithms[AlgorithmType.dials_find_spots].args.get(
            "scan_range")
        if scan_range is None:
            scan_range = (0, 0)
        else:
            scan_range = scan_range.split(",")
            scan_range = (int(scan_range[0]) - 1, int(scan_range[1]) - 1)

        for idx, i in enumerate(bbox_pos):
            bbox_pos_tof.append(
                {
                    "x1": sequence.get_tof_from_frame(i[0] + scan_range[0] - 1) * 10**6,
                    "x2": sequence.get_tof_from_frame(i[1] + scan_range[0] - 1) * 10**6,
                    "id": ids[idx]
                }
            )
            centroid_pos_tof.append(
                {
                    "x": sequence.get_tof_from_frame(centroid_pos[idx] + scan_range[0]) * 10**6,
                    "y": y[int(centroid_pos[idx] + scan_range[0])],
                    "id": ids[idx],
                    "millerIdx": miller_idxs[idx]
                }
            )

        return (tuple(x), tuple(y), tuple(bbox_pos_tof), tuple(centroid_pos_tof))

    def get_pixel_spectra(self,
                          panel_idx: int,
                          panel_pos: Tuple[int, int]) -> Tuple[Tuple(float), Tuple(float)]:
        fmt_instance = self._get_fmt_instance()
        x, y = fmt_instance.get_pixel_spectra(
            panel_idx, panel_pos[0], panel_pos[1])
        return x, y

    def get_image_data_2d(self):
        if len(self.filenames) == 1:
            fmt_instance = self._get_fmt_instance()
            return (
                fmt_instance.get_image_data_2d(),
                fmt_instance.get_panel_size_in_px()
            )
        else:
            panel_size = None
            data_2d = None
            for i in range(len(self.filenames)):
                fmt_instance = self._get_fmt_instance(i)
                fmt_data_2d = fmt_instance.get_image_data_2d(scale_data=False)
                fmt_panel_size = fmt_instance.get_panel_size_in_px()
                if panel_size is None:
                    panel_size = fmt_panel_size
                else:
                    assert panel_size == fmt_panel_size
                if data_2d is None:
                    data_2d = fmt_data_2d
                else:
                    data_2d += fmt_data_2d
                data_2d /= np.max(data_2d)
                data_2d = tuple([i.tolist() for i in data_2d])
                return (
                    data_2d,
                    panel_size
                )
            
                


    def get_expt_json(self, include_image_data=True):
        with open(self.current_expt_file, "r") as g:
            expt_file = json.load(g)
        if include_image_data:
            image_data_2d = self.get_image_data_2d()
            return {"expt": expt_file,
                    "image_data_2d": image_data_2d}
        return expt_file

    def get_experiment_view_json(self):

        def get_panel_corners(expt_file):
            panel_corners = []
            panels = expt_file["detector"][0]["panels"]

            for panel in panels:

                px_size = panel["pixel_size"]
                pxs = panel["image_size"]
                p_size = (px_size[0]*pxs[0], px_size[1]*pxs[1])
                fa = np.array(panel["fast_axis"]) * p_size[0]/1000.
                sa = np.array(panel["slow_axis"]) * p_size[1]/1000.
                o = np.array(panel["origin"])/1000.

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
            "panel_size": panel_size
        }

    def get_image_range(self):
        try:
            image_range = self._get_experiment().imageset.get_array_range()
            return (image_range[0] + 1, image_range[1])
        except AttributeError:
            return (1, len(self._get_experiment().imageset))

    def get_beam_params(self, expt_file):
        beam = expt_file["beam"][0]
        params = {}
        params["Sample to Source Direction"] = str(tuple(beam["direction"]))
        params["Sample to Moderator Distance (mm)"] = str(
            beam["sample_to_moderator_distance"]
        )
        return [params]

    def get_detector_params(self, expt_file):
        panels = expt_file["detector"][0]["panels"]
        params = []
        for i in range(len(panels)):
            panels[i]["fast_axis"] = [round(j, 3)
                                      for j in panels[i]["fast_axis"]]
            panels[i]["slow_axis"] = [round(j, 3)
                                      for j in panels[i]["slow_axis"]]
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

    def get_goniometer_params(self, expt_file):
        return [{"Orientation (deg)": "0"}]

    def get_crystal_params(self, expt_file):
        crystals = expt_file["crystal"]
        if crystals:
            crystal = crystals[0]
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

            return {
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
        return {
            "a": "-",
            "b": "-",
            "c": "-",
            "alpha": "-",
            "beta": "-",
            "gamma": "-",
            "Space Group": "-",
        }

    def get_experiment_params(self):
        with open(self.current_expt_file, "r") as g:
            expt_file = json.load(g)
            experiment_params = []
            experiment_params.append(self.get_beam_params(expt_file))
            experiment_params.append(self.get_detector_params(expt_file))
            experiment_params.append(self.get_sequence_params(expt_file))
            experiment_params.append(self.get_goniometer_params(expt_file))
            experiment_params.append(self.get_crystal_params(expt_file))
        return experiment_params

    def can_run(self, algorithm_type: AlgorithmType) -> bool:
        for i in self.algorithms[algorithm_type].required_files:
            if not isfile(join(self.file_dir, i)):
                return False
        return True

    def get_input_files(self, algorithm_type: AlgorithmType):
        algorithm = self.algorithms[algorithm_type]
        if algorithm.selected_files:
            return algorithm.selected_files
        return algorithm.required_files

    async def run(self, algorithm_type: AlgorithmType) -> Tuple(str, bool):

        """
        procrunner wrapper for dials commands.
        Converts log to html and returns it
        """

        def get_formatted_text(result):
            result = result.split("\n")
            return "<br>".join(result)

        def success(stdout, stderr):
            # DIALS import error goes via stdout
            if "Unable to handle the following arguments:" in stdout:
                return False
            return len(stderr) == 0

        def get_error_text(stdout, stderr):
            # Some DIALS import errors goes via stdout
            if algorithm_type == AlgorithmType.dials_import and len(stdout) != 0:
                if "not found" in stdout:
                    return stdout[:stdout.find("not found")] + "not found"
                if "Unable to handle the following arguments" in stdout and "usage" in stdout:
                    return stdout[:stdout.find("usage")]
                return stdout
            return stderr

        assert self.can_run(algorithm_type)

        algorithm = self.algorithms[algorithm_type]
        algorithm_args = []

        for i in self.get_input_files(algorithm_type):
            algorithm_args.append(i)

        for arg in algorithm.args:
            algorithm_args.append(f"{arg}={algorithm.args[arg]}")

        try:
            self.last_algorithm_status = AlgorithmStatus.running
            self.active_process = await asyncio.create_subprocess_exec(
                algorithm.command, *algorithm_args,
                cwd=self.file_dir,
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.PIPE
            )

            stdout, stderr = await self.active_process.communicate()
        except asyncio.exceptions.CancelledError:
            self.last_algorithm_status = AlgorithmStatus.cancelled
            self.active_process = None
            return

        self.active_process = None
        stdout = stdout.decode()
        stderr = stderr.decode()
        print(f"Ran command {algorithm.command} {algorithm_args}")
        if (success(stdout, stderr)):
            self.last_algorithm_status = AlgorithmStatus.finished
            log = get_formatted_text(stdout)
            self.algorithms[algorithm_type].log = log
            expt_file = self.algorithms[algorithm_type].output_experiment_file
            if expt_file is not None:
                self.current_expt_file = join(self.file_dir, expt_file)
            refl_file = self.algorithms[algorithm_type].output_reflections_file
            if refl_file is not None:
                self.current_refl_file = join(self.file_dir, refl_file)

            return log

        self.last_algorithm_status = AlgorithmStatus.failed
        return get_formatted_text(get_error_text(stdout, stderr))

    def get_available_algorithms(self):
        """
        Dictionary of algorithms that can be run in the current state
        """

        available_algorithms = {}
        for i in self.algorithms.keys():
            available_algorithms[i] = self.can_run(i)
        return available_algorithms

    def get_logs(self):
        return [self.algorithms[i].log for i in AlgorithmType][:5]

    def update_arg(
        self, algorithm_type: AlgorithmType, param_name: str, param_value: str
    ) -> None:
        self.algorithms[algorithm_type].args[param_name] = param_value

    def set_args(self, algorithm_type: AlgorithmType, args: Dict[str, str]) -> None:
        self.algorithms[algorithm_type].args = args

    def _get_reflection_table_raw(self, reload=True, refl_file=None):
        if self.current_refl_file is None and refl_file is None:
            return None

        if self.reflection_table_raw is not None and not reload:
            return self.reflection_table_raw

        if refl_file is not None:
            return flex.reflection_table.from_msgpack_file(
                refl_file
            )

        reflection_table_raw = flex.reflection_table.from_msgpack_file(
            self.current_refl_file
        )

        self.reflection_table_raw = reflection_table_raw
        return self.reflection_table_raw

    def add_additional_data_to_reflections(self):
        """
        Adds rlps, peak intensities and idxs to reflection table
        """

        if self.current_refl_file is None:
            return

        reflection_table = self._get_reflection_table_raw()
        reflection_table.map_centroids_to_reciprocal_space(
            [self._get_experiment()])

        idxs = cctbx.array_family.flex.int(len(reflection_table))
        peak_intensities = cctbx.array_family.flex.double(len(reflection_table))
        for i in range(len(reflection_table)):
            idxs[i] = i
            peak_intensities[i] = max(reflection_table[i]["shoebox"].data)
        reflection_table["idx"] = idxs
        reflection_table["peak_intensity"] = peak_intensities

        reflection_table.as_msgpack_file(
            self.current_refl_file
        )

    def add_calculated_frames_to_reflections(self):

        if self.current_refl_file is None:
            return

        reflections = self._get_reflection_table_raw()
        if "tof_cal" not in reflections:
            reflections["tof_cal"] = flex.double(reflections.nrows())
        if "L1" not in reflections:
            reflections["L1"] = flex.double(reflections.nrows())

        tof_cal = flex.double(reflections.nrows())
        L1 = flex.double(reflections.nrows())

        panel_numbers = cctbx.array_family.flex.size_t(reflections["panel"])
        expt = ExperimentList.from_file(self.current_expt_file)[0]

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

        reflections.as_msgpack_file(
            self.current_refl_file
        )


    def remove_reflection(self, reflection_id: int):
        if self.current_refl_file is None:
            return
        reflection_table = self._get_reflection_table_raw()
        sel = reflection_table["idx"] != reflection_id
        reflection_table = reflection_table.select(sel)
        reflection_table.as_msgpack_file(
            self.current_refl_file
        )

    def get_rlp_json(self):
        reflection_table = self._get_reflection_table_raw()
        rlps = list(reflection_table["rlp"])
        ids = [0 for i in range(len(rlps))]
        return {"rlp": rlps, "experiment_id": ids}

    def get_integrated_reflections_per_panel(self):
        reflection_table_raw = self._get_reflection_table_raw()  # integrated reflections
        refined_reflection_table = self._get_reflection_table_raw(
            refl_file=join(self.file_dir, "refined.refl")
        )

        # Integrated reflections are a subset of refined reflections
        if "idx" in reflection_table_raw:
            idx_map = {reflection_table_raw[i]["idx"]: reflection_table_raw[i] for i in range(
                len(reflection_table_raw))}
        else:
            idx_map = {}

        refl_data = defaultdict(list)
        self.refl_indexed_map = {}

        contains_xyz_obs = "xyzobs.px.value" in refined_reflection_table
        contains_xyz_cal = "xyzcal.px" in refined_reflection_table
        contains_miller_idxs = "miller_index" in refined_reflection_table
        contains_wavelength = "wavelength" in refined_reflection_table
        contains_tof = "tof" in refined_reflection_table

        num_unindexed = 0
        num_indexed = 0
        with open(self.current_expt_file, "r") as g:
            expt_file = json.load(g)
            panel_names = [i["Name"]
                           for i in self.get_detector_params(expt_file)]
        for i in range(len(refined_reflection_table)):
            idx = refined_reflection_table["idx"][i]
            panel = refined_reflection_table["panel"][i]
            panel_name = panel_names[panel]
            refl = {
                "bbox": refined_reflection_table["bbox"][i],
                "indexed": False,
                "panelName": panel_name,
                "id": idx
            }

            if contains_xyz_obs:
                refl["xyzObs"] = refined_reflection_table["xyzobs.px.value"][i]

            if contains_xyz_cal:
                refl["xyzCal"] = refined_reflection_table["xyzcal.px"][i]

            if contains_wavelength:
                refl["wavelength"] = refined_reflection_table["wavelength"][i]

            if contains_tof:
                refl["tof"] = refined_reflection_table["tof"][i]

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
                refl["intensity"] = idx_map[idx]["intensity.sum.value"]

            refl_data[panel].append(refl)
        return refl_data

    def get_reflections_per_panel(self):
        reflection_table_raw = self._get_reflection_table_raw()
        if reflection_table_raw is None:
            return None
        refl_data = defaultdict(list)
        self.refl_indexed_map = {}

        contains_xyz_obs = "xyzobs.px.value" in reflection_table_raw
        contains_xyz_cal = "xyzcal.px" in reflection_table_raw
        contains_miller_idxs = "miller_index" in reflection_table_raw
        contains_wavelength = "wavelength" in reflection_table_raw
        contains_wavelength_cal = "wavelength_cal" in reflection_table_raw
        contains_tof = "tof" in reflection_table_raw
        contains_peak_intensities = "peak_intensity" in reflection_table_raw

        num_unindexed = 0
        num_indexed = 0
        with open(self.current_expt_file, "r") as g:
            expt_file = json.load(g)
            panel_names = [i["Name"]
                           for i in self.get_detector_params(expt_file)]
        for i in range(len(reflection_table_raw)):
            panel = reflection_table_raw["panel"][i]
            panel_name = panel_names[panel]
            refl = {
                "bbox": reflection_table_raw["bbox"][i],
                "indexed": False,
                "panelName": panel_name,
                "id": reflection_table_raw["idx"][i]
            }

            if contains_xyz_obs:
                refl["xyzObs"] = reflection_table_raw["xyzobs.px.value"][i]

            if contains_xyz_cal:
                refl["xyzCal"] = reflection_table_raw["xyzcal.px"][i]

            if contains_wavelength:
                refl["wavelength"] = reflection_table_raw["wavelength"][i]

            if contains_wavelength_cal:
                refl["wavelengthCal"] = reflection_table_raw["wavelength_cal"][i]

            if contains_tof:
                refl["tof"] = reflection_table_raw["tof"][i]

            if contains_peak_intensities:
                refl["peakIntensity"] = reflection_table_raw["peak_intensity"][i]

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

    def predict_reflection_table(self, dmin, phi, current_angles):
        if self.current_expt_file is None:
            return

        with open(self.current_expt_file, "r") as g:
            expt_file = json.load(g)

        expt = ExperimentList.from_file(self.current_expt_file)[0]
        predictor = TOFReflectionPredictor(
            expt.beam, expt.detector, expt.goniometer, expt.sequence, expt.crystal.get_A(), 
            expt.crystal.get_unit_cell(), expt.crystal.get_space_group().type(), float(dmin))

        current_angles = [i * np.pi / 180. for i in current_angles]
        current_miller_indices = []
        for angle in current_angles:
            raw_reflection_table = predictor.all_reflections_for_asu(expt.goniometer, float(angle))
            current_miller_indices += list(raw_reflection_table["miller_index"])
        current_miller_indices = set(current_miller_indices)

        reflection_table_raw = predictor.all_reflections_for_asu(expt.goniometer, float(phi))

        refl_data = defaultdict(list)

        contains_xyz_cal = "xyzcal.px" in reflection_table_raw
        contains_wavelength_cal = "wavelength_cal" in reflection_table_raw
        contains_tof_cal = "tof_cal" in reflection_table_raw

        panel_names = [i["Name"]
                        for i in self.get_detector_params(expt_file)]

        for i in range(len(reflection_table_raw)):
            if reflection_table_raw["miller_index"][i] in current_miller_indices:
                continue
            panel = reflection_table_raw["panel"][i]
            panel_name = panel_names[panel]
            refl = {
                "panelName": panel_name,
                "millerIdx" : reflection_table_raw["miller_index"][i],
                "indexed" : True
            }

            if contains_xyz_cal:
                refl["xyzCal"] = reflection_table_raw["xyzcal.px"][i]

            if contains_wavelength_cal:
                refl["wavelengthCal"] = reflection_table_raw["wavelength_cal"][i]

            if contains_tof_cal:
                refl["tof_cal"] = reflection_table_raw["tof_cal"][i]

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

    def get_change_of_basis(self, solution_number: str) -> str:
        summary_file = join(self.file_dir, "bravais_summary.json")
        with open(summary_file, "r") as g:
            f = json.load(g)
        return f[solution_number]["cb_op"]

    def get_bravais_lattices_table(self):
        summary_file = join(self.file_dir, "bravais_summary.json")
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
                "Volume": str(round(raw_result["volume"], 3)),
                "Recommended": str(raw_result["recommended"])
            }
            results_table.append(result)
        return results_table

    def has_selected_files(self, algorithm_type: AlgorithmType) -> bool:
        return len(self.algorithms[algorithm_type].selected_files) > 0

    def get_instrument_name(self):
        fmt_instance = self._get_fmt_instance()
        return fmt_instance.get_instrument_name()

    def get_experiment_description(self):
        fmt_instance = self._get_fmt_instance()
        return fmt_instance.get_experiment_description()

    def get_reflections_summary(self):
        if self.current_refl_file is None:
            return ""

        refl_table = self._get_reflection_table_raw()
        num_reflections = len(refl_table)
        if "miller_index" in refl_table:
            num_indexed = (refl_table.get_flags(
                refl_table.flags.indexed)).count(True)
            percentage_indexed = round((num_indexed/num_reflections)*100, 2)
            return f"{num_reflections} reflections ({percentage_indexed}% indexed)"
        else:
            return f"{num_reflections} reflections "

    def get_crystal_summary(self):
        if self.current_expt_file is None:
            return ""
        crystal_params = self.get_crystal_params(
            self.get_expt_json(include_image_data=False))
        summary = ""
        summary += "a: " + str(crystal_params["a"]) + " "
        summary += "b: " + str(crystal_params["b"]) + " "
        summary += "c:" + str(crystal_params["c"]) + " "
        summary += "\u03B1: " + str(crystal_params["alpha"]) + " "
        summary += "\u03B2: " + str(crystal_params["beta"]) + " "
        summary += "\u03B3: " + str(crystal_params["gamma"]) + " "
        summary += "SG: " + str(crystal_params["Space Group"])
        return summary

    def get_tof_range(self):
        with open(self.current_expt_file, "r") as g:
            expt_file = json.load(g)
            sequence = expt_file["sequence"][0]
            min_tof = round(sequence["tof_in_seconds"][0], 3) * 10**6
            max_tof = round(sequence["tof_in_seconds"][-1], 3) * 10**6
            num_images = sequence["image_range"][1] - \
                sequence["image_range"][0]
            return (min_tof, max_tof, (max_tof-min_tof)/num_images)

    def get_algorithm_logs(self):
        return {self.algorithms[i].command: self.algorithms[i].log for i in self.algorithms}

    def get_best_expt_orientation(self, current_angles, dmin):

        def parse_reflections(reflection_table_raw, miller_indices):

            if reflection_table_raw is None:
                return None

            refl_data = defaultdict(list)

            contains_xyz_cal = "xyzcal.px" in reflection_table_raw
            contains_wavelength_cal = "wavelength_cal" in reflection_table_raw
            contains_tof_cal = "tof_cal" in reflection_table_raw

            panel_names = [i["Name"]
                            for i in self.get_detector_params(expt_file)]

            for i in range(len(reflection_table_raw)):
                if reflection_table_raw["miller_index"][i] not in miller_indices:
                    continue
                panel = reflection_table_raw["panel"][i]
                panel_name = panel_names[panel]
                refl = {
                    "panelName": panel_name,
                    "millerIdx" : reflection_table_raw["miller_index"][i],
                    "indexed" : True
                }

                if contains_xyz_cal:
                    refl["xyzCal"] = reflection_table_raw["xyzcal.px"][i]

                if contains_wavelength_cal:
                    refl["wavelengthCal"] = reflection_table_raw["wavelength_cal"][i]

                if contains_tof_cal:
                    refl["tof_cal"] = reflection_table_raw["tof_cal"][i]

                refl_data[panel].append(refl)
            return refl_data

        if self.current_expt_file is None:
            return

        current_angles = [i * np.pi / 180. for i in current_angles]

        with open(self.current_expt_file, "r") as g:
            expt_file = json.load(g)

        expt = ExperimentList.from_file(self.current_expt_file)[0]
        predictor = TOFReflectionPredictor(
            expt.beam, expt.detector, expt.goniometer, expt.sequence,  expt.crystal.get_A(), 
            expt.crystal.get_unit_cell(), expt.crystal.get_space_group().type(), float(dmin))

        observed_miller_indices = []
        possible_miller_indices = []
        best_angle = None
        best_refl_table = None

        for phi in current_angles:
            raw_reflection_table = predictor.all_reflections_for_asu(expt.goniometer, float(phi))
            observed_miller_indices += list(raw_reflection_table["miller_index"])
        observed_miller_indices = set(observed_miller_indices)

        # Coarse search
        angle = 0
        dphi = 0.08726646259971647 # 5 degrees
        for i in range(72): # 360 degrees
            angle += dphi
            raw_reflection_table = predictor.all_reflections_for_asu(expt.goniometer, float(angle))
            miller_indices = list(raw_reflection_table["miller_index"])
            new_indices = [i for i in miller_indices if i not in observed_miller_indices]
            if len(new_indices) > len(possible_miller_indices):
                best_angle = angle
                possible_miller_indices = new_indices
                best_refl_table = raw_reflection_table
        
        return best_angle * (180./np.pi), parse_reflections(best_refl_table, possible_miller_indices)

    def update_experiment_planner_params(self, orientations , num_reflections):
        self.experimentPlannerParams["orientations"] = orientations
        self.experimentPlannerParams["num_reflections"] = num_reflections

    def get_experiment_planner_params(self):
        return self.experimentPlannerParams["orientations"], self.experimentPlannerParams["num_reflections"]

    def get_line_integration_for_reflection(
            self, 
            reflection_id: str) -> Tuple[List[float], List[float], float]:

        reflection_table = self._get_reflection_table_raw(reload=False)
        if reflection_table is None:
            return [], [], -1
        assert "idx" in reflection_table
        sel = reflection_table["idx"] == reflection_id
        reflection_table = reflection_table.select(sel)
        assert len(reflection_table) == 1

        experiment = ExperimentList.from_file(self.current_expt_file)[0]
        experiments = [experiment]
        if not "s0_cal" in reflection_table:
            val = experiment.beam.get_unit_s0()
            wl = reflection_table["wavelength_cal"][0]
            val = tuple([i/wl for i in val])
            s0_cal = cctbx.array_family.flex.vec3_double(1, val)

        reflection_table["s0_cal"] = s0_cal
        # sigma_m in 3.1 of Kabsch 2010
        sigma_m = self.integration_profiler_params["tof_bbox"]
        sigma_b = 0.01
        # The Gaussian model given in 2.3 of Kabsch 2010
        experiment.profile = GaussianRSProfileModel(
            params={}, n_sigma=3, sigma_b=sigma_b, sigma_m=sigma_m
        )

        reflection_table.compute_bbox(experiments)
        x1, x2, y1, y2, t1, t2 = reflection_table["bbox"].parts()
        reflection_table = reflection_table.select(
            t2 < experiment.sequence.get_image_range()[1]
        )
        reflection_table.compute_d(experiments)
        reflection_table.compute_partiality(experiments)

        # Shoeboxes
        reflection_table["shoebox"] = flex.shoebox(
            reflection_table["panel"],
            reflection_table["bbox"],
            allocate=False,
            flatten=False,
        )

        # Get actual shoebox values and the reflections for each image
        shoebox_processor = ShoeboxProcessor(
            reflection_table,
            len(experiment.detector),
            0,
            len(experiment.imageset),
            False,
        )

        for i in range(len(experiment.imageset)):
            image = experiment.imageset.get_corrected_data(i)
            mask = experiment.imageset.get_mask(i)
            shoebox_processor.next_data_only(make_image(image, mask))

        reflection_table.is_overloaded(experiments)
        reflection_table.compute_mask(experiments)
        reflection_table.contains_invalid_pixels()

        # Background calculated explicitly to expose underlying algorithm
        background_algorithm = SimpleBackgroundExt(params=None, experiments=experiments)
        success = background_algorithm.compute_background(reflection_table)
        reflection_table.set_flags(
            ~success, reflection_table.flags.failed_during_background_modelling
        )

        # Centroids calculated explicitly to expose underlying algorithm
        centroid_algorithm = SimpleCentroidExt(params=None, experiments=experiments)
        centroid_algorithm.compute_centroid(reflection_table)

        return compute_line_profile_data_for_reflection(reflection_table, 
        self.integration_profiler_params["A"],
        self.integration_profiler_params["alpha"],
        self.integration_profiler_params["beta"],
        self.integration_profiler_params["sigma"],
        )

    def update_integration_profiler_params(self, A, alpha, beta, sigma, tof_bbox):
        self.integration_profiler_params["A"] = A
        self.integration_profiler_params["alpha"] = alpha
        self.integration_profiler_params["beta"] = beta
        self.integration_profiler_params["sigma"] = sigma
        self.integration_profiler_params["tof_bbox"] = tof_bbox

    async def cancel_active_process(self):
        if self.active_process is not None:
            self.active_process.terminate()
            await self.active_process.communicate()
        self.active_process = None