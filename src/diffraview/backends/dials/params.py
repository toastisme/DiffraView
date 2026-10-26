"""
Checks parameters from the client before they reach a DIALS program.
DIALS evaluates numeric values as Python expressions, so
values are matched against their type here and never evaluated.
"""

from __future__ import annotations

import functools
import importlib
import os
import re

_NAME = re.compile(r"[A-Za-z_][A-Za-z0-9_]*(\.[A-Za-z_][A-Za-z0-9_]*)*")
_NUMBER = re.compile(r"[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?")
_INTEGER = re.compile(r"[+-]?\d+")
# Strings: no path separators (e.g. spotfinder.hot_mask_prefix)
_STRING = re.compile(r"[A-Za-z0-9_.,:+\- ]*")
_SPACE_GROUP = re.compile(r"[A-Za-z0-9_.,:+\-/() ]*")
_UNSET = {"none", "auto"}
_BOOLEAN = {"true", "false", "yes", "no", "1", "0"}
_MAX_VALUE_LENGTH = 1000
# Set only by DiffraView (output files, masks, ...)
_BLOCKED_SCOPES = ("output",)
_BLOCKED_TYPES = ("path",)
_BLOCKED_SUFFIXES = ("lookup.mask",)
# Paths the tabs may set: files the program reads, which must exist
_INPUT_PATHS = {"dials.merge": {"r_free_flags.reference"}}


class ParameterError(ValueError):
    pass


def check_args(command: str, args: dict) -> None:
    """
    Raises ParameterError if any of args is not safe to pass to command.
    A list value gives a parameter that can be repeated more than once.
    """
    if not args:
        return
    definitions = _definitions(command)
    for name, value in args.items():
        definition = _resolve(command, definitions, str(name))
        path = definition.full_path()
        phil_type = str(definition.type.phil_type)
        if isinstance(value, list):
            if not _multiple(definition):
                raise ParameterError(f"{path} can only be given once")
            values = value
        else:
            values = [value]
        if path in _INPUT_PATHS.get(command, ()):
            for v in values:
                _check_input_path(path, _as_text(v))
            continue
        if _blocked(path, phil_type):
            raise ParameterError(f"{path} is set by DiffraView, not in the options")
        for v in values:
            _check_value(path, phil_type, definition, _as_text(v))


def command_line(args: dict) -> list[str]:
    """name=value arguments, one for each value of a repeated parameter."""
    return [
        f"{name}={v}"
        for name, value in args.items()
        for v in (value if isinstance(value, list) else [value])
    ]


def full_path(command: str, name: str) -> str | None:
    """The full path of the parameter name refers to, if exactly one."""
    try:
        return _resolve(command, _definitions(command), name).full_path()
    except ParameterError:
        return None


def parameter_definitions(
    command: str, hidden: tuple[str, ...] = (), exclude: set = frozenset()
) -> list[dict]:
    """
    Parameters of command the client can search for, except those set by
    DiffraView, those in exclude and those whose path starts with any of hidden.
    """
    result = []
    for path, d in _definitions(command).items():
        phil_type = str(d.type.phil_type)
        if _blocked(path, phil_type) or path in exclude or path.startswith(hidden):
            continue
        words = [str(w.value) for w in d.words or []]
        if phil_type == "choice":
            choices = [w.lstrip("*") for w in words]
            default = next((w[1:] for w in words if w.startswith("*")), "")
        else:
            choices = []
            default = " ".join(words)
        result.append(
            {
                "path": path,
                "type": phil_type,
                "help": " ".join((d.help or "").split()),
                "default": default,
                "choices": choices,
                "multiple": _multiple(d),
                "expertLevel": d.expert_level or 0,
            }
        )
    return result


def _blocked(path: str, phil_type: str) -> bool:
    return (
        path.split(".")[0] in _BLOCKED_SCOPES
        or phil_type in _BLOCKED_TYPES
        or path.endswith(_BLOCKED_SUFFIXES)
    )


def _multiple(definition) -> bool:
    """Whether the definition, or a scope it is in, can be repeated."""
    obj = definition
    while obj is not None:
        if obj.multiple:
            return True
        obj = obj.primary_parent_scope
    return False


def _as_text(value) -> str:
    if isinstance(value, bool):
        return str(value)
    if isinstance(value, (int, float)):
        return repr(value)
    if not isinstance(value, str):
        raise ParameterError(f"Unsupported value {value!r}")
    return value


@functools.cache
def _definitions(command: str) -> dict:
    """{full path: definition} of command's parameters."""
    name = command.removeprefix("dials.")
    module_name = "dials_import" if name == "import" else name
    try:
        module = importlib.import_module(f"dials.command_line.{module_name}")
        scope = module.phil_scope
    except (ImportError, AttributeError) as e:
        raise ParameterError(f"Cannot check the parameters of {command}: {e}")
    definitions = {}

    def walk(scope):
        for obj in scope.objects:
            if obj.is_definition:
                definitions[obj.full_path()] = obj
            else:
                walk(obj)

    walk(scope)
    return definitions


def _resolve(command: str, definitions: dict, name: str):
    """The definition name refers to: its full path, or a unique dotted suffix (as DIALS)."""
    if not _NAME.fullmatch(name):
        raise ParameterError(f"Not a parameter name: {name!r}")
    if name in definitions:
        return definitions[name]
    matches = [d for path, d in definitions.items() if path.endswith("." + name)]
    if not matches:
        raise ParameterError(f"{command} has no parameter {name}")
    if len(matches) > 1:
        paths = ", ".join(sorted(d.full_path() for d in matches))
        raise ParameterError(f"{name} could be any of {paths}")
    return matches[0]


def _check_input_path(path: str, value: str) -> None:
    if not value.strip():
        return
    # Backslashes allowed, for Windows paths
    if any(c in value for c in "\n\r{}\"'=#$;`!"):
        raise ParameterError(f"{path}: {value!r} contains characters not allowed")
    if not os.path.isfile(value):
        raise ParameterError(f"{path}: {value} is not a file")


def _check_value(path: str, phil_type: str, definition, value: str) -> None:
    if len(value) > _MAX_VALUE_LENGTH:
        raise ParameterError(f"{path}: value is too long")
    if any(c in value for c in "\n\r{}\"'=#$;`\\!"):
        raise ParameterError(f"{path}: {value!r} contains characters not allowed")
    stripped = value.strip()
    if stripped.lower() in _UNSET:
        return
    tokens = [t for t in re.split(r"[\s,]+", stripped) if t]

    def fail(expected: str):
        raise ParameterError(f"{path}: {value!r} is not {expected}")

    match phil_type:
        case "float":
            if len(tokens) != 1 or not _NUMBER.fullmatch(tokens[0]):
                fail("a number")
        case "int":
            if len(tokens) != 1 or not _INTEGER.fullmatch(tokens[0]):
                fail("a whole number")
        case "floats" | "unit_cell":
            if not tokens or not all(_NUMBER.fullmatch(t) for t in tokens):
                fail("a list of numbers")
        case "ints":
            if not tokens or not all(_INTEGER.fullmatch(t) for t in tokens):
                fail("a list of whole numbers")
        case "bool":
            if stripped.lower() not in _BOOLEAN:
                fail("True or False")
        case "choice":
            choices = {w.value.lstrip("*") for w in definition.words}
            chosen = [t.lstrip("*") for t in re.split(r"[\s+]+", stripped) if t]
            if not chosen or not all(c in choices for c in chosen):
                fail("one of " + ", ".join(sorted(choices)))
        case "str" | "strings" | "qstr":
            if not _STRING.fullmatch(stripped):
                fail("plain text (letters, numbers and _ . , : + -)")
        case "space_group":
            if not _SPACE_GROUP.fullmatch(stripped):
                fail("a space group")
        case _:
            raise ParameterError(f"{path}: {phil_type} values are not supported")
