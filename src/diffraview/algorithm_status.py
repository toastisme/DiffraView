from enum import Enum

class AlgorithmStatus(Enum):
	none = 0
	running = 1
	finished = 2
	failed = 3
	cancelled = 4
