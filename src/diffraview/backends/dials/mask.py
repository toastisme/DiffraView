"""Pixel masks from polygons drawn in the experiment viewer (dials.generate_mask)."""

from __future__ import annotations

from os import remove
from os.path import isfile, join, relpath

from ...processing.runner import run_command

MASK_PHIL = "mask.phil"
MASK_FILE = "pixels.mask"


def mask_phil(polygons: list[dict]) -> str:
    """untrusted scopes for polygons [{"panel", "points": [[fast, slow], ...]}]."""
    blocks = []
    for polygon in polygons:
        coords = " ".join(
            f"{max(round(x), 0)} {max(round(y), 0)}" for x, y in polygon["points"]
        )
        blocks.append(
            f"untrusted {{\n  panel = {int(polygon['panel'])}\n"
            f"  polygon = {coords}\n}}\n"
        )
    return "".join(blocks)


async def generate_mask(expt: str, polygons: list[dict], processing_dir: str) -> str:
    """Write MASK_FILE masking polygons; returns its name in processing_dir."""
    with open(join(processing_dir, MASK_PHIL), "w") as f:
        f.write(mask_phil(polygons))
    mask_path = join(processing_dir, MASK_FILE)
    if isfile(mask_path):
        remove(mask_path)
    argv = [
        "dials.generate_mask",
        relpath(expt, processing_dir),
        MASK_PHIL,
        f"output.mask={MASK_FILE}",
    ]
    stdout, stderr = await run_command(argv, cwd=processing_dir)
    if not isfile(mask_path):
        raise RuntimeError(f"dials.generate_mask failed:\n{stderr or stdout}")
    return MASK_FILE


def remove_mask(processing_dir: str) -> None:
    for filename in (MASK_PHIL, MASK_FILE, "dials.generate_mask.log"):
        path = join(processing_dir, filename)
        if isfile(path):
            remove(path)
