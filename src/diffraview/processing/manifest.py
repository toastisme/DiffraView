"""
diffraview_state.json in a processing dir: which backend ran each step, with
what arguments, and the DIALS files it produced, plus user-edited experiment
descriptions, for a folder made from another program's run (e.g. xia2) its
source, and the mask drawn in the experiment viewer.
"""

from __future__ import annotations

import json
from os.path import isfile, join

from ..app_types import SoftwareBackend
from .steps import Step, StepId, StepOutputs

MANIFEST_FILENAME = "diffraview_state.json"
VERSION = 1


def save(
    processing_dir: str,
    steps: dict[StepId, Step],
    descriptions: dict[str, dict[str, str]] | None = None,
    source: dict | None = None,
    mask: dict | None = None,
):
    records = {}
    for step_id, step in steps.items():
        if step.outputs is None:
            continue
        records[step_id.value] = {
            "backend": step.backend.value,
            "args": step.args,
            "command": step.command,
            "outputs": {"expt": step.outputs.expt, "refl": step.outputs.refl},
        }
    content = {
        "version": VERSION,
        "steps": records,
    }
    if descriptions:
        content["descriptions"] = descriptions
    if source:
        content["source"] = source
    if mask:
        content["mask"] = mask
    with open(join(processing_dir, MANIFEST_FILENAME), "w") as f:
        json.dump(content, f, indent=4)


def _read(processing_dir: str) -> dict | None:
    path = join(processing_dir, MANIFEST_FILENAME)
    if not isfile(path):
        return None
    with open(path) as f:
        return json.load(f)


def load(processing_dir: str) -> dict[StepId, Step] | None:
    """Recorded steps, or None if there is no manifest."""
    content = _read(processing_dir)
    if content is None:
        return None
    steps = {}
    for name, record in content["steps"].items():
        step_id = StepId(name)
        steps[step_id] = Step(
            step_id,
            args=record["args"],
            backend=SoftwareBackend(record["backend"]),
            outputs=StepOutputs(**record["outputs"]),
            command=record["command"],
        )
    return steps


def load_descriptions(processing_dir: str) -> dict[str, dict[str, str]]:
    """User-edited descriptions by experiment index ({"instrument", "experiment"})."""
    content = _read(processing_dir)
    if content is None:
        return {}
    return content.get("descriptions", {})


def load_source(processing_dir: str) -> dict | None:
    """The run the folder was made from, if any."""
    content = _read(processing_dir)
    if content is None:
        return None
    return content.get("source")


def load_mask(processing_dir: str) -> dict | None:
    """Stored mask ({"file", "polygons"}), if any."""
    content = _read(processing_dir)
    if content is None:
        return None
    return content.get("mask")
