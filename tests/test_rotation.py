"""
Runs the rotation workflow (import to export, then reopening the folder) on the
dials_data centroid_test_data X-ray images.
"""

import asyncio
import threading

import pytest

from dxtbx.serialize import load
from test_pipeline import (
    connected_client,
    phil_round_trip,
    gui_key,
    last_image_range,
    last_params,
    last_viewer_payload,
    state_seen,
    viewer_got,
)
from test_steps import dials

from diffraview.model.images import ImageModel
from diffraview.modes.rotation import RotationMode


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
        assert caps["features"] == [
            "beam_position_search",
            "param_search",
            "reciprocal_space_mesh",
        ]
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

        # Advanced option search: parameters not set by the tab or DiffraView
        definitions = (
            await c.request(
                "workflow.param_definitions", "find_spots", step="find_spots"
            )
        )["advancedDefinitions"]
        by_path = {d["path"]: d for d in definitions}
        assert by_path["spotfinder.filter.d_min"]["type"] == "float"
        assert by_path["spotfinder.filter.untrusted.circle"]["multiple"] is True
        hidden = ("output.", "spotfinder.lookup.", "spotfinder.tof.", "spotfinder.laue.")
        assert not [p for p in by_path if p.startswith(hidden)]
        assert "spotfinder.threshold.dispersion.gain" not in by_path

        circles = ["0 0 1", "1 1 1"]
        gui_msgs, _ = await c.run_step(
            "workflow.run",
            "find_spots",
            300,
            step="find_spots",
            after=viewer_got("rlv", "reciprocal_cells.clear"),
            args={
                "threshold.algorithm": "dispersion_extended",
                "spotfinder.filter.untrusted.circle": circles,
            },
        )
        reflections = last_params(gui_msgs, "root")["reflectionTable"]
        assert not any("tof" in r for panel in reflections.values() for r in panel)
        # Each value of a repeated parameter reaches DIALS
        (log,) = processing_root.glob("*/dials.find_spots.log")
        assert all(f"circle = {circle}" in log.read_text() for circle in circles)

        content = (
            "spotfinder.filter.untrusted.circle = 0 0 1\n"
            "spotfinder.filter.untrusted.circle = 1 1 1\n"
            "spotfinder {\n  filter {\n    d_max = 20\n  }\n}\n"
            "border = 2\n"
            "no_such_parameter = 1"
        )
        _, loaded = await phil_round_trip(c, "find_spots", work_dir, content)
        assert loaded["advancedOptions"] == [
            {"path": "spotfinder.filter.untrusted.circle", "value": "0 0 1"},
            {"path": "spotfinder.filter.untrusted.circle", "value": "1 1 1"},
            {"path": "spotfinder.filter.d_max", "value": "20"},
            {"path": "spotfinder.filter.border", "value": "2"},
            {"path": "no_such_parameter", "value": "1"},
        ]

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

        gui_msgs, viewer_msgs = await c.run_until_quiet(
            "rlv.mesh.update",
            until=viewer_got("rlv", "<binary>"),
            grid_size=64,
            max_resolution=2.0,
        )
        assert ("rlv", "<binary>") in viewer_msgs
        assert not any(m.get("type") == "session.error" for m in gui_msgs)
        # Progress per image, between 5% (started) and 50% (mesh sent)
        progress = [
            m["params"]["progress"]
            for m in gui_msgs
            if gui_key(m) == "rlv" and "progress" in m.get("params", {})
        ]
        assert any(5 < p < 50 for p in progress)

        # Cancelled: the RLV is idle again and no mesh is sent
        await c.send("rlv.mesh.update", grid_size=64, max_resolution=2.0)
        gui_msgs, viewer_msgs = await c.run_until_quiet(
            "rlv.mesh.cancel", until=viewer_got("rlv", "mesh.cancel")
        )
        assert ("rlv", "<binary>") not in viewer_msgs
        assert state_seen("rlv", status="Default")(gui_msgs, viewer_msgs)

        # The viewer could not draw a mesh: shown as an error
        gui_msgs, _ = await c.run_until_quiet(
            "rlv.mesh.error", quiet=1, message="The mesh is too large to show."
        )
        assert state_seen("rlv", status="Default", progress=0)(gui_msgs, [])
        errors = [m["error"] for m in gui_msgs if m.get("type") == "session.error"]
        assert errors == ["The mesh is too large to show."]

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
        crystal_summary = last_params(gui_msgs, "import")["crystalSummary"]

        gui_msgs, _ = await c.run_until_quiet(
            "workflow.run",
            until=state_seen("integrate", has="log"),
            step="symmetry",
            args={"normalisation": "ml_iso", "min_cc_half": "0.6"},
        )
        assert last_params(gui_msgs, "integrate")["status"] == "Default"
        assert "Best solution" in last_params(gui_msgs, "integrate")["log"]
        integrate_params = last_params(gui_msgs, "integrate")
        assert integrate_params["symmetryResultsOpen"] is True
        candidates = integrate_params["symmetryCandidates"]
        assert candidates[0]["recommended"] == "*"
        assert candidates[-1]["pattersonGroup"] == "P -1"
        # Nothing is applied until a candidate is chosen
        assert set(integrate_params["exportSpaceGroups"]) == {"integrate"}

        async def apply_symmetry(candidate_id):
            gui_msgs, viewer_msgs = await c.run_step(
                "workflow.run",
                "integrate",
                300,
                step="apply_symmetry",
                after=viewer_got("rlv", "experiment.update"),
                id=candidate_id,
            )
            assert last_params(gui_msgs, "integrate")["status"] == "Default"
            assert "calculatedReflectionTable" in last_params(gui_msgs, "root")
            assert ("rlv", "reflections.update_calculated") in viewer_msgs
            assert ("experiment_viewer", "reflections.update_calculated") in viewer_msgs
            return gui_msgs

        gui_msgs = await apply_symmetry(candidates[-1]["id"])
        space_groups = last_params(gui_msgs, "integrate")["exportSpaceGroups"]
        assert space_groups["apply_symmetry"] == "P 1"

        gui_msgs_applied = gui_msgs = await apply_symmetry(candidates[0]["id"])
        space_groups = last_params(gui_msgs, "integrate")["exportSpaceGroups"]
        assert space_groups["apply_symmetry"] == candidates[0]["spaceGroup"] != "P 1"
        applied_summary = last_params(gui_msgs, "import")["crystalSummary"]
        assert applied_summary != crystal_summary

        (processing_dir,) = list(processing_root.glob("dv_*"))
        from dials.array_family import flex

        integrated = flex.reflection_table.from_file(
            str(processing_dir / "integrated.refl")
        )
        reindexed = flex.reflection_table.from_file(
            str(processing_dir / "symmetry_reindexed.refl")
        )
        assert len(reindexed) == len(integrated)
        assert list(reindexed["miller_index"]) != list(integrated["miller_index"])

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
            input_from="apply_symmetry",
            paths=[str(mtz)],
        )
        assert mtz.stat().st_size > 0
        from iotbx import mtz as iotbx_mtz

        mtz_space_group = iotbx_mtz.object(str(mtz)).space_group_info()
        assert str(mtz_space_group) == space_groups["apply_symmetry"]

        # Or as SHELX .hkl
        hkl = work_dir / "integrated.hkl"
        await c.run_until_quiet(
            "workflow.run",
            until=state_seen("root"),
            step="export",
            args={
                "format": "shelx",
                "mtz.partiality_threshold": "0.4",
                "mtz.min_isigi": "-5",
                "intensity": "sum",
            },
            input_from="apply_symmetry",
            paths=[str(hkl)],
        )
        assert hkl.stat().st_size > 0

        # Applying symmetry resets scaling
        assert last_params(gui_msgs_applied, "scale") == {
            "enabled": True,
            "log": "",
            "status": "Default",
            "reportAvailable": False,
            "exportEnabled": False,
        }
        assert "scale" in caps["backends"]["DIALS"]
        gui_msgs, _ = await c.run_step(
            "workflow.run",
            "scale",
            300,
            step="scale",
            args={"anomalous": "True", "filtering.method": "None"},
            input_from="apply_symmetry",
        )
        scale_params = last_params(gui_msgs, "scale")
        assert scale_params["status"] == "Default"
        assert "Summary of merging statistics" in scale_params["log"]
        assert scale_params["reportAvailable"] is True
        report = await c.request("workflow.get_report", "scale", step="scale")
        assert report["report"].startswith("<!DOCTYPE html>")
        # dials.report of the current (integrated, symmetry applied) files
        report = await c.request("utils.generate_report", "utils", timeout=300)
        assert "generalReportError" not in report
        assert report["generalReport"].startswith("<!DOCTYPE html>")
        assert (processing_dir / "dials.report.html").is_file()
        scaled = load.experiment_list(
            str(processing_dir / "scaled.expt"), check_format=False
        )
        assert scaled[0].scaling_model is not None
        assert (
            str(scaled[0].crystal.get_space_group().info())
            == (space_groups["apply_symmetry"])
        )
        assert scale_params["exportEnabled"] is True

        # Scaled reflections, unmerged (dials.export) and merged (dials.merge)
        exports = (
            (
                "export_scaled",
                "scaled.mtz",
                {"intensity": "scale", "mtz.min_isigi": "-5"},
            ),
            ("export_scaled", "scaled.hkl", {"format": "shelx", "intensity": "scale"}),
            (
                "merge",
                "merged.mtz",
                {"anomalous": "False", "r_free_flags.fraction": "0.1"},
            ),
        )
        for step, filename, args in exports:
            gui_msgs, _ = await c.run_step(
                "workflow.run",
                "scale",
                300,
                step=step,
                args=args,
                paths=[str(work_dir / filename)],
            )
            export_params = last_params(gui_msgs, "scale")
            assert export_params["status"] == "Default"
            # The tab keeps the scale log
            assert "Summary of merging statistics" in export_params["log"]
            if filename.endswith(".hkl"):
                assert (work_dir / filename).stat().st_size > 0
                continue
            mtz_object = iotbx_mtz.object(str(work_dir / filename))
            assert str(mtz_object.space_group_info()) == space_groups["apply_symmetry"]
        # Merged data have one observation of each reflection
        merged = iotbx_mtz.object(str(work_dir / "merged.mtz"))
        unmerged = iotbx_mtz.object(str(work_dir / "scaled.mtz"))
        assert merged.n_reflections() < unmerged.n_reflections()

        content = (
            "anomalous = True\n"
            "model = KB array dose_decay *physical\n"
            "filtering {\n  method = deltacchalf\n"
            "  deltacchalf {\n    min_completeness = None\n  }\n}\n"
            "cut_data {\n  d_min = 1.5\n}"
        )
        _, loaded = await phil_round_trip(c, "scale", work_dir, content)
        assert loaded == {
            "anomalous": True,
            "model": "physical",
            "filteringMethod": "deltacchalf",
            "minCompleteness": "",
            "advancedOptions": "cut_data.d_min=1.5",
        }

        gui_msgs, _ = await c.run_until_quiet(
            "file.open_processing_folder",
            until=state_seen("experiment_viewer", status="Default"),
            paths=[str(processing_dir)],
        )
        assert capabilities(gui_msgs)["experimentType"] == "ROTATION"
        assert last_params(gui_msgs, "find_spots")["numImages"] == len(images)
        integrate_params = last_params(gui_msgs, "integrate")
        assert integrate_params["exportEnabled"] is True
        assert integrate_params["exportSpaceGroups"] == space_groups
        assert integrate_params["symmetryCandidates"] == candidates
        assert last_params(gui_msgs, "import")["crystalSummary"] == applied_summary
        assert "calculatedReflectionTable" in last_params(gui_msgs, "root")
        scale_params = last_params(gui_msgs, "scale")
        assert scale_params["enabled"] is True
        assert scale_params["reportAvailable"] is True
        assert "Summary of merging statistics" in scale_params["log"]


def test_rotation_pipeline(server, centroid_images, tmp_path):
    asyncio.run(run_rotation_pipeline(centroid_images, tmp_path))


def test_images_scaled():
    """25 times the detector's 90th percentile is white, whatever the maximum."""
    import numpy as np

    from diffraview.modes.rotation import RotationMode

    panels = [np.zeros((10, 10)), np.zeros((10, 10))]
    panels[0][:2] = 4  # the 90th percentile of both panels
    panels[1][0, 0] = 1e6
    panels[1][1, 1] = -2  # masked
    scales = RotationMode(af=None).display_scales(panels)
    assert np.allclose(scales, [0.04 / 4] * 2)


def imported_dataset(images, tmp_path):
    dials("dials.import", *[str(i) for i in images], cwd=tmp_path)

    class Dataset(ImageModel):
        current_expt_file = str(tmp_path / "imported.expt")

        def _get_experiments(self):
            return load.experiment_list(self.current_expt_file)

    return Dataset()


def test_mesh_stops(centroid_images, tmp_path):
    mode = RotationMode(imported_dataset(centroid_images, tmp_path))
    fractions = []
    data = mode.get_rs_viewer_data(64, 2.0, progress=fractions.append)
    # 64 voxels across at 1 Å, so 2 * ceil(0.5 / (2 / 64) + 0.5) at 2 Å
    assert data[0]["shape"] == [34, 34, 34]
    assert len(fractions) == len(centroid_images) and fractions[-1] == 1
    stop = threading.Event()
    stop.set()
    # Beyond the kept grid, so the images are read again
    assert mode.get_rs_viewer_data(64, 1.5, stop=stop) is None


def test_mesh_sweep_not_from_first_image(centroid_images, tmp_path):
    """Each image is rotated by its own angle when the sweep starts later."""
    from diffraview.modes.rotation import image_angle

    dataset = imported_dataset(centroid_images, tmp_path)
    (full,) = dataset._get_experiments()
    later = full.scan[4:]
    assert later.get_array_range()[0] == 4
    for i in range(len(later)):
        assert image_angle(later, i) == pytest.approx(image_angle(full.scan, i + 4))
    first = full.scan.get_angle_from_image_index(1.5, deg=False)
    assert image_angle(full.scan, 0) == pytest.approx(first)


def test_folder_that_fails_to_open_stops_loading(server, tmp_path):
    """The failure goes to Import, and the experiment viewer stops loading."""

    async def open_empty_folder():
        async with connected_client() as c:
            return await c.run_until_quiet(
                "file.open_processing_folder",
                until=state_seen("import", status="Failed"),
                paths=[str(tmp_path)],
            )

    gui_msgs, viewer_msgs = asyncio.run(open_empty_folder())
    assert "No filenames given" in last_params(gui_msgs, "import")["log"]
    viewer = [t for v, t in viewer_msgs if v == "experiment_viewer"]
    loading = viewer.index("images.loading")
    assert "experiment.clear" in viewer[loading:]
    assert state_seen("experiment_viewer", status="Default")(gui_msgs, [])
