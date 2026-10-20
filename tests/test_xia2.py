"""
Loading a xia2 run. xia2 needs CCP4, so the run is made here by running the
DIALS programs xia2's DIALS pipeline uses, with its numbered file names,
directories, xia2-debug.txt and the parts of xia2.json DiffraView reads.
"""

import asyncio
import json
import os
import shlex
import shutil
import subprocess
import sys
from pathlib import Path

import pytest

from diffraview.backends.dials.xia2 import Xia2Error, load_xia2_run
from diffraview.processing import manifest
from diffraview.processing.steps import StepId
from test_pipeline import connected_client, last_params, state_seen

# (job number, stage, program, arguments), as xia2 runs them
JOBS = [
    (2, "index", "dials.find_spots", [
        "SWEEP1_import.expt", "output.experiments=2_SWEEP1_strong.expt",
        "output.reflections=2_SWEEP1_strong.refl", "dispersion.min_local=0",
    ]),
    (5, "index", "dials.index", [
        "2_SWEEP1_strong.expt", "2_SWEEP1_strong.refl", "indexing.method=fft3d",
        "output.experiments=5_indexed.expt", "output.reflections=5_indexed.refl",
    ]),
    (9, "refine", "dials.refine", [
        "../index/5_indexed.expt", "../index/5_indexed.refl", "scan_varying=False",
        "output.experiments=9_refined.expt", "output.reflections=9_refined.refl",
    ]),
    (12, "integrate", "dials.integrate", [
        "../refine/9_refined.expt", "../refine/9_refined.refl", "profile.fitting=False",
        "output.experiments=12_integrated.expt", "output.reflections=12_integrated.refl",
    ]),
]


def dials_program(name):
    """A dials.* program, from this Python's environment first."""
    path = os.pathsep.join([str(Path(sys.executable).parent), os.environ.get("PATH", "")])
    return shutil.which(name, path=path)


def _sweep_state(sweep_dir, pipeline="Dials"):
    index, refine, integrate = (str(sweep_dir / d) for d in ("index", "refine", "integrate"))
    return {
        "_name": "SWEEP1",
        "_indexer": {
            "__name__": f"{pipeline}Indexer",
            "_indxr_payload": {
                "spot_lists": [f"{index}/2_SWEEP1_strong.refl"],
                "experiments_filename": f"{index}/5_indexed.expt",
                "indexed_filename": f"{index}/5_indexed.refl",
            },
        },
        "_refiner": {
            "__name__": f"{pipeline}Refiner",
            "_refinr_experiments_filename": f"{refine}/9_refined.expt",
            "_refinr_indexed_filename": f"{refine}/9_refined.refl",
        },
        "_integrater": {
            "__name__": f"{pipeline}Integrater",
            "_intgr_experiments_filename": f"{integrate}/12_integrated.expt",
            "_intgr_integrated_filename": f"{integrate}/12_integrated.refl",
        },
    }


def write_state(run_dir, pipeline="Dials"):
    sweep_dir = run_dir / "DEFAULT" / "NATIVE" / "SWEEP1"
    state = {
        "path": str(run_dir),
        "_crystals": {
            "DEFAULT": {"_samples": {"X1": {"_sweeps": [_sweep_state(sweep_dir, pipeline)]}}}
        },
    }
    (run_dir / "xia2.json").write_text(json.dumps(state))


@pytest.fixture(scope="session")
def xia2_run(centroid_images, tmp_path_factory):
    run_dir = tmp_path_factory.mktemp("xia2_run")
    sweep_dir = run_dir / "DEFAULT" / "NATIVE" / "SWEEP1"
    for stage in ("index", "refine", "integrate"):
        (sweep_dir / stage).mkdir(parents=True)
    # xia2 imports through the Python API, without a log
    subprocess.run(
        [dials_program("dials.import"), *map(str, centroid_images),
         "output.experiments=SWEEP1_import.expt"],
        cwd=sweep_dir / "index", check=True, capture_output=True,
    )
    debug = []
    for number, stage, program, args in JOBS:
        log = sweep_dir / stage / f"{number}_{program}.log"
        command = [program, *args]
        subprocess.run(
            [dials_program(program), *args, f"output.log={log.name}"],
            cwd=sweep_dir / stage, check=True, capture_output=True,
        )
        debug += [
            f"Logfile: {program} -> {log}",
            f"Running {program}",
            "# command line:",
            "# " + " ".join(shlex.quote(a) for a in command),
        ]
    (run_dir / "xia2-debug.txt").write_text("\n".join(debug) + "\n")
    (run_dir / "xia2-summary.dat").write_text("Spacegroup: P 1\n")
    write_state(run_dir)
    return run_dir


def test_xia2_run_converted(xia2_run, tmp_path):
    ((sweep, folder),) = load_xia2_run(str(xia2_run), str(tmp_path))
    assert sweep == "SWEEP1"
    steps = manifest.load(folder)
    outputs = {step_id.value: step.outputs for step_id, step in steps.items()}
    assert outputs["find_spots"].refl == "strong.refl"
    assert outputs["index"].expt == "reindexed.expt"
    assert outputs["integrate"].refl == "integrated.refl"
    # The step's arguments, from xia2-debug.txt, without its files
    assert steps[StepId.FIND_SPOTS].args == {"dispersion.min_local": "0"}
    assert steps[StepId.REFINE].command[0] == "dials.refine"
    assert "xia2 job 9: 9_dials.refine.log" in (tmp_path / folder / "dials.refine.log").read_text()
    assert "Spacegroup: P 1" in (tmp_path / folder / "dials.import.log").read_text()
    # Loading the run again reuses its folder
    assert load_xia2_run(str(xia2_run), str(tmp_path)) == [(sweep, folder)]


def test_xds_pipeline_rejected(xia2_run, tmp_path):
    run_dir = tmp_path / "xds_run"
    shutil.copytree(xia2_run, run_dir)
    write_state(run_dir, pipeline="XDS")
    with pytest.raises(Xia2Error, match="DIALS pipeline"):
        load_xia2_run(str(run_dir), str(tmp_path))


async def open_and_export_xia2_run(run_dir, processing_root):
    async with connected_client() as c:
        await c.run_until_quiet("file.set_processing_root", paths=[str(processing_root)])
        gui_msgs, _ = await c.run_until_quiet(
            "file.open_processing_folder",
            until=state_seen("experiment_viewer", status="Default"),
            paths=[str(run_dir)],
        )
        export_msgs, _ = await c.run_until_quiet(
            "workflow.run",
            until=state_seen("root"),
            step="export",
            args={
                "format": "mtz",
                "mtz.partiality_threshold": "0.4",
                "mtz.min_isigi": "-5",
                "intensity": "sum",
            },
            paths=[str(processing_root / "integrated.mtz")],
        )
    return gui_msgs, export_msgs


def test_xia2_run_opened(server, xia2_run, tmp_path):
    gui_msgs, export_msgs = asyncio.run(open_and_export_xia2_run(xia2_run, tmp_path))
    (caps,) = [m for m in gui_msgs if m.get("type") == "session.capabilities"]
    assert caps["experimentType"] == "ROTATION"
    # One dataset per sweep (the session's server may have others open)
    assert last_params(gui_msgs, "root")["currentFileKey"] == f"{xia2_run.name}_SWEEP1"
    assert last_params(gui_msgs, "integrate")["exportEnabled"] is True
    assert "calculatedReflectionTable" in last_params(gui_msgs, "root")
    assert "xia2 job 2" in last_params(gui_msgs, "find_spots")["log"]
    # Exporting keeps the integrate log, read from the folder's log files
    assert "xia2 job 12" in last_params(export_msgs, "integrate")["log"]
    assert (tmp_path / "integrated.mtz").stat().st_size > 0
    # xia2's files are not changed
    assert not list(xia2_run.glob("**/diffraview_state.json"))
