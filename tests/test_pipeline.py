"""
Runs the TOF workflow (import to integrate) on SXD NaCl and
compares the messages each step sends against tests/golden/pipeline.json.
File can be regenerated using DIFFRAVIEW_UPDATE_GOLDEN=1.
"""

import asyncio
import contextlib
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

    async def send(self, command, **fields):
        await self.gui.send(
            json.dumps({"channel": "server", "command": command, **fields})
        )

    async def run_step(self, command, done_command, timeout, **fields):
        """
        Send a command and collect GUI messages until done_command reports a
        final status, then until the server goes quiet.
        """
        self.viewer_msgs.clear()
        await self.send(command, **fields)
        gui_msgs = []
        async with asyncio.timeout(timeout):
            async for raw in self.gui:
                msg = json.loads(raw)
                gui_msgs.append(msg)
                if msg.get("command") == "display_error":
                    raise AssertionError(f"{command}: {msg.get('error')}")
                params = msg.get("params", {})
                if msg.get("command") == done_command and params.get("status") in (
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

    async def request(self, command, reply_command, timeout=30, **fields):
        """Send a command and return the params of the first reply_command."""
        await self.send(command, **fields)
        async with asyncio.timeout(timeout):
            async for raw in self.gui:
                msg = json.loads(raw)
                if msg.get("command") == "display_error":
                    raise AssertionError(f"{command}: {msg.get('error')}")
                if msg.get("command") == reply_command:
                    return msg.get("params", {})

    async def run_until_quiet(
        self, command, timeout=120, quiet=QUIET_SECONDS, **fields
    ):
        """Send a command and collect messages until the server goes quiet."""
        self.viewer_msgs.clear()
        await self.send(command, **fields)
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
                            "command": "record_connection",
                            "id": conn_id,
                        }
                    )
                )
            yield client
        finally:
            await client.close()


def summarise(gui_msgs, viewer_msgs):
    """Order-insensitive summary: param keys per command, final statuses."""
    gui = {}
    statuses = {}
    for msg in gui_msgs:
        command = msg.get("command")
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
        if msg.get("command") == command and isinstance(msg.get("params"), dict):
            params.update(msg["params"])
    return params


async def phil_round_trip(c, tab, phil_dir, content, **fields):
    path = str(phil_dir / f"{tab}.phil")
    saved = await c.request(
        f"save_{tab}_phil",
        "update_root_params",
        paths=[path],
        content=content,
        **fields,
    )
    assert "userMessage" in saved
    loaded = await c.request(f"load_{tab}_phil", f"update_{tab}_params", paths=[path])
    return [Path(path).read_text(), loaded]


FORWARDED = [
    ("toggle_rlv_sidebar", {}),
    ("toggle_experiment_viewer_sidebar", {}),
    ("toggle_experiment_planner_sidebar", {}),
    ("toggle_shoebox_viewer_sidebar", {}),
    ("show_rlv_crystal_view", {}),
    ("show_rlv_mesh", {}),
    ("hide_rlv_mesh", {}),
    ("toggle_experiment_viewer_debug", {"debug_mode": True}),
    ("set_experiment_viewer_debug_to_threshold", {}),
    ("update_integration_profiler_method", {"method": "profile1d"}),
    ("update_theme", {"theme": "dark"}),
]


async def forwarded_messages(c):
    """Viewer messages sent for commands the server only passes on."""
    results = {}
    for command, fields in FORWARDED:
        c.viewer_raw.clear()
        await c.send(command, **fields)
        await asyncio.sleep(0.3)
        results[command] = sorted(
            [viewer_id, json.dumps(msg, sort_keys=True)]
            for viewer_id, msg in c.viewer_raw
        )
    return results


async def run_pipeline(nxs_path, work_dir):
    results = {}
    phil_dir = work_dir / "phil"
    phil_dir.mkdir()
    processing_root = work_dir / "processing"
    processing_root.mkdir()
    async with connected_client() as c:
        await c.run_until_quiet(
            "browse_for_processing_folder", paths=[str(processing_root)]
        )

        msgs = await c.run_until_quiet(
            "dials.import",
            filenames=[str(work_dir / "missing.nxs")],
            softwareBackend="DIALS",
        )
        results["import_missing_file"] = summarise(*msgs)

        msgs = await c.run_step(
            "dials.import",
            "update_import_params",
            120,
            filenames=[str(nxs_path)],
            softwareBackend="DIALS",
        )
        results["import"] = summarise(*msgs)
        tof = last_params(msgs[0], "update_find_spots_params")
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
            "dials.find_spots",
            "update_find_spots_params",
            600,
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
            "dials.index",
            "update_index_params",
            600,
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
            "dials.refine",
            "update_refine_params",
            600,
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
        integrate_params = last_params(msgs[0], "update_integrate_params")
        wl_min = integrate_params.get(
            "currentMinWavelength", integrate_params.get("minWavelength")
        )
        wl_max = integrate_params.get(
            "currentMaxWavelength", integrate_params.get("maxWavelength")
        )

        msgs = await c.run_step(
            "dials.integrate",
            "update_integrate_params",
            1200,
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

        # Export reports success with update_root/import_params only
        msgs = await c.run_until_quiet(
            "dials.export",
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
            "dials.refine_bravais_settings",
            "update_index_params",
            300,
            args={
                "refinement.parameterisation.beam.fix": "all",
                "refinement.parameterisation.detector.fix": "all",
                "refinement.parameterisation.goniometer.fix": "all",
            },
        )
        results["refine_bravais_settings"] = summarise(*msgs)
        lattices = last_params(msgs[0], "update_index_params")["bravaisLattices"]

        msgs = await c.run_until_quiet(
            "dials.reindex", id=lattices[0]["Candidate"], crystal_id="0"
        )
        results["reindex"] = summarise(*msgs)

        (processing_dir,) = [
            d for d in processing_root.glob("dv_*") if (d / "integrated.expt").exists()
        ]
        msgs = await c.run_until_quiet(
            "browse_processing_folder_for_import", paths=[str(processing_dir)]
        )
        results["reopen_folder"] = summarise(*msgs)
    return results


def test_pipeline_sxd_nacl(server, sxd_nacl_nxs, tmp_path):
    results = asyncio.run(run_pipeline(sxd_nacl_nxs, tmp_path))

    if os.environ.get("DIFFRAVIEW_UPDATE_GOLDEN"):
        GOLDEN.parent.mkdir(exist_ok=True)
        GOLDEN.write_text(json.dumps(results, indent=2) + "\n")

    for step, summary in results.items():
        if step.startswith("phil_") or step in ("forwarded", "import_missing_file"):
            continue
        failed = [k for k, v in summary["statuses"].items() if v != "Default"]
        assert not failed, f"{step}: {failed} reported Failed"

    expected = json.loads(GOLDEN.read_text())
    for step in expected:
        assert results[step] == expected[step], f"{step} messages changed"
