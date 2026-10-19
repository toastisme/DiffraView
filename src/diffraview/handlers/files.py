"""Opening image files and processing folders."""

from ..processing.steps import StepId
from ..protocol import CAPABILITIES, CLEAR_EXPERIMENT
from ..app_types import Status
from ..dialogs import select_paths
from ..router import Run, command


class FileHandlers:
    @command("file.browse")
    async def run_browse_file(self, msg):
        filenames = select_paths(msg, "Select a file")
        if len(filenames) == 1:
            integrate_params = {msg["update_param"]: filenames[0]}
            await self.update_state("integrate", integrate_params)

    @command("file.import_images", run=Run.TASK, status="import")
    async def run_browse_files_for_import(self, msg):
        filenames = select_paths(msg, "Select files", multiple=True)
        if filenames:
            msg["filenames"] = filenames
            await self.execute_step(StepId.IMPORT, msg)
        else:
            await self.update_state("import", {"browseImagesEnabled": True})

    @command("file.set_processing_root")
    async def run_browse_for_processing_folder(self, msg):
        folders = select_paths(msg, "Select a folder for processing", directory=True)
        if folders:
            self.processing_dir = folders[0]
            await self.update_state("root", {"processingDir": folders[0]})
        await self.update_state("import", {"browseImagesEnabled": True})

    @command(
        "file.open_processing_folder",
        run=Run.TASK,
        status="import",
    )
    async def run_browse_processing_folder_for_import(self, msg):
        folders = select_paths(msg, "Select a folder for processing", directory=True)
        if folders:
            msg["folder"] = folders[0]
            await self.run_dials_import_processing_folder(msg)
        else:
            await self.update_state("import", {"browseImagesEnabled": True})

    @command("file.select", run=Run.TASK)
    async def update_active_file(self, msg):

        assert "name" in msg
        active_file = msg["name"]
        if active_file == self.file_manager.selected_file.file_key:
            return
        self.file_manager.set_active_file(active_file)
        await self.clear_experiment()
        await self.load_active_state()

    @command("file.set_description")
    async def update_experiment_description(self, msg):
        assert "expt_id" in msg, (
            "No expt_id found when trying to update experiment description"
        )
        expt_id = int(msg["expt_id"])
        await self.update_state(
            "import",
            {
                "instrumentName": self.file_manager.get_instrument_name(idx=expt_id),
                "experimentDescription": (
                    self.file_manager.get_experiment_description(idx=expt_id)
                ),
            },
        )

        current_expt_id = self.file_manager.get_current_experiment_viewer_expt_id()
        if current_expt_id != expt_id:
            self.file_manager.update_current_experiment_viewer_expt_id(expt_id)
            if "in_debug_mode" in msg and msg["in_debug_mode"]:
                await self.update_experiment_viewer_debug_image(
                    {"idx": None, "threshold_algorithm": None, "algorithm_params": None}
                )

    @command("file.edit_description")
    async def edit_experiment_description(self, msg):
        """Edit the descriptions of the experiment selected in the viewer."""
        expt_id = self.file_manager.get_current_experiment_viewer_expt_id()
        self.file_manager.set_description(
            expt_id,
            instrument=msg.get("instrument"),
            experiment=msg.get("experiment"),
        )
        await self.update_state(
            "import",
            {
                "instrumentName": self.file_manager.get_instrument_name(idx=expt_id),
                "experimentDescription": (
                    self.file_manager.get_experiment_description(idx=expt_id)
                ),
            },
        )

    async def clear_experiment(self):
        await self.notify(CLEAR_EXPERIMENT)
        await self.send_viewer("experiment_viewer", "experiment.clear")
        await self.send_viewer("rlv", "experiment.clear")
        await self.send_viewer("experiment_planner", "experiment.clear")
        await self.send_viewer("shoebox_viewer", "shoebox.clear")

    async def run_dials_import_processing_folder(self, msg):
        await self.clear_experiment()
        software_backend = msg.get("backend", "DIALS")

        self.file_manager.add_active_processing_folder(msg["folder"], software_backend)
        self.file_manager.add_additional_data_to_processing_reflections()
        await self.load_active_state()

    async def load_active_state(self):

        if self.file_manager.selected_file is None:
            return

        last_step = self.file_manager.get_last_successful_step()
        assert last_step is not None, (
            "Setting up state from last successful step but step is None"
        )
        await self.notify(CAPABILITIES, **self.file_manager.get_capabilities())

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
            StepId.IMPORT
        )

        root_params["openFileKeys"] = self.file_manager.get_open_file_keys()
        root_params["currentFileKey"] = self.file_manager.get_current_file_key()
        root_params["numExperiments"] = self.file_manager.get_num_experiments()
        root_params["experimentNames"] = self.file_manager.get_experiment_names()

        mode_params = self.file_manager.get_restored_mode_params()
        find_spots_params.update(mode_params.get("find_spots", {}))
        integrate_params.update(mode_params.get("integrate", {}))
        find_spots_params["enabled"] = True

        if last_step != StepId.IMPORT:
            find_spots_params["log"] = self.file_manager.get_algorithm_log(
                StepId.FIND_SPOTS
            )
            rlv_params["enabled"] = True
            index_params["enabled"] = True
            if last_step in (StepId.INTEGRATE, StepId.EXPORT):
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
                    StepId.INTEGRATE
                )
                if integration_type == "calculated":
                    root_params["calculatedReflectionTable"] = integrated_refl_data
                    root_params["calculatedReflectionTableMsgpack"] = (
                        integrated_refl_table
                    )
                    refined_reflections_file_path = (
                        self.file_manager.require_step_output(StepId.REFINE, "refl")
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

        if last_step in (
            StepId.INDEX,
            StepId.REFINE_BRAVAIS_SETTINGS,
            StepId.REFINE,
            StepId.INTEGRATE,
            StepId.EXPORT,
        ):
            index_params["log"] = self.file_manager.get_algorithm_log(
                StepId.INDEX
            )
            refine_params["log"] = self.file_manager.get_algorithm_log(
                StepId.REFINE
            )
            import_params["crystalSummary"] = self.file_manager.get_crystal_summary()
            index_params["crystalIDs"] = list(
                range(len(import_params["crystalSummary"]))
            )
            index_params["detectSymmetryEnabled"] = True
            experiment_planner_params["enabled"] = True
            refine_params["enabled"] = True
            if last_step not in (StepId.INDEX, StepId.REFINE_BRAVAIS_SETTINGS):
                integration_profiler_params["enabled"] = True
                integrate_params["enabled"] = True

        await self.update_state("root", root_params)
        await self.update_state("import", import_params)
        await self.update_state("find_spots", find_spots_params)
        await self.update_state("index", index_params)
        await self.update_state("refine", refine_params)
        await self.update_state("integrate", integrate_params)
        await self.update_state("rlv", rlv_params)
        await self.update_state("experiment_planner", experiment_planner_params)
        await self.update_state("integration_profiler", integration_profiler_params)

        experiment_viewer_params["status"] = Status.Loading.value
        await self.update_state("experiment_viewer", experiment_viewer_params)

        # Send experiment to viewers
        await self.send_viewer("experiment_viewer", "images.loading")

        expt = self.file_manager.get_expt_json()

        # Send experiment details
        experiment_viewer_msg = {"expt": expt}
        await self.send_viewer(
            "experiment_viewer",
            "experiment.update",
            experiment_viewer_msg,
        )

        # Send refl data before images as images take the longest
        await self.send_viewer("rlv", "experiment.new", expt)

        if refl_data is not None:
            await self.send_viewer(
                "experiment_viewer",
                "reflections.update",
                {"refl_msgpack": reflection_table},
            )
            await self.send_viewer("rlv", "experiment.update", expt)
            await self.send_viewer(
                "rlv",
                "reflections.update",
                {"refl_msgpack": reflection_table},
            )

        if "calculatedReflectionTable" in root_params:
            await self.send_viewer(
                "rlv",
                "reflections.update_calculated",
                {"refl_msgpack": root_params["calculatedReflectionTableMsgpack"]},
            )

            await self.send_viewer(
                "experiment_viewer",
                "reflections.update_calculated",
                {"refl_msgpack": root_params["calculatedReflectionTableMsgpack"]},
            )

        # Send images one panel at a time
        await self.send_images(report_progress=True)

        await self.update_state(
            "experiment_viewer", {"status": Status.Default.value, "progress": 0}
        )
