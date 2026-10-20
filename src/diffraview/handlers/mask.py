"""Masks drawn in the experiment viewer"""

from ..app_types import Status
from ..router import Run, command


class MaskHandlers:
    async def send_mask_state(self):
        active_file = self.file_manager.selected_file
        if active_file is not None:
            await self.update_state("experiment_viewer", active_file.mask_state())

    @command("mask.set_active")
    async def set_mask_tool_active(self, msg):
        await self.send_viewer(
            "experiment_viewer", "mask.set_active", {"active": bool(msg["active"])}
        )

    @command("mask.update", run=Run.INLINE)
    async def update_mask_polygons(self, msg):
        """
        Completed polygons from the viewer ([{"panel", "points": [[fast, slow]]}])
        and whether one is being drawn.
        """
        active_file = self.file_manager.selected_file
        if active_file is None:
            return
        active_file.mask_polygons = [
            {
                "panel": int(p["panel"]),
                "points": [[float(x), float(y)] for x, y in p["points"]],
            }
            for p in msg["polygons"]
        ]
        active_file.mask_drawing = bool(msg.get("drawing", False))
        await self.send_mask_state()

    @command("mask.store")
    async def store_mask(self, msg):
        active_file = self.file_manager.selected_file
        if active_file is None or not active_file.mask_polygons:
            return
        await self.update_state("experiment_viewer", {"status": Status.Loading.value})
        try:
            await active_file.store_mask()
        finally:
            await self.update_state(
                "experiment_viewer", {"status": Status.Default.value}
            )
        await self.send_mask_state()
        await self.update_state("root", {"userMessage": "Mask stored."})

    @command("mask.clear", run=Run.INLINE)
    async def clear_mask(self, msg=None):
        active_file = self.file_manager.selected_file
        if active_file is None:
            return
        was_stored = active_file.mask is not None
        active_file.clear_mask()
        await self.send_viewer("experiment_viewer", "mask.clear")
        await self.send_mask_state()
        if was_stored:
            await self.update_state("root", {"userMessage": "Mark removed."})
