"""
`diffraview` command: starts the DiffraView server in this (DIALS) Python
environment and opens the client, either in the packaged Electron desktop app
or in the default web browser.

    diffraview [processing_dir] [--browser]
"""

import argparse
import asyncio
import os
import socket
import sys
import threading
import time
import webbrowser

SERVER_ADDR = "127.0.0.1"
# Used if free, otherwise any free port is chosen. The client and its viewers
# are told which port via ?port=<n> on their URL.
DEFAULT_PORT = 50010


def find_free_port(addr, preferred):
    """`preferred` if it can be bound, otherwise a free port chosen by the OS."""
    for port in (preferred, 0):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            try:
                s.bind((addr, port))
            except OSError:
                continue
            return s.getsockname()[1]
    raise RuntimeError("no free port available")


def port_in_use(addr, port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.settimeout(0.25)
        return s.connect_ex((addr, port)) == 0


def wait_for_port(addr, port, timeout):
    deadline = time.monotonic() + timeout
    while time.monotonic() < deadline:
        if port_in_use(addr, port):
            return True
        time.sleep(0.25)
    return False


def find_desktop_app():
    """
    Packaged Electron executable, if one is installed alongside this package
    (e.g. by a diffraview-desktop conda package) or named by
    DIFFRAVIEW_ELECTRON.
    """
    candidates = [
        os.environ.get("DIFFRAVIEW_ELECTRON"),
        os.path.join(sys.prefix, "libexec", "diffraview", "diffraview"),
    ]
    for candidate in candidates:
        if candidate and os.path.isfile(candidate) and os.access(candidate, os.X_OK):
            return candidate
    return None


async def run_server(server, port, desktop_app):
    server_task = asyncio.create_task(server.run())
    if desktop_app is None:
        await server_task
        return

    while not port_in_use(SERVER_ADDR, port):
        if server_task.done():
            await server_task  # re-raise the startup error
        await asyncio.sleep(0.25)

    # Electron's setuid chrome-sandbox can't be installed by conda/pip, so
    # Chromium's sandbox has to be disabled on Linux.
    env = dict(os.environ, DIFFRAVIEW_SERVER_PORT=str(port))
    app = await asyncio.create_subprocess_exec(desktop_app, "--no-sandbox", env=env)
    await app.wait()
    server_task.cancel()


def main():
    parser = argparse.ArgumentParser(
        prog="diffraview",
        description="Process and visualise diffraction data with DIALS.",
    )
    parser.add_argument(
        "processing_dir", nargs="?", help="processing folder to open on startup"
    )
    parser.add_argument(
        "--browser",
        action="store_true",
        help="open in the default web browser instead of the desktop app",
    )
    args = parser.parse_args()

    processing_dir = None
    if args.processing_dir:
        processing_dir = os.path.realpath(args.processing_dir)
        if not os.path.isdir(processing_dir):
            parser.error(f"directory not found: {processing_dir}")

    port = find_free_port(SERVER_ADDR, DEFAULT_PORT)

    desktop_app = None if args.browser else find_desktop_app()
    if not args.browser and desktop_app is None:
        print("DiffraView desktop app not found, opening in the web browser instead.")

    # Imported here so --help and argument errors don't wait on DIALS imports.
    from .server import DIALSServer
    from .static_files import web_client_available

    url = f"http://{SERVER_ADDR}:{port}/"
    if desktop_app is None:
        if not web_client_available():
            sys.exit(
                "Error: the DiffraView web client is not included in this "
                "installation (run `npm run build:web` in client/ and reinstall)."
            )

        def open_browser():
            if wait_for_port(SERVER_ADDR, port, timeout=60):
                print(f"DiffraView is running at {url}. Press Ctrl+C to stop.")
                webbrowser.open(url)

        threading.Thread(target=open_browser, daemon=True).start()

    server = DIALSServer(
        server_addr=SERVER_ADDR,
        server_port=port,
        initial_processing_dir=processing_dir,
    )
    try:
        asyncio.run(run_server(server, port, desktop_app))
    except (KeyboardInterrupt, asyncio.CancelledError):
        pass


if __name__ == "__main__":
    main()
