from __future__ import annotations

import dash_bootstrap_components as dbc
from algorithm_types import AlgorithmType


class DisplayManager:

    """
    Manages which files are displayed on the GUI
    """

    def add_file(self, active_files_list, filename):

        active_files_list.append(
            dbc.ListGroupItem(
                filename,
                id={"type": "open-file", "index": len(active_files_list)},
                action=True,
                active=True,
            )
        )

        active_files_list = self.select_file(
            active_files_list, len(active_files_list) - 1
        )

        return active_files_list

    def select_file(self, active_files_list, idx):
        for i in range(len(active_files_list)):
            if i == idx:
                try:
                    active_files_list[i].active = True
                except AttributeError:
                    active_files_list[i]["props"]["active"] = True
            else:
                try:
                    active_files_list[i].active = False
                except AttributeError:
                    active_files_list[i]["props"]["active"] = False
        return active_files_list

    """
    def get_selected_file(self, active_files_list):
        for i in active_files_list:
            try:
                if active_files_list[i].active == True:
                    return active_files_list[i].
            except AttributeError:
                status = active_files_list[i]["props"]["active"] = True
    """

    def update_algorithm_tabs(self, algorithm_tabs, active_file):

        algorithms = {
            1: AlgorithmType.dials_find_spots,
            2: AlgorithmType.dials_index,
            3: AlgorithmType.dials_refine,
            4: AlgorithmType.dials_integrate,
        }

        for i in algorithms.keys():
            if active_file.can_run(algorithms[i]):
                algorithm_tabs[i]["props"]["disabled"] = False
            else:
                algorithm_tabs[i]["props"]["disabled"] = True

        algorithm_tabs[-1]["props"]["disabled"]=True
        return algorithm_tabs

    def update_state_tabs(self, state_tabs, active_file):

        # Reciprocal lattice viewer
        if active_file.can_run(AlgorithmType.dials_index):
            state_tabs[1]["props"]["disabled"] = False
        else:
            state_tabs[1]["props"]["disabled"] = True

        return state_tabs

    def get_experiment_params(self, active_file):
        return active_file.get_experiment_params()
