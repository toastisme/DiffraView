import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { ImportTab } from "./ImportTab"
import { FindSpotsTab } from "./FindSpotsTab"
import { IndexTab } from "./IndexTab"
import { RefineTab } from "./RefineTab"
import { IntegrateTab } from "./IntegrateTab"
import ClipLoader from "react-spinners/ClipLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImages, faDotCircle, faAreaChart, faTh, faAdjust } from '@fortawesome/free-solid-svg-icons';
import { useImportContext } from "@/contexts/ImportContext";
import { useFindSpotsContext } from "@/contexts/FindSpotsContext";
import { useIndexContext } from "@/contexts/IndexContext";
import { useRefineContext } from "@/contexts/RefineContext";
import { useIntegrateContext } from "@/contexts/IntegrateContext"
import { Status } from "../types";


export function AlgorithmTabs(props: {
  activeTab: string,
  setActiveTab: React.Dispatch<React.SetStateAction<string>>,
}) {

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





  return (
    <Tabs className="h-full" defaultValue="import" value={props.activeTab} onValueChange={(value) => props.setActiveTab(value)}>
      <TabsList className="flex gap-10 w-full">
        <TabsTrigger value="import" className={importStatus === Status.Loading ? "border border-white flex-1" : importStatus === Status.Failed ? "border border-red-500 flex-1" : "flex-1"}>   <ClipLoader
          color={"#ffffff"}
          loading={importStatus === Status.Loading}
          aria-label="Loading Spinner"
          data-testid="loader"
          size={20}
        /><FontAwesomeIcon icon={faImages} style={{ marginRight: '5px', marginTop: "0px" }} />Import </TabsTrigger>
        <TabsTrigger value="find-spots" disabled={!findSpotsEnabled} className={findSpotsStatus === Status.Loading ? "border border-white flex-1" : findSpotsStatus === Status.Failed ? "border border-red-500 flex-1" : "flex-1"}>
          <ClipLoader
            color={"#ffffff"}
            loading={findSpotsStatus === Status.Loading}
            aria-label="Loading Spinner"
            data-testid="loader"
            size={20} />
          <FontAwesomeIcon icon={faDotCircle} style={{ marginRight: '5px', marginTop: "0px" }} />Find Spots</TabsTrigger>
        <TabsTrigger value="index" disabled={!indexEnabled} className={indexStatus === Status.Loading ? "border border-white flex-1" : indexStatus === Status.Failed ? "border border-red-500 flex-1" : "flex-1"}>
          <ClipLoader
            color={"#ffffff"}
            loading={indexStatus === Status.Loading}
            aria-label="Loading Spinner"
            data-testid="loader"
            size={20} />
          <FontAwesomeIcon icon={faTh} style={{ marginRight: '5px', marginTop: "0px" }} />Index</TabsTrigger>
        <TabsTrigger value="refine" disabled={!refineEnabled} className={refineStatus === Status.Loading ? "border border-white flex-1" : refineStatus === Status.Failed ? "border border-red-500 flex-1" : "flex-1"}>
          <ClipLoader
            color={"#ffffff"}
            loading={refineStatus === Status.Loading}
            aria-label="Loading Spinner"
            data-testid="loader"
            size={20} />
          <FontAwesomeIcon icon={faAdjust} style={{ marginRight: '5px', marginTop: "0px" }} />Refine</TabsTrigger>
        <TabsTrigger value="integrate" disabled={!integrateEnabled} className={integrateStatus === Status.Loading ? "border border-white flex-1" : integrateStatus === Status.Failed ? "border border-red-500 flex-1" : "flex-1"}>
          <ClipLoader
            color={"#ffffff"}
            loading={integrateStatus === Status.Loading}
            aria-label="Loading Spinner"
            data-testid="loader"
            size={20} />
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
