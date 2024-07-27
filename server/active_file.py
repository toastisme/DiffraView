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
    compute_line_profile_data_for_reflection,
)
from dxtbx.model import tof_helpers
from dials.algorithms.profile_model.gaussian_rs import Model as GaussianRSProfileModel
from dials_algorithms_integration_integrator_ext import ShoeboxProcessor
from dials.extensions.simple_background_ext import SimpleBackgroundExt
from dials.extensions.simple_centroid_ext import SimpleCentroidExt
from dials.model.data import make_image
from dxtbx import flumpy

from collections import defaultdict
from algorithm_status import AlgorithmStatus

from dials.model.data import PixelList, PixelListLabeller
from dials.algorithms.spot_finding.factory import FilterRunner
from dials.algorithms.spot_finding.finder import shoeboxes_to_reflection_table

import cctbx.array_family.flex
import scipy
from dials_tof_scaling_ext import (
    TOFCorrectionsData,
    tof_extract_shoeboxes_to_reflection_table,
    tof_calculate_shoebox_mask,
    tof_calculate_shoebox_foreground,
)


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
        self.new_reflection = None
        self.setup_algorithms(filenames)
        self.experimentPlannerParams = {"orientations": [], "num_reflections": []}
        self.integration_profiler_params = {
            "A": 200,
            "alpha": 0.4,
            "beta": 0.4,
            "sigma": 8.0,
            "tof_bbox": 10,
        }
        self.active_process = None
        self.last_algorithm_status = None
        self.tof_to_frame_interpolators = None
        self.frame_to_tof_interpolators = None

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
                command="dials.tof_integrate",
                args={},
                log="",
                selected_files=[],
                required_files=["refined.expt", "refined.refl"],
                output_experiment_file="refined.expt",
                output_reflections_file="refined.refl",
            ),
        }

    def _post_process_algorithm(self, algorithm_type: AlgorithmType):

        match algorithm_type:
            case AlgorithmType.dials_import:
                self.tof_to_frame_interpolators = self._get_tof_frame_interpolators()
                self.frame_to_tof_interpolators = self._get_frame_tof_interpolators()

    def _get_experiment(self, idx=0) -> Experiment:
        file_path = join(self.file_dir, "imported.expt")
        experiment = load.experiment_list(file_path)[idx]
        assert experiment is not None
        return experiment

    def _get_experiments(self) -> ExperimentList:
        file_path = join(self.file_dir, "imported.expt")
        experiments = load.experiment_list(file_path)
        assert experiments is not None
        return experiments

    def _get_tof_frame_interpolators(self) -> Tuple[scipy.interpolate.interp1]:
        tof_to_frame_interpolators = []
        file_path = join(self.file_dir, "imported.expt")
        for expt in load.experiment_list(file_path):
            tof = expt.scan.get_property("time_of_flight")  # (usec)
            frames = list(range(len(tof)))
            tof_to_frame_interpolators.append(
                tof_helpers.tof_to_frame_interpolator(tof, frames)
            )
        return tof_to_frame_interpolators

    def _get_frame_tof_interpolators(self) -> Tuple[scipy.interpolate.interp1]:
        frame_tof_interpolators = []
        file_path = join(self.file_dir, "imported.expt")
        for expt in load.experiment_list(file_path):
            tof = expt.scan.get_property("time_of_flight")  # (usec)
            frames = list(range(len(tof)))
            frame_tof_interpolators.append(
                tof_helpers.frame_to_tof_interpolator(frames, tof)
            )
        return frame_tof_interpolators

    def _get_fmt_instance(self, idx=0):
        expt = self._get_experiment(idx)
        self.fmt_instance = expt.imageset.get_format_class().get_instance(
            expt.imageset.paths()[idx], **expt.imageset.data().get_params()
        )
        return self.fmt_instance

    def get_pixel_bbox_centroid_positions(
        self,
        reflections,
        panel: int,
        pixel_pos: Tuple[int, int],
        return_miller_indices: bool = True,
    ) -> Tuple[list, list, list, list]:
        """
        Finds any bounding boxes within px and py on panel
        and returns their pz positions along with
        the centroid pz position.
        """

        reflections = reflections.select(reflections["panel"] == panel)
        x0, x1, y0, y1, z0, z1 = reflections["bbox"].parts()

        py = int(pixel_pos[0])
        px = int(pixel_pos[1])

        valid_reflections = reflections.select(
            (px >= x0) & (px <= x1) & (py >= y0) & (py <= y1)
        )

        if valid_reflections is None or len(valid_reflections) == 0:
            return [], [], [], []

        bbox_pos = []
        centroid_pos = []
        refl_ids = []
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

    def get_lineplot_data(
        self, panel_idx: int, panel_pos: Tuple[int, int], expt_id: int
    ) -> Tuple[Tuple(float), Tuple(float)]:

        x, y = self.get_pixel_spectra(panel_idx, panel_pos, expt_id)

        reflection_table = self._get_reflection_table_raw(reload=False)
        if reflection_table is None:
            return (tuple(x), tuple(y), (), ())

        bbox_pos, centroid_pos, ids, miller_idxs = (
            self.get_pixel_bbox_centroid_positions(
                reflection_table, panel_idx, panel_pos
            )
        )

        bbox_pos_tof = []
        centroid_pos_tof = []

        scan_range = self.algorithms[AlgorithmType.dials_find_spots].args.get(
            "scan_range"
        )
        if scan_range is None:
            scan_range = (0, 0)
        else:
            scan_range = scan_range.split(",")
            scan_range = (int(scan_range[0]) - 1, int(scan_range[1]) - 1)

        for idx, i in enumerate(bbox_pos):
            bbox_pos_tof.append(
                {
                    "x1": float(
                        self.frame_to_tof_interpolators[expt_id](
                            i[0] + scan_range[0] - 1
                        )
                    ),
                    "x2": float(
                        self.frame_to_tof_interpolators[expt_id](
                            i[1] + scan_range[0] - 1
                        )
                    ),
                    "id": ids[idx],
                }
            )
            if len(miller_idxs) != 0:
                centroid_pos_tof.append(
                    {
                        "x": float(
                            self.frame_to_tof_interpolators[expt_id](
                                centroid_pos[idx] + scan_range[0]
                            )
                        ),
                        "y": y[int(centroid_pos[idx] + scan_range[0])],
                        "id": ids[idx],
                        "millerIdx": miller_idxs[idx],
                    }
                )
            else:
                centroid_pos_tof.append(
                    {
                        "x": float(
                            self.frame_to_tof_interpolators[expt_id](
                                centroid_pos[idx] + scan_range[0]
                            )
                        ),
                        "y": y[int(centroid_pos[idx] + scan_range[0])],
                        "id": ids[idx],
                        "millerIdx": "",
                    }
                )
        return (tuple(x), tuple(y), tuple(bbox_pos_tof), tuple(centroid_pos_tof))

    def get_pixel_spectra(
        self, panel_idx: int, panel_pos: Tuple[int, int], expt_id: int
    ) -> Tuple[Tuple(float), Tuple(float)]:
        fmt_instance = self._get_fmt_instance(expt_id)
        x, y = fmt_instance.get_flattened_pixel_data(
            panel_idx, panel_pos[0], panel_pos[1]
        )
        return x, y

    def get_flattened_image_data(self) -> Tuple(List):
        """
        Image data summed along the time-of-flight dimension
        """
        if len(self.filenames) == 1:
            fmt_instance = self._get_fmt_instance()
            data = (tuple([tuple(i) for i in fmt_instance.get_flattened_data()]),)
            return data
        else:
            flattened_image_data = []
            for i in range(len(self.filenames)):
                fmt_instance = self._get_fmt_instance(i)
                flattened_image_data.append(
                    tuple([tuple(i) for i in fmt_instance.get_flattened_data()])
                )
            return tuple(flattened_image_data)

    def get_expt_json(self):
        with open(self.current_expt_file, "r") as g:
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

    def get_panel_sizes(self, expt_file):
        # (px)
        return tuple(
            [tuple(i["image_size"]) for i in expt_file["detector"][0]["panels"]]
        )

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
            raw_result = result.split("\n")
            result = ""
            parsing_table = False
            written_header = False

            def line_is_start_of_table(lines, idx):
                if not lines[idx].startswith("+-"):
                    return False
                if idx + 1 == len(lines):  # end of table at end of file
                    return False
                return lines[idx + 1].startswith("|")

            def line_is_end_of_table(lines, idx):
                if not lines[idx].startswith("+-"):
                    return False
                if idx + 1 < len(lines):  # end of table at end of file
                    return not lines[idx + 1].startswith("|")
                return True

            skip_next_line = False
            for count, line in enumerate(raw_result):
                if line_is_start_of_table(raw_result, count):
                    parsing_table = True
                    html_table = '<table border="1" cellpadding="5px" width="100%" bordercolor="white" frame="box">'
                if parsing_table:
                    if line.startswith("| "):
                        raw_ls = line.split("|")

                        # Header runs over two lines
                        if not written_header and not raw_result[count + 1].startswith(
                            "|-"
                        ):
                            raw_ls2 = raw_result[count + 1].split("|")
                            assert len(raw_ls) == len(raw_ls2)
                            raw_ls = [
                                f"{i} {raw_ls2[c_i].strip()}"
                                for c_i, i in enumerate(raw_ls)
                            ]
                            skip_next_line = True

                        ls = [i.strip() for i in raw_ls]
                        if not written_header:
                            html_table += (
                                "<tr align='right'>"
                                + "".join([f"<th>{heading}</th>" for heading in ls])
                                + "</tr>"
                            )
                            written_header = True
                        elif skip_next_line:
                            skip_next_line = False
                            continue
                        else:
                            html_table += (
                                "<tr align='right'>"
                                + "".join([f"<td>{cell}</td>" for cell in ls])
                                + "</tr>"
                            )

                    if line_is_end_of_table(raw_result, count):
                        parsing_table = False
                        written_header = False
                        result += html_table + "</table>"
                elif line.startswith("###########"):
                    result += line[:60] + "<br>"
                else:
                    result += line + "<br>"
            return result

        def success(stdout, stderr):
            # DIALS import error goes via stdout
            if "Unable to handle the following arguments:" in stdout:
                return False
            return not "error" in stderr and not "Error" in stderr

        def get_error_text(stdout, stderr):
            # Some DIALS import errors goes via stdout
            if algorithm_type == AlgorithmType.dials_import and len(stdout) != 0:
                if "not found" in stdout:
                    return stdout[: stdout.find("not found")] + "not found"
                if (
                    "Unable to handle the following arguments" in stdout
                    and "usage" in stdout
                ):
                    return stdout[: stdout.find("usage")]
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
                algorithm.command,
                *algorithm_args,
                cwd=self.file_dir,
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.PIPE,
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
        if success(stdout, stderr):
            self._post_process_algorithm(algorithm_type)
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
            return flex.reflection_table.from_msgpack_file(refl_file)

        reflection_table_raw = flex.reflection_table.from_msgpack_file(
            self.current_refl_file
        )

        self.reflection_table_raw = reflection_table_raw
        return self.reflection_table_raw

    def add_additional_data_to_reflections(self, open_reflection_table=None):
        """
        Adds rlps, peak intensities and idxs to reflection table
        """

        if self.current_refl_file is None and open_reflection_table is None:
            return

        if open_reflection_table is None:
            reflection_table = self._get_reflection_table_raw()
        else:
            reflection_table = open_reflection_table
        reflection_table.map_centroids_to_reciprocal_space(self._get_experiments())

        idxs = cctbx.array_family.flex.int(len(reflection_table))
        peak_intensities = cctbx.array_family.flex.double(len(reflection_table))
        for i in range(len(reflection_table)):
            idxs[i] = i
            peak_intensities[i] = max(reflection_table[i]["shoebox"].data)
        reflection_table["idx"] = idxs
        reflection_table["peak_intensity"] = peak_intensities

        if open_reflection_table is not None:
            return reflection_table

        reflection_table.as_msgpack_file(self.current_refl_file)

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

        reflections.as_msgpack_file(self.current_refl_file)

    def remove_reflection(self, reflection_id: int):
        if self.current_refl_file is None:
            return
        reflection_table = self._get_reflection_table_raw()
        sel = reflection_table["idx"] != reflection_id
        reflection_table = reflection_table.select(sel)
        reflection_table.as_msgpack_file(self.current_refl_file)

    def get_rlp_json(self):
        reflection_table = self._get_reflection_table_raw()
        rlps = list(reflection_table["rlp"])
        ids = [0 for i in range(len(rlps))]
        return {"rlp": rlps, "experiment_id": ids}

    def get_integrated_reflections_per_panel(self):
        reflection_table_raw = (
            self._get_reflection_table_raw()
        )  # integrated reflections
        refined_reflection_table = self._get_reflection_table_raw(
            refl_file=join(self.file_dir, "refined.refl")
        )

        # Integrated reflections are a subset of refined reflections
        if "idx" in reflection_table_raw:
            idx_map = {
                reflection_table_raw[i]["idx"]: reflection_table_raw[i]
                for i in range(len(reflection_table_raw))
            }
        else:
            idx_map = {}

        refl_data = defaultdict(list)
        self.refl_indexed_map = {}

        contains_xyz_obs = "xyzobs.px.value" in refined_reflection_table
        contains_xyz_cal = "xyzcal.px" in refined_reflection_table
        contains_miller_idxs = "miller_index" in refined_reflection_table
        contains_wavelength = "wavelength" in refined_reflection_table
        contains_tof = "tof" in refined_reflection_table
        contains_peak_intensities = "peak_intensity" in reflection_table_raw
        contains_wavelength_cal = "wavelength_cal" in reflection_table_raw
        contains_profile_intensities = "intensity.prf.value" in reflection_table_raw
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
            }

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

            if contains_peak_intensities:
                refl["peakIntensity"] = refined_reflection_table["peak_intensity"][i]

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
                refl["summedIntensity"] = idx_map[idx]["intensity.sum.value"]
                if contains_profile_intensities:
                    refl["profileIntensity"] = idx_map[idx]["intensity.prf.value"]

            refl_data[panel].append(refl)
        return refl_data

    def get_reflections_per_panel(self, reflection_table=None):
        if reflection_table is None:
            reflection_table_raw = self._get_reflection_table_raw()
        else:
            reflection_table_raw = reflection_table
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
        for i in range(len(reflection_table_raw)):
            panel = reflection_table_raw["panel"][i]
            panel_name = panel_names[panel]
            refl = {
                "bbox": reflection_table_raw["bbox"][i],
                "indexed": False,
                "panelName": panel_name,
                "id": reflection_table_raw["idx"][i],
            }
            if expt_ids is not None:
                refl["exptID"] = reflection_table_raw[expt_ids][i]
            else:
                refl["exptID"] = 0

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
        predictor = TOFReflectionPredictor(expt, float(dmin))

        current_angles = [i * np.pi / 180.0 for i in current_angles]
        current_miller_indices = []
        for angle in current_angles:
            raw_reflection_table = predictor.all_reflections_for_asu(
                expt.goniometer, float(angle)
            )
            current_miller_indices += list(raw_reflection_table["miller_index"])
        current_miller_indices = set(current_miller_indices)

        reflection_table_raw = predictor.all_reflections_for_asu(phi)

        refl_data = defaultdict(list)

        contains_xyz_cal = "xyzcal.px" in reflection_table_raw
        contains_wavelength_cal = "wavelength_cal" in reflection_table_raw
        contains_tof_cal = "tof_cal" in reflection_table_raw

        panel_names = [i["Name"] for i in self.get_detector_params(expt_file)]

        for i in range(len(reflection_table_raw)):
            if reflection_table_raw["miller_index"][i] in current_miller_indices:
                continue
            panel = reflection_table_raw["panel"][i]
            panel_name = panel_names[panel]
            refl = {
                "panelName": panel_name,
                "millerIdx": reflection_table_raw["miller_index"][i],
                "indexed": True,
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
                "Recommended": str(raw_result["recommended"]),
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
            num_indexed = (refl_table.get_flags(refl_table.flags.indexed)).count(True)
            percentage_indexed = round((num_indexed / num_reflections) * 100, 2)
            return f"{num_reflections} reflections ({percentage_indexed}% indexed)"
        else:
            return f"{num_reflections} reflections "

    def get_crystal_summary(self):
        if self.current_expt_file is None:
            return ""
        crystal_params = self.get_crystal_params(self.get_expt_json())
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
            scan = expt_file["scan"][0]
            tof = scan["properties"]["time_of_flight"]  # (usec)
            min_tof = round(min(tof), 3)
            max_tof = round(max(tof), 3)
            num_images = scan["image_range"][1] - scan["image_range"][0]
            return (min_tof, max_tof, (max_tof - min_tof) / num_images)

    def get_algorithm_logs(self):
        return {
            self.algorithms[i].command: self.algorithms[i].log for i in self.algorithms
        }

    def get_best_expt_orientation(self, current_angles, dmin):

        def parse_reflections(reflection_table_raw, miller_indices):

            if reflection_table_raw is None:
                return None

            refl_data = defaultdict(list)

            contains_xyz_cal = "xyzcal.px" in reflection_table_raw
            contains_wavelength_cal = "wavelength_cal" in reflection_table_raw
            contains_tof_cal = "tof_cal" in reflection_table_raw

            panel_names = [i["Name"] for i in self.get_detector_params(expt_file)]

            for i in range(len(reflection_table_raw)):
                if reflection_table_raw["miller_index"][i] not in miller_indices:
                    continue
                panel = reflection_table_raw["panel"][i]
                panel_name = panel_names[panel]
                refl = {
                    "panelName": panel_name,
                    "millerIdx": reflection_table_raw["miller_index"][i],
                    "indexed": True,
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

        current_angles = [i * np.pi / 180.0 for i in current_angles]

        with open(self.current_expt_file, "r") as g:
            expt_file = json.load(g)

        expt = ExperimentList.from_file(self.current_expt_file)[0]
        predictor = TOFReflectionPredictor(expt, float(dmin))

        observed_miller_indices = []
        possible_miller_indices = []
        best_angle = None
        best_refl_table = None

        for phi in current_angles:
            raw_reflection_table = predictor.all_reflections_for_asu(phi)
            observed_miller_indices += list(raw_reflection_table["miller_index"])
        observed_miller_indices = set(observed_miller_indices)

        # Coarse search
        angle = 0
        dphi = 0.08726646259971647  # 5 degrees
        for i in range(72):  # 360 degrees
            angle += dphi
            raw_reflection_table = predictor.all_reflections_for_asu(angle)
            miller_indices = list(raw_reflection_table["miller_index"])
            new_indices = [
                i for i in miller_indices if i not in observed_miller_indices
            ]
            if len(new_indices) > len(possible_miller_indices):
                best_angle = angle
                possible_miller_indices = new_indices
                best_refl_table = raw_reflection_table

        return best_angle * (180.0 / np.pi), parse_reflections(
            best_refl_table, possible_miller_indices
        )

    def update_experiment_planner_params(self, orientations, num_reflections):
        self.experimentPlannerParams["orientations"] = orientations
        self.experimentPlannerParams["num_reflections"] = num_reflections

    def get_experiment_planner_params(self):
        return (
            self.experimentPlannerParams["orientations"],
            self.experimentPlannerParams["num_reflections"],
        )

    def get_line_integration_for_reflection(
        self, reflection_id: str
    ) -> Tuple[List[float], List[float], float]:

        reflection_table = self._get_reflection_table_raw(
            refl_file=join(self.file_dir, "refined.refl")
        )
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
            val = tuple([i / wl for i in val])
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

        return compute_line_profile_data_for_reflection(
            reflection_table,
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

    def new_reflection_xy(self, panel_idx, expt_id, bbox):
        self.new_reflection = {"panel_idx": panel_idx, "expt_id": expt_id, "bbox": bbox}

    def get_new_reflection(self):
        return self.new_reflection

    def cancel_new_reflection(self):
        self.new_reflection = None

    def new_reflection_z(self, bbox):
        if self.new_reflection is not None:
            expt = self._get_experiment(self.new_reflection["expt_id"])
            frame0 = expt.sequence.get_frame_from_tof(bbox[0] * 10**-6)
            frame1 = expt.sequence.get_frame_from_tof(bbox[1] * 10**-6)

            self.new_reflection["bbox"] = self.new_reflection["bbox"][:4] + [
                frame0,
                frame1,
            ]

    def add_new_reflection(self):
        if self.new_reflection is None:
            return

        experiment = self._get_experiment(idx=int(self.new_reflection["expt_id"]))
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

        experiments = self._get_experiments()

        # reflection table already exists
        # add reflection to existing table and overwrite the file
        if self.current_refl_file is not None:
            reflection_table = self._get_reflection_table_raw()
            if "imageset" in reflection_table:
                r["imageset_id"] = flex.int(1, int(self.new_reflection["expt_id"]))
            if "id" in reflection_table:
                r["id"] = flex.int(1, int(self.new_reflection["expt_id"]))
            if "idx" in reflection_table:
                r["idx"] = flex.int(1, int(len(reflection_table)))
            r.add_beam_data(experiments)
            r = self.add_additional_data_to_reflections(r)
            r.set_flags(flex.bool(1, True), r.flags.strong)

            reflection_table.extend(r)
            reflection_table.as_msgpack_file(self.current_refl_file)
            return

        # reflection table does not exist
        # save as separate reflection file that is appended after find spots

        # send new data to viewers

    def get_predicted_shoebox_data(self, refl_id, padding=2):
        from copy import deepcopy

        reflection_table = self._get_reflection_table_raw()
        refl = reflection_table.select(reflection_table["idx"] == refl_id)
        assert len(refl) == 1
        refl = deepcopy(refl)

        refl["shoebox"] = flex.shoebox(
            refl["panel"],
            refl["bbox"],
            allocate=False,
            flatten=False,
        )
        experiments = self._get_experiments()
        sigma_m = 12
        sigma_b = 0.01
        for idx, experiment in enumerate(experiments):
            experiments[idx].profile = GaussianRSProfileModel(
                params={}, n_sigma=3, sigma_b=sigma_b, sigma_m=sigma_m
            )
        refl.compute_bbox(experiments)
        image_size = experiments[0].detector[0].get_image_size()
        tof_size = len(experiments[0].scan.get_property("time_of_flight"))
        bbox = list(refl[0]["bbox"])

        bbox[0] -= padding
        if bbox[0] < 0:
            bbox[0] = 0
        bbox[1] += padding
        if bbox[1] > image_size[0]:
            bbox[1] = image_size[0]
        bbox[2] -= padding
        if bbox[2] < 0:
            bbox[2] = 0
        bbox[3] += padding
        if bbox[3] > image_size[1]:
            bbox[3] = image_size[1]
        bbox[4] -= padding
        if bbox[4] < 0:
            bbox[4] = 0
        bbox[5] += padding
        if bbox[5] > tof_size:
            bbox[5] = tof_size

        actual_padding = tuple([refl[0]["bbox"][i] - bbox[i] for i in range(len(bbox))])

        refl["shoebox"] = flex.shoebox(
            refl["panel"], flex.int6(1, bbox), allocate=False, flatten=False
        )

        tof_extract_shoeboxes_to_reflection_table(
            refl, experiments[0], experiments[0].imageset, False
        )
        x0, x1, y0, y1, z0, z1 = refl[0]["bbox"]
        bbox_lengths = [z1 - z0, y1 - y0, x1 - x0]

        # tof_calculate_shoebox_foreground(refl, experiments[0], 0.05)
        tof_calculate_shoebox_mask(refl, experiments[0])
        shoebox_data = flumpy.to_numpy(refl["shoebox"][0].data)
        shoebox_data /= np.max(shoebox_data)

        return (
            shoebox_data.tolist(),
            flumpy.to_numpy(refl["shoebox"][0].mask).tolist(),
            bbox_lengths,
        )
