"""Runs a backend command as a subprocess."""

from __future__ import annotations

import asyncio
import contextlib
import os
import shutil
import signal
import subprocess
import sys


async def run_command(argv: list[str], cwd: str) -> tuple[str, str]:
    """
    Run argv in cwd and return (stdout, stderr). If the calling task is
    cancelled the process and its children are killed before re-raising.
    """
    if sys.platform == "win32":
        group_kwargs = {"creationflags": subprocess.CREATE_NEW_PROCESS_GROUP}
    else:
        group_kwargs = {"start_new_session": True}

    process = await asyncio.create_subprocess_exec(
        # Windows only adds .exe to names without an extension, and
        # takes dials.import's extension to be .import
        shutil.which(argv[0]) or argv[0],
        *argv[1:],
        cwd=cwd,
        stdout=asyncio.subprocess.PIPE,
        stderr=asyncio.subprocess.PIPE,
        **group_kwargs,
    )
    try:
        stdout, stderr = await process.communicate()
    except asyncio.CancelledError:
        _kill_process_tree(process.pid)
        raise
    return stdout.decode(), stderr.decode()


def _kill_process_tree(pid: int) -> None:
    # Multiprocessing workers outlive their parent and hold its pipes open
    if sys.platform == "win32":
        subprocess.run(
            ["taskkill", "/F", "/T", "/PID", str(pid)], capture_output=True
        )
    else:
        with contextlib.suppress(ProcessLookupError):
            os.killpg(pid, signal.SIGTERM)
