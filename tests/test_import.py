import asyncio
import contextlib
import json

import pytest
import websockets

from conftest import SERVER_URI

VIEWER_IDS = ["experiment_viewer", "rlv", "experiment_planner", "shoebox_viewer"]


@contextlib.asynccontextmanager
async def connected_server():
    """
    Open all required WebSocket connections and register them with the server.

    The server routes responses by stored connection ID, so all five connections
    (gui + four viewers) must be registered before any command is sent,
    otherwise clear_experiment() raises a KeyError and the task silently dies.
    """
    async with websockets.connect(SERVER_URI) as gui_ws:
        viewer_connections = [await websockets.connect(SERVER_URI) for _ in VIEWER_IDS]
        try:
            await gui_ws.send(
                json.dumps(
                    {
                        "channel": "server",
                        "type": "session.connect",
                        "payload": {"id": "gui"},
                    }
                )
            )
            for ws, viewer_id in zip(viewer_connections, VIEWER_IDS):
                await ws.send(
                    json.dumps(
                        {
                            "channel": "server",
                            "type": "session.connect",
                            "payload": {"id": viewer_id},
                        }
                    )
                )

            yield gui_ws
        finally:
            for ws in viewer_connections:
                await ws.close()


@pytest.mark.asyncio
async def test_import_sxd_nacl(server, sxd_nacl_nxs):
    """
    Import a real SXD NaCl NeXus file and verify the log output
    shown in the Import tab is non-empty and the import succeeded.
    """
    async with connected_server() as gui_ws:
        await gui_ws.send(
            json.dumps(
                {
                    "channel": "server",
                    "type": "workflow.run",
                    "payload": {
                        "step": "import",
                        "filenames": [str(sxd_nacl_nxs)],
                        "backend": "DIALS",
                    },
                }
            )
        )

        import_params = {}
        root_params = {}

        async with asyncio.timeout(120):
            async for raw in gui_ws:
                msg = json.loads(raw)
                target = msg.get("target")

                if target == "import":
                    import_params.update(msg["params"])
                    if import_params.get("status") in ("Default", "Failed"):
                        break

                elif target == "root":
                    root_params.update(msg["params"])

    status = import_params.get("status")
    log = import_params.get("log", "")

    assert status == "Default", (
        f"Import did not succeed (status={status!r}).\nLog:\n{log}"
    )
    assert log, "Expected non-empty log output in Import tab"
    assert root_params.get("numExperiments", 0) > 0, (
        "Expected at least one experiment after import"
    )
