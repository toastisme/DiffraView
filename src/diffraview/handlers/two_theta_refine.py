"""Refining the unit cell against 2θ angles (rotation data only)."""

import asyncio

from ..app_types import Status
from ..router import Run, command
from ..utils import get_formatted_text


class TwoThetaRefineHandlers:
    _two_theta_refine_task = None

    @command("two_theta_refine.run", requires="two_theta_refine")
    async def run_two_theta_refine(self, msg):
        self._two_theta_refine_task = asyncio.current_task()
        mode = self.file_manager.selected_file.mode
        update = {}
        try:
            formats = [str(f) for f in msg.get("formats", [])]
            result = await mode.two_theta_refine(
                dict(msg.get("args", {})), str(msg.get("input_from", "")), formats
            )
        except asyncio.CancelledError:
            stopped = {"status": Status.Default.value, "log": "Stopped"}
            await self.update_state("two_theta_refine", {"result": stopped})
            raise
        except (RuntimeError, OSError, ValueError) as e:
            update["result"] = {"status": Status.Failed.value, "log": str(e)}
        else:
            refined = result.refined_expt is not None
            update["result"] = {
                "status": (Status.Default if refined else Status.Failed).value,
                "log": get_formatted_text(result.log),
                "inputCells": result.input_cells,
                "refinedCells": result.refined_cells,
                "refinedExpt": result.refined_expt,
                "files": result.files,
            }
        finally:
            if self._two_theta_refine_task is asyncio.current_task():
                self._two_theta_refine_task = None
        await self.update_state("two_theta_refine", update)

    @command(
        "two_theta_refine.cancel",
        run=Run.INLINE,
        requires="two_theta_refine",
        optional=True,
    )
    async def cancel_two_theta_refine(self, msg):
        if self._two_theta_refine_task is not None:
            self._two_theta_refine_task.cancel()
