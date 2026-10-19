"""Experiment viewer, reciprocal lattice viewer and theme."""

import asyncio
from ..app_types import Status
from ..router import Run, command

VIEWER_CHANNELS = ("experiment_viewer", "rlv", "experiment_planner", "shoebox_viewer")


class ViewerHandlers:
    async def send_experiment_viewer_settings(self):
        """The mode's experiment viewer settings (e.g. marking clicked pixels)."""
        await self.send_viewer(
            "experiment_viewer",
            "settings.update",
            self.file_manager.get_experiment_viewer_settings(),
        )

    async def send_images(
        self, image_range=None, report_progress=False, announce=True
    ):
        """
        Send the experiment viewer imageset indices image_range summed (default
        the mode's, e.g. all); announce updates its image controls. A newer call
        stops this one.
        """
        self.image_request += 1
        request = self.image_request
        num_images = self.file_manager.get_num_images()
        if image_range is None:
            image_range = self.file_manager.get_default_image_range(num_images)
        image_dimensions = self.file_manager.get_panel_sizes()
        num_experiments = self.file_manager.get_num_experiments()
        for expt_id in range(num_experiments):
            expt_image_data = self.file_manager.get_flattened_image_data(
                expt_id=expt_id, image_range=image_range
            )
            for panel_idx, panel_image_data in enumerate(expt_image_data):
                if self.image_request != request:
                    return
                await self.send_binary(
                    "experiment_viewer",
                    "images.add_panel",
                    {
                        "image_data": panel_image_data,
                        "panel_idx": panel_idx,
                        "expt_id": expt_id,
                        "image_dimensions": image_dimensions,
                    },
                )
            if report_progress:
                progress = min(int((expt_id + 1) / num_experiments * 100), 99)
                await self.update_state("experiment_viewer", {"progress": progress})
        if announce:
            await self.send_viewer(
                "experiment_viewer",
                "images.set_range",
                {
                    "num_images": num_images,
                    "image": image_range[0] + 1,
                    "stack": image_range[1] - image_range[0],
                },
            )

    @command("viewer.show_image")
    async def show_experiment_image(self, msg):
        """Images image to image + stack - 1 (from 1) summed."""
        num_images = self.file_manager.get_num_images()
        image = min(max(int(msg["image"]), 1), num_images)
        stack = max(int(msg.get("stack", 1)), 1)
        await self.send_images(
            (image - 1, min(image - 1 + stack, num_images)), announce=False
        )

    @command("viewer.update_images", requires="tof_range")
    async def update_experiment_images(self, msg):
        await self.update_state("find_spots", {"updateTOFRangeEnabled": False})
        await self.update_state("experiment_viewer", {"status": "Loading"})
        first, last = self.file_manager.tof_range_to_scan_range(
            tof_range=msg.get("tof_range"),
            wavelength_range=msg.get("wavelength_range"),
        )
        num_images = self.file_manager.get_num_images()
        first = min(max(first, 1), num_images)
        last = min(max(last, first), num_images)
        await self.send_images((first - 1, last))
        await self.update_state("experiment_viewer", {"status": "Default"})
        await self.update_state("find_spots", {"updateTOFRangeEnabled": True})

    @command("viewer.select_experiment")
    async def select_experiment_viewer_experiment(self, msg):
        assert "expt_id" in msg
        await self.send_viewer("experiment_viewer", "experiment.select", msg)

    @command("planner.set_dmin", requires="planner")
    async def update_user_dmin(self, msg):
        assert "dmin" in msg
        self.file_manager.update_user_dmin(dmin=msg["dmin"])

    @command("viewer.debug_image")
    async def update_experiment_viewer_debug_image(self, msg):
        if not "show_loading" in msg or msg["show_loading"]:
            await self.update_state("experiment_viewer", {"status": "Loading"})

        expt_id = self.file_manager.get_current_experiment_viewer_expt_id()
        images, mask = self.file_manager.get_threshold_debug_data(
            expt_id, msg["idx"], msg["threshold_algorithm"], msg["algorithm_params"]
        )

        image_dimensions = self.file_manager.get_panel_sizes()
        await self.send_binary(
            "experiment_viewer",
            "images.add_debug",
            {
                "image_data": images,
                "mask_data": mask,
                "image_dimensions": image_dimensions,
            },
        )
        if not "show_loading" in msg or msg["show_loading"]:
            await self.update_state("experiment_viewer", {"status": "Default"})

    @command(
        "rlv.mesh.update",
        run=Run.TASK,
        status="rlv",
        requires="reciprocal_space_mesh",
    )
    async def update_reciprocal_space_mesh(self, msg):
        await self.update_state("rlv", {"status": Status.Loading.value, "progress": 5})
        if "max_resolution" in msg:
            max_resolution = float(msg["max_resolution"])
        else:
            max_resolution = 2
        if "grid_size" in msg:
            grid_size = int(msg["grid_size"])
        else:
            grid_size = 192
        data, shape, rlp_min, rlp_max, rlp_step = self.file_manager.get_rs_viewer_data(
            max_resolution=max_resolution, grid_size=grid_size
        )
        await self.send_binary(
            "rlv",
            "mesh.update",
            {
                "mesh_data": data,
                "mesh_dimensions": shape,
                "rlp_min": tuple(rlp_min),
                "rlp_max": tuple(rlp_max),
                "rlp_step": rlp_step,
            },
        )
        await self.update_state("rlv", {"progress": 50})

    @command("rlv.mesh.cancel", run=Run.INLINE)
    async def cancel_rlv_mesh(self, msg=None):
        if self.active_task is not None:
            self.active_task.cancel()
            try:
                await self.active_task
            except (asyncio.CancelledError, asyncio.exceptions.CancelledError):
                pass
        self.clean_up_after_task()
        await self.send_viewer("rlv", "mesh.cancel")
        await self.update_state("rlv", {"status": Status.Default.value, "progress": 0})

    # Messages passed straight on to a viewer

    @command("viewer.toggle_sidebar")
    async def toggle_viewer_sidebar(self, msg):
        viewer = msg["viewer"]
        if viewer not in VIEWER_CHANNELS:
            raise ValueError(f"Unknown viewer {viewer}")
        await self.send_viewer(viewer, "sidebar.toggle")

    @command("viewer.toggle_debug")
    async def toggle_experiment_viewer_debug(self, msg):
        await self.send_viewer(
            "experiment_viewer",
            "debug.toggle",
            {"debug_mode": msg["debug_mode"]},
        )

    @command("viewer.set_debug_view")
    async def set_experiment_viewer_debug_view(self, msg):
        view = msg["view"]
        if view not in ("image", "threshold"):
            raise ValueError(f"Unknown debug view {view}")
        await self.send_viewer("experiment_viewer", "debug.set_view", {"view": view})

    @command("rlv.set_view")
    async def set_rlv_view(self, msg):
        view = msg["view"]
        if view not in ("orientation", "crystal", "resolution"):
            raise ValueError(f"Unknown reciprocal lattice view {view}")
        await self.send_viewer("rlv", "view.set", {"view": view})

    @command("rlv.mesh.show")
    async def show_rlv_mesh(self, msg):
        await self.send_viewer("rlv", "mesh.show")

    @command("rlv.mesh.hide")
    async def hide_rlv_mesh(self, msg):
        await self.send_viewer("rlv", "mesh.hide")

    @command("profiler.set_method", requires="integration_profiler")
    async def set_integration_profiler_method(self, msg):
        await self.send_viewer(
            "shoebox_viewer",
            "integration.set_method",
            {"integration_method": msg["method"]},
        )

    @command("rlv.mesh.ready", run=Run.INLINE)
    async def rlv_mesh_ready(self, msg):
        await self.update_state(
            "rlv", {"status": Status.Default.value, "progress": 100}
        )
        await self.update_state("rlv", {"progress": 0})
