"""Selecting, adding and removing reflections."""


from ..router import Run, command


class ReflectionHandlers:
    @command("reflections.remove", run=Run.INLINE)
    async def remove_reflection(self, msg):
        assert "reflection_id" in msg
        reflection_type = "observed"
        if "type" in msg:
            reflection_type = msg["type"]
        self.file_manager.remove_reflection(int(msg["reflection_id"]), reflection_type)
        has_calculated_integrated_reflections = (
            "has_calculated_integrated_reflections" in msg
            and msg["has_calculated_integrated_reflections"]
        )
        if has_calculated_integrated_reflections:
            summary = self.file_manager.get_integrated_reflections_summary(
                integration_type="calculated"
            )
        else:
            summary = self.file_manager.get_reflections_summary()

        refl_data = self.file_manager.get_reflections_per_panel()
        reflection_table = self.file_manager.get_reflection_table()
        await self.send_viewer("experiment_viewer", "reflections.update", refl_data)

        gui_msg = {"reflection_table": refl_data, "reflections_summary": summary}
        if has_calculated_integrated_reflections:
            if (
                reflection_type == "calculated"
            ):  # calculated integrated reflections have changed
                calculated_refl_data = (
                    self.file_manager.get_integrated_reflections_per_panel(
                        integration_type="calculated"
                    )
                )
                calculated_reflection_table = (
                    self.file_manager.get_integrated_reflections_msgpack(
                        integration_type="calculated"
                    )
                )
                gui_msg["calculated_reflection_table"] = calculated_refl_data
                await self.send_viewer(
                    "experiment_viewer",
                    "reflections.update_calculated",
                    {"refl_msgpack": calculated_reflection_table},
                )
                await self.send_viewer(
                    "rlv",
                    "reflections.update_calculated",
                    {"refl_msgpack": calculated_reflection_table},
                )

        await self.send_viewer(
            "rlv",
            "reflections.update",
            {"refl_msgpack": reflection_table},
        )
        await self.send_viewer(
            "experiment_viewer",
            "reflections.update",
            {"refl_msgpack": reflection_table},
        )
        if msg["isSelectedReflection"]:
            await self.update_state(
                "experiment_viewer", {"lineplot": {"x": [], "y": []}}
            )

    @command("reflections.new_xy", requires="lineplot")
    async def new_reflection_xy(self, msg):
        panel_idx = msg["panel_idx"]
        expt_id = msg["expt_id"]
        bbox = msg["bbox"]
        self.file_manager.new_reflection_xy(panel_idx, expt_id, bbox)
        lineplot_msg = {
            "panel_idx": panel_idx,
            "expt_id": expt_id,
            "panel_pos": (int((bbox[3] + bbox[2]) / 2), int((bbox[1] + bbox[0]) / 2)),
            "name": msg["panel_name"],
        }
        await self.update_lineplot(lineplot_msg)

    @command("reflections.new_z", requires="lineplot")
    async def new_reflection_z(self, msg):
        bbox = msg["bbox"]
        self.file_manager.new_reflection_z(bbox)

    @command("reflections.cancel_new", requires="lineplot")
    async def cancel_new_reflection(self, msg=None):
        self.file_manager.cancel_new_reflection()

    @command("reflections.add_new", requires="lineplot")
    async def add_new_reflection(self, msg=None):
        await self.send_viewer("experiment_viewer", "reflections.loading")
        await self.update_state("experiment_viewer", {"status": "Loading"})
        self.file_manager.add_new_reflection()
        refl_data = self.file_manager.get_reflections_per_panel()
        reflection_table = self.file_manager.get_reflection_table_msgpack()
        summary = self.file_manager.get_reflections_summary()
        gui_msg = {"reflection_table": refl_data, "reflections_summary": summary}
        await self.update_state("root", {"reflectionTable": refl_data})
        await self.update_state("import", {"reflectionsSummary": summary})

        await self.send_viewer(
            "experiment_viewer",
            "reflections.update",
            {"refl_msgpack": reflection_table},
        )

        new_reflection = self.file_manager.get_new_reflection()
        x0, x1, y0, y1, z0, z1 = new_reflection["bbox"]
        coords = (int((y0 + y1) / 2), int((x0 + x1) / 2))
        experiment_viewer_msg = {
            "panelIdx": new_reflection["panel_idx"],
            "panelPos": coords,
            "focusOnPanel": False,
        }
        await self.send_viewer(
            "experiment_viewer",
            "reflections.highlight",
            experiment_viewer_msg,
        )
        await self.update_state("experiment_viewer", {"status": "Default"})

        await self.send_viewer(
            "rlv",
            "reflections.update",
            {"refl_msgpack": reflection_table},
        )

    @command("reflections.select_rlp", run=Run.TASK)
    async def clicked_reflection_rlv(self, msg):
        rlp = msg["rlp"]
        expt_id = int(msg["expt_id"])
        refl_info = self.file_manager.find_reflection_by_rlp(rlp, expt_id)
        if refl_info is None:
            return
        select_msg = {
            "panel_idx": refl_info["panel_idx"],
            "panel_pos": refl_info["panel_pos"],
            "name": refl_info["panel_name"],
            "expt_id": expt_id,
            "reflection_id": refl_info["idx"],
        }
        if "lineplot" in self.file_manager.selected_file.mode.features:
            await self.update_lineplot({**select_msg, "highlight_on_panel": True})
        else:
            await self.select_reflection(select_msg)

    @command("reflections.select")
    async def select_reflection(self, msg):
        """Highlight a reflection in the viewers (modes without a lineplot)."""
        await self.send_viewer(
            "experiment_viewer", "experiment.select", {"expt_id": msg["expt_id"]}
        )
        await self.update_state(
            "root",
            {
                "selectedReflectionID": msg["reflection_id"],
                "selectedReflectionTableExptID": msg["expt_id"],
            },
        )
        await self.send_viewer(
            "experiment_viewer",
            "reflections.highlight",
            {
                "name": msg["name"],
                "panelIdx": msg["panel_idx"],
                "panelPos": msg["panel_pos"],
            },
        )
        rlp = self.file_manager.get_rlp_for_reflection(int(msg["reflection_id"]))
        if rlp is not None:
            await self.send_viewer("rlv", "reflections.highlight", {"rlp": rlp})

    @command("reflections.highlight_rlp")
    async def highlight_reflection_rlv(self, msg):
        if "reflection_id" not in msg:
            return
        rlp = self.file_manager.get_rlp_for_reflection(int(msg["reflection_id"]))
        if rlp is not None:
            await self.send_viewer("rlv", "reflections.highlight", {"rlp": rlp})
