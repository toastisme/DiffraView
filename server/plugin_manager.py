import json
import os
import threading
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class PluginLoadError(Exception):
    pass


class PluginManager:
    """
    Loads third-party DiffraView plugins.

    A plugin is any folder containing a `diffraview-plugin.json` manifest
    (name, viewerEntry, optional actionsEntry, optional logo) plus pre-built
    static web assets. The manifest's entries are served over a small stdlib
    HTTP server so the client can load them in an iframe regardless of where
    the client is running relative to the server.
    """

    MANIFEST_FILENAME = "diffraview-plugin.json"

    def __init__(self, port: int = 50030):
        self.port = port
        self.root_dir = None
        self.name = None
        self.viewer_entry = None
        self.actions_entry = None
        self.logo = None
        self._httpd = None
        self._thread = None

    def is_loaded(self) -> bool:
        return self.root_dir is not None

    def load(self, folder: str) -> dict:
        manifest_path = os.path.join(folder, self.MANIFEST_FILENAME)
        if not os.path.isfile(manifest_path):
            raise PluginLoadError(f"No {self.MANIFEST_FILENAME} found in {folder}")

        with open(manifest_path) as f:
            try:
                manifest = json.load(f)
            except json.JSONDecodeError as e:
                raise PluginLoadError(f"Invalid {self.MANIFEST_FILENAME}: {e}")

        name = manifest.get("name")
        viewer_entry = manifest.get("viewerEntry")
        actions_entry = manifest.get("actionsEntry")
        logo = manifest.get("logo")

        if not name or not isinstance(name, str):
            raise PluginLoadError(f"{self.MANIFEST_FILENAME} is missing a valid 'name'")
        if not viewer_entry or not isinstance(viewer_entry, str):
            raise PluginLoadError(f"{self.MANIFEST_FILENAME} is missing a valid 'viewerEntry'")
        if not os.path.isfile(os.path.join(folder, viewer_entry)):
            raise PluginLoadError(f"viewerEntry '{viewer_entry}' not found in {folder}")

        if actions_entry is not None:
            if not isinstance(actions_entry, str):
                raise PluginLoadError(
                    f"{self.MANIFEST_FILENAME}'s 'actionsEntry' must be a string or null"
                )
            if not os.path.isfile(os.path.join(folder, actions_entry)):
                raise PluginLoadError(f"actionsEntry '{actions_entry}' not found in {folder}")

        if logo is not None:
            if not isinstance(logo, str):
                raise PluginLoadError(f"{self.MANIFEST_FILENAME}'s 'logo' must be a string or null")
            if not os.path.isfile(os.path.join(folder, logo)):
                raise PluginLoadError(f"logo '{logo}' not found in {folder}")

        self.unload()

        self.root_dir = folder
        self.name = name
        self.viewer_entry = viewer_entry
        self.actions_entry = actions_entry
        self.logo = logo

        self._start_static_server()

        base_url = f"http://127.0.0.1:{self.port}/"
        return {
            "name": self.name,
            "viewerUrl": base_url + self.viewer_entry,
            "actionsUrl": (base_url + self.actions_entry) if self.actions_entry else None,
            # Replaces DiffraView's own top-right logo while this plugin is
            # active (see App.tsx) -- optional so a plugin without a `logo`
            # entry just keeps DiffraView's default.
            "logoUrl": (base_url + self.logo) if self.logo else None,
        }

    def _start_static_server(self):
        # SimpleHTTPRequestHandler sends Last-Modified but no Cache-Control,
        # so browsers apply heuristic caching to plugin assets -- an iframe
        # whose src URL never changes can then keep serving a stale plugin
        # build across reloads/rebuilds even after a hard refresh of the
        # outer DiffraView page. Disable caching entirely so plugin authors
        # always see their latest rebuilt dist/.
        class _NoCacheHandler(SimpleHTTPRequestHandler):
            def end_headers(self):
                self.send_header("Cache-Control", "no-store")
                super().end_headers()

        handler = partial(_NoCacheHandler, directory=self.root_dir)
        self._httpd = ThreadingHTTPServer(("127.0.0.1", self.port), handler)
        self._thread = threading.Thread(target=self._httpd.serve_forever, daemon=True)
        self._thread.start()

    def unload(self):
        if self._httpd is not None:
            self._httpd.shutdown()
            self._httpd.server_close()
            self._httpd = None
            self._thread = None
        self.root_dir = None
        self.name = None
        self.viewer_entry = None
        self.actions_entry = None
        self.logo = None
