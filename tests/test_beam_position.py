"""Utils > Search Beam Position on dials_data centroid_test_data X-ray images."""

import asyncio

from dxtbx.serialize import load
from test_cancel import child_processes, wait_for_children
from test_pipeline import connected_client, last_params, state_seen, viewer_got


async def search(c, args):
    """The search's result and its progress updates."""
    gui_msgs, _ = await c.run_until_quiet(
        "beam_position.search",
        until=state_seen("beam_position", has="result"),
        timeout=300,
        args=args,
    )
    progress = [
        m["params"]["progress"]
        for m in gui_msgs
        if m.get("target") == "beam_position" and "progress" in m["params"]
    ]
    return last_params(gui_msgs, "beam_position")["result"], progress


async def run_search(images, work_dir, server_pid):
    processing_root = work_dir / "processing"
    processing_root.mkdir()
    async with connected_client() as c:
        await c.run_until_quiet("file.set_processing_root", paths=[str(processing_root)])
        await c.run_step(
            "workflow.run",
            "import",
            120,
            step="import",
            after=viewer_got("rlv", "experiment.new"),
            filenames=[str(i) for i in images],
            backend="DIALS",
        )
        (processing_dir,) = [p.parent for p in processing_root.glob("*/imported.expt")]
        reply = await c.request("beam_position.get_centres", "beam_position")
        (current,) = reply["currentCentres"]
        assert current["panel"] == 0
        assert {"x", "y", "xMm", "yMm"} <= set(current)

        # The default method needs spots
        result, _ = await search(c, {})
        assert result["status"] == "Failed"
        assert "Find Spots" in result["log"]
        await c.run_step(
            "workflow.run",
            "find_spots",
            300,
            step="find_spots",
            after=viewer_got("rlv", "reciprocal_cells.clear"),
        )

        # Stop kills dials.search_beam_position
        await c.send("beam_position.search", args={})
        try:
            running = await wait_for_children(server_pid)
        finally:
            gui_msgs, _ = await c.run_until_quiet(
                "beam_position.cancel",
                until=state_seen("beam_position", has="result"),
            )
        assert last_params(gui_msgs, "beam_position")["result"]["log"] == "Stopped"
        await asyncio.sleep(1)
        # Process checks need psutil or Linux /proc
        if running is not None:
            assert running, "dials.search_beam_position was not running when stopped"
            assert not child_processes(server_pid)

        result, progress = await search(c, {"default.mm_search_scope": "2.0"})
        assert result["status"] == "Default"
        assert result["optimisedAvailable"] is True
        assert result["images"] == []
        # Only the projection methods print a progress bar
        assert progress == []

        # The projection methods plot the image with the beam position
        result, progress = await search(c, {"method": "maximum"})
        assert result["status"] == "Default", result["log"]
        assert progress == sorted(progress) and progress[-1] == 100
        assert result["optimisedAvailable"] is True
        (optimised_centre,) = result["optimisedCentres"]
        assert (optimised_centre["x"], optimised_centre["y"]) != (current["x"], current["y"])
        (image,) = result["images"]
        assert image["name"].startswith("beam_position")
        assert image["url"].startswith("data:image/png;base64,")

        optimised = load.experiment_list(
            str(processing_dir / "search_beam_position" / "optimised.expt"),
            check_format=False,
        )
        gui_msgs, _ = await c.run_until_quiet(
            "beam_position.use_optimised",
            until=state_seen("root", has="userMessage"),
        )
        params = last_params(gui_msgs, "beam_position")
        assert params["used"] is True
        assert params["currentCentres"] == [optimised_centre]
        current = load.experiment_list(
            str(processing_dir / "imported.expt"), check_format=False
        )
        assert current[0].detector[0].get_origin() == optimised[0].detector[0].get_origin()


def test_search_beam_position(server, centroid_images, tmp_path):
    asyncio.run(run_search(centroid_images, tmp_path, server.pid))
