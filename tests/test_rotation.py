"""
Runs the rotation workflow (import to export, then reopening the folder) on the
dials_data centroid_test_data X-ray images.
"""

import asyncio

from test_pipeline import (
    connected_client,
    gui_key,
    last_image_range,
    last_params,
    last_viewer_payload,
    state_seen,
    viewer_got,
)


def capabilities(gui_msgs):
    (caps,) = [m for m in gui_msgs if m.get("type") == "session.capabilities"]
    return caps


async def run_rotation_pipeline(images, work_dir):
    processing_root = work_dir / "processing"
    processing_root.mkdir()
    async with connected_client() as c:
        await c.run_until_quiet(
            "file.set_processing_root", paths=[str(processing_root)]
        )

        gui_msgs, _ = await c.run_step(
            "workflow.run",
            "import",
            120,
            step="import",
            after=viewer_got("rlv", "experiment.new"),
            filenames=[str(i) for i in images],
            backend="DIALS",
        )
        caps = capabilities(gui_msgs)
        assert caps["experimentType"] == "ROTATION"
        assert caps["features"] == []
        assert caps["viewers"] == ["experiment_viewer", "rlv"]
        # The client routes tab updates by experiment type
        keys = [gui_key(m) for m in gui_msgs]
        assert keys.index("session.capabilities") < keys.index("find_spots")
        find_spots = last_params(gui_msgs, "find_spots")
        assert find_spots["numImages"] == len(images)
        assert "minTOF" not in find_spots
        image_range = last_image_range(c)
        assert (image_range["image"], image_range["stack"]) == (1, 1)
        # No lineplot, so clicks are not marked
        settings = last_viewer_payload(c, "experiment_viewer", "settings.update")
        assert settings == {"show_click_marker": False}

        gui_msgs, _ = await c.run_step(
            "workflow.run",
            "find_spots",
            300,
            step="find_spots",
            after=viewer_got("rlv", "reciprocal_cells.clear"),
            args={"threshold.algorithm": "dispersion_extended"},
        )
        reflections = last_params(gui_msgs, "root")["reflectionTable"]
        assert not any("tof" in r for panel in reflections.values() for r in panel)

        gui_msgs, _ = await c.run_step(
            "workflow.run",
            "index",
            300,
            step="index",
            after=viewer_got("rlv", "reflections.update"),
            args={"indexing.method": "fft3d"},
        )
        assert last_params(gui_msgs, "index")["status"] == "Default"

        reflections = last_params(gui_msgs, "root")["reflectionTable"]
        panel, panel_reflections = next(iter(reflections.items()))
        refl = panel_reflections[0]
        gui_msgs, viewer_msgs = await c.run_until_quiet(
            "reflections.select",
            until=viewer_got("rlv", "reflections.highlight"),
            panel_idx=int(panel),
            name=refl["panelName"],
            panel_pos=list(refl["xyzObs"][:2]),
            reflection_id=refl["id"],
            expt_id=refl["exptID"],
        )
        assert ("experiment_viewer", "reflections.highlight") in viewer_msgs
        assert last_params(gui_msgs, "root")["selectedReflectionID"] == refl["id"]

        # The viewer sends lineplot.update on panel clicks; rotation has no lineplot
        gui_msgs, viewer_msgs = await c.run_until_quiet(
            "lineplot.update", quiet=1, panel_idx=0, panel_pos=[10, 10], expt_id=0
        )
        assert gui_msgs == [] and viewer_msgs == []
        assert "experiment_planner" not in [gui_key(m) for m in gui_msgs]

        gui_msgs, _ = await c.run_step(
            "workflow.run",
            "refine",
            300,
            step="refine",
            after=viewer_got("rlv", "reflections.update"),
            args={"refinement.parameterisation.goniometer.fix": "all"},
        )
        assert last_params(gui_msgs, "integrate")["enabled"] is True
        assert "minTOF" not in last_params(gui_msgs, "integrate")

        gui_msgs, _ = await c.run_step(
            "workflow.run",
            "integrate",
            600,
            step="integrate",
            after=viewer_got("rlv", "reflections.update_calculated"),
            args={"integration.profile.fitting": "False"},
        )
        assert last_params(gui_msgs, "integrate")["status"] == "Default"
        assert "calculatedReflectionTable" in last_params(gui_msgs, "root")

        mtz = work_dir / "integrated.mtz"
        await c.run_until_quiet(
            "workflow.run",
            until=state_seen("root"),
            step="export",
            args={
                "format": "mtz",
                "mtz.partiality_threshold": "0.4",
                "mtz.min_isigi": "-5",
                "intensity": "sum",
            },
            paths=[str(mtz)],
        )
        assert mtz.stat().st_size > 0

        (processing_dir,) = list(processing_root.glob("dv_*"))
        gui_msgs, _ = await c.run_until_quiet(
            "file.open_processing_folder",
            until=state_seen("experiment_viewer", status="Default"),
            paths=[str(processing_dir)],
        )
        assert capabilities(gui_msgs)["experimentType"] == "ROTATION"
        assert last_params(gui_msgs, "find_spots")["numImages"] == len(images)
        assert last_params(gui_msgs, "integrate")["exportEnabled"] is True
        assert "calculatedReflectionTable" in last_params(gui_msgs, "root")


def test_rotation_pipeline(server, centroid_images, tmp_path):
    asyncio.run(run_rotation_pipeline(centroid_images, tmp_path))


def test_images_scaled_as_dials_image_viewer():
    """25 times the detector's 90th percentile is white, whatever the maximum."""
    import numpy as np

    from diffraview.modes.rotation import RotationMode

    panels = [np.zeros((10, 10)), np.zeros((10, 10))]
    panels[0][:2] = 4  # the 90th percentile of both panels
    panels[1][0, 0] = 1e6
    panels[1][1, 1] = -2  # masked
    image = RotationMode(af=None).normalise_images(panels)
    assert np.allclose(image[0][0, 0], 4 * 0.04 / 4)
    assert image[1][0, 0] == 1 and image[1][1, 1] == 0
