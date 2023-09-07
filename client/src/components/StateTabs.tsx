
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
import { ExperimentViewerStates, RLVStates } from "@/types"
 
export function StateTabs(props: {
  experimentViewerStates: ExperimentViewerStates,
  rLVStates: RLVStates
	selectedReflectionId: string,
	setSelectedReflectionId: React.Dispatch<React.SetStateAction<string>>,
}) {

  function showExperimentViewer(){
    props.rLVStates.setHidden(true);
    props.experimentViewerStates.setHidden(false);
  }

  function showRLV(){
    props.experimentViewerStates.setHidden(true);
    props.rLVStates.setHidden(false);
  }

  return (
    <Tabs defaultValue="experiment-viewer" >
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger onClick={showExperimentViewer} value="experiment-viewer">Experiment</TabsTrigger>
        <TabsTrigger onClick={showRLV} value="rlv" disabled={!props.rLVStates.enabled}>Reciprocal Lattice</TabsTrigger>
        <TabsTrigger  value="experiment-planner" disabled={true}>Experiment Planner</TabsTrigger>
        <TabsTrigger  value="integration-profiler" disabled={true}>Integration Profiler</TabsTrigger>
        <TabsTrigger  value="integration-profiler" disabled={true}>Reciprocal Space</TabsTrigger>
      </TabsList>
      <TabsContent value="experiment-viewer" forceMount={true}>
        <div hidden={props.experimentViewerStates.hidden}>
        <Card className="h-[85vh]" style={
          {
          position: "absolute",
          top:"13vh",
          left: ".2vh",
          width: "49.4vw"

          }
        }>
          <CardContent>
			<iframe src="src/assets/ExperimentViewerHeadless.html" className="w-full h-[60vh]"
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
          <CardFooter>
          </CardFooter>
        </Card>
        </div>
      </TabsContent>
      <TabsContent value="rlv" className="h-[85vh]" forceMount={true}>
        <div hidden={props.rLVStates.hidden}>
        <Card className="h-[85vh]" style={
          {
          position: "absolute",
          top:"13vh",
          left: ".2vh",
          width: "49.4vw"

          }
        }>
          <CardContent>
			<iframe src="src/assets/ReciprocalLatticeViewerHeadless.html" className="w-full h-[60vh]" style={{
        }}>
      </iframe>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
        </div>
      </TabsContent>
    </Tabs>
  )
}