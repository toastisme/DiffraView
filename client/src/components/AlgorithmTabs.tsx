import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { IndexStates, RefineStates, IntegrateStates } from "../types";
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
import { Status } from "../types";


export function AlgorithmTabs(props: {
  activeTab: string,
  setActiveTab: React.Dispatch<React.SetStateAction<string>>,
  indexStates: IndexStates,
  refineStates: RefineStates,
  integrateStates: IntegrateStates
  serverWS: React.MutableRefObject<WebSocket | null>
}) {

  const { 
    status: importStatus, 
  } = useImportContext();
  
  const { 
    enabled: findSpotsEnabled,
    status: findSpotsStatus, 
  } = useFindSpotsContext();





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
        <TabsTrigger value="index" disabled={!props.indexStates.enabled} className={props.indexStates.loading ? "border border-white flex-1" : !props.indexStates.ranSuccessfully ? "border border-red-500 flex-1" : "flex-1"}>
          <ClipLoader
            color={"#ffffff"}
            loading={props.indexStates.loading}
            aria-label="Loading Spinner"
            data-testid="loader"
            size={20} />
          <FontAwesomeIcon icon={faTh} style={{ marginRight: '5px', marginTop: "0px" }} />Index</TabsTrigger>
        <TabsTrigger value="refine" disabled={!props.refineStates.enabled} className={props.refineStates.loading ? "border border-white flex-1" : !props.refineStates.ranSuccessfully ? "border border-red-500 flex-1" : "flex-1"}>
          <ClipLoader
            color={"#ffffff"}
            loading={props.refineStates.loading}
            aria-label="Loading Spinner"
            data-testid="loader"
            size={20} />
          <FontAwesomeIcon icon={faAdjust} style={{ marginRight: '5px', marginTop: "0px" }} />Refine</TabsTrigger>
        <TabsTrigger value="integrate" disabled={!props.integrateStates.enabled} className={props.integrateStates.loading ? "border border-white flex-1" : !props.integrateStates.ranSuccessfully ? "border border-red-500 flex-1" : "flex-1"}>
          <ClipLoader
            color={"#ffffff"}
            loading={props.integrateStates.loading}
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
          ranSuccessfully={props.indexStates.ranSuccessfully}
          crystalIDs={props.indexStates.crystalIDs}
        />
      </TabsContent>
      <TabsContent className="h-full" value="refine">
        <RefineTab
          setLog={props.refineStates.setLog}
          enabled={props.refineStates.enabled}
          loading={props.refineStates.loading}
          setLoading={props.refineStates.setLoading}
          log={props.refineStates.log}
          serverWS={props.serverWS}
          ranSuccessfully={props.refineStates.ranSuccessfully}
        />
      </TabsContent>
      <TabsContent className="h-full" value="integrate">
        <IntegrateTab
          setLog={props.integrateStates.setLog}
          enabled={props.integrateStates.enabled}
          loading={props.integrateStates.loading}
          setLoading={props.integrateStates.setLoading}
          log={props.integrateStates.log}
          serverWS={props.serverWS}
          ranSuccessfully={props.integrateStates.ranSuccessfully}
          saveHKLEnabled={props.integrateStates.saveHKLEnabled}
          emptyRun={props.integrateStates.emptyRun}
          setEmptyRun={props.integrateStates.setEmptyRun}
          vanadiumRun={props.integrateStates.vanadiumRun}
          setVanadiumRun={props.integrateStates.setVanadiumRun}
          sampleDensity={props.integrateStates.sampleDensity}
          setSampleDensity={props.integrateStates.setSampleDensity}
          sampleRadius={props.integrateStates.sampleRadius}
          setSampleRadius={props.integrateStates.setSampleRadius}
          sampleAbsorptionXSection={props.integrateStates.sampleAbsorptionXSection}
          setSampleAbsorptionXSection={props.integrateStates.setSampleAbsorptionXSection}
          sampleScatteringXSection={props.integrateStates.sampleScatteringXSection}
          setSampleScatteringXSection={props.integrateStates.setSampleScatteringXSection}
          vanadiumDensity={props.integrateStates.vanadiumDensity}
          setVanadiumDensity={props.integrateStates.setVanadiumDensity}
          vanadiumRadius={props.integrateStates.vanadiumRadius}
          setVanadiumRadius={props.integrateStates.setVanadiumRadius}
          vanadiumAbsorptionXSection={props.integrateStates.vanadiumAbsorptionXSection}
          setVanadiumAbsorptionXSection={props.integrateStates.setVanadiumAbsorptionXSection}
          vanadiumScatteringXSection={props.integrateStates.vanadiumScatteringXSection}
          setVanadiumScatteringXSection={props.integrateStates.setVanadiumScatteringXSection}
          applyLorentz={props.integrateStates.applyLorentz}
          setApplyLorentz={props.integrateStates.setApplyLorentz}
          tofBBoxPadding={props.integrateStates.tofBBoxPadding}
          setTofBBoxPadding={props.integrateStates.setTofBBoxPadding}
          xYBBoxPadding={props.integrateStates.xYBBoxPadding}
          setXYBBoxPadding={props.integrateStates.setXYBBoxPadding}
          applyIncidentSpectrum={props.integrateStates.applyIncidentSpectrum}
          setApplyIncidentSpectrum={props.integrateStates.setApplyIncidentSpectrum}
          applySphericalAbsorption={props.integrateStates.applySphericalAbsorption}
          setApplySphericalAbsorption={props.integrateStates.setApplySphericalAbsorption}
          setMinPartiality={props.integrateStates.setMinPartiality}
          setMinISigma={props.integrateStates.setMinISigma}
          minISigma={props.integrateStates.minISigma}
          minPartiality={props.integrateStates.minPartiality}
          caclulateLineProfile={props.integrateStates.calculateLineProfile}
          setCalculateLineProfile={props.integrateStates.setCalculateLineProfile}
          integrateType={props.integrateStates.integrateType}
          setIntegrateType={props.integrateStates.setIntegrateType}
          dmin={props.integrateStates.dmin}
          setDmin={props.integrateStates.setDmin}
        />
      </TabsContent>
      </div>
    </Tabs>
  )
}
