import socket
import subprocess
import sys
import time
import urllib.request
from pathlib import Path

import pytest


def _free_port():
    with socket.socket() as s:
        s.bind(("127.0.0.1", 0))
        return s.getsockname()[1]


SERVER_PORT = _free_port()
SERVER_URI = f"ws://127.0.0.1:{SERVER_PORT}/"
DATA_DIR = Path(__file__).parent / "data"


@pytest.fixture(scope="session")
def server():
    """Start the WebSocket server for the duration of the test session."""
    proc = subprocess.Popen(
        [sys.executable, "-m", "diffraview.server", "127.0.0.1", str(SERVER_PORT)],
        cwd=Path(__file__).parent.parent,
    )
    time.sleep(3)
    yield proc
    proc.terminate()
    proc.wait()


@pytest.fixture(scope="session")
def sxd_nacl_nxs():
    """Download the SXD NaCl NeXus file once per session."""
    DATA_DIR.mkdir(exist_ok=True)
    dest = DATA_DIR / "sxd_nacl_run.nxs"
    if not dest.exists():
        urllib.request.urlretrieve(
            "https://zenodo.org/records/4415768/files/sxd_nacl_run.nxs",
            dest,
        )
    return dest
