"""
Parameters from the client are checked before they reach DIALS, and only
pages served from this machine can connect.
"""

import asyncio

import pytest
import websockets
from conftest import SERVER_URI
from test_pipeline import connected_client, last_params, state_seen

from diffraview.backends.dials.params import (
    ParameterError,
    check_args,
    command_line,
    parameter_definitions,
)
from diffraview.static_files import origin_allowed


def test_tab_args_accepted():
    # As the find spots tab sends them: suffixes of the full paths
    check_args(
        "dials.find_spots",
        {
            "threshold.algorithm": "dispersion_extended",
            "gain": "1.0",
            "kernel_size": "3,3",
            "min_local": 2,
            "spotfinder.filter.d_min": "None",
            "per_image_statistics": True,
            "region_of_interest": "0 100 0 100",
        },
    )
    check_args(
        "dials.index", {"space_group": "P 21 21 21", "unit_cell": "10,10,10,90,90,90"}
    )


@pytest.mark.parametrize(
    "args, message",
    [
        # DIALS would evaluate these as Python
        ({"gain": "__import__('os').getpid()"}, "not allowed"),
        ({"gain": "2*3"}, "not a number"),
        ({"spotfinder.filter.min_spot_size": "len(x)"}, "not a whole number"),
        # Phil syntax in a value
        ({"gain": "1\noutput.reflections=x"}, "not allowed"),
        ({"gain": "1 } output { log = x"}, "not allowed"),
        ({"no_such_parameter": "1"}, "has no parameter"),
        ({"d_min": "2"}, "could be any of"),
        ({"output.reflections": "/tmp/strong.refl"}, "set by DiffraView"),
        ({"output.log": "x.log"}, "set by DiffraView"),
        ({"spotfinder.lookup.mask": "/tmp/pixels.mask"}, "set by DiffraView"),
        ({"spotfinder.hot_mask_prefix": "../../hot"}, "plain text"),
        ({"threshold.algorithm": "other"}, "one of"),
        ({"per_image_statistics": "maybe"}, "True or False"),
        ({"gain": ["1"]}, "can only be given once"),
        ({"untrusted.circle": ["1 2 3", "1 2 x"]}, "list of whole numbers"),
        ({"untrusted.circle": [["1"]]}, "Unsupported value"),
        ({"gain; rm": "1"}, "Not a parameter name"),
    ],
)
def test_unsafe_args_rejected(args, message):
    with pytest.raises(ParameterError, match=message):
        check_args("dials.find_spots", args)


def test_repeated_args():
    args = {"untrusted.circle": ["1,2,3", "4 5 6"], "spotfinder.filter.d_min": "2"}
    check_args("dials.find_spots", args)
    assert command_line(args) == [
        "untrusted.circle=1,2,3",
        "untrusted.circle=4 5 6",
        "spotfinder.filter.d_min=2",
    ]


@pytest.mark.parametrize(
    "command, name",
    [
        ("dials.refine", "sauter_poon.pdf"),
        ("dials.integrate", "integration.debug.reference.filename"),
        ("dials.integrate", "background.gmodel.model"),
        ("dials.scale", "filtering.output.scale_and_filter_results"),
    ],
)
def test_file_names_rejected(command, name):
    with pytest.raises(ParameterError, match="names a file"):
        check_args(command, {name: "integrated.refl"})
    paths = {d["path"] for d in parameter_definitions(command)}
    assert not [p for p in paths if p.endswith(name)]


def test_param_definitions():
    by_path = {d["path"]: d for d in parameter_definitions("dials.find_spots")}
    assert not [p for p in by_path if p.startswith("output.")]
    assert "spotfinder.lookup.mask" not in by_path
    assert by_path["spotfinder.threshold.algorithm"]["choices"] == [
        "dispersion",
        "dispersion_extended",
        "radial_profile",
    ]
    assert by_path["spotfinder.threshold.algorithm"]["default"] == "dispersion_extended"
    assert by_path["spotfinder.filter.untrusted.circle"]["multiple"] is True
    assert by_path["spotfinder.filter.d_min"]["multiple"] is False


def test_input_paths_must_be_files(tmp_path):
    reference = tmp_path / "reference.mtz"
    with pytest.raises(ParameterError, match="not a file"):
        check_args("dials.merge", {"r_free_flags.reference": str(reference)})
    reference.write_bytes(b"")
    check_args("dials.merge", {"r_free_flags.reference": str(reference)})


@pytest.mark.parametrize(
    "origin, allowed",
    [
        (None, True),
        ("http://localhost:50011", True),
        ("http://127.0.0.1:50010", True),
        ("http://[::1]:50010", True),
        ("file://", True),
        ("null", False),
        ("https://example.com", False),
        ("http://localhost.example.com", False),
        ("http://127.0.0.1.example.com:50010", False),
    ],
)
def test_origins(origin, allowed):
    assert origin_allowed(origin) is allowed


def test_other_origins_refused(server):
    async def connect(origin):
        async with websockets.connect(SERVER_URI, origin=origin):
            return True

    with pytest.raises(websockets.InvalidStatus):
        asyncio.run(connect("https://example.com"))
    assert asyncio.run(connect("http://localhost:50011"))


def test_expression_not_run(server, tmp_path):
    marker = tmp_path / "ran"

    async def run_find_spots():
        async with connected_client() as c:
            return await c.run_until_quiet(
                "workflow.run",
                until=state_seen("find_spots", status="Failed"),
                step="find_spots",
                args={"gain": f"__import__('pathlib').Path('{marker}').touch()"},
            )

    gui_msgs, _ = asyncio.run(run_find_spots())
    assert "not allowed" in last_params(gui_msgs, "find_spots")["log"]
    assert not marker.exists()
