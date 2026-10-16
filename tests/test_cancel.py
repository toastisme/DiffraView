"""Cancelling a running step stops its processes and leaves the server usable."""

import asyncio
import os

from test_pipeline import connected_client, gui_key


def child_processes(parent_pid: int) -> list[int]:
    """All descendants of parent_pid (Linux /proc)."""
    children = []
    for entry in os.listdir("/proc"):
        if not entry.isdigit():
            continue
        try:
            with open(f"/proc/{entry}/stat") as f:
                ppid = int(f.read().rsplit(")", 1)[1].split()[1])
        except (OSError, IndexError, ValueError):
            continue
        if ppid == parent_pid:
            children.append(int(entry))
            children.extend(child_processes(int(entry)))
    return children


async def cancel_find_spots(nxs_path, server_pid, work_dir):
    async with connected_client() as c:
        await c.run_until_quiet("file.set_processing_root", paths=[str(work_dir)])
        await c.run_step(
            "workflow.run",
            "import",
            120,
            step="import",
            filenames=[str(nxs_path)],
            backend="DIALS",
        )
        await c.send(
            "workflow.run",
            step="find_spots",
            args={"threshold.algorithm": "dispersion_extended"},
        )
        await asyncio.sleep(2)
        running = child_processes(server_pid)
        msgs, _ = await c.run_until_quiet("session.cancel")
        await asyncio.sleep(1)
        remaining = child_processes(server_pid)
        reply = await c.request(
            "workflow.load_params", "refine", step="refine", paths=[os.devnull]
        )
    return running, msgs, remaining, reply


def test_cancel_find_spots(server, sxd_nacl_nxs, tmp_path):
    running, msgs, remaining, reply = asyncio.run(
        cancel_find_spots(sxd_nacl_nxs, server.pid, tmp_path)
    )
    updates = [(gui_key(m), m.get("params", {}).get("status")) for m in msgs]
    assert running, "find_spots was not running when cancelled"
    assert ("find_spots", "Default") in updates
    assert not remaining, f"processes left after cancel: {remaining}"
    assert reply == {"advancedOptions": ""}
