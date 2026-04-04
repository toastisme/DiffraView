import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useState, useEffect, MouseEvent } from "react"
import { ImportTab } from "./ImportTab"
import { FindSpotsTab } from "./FindSpotsTab"
import { IndexTab } from "./IndexTab"
import { RefineTab } from "./RefineTab"
import { IntegrateTab } from "./IntegrateTab"
import ClipLoader from "react-spinners/ClipLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImages, faDotCircle, faAreaChart, faTh, faAdjust, faXmark } from '@fortawesome/free-solid-svg-icons';
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

  const [hoveredCancelTab, setHoveredCancelTab] = useState<string | null>(null);

  const cancelActiveTask = (e: MouseEvent) => {
    e.stopPropagation();
    setHoveredCancelTab(null);
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "cancel_active_task",
    }));
  };

  const { 
    status: importStatus, 
  } = useImportContext();
  
  const { 
    enabled: findSpotsEnabled,
    status: findSpotsStatus, 
  } = useFindSpotsContext();

  const { 
    enabled: indexEnabled,
    status: indexStatus, 
  } = useIndexContext();

  const { 
    enabled: refineEnabled,
    status: refineStatus, 
  } = useRefineContext();

  const {
    enabled: integrateEnabled,
    status: integrateStatus
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
        <TabsTrigger value="import" className={importStatus === Status.Loading ? "border border-white flex-1" : importStatus === Status.Failed ? "border border-red-500 flex-1" : "flex-1"}>   <ClipLoader
          color={"#ffffff"}
          loading={importStatus === Status.Loading}
          aria-label="Loading Spinner"
          data-testid="loader"
          size={20}
        /><FontAwesomeIcon icon={faImages} style={{ marginRight: '5px', marginTop: "0px" }} />Import </TabsTrigger>
        <TabsTrigger value="find-spots" disabled={!findSpotsEnabled} className={findSpotsStatus === Status.Loading ? "border border-white flex-1" : findSpotsStatus === Status.Failed ? "border border-red-500 flex-1" : "flex-1"}>
          {findSpotsStatus === Status.Loading ? (
            <span
              className="cursor-pointer"
              onMouseEnter={() => setHoveredCancelTab("find-spots")}
              onMouseLeave={() => setHoveredCancelTab(null)}
              onClick={cancelActiveTask}
            >
              {hoveredCancelTab === "find-spots"
                ? <FontAwesomeIcon icon={faXmark} style={{ marginRight: '5px' }} />
                : <ClipLoader color={"#ffffff"} loading={true} aria-label="Loading Spinner" size={20} />}
            </span>
          ) : (
            <ClipLoader color={"#ffffff"} loading={false} aria-label="Loading Spinner" data-testid="loader" size={20} />
          )}
          <FontAwesomeIcon icon={faDotCircle} style={{ marginRight: '5px', marginTop: "0px" }} />Find Spots</TabsTrigger>
        <TabsTrigger value="index" disabled={!indexEnabled} className={indexStatus === Status.Loading ? "border border-white flex-1" : indexStatus === Status.Failed ? "border border-red-500 flex-1" : "flex-1"}>
          {indexStatus === Status.Loading ? (
            <span
              className="cursor-pointer"
              onMouseEnter={() => setHoveredCancelTab("index")}
              onMouseLeave={() => setHoveredCancelTab(null)}
              onClick={cancelActiveTask}
            >
              {hoveredCancelTab === "index"
                ? <FontAwesomeIcon icon={faXmark} style={{ marginRight: '5px' }} />
                : <ClipLoader color={"#ffffff"} loading={true} aria-label="Loading Spinner" size={20} />}
            </span>
          ) : (
            <ClipLoader color={"#ffffff"} loading={false} aria-label="Loading Spinner" data-testid="loader" size={20} />
          )}
          <FontAwesomeIcon icon={faTh} style={{ marginRight: '5px', marginTop: "0px" }} />Index</TabsTrigger>
        <TabsTrigger value="refine" disabled={!refineEnabled} className={refineStatus === Status.Loading ? "border border-white flex-1" : refineStatus === Status.Failed ? "border border-red-500 flex-1" : "flex-1"}>
          {refineStatus === Status.Loading ? (
            <span
              className="cursor-pointer"
              onMouseEnter={() => setHoveredCancelTab("refine")}
              onMouseLeave={() => setHoveredCancelTab(null)}
              onClick={cancelActiveTask}
            >
              {hoveredCancelTab === "refine"
                ? <FontAwesomeIcon icon={faXmark} style={{ marginRight: '5px' }} />
                : <ClipLoader color={"#ffffff"} loading={true} aria-label="Loading Spinner" size={20} />}
            </span>
          ) : (
            <ClipLoader color={"#ffffff"} loading={false} aria-label="Loading Spinner" data-testid="loader" size={20} />
          )}
          <FontAwesomeIcon icon={faAdjust} style={{ marginRight: '5px', marginTop: "0px" }} />Refine</TabsTrigger>
        <TabsTrigger value="integrate" disabled={!integrateEnabled} className={integrateStatus === Status.Loading ? "border border-white flex-1" : integrateStatus === Status.Failed ? "border border-red-500 flex-1" : "flex-1"}>
          {integrateStatus === Status.Loading ? (
            <span
              className="cursor-pointer"
              onMouseEnter={() => setHoveredCancelTab("integrate")}
              onMouseLeave={() => setHoveredCancelTab(null)}
              onClick={cancelActiveTask}
            >
              {hoveredCancelTab === "integrate"
                ? <FontAwesomeIcon icon={faXmark} style={{ marginRight: '5px' }} />
                : <ClipLoader color={"#ffffff"} loading={true} aria-label="Loading Spinner" size={20} />}
            </span>
          ) : (
            <ClipLoader color={"#ffffff"} loading={false} aria-label="Loading Spinner" data-testid="loader" size={20} />
          )}
          <FontAwesomeIcon icon={faAreaChart} style={{ marginRight: '5px', marginTop: "0px" }} />Integrate</TabsTrigger>
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
