from enum import Enum

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