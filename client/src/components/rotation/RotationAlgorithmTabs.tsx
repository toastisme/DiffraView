import { serverMessage } from "@/lib/protocol";
import {
  Tabs,
  TabsContent,
  TabsList,
} from "@/components/ui/tabs"
import { ProgressTabTrigger } from "@/components/ui/ProgressTabTrigger"
import { ComponentType, useEffect } from "react"
import { ImportTab } from "@/components/ImportTab"
import { RotationFindSpotsTab } from "@/components/rotation/RotationFindSpotsTab"
import { RotationIndexTab } from "@/components/rotation/RotationIndexTab"
import { RotationRefineTab } from "@/components/rotation/RotationRefineTab"
import { RotationIntegrateTab } from "@/components/rotation/RotationIntegrateTab"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition, faImages, faDotCircle, faAreaChart, faTh, faAdjust } from '@fortawesome/free-solid-svg-icons';
import { TabLoadingIndicator } from "@/components/ui/TabLoadingIndicator"
import { useRootContext } from "@/contexts/RootContext"
import { useImportContext } from "@/contexts/ImportContext";
import { useRotationFindSpotsContext } from "@/contexts/rotation/RotationFindSpotsContext";
import { useRotationIndexContext } from "@/contexts/rotation/RotationIndexContext";
import { useRotationRefineContext } from "@/contexts/rotation/RotationRefineContext";
import { useRotationIntegrateContext } from "@/contexts/rotation/RotationIntegrateContext"
import { Status, DefaultAlgorithmContextType } from "@/types";

type StepTabName = "find_spots" | "index" | "refine" | "integrate";

// Tabs after Import, in order
const STEP_TABS: { step: StepTabName; value: string; label: string; icon: IconDefinition; Tab: ComponentType }[] = [
  { step: "find_spots", value: "find-spots", label: "Find Spots", icon: faDotCircle, Tab: RotationFindSpotsTab },
  { step: "index", value: "index", label: "Index", icon: faTh, Tab: RotationIndexTab },
  { step: "refine", value: "refine", label: "Refine", icon: faAdjust, Tab: RotationRefineTab },
  { step: "integrate", value: "integrate", label: "Integrate", icon: faAreaChart, Tab: RotationIntegrateTab },
];

function triggerClassName(status: Status) {
  return status === Status.Loading ? "border border-foreground flex-1"
    : status === Status.Failed ? "border border-red-500 flex-1" : "flex-1";
}

export function RotationAlgorithmTabs() {

  const {
    activeAlgorithmTab: activeTab,
    setActiveAlgorithmTab: setActiveTab,
    serverWS,
    capabilities,
  } = useRootContext()

  const {
    softwareBackend,
    status: importStatus,
    progress: importProgress,
  } = useImportContext();
  // Tabs for the steps the backend chosen in the Software menu can run
  const steps: string[] = capabilities.backends[softwareBackend] ?? [];
  const shown = (step: string) => steps.includes(step);

  const cancelActiveTask = () => {
    serverWS.current?.send(serverMessage("session.cancel"));
  };

  const states: Record<StepTabName, DefaultAlgorithmContextType> = {
    find_spots: useRotationFindSpotsContext(),
    index: useRotationIndexContext(),
    refine: useRotationRefineContext(),
    integrate: useRotationIntegrateContext(),
  };

  // Back to Import if the selected backend cannot run the open tab's step
  useEffect(() => {
    const tab = STEP_TABS.find(({ value }) => value === activeTab);
    if (tab !== undefined && !shown(tab.step)) {
      setActiveTab("import");
    }
  }, [capabilities, softwareBackend]);


  return (
    <Tabs className="h-full flex flex-col" defaultValue="import" value={activeTab} onValueChange={(value) => setActiveTab(value)}>
      <TabsList className="flex gap-2 xl:gap-10 w-full">
        <ProgressTabTrigger value="import" progress={importProgress} className={triggerClassName(importStatus)}>
          <TabLoadingIndicator loading={importStatus === Status.Loading} />
          <FontAwesomeIcon icon={faImages} style={{ marginRight: '5px', marginTop: "0px" }} />Import
        </ProgressTabTrigger>
        {STEP_TABS.filter(({ step }) => shown(step)).map(({ step, value, label, icon }) => (
          <ProgressTabTrigger key={value} value={value} progress={states[step].progress} disabled={!states[step].enabled} className={triggerClassName(states[step].status)}>
            <TabLoadingIndicator loading={states[step].status === Status.Loading} onCancel={cancelActiveTask} />
            <FontAwesomeIcon icon={icon} style={{ marginRight: '5px', marginTop: "0px" }} />{label}
          </ProgressTabTrigger>
        ))}
      </TabsList>
      <div className="pt-2 flex-1 min-h-0 grid grid-rows-1 grid-cols-1 min-w-0">
      <TabsContent className="mt-0 h-full" value="import" >
        <ImportTab/>
      </TabsContent>
      {STEP_TABS.filter(({ step }) => shown(step)).map(({ value, Tab }) => (
        <TabsContent key={value} className="mt-0 h-full" value={value}>
          <Tab/>
        </TabsContent>
      ))}
      </div>
    </Tabs>
  )
}
