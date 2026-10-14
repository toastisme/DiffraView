"""Experiment planner."""

import asyncio
from dials.array_family import flex
from ..app_types import Status
from ..router import Run, command


class PlannerHandlers:
    async def populate_experiment_planner(self, dmin=None):

        await self.send(
            "gui",
            {
                "params": {
                    "status": Status.Loading.value,
                    "orientations": [],
                    "predReflections": [],
                }
            },
            command="updating_experiment_planner_params",
        )

        max_expt_predicted_reflections = 1e5
        await self.send("experiment_planner", {}, command="clear_experiment")
        expt = self.file_manager.get_expt_json()
        await self.send("experiment_planner", expt, command="update_experiment")

        # For each orientation (expt), get the observed and predicted reflections
        # Then filter predicted miller indices for unique set over all orientations
        all_predicted_miller_indices = []
        all_observed_miller_indices = []
        total_asu_refl = None

        expt_ids = self.file_manager.get_experiment_ids()
        reflections_by_phi = {}
        for i in expt_ids:
            asu_refl, asu_p_refl, phi = (
                self.file_manager.get_asu_predicted_and_observed_reflections(
                    i, dmin=dmin
                )
            )
            asu_p_refl["id"] = flex.int(len(asu_p_refl), i)
            asu_refl["id"] = flex.int(len(asu_refl), i)

            if len(asu_p_refl) > max_expt_predicted_reflections:
                await self.send(
                    "experiment_planner",
                    {
                        "error": "Error: Predicted reflections > maximum allowed number. Try increasing dmin"
                    },
                    command="display_error",
                )
                await self.send(
                    "gui",
                    {
                        "params": {
                            "status": Status.Default.value,
                        }
                    },
                    command="updating_experiment_planner_params",
                )
                return

            if total_asu_refl is None:
                total_asu_refl = asu_refl
            else:
                sel = flex.bool(len(asu_refl), True)
                for r in range(len(asu_refl)):
                    if asu_refl["miller_index"][r] in all_observed_miller_indices:
                        sel[r] = False
                        continue
                    all_observed_miller_indices.append(asu_refl["miller_index"][r])
                total_asu_refl.extend(asu_refl.select(sel))

            if (len(asu_p_refl)) == 0:
                expt_completeness = 0
            else:
                expt_completeness = round((len(asu_refl) / len(asu_p_refl)) * 100, 2)

            asu_p_refl_data = self.file_manager.get_reflections_per_panel(
                reflection_table=asu_p_refl
            )

            filtered_asu_p_refl_data = {}
            filtered_p_num_reflections = 0
            for panel_refl_data in asu_p_refl_data:
                panel_data = []
                for j in range(len(asu_p_refl_data[panel_refl_data])):
                    if (
                        asu_p_refl_data[panel_refl_data][j]["millerIdx"]
                        in all_predicted_miller_indices
                    ):
                        continue
                    panel_data.append(asu_p_refl_data[panel_refl_data][j])
                    all_predicted_miller_indices.append(
                        asu_p_refl_data[panel_refl_data][j]["millerIdx"]
                    )
                    filtered_p_num_reflections += 1
                filtered_asu_p_refl_data[panel_refl_data] = panel_data

            if phi not in reflections_by_phi:
                reflections_by_phi[phi] = {
                    "predicted_refl_data": filtered_asu_p_refl_data,
                    "expt_ids": [i],
                    "predicted_num_reflections": filtered_p_num_reflections,
                    "completeness": [expt_completeness],
                }

            else:
                for p in filtered_asu_p_refl_data:
                    if p in reflections_by_phi[phi]["predicted_refl_data"]:
                        reflections_by_phi[phi]["predicted_refl_data"][p] += (
                            filtered_asu_p_refl_data[p]
                        )
                    else:
                        reflections_by_phi[phi]["predicted_refl_data"][p] = (
                            filtered_asu_p_refl_data[p]
                        )
                reflections_by_phi[phi]["expt_ids"].append(i)
                reflections_by_phi[phi]["predicted_num_reflections"] += (
                    filtered_p_num_reflections
                )
                reflections_by_phi[phi]["completeness"].append(expt_completeness)

        for phi in reflections_by_phi:
            await self.send(
                "experiment_planner",
                {
                    "refl_data": [],
                    "expt_ids": reflections_by_phi[phi]["expt_ids"],
                    "phi": phi,
                    "predicted_refl_data": reflections_by_phi[phi][
                        "predicted_refl_data"
                    ],
                },
                command="add_exp_orientation",
            )

            await self.send(
                "gui",
                {
                    "params": {
                        "addEntry": (
                            phi,
                            reflections_by_phi[phi]["predicted_num_reflections"],
                            sum(reflections_by_phi[phi]["completeness"])
                            / len(reflections_by_phi[phi]["completeness"]),
                        ),
                    }
                },
                command="update_experiment_planner_params",
            )

        self.file_manager.update_experiment_planner_params(
            "num_stored_orientations", len(reflections_by_phi)
        )
        self.file_manager.update_experiment_planner_params(
            "current_miller_indices", all_predicted_miller_indices
        )
        self.file_manager.update_experiment_planner_params(
            "stored_miller_indices", list(all_predicted_miller_indices)
        )

        await self.send(
            "gui",
            {"params": {"status": Status.Default.value}},
            command="update_experiment_planner_params",
        )

    @command("update_planner_goniometer_phi")
    async def update_planner_goniometer_phi(self, msg):
        await self.send(
            "gui",
            {"params": {"status": Status.Loading.value}},
            command="update_experiment_planner_params",
        )
        assert "phi" in msg

        phi = msg["phi"]
        orientations, _, num_stored_orientations = (
            self.file_manager.get_experiment_planner_params()
        )
        dmin = self.file_manager.get_user_dmin()
        if len(orientations) == 0:
            await self.send("experiment_planner", {}, command="clear_experiment")
            expt = self.file_manager.get_expt_json()
            await self.send("experiment_planner", expt, command="update_experiment")

        try:
            dmin = float(dmin)
        except ValueError:
            await self.send(
                "experiment_planner",
                {"error": "Error: invalid dmin value"}, command="display_error"
            )
            return
        if dmin < 0.1:
            await self.send(
                "experiment_planner",
                {"error": "Error: invalid dmin value"}, command="display_error"
            )
            return

        refl_data = self.file_manager.predict_reflection_table(
            dmin, phi, orientations[:num_stored_orientations]
        )

        num_reflections = 0
        for i in refl_data:
            num_reflections += len(refl_data[i])

        await self.send(
            "experiment_planner", refl_data, command="update_predicted_reflection_table"
        )

        await self.send(
            "gui",
            {
                "params": {
                    "updateEntry": (phi, num_reflections),
                    "status": Status.Default.value,
                }
            },
            command="update_experiment_planner_params",
        )

    @command("clear_planner_user_predicted_reflections")
    async def clear_planner_user_predicted_reflections(self, msg):
        assert "num_initial_orientations" in msg
        await self.send("gui", msg, command="clear_planner_user_predicted_reflections")

    @command("get_next_best_planner_orientation", run=Run.TASK)
    async def get_next_best_planner_orientation(self, msg):
        self.active_task_algorithm = None

        await self.send(
            "gui",
            {"params": {"status": Status.Loading.value}},
            command="update_experiment_planner_params",
        )
        assert "orientations" in msg
        assert "dmin" in msg

        orientations, _, _ = self.file_manager.get_experiment_planner_params()
        if len(orientations) == 0:
            await self.send("experiment_planner", {}, command="clear_experiment")
            expt = self.file_manager.get_expt_json()
            await self.send("experiment_planner", expt, command="update_experiment")

        num_exp_orientations = len(self.file_manager.get_imageset_ids())
        orientations = msg["orientations"]
        if len(orientations) > num_exp_orientations:
            orientations = orientations[:-1]
        scan_phi_min = float(msg["scan_phi_min"])
        scan_phi_step = float(msg["scan_phi_step"])
        scan_phi_max = float(msg["scan_phi_max"])
        self._planner_scan_cancel = False
        cancel_flag = [False]
        self._planner_cancel_flag_ref = cancel_flag
        best_phi = best_refl_data = scan_data = None
        try:
            for progress_pct, result in self.file_manager.get_best_expt_orientation(
                orientations,
                float(msg["dmin"]),
                scan_phi_min,
                scan_phi_max,
                scan_phi_step,
                cancel_flag=cancel_flag,
            ):
                if self._planner_scan_cancel:
                    await self.send(
                        "gui",
                        {"params": {"status": Status.Default.value, "progress": 0}},
                        command="update_experiment_planner_params",
                    )
                    return
                await self.send(
                    "gui",
                    {"params": {"progress": progress_pct}},
                    command="update_experiment_planner_params",
                )
                if result is not None:
                    best_phi, best_refl_data, scan_data = result
        except asyncio.CancelledError:
            await self.send(
                "gui",
                {"params": {"status": Status.Default.value, "progress": 0}},
                command="update_experiment_planner_params",
            )
            raise

        self._planner_cancel_flag_ref = None

        if best_phi is None:
            await self.send(
                "gui",
                {"params": {"progress": 0}},
                command="update_experiment_planner_params",
            )
            await self.send(
                "experiment_planner",
                {"error": "No new reflections found"}, command="display_error"
            )
            return
        num_reflections = 0
        for i in best_refl_data:
            num_reflections += len(best_refl_data[i])

        await self.send(
            "gui",
            {"params": {"addScanResult": scan_data, "progress": 0}},
            command="update_experiment_planner_params",
        )

        await self.send(
            "gui",
            {"params": {"updateEntry": (best_phi, num_reflections)}},
            command="update_experiment_planner_params",
        )

        await self.send(
            "experiment_planner", {"phi": best_phi}, command="update_params"
        )

        await self.send(
            "experiment_planner",
            best_refl_data, command="update_predicted_reflection_table"
        )
        await self.send(
            "gui",
            {"params": {"status": Status.Default.value}},
            command="update_experiment_planner_params",
        )

    @command("store_planner_reflections")
    async def store_planner_reflections(self, msg):
        self.file_manager.update_experiment_planner_params(
            "num_stored_orientations", len(msg["orientations"])
        )
        current = self.file_manager.selected_file.experimentPlannerParams[
            "current_miller_indices"
        ]
        self.file_manager.update_experiment_planner_params(
            "stored_miller_indices", list(current)
        )
        await self.send("experiment_planner", {}, command="store_active_reflections")

    @command("clear_planner_reflections")
    async def clear_planner_reflections(self, msg):
        self.file_manager.clear_experiment_planner_params()
        await self.send(
            "gui",
            {"params": {"clearUserData": True}},
            command="update_experiment_planner_params",
        )
        await self.send("experiment_planner", {}, command="clear_predicted_reflections")

    @command("recalculate_planner_reflections")
    async def recalculate_planner_reflections(self, msg):
        assert "dmin" in msg
        try:
            dmin = float(msg["dmin"])
            if dmin < 0.1:
                await self.send(
                    "experiment_planner",
                    {"error": "Error: invalid dmin value"}, command="display_error"
                )
                return
        except ValueError:
            await self.send(
                "experiment_planner",
                {"error": "Error: invalid dmin value"}, command="display_error"
            )
            return

        await self.clear_planner_reflections(msg)
        self.file_manager.update_user_dmin(dmin)
        await self.populate_experiment_planner(dmin=dmin)

    @command("update_experiment_planner_params")
    async def update_experiment_planner_params(self, msg):
        assert "orientations" in msg
        assert "num_reflections" in msg
        self.file_manager.update_experiment_planner_params(
            "orientations", msg["orientations"]
        )
        self.file_manager.update_experiment_planner_params(
            "num_reflections", msg["num_reflections"]
        )
