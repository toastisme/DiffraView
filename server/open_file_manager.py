from __future__ import annotations

import base64
from io import FileIO
from os import mkdir, rmdir
from os.path import isdir, join, splitext, dirname, basename
from datetime import datetime

from typing import Tuple, Dict, Union

import experiment_params
from active_file import ActiveFile
from algorithm_types import AlgorithmType


def ensure_selected_file(func):
    def wrapper(self, *args, **kwargs):
        if self.selected_file is not None:
            return func(self, *args, **kwargs)
        else:
            return None
    return wrapper

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

    def make_file_key_unique(self, file_key: str):
        if not file_key in self.active_files:
            return file_key
        count = 1
        unique_file_key = file_key
        while unique_file_key in self.active_files:
            unique_file_key = f"{file_key}({count})"
            count += 1
        return unique_file_key

    def create_processing_dir(self, file_dir: str):
        time_now = datetime.now()
        time_str = time_now.strftime("%Y-%m-%d_%H-%M-%S")
        processing_dir = join(file_dir, f"dv_{time_str}")
        mkdir(processing_dir)
        return processing_dir

    def add_active_file(self, msg, user_processing_dir=None) -> None:

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
        file_key = self.make_file_key_unique(file_key)

        # If no directory is specified, process in the same 
        # directory as images
        if user_processing_dir is not None:
            processing_dir = self.create_processing_dir(user_processing_dir)
        else:
            processing_dir = self.create_processing_dir(filedirectory)

        self.active_files[file_key] = ActiveFile(
            file_dir=filedirectory, 
            filenames=filenames, 
            file_key=file_key,
            software_backend=msg["softwareBackend"],
            processing_dir=processing_dir)
        self.selected_file = self.active_files[file_key]

    def add_active_processing_folder(self, folder_path, software_backend):
        file_key = basename(folder_path)
        file_key = self.make_file_key_unique(file_key)
        self.active_files[file_key] = ActiveFile(
            file_dir=None,
            filenames=None,
            processing_dir= folder_path, 
            file_key=file_key, software_backend=software_backend)
        self.selected_file = self.active_files[file_key]

    def remove_selected_file(self) -> None:
        for i in self.active_files:
            if self.active_files[i] == self.selected_file:
                self.remove_active_file(i)
                return

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

    @ensure_selected_file
    async def get_pixel_spectra(
        self, panel_idx: int, panel_pos: Tuple[int, int]
    ) -> Tuple[Tuple[float], Tuple[float]]:
        return self.selected_file.get_pixel_spectra(panel_idx, panel_pos)

    @ensure_selected_file
    def get_selected_filename(self):
        return self.selected_file.filename

    @ensure_selected_file
    def get_experiment_params(self):
        return self.selected_file.get_experiment_params()

    @ensure_selected_file
    def get_selected_file_image_range(self):
        return self.selected_file.get_image_range()

    def update_selected_file(self, idx: int) -> None:
        name = list(self.active_files.keys())[idx]
        self.selected_file = self.active_files[name]

    @ensure_selected_file
    def update_selected_file_arg(
        self, algorithm_type: AlgorithmType, param_name: str, param_value: str
    ) -> None:
        return self.selected_file.update_arg(algorithm_type, param_name, param_value)

    @ensure_selected_file
    def set_selected_file_algorithm_args(
        self, algorithm_type: AlgorithmType, args: dict[str, str]
    ) -> None:
        return self.selected_file.set_args(algorithm_type, args)

    def get_logs(self):
        if self.selected_file is not None:
            return self.selected_file.get_logs()
        return ["" for i in AlgorithmType][:5]

    @ensure_selected_file
    def get_reflections_per_panel(self, reflection_table=None):
        return self.selected_file.get_reflections_per_panel(reflection_table=reflection_table)

    @ensure_selected_file
    def get_integrated_reflections_per_panel(self, integration_type="observed"):
        return self.selected_file.get_integrated_reflections_per_panel(integration_type=integration_type)

    @ensure_selected_file
    def get_integrated_reflections_msgpack(self, integration_type="observed"):
        return self.selected_file.get_integrated_reflections_msgpack(integration_type=integration_type)

    def get_reflection_table(self):
        if self.selected_file is not None:
            return self.selected_file.get_reflection_table()
        return experiment_params.reflection_table_values

    @ensure_selected_file
    def get_rlp_json(self):
        return self.selected_file.get_rlp_json()

    @ensure_selected_file
    def get_experiment_view_json(self):
        return self.selected_file.get_experiment_view_json()

    @ensure_selected_file
    def get_expt_json(self):
        return self.selected_file.get_expt_json()

    @ensure_selected_file
    def get_flattened_image_data(self, tof_range=None, 
                                 update_find_spots_range=False, 
                                 panel_idx=None, expt_id=None):
        return self.selected_file.get_flattened_image_data(
            tof_range=tof_range, update_find_spots_range=update_find_spots_range, 
            panel_idx=panel_idx, expt_id=expt_id)

    def get_bravais_lattices_table(self):
        if self.selected_file is not None:
            return self.selected_file.get_bravais_lattices_table()
        return experiment_params.bravais_lattices_table_values

    @ensure_selected_file
    def set_selected_input_files(self, selected_files, algorithm_type: AlgorithmType):
        self.selected_file.algorithms[algorithm_type].selected_files = (
            selected_files
        )

    def set_current_expt_file(self, expt_file):
        assert self.selected_file is not None
        expt_file_path = join(self.selected_file.processing_dir, expt_file)
        self.selected_file.current_expt_file = expt_file_path

    def set_current_refl_file(self, refl_file):
        assert self.selected_file is not None
        refl_file_path = join(self.selected_file.processing_dir, refl_file)
        self.selected_file.current_refl_file = refl_file_path

    @ensure_selected_file
    def get_output_files(self, algorithm_type: AlgorithmType):
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

    def get_integrated_reflections_summary(self, integration_type: str):
        if self.selected_file is not None:
            return self.selected_file.get_integrated_reflections_summary(integration_type=integration_type)
        return ""

    def get_crystal_summary(self):
        if self.selected_file is not None:
            return self.selected_file.get_crystal_summary()
        return ""

    async def get_lineplot_data(
        self, panel: int, pixel_pos: Tuple[int, int], expt_id: int, reflection_type: str="observed"
    ) -> Tuple[list, list, list[dict], list[dict]]:
        if self.selected_file is not None:
            return self.selected_file.get_lineplot_data(panel, pixel_pos, expt_id, reflection_type)
        return None, None, (), ()

    @ensure_selected_file
    def get_current_file_dir(self) -> str | None:
        return self.selected_file.file_dir

    @ensure_selected_file
    def get_current_processing_dir(self) -> str | None:
        return self.selected_file.processing_dir

    @ensure_selected_file
    def add_additional_data_to_reflections(self):
        return self.selected_file.add_additional_data_to_reflections()

    @ensure_selected_file
    def add_calculated_frames_to_reflections(self):
        return self.selected_file.add_calculated_frames_to_reflections()

    @ensure_selected_file
    def get_tof_range(self):
        return self.selected_file.get_tof_range()

    @ensure_selected_file
    def remove_reflection(self, reflection_id: int, reflection_type: str="observed"):
        return self.selected_file.remove_reflection(reflection_id, reflection_type)

    @ensure_selected_file
    def predict_reflection_table(self, dmin, phi, current_angles):
        return self.selected_file.predict_reflection_table(
            dmin, phi, current_angles
        )

    @ensure_selected_file
    def get_best_expt_orientation(self, current_angles, dmin):
        return self.selected_file.get_best_expt_orientation(current_angles, dmin)

    @ensure_selected_file
    def update_experiment_planner_params(self, key, value):
        self.selected_file.update_experiment_planner_params(
            key, value
        )

    @ensure_selected_file
    def clear_experiment_planner_params(self):
        return self.selected_file.clear_experiment_planner_params()

    @ensure_selected_file
    def get_experiment_planner_params(self):
        return self.selected_file.get_experiment_planner_params()

    @ensure_selected_file
    def get_line_integration_for_shoebox(self, expt_id, shoebox, integration_method):
        return self.selected_file.get_line_integration_for_shoebox(expt_id ,shoebox, integration_method)

    @ensure_selected_file
    def update_integration_profiler_params(self, A, alpha, beta, sigma, tof_box, bbox_multiplier):
        return self.selected_file.update_integration_profiler_params(
            A, alpha, beta, sigma, tof_box, bbox_multiplier
        )

    @ensure_selected_file
    async def cancel_active_process(self):
        await self.selected_file.cancel_active_process()

    @ensure_selected_file
    def last_algorithm_status(self):
        return self.selected_file.last_algorithm_status

    @ensure_selected_file
    def new_reflection_xy(self, panel_idx, expt_id, bbox):
        return self.selected_file.new_reflection_xy(panel_idx, expt_id, bbox)

    @ensure_selected_file
    def new_reflection_z(self, bbox):
        return self.selected_file.new_reflection_z(bbox)

    @ensure_selected_file
    def add_new_reflection(self):
        return self.selected_file.add_new_reflection()

    @ensure_selected_file
    def cancel_new_reflection(self):
        return self.selected_file.cancel_new_reflection()

    @ensure_selected_file
    def get_new_reflection(self):
        return self.selected_file.get_new_reflection()

    @ensure_selected_file
    def get_predicted_shoebox(
            self, 
            refl_id,
            tof_padding=30,
            xy_padding=5,
            save_to_cache=True, 
            return_expt_id=True,
            incident_run=None,
            empty_run=None,
            incident_radius=None,
            incident_number_density=None,
            incident_scattering_x_section=None,
            incident_absorption_x_section=None,
            sample_radius=None,
            sample_number_density=None,
            sample_scattering_x_section=None,
            sample_absorption_x_section=None,
            apply_lorentz_correction=False,
            apply_incident_spectrum=False,
            apply_spherical_absorption=False,
            reflection_type="observed",
            integration_method="summation"
            ):
        return self.selected_file.get_predicted_shoebox(
            refl_id,
            tof_padding,
            xy_padding,
            save_to_cache,
            return_expt_id,
            incident_run,
            empty_run,
            incident_radius,
            incident_number_density,
            incident_scattering_x_section,
            incident_absorption_x_section,
            sample_radius,
            sample_number_density,
            sample_scattering_x_section,
            sample_absorption_x_section,
            apply_lorentz_correction,
            apply_incident_spectrum,
            apply_spherical_absorption,
            reflection_type,
            integration_method
        )

    @ensure_selected_file
    def save_hkl_file(self, filename, min_partiality, min_i_sigma):
        return self.selected_file.save_hkl_file(filename, min_partiality, min_i_sigma)

    @ensure_selected_file
    def update_experiment_images(self, tof_range=None, update_find_spots_range=False):
        return self.selected_file.get_flattened_image_data(
            tof_range=tof_range,
            update_find_spots_range=update_find_spots_range
            )

    @ensure_selected_file
    def get_asu_reflections_per_panel(self, reflection_table=None, per_expt=False):
        return self.selected_file.get_asu_reflections_per_panel(reflection_table=reflection_table, per_expt=per_expt)

    @ensure_selected_file
    def get_goniometer_phi_angles(self):
        return self.selected_file.get_goniometer_phi_angles()
        
    @ensure_selected_file
    def get_user_dmin(self):
        return self.selected_file.get_user_dmin()
    
    @ensure_selected_file
    def update_user_dmin(self, dmin):
        return self.selected_file.update_user_dmin(dmin=dmin)

    @ensure_selected_file
    def get_dmin(self):
        return self.selected_file.get_dmin()

    @ensure_selected_file
    def get_experiment_ids(self):
        return self.selected_file.get_experiment_ids()

    @ensure_selected_file
    def get_imageset_ids(self):
        return self.selected_file.get_imageset_ids()

    @ensure_selected_file
    def get_asu_predicted_and_observed_reflections(
            self, expt_id, dmin=None):
        return self.selected_file.get_asu_predicted_and_observed_reflections(
            expt_id=expt_id, dmin=dmin
        )

    @ensure_selected_file
    def get_num_experiments(self):
        return self.selected_file.get_num_experiments()

    @ensure_selected_file
    def get_experiment_names(self):
        return self.selected_file.get_experiment_names()

    @ensure_selected_file
    def get_crystal_ids_map(self):
        return self.selected_file.get_crystal_ids_map()

    @ensure_selected_file
    def get_crystal_ids(self):
        return self.selected_file.get_crystal_ids()

    @ensure_selected_file
    def reindex_reflections_with_crystal_id(self, crystal_id: str, basis: str) -> None:
        return self.selected_file.reindex_reflections_with_crystal_id(
            crystal_id,
            basis
        )

    @ensure_selected_file
    def get_crystal_json(self, crystal_id : str) -> None:
        return self.selected_file.get_crystal_json(crystal_id)

    @ensure_selected_file
    def update_expt_crystal(self, crystal_id: str, crystal_json: Dict) -> None:
        return self.selected_file.update_expt_crystal(crystal_id, crystal_json)

    @ensure_selected_file
    def get_bravais_settings_crystal(self, crystal_id: str) -> Dict:
        return self.selected_file.get_bravais_settings_crystal(crystal_id)

    @ensure_selected_file
    def calculate_bbox_sigma_b(self):
        return self.selected_file.calculate_bbox_sigma_b()

    @ensure_selected_file
    def get_shoebox_data_2d(self, shoebox):
        return self.selected_file.get_shoebox_data_2d(shoebox)

    @ensure_selected_file
    def get_normalised_shoebox_data(self, shoebox):
        return self.selected_file.get_normalised_shoebox_data(shoebox)

    @ensure_selected_file
    def get_num_detector_panels(self):
        return self.selected_file.get_num_detector_panels()

    @ensure_selected_file
    def get_images_at_idx(self, expt_id, idx):
        return self.selected_file.get_images_at_idx(expt_id, idx)

    @ensure_selected_file
    def get_threshold_debug_data(self, idx, expt_id, threshold_algorithm, algorithm_params):
        return self.selected_file.get_threshold_debug_data(idx, expt_id, 
                                        threshold_algorithm, algorithm_params)

    @ensure_selected_file
    def get_last_successful_command(self):
        return self.selected_file.get_last_successful_command()


    @ensure_selected_file
    def update_current_experiment_viewer_expt_id(self, expt_id):
        self.selected_file.update_current_experiment_viewer_expt_id(expt_id)

    @ensure_selected_file
    def get_current_experiment_viewer_expt_id(self):
        return self.selected_file.get_current_experiment_viewer_expt_id()

    @ensure_selected_file
    def get_algorithm_log(self, algorithm_type: AlgorithmType):
        return self.selected_file.get_algorithm_log(algorithm_type)

    @ensure_selected_file
    def add_idxs_to_integrated_reflections(self):
        return self.selected_file.add_idxs_to_integrated_reflections()

    @ensure_selected_file
    def last_integration_using_calculated(self) -> bool:
        return self.selected_file.last_integration_using_calculated()

    @ensure_selected_file
    def get_output_params(self, algorithm_type: AlgorithmType, **kwargs) -> dict:
        return self.selected_file.output_params_map[algorithm_type](**kwargs)

    @ensure_selected_file
    def get_shoebox_mask_using_profile(self, shoebox, profile):
        return self.selected_file.get_shoebox_mask_using_profile(
            shoebox=shoebox, profile=profile
        )

    @ensure_selected_file
    def get_panel_sizes(self) -> Tuple:
        return self.selected_file.get_panel_sizes()

    @ensure_selected_file
    def get_reflection_table_msgpack(self, reload=True, refl_file=None):
        return self.selected_file.get_reflection_table_msgpack(
            reload=reload, refl_file=refl_file)

    @ensure_selected_file
    def get_rs_viewer_data(
            self, 
            grid_size:int=192, 
            max_resolution:float=6, 
            nproc:int=8) -> Tuple[str, Tuple[int, int, int]]:
        return self.selected_file.get_rs_viewer_data(
            grid_size=grid_size,
            max_resolution=max_resolution,
            nproc=nproc
        )