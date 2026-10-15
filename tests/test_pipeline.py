"""
Runs the TOF workflow (import to integrate) on SXD NaCl and
compares the messages each step sends against tests/golden/pipeline.json.
File can be regenerated using DIFFRAVIEW_UPDATE_GOLDEN=1.
"""

import asyncio
import contextlib
import hashlib
import json
import os
from pathlib import Path

import websockets

from conftest import SERVER_URI

VIEWER_IDS = ["experiment_viewer", "rlv", "experiment_planner", "shoebox_viewer"]
GOLDEN = Path(__file__).parent / "golden" / "pipeline.json"
QUIET_SECONDS = 3


class Client:
    def __init__(self, gui, viewers):
        self.gui = gui
        self.viewers = viewers
        self.viewer_msgs = []
        self.viewer_raw = []
        self._readers = [
            asyncio.create_task(self._read_viewer(vid, ws))
            for vid, ws in viewers.items()
        ]

    async def _read_viewer(self, viewer_id, ws):
        async for raw in ws:
            if isinstance(raw, bytes):
                self.viewer_msgs.append((viewer_id, "<binary>"))
            else:
                msg = json.loads(raw)
                self.viewer_msgs.append((viewer_id, msg.get("command")))
                self.viewer_raw.append((viewer_id, msg))

    async def send(self, msg_type, **payload):
        await self.gui.send(
            json.dumps({"channel": "server", "type": msg_type, "payload": payload})
        )

    async def run_step(self, msg_type, done_target, timeout, **payload):
        """
        Send a message and collect GUI messages until done_target reports a
        final status, then until the server goes quiet.
        """
        self.viewer_msgs.clear()
        await self.send(msg_type, **payload)
        gui_msgs = []
        async with asyncio.timeout(timeout):
            async for raw in self.gui:
                msg = json.loads(raw)
                gui_msgs.append(msg)
                if msg.get("type") == "session.error":
                    raise AssertionError(f"{msg_type}: {msg.get('error')}")
                params = msg.get("params", {})
                if gui_key(msg) == done_target and params.get("status") in (
                    "Default",
                    "Failed",
                ):
                    break
        with contextlib.suppress(TimeoutError):
            async with asyncio.timeout(QUIET_SECONDS):
                async for raw in self.gui:
                    gui_msgs.append(json.loads(raw))
        await asyncio.sleep(0.5)
        return gui_msgs, list(self.viewer_msgs)

    async def request(self, msg_type, reply_target, timeout=30, **payload):
        """Send a message and return the params of the first reply_target update."""
        await self.send(msg_type, **payload)
        async with asyncio.timeout(timeout):
            async for raw in self.gui:
                msg = json.loads(raw)
                if msg.get("type") == "session.error":
                    raise AssertionError(f"{msg_type}: {msg.get('error')}")
                if gui_key(msg) == reply_target:
                    return msg.get("params", {})

    async def run_until_quiet(
        self, msg_type, timeout=120, quiet=QUIET_SECONDS, **payload
    ):
        """Send a message and collect messages until the server goes quiet."""
        self.viewer_msgs.clear()
        await self.send(msg_type, **payload)
        gui_msgs = []
        with contextlib.suppress(TimeoutError):
            async with asyncio.timeout(timeout):
                while True:
                    async with asyncio.timeout(quiet):
                        gui_msgs.append(json.loads(await self.gui.recv()))
        return gui_msgs, list(self.viewer_msgs)

    async def close(self):
        for t in self._readers:
            t.cancel()
        for ws in self.viewers.values():
            await ws.close()


@contextlib.asynccontextmanager
async def connected_client():
    async with websockets.connect(SERVER_URI, max_size=None) as gui:
        viewers = {
            vid: await websockets.connect(SERVER_URI, max_size=None)
            for vid in VIEWER_IDS
        }
        client = Client(gui, viewers)
        try:
            for conn_id, ws in [("gui", gui), *viewers.items()]:
                await ws.send(
                    json.dumps(
                        {
                            "channel": "server",
                            "type": "session.connect",
                            "payload": {"id": conn_id},
                        }
                    )
                )
            yield client
        finally:
            await client.close()


def gui_key(msg):
    """The tab a state update is for, or the type of any other GUI message."""
    return msg.get("target") if msg.get("type") == "state.update" else msg.get("type")


def _rounded(value):
    if isinstance(value, float):
        return float(f"{value:.6g}")
    if isinstance(value, dict):
        return {k: _rounded(v) for k, v in value.items()}
    if isinstance(value, list):
        return [_rounded(v) for v in value]
    return value


def digest_params(gui_msgs):
    """Hash of the param values sent per command, for deterministic commands."""
    by_command = {}
    for msg in gui_msgs:
        if isinstance(msg.get("params"), dict):
            by_command.setdefault(gui_key(msg), []).append(_rounded(msg["params"]))
    return {
        command: hashlib.sha1(json.dumps(values, sort_keys=True).encode()).hexdigest()
        for command, values in sorted(by_command.items())
    }


def summarise(gui_msgs, viewer_msgs):
    """Order-insensitive summary: param keys per command, final statuses."""
    gui = {}
    statuses = {}
    for msg in gui_msgs:
        command = gui_key(msg)
        keys = gui.setdefault(command, set())
        params = msg.get("params")
        if isinstance(params, dict):
            keys.update(params)
            if params.get("status") in ("Default", "Failed"):
                statuses[command] = params["status"]
    viewers = {}
    for viewer_id, command in viewer_msgs:
        viewers.setdefault(viewer_id, set()).add(command)
    return {
        "gui": {k: sorted(v) for k, v in sorted(gui.items())},
        "statuses": dict(sorted(statuses.items())),
        "viewers": {k: sorted(v) for k, v in sorted(viewers.items())},
    }


def last_params(gui_msgs, command):
    params = {}
    for msg in gui_msgs:
        if gui_key(msg) == command and isinstance(msg.get("params"), dict):
            params.update(msg["params"])
    return params


async def phil_round_trip(c, tab, phil_dir, content, **fields):
    path = str(phil_dir / f"{tab}.phil")
    saved = await c.request(
        "workflow.save_params",
        "root",
        step=tab,
        paths=[path],
        content=content,
        **fields,
    )
    assert "userMessage" in saved
    loaded = await c.request("workflow.load_params", tab, step=tab, paths=[path])
    return [Path(path).read_text(), loaded]


FORWARDED = [
    ("toggle_rlv_sidebar", "viewer.toggle_sidebar", {"viewer": "rlv"}),
    (
        "toggle_experiment_viewer_sidebar",
        "viewer.toggle_sidebar",
        {"viewer": "experiment_viewer"},
    ),
    (
        "toggle_experiment_planner_sidebar",
        "viewer.toggle_sidebar",
        {"viewer": "experiment_planner"},
    ),
    (
        "toggle_shoebox_viewer_sidebar",
        "viewer.toggle_sidebar",
        {"viewer": "shoebox_viewer"},
    ),
    ("show_rlv_crystal_view", "rlv.set_view", {"view": "crystal"}),
    ("show_rlv_mesh", "rlv.mesh.show", {}),
    ("hide_rlv_mesh", "rlv.mesh.hide", {}),
    ("toggle_experiment_viewer_debug", "viewer.toggle_debug", {"debug_mode": True}),
    (
        "set_experiment_viewer_debug_to_threshold",
        "viewer.set_debug_view",
        {"view": "threshold"},
    ),
    (
        "update_integration_profiler_method",
        "profiler.set_method",
        {"method": "profile1d"},
    ),
    ("update_theme", "session.set_theme", {"theme": "dark"}),
]


async def forwarded_messages(c):
    """Viewer messages sent for commands the server only passes on."""
    results = {}
    for label, msg_type, payload in FORWARDED:
        c.viewer_raw.clear()
        await c.send(msg_type, **payload)
        await asyncio.sleep(0.3)
        results[label] = sorted(
            [viewer_id, json.dumps(msg, sort_keys=True)]
            for viewer_id, msg in c.viewer_raw
        )
    return results


PROFILER_PARAMS = {
    "profile_1d_ibix_alpha": "0.03",
    "profile_1d_ibix_beta": "0.03",
    "profile_1d_ibix_A": "0.1",
    "profile_1d_ibix_n_restarts": "100",
    "profile_1d_ic_A": "1.0",
    "profile_1d_ic_B": "0.05",
    "profile_1d_ic_R": "0.5",
    "profile_1d_ic_n_restarts": "100",
    "profile_3d_gutmann_n_restarts": "100",
    "profile_3d_gutmann_alpha": "1.0",
    "profile_3d_gutmann_beta": "0.1",
    "profile_3d_ic_n_restarts": "100",
    "profile_3d_ic_init_A": "1.0",
    "profile_3d_ic_init_B": "0.05",
    "profile_3d_ibix_alpha": "0.03",
    "profile_3d_ibix_beta": "0.03",
    "profile_3d_ibix_n_restarts": "100",
    "tof_padding": "2",
    "xy_padding": "1",
    "incident_run": "None",
    "empty_run": "None",
    "vanadium_sample_radius": "0.03",
    "vanadium_sample_number_density": "0.0722",
    "vanadium_scattering_x_section": "5.158",
    "vanadium_absorption_x_section": "4.4883",
    "sample_radius": "",
    "sample_number_density": "",
    "scattering_x_section": "",
    "absorption_x_section": "",
    "apply_lorentz": False,
    "apply_incident_spectrum": False,
    "apply_spherical_absorption": False,
    "type": "observed",
    "method": "summation",
    "mask_model": "ellipse",
    "ellipse_mask_scale": "1.0",
    "background_model": "linear3d",
}


async def tof_features(c, tof, reflection):
    """Exercise the TOF viewers and tools; values are hashed where deterministic."""
    results = {}

    async def record(_label, _command, _values=True, **fields):
        gui_msgs, viewer_msgs = await c.run_until_quiet(_command, quiet=5, **fields)
        summary = summarise(gui_msgs, viewer_msgs)
        if _values:
            summary["values"] = digest_params(gui_msgs)
        results[_label] = summary
        return gui_msgs

    tof_min, tof_max = tof["minTOF"], tof["maxTOF"]
    mid_tof = (tof_min + tof_max) / 2
    await record(
        "update_tof_range",
        "tof.set_range",
        current_tof_min=tof_min,
        current_tof_max=mid_tof,
    )
    await record("update_experiment_images", "viewer.update_images",
                 tof_range=[tof_min, mid_tof])
    await record("update_experiment_images_full", "viewer.update_images",
                 tof_range=[tof_min, tof_max])

    lineplot_fields = dict(
        PROFILER_PARAMS,
        panel_idx=reflection["panel"],
        name=reflection["panelName"],
        panel_pos=list(reflection["xyzObs"]),
        highlight_on_panel=True,
        reflection_id=reflection["id"],
        expt_id=reflection["exptID"],
        update_integration_profiler=False,
    )
    await record("update_lineplot", "lineplot.update", **lineplot_fields)
    await record(
        "update_integration_profiler",
        "profiler.update",
        _values=False,
        **dict(PROFILER_PARAMS, reflection_id=reflection["id"], erase_data=False,
               optimize_profile=False),
    )

    await record("update_user_dmin", "planner.set_dmin", dmin="1.5")
    planner_msgs = await record(
        "recalculate_planner_reflections", "planner.recalculate", dmin=1.5
    )
    planner_orientations = last_params(
        planner_msgs, "experiment_planner"
    ).get("orientations", [])
    await record("update_planner_goniometer_phi", "planner.set_phi",
                 phi=30.0)
    await record(
        "get_next_best_planner_orientation",
        "planner.next_best_orientation",
        orientations=planner_orientations,
        dmin=1.5,
        scan_phi_min=0,
        scan_phi_max=360,
        scan_phi_step=60,
    )

    await record(
        "update_experiment_viewer_debug_image",
        "viewer.debug_image",
        idx=0,
        threshold_algorithm="radial_profile",
        algorithm_params={"n_iqr": "6", "blur": "none", "n_bins": "100"},
    )
    await record("update_rs_mapper_mesh", "rlv.mesh.update",
                 grid_size=64, max_resolution=2.0)
    await record("highlight_reflection_rlv", "reflections.highlight_rlp",
                 reflection_id=reflection["id"])
    return results


async def run_pipeline(nxs_path, work_dir):
    results = {}
    phil_dir = work_dir / "phil"
    phil_dir.mkdir()
    processing_root = work_dir / "processing"
    processing_root.mkdir()
    async with connected_client() as c:
        await c.run_until_quiet(
            "file.set_processing_root", paths=[str(processing_root)]
        )

        msgs = await c.run_until_quiet(
            "workflow.run",
            step="import",
            filenames=[str(work_dir / "missing.nxs")],
            backend="DIALS",
        )
        results["import_missing_file"] = summarise(*msgs)
        log = last_params(msgs[0], "import").get("log", "")
        assert "Traceback" not in log, log

        msgs = await c.run_step(
            "workflow.run",
            "import",
            120,
            step="import",
            filenames=[str(nxs_path)],
            backend="DIALS",
        )
        results["import"] = summarise(*msgs)
        tof = last_params(msgs[0], "find_spots")
        results["forwarded"] = await forwarded_messages(c)

        results["phil_find_spots"] = await phil_round_trip(
            c,
            "find_spots",
            phil_dir,
            "spotfinder {\n  threshold {\n    algorithm = *dispersion_extended\n"
            "    dispersion {\n      gain = 1.5\n    }\n  }\n}\nfoo.bar = 3",
            tof_range=[tof["minTOF"], tof["maxTOF"]],
        )
        results["phil_index"] = await phil_round_trip(
            c,
            "index",
            phil_dir,
            "indexing {\n  method = fft1d\n  known_symmetry {\n"
            "    space_group = P1\n  }\n}",
        )
        results["phil_refine"] = await phil_round_trip(
            c, "refine", phil_dir, "refinement.parameterisation.beam.fix = all"
        )
        results["phil_integrate"] = await phil_round_trip(
            c, "integrate", phil_dir, "method = summation\nmask = ellipse"
        )

        msgs = await c.run_step(
            "workflow.run",
            "find_spots",
            600,
            step="find_spots",
            args={
                "threshold.algorithm": "dispersion_extended",
                "gain": "1.0",
                "sigma_strong": "3.0",
                "sigma_background": "6.0",
                "global_threshold": "0.0",
                "kernel_size": "3,3",
                "min_local": "2",
            },
        )
        results["find_spots"] = summarise(*msgs)

        msgs = await c.run_step(
            "workflow.run",
            "index",
            600,
            step="index",
            args={
                "unit_cell": "None",
                "space_group": "None",
                "indexing.index_assignment.simple.hkl_tolerance": "0.3",
                "indexing.method": "fft3d",
                "refinement.reflections.outlier.algorithm": "auto",
                "detector.hierarchy_level": "0",
                "joint_indexing": "True",
            },
        )
        results["index"] = summarise(*msgs)

        msgs = await c.run_step(
            "workflow.run",
            "refine",
            600,
            step="refine",
            args={
                "refinement.parameterisation.beam.fix": "none",
                "refinement.parameterisation.crystal.fix": "none",
                "refinement.parameterisation.detector.fix": "none",
                "refinement.parameterisation.goniometer.fix": "all",
                "refinement.reflections.outlier.algorithm": "auto",
                "detector.hierarchy_level": "0",
            },
        )
        results["refine"] = summarise(*msgs)
        integrate_params = last_params(msgs[0], "integrate")
        wl_min = integrate_params.get(
            "currentMinWavelength", integrate_params.get("minWavelength")
        )
        wl_max = integrate_params.get(
            "currentMaxWavelength", integrate_params.get("maxWavelength")
        )

        msgs = await c.run_step(
            "workflow.run",
            "integrate",
            1200,
            step="integrate",
            args={
                "corrections.lorentz": False,
                "method": "summation",
                "integration_type": "observed",
                "mask": "ellipse",
                "wavelength_range": f"{wl_min},{wl_max}",
                "ellipse_mask.scale": "1.0",
                "background_model": "linear3d",
            },
        )
        results["integrate"] = summarise(*msgs)
        reflections = last_params(msgs[0], "root")["reflectionTable"]
        reflection = next(
            dict(r, panel=int(panel))
            for panel, refls in sorted(reflections.items())
            for r in refls
            if r.get("xyzObs")
        )
        results.update(
            await tof_features(c, tof, reflection)
        )

        # Export reports success with update_root/import_params only
        msgs = await c.run_until_quiet(
            "workflow.run",
            step="export",
            quiet=10,
            args={
                "format": "shelx",
                "mtz.partiality_threshold": "0",
                "mtz.min_isigi": "0",
                "intensity": "sum",
            },
            paths=[str(work_dir / "exported.hkl")],
        )
        results["export"] = summarise(*msgs)
        assert (work_dir / "exported.hkl").stat().st_size > 0

        msgs = await c.run_step(
            "workflow.run",
            "index",
            300,
            step="refine_bravais_settings",
            args={
                "refinement.parameterisation.beam.fix": "all",
                "refinement.parameterisation.detector.fix": "all",
                "refinement.parameterisation.goniometer.fix": "all",
            },
        )
        results["refine_bravais_settings"] = summarise(*msgs)
        lattices = last_params(msgs[0], "index")["bravaisLattices"]

        msgs = await c.run_until_quiet(
            "workflow.reindex", id=lattices[0]["Candidate"], crystal_id="0"
        )
        results["reindex"] = summarise(*msgs)

        (processing_dir,) = [
            d for d in processing_root.glob("dv_*") if (d / "integrated.expt").exists()
        ]
        msgs = await c.run_until_quiet(
            "file.open_processing_folder", paths=[str(processing_dir)]
        )
        results["reopen_folder"] = summarise(*msgs)
    return results


def test_pipeline_sxd_nacl(server, sxd_nacl_nxs, tmp_path):
    results = asyncio.run(run_pipeline(sxd_nacl_nxs, tmp_path))

    if os.environ.get("DIFFRAVIEW_UPDATE_GOLDEN"):
        GOLDEN.parent.mkdir(exist_ok=True)
        GOLDEN.write_text(json.dumps(results, indent=2) + "\n")

    for step, summary in results.items():
        if step.startswith("phil_") or step in ("forwarded", "import_missing_file") or (
            "values" in summary or step.startswith("update_")
        ):
            continue
        failed = [k for k, v in summary["statuses"].items() if v != "Default"]
        assert not failed, f"{step}: {failed} reported Failed"

    expected = json.loads(GOLDEN.read_text())
    for step in expected:
        assert results[step] == expected[step], f"{step} messages changed"
