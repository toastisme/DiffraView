"""
Loading a xia2 run (DIALS pipeline) as DiffraView processing folders, one per
sweep. The step outputs and logs are copied under DiffraView's names, with a
manifest, so the xia2 run itself is not changed.
"""

from __future__ import annotations

import json
import re
import shlex
import shutil
from dataclasses import dataclass, field
from datetime import datetime
from os import listdir, mkdir
from os.path import basename, dirname, isdir, isfile, join, normpath

from ...app_types import SoftwareBackend
from ...processing import manifest
from ...processing.steps import Step, StepId, StepOutputs

XIA2_STATE = "xia2.json"
XIA2_DEBUG = "xia2-debug.txt"
XIA2_SUMMARY = "xia2-summary.dat"

# xia2 classes of the DIALS pipeline; others write XDS files
_DIALS_CLASSES = {
    "_indexer": "DialsIndexer",
    "_refiner": "DialsRefiner",
    "_integrater": "DialsIntegrater",
}

# Numbered xia2 job logs, e.g. 9_dials.refine_REFINE.log
_JOB_LOG = re.compile(r"^(\d+)_(dials\.[a-z_]+?)(?:_[A-Z]+)?\.log$")

# DiffraView log file: (stage dir, xia2 programs whose logs it holds)
_STEP_LOGS = {
    StepId.FIND_SPOTS: {
        "dials.find_spots.log": (
            "index",
            ("dials.generate_mask", "dials.find_spots", "dials.detect_blanks"),
        ),
    },
    StepId.INDEX: {
        "dials.index.log": ("index", ("dials.search_beam_position", "dials.index")),
        "dials.refine_bravais_settings.log": (
            "index",
            ("dials.refine_bravais_settings",),
        ),
        "dials.reindex.log": ("index", ("dials.reindex",)),
    },
    StepId.REFINE: {"dials.refine.log": ("refine", ("dials.refine",))},
    StepId.INTEGRATE: {
        "dials.integrate.log": ("integrate", ("dials.integrate", "dials.reindex")),
    },
    StepId.SCALE: {
        "dials.scale.log": ("scale", ("dials.scale", "dials.estimate_resolution")),
    },
}
# The xia2 program whose arguments are a step's args
_STEP_PROGRAMS = {
    StepId.FIND_SPOTS: "dials.find_spots",
    StepId.INDEX: "dials.index",
    StepId.REFINE: "dials.refine",
    StepId.INTEGRATE: "dials.integrate",
    StepId.SCALE: "dials.scale",
}


class Xia2Error(ValueError):
    pass


@dataclass
class Xia2Sweep:
    """A sweep's final files (absolute paths) and xia2 stage directories."""

    crystal: str
    name: str
    imported_expt: str
    strong_expt: str
    strong_refl: str
    indexed_expt: str
    indexed_refl: str
    refined_expt: str
    refined_refl: str
    integrated_expt: str
    integrated_refl: str
    stage_dirs: dict[str, str] = field(default_factory=dict)


def is_xia2_run(folder: str) -> bool:
    return isfile(join(folder, XIA2_STATE))


def _job_commands(run_dir: str) -> dict[str, list[str]]:
    """{job log path: command} from xia2-debug.txt."""
    path = join(run_dir, XIA2_DEBUG)
    if not isfile(path):
        return {}
    commands = {}
    log = None
    with open(path) as f:
        for line in f:
            match = re.match(r"Logfile: \S+ -> (.+)$", line.strip())
            if match:
                log = normpath(match.group(1).strip())
            elif log is not None and line.startswith("# dials."):
                commands[log] = shlex.split(line[2:])
                log = None
    return commands


def _job_logs(stage_dir: str) -> list[tuple[int, str, str]]:
    """(job number, program, path) of a stage dir's numbered logs, in run order."""
    logs = []
    for name in listdir(stage_dir):
        match = _JOB_LOG.match(name)
        if match:
            logs.append((int(match.group(1)), match.group(2), join(stage_dir, name)))
    return sorted(logs)


def _args(command: list[str]) -> dict[str, str]:
    """A command's key=value arguments, other than its input and output files."""
    args = {}
    for token in command[1:]:
        key, sep, value = token.partition("=")
        if sep and not key.startswith(("input.", "output.")):
            args[key] = value
    return args


def _sweeps(run_dir: str) -> list[Xia2Sweep]:
    with open(join(run_dir, XIA2_STATE)) as f:
        state = json.load(f)
    old_root = state.get("path", run_dir)

    def resolve(path: str) -> str:
        # Paths are absolute in xia2.json; the run may have been moved
        if not isfile(path) and path.startswith(old_root):
            path = run_dir + path[len(old_root) :]
        if not isfile(path):
            raise Xia2Error(f"xia2 output {path} not found")
        return path

    sweeps = []
    for crystal_name, crystal in state["_crystals"].items():
        # The crystal's sweeps are scaled together, so only one is a sweep's scaling
        scale_dir = join(run_dir, crystal_name, "scale")
        num_sweeps = sum(len(s["_sweeps"]) for s in crystal["_samples"].values())
        for sample in crystal["_samples"].values():
            for sweep in sample["_sweeps"]:
                for key, expected in _DIALS_CLASSES.items():
                    found = (sweep.get(key) or {}).get("__name__")
                    if found != expected:
                        raise Xia2Error(
                            f"Only xia2 runs using the DIALS pipeline can be "
                            f"loaded ({sweep['_name']} used {found})"
                        )
                indexer = sweep["_indexer"]["_indxr_payload"]
                refiner = sweep["_refiner"]
                integrater = sweep["_integrater"]
                strong_refl = resolve(indexer["spot_lists"][0])
                index_dir = dirname(strong_refl)
                imported_expt = join(index_dir, f"{sweep['_name']}_import.expt")
                strong_expt = strong_refl[: -len(".refl")] + ".expt"
                sweeps.append(
                    Xia2Sweep(
                        crystal=crystal_name,
                        name=sweep["_name"],
                        imported_expt=resolve(imported_expt),
                        strong_expt=strong_expt
                        if isfile(strong_expt)
                        else imported_expt,
                        strong_refl=strong_refl,
                        indexed_expt=resolve(indexer["experiments_filename"]),
                        indexed_refl=resolve(indexer["indexed_filename"]),
                        refined_expt=resolve(refiner["_refinr_experiments_filename"]),
                        refined_refl=resolve(refiner["_refinr_indexed_filename"]),
                        integrated_expt=resolve(
                            integrater["_intgr_experiments_filename"]
                        ),
                        integrated_refl=resolve(
                            integrater["_intgr_integrated_filename"]
                        ),
                    )
                )
                sweeps[-1].stage_dirs = {
                    "index": index_dir,
                    "refine": dirname(sweeps[-1].refined_expt),
                    "integrate": dirname(sweeps[-1].integrated_expt),
                }
                if num_sweeps == 1 and isdir(scale_dir):
                    sweeps[-1].stage_dirs["scale"] = scale_dir
    if not sweeps:
        raise Xia2Error("The xia2 run has no sweeps")
    return sweeps


def _write_logs(
    run_dir: str, sweep: Xia2Sweep, processing_dir: str
) -> dict[StepId, list[str]]:
    """Writes each step's DiffraView log files; returns its main job's command."""
    commands = _job_commands(run_dir)
    step_commands = {}
    for step_id, log_files in _STEP_LOGS.items():
        for log_name, (stage, programs) in log_files.items():
            if stage not in sweep.stage_dirs:
                continue
            parts = []
            for number, program, path in _job_logs(sweep.stage_dirs[stage]):
                if program not in programs:
                    continue
                with open(path) as f:
                    parts.append(f"xia2 job {number}: {basename(path)}\n\n{f.read()}")
                command = commands.get(normpath(path))
                if program == _STEP_PROGRAMS[step_id] and command is not None:
                    # The last run (e.g. scan-varying refinement)
                    step_commands[step_id] = command
            if parts:
                with open(join(processing_dir, log_name), "w") as f:
                    f.write("\n\n".join(parts))
    return step_commands


def _scaled_files(run_dir: str, sweep: Xia2Sweep) -> dict[str, str] | None:
    """
    {DiffraView name: path} of the sweep's last dials.scale job's files (and
    report if written), if it was scaled alone.
    """
    scale_dir = sweep.stage_dirs.get("scale")
    if scale_dir is None:
        return None
    jobs = [(n, path) for n, program, path in _job_logs(scale_dir) if program == "dials.scale"]
    if not jobs:
        return None
    number, log = jobs[-1]
    names = {
        "experiments": f"{number}_scaled.expt",
        "reflections": f"{number}_scaled.refl",
        "html": f"{number}_scaling.html",
    }
    for token in _job_commands(run_dir).get(normpath(log), []):
        key, sep, value = token.partition("=")
        if sep and key.startswith("output.") and key[len("output.") :] in names:
            names[key[len("output.") :]] = value
    files = {
        "scaled.expt": join(scale_dir, names["experiments"]),
        "scaled.refl": join(scale_dir, names["reflections"]),
    }
    if not all(isfile(f) for f in files.values()):
        return None
    report = join(scale_dir, names["html"])
    if isfile(report):
        files["dials.scale.html"] = report
    return files


def _import_log(run_dir: str, sweep: Xia2Sweep) -> str:
    text = f"Loaded from xia2 run {run_dir} (crystal {sweep.crystal}, {sweep.name})\n"
    summary = join(run_dir, XIA2_SUMMARY)
    if isfile(summary):
        with open(summary) as f:
            text += "\nxia2 summary:\n\n" + f.read()
    return text


def _source(run_dir: str, sweep: Xia2Sweep) -> dict:
    return {"xia2": normpath(run_dir), "crystal": sweep.crystal, "sweep": sweep.name}


def _new_folder(root: str, sweep: Xia2Sweep) -> str:
    time_str = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    folder = join(root, f"dv_xia2_{sweep.name}_{time_str}")
    count = 1
    while isdir(folder):
        count += 1
        folder = join(root, f"dv_xia2_{sweep.name}_{time_str}_{count}")
    mkdir(folder)
    return folder


def load_xia2_run(run_dir: str, root: str) -> list[tuple[str, str]]:
    """
    (sweep name, DiffraView processing folder) for each sweep of a xia2 run,
    made in root. Each load makes new folders, so workflows can be compared.
    """
    run_dir = normpath(run_dir)
    folders = []
    for sweep in _sweeps(run_dir):
        folder = _new_folder(root, sweep)
        _convert_sweep(run_dir, sweep, folder, _source(run_dir, sweep))
        folders.append((sweep.name, folder))
    return folders


def _convert_sweep(run_dir: str, sweep: Xia2Sweep, folder: str, source: dict):
    copies = {
        "imported.expt": sweep.imported_expt,
        "strong.expt": sweep.strong_expt,
        "strong.refl": sweep.strong_refl,
        "reindexed.expt": sweep.indexed_expt,
        "reindexed.refl": sweep.indexed_refl,
        "refined.expt": sweep.refined_expt,
        "refined.refl": sweep.refined_refl,
        "integrated.expt": sweep.integrated_expt,
        "integrated.refl": sweep.integrated_refl,
    }
    scaled = _scaled_files(run_dir, sweep)
    if scaled is not None:
        copies.update(scaled)
    else:
        sweep.stage_dirs.pop("scale", None)
    for name, path in copies.items():
        shutil.copyfile(path, join(folder, name))
    with open(join(folder, "dials.import.log"), "w") as f:
        f.write(_import_log(run_dir, sweep))
    commands = _write_logs(run_dir, sweep, folder)

    outputs = {
        StepId.IMPORT: StepOutputs("imported.expt"),
        StepId.FIND_SPOTS: StepOutputs("strong.expt", "strong.refl"),
        # xia2's chosen Bravais setting, as after DiffraView's own reindexing
        StepId.INDEX: StepOutputs("reindexed.expt", "reindexed.refl"),
        StepId.REFINE: StepOutputs("refined.expt", "refined.refl"),
        StepId.INTEGRATE: StepOutputs("integrated.expt", "integrated.refl"),
    }
    if scaled is not None:
        outputs[StepId.SCALE] = StepOutputs("scaled.expt", "scaled.refl")
    steps = {}
    for step_id, step_outputs in outputs.items():
        command = commands.get(step_id)
        steps[step_id] = Step(
            step_id,
            args=_args(command) if command else {},
            backend=SoftwareBackend.DIALS,
            outputs=step_outputs,
            command=command,
        )
    manifest.save(folder, steps, source=source)
