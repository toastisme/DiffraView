"""Cancelling a running step stops its processes and leaves the server usable."""

import asyncio
import os
import sys

from test_pipeline import connected_client, gui_key, viewer_got


def child_processes(parent_pid: int) -> list[int] | None:
    """All descendants of parent_pid, or None if they cannot be listed here."""
    try:
        import psutil
    except ImportError:
        psutil = None
    if psutil is not None:
        try:
            return [p.pid for p in psutil.Process(parent_pid).children(recursive=True)]
        except psutil.NoSuchProcess:
            return []
    if sys.platform.startswith("linux"):
        return _linux_child_processes(parent_pid)
    return None


def _linux_child_processes(parent_pid: int) -> list[int]:
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
            children.extend(_linux_child_processes(int(entry)))
    return children


async def wait_for_children(server_pid: int, timeout: float = 10) -> list[int] | None:
    """Child processes of the server once find_spots has started them."""
    deadline = asyncio.get_running_loop().time() + timeout
    while True:
        running = child_processes(server_pid)
        if running is None:
            await asyncio.sleep(2)
            return None
        if running or asyncio.get_running_loop().time() > deadline:
            return running
        await asyncio.sleep(0.2)


async def cancel_find_spots(nxs_path, server_pid, work_dir):
    async with connected_client() as c:
        await c.run_until_quiet("file.set_processing_root", paths=[str(work_dir)])
        await c.run_step(
            "workflow.run",
            "import",
            120,
            step="import",
            after=viewer_got("rlv", "new_experiment"),
            filenames=[str(nxs_path)],
            backend="DIALS",
        )
        await c.send(
            "workflow.run",
            step="find_spots",
            args={"threshold.algorithm": "dispersion_extended"},
        )
        try:
            running = await wait_for_children(server_pid)
        finally:
            # Always cancel, so a failure here cannot leave find_spots running
            # on the server shared with later tests
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
    assert ("find_spots", "Default") in updates
    assert reply == {"advancedOptions": ""}
    # Process checks need psutil or Linux /proc
    if running is not None:
        assert running, "find_spots was not running when cancelled"
        assert not remaining, f"processes left after cancel: {remaining}"
