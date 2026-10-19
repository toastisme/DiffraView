"""Maps incoming message types to handler methods (see handlers/)."""

from __future__ import annotations

from dataclasses import dataclass
from enum import Enum
from typing import Callable


class Run(Enum):
    INLINE = "inline"  # awaited before the next message is read
    TASK = "task"  # becomes the cancellable active task
    BACKGROUND = "background"  # fire and forget


@dataclass(frozen=True)
class CommandSpec:
    name: str
    run: Run
    # GUI target that receives {"status": "Failed"} if the task raises;
    # a function of the payload when it depends on it
    status: str | Callable[[dict], str] | None = None
    # Feature the experiment mode must provide (ExperimentMode.features)
    requires: str | None = None
    # Without the feature, ignore the message instead of reporting an error
    optional: bool = False


def command(
    *names: str,
    run: Run = Run.BACKGROUND,
    status: str | Callable[[dict], str] | None = None,
    requires: str | None = None,
    optional: bool = False,
):
    """Register a handler method, taking (self, payload), for one or more types."""

    def decorator(fn):
        specs = getattr(fn, "_command_specs", ())
        fn._command_specs = specs + tuple(
            CommandSpec(n, run, status, requires, optional) for n in names
        )
        return fn

    return decorator


def build_registry(obj) -> dict[str, tuple]:
    """{message type: (bound method, CommandSpec)} for all @command methods of obj."""
    registry = {}
    for cls in reversed(type(obj).__mro__):
        for attr_name, fn in vars(cls).items():
            for spec in getattr(fn, "_command_specs", ()):
                assert spec.name not in registry, f"Duplicate type {spec.name}"
                registry[spec.name] = (getattr(obj, attr_name), spec)
    return registry


def status_target(spec: CommandSpec, payload: dict) -> str | None:
    return spec.status(payload) if callable(spec.status) else spec.status
