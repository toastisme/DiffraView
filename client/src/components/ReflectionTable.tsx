import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  SelectableTableRow
} from "@/components/ui/table"
import { Reflection } from "@/types"
import { useState } from "react"
 
export function ReflectionTableSheet(
  props:{
    enabled:boolean, 
    reflections: Reflection[], 
    selectedReflectionId: string,
    setSelectedReflectionId: React.Dispatch<React.SetStateAction<string>>,
    serverWS: WebSocket}) {

  const [isOpen, setIsOpen] = useState(false);

  function handleSheetTrigger(){
    setIsOpen(!isOpen);
  }

  return (
    <Sheet modal={false} open={isOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" onClick={handleSheetTrigger} disabled={!props.enabled}>Reflection Table</Button>
      </SheetTrigger>
      <SheetContent className="w-[930px] sm:max-w-none overflow-scroll" setIsOpen={setIsOpen}>
        <SheetHeader>
          <SheetTitle>Reflection Table</SheetTitle>
          <SheetDescription>
          </SheetDescription>
        </SheetHeader>
		<ReflectionTable 
    reflections={props.reflections} 
    selectedReflectionId={props.selectedReflectionId}
    setSelectedReflectionId={props.setSelectedReflectionId}
    serverWS={props.serverWS}></ReflectionTable>
      </SheetContent>
    </Sheet>
  )
}

export function ReflectionTable(props: {
  reflections: Reflection[], 
  selectedReflectionId: string,
  setSelectedReflectionId: React.Dispatch<React.SetStateAction<string>>,
  serverWS: WebSocket}) {

  function clickedReflection(reflection: Reflection){
    const xyzArr: string[] = reflection.XYZObs.split(",");
    const x: number = parseFloat(xyzArr[0]);
    const y: number = parseFloat(xyzArr[1]);
    props.serverWS.send(JSON.stringify({
					"channel" : "server",
					"command" : "update_lineplot",
					"panel_idx" : reflection.panel,
          "name" : reflection.panelName,
					"panel_pos" : [x, y],
          "highlight_on_panel" : true
    }))
    props.setSelectedReflectionId(reflection.id);

  }


  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">Panel</TableHead>
          <TableHead className="text-center">Miller Idx</TableHead>
          <TableHead className="text-center">XYZObs</TableHead>
          <TableHead className="text-center">XYZCal</TableHead>
          <TableHead className="text-center">Wavelength (A)</TableHead>
          <TableHead className="text-center">ToF (usec)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.reflections.map((reflection) => (
          <SelectableTableRow 
          onClick={() => clickedReflection(reflection)} 
          isSelected={props.selectedReflectionId === reflection.id}
          key={reflection.id}>
            <TableCell  className="text-center">{reflection.panelName}</TableCell>
            <TableCell className="text-center">{reflection.millerIdx}</TableCell>
            <TableCell className="text-center">{reflection.XYZObs}</TableCell>
            <TableCell className="text-center">{reflection.XYZCal}</TableCell>
            <TableCell className="text-center">{reflection.wavelength}</TableCell>
            <TableCell className="text-center">{reflection.tof}</TableCell>
          </SelectableTableRow>
        ))}
      </TableBody>
    </Table>
  )
}