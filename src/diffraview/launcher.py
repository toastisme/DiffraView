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


def add_environment_to_path():
    """
    Puts this environment's program folders first on PATH, so the dials.*
    commands the server runs are found even when DiffraView was started
    without activating the environment (e.g. from the Start menu shortcut).
    This is the PATH part of `conda activate`, which is all DIALS' own
    launchers set up.
    """
    prefix = sys.prefix
    if sys.platform == "win32":
        dirs = [
            prefix,
            os.path.join(prefix, "Library", "mingw-w64", "bin"),
            os.path.join(prefix, "Library", "usr", "bin"),
            os.path.join(prefix, "Library", "bin"),
            os.path.join(prefix, "Scripts"),
            os.path.join(prefix, "bin"),
        ]
    else:
        dirs = [os.path.join(prefix, "bin")]
    path = os.environ.get("PATH", "").split(os.pathsep)
    os.environ["PATH"] = os.pathsep.join(dirs + [p for p in path if p and p not in dirs])


def log_path():
    if sys.platform == "win32":
        base = os.environ.get("LOCALAPPDATA") or os.path.expanduser("~")
        return os.path.join(base, "DiffraView", "diffraview.log")
    if sys.platform == "darwin":
        return os.path.expanduser("~/Library/Logs/DiffraView/diffraview.log")
    state = os.environ.get("XDG_STATE_HOME") or os.path.expanduser("~/.local/state")
    return os.path.join(state, "diffraview", "diffraview.log")


def redirect_output_if_no_console():
    """
    Under pythonw (as run by the Windows Start menu shortcut) there is no
    console, so sys.stdout and sys.stderr are None and all output, errors
    included, would be lost. Send it to a log file instead, keeping the
    previous run's log alongside. Returns the log file, or None if there is
    a console.
    """
    if sys.stdout is not None and sys.stderr is not None:
        return None
    path = log_path()
    os.makedirs(os.path.dirname(path), exist_ok=True)
    if os.path.exists(path):
        os.replace(path, path.replace(".log", ".previous.log"))
    log = open(path, "w", buffering=1, encoding="utf-8")
    sys.stdout = sys.stderr = log
    return log


def show_error(message, log=None):
    """
    Reports an error the user must see. Without a console (log is not None)
    it goes in the log, and on Windows also in a message box naming the log.
    """
    if log is not None:
        message += f"\n\nDetails are in {log.name}"
    print(message, file=sys.stderr)
    if log is not None and sys.platform == "win32":
        import ctypes

        MB_ICONERROR = 0x10
        ctypes.windll.user32.MessageBoxW(None, message, "DiffraView", MB_ICONERROR)


def find_desktop_app():
    """
    Packaged Electron executable, if one is installed alongside this package
    (e.g. by a diffraview-desktop conda package) or named by
    DIFFRAVIEW_ELECTRON.
    """
    # electron-builder names it after productName on Windows, and after the
    # package name on Linux.
    executable = "DiffraView.exe" if sys.platform == "win32" else "diffraview"
    candidates = [
        os.environ.get("DIFFRAVIEW_ELECTRON"),
        os.path.join(sys.prefix, "libexec", "diffraview", executable),
    ]
    for candidate in candidates:
        if candidate and os.path.isfile(candidate) and os.access(candidate, os.X_OK):
            return candidate
    return None


async def run_server(server, port, desktop_app, log=None):
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
    args = ["--no-sandbox"] if sys.platform.startswith("linux") else []
    env = dict(os.environ, DIFFRAVIEW_SERVER_PORT=str(port))
    app = await asyncio.create_subprocess_exec(
        desktop_app, *args, env=env, stdout=log, stderr=log
    )
    await app.wait()
    server_task.cancel()


def main():
    log = redirect_output_if_no_console()
    try:
        run(log)
    except (SystemExit, KeyboardInterrupt):
        raise
    except BaseException:
        import traceback

        traceback.print_exc()
        show_error("DiffraView stopped because of an unexpected error.", log)
        sys.exit(1)


def run(log):
    add_environment_to_path()
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
            show_error(
                "Error: the DiffraView web client is not included in this "
                "installation (run `npm run build:web` in client/ and reinstall).",
                log,
            )
            sys.exit(1)

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
        asyncio.run(run_server(server, port, desktop_app, log))
    except (KeyboardInterrupt, asyncio.CancelledError):
        pass


if __name__ == "__main__":
    main()
