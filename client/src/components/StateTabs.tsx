
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
import {LinePlot} from "./LinePlot"
import { ExperimentViewerStates, RLVStates, ExperimentPlannerStates } from "@/types"
import { Button } from "@/components/ui/button"
import { PlannerBarChart } from "./PlannerBarChart"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock, faRepeat} from '@fortawesome/free-solid-svg-icons';
 
export function StateTabs(props: {
  experimentViewerStates: ExperimentViewerStates,
  rLVStates: RLVStates
  experimentPlannerStates: ExperimentPlannerStates,
	selectedReflectionId: string,
	setSelectedReflectionId: React.Dispatch<React.SetStateAction<string>>,
  activeTab: string,
  setActiveTab: React.Dispatch<React.SetStateAction<string>>,
  serverWS: React.MutableRefObject<WebSocket | null>
}) {


  function showExperimentViewer(){
    props.rLVStates.setHidden(true);
    props.experimentPlannerStates.setHidden(true);
    props.experimentViewerStates.setHidden(false);
  }

  function showRLV(){
    props.experimentViewerStates.setHidden(true);
    props.experimentPlannerStates.setHidden(true);
    props.rLVStates.setHidden(false);
  }

  function showExperimentPlanner(){
    props.experimentViewerStates.setHidden(true);
    props.rLVStates.setHidden(true);
    props.experimentPlannerStates.setHidden(false);
  }

  function showNextBestPlannerOrientation(){
    props.serverWS.current?.send(JSON.stringify({
					"channel" : "server",
					"command" : "get_next_best_planner_orientation",
          "orientations" : props.experimentPlannerStates.orientations
    }));

  }

  return (
    <Tabs defaultValue="experiment-viewer" onValueChange={(value) => props.setActiveTab(value)} value={props.activeTab}>
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger onClick={showExperimentViewer} value="experiment-viewer">Experiment</TabsTrigger>
        <TabsTrigger onClick={showRLV} value="rlv" disabled={!props.rLVStates.enabled}>Reciprocal Lattice</TabsTrigger>
        <TabsTrigger onClick={showExperimentPlanner} value="experiment-planner" disabled={!props.experimentPlannerStates.enabled}>Experiment Planner</TabsTrigger>
        <TabsTrigger  value="integration-profiler" disabled={true}>Integration Profiler</TabsTrigger>
        <TabsTrigger  value="integration-profiler" disabled={true}>Reciprocal Space</TabsTrigger>
      </TabsList>
        <div className="grid grid-rows-1 ">
          <TabsContent hidden={props.experimentViewerStates.hidden} value="experiment-viewer" forceMount={true} className="[grid-row:1] [grid-column:1] ">
            <div hidden={props.experimentViewerStates.hidden} className="w-full">
            <Card className="h-[84vh]">
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
          setSelectedReflectionId={props.setSelectedReflectionId}/>
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
          <TabsContent hidden={props.experimentPlannerStates.hidden} value="experiment-planner" className="[grid-row:1] [grid-column:1]" forceMount={true}>
            <div hidden={props.experimentPlannerStates.hidden} className="w-full">
            <Card className="h-[84vh] w-full">
              <CardContent className="h-4/6">
          <iframe src="src/assets/ExperimentPlannerHeadless.html" className="w-full h-full" style={{
            }}>
          </iframe>
              <Button 
              onClick={showNextBestPlannerOrientation} 
              variant={"outline"} style={{ padding: "0px 6px"}}
              ><FontAwesomeIcon icon={faLock} style={{ marginRight: '5px', marginTop:"-2px"}}/> Store</Button>
              <Button onClick={showNextBestPlannerOrientation} 
              variant={"outline"} style={{ margin:"0px 0px 5px 5px", padding: "0px 6px"}}>
              <FontAwesomeIcon icon={faRepeat} style={{ marginRight: '5px', marginTop:"-2px"}}/>Next Best </Button>
          <PlannerBarChart 
            orientations={props.experimentPlannerStates.orientations}
            reflections={props.experimentPlannerStates.reflections}
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