import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { ImportStates, FindSpotsStates, IndexStates, RefineStates, IntegrateStates} from "../types";
import { ImportTab } from "./ImportTab"
import { FindSpotsTab } from "./FindSpotsTab"
import { IndexTab } from "./IndexTab"
import { RefineTab } from "./RefineTab"
import { IntegrateTab } from "./IntegrateTab"
import ClipLoader from "react-spinners/ClipLoader";
import { ChangeEvent, CSSProperties } from "react"

 
export function AlgorithmTabs(props: {
  importStates: ImportStates,
  findSpotsStates: FindSpotsStates,
  indexStates: IndexStates,
  refineStates : RefineStates,
  integrateStates: IntegrateStates
  serverWS: React.MutableRefObject<WebSocket | null>
} ) {

  const loaderCSSOverride: CSSProperties = {
    display: props.importStates.loading? "inline" : "none",
    marginLeft:"-3.2vw",
    marginRight:"2.15vw",
  };

  return (
    <Tabs defaultValue="import" className="w-full md:w-full lg:w-full xl:w-full h-full md:h-full lg:h-full xl:h-full">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="import">   <ClipLoader
                color={"#ffffff"}
                loading={true}
                aria-label="Loading Spinner"
                data-testid="loader"
                cssOverride={loaderCSSOverride}
                size={20}
              />Import </TabsTrigger>
        <TabsTrigger value="find-spots" disabled={!props.findSpotsStates.enabled}>Find Spots</TabsTrigger>
        <TabsTrigger value="index" disabled={!props.indexStates.enabled}>Index</TabsTrigger>
        <TabsTrigger value="refine" disabled={!props.refineStates.enabled}>Refine</TabsTrigger>
        <TabsTrigger value="integrate" disabled={!props.integrateStates.enabled}>Integrate</TabsTrigger>
      </TabsList>
      <TabsContent value="import" className="w-full md:w-full lg:w-full xl:w-full h-full md:h-full lg:h-full xl:h-full">
        <ImportTab 
          setLog={props.importStates.setLog}
          log={props.importStates.log}
          loading={props.importStates.loading}
          setLoading={props.importStates.setLoading}
          serverWS={props.serverWS}
        />
      </TabsContent>
      <TabsContent value="find-spots">
        <FindSpotsTab 
          enabled={props.findSpotsStates.enabled}
          loading={props.findSpotsStates.loading}
          setLoading={props.findSpotsStates.setLoading}
          log={props.findSpotsStates.log}
          serverWS={props.serverWS}
        />
      </TabsContent>
       <TabsContent value="index">
        <IndexTab 
          enabled={props.indexStates.enabled}
          loading={props.indexStates.loading}
          setLoading={props.indexStates.setLoading}
          log={props.indexStates.log}
          serverWS={props.serverWS}
        />
      </TabsContent>
       <TabsContent value="refine">
        <RefineTab 
          enabled={props.refineStates.enabled}
          loading={props.refineStates.loading}
          setLoading={props.refineStates.setLoading}
          log={props.refineStates.log}
          serverWS={props.serverWS}
        />
      </TabsContent>
       <TabsContent value="integrate">
        <IntegrateTab 
          enabled={props.integrateStates.enabled}
          loading={props.integrateStates.loading}
          setLoading={props.integrateStates.setLoading}
          log={props.integrateStates.log}
          serverWS={props.serverWS}
        />
      </TabsContent>
    </Tabs>
  )
}