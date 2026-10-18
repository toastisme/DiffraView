"""
Message formats between the server, the GUI and the viewers (see the
"Message protocol" section of README.md).

To the server: {"channel": "server", "type": "<namespace>.<action>", "payload": {}}
To the GUI:    {"channel": "gui", "type": "state.update", "target": "<tab>", "params": {}}
               or another GUI_* type below.
To a viewer:   {"channel": "<viewer>", "type": "<namespace>.<action>", "payload": {}}
               (msgpack {"type", "payload"} for image and mesh data)
"""

from __future__ import annotations

# Message types sent to the GUI
STATE_UPDATE = "state.update"
# {"backend", "experimentType", "features", "viewers", "backends": {name: [step]}}
CAPABILITIES = "session.capabilities"
ERROR = "session.error"
LOST_CONNECTION = "session.lost_connection"
CLEAR_EXPERIMENT = "session.clear_experiment"

class ProtocolError(ValueError):
    pass


def parse_server_message(msg: dict) -> tuple[str, dict]:
    """(type, payload) of a message sent to the server."""
    if "type" not in msg:
        raise ProtocolError(f"Message has no type: {msg.get('command')}")
    payload = msg.get("payload") or {}
    if not isinstance(payload, dict):
        raise ProtocolError(f"{msg['type']}: payload must be an object")
    return msg["type"], payload
