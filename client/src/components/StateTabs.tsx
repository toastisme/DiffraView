
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
import { IFrame } from "./IFrame"
import { ExperimentViewerStates, RLVStates } from "@/types"
 
export function StateTabs(props: {
  experimentViewerStates: ExperimentViewerStates,
  rLVStates: RLVStates
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
    <Tabs defaultValue="experiment-viewer" className="w-full h-full">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger onClick={showExperimentViewer} value="experiment-viewer">Experiment</TabsTrigger>
        <TabsTrigger onClick={showRLV} value="rlv" disabled={!props.rLVStates.enabled}>Reciprocal Lattice</TabsTrigger>
      </TabsList>
      <TabsContent value="experiment-viewer" className="h-[800px]" forceMount={true}>
        <div hidden={props.experimentViewerStates.hidden}>
        <Card className="h-[800px]" style={
          {
          position: "absolute",
          top:"14vh",
          left: ".2vh",
          width: "49.4vw"

          }
        }>
          <CardContent>
			<iframe src="src/assets/ExperimentViewerHeadless.html" className="w-full h-[600px]">
      </iframe>
			<LinePlot lineplotData={props.experimentViewerStates.lineplotData} lineplotTitle={props.experimentViewerStates.lineplotTitle}/>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
        </div>
      </TabsContent>
      <TabsContent value="rlv" className="h-full" forceMount={true}>
        <div hidden={props.rLVStates.hidden}>
        <Card className="h-[800px]" style={
          {
          position: "absolute",
          top:"14vh",
          left: ".2vh",
          width: "49.4vw"

          }
        }>
          <CardContent>
			<iframe src="src/assets/ReciprocalLatticeViewerHeadless.html" className="w-full h-[600px]" style={{
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