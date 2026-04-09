
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
} from "@/components/ui/tabs"
import { ProgressTabTrigger } from "@/components/ui/ProgressTabTrigger"
import { LinePlot } from "./LinePlot"
import { IntegrationLinePlot } from "./IntegrationLinePlot"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PlannerBarChart } from "./PlannerBarChart"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThLarge, faLock, faRepeat, faCube, faTrash, faPencil, faAsterisk, faAreaChart, faTh, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react"
import { TabLoadingIndicator } from "@/components/ui/TabLoadingIndicator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { HeatMap } from "./Heatmap"
import { useEffect, useRef } from "react"
import { useRootContext } from "@/contexts/RootContext"
import { useExperimentViewerContext } from "@/contexts/ExperimentViewerContext"
import { useRLVContext } from "@/contexts/RLVContext"
import { useExperimentPlannerContext } from "@/contexts/ExperimentPlannerContext"
import { useIntegrationProfilerContext } from "@/contexts/IntegrationProfilerContext"
import { Status } from "@/types"
import { useIntegrateContext } from "@/contexts/IntegrateContext"
import { isNumber } from "@/utils"

export function StateTabs() {

  const [activeTab, setActiveTab] = useState<string>("experiment-viewer");

  const {
    serverWS,
    setActiveStateTab,
    activeStateTab,
  } = useRootContext();

  const {
    hidden: experimentViewerHidden,
    setHidden: setExperimentViewerHidden,
    status: experimentViewerStatus,
    progress: experimentViewerProgress,
  } = useExperimentViewerContext();

  const {
    hidden: rLVHidden,
    setHidden: setRLVHidden,
    status: rLVStatus,
    enabled: rLVEnabled,
    progress: rLVProgress,
    colorMode: rLVColorMode,
    setColorMode: setRLVColorMode,
    meshVisible: rLVMeshVisible,
    setMeshVisible: setRLVMeshVisible
  } = useRLVContext();

  const rLVMeshVisibleRef = useRef(rLVMeshVisible);

  const {
    hidden: experimentPlannerHidden,
    setHidden: setExperimentPlannerHidden,
    status: experimentPlannerStatus,
    progress: experimentPlannerProgress,
    enabled: experimentPlannerEnabled,
    orientations: experimentPlannerOrientations,
    setOrientations: setExperimentPlannerOrientations,
    predReflections: experimentPlannerPredReflections,
    setPredReflections: setExperimentPlannerPredReflections,
    dmin: experimentPlannerDmin,
    setDmin: setExperimentPlannerDmin,
    setNumStoredOrientations: setExperimentPlannerNumStoredOrientations
  } = useExperimentPlannerContext();

  const {
    hidden: integrationProfilerHidden,
    setHidden: setIntegrationProfilerHidden,
    enabled: integrationProfilerEnabled,
    status: integrationProfilerStatus,
    progress: integrationProfilerProgress,
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

  function showRLVOrientationView() {
    setRLVColorMode('orientation');
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "show_rlv_orientation_view",
    }));
  }

  function showRLVCrystalView() {
    setRLVColorMode('crystal');
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "show_rlv_crystal_view",
    }));
  }

  function showRLVResolutionView() {
    setRLVColorMode('resolution');
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "show_rlv_resolution_view",
    }));
  }

  function toggleReciprocalSpaceMesh() {
    setRLVMeshVisible(!rLVMeshVisibleRef.current)
    rLVMeshVisibleRef.current = !rLVMeshVisibleRef.current;

    if (rLVMeshVisibleRef.current) {
      serverWS.current?.send(JSON.stringify({
        "channel": "server",
        "command": "show_rlv_mesh",
      }));
    }
    else {
      serverWS.current?.send(JSON.stringify({
        "channel": "server",
        "command": "hide_rlv_mesh",
      }));

    }

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
      "dmin": experimentPlannerDmin
    }));
  }

  function storePlannerReflections() {

    setExperimentPlannerNumStoredOrientations(
      experimentPlannerOrientations.length
    );

    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "store_planner_reflections",
      "orientations": experimentPlannerOrientations,
      "num_reflections": experimentPlannerPredReflections
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

  function recalculatePlannerReflections() {
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "recalculate_planner_reflections",
      "dmin": experimentPlannerDmin
    }));
    setExperimentPlannerOrientations([]);
    setExperimentPlannerPredReflections([]);
    setExperimentPlannerNumStoredOrientations(0);
  }


  const [experimentPlannerDminValid, setExperimentPlannerDminValid] = useState<boolean>(true);

  function updateExperimentPlannerDmin(val: string | number) {
    if (typeof val !== "string"){
      setExperimentPlannerDmin(val);
      serverWS.current?.send(JSON.stringify({
        "channel": "server",
        "command": "update_user_dmin",
        "dmin": val
      }));
    }
    else{
      var cleanedInput = val.replace(" ", "");
      setExperimentPlannerDminValid(isNumber(cleanedInput) || cleanedInput === "");
      if (isNumber(cleanedInput)){
        setExperimentPlannerDmin(parseFloat(cleanedInput));
      }
      serverWS.current?.send(JSON.stringify({
        "channel": "server",
        "command": "update_user_dmin",
        "dmin": cleanedInput
      }));
    }


  }


  useEffect(() => {
    setActiveStateTab(activeTab)
  }, [activeTab]);

  useEffect(() => {
    setActiveTab(activeStateTab)
    if (activeStateTab === "experiment-planner"){
      updateExperimentPlannerDmin(experimentPlannerDmin.valueOf());
    }
  }, [activeStateTab]);


  useEffect(() => { 
    setActiveTab("experiment-viewer");
  },[]);

  return (
    <Tabs className="h-full" defaultValue="experiment-viewer" onValueChange={(value) => setActiveTab(value)} value={activeTab}>
      <TabsList className="flex gap-5 w-full">
        <ProgressTabTrigger
          progress={experimentViewerProgress} className={experimentViewerStatus === Status.Loading ? "border border-white flex-1" : "flex-1"} onClick={showExperimentViewer} value="experiment-viewer">
          <TabLoadingIndicator loading={experimentViewerStatus === Status.Loading} />
          <FontAwesomeIcon icon={faAsterisk} style={{ marginRight: '5px', marginTop: "0px" }} />
          Experiment
        </ProgressTabTrigger>
        <ProgressTabTrigger progress={rLVProgress} className={rLVStatus === Status.Loading ? "border border-white flex-1" : "flex-1"} onClick={showRLV} value="rlv" disabled={!rLVEnabled}>
          <TabLoadingIndicator loading={rLVStatus === Status.Loading} />
          <FontAwesomeIcon icon={faTh} style={{ marginRight: '5px', marginTop: "0px" }} />Reciprocal Lattice</ProgressTabTrigger>
        <ProgressTabTrigger progress={experimentPlannerProgress} className={experimentPlannerStatus === Status.Loading ? "border border-white flex-1" : "flex-1"} onClick={showExperimentPlanner} value="experiment-planner" disabled={!experimentPlannerEnabled}>
          <TabLoadingIndicator loading={experimentPlannerStatus === Status.Loading} />
          <FontAwesomeIcon icon={faPencil} style={{ marginRight: '5px', marginTop: "0px" }} />Experiment Planner
        </ProgressTabTrigger>
        <ProgressTabTrigger progress={integrationProfilerProgress} className={integrationProfilerStatus === Status.Failed ? "border border-red-500 flex-1" : integrationProfilerStatus === Status.Loading ? "border border-white flex-1" : "flex-1"} onClick={showIntegrationProfiler} value="integration-profiler" disabled={!integrationProfilerEnabled}>
          <TabLoadingIndicator loading={integrationProfilerStatus === Status.Loading} />
          <FontAwesomeIcon icon={faAreaChart} style={{ marginRight: '5px', marginTop: "0px" }} />
          Integration Profiler</ProgressTabTrigger>
      </TabsList>
      <div className="h-[79vh] grid grid-rows-1 ">
        <TabsContent value="experiment-viewer" forceMount={true} className="h-full [grid-row:1] [grid-column:1] ">
          <div style={{ visibility: experimentViewerHidden ? 'hidden' : 'visible', position: 'relative' }} className="h-full w-full">
            <Card className={experimentViewerStatus === Status.Loading ? "h-full border border-white" : "h-full"}>
              <CardContent className="h-full overflow-x-hidden">
                <iframe scrolling="no" src="src/assets/ExperimentViewer/ExperimentViewerHeadless.html" className="w-full h-[50vh] overflow-x-hidden">
                </iframe>
                <div className="w-[100%]">
                  <LinePlot />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="rlv" className="[grid-row:1] [grid-column:1] overflow-y-hidden" forceMount={true}>
          <div style={{ visibility: rLVHidden ? 'hidden' : 'visible', position: 'relative', overflow: "hidden" }} className="w-full">
            <Card className={rLVStatus === Status.Loading ? "h-[84vh] w-full overflow-y-hidden border border-white" : "h-[84vh] w-full overflow-y-hidden"}>
              <CardContent className="h-4/6 overflow-y-hidden">
                <iframe scrolling="no" src="src/assets/ReciprocalLatticeViewer/ReciprocalLatticeViewerHeadless.html" className="w-full h-full overflow-y-hidden">
                </iframe>
              </CardContent>
              <CardFooter>
                <div style={{ display: 'flex', alignItems: 'center', margin: "0px 0px 5px 5px", gap: '12px' }}>
                  <span style={{ fontWeight: 'bold', fontSize: '0.875rem' }}>Color by</span>
                  <Select value={rLVColorMode} onValueChange={(value) => {
                    if (value === 'orientation') showRLVOrientationView();
                    else if (value === 'crystal') showRLVCrystalView();
                    else showRLVResolutionView();
                  }}>
                    <SelectTrigger style={{ width: '140px', height: '36px' }}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="orientation">Orientation</SelectItem>
                      <SelectItem value="crystal">Crystal</SelectItem>
                      <SelectItem value="resolution">Resolution</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button disabled={false}
                  onClick={toggleReciprocalSpaceMesh}
                  variant="outline" style={{ margin: "0px 0px 5px 5px", padding: "0px 6px", ...(rLVMeshVisible ? { backgroundColor: '#a8d5a2', borderColor: '#a8d5a2', color: '#1a3a1a' } : {}) }}
                ><FontAwesomeIcon icon={faThLarge} style={{ marginRight: '5px', marginTop: "-2px" }} /> Reciprocal Mesh</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent
          value="experiment-planner"
          className="[grid-row:1] [grid-column:1]" forceMount={true}>
          <div style={{ visibility: experimentPlannerHidden ? 'hidden' : 'visible', position: 'relative' }} className="w-full">
            <Card className={experimentPlannerStatus === Status.Loading ? "h-[84vh] w-full border-white" : "h-[84vh] w-full"}>
              <CardContent className="h-4/6">
                <iframe src="src/assets/ExperimentPlanner/ExperimentPlannerHeadless.html" className="w-full h-full">
                </iframe>
                <div className={"flex justify-between items-center space-x-5"}>
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
                        updateExperimentPlannerDmin(event.target.value)
                      }
                      style={{ borderColor: experimentPlannerDminValid ? "" : "red" }}
                      className="w-20"></Input></div>
                </div>
                <PlannerBarChart />
              </CardContent>
              <CardFooter>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent
          value="integration-profiler"
          className="[grid-row:1] [grid-column:1]" forceMount={true}>
          <div style={{ visibility: integrationProfilerHidden ? 'hidden' : 'visible' }} className="w-full">
            <Card className={integrationProfilerStatus === Status.Loading ? "h-[84vh] w-full border-white" : integrationProfilerStatus === Status.Failed ? "h-[84vh] w-full border-red-500" : "h-[84vh] w-full"}>
              <CardContent className="h-4/6">
                <div className="flex flex-col gap-0">
                  <IntegrationLinePlot />
                  <div className="flex gap-5">
                    <div className="relative">
                      <div
                        className="absolute top-2 left-2 bg-black bg-opacity-0 text-white text-sm px-2 py-1 rounded"
                        style={{ zIndex: 10 }}
                      >
                        2D
                      </div>
                      <HeatMap />
                    </div>
                    <div className="relative flex-1">
                      <div
                        className="absolute top-2 left-2 bg-black bg-opacity-0 text-white text-sm px-2 py-1 rounded"
                        style={{ zIndex: 10 }}
                      >
                        3D
                      </div>
                      <iframe
                        src="src/assets/ShoeboxViewer/ShoeboxViewerHeadless.html"
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
