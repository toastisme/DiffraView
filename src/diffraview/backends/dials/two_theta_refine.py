"""Wrapper for dials.two_theta_refine"""

from __future__ import annotations

import shutil
from dataclasses import dataclass, field
from os import makedirs
from os.path import isfile, join

from dxtbx.serialize import load

from ...processing.runner import run_command
from .params import check_args, command_line

RUN_DIR = "two_theta_refine"
LOG_FILE = "dials.two_theta_refine.log"
REFINED_EXPT = "refined_cell.expt"
# Optional outputs: {format: file name}
OUTPUT_FILES = {
    "cif": "refined_cell.cif",
    "mmcif": "refined_cell.mmcif",
    "p4p": "refined_cell.p4p",
}


@dataclass
class TwoThetaRefineResult:
    log: str
    refined_expt: str | None
    # unit_cells() of the input and refined experiments
    input_cells: list[dict] = field(default_factory=list)
    refined_cells: list[dict] = field(default_factory=list)
    # Paths of the optional outputs written
    files: list[str] = field(default_factory=list)


def unit_cells(expt_file: str) -> list[dict]:
    """Cell (and its standard uncertainties, if refined) of each crystal."""
    experiments = load.experiment_list(expt_file, check_format=False)
    cells = []
    seen = set()
    for i, expt in enumerate(experiments):
        crystal = expt.crystal
        if crystal is None or id(crystal) in seen:
            continue
        seen.add(id(crystal))
        # dials.two_theta_refine sets the recalculated cell
        recalculated = crystal.get_recalculated_unit_cell()
        unit_cell = recalculated or crystal.get_unit_cell()
        cell = {
            "experiment": i,
            "parameters": list(unit_cell.parameters()),
            "volume": unit_cell.volume(),
        }
        if recalculated is not None:
            sd = list(crystal.get_recalculated_cell_parameter_sd())
            volume_sd = crystal.get_recalculated_cell_volume_sd()
        else:
            try:
                sd = list(crystal.get_cell_parameter_sd())
                volume_sd = crystal.get_cell_volume_sd()
            except RuntimeError:  # no covariance
                sd = []
        if sd and any(sd):
            cell["sd"] = sd
            cell["volumeSd"] = volume_sd
        cells.append(cell)
    return cells


async def two_theta_refine(
    expt: str,
    refl: str,
    args: dict[str, str],
    formats: list[str],
    processing_dir: str,
) -> TwoThetaRefineResult:
    """Run in its own folder, writing refined_cell.* there."""
    check_args("dials.two_theta_refine", args)
    unknown = set(formats) - set(OUTPUT_FILES)
    if unknown:
        raise ValueError(f"Unknown output formats: {', '.join(sorted(unknown))}")
    run_dir = join(processing_dir, RUN_DIR)
    shutil.rmtree(run_dir, ignore_errors=True)
    makedirs(run_dir)
    outputs = [f"output.{f}={OUTPUT_FILES[f]}" for f in OUTPUT_FILES if f in formats]
    argv = [
        "dials.two_theta_refine",
        expt,
        refl,
        f"output.experiments={REFINED_EXPT}",
        *outputs,
        *command_line(args),
    ]
    stdout, stderr = await run_command(argv, cwd=run_dir)
    refined = join(run_dir, REFINED_EXPT)
    input_cells = unit_cells(expt)
    if not isfile(refined):
        return TwoThetaRefineResult(
            log=stderr or stdout, refined_expt=None, input_cells=input_cells
        )
    log_path = join(run_dir, LOG_FILE)
    if isfile(log_path):
        with open(log_path) as f:
            log = f.read()
    else:
        log = stdout
    files = [join(run_dir, OUTPUT_FILES[f]) for f in OUTPUT_FILES if f in formats]
    return TwoThetaRefineResult(
        log=log,
        refined_expt=refined,
        input_cells=input_cells,
        refined_cells=unit_cells(refined),
        files=[p for p in files if isfile(p)],
    )
