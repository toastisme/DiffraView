"""Opening image files and processing folders."""

import os
import time
from ..algorithm_types import AlgorithmType
from ..app_types import Status
from ..dialogs import select_paths
from ..router import Run, command


class FileHandlers:
    @command("browse_file")
    async def run_browse_file(self, msg):
        filenames = select_paths(msg, "Select a file")
        if len(filenames) == 1:
            integrate_params = {msg["update_param"]: filenames[0]}
            await self.send(
                "gui", {"params": integrate_params}, command="update_integrate_params"
            )

    @command("browse_files_for_import", run=Run.TASK, status="update_import_params")
    async def run_browse_files_for_import(self, msg):
        filenames = select_paths(msg, "Select files", multiple=True)
        if filenames:
            msg["filenames"] = filenames
            await self.run_dials_import(msg)
        else:
            await self.send(
                "gui",
                {"params": {"browseImagesEnabled": True}},
                command="update_import_params",
            )

    @command("browse_for_processing_folder")
    async def run_browse_for_processing_folder(self, msg):
        folders = select_paths(msg, "Select a folder for processing", directory=True)
        if folders:
            self.processing_dir = folders[0]
            await self.send(
                "gui",
                {"params": {"processingDir": folders[0]}},
                command="update_root_params",
            )
        await self.send(
            "gui",
            {"params": {"browseImagesEnabled": True}},
            command="update_import_params",
        )

    @command(
        "browse_processing_folder_for_import",
        run=Run.TASK,
        status="update_import_params",
    )
    async def run_browse_processing_folder_for_import(self, msg):
        folders = select_paths(msg, "Select a folder for processing", directory=True)
        if folders:
            msg["folder"] = folders[0]
            await self.run_dials_import_processing_folder(msg)
        else:
            await self.send(
                "gui",
                {"params": {"browseImagesEnabled": True}},
                command="update_import_params",
            )

    @command("update_active_file", run=Run.TASK)
    async def update_active_file(self, msg):

        assert "name" in msg
        active_file = msg["name"]
        if active_file == self.file_manager.selected_file.file_key:
            return
        self.file_manager.set_active_file(active_file)
        await self.clear_experiment()
        await self.load_active_state()

    @command("update_experiment_description")
    async def update_experiment_description(self, msg):
        assert "expt_id" in msg, (
            "No expt_id found when trying to update experiment description"
        )
        expt_id = int(msg["expt_id"])
        description = self.file_manager.get_experiment_description(idx=expt_id)
        await self.send(
            "gui",
            {"experiment_description": description},
            command="update_experiment_description",
        )

        current_expt_id = self.file_manager.get_current_experiment_viewer_expt_id()
        if current_expt_id != expt_id:
            self.file_manager.update_current_experiment_viewer_expt_id(expt_id)
            if "in_debug_mode" in msg and msg["in_debug_mode"]:
                await self.update_experiment_viewer_debug_image(
                    {"idx": None, "threshold_algorithm": None, "algorithm_params": None}
                )

    async def clear_experiment(self):
        await self.send("gui", {}, command="clear_experiment")
        await self.send("experiment_viewer", {}, command="clear_experiment")
        await self.send("rlv", {}, command="clear_experiment")
        await self.send("experiment_planner", {}, command="clear_experiment")
        await self.send("shoebox_viewer", {}, command="clear_shoebox")

    async def run_dials_import_processing_folder(self, msg):
        await self.clear_experiment()
        if "softwareBackend" in msg:
            software_backend = msg["softwareBackend"]
        else:
            software_backend = "DIALS"

        self.file_manager.add_active_processing_folder(msg["folder"], software_backend)
        self.file_manager.add_additional_data_to_processing_reflections()
        await self.load_active_state()

    async def load_active_state(self):

        if self.file_manager.selected_file is None:
            return

        last_successful_command = self.file_manager.get_last_successful_command()
        assert last_successful_command is not None, (
            "Setting up state from last successful command but command is None"
        )

        root_params = {}
        import_params = {}
        find_spots_params = {}
        index_params = {}
        refine_params = {}
        integrate_params = {}
        rlv_params = {}
        experiment_planner_params = {}
        integration_profiler_params = {}
        experiment_viewer_params = {
            "hasObservedReflections": False,
            "hasIntegratedReflections": False,
        }

        refl_data = None
        reflection_table = None

        import_params["instrumentName"] = self.file_manager.get_instrument_name()
        import_params["experimentDescription"] = (
            self.file_manager.get_experiment_description()
        )
        import_params["log"] = self.file_manager.get_algorithm_log(
            AlgorithmType.dials_import
        )

        root_params["openFileKeys"] = self.file_manager.get_open_file_keys()
        root_params["currentFileKey"] = self.file_manager.get_current_file_key()
        root_params["numExperiments"] = self.file_manager.get_num_experiments()
        root_params["experimentNames"] = self.file_manager.get_experiment_names()

        try:
            min_tof, max_tof, step_tof = self.file_manager.get_tof_range()
            find_spots_params["minTOF"] = min_tof
            find_spots_params["maxTOF"] = max_tof
            find_spots_params["stepTOF"] = step_tof
            min_wavelength, max_wavelength = self.file_manager.tof_range_to_wavelength(
                (min_tof, max_tof)
            )
            find_spots_params["minWavelength"] = round(min_wavelength, 4)
            find_spots_params["maxWavelength"] = round(max_wavelength, 4)
            find_spots_params["currentMinWavelength"] = round(min_wavelength, 4)
            find_spots_params["currentMaxWavelength"] = round(max_wavelength, 4)

            integrate_params["minTOF"] = min_tof
            integrate_params["maxTOF"] = max_tof
            integrate_params["stepTOF"] = step_tof
            integrate_params["minWavelength"] = round(min_wavelength, 4)
            integrate_params["maxWavelength"] = round(max_wavelength, 4)
            integrate_params["currentMinWavelength"] = round(min_wavelength, 4)
            integrate_params["currentMaxWavelength"] = round(max_wavelength, 4)
        except KeyError:
            pass
        find_spots_params["enabled"] = True

        if last_successful_command != "dials.import":
            find_spots_params["log"] = self.file_manager.get_algorithm_log(
                AlgorithmType.dials_find_spots
            )
            rlv_params["enabled"] = True
            index_params["enabled"] = True
            if last_successful_command in ["dials.tof_integrate", "dials.export"]:
                integrate_params["exportEnabled"] = True
                if self.file_manager.last_integration_using_calculated():
                    integration_type = "calculated"
                else:
                    integration_type = "observed"

                self.file_manager.add_idxs_to_integrated_reflections()

                integrated_refl_data = (
                    self.file_manager.get_integrated_reflections_per_panel(
                        integration_type=integration_type
                    )
                )
                integrated_refl_table = (
                    self.file_manager.get_integrated_reflections_msgpack(
                        integration_type=integration_type
                    )
                )
                integrate_params["log"] = self.file_manager.get_algorithm_log(
                    AlgorithmType.dials_integrate
                )
                if integration_type == "calculated":
                    root_params["calculatedReflectionTable"] = integrated_refl_data
                    root_params["calculatedReflectionTableMsgpack"] = (
                        integrated_refl_table
                    )
                    refined_reflections_file_path = os.path.join(
                        self.file_manager.get_current_processing_dir(), "refined.refl"
                    )
                    refl_data = self.file_manager.get_reflections_per_panel(
                        refl_file=refined_reflections_file_path
                    )
                    reflection_table = self.file_manager.get_reflection_table_msgpack(
                        refl_file=refined_reflections_file_path
                    )
                    root_params["reflectionTable"] = refl_data
                    root_params["reflectionTableMsgpack"] = reflection_table
                else:
                    root_params["reflectionTable"] = integrated_refl_data
                    root_params["reflectionTableMsgpack"] = integrated_refl_table
                    refl_data = integrated_refl_data
                    reflection_table = integrated_refl_table

                import_params["reflectionsSummary"] = (
                    self.file_manager.get_integrated_reflections_summary(
                        integration_type=integration_type
                    )
                )

                experiment_viewer_params["hasIntegratedReflections"] = (
                    integrated_refl_data is not None
                    and sum(len(v) for v in integrated_refl_data.values()) > 0
                )

            else:
                import_params["reflectionsSummary"] = (
                    self.file_manager.get_reflections_summary()
                )
                if self.file_manager.reflection_table_missing_idx():
                    self.file_manager.add_additional_data_to_reflections()
                refl_data = self.file_manager.get_reflections_per_panel()
                reflection_table = self.file_manager.get_reflection_table_msgpack()

                root_params["reflectionTable"] = refl_data
                root_params["reflectionTableMsgpack"] = reflection_table

            experiment_viewer_params["hasObservedReflections"] = (
                refl_data is not None and sum(len(v) for v in refl_data.values()) > 0
            )

        if last_successful_command in (
            "dials.index",
            "dials.refine_bravais_settings",
            "dials.refine",
            "dials.tof_integrate",
            "dials.export",
        ):
            index_params["log"] = self.file_manager.get_algorithm_log(
                AlgorithmType.dials_index
            )
            refine_params["log"] = self.file_manager.get_algorithm_log(
                AlgorithmType.dials_refine
            )
            import_params["crystalSummary"] = self.file_manager.get_crystal_summary()
            index_params["crystalIDs"] = list(
                range(len(import_params["crystalSummary"]))
            )
            index_params["detectSymmetryEnabled"] = True
            experiment_planner_params["enabled"] = True
            refine_params["enabled"] = True
            if last_successful_command not in (
                "dials.index",
                "dials.refine_bravais_settings",
            ):
                integration_profiler_params["enabled"] = True
                integrate_params["enabled"] = True

        await self.send("gui", {"params": root_params}, command="update_root_params")
        await self.send(
            "gui", {"params": import_params}, command="update_import_params"
        )
        await self.send(
            "gui", {"params": find_spots_params}, command="update_find_spots_params"
        )
        await self.send("gui", {"params": index_params}, command="update_index_params")
        await self.send(
            "gui", {"params": refine_params}, command="update_refine_params"
        )
        await self.send(
            "gui", {"params": integrate_params}, command="update_integrate_params"
        )
        await self.send("gui", {"params": rlv_params}, command="update_rlv_params")
        await self.send(
            "gui",
            {"params": experiment_planner_params},
            command="update_experiment_planner_params",
        )
        await self.send(
            "gui",
            {"params": integration_profiler_params},
            command="update_integration_profiler_params",
        )

        experiment_viewer_params["status"] = Status.Loading.value
        await self.send(
            "gui",
            {"params": experiment_viewer_params},
            command="update_experiment_viewer_params",
        )

        ## Send experiment to viewers
        await self.send("experiment_viewer", {}, command="loading_images")

        expt = self.file_manager.get_expt_json()

        # Send experiment details
        experiment_viewer_msg = {"expt": expt}
        await self.send(
            "experiment_viewer", experiment_viewer_msg, command="update_experiment"
        )

        # Send refl data before images as images take the longest
        await self.send("rlv", expt, command="new_experiment")

        if refl_data is not None:
            await self.send(
                "experiment_viewer",
                {"refl_msgpack": reflection_table}, command="update_reflection_table"
            )
            await self.send("rlv", expt, command="update_experiment")
            await self.send(
                "rlv",
                {"refl_msgpack": reflection_table}, command="update_reflection_table"
            )

        if "calculatedReflectionTable" in root_params:
            await self.send(
                "rlv",
                {"refl_msgpack": root_params["calculatedReflectionTableMsgpack"]},
                command="update_calculated_integrated_reflection_table",
            )

            await self.send(
                "experiment_viewer",
                {"refl_msgpack": root_params["calculatedReflectionTableMsgpack"]},
                command="update_calculated_integrated_reflection_table",
            )

        # Send images one panel at a time
        image_dimensions = self.file_manager.get_panel_sizes()
        num_experiments = self.file_manager.get_num_experiments()
        for expt_id in range(num_experiments):
            t_fetch = time.perf_counter()
            expt_image_data = self.file_manager.get_flattened_image_data(
                expt_id=expt_id
            )
            print(
                f"[timing] get_flattened_image_data expt {expt_id}: {time.perf_counter() - t_fetch:.3f}s"
            )
            t_send = time.perf_counter()
            for panel_idx, panel_image_data in enumerate(expt_image_data):
                await self.send_binary(
                    "experiment_viewer",
                    {
                        "image_data": panel_image_data,
                        "panel_idx": panel_idx,
                        "expt_id": expt_id,
                        "image_dimensions": image_dimensions,
                    },
                    command="add_panel_image_data",
                )
            print(
                f"[timing] send {len(expt_image_data)} panels expt {expt_id}: {time.perf_counter() - t_send:.3f}s"
            )
            progress = min(int((expt_id + 1) / num_experiments * 100), 99)
            await self.send(
                "gui",
                {"params": {"progress": progress}},
                command="update_experiment_viewer_params",
            )

        await self.send(
            "gui",
            {"params": {"status": Status.Default.value, "progress": 0}},
            command="update_experiment_viewer_params",
        )
