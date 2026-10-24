"""Laue experiments (polychromatic, no time-of-flight scan)."""

from __future__ import annotations


from ..app_types import ExperimentType, Status
from ..processing.steps import StepId
from .tof import TOFMode


class LaueMode(TOFMode):
    experiment_type = ExperimentType.LAUE
    has_tof_scan = False
    # Not supported yet
    _export_output_params = None

    def _import_output_params(self, **kwargs) -> dict:

        status = self.af.steps[StepId.IMPORT].status
        assert status is not Status.Loading, (
            f"Trying to get params for {StepId.IMPORT} but status is {status}"
        )

        import_params = {
            "log": self.af.steps[StepId.IMPORT].log,
            "status": status.value,
        }

        if status == Status.Failed:
            return {"import": import_params}

        elif status == Status.Default:
            root_params = {}
            find_spots_params = {}
            find_spots_params["enabled"] = True
            rlv_params = {}
            import_params["instrumentName"] = self.af.get_instrument_name()
            import_params["experimentDescription"] = (
                self.af.get_experiment_description()
            )

            root_params["numExperiments"] = self.af.get_num_experiments()
            root_params["experimentNames"] = self.af.get_experiment_names()

            rlv_params["enabled"] = True

            return {
                "root": root_params,
                "import": import_params,
                "find_spots": find_spots_params,
                "rlv": rlv_params,
            }
