import os
import shutil
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
DATA_DIR = Path(os.environ.get("DIFFRAVIEW_TEST_DATA", Path(__file__).parent / "data"))


def _download(url, dest, attempts=5):
    """Download with retries, via a .part file so dest is never truncated."""
    part = dest.with_name(dest.name + ".part")
    for attempt in range(1, attempts + 1):
        try:
            with urllib.request.urlopen(url, timeout=60) as r, open(part, "wb") as f:
                shutil.copyfileobj(r, f)
                size = int(r.headers.get("Content-Length", -1))
            if size >= 0 and part.stat().st_size != size:
                raise OSError(f"got {part.stat().st_size} of {size} bytes")
            part.replace(dest)
            return
        except OSError as e:
            print(f"Download of {url} failed (attempt {attempt}/{attempts}): {e}")
            if attempt == attempts:
                raise
            time.sleep(10 * attempt)


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
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    dest = DATA_DIR / "sxd_nacl_run.nxs"
    if not dest.exists():
        _download("https://zenodo.org/records/4415768/files/sxd_nacl_run.nxs", dest)
    return dest


@pytest.fixture(scope="session")
def centroid_images():
    """The dials_data centroid_test_data X-ray rotation images (9 CBFs)."""
    data_dir = DATA_DIR / "dials_data"
    dest = data_dir / "centroid_test_data"
    images = sorted(dest.glob("centroid_*.cbf"))
    if not images:
        data_dir.mkdir(parents=True, exist_ok=True)
        subprocess.run(
            [shutil.which("dials.data"), "get", "centroid_test_data"],
            env={**os.environ, "DIALS_DATA": str(data_dir)},
            check=True,
        )
        images = sorted(dest.glob("centroid_*.cbf"))
    return images
