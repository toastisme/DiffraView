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
import { CSSProperties } from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

 
export function AlgorithmTabs(props: {
  importStates: ImportStates,
  findSpotsStates: FindSpotsStates,
  indexStates: IndexStates,
  refineStates : RefineStates,
  integrateStates: IntegrateStates
  serverWS: React.MutableRefObject<WebSocket | null>
} ) {

  const importLoaderCSSOverride: CSSProperties = {
    display: props.importStates.loading? "inline" : "none",
    marginLeft:"-3.2vw",
    marginRight:"2.15vw",
  };

  const findSpotsLoaderCSSOverride: CSSProperties = {
    display: props.findSpotsStates.loading? "inline" : "none",
    marginLeft:"-2.5vw",
    marginRight:"1.4vw",
  };

  const indexLoaderCSSOverride: CSSProperties = {
    display: props.indexStates.loading? "inline" : "none",
    marginLeft:"-3.4vw",
    marginRight:"2.3vw",
  };

  const refineLoaderCSSOverride: CSSProperties = {
    display: props.refineStates.loading? "inline" : "none",
    marginLeft:"-3.4vw",
    marginRight:"2.3vw",
  };

  const integrateLoaderCSSOverride: CSSProperties = {
    display: props.integrateStates.loading? "inline" : "none",
    marginLeft:"-2.4vw",
    marginRight:"1.8vw",
  };

  return (
    <Tabs defaultValue="import" className="w-full md:w-full lg:w-full xl:w-full h-full md:h-full lg:h-full xl:h-full">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="import" className={props.importStates.loading ? "border border-white" : ""}>   <ClipLoader
                color={"#ffffff"}
                loading={true}
                aria-label="Loading Spinner"
                data-testid="loader"
                cssOverride={importLoaderCSSOverride}
                size={20}
              />Import </TabsTrigger>
        <TabsTrigger value="find-spots" disabled={!props.findSpotsStates.enabled} className={props.findSpotsStates.loading ? "border border-white" : ""}>
                <ClipLoader
                color={"#ffffff"}
                loading={true}
                aria-label="Loading Spinner"
                data-testid="loader"
                cssOverride={findSpotsLoaderCSSOverride}
                size={20}/>
          Find Spots</TabsTrigger>
        <TabsTrigger value="index" disabled={!props.indexStates.enabled} className={props.indexStates.loading ? "border border-white" : ""}>
                <ClipLoader
                color={"#ffffff"}
                loading={true}
                aria-label="Loading Spinner"
                data-testid="loader"
                cssOverride={indexLoaderCSSOverride}
                size={20}/>
          Index</TabsTrigger>
        <TabsTrigger value="refine" disabled={!props.refineStates.enabled} className={props.refineStates.loading ? "border border-white" : ""}>
                <ClipLoader
                color={"#ffffff"}
                loading={true}
                aria-label="Loading Spinner"
                data-testid="loader"
                cssOverride={refineLoaderCSSOverride}
                size={20}/>
        Refine</TabsTrigger>
        <TabsTrigger value="integrate" disabled={!props.integrateStates.enabled} className={props.integrateStates.loading ? "border border-white" : ""}>
                <ClipLoader
                color={"#ffffff"}
                loading={true}
                aria-label="Loading Spinner"
                data-testid="loader"
                cssOverride={integrateLoaderCSSOverride}
                size={20}/>
        Integrate</TabsTrigger>
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
          setLog={props.findSpotsStates.setLog}
          enabled={props.findSpotsStates.enabled}
          loading={props.findSpotsStates.loading}
          setLoading={props.findSpotsStates.setLoading}
          log={props.findSpotsStates.log}
          serverWS={props.serverWS}
        />
      </TabsContent>
       <TabsContent value="index">
        <IndexTab 
          setLog={props.indexStates.setLog}
          enabled={props.indexStates.enabled}
          loading={props.indexStates.loading}
          setLoading={props.indexStates.setLoading}
          log={props.indexStates.log}
          serverWS={props.serverWS}
          bravaisLattices={props.indexStates.bravaisLattices}
          selectedBravaisLatticeId={props.indexStates.selectedBravaisLatticeId}
          setSelectedBravaisLatticeId={props.indexStates.setSelectedBravaisLatticeId}
          detectSymmetryOpen={props.indexStates.detectSymmetryOpen}
          setDetectSymmetryOpen={props.indexStates.setDetectSymmetryOpen}
          detectSymmetryEnabled={props.indexStates.detectSymmetryEnabled}
          selectedBravaisLatticeLoading={props.indexStates.selectedBravaisLatticeLoading}
          setSelectedBravaisLatticeLoading={props.indexStates.setSelectedBravaisLatticeLoading}
        />
      </TabsContent>
       <TabsContent value="refine">
        <RefineTab 
          setLog={props.refineStates.setLog}
          enabled={props.refineStates.enabled}
          loading={props.refineStates.loading}
          setLoading={props.refineStates.setLoading}
          log={props.refineStates.log}
          serverWS={props.serverWS}
        />
      </TabsContent>
       <TabsContent value="integrate">
        <IntegrateTab 
          setLog={props.integrateStates.setLog}
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