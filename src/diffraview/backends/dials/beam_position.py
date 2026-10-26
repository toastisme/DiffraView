"""Wrapper for dials.search_beam_position"""

from __future__ import annotations

import base64
import re
import shutil
from dataclasses import dataclass, field
from typing import Callable
from glob import glob
from os import makedirs
from os.path import basename, isfile, join

from dxtbx.serialize import load

from ...processing.runner import run_command
from .params import check_args, command_line

SEARCH_DIR = "search_beam_position"
LOG_FILE = "dials.search_beam_position.log"
OPTIMISED_EXPT = "optimised.expt"
# Projection methods with per_image plot every image
MAX_IMAGES = 20
# The projection methods' progress bar (projection.bar)
_SET = re.compile(r"Set:\s+\[[= ]*\]\s+[\d.]+ %\s+(\d+)/(\d+)")
_IMAGE = re.compile(r"Image: \[[= ]*\]\s+[\d.]+ %\s+(\d+)/(\d+)")


@dataclass
class BeamPositionResult:
    log: str
    optimised_expt: str | None
    # (file name, PNG data URL) of each plot
    images: list[tuple[str, str]] = field(default_factory=list)
    num_images: int = 0


def beam_centres(expt_file: str) -> list[dict]:
    """Where each beam meets its detector (one entry per beam and detector pair)."""
    experiments = load.experiment_list(expt_file, check_format=False)
    centres = []
    seen = set()
    for i, expt in enumerate(experiments):
        key = (id(expt.beam), id(expt.detector))
        if key in seen:
            continue
        seen.add(key)
        centre = {"experiment": i}
        try:
            panel, (x_mm, y_mm) = expt.detector.get_ray_intersection(expt.beam.get_s0())
        except RuntimeError:  # the beam misses the detector
            centres.append(centre)
            continue
        x, y = expt.detector[panel].millimeter_to_pixel((x_mm, y_mm))
        centre.update(panel=panel, x=x, y=y, xMm=x_mm, yMm=y_mm)
        centres.append(centre)
    return centres


def _data_url(path: str) -> str:
    with open(path, "rb") as f:
        return "data:image/png;base64," + base64.b64encode(f.read()).decode()


class _ProgressParser:
    """Percent done from the progress bar printed to stdout."""

    def __init__(self, on_progress: Callable[[int], None]):
        self.on_progress = on_progress
        self.tail = ""
        self.percent = None

    def __call__(self, text: str) -> None:
        # Keep enough to hold a bar split between reads
        self.tail = (self.tail + text)[-1000:]
        sets = _SET.findall(self.tail)
        images = _IMAGE.findall(self.tail)
        if not sets or not images:
            return
        set_index, n_sets = map(int, sets[-1])
        image_index, n_images = map(int, images[-1])
        percent = int(100 * (set_index - 1 + image_index / n_images) / n_sets)
        if percent != self.percent:
            self.percent = percent
            self.on_progress(percent)


async def search_beam_position(
    expt: str,
    refl: str | None,
    args: dict[str, str],
    processing_dir: str,
    on_progress: Callable[[int], None] | None = None,
) -> BeamPositionResult:
    """Run in its own folder, so its plots are the only PNG files there."""
    check_args("dials.search_beam_position", args)
    run_dir = join(processing_dir, SEARCH_DIR)
    shutil.rmtree(run_dir, ignore_errors=True)
    makedirs(run_dir)
    argv = [
        "dials.search_beam_position",
        expt,
        *([refl] if refl else []),
        *command_line(args),
    ]
    on_stdout = _ProgressParser(on_progress) if on_progress else None
    stdout, stderr = await run_command(argv, cwd=run_dir, on_stdout=on_stdout)
    log_path = join(run_dir, LOG_FILE)
    optimised = join(run_dir, OPTIMISED_EXPT)
    if not isfile(optimised):
        return BeamPositionResult(log=stderr or stdout, optimised_expt=None)
    if isfile(log_path):
        with open(log_path) as f:
            log = f.read()
    else:
        log = stdout
    pngs = sorted(glob(join(run_dir, "*.png")))
    return BeamPositionResult(
        log=log,
        optimised_expt=optimised,
        images=[(basename(p), _data_url(p)) for p in pngs[:MAX_IMAGES]],
        num_images=len(pngs),
    )
