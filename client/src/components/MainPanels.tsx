import { AlgorithmTabs } from "./AlgorithmTabs"
import { StateTabs } from "./StateTabs"
import { PluginViewer } from "./PluginViewer"
import { PluginActionsPanel } from "./PluginActionsPanel"
import { usePluginContext } from "@/contexts/PluginContext"

// Fills the space below the file tree/experiment summary header with either
// DiffraView's own algorithm controls + viewers, or a loaded plugin's own
// UI in their place (see PluginContext and plugin_manager.py).
export function MainPanels() {

  const { pluginName, activePlugin } = usePluginContext();
  const pluginActive = activePlugin !== null;
  // Once a plugin has been loaded, keep its viewer/actions panels mounted
  // (just hidden) rather than unmounting them when switching back to
  // "None" -- otherwise switching away and back would reload the plugin's
  // iframe and lose whatever state it was holding (e.g. an in-progress
  // graph).
  const pluginLoaded = pluginName !== null;

  return (
    <div className="flex gap-5 flex-1 min-h-0 pb-3">
      <div className="w-1/2 min-w-0 flex flex-col min-h-0">
        <div className="flex-1 min-h-0 flex flex-col" style={{ display: pluginActive ? "none" : "flex" }}>
          <StateTabs/>
        </div>
        {pluginLoaded && (
          <div className="flex-1 min-h-0 flex flex-col" style={{ display: pluginActive ? "flex" : "none" }}>
            <PluginViewer/>
          </div>
        )}
      </div>
      <div className="w-1/2 min-w-0 flex flex-col min-h-0">
        <div className="flex-1 min-h-0 flex flex-col" style={{ display: pluginActive ? "none" : "flex" }}>
          <AlgorithmTabs/>
        </div>
        {pluginLoaded && (
          <div className="flex-1 min-h-0 flex flex-col" style={{ display: pluginActive ? "flex" : "none" }}>
            <PluginActionsPanel/>
          </div>
        )}
      </div>
    </div>
  );
}
