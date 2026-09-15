import { AlgorithmTabs } from "./AlgorithmTabs"
import { StateTabs } from "./StateTabs"
import { usePluginContext } from "@/contexts/PluginContext"

// Fills the space below the file tree/experiment summary header with either
// DiffraView's own algorithm controls + viewers, or a loaded plugin's own
// UI in their place (see PluginContext and plugin_manager.py).
export function MainPanels() {

  const { activePlugin, viewerUrl, actionsUrl } = usePluginContext();

  if (activePlugin) {
    return (
      <div className={actionsUrl ? "grid grid-cols-2 gap-2 flex-1 min-h-0" : "flex flex-1 min-h-0"}>
        <div className="h-full">
          {viewerUrl && (
            <iframe src={viewerUrl} className="w-full h-full border-0" />
          )}
        </div>
        {actionsUrl && (
          <div className="h-full">
            <iframe src={actionsUrl} className="w-full h-full border-0" />
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-2 flex-1 min-h-0">
      <div className="h-full">
        <StateTabs/>
      </div>
      <div className="h-full">
        <AlgorithmTabs/>
      </div>
    </div>
  )
}
