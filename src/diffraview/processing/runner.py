"""Runs a backend command as a subprocess."""

from __future__ import annotations

import asyncio
import codecs
import contextlib
import os
import shutil
import signal
import subprocess
import sys
from typing import Callable


async def run_command(
    argv: list[str], cwd: str, on_stdout: Callable[[str], None] | None = None
) -> tuple[str, str]:
    """
    Run argv in cwd and return (stdout, stderr). If the calling task is
    cancelled the process and its children are killed before re-raising.
    on_stdout is passed stdout as it is written (Python unbuffered).
    """
    if sys.platform == "win32":
        # No console window per command when run from pythonw
        group_kwargs = {
            "creationflags": subprocess.CREATE_NEW_PROCESS_GROUP
            | subprocess.CREATE_NO_WINDOW
        }
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
        env={**os.environ, "PYTHONUNBUFFERED": "1"} if on_stdout else None,
        **group_kwargs,
    )
    try:
        if on_stdout is None:
            stdout, stderr = await process.communicate()
        else:
            stdout, stderr = await asyncio.gather(
                _read(process.stdout, on_stdout), _read(process.stderr)
            )
            await process.wait()
    except asyncio.CancelledError:
        _kill_process_tree(process.pid)
        raise
    return stdout.decode(), stderr.decode()


async def _read(stream, on_text: Callable[[str], None] | None = None) -> bytes:
    chunks = []
    decoder = codecs.getincrementaldecoder("utf-8")(errors="replace")
    while chunk := await stream.read(4096):
        chunks.append(chunk)
        if on_text is not None:
            on_text(decoder.decode(chunk))
    return b"".join(chunks)


def _kill_process_tree(pid: int) -> None:
    # Multiprocessing workers outlive their parent and hold its pipes open
    if sys.platform == "win32":
        subprocess.run(
            ["taskkill", "/F", "/T", "/PID", str(pid)],
            capture_output=True,
            creationflags=subprocess.CREATE_NO_WINDOW,
        )
    else:
        with contextlib.suppress(ProcessLookupError):
            os.killpg(pid, signal.SIGTERM)
