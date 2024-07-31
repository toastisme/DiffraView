
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
import { faLock, faRepeat, faTrash, faPencil, faAsterisk, faAreaChart, faTh } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react"
import ClipLoader from "react-spinners/ClipLoader";
import { CSSProperties } from "react"

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

  const [experimentPlannerButtonsHidden, setExperimentalPlannerButtonsHidden] = useState<boolean>(true);

  function showExperimentViewer() {
    props.rLVStates.setHidden(true);
    props.experimentPlannerStates.setHidden(true);
    props.integrationProfilerStates.setHidden(true)
    props.experimentViewerStates.setHidden(false);
    setExperimentalPlannerButtonsHidden(true);
  }

  function showRLV() {
    props.experimentViewerStates.setHidden(true);
    props.experimentPlannerStates.setHidden(true);
    props.integrationProfilerStates.setHidden(true)
    props.rLVStates.setHidden(false);
    setExperimentalPlannerButtonsHidden(true);
  }

  function showExperimentPlanner() {
    props.experimentViewerStates.setHidden(true);
    props.rLVStates.setHidden(true);
    props.integrationProfilerStates.setHidden(true)
    props.experimentPlannerStates.setHidden(false);
    setExperimentalPlannerButtonsHidden(false);
  }

  function showIntegrationProfiler() {
    props.experimentViewerStates.setHidden(true);
    props.rLVStates.setHidden(true);
    props.experimentPlannerStates.setHidden(true);
    setExperimentalPlannerButtonsHidden(true);
    props.integrationProfilerStates.setHidden(false)
  }

  function showNextBestPlannerOrientation() {
    props.serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "get_next_best_planner_orientation",
      "orientations": props.experimentPlannerStates.orientations
    }));
  }

  function storePlannerReflections() {
    props.serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "store_planner_reflections",
    }));

    const orientation = props.experimentPlannerStates.orientations[
      props.experimentPlannerStates.orientations.length - 1
    ];

    props.experimentPlannerStates.setOrientations(prevOrientations => [...prevOrientations, orientation]);
    props.experimentPlannerStates.setReflections(prevReflections => [...prevReflections, 0]);

  }

  function clearPlannerReflections() {

    const orientation = props.experimentPlannerStates.orientations[
      props.experimentPlannerStates.orientations.length - 1
    ];

    props.serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "orientations": [orientation],
      "reflections": [0],
      "command": "clear_planner_reflections",
    }));

    props.experimentPlannerStates.setOrientations([orientation]);
    props.experimentPlannerStates.setReflections([0]);

  }

  const experimentViewerLoaderCSSOverride: CSSProperties = {
    display: props.experimentViewerStates.loading ? "inline" : "none",
    marginLeft: "-6.8vw",
    marginRight: "5.75vw",
  };


  return (
    <Tabs defaultValue="experiment-viewer" onValueChange={(value) => props.setActiveTab(value)} value={props.activeTab}>
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger
          className={props.experimentViewerStates.loading ? "border border-white" : ""} onClick={showExperimentViewer} value="experiment-viewer"><FontAwesomeIcon icon={faAsterisk} style={{ marginRight: '5px', marginTop: "0px" }} />
          Experiment
          <ClipLoader
            color={"#ffffff"}
            loading={true}
            aria-label="Loading Spinner"
            data-testid="loader"
            cssOverride={experimentViewerLoaderCSSOverride}
            size={20} />
        </TabsTrigger>
        <TabsTrigger className={props.rLVStates.loading ? "border border-white" : ""} onClick={showRLV} value="rlv" disabled={!props.rLVStates.enabled}><FontAwesomeIcon icon={faTh} style={{ marginRight: '5px', marginTop: "0px" }} />Reciprocal Lattice</TabsTrigger>
        <TabsTrigger className={props.experimentPlannerStates.loading ? "border border-white" : ""} onClick={showExperimentPlanner} value="experiment-planner" disabled={!props.experimentPlannerStates.enabled}><FontAwesomeIcon icon={faPencil} style={{ marginRight: '5px', marginTop: "0px" }} />Experiment Planner</TabsTrigger>
        <TabsTrigger className={props.integrationProfilerStates.loading ? "border border-white" : ""} onClick={showIntegrationProfiler} value="integration-profiler" disabled={!props.integrationProfilerStates.enabled}><FontAwesomeIcon icon={faAreaChart} style={{ marginRight: '5px', marginTop: "0px" }} />Integration Profiler</TabsTrigger>
        <TabsTrigger value="reciprocal-space" disabled={true}><FontAwesomeIcon icon={faTh} style={{ marginRight: '5px', marginTop: "0px" }} />Reciprocal Space</TabsTrigger>
      </TabsList>
      <div className="grid grid-rows-1 ">
        <TabsContent hidden={props.experimentViewerStates.hidden} value="experiment-viewer" forceMount={true} className="[grid-row:1] [grid-column:1] ">
          <div hidden={props.experimentViewerStates.hidden} className="w-full">
            <Card className={props.experimentViewerStates.loading ? "h-[84vh] border border-white" : "h-[84vh]"}>
              <CardContent className="h-4/6">
                <iframe src="src/assets/ExperimentViewerHeadless.html" className="w-full h-full"
                >
                </iframe>
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
                  currentMaxTOF={props.experimentViewerStates.currentMaxTOF}/>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent hidden={props.rLVStates.hidden} value="rlv" className="[grid-row:1] [grid-column:1]" forceMount={true}>
          <div hidden={props.rLVStates.hidden} className="w-full">
            <Card className="h-[84vh] w-full">
              <CardContent className="h-4/6">
                <iframe src="src/assets/ReciprocalLatticeViewerHeadless.html" className="w-full h-full" style={{
                }}>
                </iframe>
              </CardContent>
              <CardFooter>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent
          hidden={props.experimentPlannerStates.hidden}
          value="experiment-planner"
          className="[grid-row:1] [grid-column:1]" forceMount={true}>
          <div hidden={props.experimentPlannerStates.hidden} className="w-full">
            <Card className="h-[84vh] w-full">
              <CardContent className="h-4/6">
                <iframe src="src/assets/ExperimentPlannerHeadless.html" className="w-full h-full" style={{
                }}>
                </iframe>
                <div hidden={experimentPlannerButtonsHidden}>
                  <Button
                    onClick={storePlannerReflections}
                    variant={"outline"} style={{ padding: "0px 6px" }}
                  ><FontAwesomeIcon icon={faLock} style={{ marginRight: '5px', marginTop: "-2px" }} /> Store</Button>
                  <Button onClick={showNextBestPlannerOrientation} hidden={experimentPlannerButtonsHidden}
                    variant={"outline"} style={{ margin: "0px 0px 5px 5px", padding: "0px 6px" }}>
                    <FontAwesomeIcon icon={faRepeat} style={{ marginRight: '5px', marginTop: "-2px" }} />Next Best </Button>
                  <Button onClick={clearPlannerReflections} hidden={experimentPlannerButtonsHidden}
                    variant={"outline"} style={{ margin: "0px 0px 5px 5px", padding: "0px 6px" }}>
                    <FontAwesomeIcon icon={faTrash} style={{ marginRight: '5px', marginTop: "-2px" }} />Clear </Button>
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
          hidden={props.integrationProfilerStates.hidden}
          value="integration-profiler"
          className="[grid-row:1] [grid-column:1]" forceMount={true}>
          <div hidden={props.integrationProfilerStates.hidden} className="w-full">
            <Card className={props.integrationProfilerStates.loading ? "h-[84vh] w-full border-white" : "h-[84vh] w-full"}>
              <CardContent className="h-4/6">
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
                />
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
