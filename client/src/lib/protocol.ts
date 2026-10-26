// Messages between the client and the server (see src/diffraview/protocol.py).
//
// To the server:  {channel: "server", type, payload}
// From the server: {channel: "gui", type: "state.update", target, params}
//                  or one of the other ServerEvent types below.

export type ServerRequestType =
  | "session.connect" | "session.cancel"
  | "file.browse" | "file.import_images" | "file.open_processing_folder"
  | "file.set_processing_root" | "file.select" | "file.set_description"
  | "file.edit_description"
  | "plugin.load" | "plugin.unload"
  | "workflow.run" | "workflow.reindex" | "workflow.save_params" | "workflow.load_params"
  | "workflow.get_report" | "workflow.param_definitions"
  | "utils.generate_report"
  | "beam_position.search" | "beam_position.cancel" | "beam_position.use_optimised"
  | "beam_position.get_centres"
  | "tof.set_range"
  | "lineplot.update"
  | "profiler.update" | "profiler.set_method"
  | "planner.set_phi" | "planner.clear_user_predicted" | "planner.next_best_orientation"
  | "planner.store" | "planner.clear" | "planner.recalculate" | "planner.set_params"
  | "planner.set_dmin"
  | "reflections.remove"
  | "reflections.select" | "reflections.new_xy" | "reflections.new_z"
  | "reflections.cancel_new" | "reflections.add_new" | "reflections.select_rlp"
  | "reflections.highlight_rlp"
  | "viewer.update_images" | "viewer.select_experiment" | "viewer.debug_image"
  | "viewer.toggle_debug" | "viewer.set_debug_view" | "viewer.toggle_sidebar"
  | "rlv.set_view" | "rlv.mesh.update" | "rlv.mesh.show" | "rlv.mesh.hide"
  | "rlv.mesh.cancel" | "rlv.mesh.ready" | "rlv.mesh.error"
  | "mask.set_active" | "mask.update" | "mask.store" | "mask.clear";

export function serverMessage(
  type: ServerRequestType,
  payload: Record<string, unknown> = {},
): string {
  return JSON.stringify({ channel: "server", type, payload });
}

// Tabs and viewers whose state the server updates with "state.update"
export type StateTarget =
  | "root" | "import" | "find_spots" | "index" | "refine" | "integrate"
  | "scale" | "experiment_viewer" | "rlv" | "experiment_planner" | "integration_profiler"
  | "plugin" | "utils" | "beam_position";

// Steps a backend can run (StepId in processing/steps.py)
export type StepName =
  | "import" | "find_spots" | "index" | "refine_bravais_settings" | "reindex"
  | "refine" | "integrate" | "symmetry" | "apply_symmetry" | "scale"
  | "export_scaled" | "merge" | "export";

// Viewer tabs a mode can provide (ExperimentMode.viewers)
export type ViewerName =
  | "experiment_viewer" | "rlv" | "experiment_planner" | "integration_profiler";

// What the loaded dataset supports, sent after import or opening a folder
export interface Capabilities {
  backend: string;
  experimentType: string | null;
  features: string[];
  viewers: ViewerName[];
  backends: Record<string, StepName[]>;
}

// Before anything is loaded: only Import (later steps depend on the data) and
// the viewers every mode has
export const DEFAULT_CAPABILITIES: Capabilities = {
  backend: "DIALS",
  experimentType: null,
  features: [],
  viewers: ["experiment_viewer", "rlv"],
  backends: { DIALS: ["import"] },
};

// Close code for a window replaced by DiffraView opened in another one
export const REPLACED_CLOSE_CODE = 4001;

export type ServerEvent =
  | { type: "state.update"; target: StateTarget; params: Record<string, any> }
  | ({ type: "session.capabilities" } & Capabilities)
  | { type: "session.error"; error: string }
  | { type: "session.lost_connection" }
  | { type: "session.clear_experiment" };
