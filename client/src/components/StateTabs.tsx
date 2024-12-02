
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { LinePlot } from "./LinePlot"
import { IntegrationLinePlot } from "./IntegrationLinePlot"
import { ExperimentViewerStates, RLVStates, ExperimentPlannerStates, IntegrationProfilerStates } from "@/types"
import { Button } from "@/components/ui/button"
import { PlannerBarChart } from "./PlannerBarChart"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock, faRepeat, faCube, faTrash, faPencil, faAsterisk, faAreaChart, faTh, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react"
import ClipLoader from "react-spinners/ClipLoader";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {HeatMap} from "./Heatmap"

export function StateTabs(props: {
  experimentViewerStates: ExperimentViewerStates,
  rLVStates: RLVStates
  experimentPlannerStates: ExperimentPlannerStates,
  integrationProfilerStates: IntegrationProfilerStates,
  selectedReflectionId: string,
  setSelectedReflectionId: React.Dispatch<React.SetStateAction<string>>,
  activeTab: string,
  setActiveTab: React.Dispatch<React.SetStateAction<string>>,
  serverWS: React.MutableRefObject<WebSocket | null>
}) {

  function showExperimentViewer() {
    props.rLVStates.setHidden(true);
    props.experimentPlannerStates.setHidden(true);
    props.integrationProfilerStates.setHidden(true)
    props.experimentViewerStates.setHidden(false);
  }

  function showRLV() {
    props.experimentViewerStates.setHidden(true);
    props.experimentPlannerStates.setHidden(true);
    props.integrationProfilerStates.setHidden(true)
    props.rLVStates.setHidden(false);
  }

  function showRLVOrientationView(){
    props.rLVStates.setOrientationViewSelected(true);
    props.serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "show_rlv_orientation_view",
    }));
  }
  
  function showRLVCrystalView(){
    props.rLVStates.setOrientationViewSelected(false);
    props.serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "show_rlv_crystal_view",
    }));
  }
  

  function showExperimentPlanner() {
    props.experimentViewerStates.setHidden(true);
    props.rLVStates.setHidden(true);
    props.integrationProfilerStates.setHidden(true)
    props.experimentPlannerStates.setHidden(false);
  }

  function showIntegrationProfiler() {
    props.experimentViewerStates.setHidden(true);
    props.rLVStates.setHidden(true);
    props.experimentPlannerStates.setHidden(true);
    props.integrationProfilerStates.setHidden(false)
  }

  function showNextBestPlannerOrientation() {
    props.serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "get_next_best_planner_orientation",
      "orientations": props.experimentPlannerStates.orientations,
      "dmin" : props.experimentPlannerStates.dmin
    }));
  }

  function storePlannerReflections() {

  props.experimentPlannerStates.setNumStoredOrientations(
    props.experimentPlannerStates.orientations.length
  );

  props.serverWS.current?.send(JSON.stringify({
    "channel": "server",
    "command": "store_planner_reflections",
    "orientations" : props.experimentPlannerStates.orientations,
    "num_reflections" : props.experimentPlannerStates.predReflections
  }));
}


  

  function clearPlannerReflections() {

    props.serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "clear_planner_reflections",
    }));
    props.experimentPlannerStates.setOrientations([]);
    props.experimentPlannerStates.setPredReflections([]);
    props.experimentPlannerStates.setNumStoredOrientations(0);

  }

  function recalculatePlannerReflections(){
    props.serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "recalculate_planner_reflections",
      "dmin" : props.experimentPlannerStates.dmin
    }));
    props.experimentPlannerStates.setOrientations([]);
    props.experimentPlannerStates.setPredReflections([]);
    props.experimentPlannerStates.setNumStoredOrientations(0);
  }

  function isNumber(n: string): boolean {
    const singleNumberPattern = /^\d*\.?\d*$/;
    return (singleNumberPattern.test(n) && n !== ".");
  }

  const [experimentPlannerDminValid, setExperimentPlannerDminValid] = useState<boolean>(true);

  function updateExperimentPlannerDmin(event: any){
    var cleanedInput = event.target.value.replace(" ", "");
    props.experimentPlannerStates.setDmin(cleanedInput);
    setExperimentPlannerDminValid(isNumber(cleanedInput) || cleanedInput === "");
    
    props.serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "update_user_dmin",
      "dmin" : cleanedInput
    }));



  }

  return (
    <Tabs className="h-full" defaultValue="experiment-viewer" onValueChange={(value) => props.setActiveTab(value)} value={props.activeTab}>
      <TabsList className="flex gap-5 w-full">
        <TabsTrigger
          className={props.experimentViewerStates.loading ? "border border-white flex-1" : "flex-1"} onClick={showExperimentViewer} value="experiment-viewer">
          <ClipLoader
            color={"#ffffff"}
            loading={props.experimentViewerStates.loading}
            aria-label="Loading Spinner"
            data-testid="loader"
            size={20} />
            <FontAwesomeIcon icon={faAsterisk} style={{ marginRight: '5px', marginTop: "0px" }} />
          Experiment
        </TabsTrigger>
        <TabsTrigger className={props.rLVStates.loading ? "border border-white flex-1" : "flex-1"} onClick={showRLV} value="rlv" disabled={!props.rLVStates.enabled}>
          <FontAwesomeIcon icon={faTh} style={{ marginRight: '5px', marginTop: "0px" }} />Reciprocal Lattice</TabsTrigger>
        <TabsTrigger className={props.experimentPlannerStates.loading ? "border border-white flex-1" : "flex-1"} onClick={showExperimentPlanner} value="experiment-planner" disabled={!props.experimentPlannerStates.enabled}>
          <ClipLoader
            color={"#ffffff"}
            loading={props.experimentPlannerStates.loading}
            aria-label="Loading Spinner"
            data-testid="loader"
            size={20} />
          <FontAwesomeIcon icon={faPencil} style={{ marginRight: '5px', marginTop: "0px" }} />Experiment Planner
        </TabsTrigger>
        <TabsTrigger className={props.integrationProfilerStates.loading ? "border border-white flex-1" : "flex-1"} onClick={showIntegrationProfiler} value="integration-profiler" disabled={!props.integrationProfilerStates.enabled}>
          <ClipLoader
            color={"#ffffff"}
            loading={props.integrationProfilerStates.loading}
            aria-label="Loading Spinner"
            data-testid="loader"
            size={20} />
          <FontAwesomeIcon icon={faAreaChart} style={{ marginRight: '5px', marginTop: "0px" }} />
        Integration Profiler</TabsTrigger>
        <TabsTrigger className="flex-1" value="reciprocal-space" disabled={true}><FontAwesomeIcon icon={faTh} style={{ marginRight: '5px', marginTop: "0px" }} />Reciprocal Space</TabsTrigger>
      </TabsList>
      <div className="h-[79vh] grid grid-rows-1 ">
        <TabsContent value="experiment-viewer" forceMount={true} className="h-full [grid-row:1] [grid-column:1] ">
          <div style={{visibility: props.experimentViewerStates.hidden ? 'hidden' :'visible', position : 'relative' }} className="h-full w-full">
            <Card className={props.experimentViewerStates.loading ? "h-full border border-white" : "h-full"}>
              <CardContent className="h-full">
                <iframe src="src/assets/ExperimentViewerHeadless.html" className="w-full h-[50vh]">
                </iframe>
                <div className="w-[100%]">
                <LinePlot
                  lineplotData={props.experimentViewerStates.lineplotData}
                  lineplotBboxData={props.experimentViewerStates.lineplotBboxData}
                  lineplotCentroidData={props.experimentViewerStates.lineplotCentroidData}
                  lineplotTitle={props.experimentViewerStates.lineplotTitle}
                  selectedReflectionId={props.selectedReflectionId}
                  setSelectedReflectionId={props.setSelectedReflectionId}
                  serverWS={props.experimentViewerStates.serverWS}
                  newReflectionXYStored={props.experimentViewerStates.newReflectionXYStored} 
                  currentMinTOF={props.experimentViewerStates.currentMinTOF}
                  minTOF={props.experimentViewerStates.minTOF}
                  maxTOF={props.experimentViewerStates.maxTOF}
                  debugMode={props.experimentViewerStates.debugMode}
                  debugImageIdx={props.experimentViewerStates.debugImageIdx}
                  setDebugImageIdx={props.experimentViewerStates.setDebugImageIdx}
                  currentMaxTOF={props.experimentViewerStates.currentMaxTOF}/></div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="rlv" className="[grid-row:1] [grid-column:1] overflow-y-hidden" forceMount={true}>
          <div style={{visibility: props.rLVStates.hidden ? 'hidden' :'visible', position : 'relative', overflow : "hidden" }} className="w-full">
            <Card className="h-[84vh] w-full overflow-y-hidden">
              <CardContent className="h-4/6 overflow-y-hidden">
                <iframe scrolling="no" src="src/assets/ReciprocalLatticeViewerHeadless.html" className="w-full h-full overflow-y-hidden">
                </iframe>
              </CardContent>
              <CardFooter>
                  <Button disabled={false} 
                    onClick={showRLVOrientationView}
                    variant={props.rLVStates.orientationViewSelected?"default":"outline"} style={{ margin: "0px 0px 5px 5px", padding: "0px 6px" }}
                  ><FontAwesomeIcon icon={faRepeat} style={{ marginRight: '5px', marginTop: "-2px" }} /> Orientation View</Button>
                  <Button disabled={false} 
                    onClick={showRLVCrystalView}
                    variant={!props.rLVStates.orientationViewSelected?"default":"outline"} style={{ margin: "0px 0px 5px 5px", padding: "0px 6px" }}
                  ><FontAwesomeIcon icon={faCube} style={{ marginRight: '5px', marginTop: "-2px" }} /> Crystal View</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent
          value="experiment-planner"
          className="[grid-row:1] [grid-column:1]" forceMount={true}>
          <div style={{visibility: props.experimentPlannerStates.hidden ? 'hidden' :'visible', position : 'relative' }} className="w-full">
            <Card className={props.experimentPlannerStates.loading ? "h-[84vh] w-full border-white" : "h-[84vh] w-full"}>
              <CardContent className="h-4/6">
                <iframe src="src/assets/ExperimentPlannerHeadless.html" className="w-full h-full">
                </iframe>
                <div  className={"flex justify-between items-center space-x-5"}>
                  <div className="flex items-center space-x-2">
                  <Button disabled={props.experimentPlannerStates.loading}
                    onClick={storePlannerReflections}
                    variant={"outline"} style={{ margin: "0px 0px 5px 5px", padding: "0px 6px" }}
                  ><FontAwesomeIcon icon={faLock} style={{ marginRight: '5px', marginTop: "-2px" }} /> Store</Button>
                  <Button disabled={props.experimentPlannerStates.loading} onClick={showNextBestPlannerOrientation} 
                    variant={"outline"} style={{ margin: "0px 0px 5px 5px", padding: "0px 6px" }}>
                    <FontAwesomeIcon icon={faPlusSquare} style={{ marginRight: '5px', marginTop: "-2px" }} />Next Best </Button>
                  <Button disabled={props.experimentPlannerStates.loading} onClick={clearPlannerReflections} 
                    variant={"outline"} style={{ margin: "0px 0px 5px 5px", padding: "0px 6px" }}>
                    <FontAwesomeIcon icon={faTrash} style={{ marginRight: '5px', marginTop: "-2px" }} />Clear </Button>
                  <Button disabled={props.experimentPlannerStates.loading} onClick={recalculatePlannerReflections} 
                    variant={"outline"} style={{ margin: "0px 0px 5px 5px", padding: "0px 6px" }}>
                    <FontAwesomeIcon icon={faRepeat} style={{ marginRight: '5px', marginTop: "-2px" }} />Calculate </Button>
                    </div>
                    <div className="ml-auto flex items-center space-x-2">
                    <Label> dmin</Label>
                    <Input 
                      value={props.experimentPlannerStates.dmin.toString()} 
                      onChange={(event) =>
                        updateExperimentPlannerDmin(event)
                      }
                      style={{ borderColor: experimentPlannerDminValid ? "" : "red" }}
                      className="w-20"></Input></div>
                </div>
                <PlannerBarChart
                  orientations={props.experimentPlannerStates.orientations}
                  reflections={props.experimentPlannerStates.reflections}
                  predReflections={props.experimentPlannerStates.predReflections}
                  completeness={props.experimentPlannerStates.completeness}
                />
              </CardContent>
              <CardFooter>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent
          value="integration-profiler"
          className="[grid-row:1] [grid-column:1]" forceMount={true}>
          <div style={{visibility : props.integrationProfilerStates.hidden? 'hidden' : 'visible'}} className="w-full">
            <Card className={props.integrationProfilerStates.loading ? "h-[84vh] w-full border-white" : "h-[84vh] w-full"}>
              <CardContent className="h-4/6">
                <div className="flex flex-col gap-0">
                <IntegrationLinePlot
                  tof={props.integrationProfilerStates.tof}
                  lineplotTitle={props.integrationProfilerStates.title}
                  intensity={props.integrationProfilerStates.intensity}
                  background={props.integrationProfilerStates.background}
                  lineProfile={props.integrationProfilerStates.lineProfile}
                  lineProfileValue={props.integrationProfilerStates.lineProfileValue}
                  lineProfileSigma={props.integrationProfilerStates.lineProfileSigma}
                  summationValue={props.integrationProfilerStates.summationValue}
                  summationSigma={props.integrationProfilerStates.summationSigma}
                  setLoading={props.integrationProfilerStates.setLoading}
                  serverWS={props.integrationProfilerStates.serverWS}
                  reflectionID={props.integrationProfilerStates.reflectionID}
                  emptyRun={props.integrationProfilerStates.emptyRun}
                  setEmptyRun={props.integrationProfilerStates.setEmptyRun}
                  vanadiumRun={props.integrationProfilerStates.vanadiumRun}
                  setVanadiumRun={props.integrationProfilerStates.setVanadiumRun}
                  sampleDensity={props.integrationProfilerStates.sampleDensity}
                  setSampleDensity={props.integrationProfilerStates.setSampleDensity}
                  sampleRadius={props.integrationProfilerStates.sampleRadius}
                  setSampleRadius={props.integrationProfilerStates.setSampleRadius}
                  sampleAbsorptionXSection={props.integrationProfilerStates.sampleAbsorptionXSection}
                  setSampleAbsorptionXSection={props.integrationProfilerStates.setSampleAbsorptionXSection}
                  sampleScatteringXSection={props.integrationProfilerStates.sampleScatteringXSection}
                  setSampleScatteringXSection={props.integrationProfilerStates.setSampleScatteringXSection}
                  vanadiumDensity={props.integrationProfilerStates.vanadiumDensity}
                  setVanadiumDensity={props.integrationProfilerStates.setVanadiumDensity}
                  vanadiumRadius={props.integrationProfilerStates.vanadiumRadius}
                  setVanadiumRadius={props.integrationProfilerStates.setVanadiumRadius}
                  vanadiumAbsorptionXSection={props.integrationProfilerStates.vanadiumAbsorptionXSection}
                  setVanadiumAbsorptionXSection={props.integrationProfilerStates.setVanadiumAbsorptionXSection}
                  vanadiumScatteringXSection={props.integrationProfilerStates.vanadiumScatteringXSection}
                  setVanadiumScatteringXSection={props.integrationProfilerStates.setVanadiumScatteringXSection}
                  applyLorentz={props.integrationProfilerStates.applyLorentz}
                  setApplyLorentz={props.integrationProfilerStates.setApplyLorentz}
                  applyIncidentSpectrum={props.integrationProfilerStates.applyIncidentSpectrum}
                  setApplyIncidentSpectrum={props.integrationProfilerStates.setApplyIncidentSpectrum}
                  applySphericalAbsorption={props.integrationProfilerStates.applySphericalAbsorption}
                  setApplySphericalAbsorption={props.integrationProfilerStates.setApplySphericalAbsorption}
                  tOFPadding={props.integrationProfilerStates.tOFPadding}
                  setTOFPadding={props.integrationProfilerStates.setTOFPadding}
                  xYPadding={props.integrationProfilerStates.xYPadding}
                  setXYPadding={props.integrationProfilerStates.setXYPadding}
                />
                <div className="flex gap-5">
              <div  className="relative">
                <div
                  className="absolute top-2 left-2 bg-black bg-opacity-0 text-white text-sm px-2 py-1 rounded"
                  style={{ zIndex: 10 }}
                >
                  2D
                </div>
                <HeatMap 
                  data={props.integrationProfilerStates.shoeboxData2D} 
                  mask={props.integrationProfilerStates.shoeboxMaskData2D} 
                />
              </div>
              <div className="relative flex-1">
                <div
                  className="absolute top-2 left-2 bg-black bg-opacity-0 text-white text-sm px-2 py-1 rounded"
                  style={{ zIndex: 10 }}
                >
                  3D
                </div>
                  <iframe 
                    src="src/assets/ShoeboxViewerHeadless.html" 
                    className="w-full border border-[#666666] rounded-lg h-56"
                  />
              </div>
            </div>
            <div className="flex gap-3 justify-center -mt-5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#96f97b]"></div>
              <Label className="text-[#96f97b]">foreground</Label>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#6a7688]"></div> 
              <Label className="text-[#6a7688]">background</Label>
            </div>
            </div>
                </div>
              </CardContent>
              <CardFooter>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  )
}
