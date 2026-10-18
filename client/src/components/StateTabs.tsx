import { useEffect } from "react"
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs"
import { useRootContext } from "@/contexts/RootContext"
import { ViewerName } from "@/lib/protocol"
import { VIEWER_TABS } from "./viewers/registry"

// Viewer tabs. Which ones are shown depends on the loaded dataset's mode
// (capabilities.viewers); see viewers/registry.ts to add one.
export function StateTabs() {

  const { activeStateTab, setActiveStateTab, capabilities } = useRootContext();

  const available = VIEWER_TABS.filter((tab) => capabilities.viewers.includes(tab.id));

  // Fall back to the first viewer if the active one is no longer offered
  useEffect(() => {
    if (!capabilities.viewers.includes(activeStateTab)) {
      setActiveStateTab(available[0]?.id ?? "experiment_viewer");
    }
  }, [capabilities]);

  return (
    <Tabs
      className="h-full flex flex-col"
      value={activeStateTab}
      onValueChange={(value) => setActiveStateTab(value as ViewerName)}>
      <TabsList className="flex gap-2 xl:gap-5 w-full">
        {available.map(({ id, Trigger }) => <Trigger key={id} />)}
      </TabsList>
      <div className="pt-2 flex-1 min-h-0 grid grid-rows-1 grid-cols-1 min-w-0 overflow-hidden">
        {VIEWER_TABS.map(({ id, Panel }) => (
          <TabsContent
            key={id}
            value={id}
            forceMount={true}
            className="mt-0 h-full [grid-row:1] [grid-column:1] overflow-hidden">
            <div
              style={{ visibility: activeStateTab === id ? 'visible' : 'hidden', position: 'relative', overflow: 'hidden' }}
              className="h-full w-full">
              <Panel />
            </div>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  )
}
