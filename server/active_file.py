from __future__ import annotations
from typing import Tuple, List

from enum import Enum

from algorithm_types import AlgorithmType
from app_types import SoftwareBackend

from dials_interface import DIALSInterface
from xds_interface import XDSInterface
    
class WorkflowState(Enum):
    imported = 1
    found_spots = 2
    indexed = 3
    refined = 4
    integrated = 5

class ActiveFile:
    """
    Manages all data relating to a file imported in the via the GUI
    """

    def __init__(self, file_dir: str, filenames: List[str] | None, file_key: str, 
                 active_software: str) -> None:
        self.software_backend = self._get_software_backend(active_software)
        self.interfaces = self.setup_interfaces(file_dir, filenames)
        self._experiment_type = None
        self.workflow_state = None
        self.file_dir = file_dir
        self.file_key = file_key
        self.active_process = None
        self.last_algorithm_status = None
        self.last_algorithm_output = None
        self.user_dmin = None
        self.last_successful_command = None
        self.command_history = {}
        self.output_params_map = {} 


        # No new images given so ActiveFile must be processing folder
        if filenames is None:
            self.setup_state()

    @property
    def active_software(self):
        return self.interfaces[self.software_backend]

    def setup_interfaces(self, file_dir: str, filenames: list[str] | None) -> dict:
        return {
            SoftwareBackend.DIALS : DIALSInterface(file_dir, filenames),
            SoftwareBackend.XDS : XDSInterface(file_dir, filenames)
        }

    def setup_state(self) -> None:
        last_algorithm_command, last_algorithm_type = self.active_software.setup_state()

        self.last_successful_command = last_algorithm_command
        self._load_command_history()
        self._update_workflow_state(last_algorithm_type)

    async def run(self, algorithm_type: AlgorithmType) -> str:
        log =  await self.active_software.run(algorithm_type=algorithm_type)
        self.last_algorithm_status = self.active_software.last_algorithm_status
        self.last_algorithm_output = self.active_software.last_algorithm_output
        self._update_workflow_state(algorithm_type)
        return log

    def get_experiment_type(self):
        return self.active_software.experiment_type

    def get_lineplot_data(
        self, panel_idx: int, panel_pos: Tuple[int, int], imageset_id: int,
        reflection_type: str="observed"
    ) -> Tuple[Tuple[float], Tuple[float]]:
        return self.active_software.get_lineplot_data(
            panel_idx=panel_idx,
            panel_pos=panel_pos,
            imageset_id=imageset_id,
            reflection_type=reflection_type
        )
    


    def get_output_params(self, algorithm_type: AlgorithmType) -> dict:
        return self.active_software.get_output_params(algorithm_type=algorithm_type)

    def set_args(self, algorithm_type: AlgorithmType, args: dict[str, str]) -> None:
        return self.active_software.set_args(algorithm_type=algorithm_type, args=args)

    def update_selected_file_arg(
        self, algorithm_type: AlgorithmType, param_name: str, param_value: str) -> None:
        return self.active_software.update_arg(
            algorithm_type=algorithm_type,
            param_name=param_name,
            param_value=param_value
        )

    def  _get_software_backend(self, software_backend: str) -> SoftwareBackend:
        match software_backend:
            case "DIALS":
                return SoftwareBackend.DIALS
            case "XDS":
                return SoftwareBackend.XDS
            case "MANTID":
                return SoftwareBackend.MANTID
        
    def _update_workflow_state(self, algorithm_type: AlgorithmType):
        match algorithm_type:
            case AlgorithmType.dials_import:
                self.workflow_state = WorkflowState.imported
                return
            case AlgorithmType.dials_find_spots:
                self.workflow_state = WorkflowState.found_spots
                return
            case AlgorithmType.dials_index:
                self.workflow_state = WorkflowState.indexed
                return
            case AlgorithmType.dials_refine:
                self.workflow_state = WorkflowState.refined
                return
            case AlgorithmType.dials_integrate:
                self.workflow_state = WorkflowState.integrated
                return

    def get_last_successful_command(self) -> str: 
        return self.last_successful_command

    def get_num_detector_panels(self) -> int:
        return self.active_software.get_num_detector_panels()

    def get_num_experiments(self) -> int:
        return self.active_software.get_num_experiments()

    def get_image_data(self, 
                       image_range: Tuple[int, int], 
                       **kwargs
                       )-> Tuple[List]:

        return self.active_software.get_image_data(
            image_range=image_range,
            **kwargs
        )

    def get_image_range(self):
        return self.active_softare.get_image_range()

    def get_default_image_data(self, **kwargs):
        return self.active_software.get_default_image_data(**kwargs)

    def get_expt_json(self):
        return self.active_software.get_expt_json()

    def get_predicted_shoebox(self, *args, **kwargs):
        return self.active_software.get_predicted_shoebox(*args, **kwargs)

    def get_current_experiment_viewer_expt_id(self):
        return self.active_software.current_experiment_viewer_expt_id

    def get_threshold_debug_data(self, expt_id, idx=None, threshold_algorithm=None, algorithm_params=None):
        return self.active_software.get_threshold_debug_data(
            expt_id, idx, threshold_algorithm, algorithm_params)

    def get_reflection_table_for_image_range(self, image_range: Tuple[int, int]):
        return self.active_software.get_reflection_table_for_image_range(
            image_range=image_range
        )

    def get_reflections_per_panel(self, image_range=None):
        return self.active_software.get_reflections_per_panel(
            image_range=image_range
        )



        