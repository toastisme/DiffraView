from __future__ import annotations

from enum import Enum


class AlgorithmType(Enum):
    dials_import = 1
    dials_find_spots = 2
    dials_index = 3
    dials_refine = 4
    dials_integrate = 5
    dials_refine_bravais_settings = 6
    dials_reindex = 7
