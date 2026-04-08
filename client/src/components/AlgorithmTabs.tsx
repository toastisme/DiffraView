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
  } = useRootContext()

  const cancelActiveTask = () => {
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "cancel_active_task",
    }));
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


  return (
    <Tabs className="h-full" defaultValue="import" value={activeTab} onValueChange={(value) => setActiveTab(value)}>
      <TabsList className="flex gap-10 w-full">
        <ProgressTabTrigger value="import" progress={importProgress} className={importStatus === Status.Loading ? "border border-white flex-1" : importStatus === Status.Failed ? "border border-red-500 flex-1" : "flex-1"}>
          <TabLoadingIndicator loading={importStatus === Status.Loading} />
          <FontAwesomeIcon icon={faImages} style={{ marginRight: '5px', marginTop: "0px" }} />Import
        </ProgressTabTrigger>
        <ProgressTabTrigger value="find-spots" progress={findSpotsProgress} disabled={!findSpotsEnabled} className={findSpotsStatus === Status.Loading ? "border border-white flex-1" : findSpotsStatus === Status.Failed ? "border border-red-500 flex-1" : "flex-1"}>
          <TabLoadingIndicator loading={findSpotsStatus === Status.Loading} onCancel={cancelActiveTask} />
          <FontAwesomeIcon icon={faDotCircle} style={{ marginRight: '5px', marginTop: "0px" }} />Find Spots
        </ProgressTabTrigger>
        <ProgressTabTrigger value="index" progress={indexProgress} disabled={!indexEnabled} className={indexStatus === Status.Loading ? "border border-white flex-1" : indexStatus === Status.Failed ? "border border-red-500 flex-1" : "flex-1"}>
          <TabLoadingIndicator loading={indexStatus === Status.Loading} onCancel={cancelActiveTask} />
          <FontAwesomeIcon icon={faTh} style={{ marginRight: '5px', marginTop: "0px" }} />Index
        </ProgressTabTrigger>
        <ProgressTabTrigger value="refine" progress={refineProgress} disabled={!refineEnabled} className={refineStatus === Status.Loading ? "border border-white flex-1" : refineStatus === Status.Failed ? "border border-red-500 flex-1" : "flex-1"}>
          <TabLoadingIndicator loading={refineStatus === Status.Loading} onCancel={cancelActiveTask} />
          <FontAwesomeIcon icon={faAdjust} style={{ marginRight: '5px', marginTop: "0px" }} />Refine
        </ProgressTabTrigger>
        <ProgressTabTrigger value="integrate" progress={integrateProgress} disabled={!integrateEnabled} className={integrateStatus === Status.Loading ? "border border-white flex-1" : integrateStatus === Status.Failed ? "border border-red-500 flex-1" : "flex-1"}>
          <TabLoadingIndicator loading={integrateStatus === Status.Loading} onCancel={cancelActiveTask} />
          <FontAwesomeIcon icon={faAreaChart} style={{ marginRight: '5px', marginTop: "0px" }} />Integrate
        </ProgressTabTrigger>
      </TabsList>
      <div className="h-[79vh] grid grid-rows-1 ">
      <TabsContent className="h-full" value="import" >
        <ImportTab/>
      </TabsContent>
      <TabsContent value="find-spots" className="h-full">
        <FindSpotsTab/>
      </TabsContent>
      <TabsContent className="h-full" value="index">
        <IndexTab/>
      </TabsContent>
      <TabsContent className="h-full" value="refine">
        <RefineTab/>
      </TabsContent>
      <TabsContent className="h-full" value="integrate">
        <IntegrateTab/>
      </TabsContent>
      </div>
    </Tabs>
  )
}
