import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import {AlgorithmProps} from "../types";
import { ImportTab } from "./ImportTab"
 
export function AlgorithmTabs(props: { props: AlgorithmProps} ) {

  return (
    <Tabs defaultValue="import" className="w-full md:w-full lg:w-full xl:w-full h-full md:h-full lg:h-full xl:h-full">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="import">Import</TabsTrigger>
        <TabsTrigger value="find-spots" disabled={true}>Find Spots</TabsTrigger>
        <TabsTrigger value="index" disabled={true}>Index</TabsTrigger>
        <TabsTrigger value="refine" disabled={true}>Refine</TabsTrigger>
        <TabsTrigger value="integrate" disabled={true}>Integrate</TabsTrigger>
      </TabsList>
      <TabsContent value="import" className="w-full md:w-full lg:w-full xl:w-full h-full md:h-full lg:h-full xl:h-full">
        <ImportTab importStates={props.props.importStates} webSockets={props.props.webSockets}/>
      </TabsContent>
      <TabsContent value="find-spots">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}