import { ComponentType } from "react"
import { ViewerName } from "@/lib/protocol"
import { ExperimentViewerPanel, ExperimentViewerTrigger } from "./ExperimentViewerTab"
import { RLVPanel, RLVTrigger } from "./RLVTab"
import { ExperimentPlannerPanel, ExperimentPlannerTrigger } from "./ExperimentPlannerTab"
import { IntegrationProfilerPanel, IntegrationProfilerTrigger } from "./IntegrationProfilerTab"

export interface ViewerTab {
  id: ViewerName;
  // Tab button, showing the viewer's status and progress
  Trigger: ComponentType;
  // Viewer contents; always mounted, as the embedded viewers must stay
  // connected to the server
  Panel: ComponentType;
}

// All viewers, in tab order. Each mode lists the ones it shows
// (ExperimentMode.viewers, sent in session.capabilities).
export const VIEWER_TABS: ViewerTab[] = [
  { id: "experiment_viewer", Trigger: ExperimentViewerTrigger, Panel: ExperimentViewerPanel },
  { id: "rlv", Trigger: RLVTrigger, Panel: RLVPanel },
  { id: "experiment_planner", Trigger: ExperimentPlannerTrigger, Panel: ExperimentPlannerPanel },
  { id: "integration_profiler", Trigger: IntegrationProfilerTrigger, Panel: IntegrationProfilerPanel },
];
