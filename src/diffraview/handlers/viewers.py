"""Experiment viewer, reciprocal lattice viewer and theme."""

import asyncio
import time
from ..app_types import Status
from ..router import Run, command

VIEWER_CHANNELS = ("experiment_viewer", "rlv", "experiment_planner", "shoebox_viewer")


class ViewerHandlers:
    @command("update_experiment_images", requires="tof_range")
    async def update_experiment_images(self, msg):
        await self.send(
            "gui",
            {"params": {"updateTOFRangeEnabled": False}},
            command="update_find_spots_params",
        )
        await self.send(
            "gui",
            {"params": {"status": "Loading"}}, command="update_experiment_viewer_params"
        )
        tof_range = None
        if "wavelength_range" in msg:
            tof_range = self.file_manager.wavelength_range_to_tof(
                wavelength_range=msg["wavelength_range"]
            )
        elif "tof_range" in msg:
            tof_range = msg["tof_range"]

        image_dimensions = self.file_manager.get_panel_sizes()
        for expt_id in range(self.file_manager.get_num_experiments()):
            t_fetch = time.perf_counter()
            expt_image_data = self.file_manager.get_flattened_image_data(
                expt_id=expt_id, tof_range=tof_range
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
        await self.send(
            "gui",
            {"params": {"status": "Default"}}, command="update_experiment_viewer_params"
        )
        await self.send(
            "gui",
            {"params": {"updateTOFRangeEnabled": True}},
            command="update_find_spots_params",
        )

    @command("select_experiment_viewer_experiment")
    async def select_experiment_viewer_experiment(self, msg):
        assert "expt_id" in msg
        await self.send("experiment_viewer", msg, command="select_expt")

    @command("update_user_dmin", requires="planner")
    async def update_user_dmin(self, msg):
        assert "dmin" in msg
        self.file_manager.update_user_dmin(dmin=msg["dmin"])

    @command("update_experiment_viewer_debug_image")
    async def update_experiment_viewer_debug_image(self, msg):
        if not "show_loading" in msg or msg["show_loading"]:
            await self.send(
                "gui",
                {"params": {"status": "Loading"}},
                command="update_experiment_viewer_params",
            )

        expt_id = self.file_manager.get_current_experiment_viewer_expt_id()
        images, mask = self.file_manager.get_threshold_debug_data(
            expt_id, msg["idx"], msg["threshold_algorithm"], msg["algorithm_params"]
        )

        image_dimensions = self.file_manager.get_panel_sizes()
        await self.send_binary(
            "experiment_viewer",
            {
                "image_data": images,
                "mask_data": mask,
                "image_dimensions": image_dimensions,
            },
            command="add_debug_image_data",
        )
        if not "show_loading" in msg or msg["show_loading"]:
            await self.send(
                "gui",
                {"params": {"status": "Default"}},
                command="update_experiment_viewer_params",
            )

    @command(
        "update_rs_mapper_mesh",
        run=Run.TASK,
        status="update_rlv_params",
        requires="reciprocal_space_mesh",
    )
    async def update_reciprocal_space_mesh(self, msg):
        await self.send(
            "gui",
            {"params": {"status": Status.Loading.value, "progress": 5}},
            command="update_rlv_params",
        )
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
            {
                "mesh_data": data,
                "mesh_dimensions": shape,
                "rlp_min": tuple(rlp_min),
                "rlp_max": tuple(rlp_max),
                "rlp_step": rlp_step,
            },
            command="update_mesh",
        )
        await self.send(
            "gui", {"params": {"progress": 50}}, command="update_rlv_params"
        )

    @command("cancel_rlv_mesh", run=Run.INLINE)
    async def cancel_rlv_mesh(self, msg=None):
        if self.active_task is not None:
            self.active_task.cancel()
            try:
                await self.active_task
            except (asyncio.CancelledError, asyncio.exceptions.CancelledError):
                pass
        self.clean_up_after_task()
        await self.send("rlv", {}, command="cancel_mesh")
        await self.send(
            "gui",
            {"params": {"status": Status.Default.value, "progress": 0}},
            command="update_rlv_params",
        )

    # Commands passed straight on to a viewer:
    # command -> (viewer, viewer command, {msg key: viewer msg key})
    FORWARDED = {
        "toggle_experiment_viewer_sidebar": ("experiment_viewer", "toggle_sidebar", {}),
        "toggle_rlv_sidebar": ("rlv", "toggle_sidebar", {}),
        "toggle_experiment_planner_sidebar": (
            "experiment_planner",
            "toggle_sidebar",
            {},
        ),
        "toggle_shoebox_viewer_sidebar": ("shoebox_viewer", "toggle_sidebar", {}),
        "show_rlv_orientation_view": ("rlv", "show_rlv_orientation_view", {}),
        "show_rlv_crystal_view": ("rlv", "show_rlv_crystal_view", {}),
        "show_rlv_resolution_view": ("rlv", "show_rlv_resolution_view", {}),
        "show_rlv_mesh": ("rlv", "show_mesh", {}),
        "hide_rlv_mesh": ("rlv", "hide_mesh", {}),
        "toggle_experiment_viewer_debug": (
            "experiment_viewer",
            "toggle_debug_mode",
            {"debug_mode": "debug_mode"},
        ),
        "set_experiment_viewer_debug_to_image": (
            "experiment_viewer",
            "set_debug_to_image",
            {},
        ),
        "set_experiment_viewer_debug_to_threshold": (
            "experiment_viewer",
            "set_debug_to_threshold",
            {},
        ),
        "update_integration_profiler_method": (
            "shoebox_viewer",
            "update_integration_method",
            {"method": "integration_method"},
        ),
    }

    @command(*FORWARDED)
    async def forward_to_viewer(self, msg):
        channel, viewer_command, keys = self.FORWARDED[msg["command"]]
        await self.send(
            channel, {v: msg[k] for k, v in keys.items()}, command=viewer_command
        )

    @command("update_theme")
    async def update_theme(self, msg):
        for channel in VIEWER_CHANNELS:
            await self.send(channel, {"theme": msg["theme"]}, command="update_theme")

    @command("rlv_mesh_ready", run=Run.INLINE)
    async def rlv_mesh_ready(self, msg):
        await self.send(
            "gui",
            {"params": {"status": Status.Default.value, "progress": 100}},
            command="update_rlv_params",
        )
        await self.send(
            "gui", {"params": {"progress": 0}}, command="update_rlv_params"
        )
