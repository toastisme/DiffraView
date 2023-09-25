
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
  activeTab: string,
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
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
    <Tabs defaultValue="experiment-viewer" onValueChange={(value) => props.setActiveTab(value)} value={props.activeTab}>
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger onClick={showExperimentViewer} value="experiment-viewer">Experiment</TabsTrigger>
        <TabsTrigger onClick={showRLV} value="rlv" disabled={!props.rLVStates.enabled}>Reciprocal Lattice</TabsTrigger>
        <TabsTrigger  value="experiment-planner" disabled={true}>Experiment Planner</TabsTrigger>
        <TabsTrigger  value="integration-profiler" disabled={true}>Integration Profiler</TabsTrigger>
        <TabsTrigger  value="integration-profiler" disabled={true}>Reciprocal Space</TabsTrigger>
      </TabsList>
        <div className="grid grid-rows-1 h-full">
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
        </div>
    </Tabs>
  )
}