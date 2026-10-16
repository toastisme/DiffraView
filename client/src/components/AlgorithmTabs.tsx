import { serverMessage } from "@/lib/protocol";
import {
  Tabs,
  TabsContent,
  TabsList,
} from "@/components/ui/tabs"
import { ProgressTabTrigger } from "@/components/ui/ProgressTabTrigger"
import { useState, useEffect } from "react"
import { ImportTab } from "./ImportTab"
import { FindSpotsTab } from "./FindSpotsTab"
import { IndexTab } from "./IndexTab"
import { RefineTab } from "./RefineTab"
import { IntegrateTab } from "./IntegrateTab"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImages, faDotCircle, faAreaChart, faTh, faAdjust } from '@fortawesome/free-solid-svg-icons';
import { TabLoadingIndicator } from "@/components/ui/TabLoadingIndicator"
import { useRootContext } from "@/contexts/RootContext"
import { useImportContext } from "@/contexts/ImportContext";
import { useFindSpotsContext } from "@/contexts/FindSpotsContext";
import { useIndexContext } from "@/contexts/IndexContext";
import { useRefineContext } from "@/contexts/RefineContext";
import { useIntegrateContext } from "@/contexts/IntegrateContext"
import { Status } from "../types";


export function AlgorithmTabs() {

  const [activeTab, setActiveTab] = useState<string>("import");

  const {
    activeAlgorithmTab,
    setActiveAlgorithmTab,
    serverWS,
    capabilities,
  } = useRootContext()

  const { softwareBackend } = useImportContext();
  // Tabs for the steps the backend chosen in the Software menu can run
  const steps: string[] = capabilities.backends[softwareBackend] ?? [];
  const shown = (step: string) => steps.includes(step);

  const cancelActiveTask = () => {
    serverWS.current?.send(serverMessage("session.cancel"));
  };

  const {
    status: importStatus,
    progress: importProgress,
  } = useImportContext();

  const {
    enabled: findSpotsEnabled,
    status: findSpotsStatus,
    progress: findSpotsProgress,
  } = useFindSpotsContext();

  const {
    enabled: indexEnabled,
    status: indexStatus,
    progress: indexProgress,
  } = useIndexContext();

  const {
    enabled: refineEnabled,
    status: refineStatus,
    progress: refineProgress,
  } = useRefineContext();

  const {
    enabled: integrateEnabled,
    status: integrateStatus,
    progress: integrateProgress,
  } = useIntegrateContext();

  useEffect(() => {
    setActiveAlgorithmTab(activeTab)
  }, [activeTab]);

  useEffect(() => {
    setActiveTab(activeAlgorithmTab)
  }, [activeAlgorithmTab]);

  useEffect(() => {setActiveTab("import")}, []);

  // Back to Import if the selected backend cannot run the open tab's step
  useEffect(() => {
    const tabSteps: Record<string, string> = {
      "find-spots": "find_spots", "index": "index", "refine": "refine", "integrate": "integrate",
    };
    if (activeTab in tabSteps && !shown(tabSteps[activeTab])) {
      setActiveTab("import");
    }
  }, [capabilities, softwareBackend]);


  return (
    <Tabs className="h-full flex flex-col" defaultValue="import" value={activeTab} onValueChange={(value) => setActiveTab(value)}>
      <TabsList className="flex gap-2 xl:gap-10 w-full">
        <ProgressTabTrigger value="import" progress={importProgress} className={importStatus === Status.Loading ? "border border-foreground flex-1" : importStatus === Status.Failed ? "border border-red-500 flex-1" : "flex-1"}>
          <TabLoadingIndicator loading={importStatus === Status.Loading} />
          <FontAwesomeIcon icon={faImages} style={{ marginRight: '5px', marginTop: "0px" }} />Import
        </ProgressTabTrigger>
        {shown("find_spots") && (
          <ProgressTabTrigger value="find-spots" progress={findSpotsProgress} disabled={!findSpotsEnabled} className={findSpotsStatus === Status.Loading ? "border border-foreground flex-1" : findSpotsStatus === Status.Failed ? "border border-red-500 flex-1" : "flex-1"}>
            <TabLoadingIndicator loading={findSpotsStatus === Status.Loading} onCancel={cancelActiveTask} />
            <FontAwesomeIcon icon={faDotCircle} style={{ marginRight: '5px', marginTop: "0px" }} />Find Spots
          </ProgressTabTrigger>
        )}
        {shown("index") && (
          <ProgressTabTrigger value="index" progress={indexProgress} disabled={!indexEnabled} className={indexStatus === Status.Loading ? "border border-foreground flex-1" : indexStatus === Status.Failed ? "border border-red-500 flex-1" : "flex-1"}>
            <TabLoadingIndicator loading={indexStatus === Status.Loading} onCancel={cancelActiveTask} />
            <FontAwesomeIcon icon={faTh} style={{ marginRight: '5px', marginTop: "0px" }} />Index
          </ProgressTabTrigger>
        )}
        {shown("refine") && (
          <ProgressTabTrigger value="refine" progress={refineProgress} disabled={!refineEnabled} className={refineStatus === Status.Loading ? "border border-foreground flex-1" : refineStatus === Status.Failed ? "border border-red-500 flex-1" : "flex-1"}>
            <TabLoadingIndicator loading={refineStatus === Status.Loading} onCancel={cancelActiveTask} />
            <FontAwesomeIcon icon={faAdjust} style={{ marginRight: '5px', marginTop: "0px" }} />Refine
          </ProgressTabTrigger>
        )}
        {shown("integrate") && (
          <ProgressTabTrigger value="integrate" progress={integrateProgress} disabled={!integrateEnabled} className={integrateStatus === Status.Loading ? "border border-foreground flex-1" : integrateStatus === Status.Failed ? "border border-red-500 flex-1" : "flex-1"}>
            <TabLoadingIndicator loading={integrateStatus === Status.Loading} onCancel={cancelActiveTask} />
            <FontAwesomeIcon icon={faAreaChart} style={{ marginRight: '5px', marginTop: "0px" }} />Integrate
          </ProgressTabTrigger>
        )}
      </TabsList>
      <div className="pt-2 flex-1 min-h-0 grid grid-rows-1 grid-cols-1 min-w-0">
      <TabsContent className="mt-0 h-full" value="import" >
        <ImportTab/>
      </TabsContent>
      {shown("find_spots") && (
        <TabsContent value="find-spots" className="mt-0 h-full">
          <FindSpotsTab/>
        </TabsContent>
      )}
      {shown("index") && (
        <TabsContent className="mt-0 h-full" value="index">
          <IndexTab/>
        </TabsContent>
      )}
      {shown("refine") && (
        <TabsContent className="mt-0 h-full" value="refine">
          <RefineTab/>
        </TabsContent>
      )}
      {shown("integrate") && (
        <TabsContent className="mt-0 h-full" value="integrate">
          <IntegrateTab/>
        </TabsContent>
      )}
      </div>
    </Tabs>
  )
}
