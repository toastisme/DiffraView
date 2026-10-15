"""Commands needing a mode feature are only run when the experiment provides it."""

import asyncio
from types import SimpleNamespace

import pytest

from diffraview.app_types import ExperimentType
from diffraview.server import DiffraViewServer


@pytest.fixture
def server(tmp_path, monkeypatch):
    monkeypatch.chdir(tmp_path)
    server = DiffraViewServer("127.0.0.1", "0")
    sent = []

    async def send(channel, msg, command=None):
        sent.append((channel, command, msg))

    server.send = send
    server.sent = sent
    return server


def load_mode(server, features):
    mode = SimpleNamespace(
        features=frozenset(features), experiment_type=ExperimentType.ROTATION
    )
    server.file_manager.selected_file = SimpleNamespace(mode=mode)


def test_missing_feature_reports_error(server):
    load_mode(server, features=[])
    asyncio.run(server.dispatch("tof.set_range", {}))
    assert server.sent == [
        (
            "gui",
            None,
            {
                "type": "session.error",
                "error": "tof.set_range is not available for ROTATION data",
            },
        )
    ]


def test_no_experiment_ignores_command(server):
    asyncio.run(server.dispatch("planner.set_dmin", {"dmin": "1"}))
    assert server.sent == []


def test_provided_feature_runs_handler(server):
    load_mode(server, features=["planner"])
    calls = []

    async def handler(msg):
        calls.append(msg)

    _, spec = server.commands["planner.set_dmin"]
    server.commands["planner.set_dmin"] = (handler, spec)
    msg = {"dmin": "1"}

    async def run():
        await server.dispatch("planner.set_dmin", msg)
        await asyncio.sleep(0)

    asyncio.run(run())
    assert calls == [msg]
    assert server.sent == []


def test_legacy_viewer_command_parsed():
    from diffraview.protocol import parse_server_message

    msg_type, payload = parse_server_message(
        {"channel": "server", "command": "clicked_on_panel", "panel_idx": 1}
    )
    assert msg_type == "lineplot.update"
    assert payload == {"panel_idx": 1}
