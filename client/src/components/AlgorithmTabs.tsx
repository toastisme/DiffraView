import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { ImportStates, FindSpotsStates, IndexStates, RefineStates, IntegrateStates } from "../types";
import { ImportTab } from "./ImportTab"
import { FindSpotsTab } from "./FindSpotsTab"
import { IndexTab } from "./IndexTab"
import { RefineTab } from "./RefineTab"
import { IntegrateTab } from "./IntegrateTab"
import ClipLoader from "react-spinners/ClipLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImages, faDotCircle, faAreaChart, faTh, faAdjust } from '@fortawesome/free-solid-svg-icons';


export function AlgorithmTabs(props: {
  activeTab: string,
  setActiveTab: React.Dispatch<React.SetStateAction<string>>,
  importStates: ImportStates,
  findSpotsStates: FindSpotsStates,
  indexStates: IndexStates,
  refineStates: RefineStates,
  integrateStates: IntegrateStates
  serverWS: React.MutableRefObject<WebSocket | null>
}) {


  return (
    <Tabs defaultValue="import" value={props.activeTab} onValueChange={(value) => props.setActiveTab(value)}>
      <TabsList className="flex gap-10 w-full">
        <TabsTrigger value="import" className={props.importStates.loading ? "border border-white flex-1" : !props.importStates.ranSuccessfully ? "border border-red-500 flex-1" : "flex-1"}>   <ClipLoader
          color={"#ffffff"}
          loading={props.importStates.loading}
          aria-label="Loading Spinner"
          data-testid="loader"
          size={20}
        /><FontAwesomeIcon icon={faImages} style={{ marginRight: '5px', marginTop: "0px" }} />Import </TabsTrigger>
        <TabsTrigger value="find-spots" disabled={!props.findSpotsStates.enabled} className={props.findSpotsStates.loading ? "border border-white flex-1" : !props.findSpotsStates.ranSuccessfully ? "border border-red-500 flex-1" : "flex-1"}>
          <ClipLoader
            color={"#ffffff"}
            loading={props.findSpotsStates.loading}
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
      <TabsContent value="import" >
        <ImportTab
          setLog={props.importStates.setLog}
          log={props.importStates.log}
          loading={props.importStates.loading}
          setLoading={props.importStates.setLoading}
          serverWS={props.serverWS}
          ranSuccessfully={props.importStates.ranSuccessfully}
          localFileDir={props.importStates.localFileDir}
          setLocalFileDir={props.importStates.setLocalFileDir}
          usingLocalServer={props.importStates.usingLocalServer}
          setUsingLocalServer={props.importStates.setUsingLocalServer}
          currentFileKey={props.importStates.currentFileKey}
          browseImagesEnabled={props.importStates.browseImagesEnabled}
          setBrowseImagesEnabled={props.importStates.setBrowseImagesEnabled}
        />
      </TabsContent>
      <TabsContent value="find-spots">
        <FindSpotsTab
          setLog={props.findSpotsStates.setLog}
          enabled={props.findSpotsStates.enabled}
          loading={props.findSpotsStates.loading}
          setLoading={props.findSpotsStates.setLoading}
          log={props.findSpotsStates.log}
          minTOF={props.findSpotsStates.minTOF}
          maxTOF={props.findSpotsStates.maxTOF}
          currentMinTOF={props.findSpotsStates.currentMinTOF}
          currentMaxTOF={props.findSpotsStates.currentMaxTOF}
          stepTOF={props.findSpotsStates.stepTOF}
          setCurrentMinTOF={props.findSpotsStates.setCurrentMinTOF}
          setCurrentMaxTOF={props.findSpotsStates.setCurrentMaxTOF}
          serverWS={props.serverWS}
          ranSuccessfully={props.findSpotsStates.ranSuccessfully}
          gain={props.findSpotsStates.gain}
          setGain={props.findSpotsStates.setGain}
          sigmaStrong={props.findSpotsStates.sigmaStrong}
          setSigmaStrong={props.findSpotsStates.setSigmaStrong}
          sigmaBG={props.findSpotsStates.sigmaBG}
          setSigmaBG={props.findSpotsStates.setSigmaBG}
          globalThreshold={props.findSpotsStates.globalThreshold}
          setGlobalThreshold={props.findSpotsStates.setGlobalThreshold}
          kernelSize={props.findSpotsStates.kernelSize}
          setKernelSize={props.findSpotsStates.setKernelSize}
          minLocal={props.findSpotsStates.minLocal}
          setMinLocal={props.findSpotsStates.setMinLocal}
          iQR={props.findSpotsStates.iQR}
          setIQR={props.findSpotsStates.setIQR}
          blur={props.findSpotsStates.blur}
          setBlur={props.findSpotsStates.setBlur}
          nBins={props.findSpotsStates.nBins}
          setNBins={props.findSpotsStates.setNBins}
          debug={props.findSpotsStates.debug}
          setDebug={props.findSpotsStates.setDebug}
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
          ranSuccessfully={props.indexStates.ranSuccessfully}
          crystalIDs={props.indexStates.crystalIDs}
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
          ranSuccessfully={props.refineStates.ranSuccessfully}
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
        />
      </TabsContent>
    </Tabs>
  )
}
