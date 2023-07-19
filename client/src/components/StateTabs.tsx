
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
 
export function StateTabs() {
  return (
    <Tabs defaultValue="experiment-viewer" className="w-full h-full">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="experiment-viewer">Experiment</TabsTrigger>
        <TabsTrigger value="rlv">Reciprocal Lattice</TabsTrigger>
      </TabsList>
      <TabsContent value="experiment-viewer" className="h-[800px]">
        <Card className="h-[800px]">
          <CardContent>
			<iframe src="" className="w-full h-[600px]"></iframe>
			<LinePlot></LinePlot>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="rlv" className="h-full">
        <Card className="h-full">
          <CardContent>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}