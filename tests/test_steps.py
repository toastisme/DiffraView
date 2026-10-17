"""
Step bookkeeping in ActiveFile, without the server: recovering folders made
before manifests, and steps run by different backends following each other.
"""

import asyncio
import json
import os
import shutil
import subprocess
from pathlib import Path

import pytest

from diffraview import active_file as active_file_module
from diffraview.active_file import ActiveFile
from diffraview.algorithm_status import AlgorithmStatus
from diffraview.app_types import SoftwareBackend, Status
from diffraview.backends.dials.backend import DIALSBackend
from diffraview.processing.backend import Backend
from diffraview.processing.manifest import MANIFEST_FILENAME
from diffraview.processing.steps import StepId, StepOutputs, StepResult
from diffraview.utils import add_environment_to_path


def dials(command, *args, cwd):
    # As the server runs them: found on PATH, via shutil.which on Windows
    add_environment_to_path()
    exe = shutil.which(command) or command
    subprocess.run([exe, *args], cwd=cwd, check=True, capture_output=True)


@pytest.fixture(scope="session")
def dials_refined_dir(tmp_path_factory, sxd_nacl_nxs):
    """Processing dir made by running dials.* directly, up to refine."""
    folder = tmp_path_factory.mktemp("dials_refined")
    dials("dials.import", str(sxd_nacl_nxs), cwd=folder)
    dials("dials.find_spots", "imported.expt", cwd=folder)
    dials(
        "dials.index",
        "imported.expt",
        "strong.refl",
        "joint_indexing=True",
        cwd=folder,
    )
    dials(
        "dials.refine",
        "indexed.expt",
        "indexed.refl",
        "refinement.parameterisation.goniometer.fix=all",
        cwd=folder,
    )
    return folder


@pytest.fixture
def processing_dir(dials_refined_dir, tmp_path):
    folder = tmp_path / "processing"
    shutil.copytree(dials_refined_dir, folder)
    return folder


def open_folder(folder):
    return ActiveFile(
        file_dir=None,
        filenames=None,
        file_key="test",
        software_backend="DIALS",
        processing_dir=str(folder),
    )


class FakeXDSBackend(Backend):
    """Refines by copying its inputs into xds/, as a converting backend would."""

    name = SoftwareBackend.XDS

    def supports(self, step_id, experiment_type):
        return step_id == StepId.REFINE

    def log_file(self, step_id, experiment_type):
        return None

    def log_files(self, step_id, experiment_type):
        return ["xds/fake.log"]

    async def run_step(self, step_id, inputs, args, processing_dir, experiment_type):
        work_dir = os.path.join(processing_dir, "xds")
        os.makedirs(work_dir, exist_ok=True)
        shutil.copy(inputs.expt, os.path.join(work_dir, "refined.expt"))
        shutil.copy(inputs.refl, os.path.join(work_dir, "refined.refl"))
        return StepResult(
            success=True,
            output="refined",
            outputs=StepOutputs("xds/refined.expt", "xds/refined.refl"),
            command=["fake_xds"],
        )


@pytest.fixture
def fake_xds(monkeypatch):
    def get_backend(name):
        return FakeXDSBackend() if name == SoftwareBackend.XDS else DIALSBackend()

    monkeypatch.setattr(active_file_module, "get_backend", get_backend)


def test_legacy_folder_recovered(processing_dir):
    af = open_folder(processing_dir)

    assert af.get_last_successful_step() == StepId.REFINE
    assert Path(af.current_expt_file) == processing_dir / "refined.expt"
    assert Path(af.current_refl_file) == processing_dir / "refined.refl"
    assert af.steps[StepId.INDEX].backend == SoftwareBackend.DIALS
    inputs = af.step_inputs(StepId.INTEGRATE)
    assert Path(inputs.expt) == processing_dir / "refined.expt"
    assert not (processing_dir / MANIFEST_FILENAME).exists()


def test_step_run_by_other_backend(processing_dir, fake_xds):
    af = open_folder(processing_dir)

    asyncio.run(af.run(StepId.REFINE, SoftwareBackend.XDS))

    assert af.last_algorithm_status == AlgorithmStatus.finished
    refine = af.steps[StepId.REFINE]
    assert refine.backend == SoftwareBackend.XDS
    assert Path(af.current_refl_file) == processing_dir / "xds/refined.refl"
    # The DIALS refine output it replaced is removed
    assert not (processing_dir / "refined.refl").exists()
    # The next step reads the XDS step's files
    inputs = af.step_inputs(StepId.INTEGRATE)
    assert Path(inputs.expt) == processing_dir / "xds/refined.expt"

    with open(processing_dir / MANIFEST_FILENAME) as f:
        records = json.load(f)["steps"]
    assert records["refine"]["backend"] == "XDS"
    assert records["index"]["backend"] == "DIALS"

    reopened = open_folder(processing_dir)
    assert reopened.steps[StepId.REFINE].backend == SoftwareBackend.XDS
    assert reopened.get_last_successful_step() == StepId.REFINE
    assert Path(reopened.current_refl_file) == processing_dir / "xds/refined.refl"


def test_rerunning_step_resets_later_steps(processing_dir, fake_xds):
    af = open_folder(processing_dir)
    asyncio.run(af.run(StepId.REFINE, SoftwareBackend.XDS))

    # Reindexing in DiffraView replaces the index outputs
    shutil.copy(processing_dir / "indexed.expt", processing_dir / "reindexed.expt")
    shutil.copy(processing_dir / "indexed.refl", processing_dir / "reindexed.refl")
    af.set_step_outputs(StepId.INDEX, StepOutputs("reindexed.expt", "reindexed.refl"))
    assert Path(af.step_inputs(StepId.REFINE).refl) == processing_dir / "reindexed.refl"

    af._post_process_algorithm(StepId.INDEX, {})

    assert af.steps[StepId.REFINE].outputs is None
    assert not (processing_dir / "xds/refined.refl").exists()
    assert af.get_last_successful_step() == StepId.INDEX


def test_unsupported_step_fails(processing_dir, fake_xds):
    af = open_folder(processing_dir)

    asyncio.run(af.run(StepId.INDEX, SoftwareBackend.XDS))

    assert af.last_algorithm_status == AlgorithmStatus.failed
    assert af.steps[StepId.INDEX].status == Status.Failed
    assert "XDS cannot run index" in af.steps[StepId.INDEX].log
    assert af.steps[StepId.INDEX].backend == SoftwareBackend.DIALS


def test_unavailable_backend_fails(processing_dir):
    af = open_folder(processing_dir)

    asyncio.run(af.run(StepId.REFINE, "MANTID"))

    assert af.last_algorithm_status == AlgorithmStatus.failed
    assert af.steps[StepId.REFINE].log == "MANTID is not available"
