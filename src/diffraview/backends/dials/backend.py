"""Runs processing steps with the dials.* command line programs."""

from __future__ import annotations

from dataclasses import dataclass
from os import remove
from os.path import isabs, isfile, join, relpath

from ...app_types import ExperimentType, SoftwareBackend
from ...processing.backend import Backend
from ...processing.runner import run_command
from ...processing.steps import StepId, StepInputs, StepOutputs, StepResult
from .params import check_args

# Text in stderr that means a run failed
_FAILURE_MESSAGES = (
    "error",
    "No suitable lattice could be found",
    "Sorry: ",
    "Unable to set joint_indexing automatically",
)
# dials.import reports bad arguments on stdout
_BAD_ARGUMENTS = "Unable to handle the following arguments"

_TOF_TYPES = (ExperimentType.TOF, ExperimentType.LAUE)


@dataclass(frozen=True)
class _Program:
    command: str
    log_file: str
    # Also removed when the step is reset
    extra_log_files: tuple[str, ...] = ()
    # None means the input expt is passed through
    output_expt: str | None = None
    output_refl: str | None = None
    # Passed before the step's args
    fixed_args: tuple[str, ...] = ()
    report_file: str | None = None


_PROGRAMS = {
    StepId.IMPORT: _Program(
        "dials.import", "dials.import.log", output_expt="imported.expt"
    ),
    StepId.FIND_SPOTS: _Program(
        "dials.find_spots", "dials.find_spots.log", output_refl="strong.refl"
    ),
    StepId.INDEX: _Program(
        "dials.index",
        "dials.index.log",
        extra_log_files=("dials.refine_bravais_settings.log", "dials.reindex.log"),
        output_expt="indexed.expt",
        output_refl="indexed.refl",
    ),
    StepId.REFINE_BRAVAIS_SETTINGS: _Program(
        "dials.refine_bravais_settings", "dials.refine_bravais_settings.log"
    ),
    StepId.REFINE: _Program(
        "dials.refine",
        "dials.refine.log",
        output_expt="refined.expt",
        output_refl="refined.refl",
    ),
    StepId.INTEGRATE: _Program(
        "dials.integrate",
        "dials.integrate.log",
        output_expt="integrated.expt",
        output_refl="integrated.refl",
    ),
    StepId.SYMMETRY: _Program(
        "dials.symmetry",
        "dials.symmetry.log",
        output_expt="symmetrized.expt",
        output_refl="symmetrized.refl",
    ),
    StepId.APPLY_SYMMETRY: _Program(
        "dials.reindex",
        "dials.reindex_symmetry.log",
        output_expt="symmetry_reindexed.expt",
        output_refl="symmetry_reindexed.refl",
        fixed_args=(
            "output.experiments=symmetry_reindexed.expt",
            "output.reflections=symmetry_reindexed.refl",
            "output.log=dials.reindex_symmetry.log",
        ),
    ),
    StepId.SCALE: _Program(
        "dials.scale",
        "dials.scale.log",
        output_expt="scaled.expt",
        output_refl="scaled.refl",
        report_file="dials.scale.html",
    ),
    StepId.EXPORT_SCALED: _Program(
        "dials.export",
        "dials.export_scaled.log",
        fixed_args=("output.log=dials.export_scaled.log",),
    ),
    StepId.MERGE: _Program(
        "dials.merge", "dials.merge.log", report_file="dials.merge.html"
    ),
    StepId.EXPORT: _Program("dials.export", "dials.export.log"),
}

# Steps only run for some experiment types
_ROTATION_ONLY = (StepId.SCALE, StepId.EXPORT_SCALED, StepId.MERGE)

_TOF_INTEGRATE = _Program(
    "dials.tof_integrate",
    "tof_integrate.log",
    output_expt="integrated.expt",
    output_refl="integrated.refl",
)

# Steps that pass their input files through as outputs
_PASS_THROUGH = (
    StepId.FIND_SPOTS,
    StepId.EXPORT_SCALED,
    StepId.MERGE,
    StepId.EXPORT,
)

# Mask for dials.integrate. dials.tof_integrate ignores it, so for that the mask
# is attached to its input experiments with dials.apply_mask instead
INTEGRATE_MASK_ARG = "integration.lookup.mask"
_MASKED_EXPT = "masked.expt"


class DIALSBackend(Backend):
    """Runs dials.* programs directly in the processing dir."""

    name = SoftwareBackend.DIALS

    def _program(self, step_id: StepId, experiment_type) -> _Program | None:
        if step_id == StepId.INTEGRATE and experiment_type in _TOF_TYPES:
            return _TOF_INTEGRATE
        return _PROGRAMS.get(step_id)

    def check_args(self, step_id, args, experiment_type) -> None:
        program = self._program(step_id, experiment_type)
        if program is None:
            raise ValueError(f"DIALS cannot run {step_id.value}")
        check_args(program.command, args)

    def supports(self, step_id, experiment_type) -> bool:
        # Reindexing is done by DiffraView itself
        if step_id in _ROTATION_ONLY and experiment_type != ExperimentType.ROTATION:
            return False
        return step_id in _PROGRAMS

    def log_file(self, step_id, experiment_type) -> str | None:
        program = self._program(step_id, experiment_type)
        return program.log_file if program else None

    def log_files(self, step_id, experiment_type) -> list[str]:
        program = self._program(step_id, experiment_type)
        if program is None:
            return []
        return [program.log_file, *program.extra_log_files]

    def report_file(self, step_id, experiment_type) -> str | None:
        program = self._program(step_id, experiment_type)
        return program.report_file if program else None

    async def run_step(
        self, step_id, inputs: StepInputs, args, processing_dir, experiment_type
    ) -> StepResult:
        program = self._program(step_id, experiment_type)
        input_files = inputs.images or [
            _relative(f, processing_dir) for f in (inputs.expt, inputs.refl) if f
        ]
        args = dict(args)
        masked_expt = None
        if program is _TOF_INTEGRATE and INTEGRATE_MASK_ARG in args:
            mask_argv = [
                "dials.apply_mask",
                input_files[0],
                f"input.mask={args.pop(INTEGRATE_MASK_ARG)}",
                f"output.experiments={_MASKED_EXPT}",
            ]
            stdout, stderr = await run_command(mask_argv, cwd=processing_dir)
            masked_expt = join(processing_dir, _MASKED_EXPT)
            if not isfile(masked_expt):
                return StepResult(
                    success=False, output=stderr or stdout, command=mask_argv
                )
            input_files = [_MASKED_EXPT] + input_files[1:]
        argv = (
            [program.command]
            + input_files
            + list(program.fixed_args)
            + [f"{name}={value}" for name, value in args.items()]
        )
        try:
            stdout, stderr = await run_command(argv, cwd=processing_dir)
        finally:
            if masked_expt is not None and isfile(masked_expt):
                remove(masked_expt)

        failed = _BAD_ARGUMENTS + ":" in stdout or any(
            message in stderr for message in _FAILURE_MESSAGES
        )
        if failed:
            return StepResult(
                success=False,
                output=self._error_text(step_id, stdout, stderr),
                command=argv,
            )

        if step_id in _PASS_THROUGH:
            outputs = StepOutputs(
                expt=_relative(inputs.expt, processing_dir),
                refl=_relative(inputs.refl, processing_dir) if inputs.refl else None,
            )
        else:
            outputs = StepOutputs()
        outputs.expt = program.output_expt or outputs.expt
        outputs.refl = program.output_refl or outputs.refl
        if outputs.expt is None and outputs.refl is None:
            outputs = None
        return StepResult(success=True, output=stdout, outputs=outputs, command=argv)

    @staticmethod
    def _error_text(step_id: StepId, stdout: str, stderr: str) -> str:
        if step_id == StepId.IMPORT and stdout:
            if "not found" in stdout:
                return stdout[: stdout.find("not found")] + "not found"
            if _BAD_ARGUMENTS in stdout and "usage" in stdout:
                return stdout[: stdout.find("usage")]
        return stderr


def recover_legacy_state(processing_dir: str) -> dict[StepId, StepOutputs] | None:
    """
    Step outputs of a processing dir without a manifest (made by DiffraView
    before manifests, or by running dials.* directly), found from DIALS file
    names. None if nothing was imported.
    """
    candidates = [
        (StepId.IMPORT, "imported.expt", None),
        (StepId.FIND_SPOTS, "imported.expt", "strong.refl"),
        (StepId.INDEX, "indexed.expt", "indexed.refl"),
        (StepId.REFINE, "refined.expt", "refined.refl"),
        (StepId.INTEGRATE, "integrated.expt", "integrated.refl"),
        (StepId.EXPORT, "integrated.expt", "integrated.refl"),
    ]

    def exists(filename):
        return isfile(join(processing_dir, filename))

    outputs = {}
    for step_id, expt, refl in candidates:
        # Reindexing after indexing replaces the indexed files
        if (
            step_id == StepId.INDEX
            and exists("reindexed.expt")
            and exists("reindexed.refl")
        ):
            expt, refl = "reindexed.expt", "reindexed.refl"
        if not exists(expt) or (refl is not None and not exists(refl)):
            break
        outputs[step_id] = StepOutputs(expt, refl)
    return outputs or None


def _relative(path: str, processing_dir: str) -> str:
    """path relative to processing_dir if it is inside it."""
    if not isabs(path):
        return path
    try:
        rel = relpath(path, processing_dir)
    except ValueError:  # different drive on Windows
        return path
    return path if rel.startswith("..") else rel
