from __future__ import annotations

from enum import Enum
import json
from math import acos
from os.path import isfile, join, basename
from os import remove
from pathlib import Path
from typing import Dict, List, Tuple

from math import floor, ceil
import experiment_params
import numpy as np
from algorithm_types import AlgorithmType
from app_types import Status, ExperimentType, SoftwareBackend
import asyncio

from copy import deepcopy
from dials.algorithms.profile_model.gaussian_rs.calculator import (
    ComputeEsdBeamDivergence,
)

from dials.util.image_viewer.spotfinder_frame import (
    RadialProfileThresholdDebug,
    DispersionThresholdDebug,
    DispersionExtendedThresholdDebug
)

from dials_interface import DIALSInterface

import libtbx.phil
from dxtbx.model import Experiment
from dxtbx.serialize import load
from dials.array_family import flex
from dials.algorithms.spot_prediction import TOFReflectionPredictor
from dxtbx.model import ExperimentList
from dxtbx.model import (
	BeamFactory, DetectorFactory, CrystalFactory, GoniometerFactory, Goniometer
    )
from dials.algorithms.integration.fit.tof_line_profile import (
    compute_line_profile_data_for_shoebox,
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
from dials.command_line.tof_integrate import output_reflections_as_hkl 
from dials_tof_scaling_ext import (get_asu_reflections, tof_calculate_shoebox_foreground)

import cctbx.array_family.flex
import scipy
from dials_tof_scaling_ext import (
    TOFCorrectionsData,
    tof_extract_shoeboxes_to_reflection_table,
    tof_calculate_shoebox_mask,
    tof_calculate_shoebox_seed_skewness_mask,
    tof_calculate_shoebox_foreground,
)
    
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

    def __init__(self, file_dir: str, filenames: list[str] | None, file_key: str, 
                 software_backend: str) -> None:
        self.software_backend = self._get_software_backend(software_backend)
        self.interfaces = self.setup_interfaces(filenames)
        self._experiment_type = self.active_software.get_experiment_type()
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

    def setup_interfaces(self, filenames: list[str] | None) -> dict:
        return {
            SoftwareBackend.DIALS : DIALSInterface(filenames)
        }

    def setup_state(self):
        last_algorithm_command, last_algorithm_type = self.active_software.setup_state()

        self.last_successful_command = last_algorithm_command
        self._load_command_history()
        self._update_workflow_state(last_algorithm_type)

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

    def get_last_successful_command(self):
        return self.last_successful_command

    def get_predicted_shoebox(self, *args, **kwargs):
        return self.active_software.get_predicted_shoebox(*args, **kwargs)
        