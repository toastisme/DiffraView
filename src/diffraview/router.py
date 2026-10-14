"""Maps incoming command names to handler methods (see handlers/)."""

from __future__ import annotations

from dataclasses import dataclass
from enum import Enum


class Run(Enum):
    INLINE = "inline"  # awaited before the next message is read
    TASK = "task"  # becomes the cancellable active task
    BACKGROUND = "background"  # fire and forget


@dataclass(frozen=True)
class CommandSpec:
    name: str
    run: Run
    # GUI command that receives {"status": "Failed"} if the task raises
    status_target: str | None = None
    # Feature the experiment mode must provide (ExperimentMode.features)
    requires: str | None = None


def command(
    *names: str,
    run: Run = Run.BACKGROUND,
    status: str | None = None,
    requires: str | None = None,
):
    """Register a handler method, taking (self, msg), for one or more commands."""

    def decorator(fn):
        specs = getattr(fn, "_command_specs", ())
        fn._command_specs = specs + tuple(
            CommandSpec(n, run, status, requires) for n in names
        )
        return fn

    return decorator


def build_registry(obj) -> dict[str, tuple]:
    """{command name: (bound method, CommandSpec)} for all @command methods of obj."""
    registry = {}
    for cls in reversed(type(obj).__mro__):
        for attr_name, fn in vars(cls).items():
            for spec in getattr(fn, "_command_specs", ()):
                assert spec.name not in registry, f"Duplicate command {spec.name}"
                registry[spec.name] = (getattr(obj, attr_name), spec)
    return registry
