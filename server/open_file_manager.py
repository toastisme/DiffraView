from __future__ import annotations

import base64
from io import FileIO
from os import mkdir, rmdir
from os.path import isdir, join, splitext, dirname, basename

from typing import Tuple, Dict, Union

import experiment_params
from active_file import ActiveFile
from algorithm_types import AlgorithmType


class OpenFileManager:
    """
    Manages a running list of ActiveFiles and which is currently selected
    """

    def __init__(self, working_directory: str = "tmp/") -> None:

        self.working_directory = working_directory
        self.active_files = {}
        self.selected_file = None

        if not isdir(working_directory):
            mkdir(working_directory)

    def create_active_file_key(self, local_filenames: list[str]):
        if len(local_filenames) == 1:
            return local_filenames[0]
        file_key = ""
        current_len = 0
        idx = 0
        while True:
            char = None
            for i in local_filenames:
                if idx >= len(i):
                    break
                if char is None:
                    char = i[idx]
                else:
                    if i[idx] != char:
                        file_key += "*"
                        return file_key
            if char is None:
                break
            file_key += char
            idx += 1

    def add_active_file(self, msg) -> None:

        full_filenames = msg["filenames"]
        filenames = []
        filedirectory = None
        for full_filename in full_filenames:
            filename = basename(full_filename)
            filedir = dirname(full_filename)
            if filedirectory is None:
                filedirectory = filedir
            else:
                assert (
                    filedir == filedirectory
                ), "All files must be in the same directory."
            filenames.append(filename)

        local_filenames = filenames
        file_key = self.create_active_file_key(local_filenames)
        self.active_files[file_key] = ActiveFile(filedirectory, filenames, file_key)
        self.selected_file = self.active_files[file_key]

    def remove_active_file(self, file_key: str) -> None:

        file_dir = self.active_files[file_key]
        if self.selected_file == self.active_files[file_key]:
            new_selected_idx = list(self.active_files.keys()).index(file_key) - 1
            if new_selected_idx < 0:
                self.selected_file = None
            else:
                key = list(self.active_files.keys())[new_selected_idx]
                self.selected_file = self.active_files[key]
        del self.active_files[file_key]
        rmdir(file_dir)

    def set_active_file(self, file_key: str) -> None:
        assert file_key in self.active_files
        self.selected_file = self.active_files[file_key]

    def get_open_file_keys(self) -> list[str]:
        return list(self.active_files.keys())

    def get_current_file_key(self) -> Union[str, None]:
        if self.selected_file is not None:
            return self.selected_file.file_key
        return None

    def get_algorithm_logs(self) -> Dict[str:str]:
        if self.selected_file is not None:
            return self.selected_file.get_algorithm_logs()

    def create_local_file(self, file_dir: str, filename: str, content: FileIO):

        def get_local_file_names(file_dir, filename):
            if isdir(file_dir):
                count = 1
                new_file_dir = f"{file_dir}_{count}"
                while isdir(new_file_dir):
                    count += 1
                    new_file_dir = f"{file_dir}_{count}"
                name, ext = splitext(filename)
                file_dir = f"{file_dir}_{count}"
                filename = f"{name}_{count}{ext}"
            return file_dir, filename

        file_dir, filename = get_local_file_names(file_dir, filename)
        mkdir(file_dir)
        file_path = join(file_dir, filename)
        decoded = base64.b64decode(content.split(",")[1])
        with open(file_path, "wb") as g:
            g.write(decoded)
        return file_dir, filename

    async def run(self, algorithm_type: AlgorithmType) -> str:
        return await self.selected_file.run(algorithm_type)

    async def get_pixel_spectra(
        self, panel_idx: int, panel_pos: Tuple[int, int]
    ) -> Tuple[Tuple(float), Tuple(float)]:
        return self.selected_file.get_pixel_spectra(panel_idx, panel_pos)

    def get_selected_filename(self):
        return self.selected_file.filename

    def get_experiment_params(self):
        return self.selected_file.get_experiment_params()

    def get_selected_file_image_range(self):
        return self.selected_file.get_image_range()

    def update_selected_file(self, idx: int) -> None:
        name = list(self.active_files.keys())[idx]
        self.selected_file = self.active_files[name]

    def update_selected_file_arg(
        self, algorithm_type: AlgorithmType, param_name: str, param_value: str
    ) -> None:
        return self.selected_file.update_arg(algorithm_type, param_name, param_value)

    def set_selected_file_algorithm_args(
        self, algorithm_type: AlgorithmType, args: dict[str, str]
    ) -> None:
        if self.selected_file is not None:
            return self.selected_file.set_args(algorithm_type, args)

    def get_logs(self):
        if self.selected_file is not None:
            return self.selected_file.get_logs()
        return ["" for i in AlgorithmType][:5]

    def get_reflections_per_panel(self, reflection_table=None):
        if self.selected_file is not None:
            return self.selected_file.get_reflections_per_panel(reflection_table=reflection_table)
        return None

    def get_integrated_reflections_per_panel(self):
        if self.selected_file is not None:
            return self.selected_file.get_integrated_reflections_per_panel()
        return None

    def get_reflection_table(self):
        if self.selected_file is not None:
            return self.selected_file.get_reflection_table()
        return experiment_params.reflection_table_values

    def get_rlp_json(self):
        if self.selected_file is not None:
            return self.selected_file.get_rlp_json()
        return None

    def get_experiment_view_json(self):
        if self.selected_file is not None:
            return self.selected_file.get_experiment_view_json()
        return None

    def get_expt_json(self):
        if self.selected_file is not None:
            return self.selected_file.get_expt_json()
        return None

    def get_flattened_image_data(self):
        if self.selected_file is not None:
            return self.selected_file.get_flattened_image_data()
        return None

    def get_bravais_lattices_table(self):
        if self.selected_file is not None:
            return self.selected_file.get_bravais_lattices_table()
        return experiment_params.bravais_lattices_table_values

    def set_selected_input_files(self, selected_files, algorithm_type: AlgorithmType):
        if self.selected_file is not None:
            self.selected_file.algorithms[algorithm_type].selected_files = (
                selected_files
            )

    def set_current_expt_file(self, expt_file):
        assert self.selected_file is not None
        expt_file_path = join(self.selected_file.file_dir, expt_file)
        self.selected_file.current_expt_file = expt_file_path

    def set_current_refl_file(self, refl_file):
        assert self.selected_file is not None
        refl_file_path = join(self.selected_file.file_dir, refl_file)
        self.selected_file.current_refl_file = refl_file_path

    def get_output_files(self, algorithm_type: AlgorithmType):
        if self.selected_file is not None:
            return [
                self.selected_file.algorithms[algorithm_type].output_experiment_file,
                self.selected_file.algorithms[algorithm_type].output_reflections_file,
            ]

    def has_selected_input_files(self, algorithm_type: AlgorithmType) -> bool:
        if self.selected_file is not None:
            return self.selected_file.has_selected_files(algorithm_type)
        return False

    def get_change_of_basis(self, solution_number: str) -> str:
        if self.selected_file is not None:
            return self.selected_file.get_change_of_basis(solution_number)
        return ""

    def can_run(self, algorithm_type: AlgorithmType) -> bool:
        if self.selected_file is not None:
            return self.selected_file.can_run(algorithm_type)
        return False

    def get_instrument_name(self, idx=0):
        if self.selected_file is not None:
            return self.selected_file.get_instrument_name(idx=idx)
        return ""

    def get_experiment_description(self, idx=0):
        if self.selected_file is not None:
            return self.selected_file.get_experiment_description(idx=idx)
        return ""

    def get_reflections_summary(self):
        if self.selected_file is not None:
            return self.selected_file.get_reflections_summary()
        return ""

    def get_crystal_summary(self):
        if self.selected_file is not None:
            return self.selected_file.get_crystal_summary()
        return ""

    async def get_lineplot_data(
        self, panel: int, pixel_pos: Tuple[int, int], expt_id: int
    ) -> Tuple[list, list, list[dict], list[dict]]:
        if self.selected_file is not None:
            return self.selected_file.get_lineplot_data(panel, pixel_pos, expt_id)
        return None, None, (), ()

    def get_current_file_dir(self) -> str | None:
        if self.selected_file is not None:
            return self.selected_file.file_dir
        return None

    def add_additional_data_to_reflections(self):
        if self.selected_file is not None:
            return self.selected_file.add_additional_data_to_reflections()

    def add_calculated_frames_to_reflections(self):
        if self.selected_file is not None:
            return self.selected_file.add_calculated_frames_to_reflections()

    def get_tof_range(self):
        if self.selected_file is not None:
            return self.selected_file.get_tof_range()

    def remove_reflection(self, reflection_id: int):
        if self.selected_file is not None:
            return self.selected_file.remove_reflection(reflection_id)

    def predict_reflection_table(self, dmin, phi, current_angles):
        if self.selected_file is not None:
            return self.selected_file.predict_reflection_table(
                dmin, phi, current_angles
            )

    def get_best_expt_orientation(self, current_angles, dmin):
        if self.selected_file is not None:
            return self.selected_file.get_best_expt_orientation(current_angles, dmin)

    def update_experiment_planner_params(self, key, value):
        if self.selected_file is not None:
            self.selected_file.update_experiment_planner_params(
                key, value
            )

    def clear_experiment_planner_params(self):
        if self.selected_file is not None:
            return self.selected_file.clear_experiment_planner_params()

    def get_experiment_planner_params(self):
        if self.selected_file is not None:
            return self.selected_file.get_experiment_planner_params()

    def get_line_integration_for_shoebox(self, expt_id, shoebox):
        if self.selected_file is not None:
            return self.selected_file.get_line_integration_for_shoebox(expt_id ,shoebox)

    def update_integration_profiler_params(self, A, alpha, beta, sigma, tof_box):
        if self.selected_file is not None:
            return self.selected_file.update_integration_profiler_params(
                A, alpha, beta, sigma, tof_box
            )

    async def cancel_active_process(self):
        if self.selected_file is not None:
            await self.selected_file.cancel_active_process()

    def last_algorithm_status(self):
        if self.selected_file is not None:
            return self.selected_file.last_algorithm_status
        return None

    def new_reflection_xy(self, panel_idx, expt_id, bbox):
        if self.selected_file is not None:
            return self.selected_file.new_reflection_xy(panel_idx, expt_id, bbox)

    def new_reflection_z(self, bbox):
        if self.selected_file is not None:
            return self.selected_file.new_reflection_z(bbox)

    def add_new_reflection(self):
        if self.selected_file is not None:
            return self.selected_file.add_new_reflection()

    def cancel_new_reflection(self):
        if self.selected_file is not None:
            return self.selected_file.cancel_new_reflection()

    def get_new_reflection(self):
        if self.selected_file is not None:
            return self.selected_file.get_new_reflection()

    def get_predicted_shoebox(self, refl_id):
        if self.selected_file is not None:
            return self.selected_file.get_predicted_shoebox(refl_id)

    def save_hkl_file(self, filename):
        if self.selected_file is not None:
            return self.selected_file.save_hkl_file(filename)

    def update_experiment_images(self, tof_range=None, update_find_spots_range=False):
        if self.selected_file is not None:
            return self.selected_file.get_flattened_image_data(
                tof_range=tof_range,
                update_find_spots_range=update_find_spots_range
                )

    def get_asu_reflections_per_panel(self, reflection_table=None, per_expt=False):
        if self.selected_file is not None:
            return self.selected_file.get_asu_reflections_per_panel(reflection_table=reflection_table, per_expt=per_expt)

    def get_goniometer_phi_angles(self):
        if self.selected_file is not None:
            return self.selected_file.get_goniometer_phi_angles()
        
    def get_user_dmin(self):
        if self.selected_file is not None:
            return self.selected_file.get_user_dmin()
    
    def update_user_dmin(self, dmin):
        if self.selected_file is not None:
            return self.selected_file.update_user_dmin(dmin=dmin)

    def get_dmin(self):
        if self.selected_file is not None:
            return self.selected_file.get_dmin()

    def get_experiment_ids(self):
        if self.selected_file is not None:
            return self.selected_file.get_experiment_ids()

    def get_imageset_ids(self):
        if self.selected_file is not None:
            return self.selected_file.get_imageset_ids()

    def get_asu_predicted_and_observed_reflections(
            self, expt_id, dmin=None):
        if self.selected_file is not None:
            return self.selected_file.get_asu_predicted_and_observed_reflections(
                expt_id=expt_id, dmin=dmin
            )

    def get_num_experiments(self):
        if self.selected_file is not None:
            return self.selected_file.get_num_experiments()

    def get_experiment_names(self):
        if self.selected_file is not None:
            return self.selected_file.get_experiment_names()

    def get_crystal_ids_map(self):
        if self.selected_file is not None:
            return self.selected_file.get_crystal_ids_map()

    def get_crystal_ids(self):
        if self.selected_file is not None:
            return self.selected_file.get_crystal_ids()

    def reindex_reflections_with_crystal_id(self, crystal_id: str, basis: str) -> None:
        if self.selected_file  is not None:
            return self.selected_file.reindex_reflections_with_crystal_id(
                crystal_id,
                basis
            )

    def get_crystal_json(self, crystal_id : str) -> None:
        if self.selected_file is not None:
            return self.selected_file.get_crystal_json(crystal_id)

    def update_expt_crystal(self, crystal_id: str, crystal_json: Dict) -> None:
        if self.selected_file is not None:
            return self.selected_file.update_expt_crystal(crystal_id, crystal_json)

    def get_bravais_settings_crystal(self, crystal_id: str) -> Dict:
        if self.selected_file is not None:
            return self.selected_file.get_bravais_settings_crystal(crystal_id)
