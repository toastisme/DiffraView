
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
import { Button } from "@/components/ui/button"
import { PlannerBarChart } from "./PlannerBarChart"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock, faRepeat, faCube, faTrash, faPencil, faAsterisk, faAreaChart, faTh, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react"
import ClipLoader from "react-spinners/ClipLoader";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {HeatMap} from "./Heatmap"
import { useEffect, useRef } from "react"
import { useRootContext } from "@/contexts/RootContext"
import { useExperimentViewerContext } from "@/contexts/ExperimentViewerContext"
import { useRLVContext } from "@/contexts/RLVContext"
import { useExperimentPlannerContext } from "@/contexts/ExperimentPlannerContext"
import { useIntegrationProfilerContext } from "@/contexts/IntegrationProfilerContext"
import { Status } from "@/types"
import { useIntegrateContext } from "@/contexts/IntegrateContext"

export function StateTabs() {

  const [activeTab, setActiveTab] = useState<string>("experiment-viewer");

  const {
    serverWS,
    setActiveStateTab,
    activeStateTab,
  } = useRootContext();

  const {
    hidden : experimentViewerHidden,
    setHidden : setExperimentViewerHidden,
    status: experimentViewerStatus
  } = useExperimentViewerContext();

  const {
    hidden : rLVHidden,
    setHidden : setRLVHidden,
    status: rLVStatus,
    enabled: rLVEnabled,
    orientationViewSelected: rLVOrientationViewSelected,
    setOrientationViewSelected: setRLVOrientationViewSelected
  } = useRLVContext();

  const {
    hidden : experimentPlannerHidden,
    setHidden : setExperimentPlannerHidden,
    status: experimentPlannerStatus,
    enabled: experimentPlannerEnabled,
    orientations: experimentPlannerOrientations,
    setOrientations: setExperimentPlannerOrientations,
    predReflections: experimentPlannerPredReflections,
    setPredReflections: setExperimentPlannerPredReflections,
    dmin : experimentPlannerDmin,
    setDmin: setExperimentPlannerDmin,
    setNumStoredOrientations: setExperimentPlannerNumStoredOrientations
  } = useExperimentPlannerContext();

  const {
    hidden : integrationProfilerHidden,
    setHidden : setIntegrationProfilerHidden,
    enabled: integrationProfilerEnabled,
    status: integrationProfilerStatus,
    shoebox2D: integrationProfilerShoebox2D,
    shoeboxMaskEllipse2D: integrationProfilerShoeboxMaskEllipse2D,
    shoeboxMaskSeedSkewness2D: integrationProfilerShoeboxMaskSeedSkewness2D,
  } = useIntegrationProfilerContext();

  const {
    integrateMethod
  } = useIntegrateContext();

  function showExperimentViewer() {
    setRLVHidden(true);
    setExperimentPlannerHidden(true);
    setIntegrationProfilerHidden(true);
    setExperimentViewerHidden(false);
  }

  function showRLV() {
    setExperimentViewerHidden(true);
    setExperimentPlannerHidden(true);
    setIntegrationProfilerHidden(true);
    setRLVHidden(false);
  }

  function showRLVOrientationView(){
    setRLVOrientationViewSelected(true);
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "show_rlv_orientation_view",
    }));
  }
  
  function showRLVCrystalView(){
    setRLVOrientationViewSelected(false);
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "show_rlv_crystal_view",
    }));
  }
  

  function showExperimentPlanner() {
    setExperimentViewerHidden(true);
    experimentViewerHidden
    setRLVHidden(true);
    setIntegrationProfilerHidden(true);
    setExperimentPlannerHidden(false);
  }

  function showIntegrationProfiler() {
    setExperimentViewerHidden(true);
    setRLVHidden(true);
    setExperimentPlannerHidden(true);
    setIntegrationProfilerHidden(false);
  }

  function showNextBestPlannerOrientation() {
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "get_next_best_planner_orientation",
      "orientations": experimentPlannerOrientations,
      "dmin" : experimentPlannerDmin
    }));
  }

  function storePlannerReflections() {

    setExperimentPlannerNumStoredOrientations(
      experimentPlannerOrientations.length
    );

    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "store_planner_reflections",
      "orientations" : experimentPlannerOrientations,
      "num_reflections" :experimentPlannerPredReflections
    }));
}

  function clearPlannerReflections() {

    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "clear_planner_reflections",
    }));
    setExperimentPlannerOrientations([]);
    setExperimentPlannerPredReflections([]);
    setExperimentPlannerNumStoredOrientations(0);

  }

  function recalculatePlannerReflections(){
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "recalculate_planner_reflections",
      "dmin" : experimentPlannerDmin
    }));
    setExperimentPlannerOrientations([]);
    setExperimentPlannerPredReflections([]);
    setExperimentPlannerNumStoredOrientations(0);
  }

  function isNumber(n: string): boolean {
    const singleNumberPattern = /^\d*\.?\d*$/;
    return (singleNumberPattern.test(n) && n !== ".");
  }

  const [experimentPlannerDminValid, setExperimentPlannerDminValid] = useState<boolean>(true);

  function updateExperimentPlannerDmin(event: any){
    var cleanedInput = event.target.value.replace(" ", "");
    setExperimentPlannerDmin(cleanedInput);
    setExperimentPlannerDminValid(isNumber(cleanedInput) || cleanedInput === "");
    
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "update_user_dmin",
      "dmin" : cleanedInput
    }));

  }


  useEffect(() => {
    setActiveStateTab(activeTab)
  }, [activeTab]);

  useEffect(() => {
    setActiveTab(activeStateTab)
  }, [activeStateTab]);


  useEffect(() => {setActiveTab("experiment-viewer")}, []);

  return (
    <Tabs className="h-full" defaultValue="experiment-viewer" onValueChange={(value) => setActiveTab(value)} value={activeTab}>
      <TabsList className="flex gap-5 w-full">
        <TabsTrigger
          className={experimentViewerStatus === Status.Loading ? "border border-white flex-1" : "flex-1"} onClick={showExperimentViewer} value="experiment-viewer">
          <ClipLoader
            color={"#ffffff"}
            loading={experimentViewerStatus === Status.Loading}
            aria-label="Loading Spinner"
            data-testid="loader"
            size={20} />
            <FontAwesomeIcon icon={faAsterisk} style={{ marginRight: '5px', marginTop: "0px" }} />
          Experiment
        </TabsTrigger>
        <TabsTrigger className={rLVStatus === Status.Loading ? "border border-white flex-1" : "flex-1"} onClick={showRLV} value="rlv" disabled={!rLVEnabled}>
          <FontAwesomeIcon icon={faTh} style={{ marginRight: '5px', marginTop: "0px" }} />Reciprocal Lattice</TabsTrigger>
        <TabsTrigger className={experimentPlannerStatus === Status.Loading ? "border border-white flex-1" : "flex-1"} onClick={showExperimentPlanner} value="experiment-planner" disabled={!experimentPlannerEnabled}>
          <ClipLoader
            color={"#ffffff"}
            loading={experimentPlannerStatus === Status.Loading}
            aria-label="Loading Spinner"
            data-testid="loader"
            size={20} />
          <FontAwesomeIcon icon={faPencil} style={{ marginRight: '5px', marginTop: "0px" }} />Experiment Planner
        </TabsTrigger>
        <TabsTrigger className={integrationProfilerStatus === Status.Loading ? "border border-white flex-1" : "flex-1"} onClick={showIntegrationProfiler} value="integration-profiler" disabled={!integrationProfilerEnabled}>
          <ClipLoader
            color={"#ffffff"}
            loading={integrationProfilerStatus === Status.Loading}
            aria-label="Loading Spinner"
            data-testid="loader"
            size={20} />
          <FontAwesomeIcon icon={faAreaChart} style={{ marginRight: '5px', marginTop: "0px" }} />
        Integration Profiler</TabsTrigger>
        <TabsTrigger className="flex-1" value="reciprocal-space" disabled={true}><FontAwesomeIcon icon={faTh} style={{ marginRight: '5px', marginTop: "0px" }} />Reciprocal Space</TabsTrigger>
      </TabsList>
      <div className="h-[79vh] grid grid-rows-1 ">
        <TabsContent value="experiment-viewer" forceMount={true} className="h-full [grid-row:1] [grid-column:1] ">
          <div style={{visibility: experimentViewerHidden ? 'hidden' :'visible', position : 'relative' }} className="h-full w-full">
            <Card className={experimentViewerStatus === Status.Loading ? "h-full border border-white" : "h-full"}>
              <CardContent className="h-full overflow-x-hidden">
                <iframe src="src/assets/ExperimentViewerHeadless.html" className="w-full h-[50vh] overflow-x-hidden">
                </iframe>
                <div className="w-[100%]">
                <LinePlot/>
                  </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="rlv" className="[grid-row:1] [grid-column:1] overflow-y-hidden" forceMount={true}>
          <div style={{visibility: rLVHidden ? 'hidden' :'visible', position : 'relative', overflow : "hidden" }} className="w-full">
            <Card className="h-[84vh] w-full overflow-y-hidden">
              <CardContent className="h-4/6 overflow-y-hidden">
                <iframe scrolling="no" src="src/assets/ReciprocalLatticeViewerHeadless.html" className="w-full h-full overflow-y-hidden">
                </iframe>
              </CardContent>
              <CardFooter>
                  <Button disabled={false} 
                    onClick={showRLVOrientationView}
                    variant={rLVOrientationViewSelected ? "default":"outline"} style={{ margin: "0px 0px 5px 5px", padding: "0px 6px" }}
                  ><FontAwesomeIcon icon={faRepeat} style={{ marginRight: '5px', marginTop: "-2px" }} /> Orientation View</Button>
                  <Button disabled={false} 
                    onClick={showRLVCrystalView}
                    variant={!rLVOrientationViewSelected ? "default":"outline"} style={{ margin: "0px 0px 5px 5px", padding: "0px 6px" }}
                  ><FontAwesomeIcon icon={faCube} style={{ marginRight: '5px', marginTop: "-2px" }} /> Crystal View</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent
          value="experiment-planner"
          className="[grid-row:1] [grid-column:1]" forceMount={true}>
          <div style={{visibility: experimentPlannerHidden ? 'hidden' :'visible', position : 'relative' }} className="w-full">
            <Card className={ experimentPlannerStatus === Status.Loading ? "h-[84vh] w-full border-white" : "h-[84vh] w-full"}>
              <CardContent className="h-4/6">
                <iframe src="src/assets/ExperimentPlannerHeadless.html" className="w-full h-full">
                </iframe>
                <div  className={"flex justify-between items-center space-x-5"}>
                  <div className="flex items-center space-x-2">
                  <Button disabled={experimentPlannerStatus === Status.Loading}
                    onClick={storePlannerReflections}
                    variant={"outline"} style={{ margin: "0px 0px 5px 5px", padding: "0px 6px" }}
                  ><FontAwesomeIcon icon={faLock} style={{ marginRight: '5px', marginTop: "-2px" }} /> Store</Button>
                  <Button disabled={experimentPlannerStatus === Status.Loading} onClick={showNextBestPlannerOrientation} 
                    variant={"outline"} style={{ margin: "0px 0px 5px 5px", padding: "0px 6px" }}>
                    <FontAwesomeIcon icon={faPlusSquare} style={{ marginRight: '5px', marginTop: "-2px" }} />Next Best </Button>
                  <Button disabled={experimentPlannerStatus === Status.Loading} onClick={clearPlannerReflections} 
                    variant={"outline"} style={{ margin: "0px 0px 5px 5px", padding: "0px 6px" }}>
                    <FontAwesomeIcon icon={faTrash} style={{ marginRight: '5px', marginTop: "-2px" }} />Clear </Button>
                  <Button disabled={experimentPlannerStatus === Status.Loading} onClick={recalculatePlannerReflections} 
                    variant={"outline"} style={{ margin: "0px 0px 5px 5px", padding: "0px 6px" }}>
                    <FontAwesomeIcon icon={faRepeat} style={{ marginRight: '5px', marginTop: "-2px" }} />Calculate </Button>
                    </div>
                    <div className="ml-auto flex items-center space-x-2">
                    <Label> dmin</Label>
                    <Input 
                      value={experimentPlannerDmin.toString()} 
                      onChange={(event) =>
                        updateExperimentPlannerDmin(event)
                      }
                      style={{ borderColor: experimentPlannerDminValid ? "" : "red" }}
                      className="w-20"></Input></div>
                </div>
                <PlannerBarChart/>
              </CardContent>
              <CardFooter>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent
          value="integration-profiler"
          className="[grid-row:1] [grid-column:1]" forceMount={true}>
          <div style={{visibility : integrationProfilerHidden ? 'hidden' : 'visible'}} className="w-full">
            <Card className={integrationProfilerStatus === Status.Loading ? "h-[84vh] w-full border-white" : "h-[84vh] w-full"}>
              <CardContent className="h-4/6">
                <div className="flex flex-col gap-0">
                <IntegrationLinePlot/>
                <div className="flex gap-5">
              <div  className="relative">
                <div
                  className="absolute top-2 left-2 bg-black bg-opacity-0 text-white text-sm px-2 py-1 rounded"
                  style={{ zIndex: 10 }}
                >
                  2D
                </div>
                <HeatMap/>
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
