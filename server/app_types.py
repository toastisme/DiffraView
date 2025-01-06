from enum import Enum
from typing import List, Dict
from dataclasses import dataclass

class AlgorithmType(Enum):
    dials_import = 1
    dials_find_spots = 2
    dials_index = 3
    dials_refine = 4
    dials_integrate = 5
    dials_refine_bravais_settings = 6
    dials_reindex = 7
    xds_import = 8
    xds_find_spots = 9
    xds_index = 10

class AlgorithmStatus(Enum):
	none = 0
	running = 1
	finished = 2
	failed = 3
	cancelled = 4

class Status(str, Enum):
  Default = "Default",
  Loading = "Loading",
  Failed = "Failed"

class ExperimentType(str, Enum):
  TOF = "TOF",
  ROTATION = "ROTATION",
  STILL = "STILL",
  LAUE = "LAUE"

class SoftwareBackend(str, Enum):
  DIALS = "DIALS"
  XDS = "XDS",
  MANTID = "MANTID"

@dataclass
class BackendAlgorithm:
    """
    Holds basic information of the requirments and history of an algorithm
    """

    name: AlgorithmType
    command: str
    args: Dict[str, str]
    log: str
    status: Status
    output_log_files: List[str]
    # optional override to use in place of required_files
    selected_files: List[str]
    required_files: List[str]
    output_experiment_file: str
    output_reflections_file: str