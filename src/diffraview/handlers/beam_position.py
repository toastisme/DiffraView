"""Searching for a better beam position (rotation data only)."""

import asyncio

from ..app_types import Status
from ..router import Run, command
from ..utils import get_formatted_text


class BeamPositionHandlers:
    _beam_position_task = None

    def _beam_position_mode(self):
        return self.file_manager.selected_file.mode

    @command("beam_position.search", requires="beam_position_search")
    async def search_beam_position(self, msg):
        self._beam_position_task = asyncio.current_task()
        mode = self._beam_position_mode()

        def on_progress(percent):
            update = {"progress": percent}
            self.run_in_background(self.update_state("beam_position", update))

        try:
            result = await mode.search_beam_position(
                dict(msg.get("args", {})), on_progress
            )
        except asyncio.CancelledError:
            stopped = {"status": Status.Default.value, "log": "Stopped"}
            await self.update_state("beam_position", {"result": stopped})
            raise
        except (RuntimeError, OSError, ValueError) as e:
            beam_position = {"status": Status.Failed.value, "log": str(e)}
        else:
            found = result.optimised_expt is not None
            beam_position = {
                "status": (Status.Default if found else Status.Failed).value,
                "log": get_formatted_text(result.log),
                "images": [{"name": n, "url": u} for n, u in result.images],
                "numImages": result.num_images,
                "optimisedAvailable": found,
            }
            if found:
                beam_position["optimisedCentres"] = mode.beam_centres(optimised=True)
        finally:
            if self._beam_position_task is asyncio.current_task():
                self._beam_position_task = None
        await self.update_state(
            "beam_position",
            {"result": beam_position, "currentCentres": mode.beam_centres()},
        )

    @command("beam_position.get_centres", requires="beam_position_search")
    async def send_beam_centres(self, msg):
        centres = self._beam_position_mode().beam_centres()
        await self.update_state("beam_position", {"currentCentres": centres})

    @command(
        "beam_position.cancel",
        run=Run.INLINE,
        requires="beam_position_search",
        optional=True,
    )
    async def cancel_search_beam_position(self, msg):
        if self._beam_position_task is not None:
            self._beam_position_task.cancel()

    @command("beam_position.use_optimised", requires="beam_position_search")
    async def use_optimised_beam_position(self, msg):
        """Replace the current expt with the search's, then reload the dataset."""
        mode = self._beam_position_mode()
        mode.use_optimised_beam_position()
        await self.update_state(
            "beam_position", {"used": True, "currentCentres": mode.beam_centres()}
        )
        await self.load_active_state()
        await self.update_state(
            "root", {"userMessage": "Using the optimised beam position"}
        )
