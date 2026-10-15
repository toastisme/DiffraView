"""
Message formats between the server, the GUI and the viewers (see the
"Message protocol" section of README.md).

To the server: {"channel": "server", "type": "<namespace>.<action>", "payload": {}}
To the GUI:    {"channel": "gui", "type": "state.update", "target": "<tab>", "params": {}}
               or another GUI_* type below.
To a viewer:   {"channel": "<viewer>", "command": "<command>", ...} (unchanged)
"""

from __future__ import annotations

# Message types sent to the GUI
STATE_UPDATE = "state.update"
# {"backend", "experimentType", "features", "viewers", "backends": {name: [step]}}
CAPABILITIES = "session.capabilities"
ERROR = "session.error"
LOST_CONNECTION = "session.lost_connection"
CLEAR_EXPERIMENT = "session.clear_experiment"

# Commands the embedded viewers still send in the old format:
# command -> (type, payload fields to add)
LEGACY_COMMANDS: dict[str, tuple[str, dict]] = {
    "record_connection": ("session.connect", {}),
    "clicked_on_panel": ("lineplot.update", {}),
    "new_reflection_xy": ("reflections.new_xy", {}),
    "cancel_new_reflection": ("reflections.cancel_new", {}),
    "update_experiment_description": ("file.set_description", {}),
    "clicked_reflection_rlv": ("reflections.select_rlp", {}),
    "rlv_mesh_ready": ("rlv.mesh.ready", {}),
    "update_rs_mapper_mesh": ("rlv.mesh.update", {}),
    "clear_planner_user_predicted_reflections": ("planner.clear_user_predicted", {}),
    "update_planner_goniometer_phi": ("planner.set_phi", {}),
}


class ProtocolError(ValueError):
    pass


def parse_server_message(msg: dict) -> tuple[str, dict]:
    """(type, payload) of a message sent to the server, in either format."""
    if "type" in msg:
        payload = msg.get("payload") or {}
        if not isinstance(payload, dict):
            raise ProtocolError(f"{msg['type']}: payload must be an object")
        return msg["type"], payload
    command = msg.get("command")
    if command not in LEGACY_COMMANDS:
        raise ProtocolError(f"Unknown command {command}")
    msg_type, extra = LEGACY_COMMANDS[command]
    payload = {k: v for k, v in msg.items() if k not in ("channel", "command")}
    return msg_type, {**payload, **extra}
