"""
Serves the built DiffraView web client over plain HTTP on the same port as
the WebSocket server, so browser mode needs nothing beyond Python.

The client is built with `npm run build:web` (see client/package.json), which
copies client/build/ into diffraview/web/ so it ships as package data.
"""

from __future__ import annotations

import http
import mimetypes
import os
from urllib.parse import unquote, urlsplit

from websockets.datastructures import Headers
from websockets.http11 import Response

WEB_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "web")

# Not always registered by the OS mime database, and browsers refuse to run
# module scripts / wasm served with the wrong type.
mimetypes.add_type("text/javascript", ".js")
mimetypes.add_type("text/javascript", ".mjs")
mimetypes.add_type("application/wasm", ".wasm")


def web_client_available():
    return os.path.isfile(os.path.join(WEB_DIR, "index.html"))


def _response(status, body, content_type):
    headers = Headers()
    headers["Content-Type"] = content_type
    headers["Content-Length"] = str(len(body))
    headers["Cache-Control"] = "no-cache"
    return Response(status.value, status.phrase, headers, body)


_LOCAL_HOSTS = {"localhost", "127.0.0.1", "::1"}


def origin_allowed(origin: str | None) -> bool:
    """
    WebSocket connections only from pages served from this machine (README
    "Parameter checks"): any other web page could otherwise drive the server.
    """
    if origin is None:
        # Not a browser (browsers always send an Origin)
        return True
    if origin == "file://":
        # Packaged Electron app (not "null", which any site can send)
        return True
    parts = urlsplit(origin)
    return parts.scheme in ("http", "https") and parts.hostname in _LOCAL_HOSTS


def process_request(connection, request):
    """
    websockets `process_request` hook: refuses WebSocket upgrades from other
    origins, and answers any other request with a file from WEB_DIR.
    """
    if request.headers.get("Upgrade", "").lower() == "websocket":
        if not origin_allowed(request.headers.get("Origin")):
            return _response(
                http.HTTPStatus.FORBIDDEN, b"Origin not allowed", "text/plain"
            )
        return None

    if not web_client_available():
        return _response(
            http.HTTPStatus.NOT_FOUND,
            b"DiffraView web client not built (run `npm run build:web` in client/).",
            "text/plain",
        )

    url_path = request.path.split("?", 1)[0].split("#", 1)[0]
    if url_path in ("", "/"):
        url_path = "/index.html"

    rel_path = os.path.normpath(unquote(url_path).lstrip("/"))
    file_path = os.path.join(WEB_DIR, rel_path)
    # Reject anything resolving outside WEB_DIR (e.g. /../../etc/passwd).
    if os.path.commonpath([WEB_DIR, os.path.abspath(file_path)]) != WEB_DIR:
        return _response(http.HTTPStatus.FORBIDDEN, b"Forbidden", "text/plain")
    if not os.path.isfile(file_path):
        return _response(http.HTTPStatus.NOT_FOUND, b"Not found", "text/plain")

    with open(file_path, "rb") as f:
        body = f.read()
    content_type = mimetypes.guess_type(file_path)[0] or "application/octet-stream"
    return _response(http.HTTPStatus.OK, body, content_type)
