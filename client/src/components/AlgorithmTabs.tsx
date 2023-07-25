import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { ImportStates, FindSpotsStates, IndexStates, RefineStates, IntegrateStates} from "../types";
import { ImportTab } from "./ImportTab"
import { FindSpotsTab } from "./FindSpotsTab"
 
export function AlgorithmTabs(props: {
  importStates: ImportStates,
  findSpotsStates: FindSpotsStates,
  indexStates: IndexStates,
  refineStates : RefineStates,
  integrateStates: IntegrateStates
  serverWS : WebSocket
} ) {

  return (
    <Tabs defaultValue="import" className="w-full md:w-full lg:w-full xl:w-full h-full md:h-full lg:h-full xl:h-full">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="import">Import</TabsTrigger>
        <TabsTrigger value="find-spots" disabled={!props.findSpotsStates.enabled}>Find Spots</TabsTrigger>
        <TabsTrigger value="index" disabled={true}>Index</TabsTrigger>
        <TabsTrigger value="refine" disabled={true}>Refine</TabsTrigger>
        <TabsTrigger value="integrate" disabled={true}>Integrate</TabsTrigger>
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
    </Tabs>
  )
}