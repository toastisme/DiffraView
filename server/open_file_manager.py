from __future__ import annotations

import base64
from io import FileIO
from os import mkdir, rmdir
from os.path import isdir, join, splitext

from typing import Tuple

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

    def add_active_file(self, filename: str, content: FileIO) -> None:

        name, ext = splitext(filename)
        file_dir = self.working_directory + name

        local_file_dir, local_filename = self.create_local_file(
            file_dir, 
            filename, 
            content
        )
        self.active_files[local_filename] = ActiveFile(
            local_file_dir, local_filename)
        self.selected_file = self.active_files[local_filename]

    def remove_active_file(self, filename: str) -> None:

        file_dir = self.active_files[filename]
        if self.selected_file == self.active_files[filename]:
            new_selected_idx = list(self.active_files.keys()).index(filename) - 1
            if new_selected_idx < 0:
                self.selected_file = None
            else:
                key = list(self.active_files.keys())[new_selected_idx]
                self.selected_file = self.active_files[key]
        del self.active_files[filename]
        rmdir(file_dir)

    def create_local_file(self, file_dir: str, filename: str, content: FileIO):

        def get_local_file_names(file_dir, filename):
            if isdir(file_dir):
                count = 1
                new_file_dir = f"{file_dir}_{count}"
                while(isdir(new_file_dir)):
                    count += 1
                    new_file_dir = f"{file_dir}_{count}"
                name, ext = splitext(filename)
                file_dir = f"{file_dir}_{count}"
                filename = f"{name}_{count}{ext}"
            return file_dir, filename


        file_dir, filename = get_local_file_names(
            file_dir,
            filename
        )
        mkdir(file_dir)
        file_path = join(file_dir, filename)
        decoded = base64.b64decode(content.split(",")[1])
        with open(file_path, "wb") as g:
            g.write(decoded)
        return file_dir, filename

    async def run(self, algorithm_type: AlgorithmType) -> str:
        return await self.selected_file.run(algorithm_type)

    async def get_pixel_spectra(self, 
                          panel_idx: int, 
                          panel_pos: Tuple[int, int]) -> Tuple[Tuple(float), Tuple(float)]:
        return self.selected_file.get_pixel_spectra(
            panel_idx,
            panel_pos
        )

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

    def get_logs(self):
        if self.selected_file is not None:
            return self.selected_file.get_logs()
        return ["" for i in AlgorithmType][:5]

    def get_reflections_per_panel(self):
        if self.selected_file is not None:
            return self.selected_file.get_reflections_per_panel()
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

    def get_bravais_lattices_table(self):
        if self.selected_file is not None:
            return self.selected_file.get_bravais_lattices_table()
        return experiment_params.bravais_lattices_table_values

    def set_selected_input_files(self, selected_files, algorithm_type: AlgorithmType):
        if self.selected_file is not None:
            self.selected_file.algorithms[
                algorithm_type
            ].selected_files = selected_files

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
                self.selected_file.algorithms[
                    algorithm_type
                ].output_experiment_file,
                self.selected_file.algorithms[
                    algorithm_type
                ].output_reflections_file,
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

    def get_instrument_name(self):
        if self.selected_file is not None:
            return self.selected_file.get_instrument_name()
        return ""

    def get_experiment_description(self):
        if self.selected_file is not None:
            return self.selected_file.get_experiment_description()
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
        self, panel: int, pixel_pos: Tuple[int, int]
    ) -> Tuple[list, list, list[dict], list[dict]]:
        if self.selected_file is not None:
            return self.selected_file.get_lineplot_data(
                panel, pixel_pos
            )
        return None, None, (), ()

    def get_current_file_dir(self) -> str | None:
        if self.selected_file is not None:
            return self.selected_file.file_dir
        return None

    def add_additional_data_to_reflections(self):
        if self.selected_file is not None:
            return self.selected_file.add_additional_data_to_reflections()

    def get_tof_range(self):
        if self.selected_file is not None:
            return self.selected_file.get_tof_range()



