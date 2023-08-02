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
} from "@/components/ui/table"
import { Reflection } from "@/types"
 
export function ReflectionTableSheet(props:{enabled:boolean, reflections: Reflection[]}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" disabled={!props.enabled}>Reflection Table</Button>
      </SheetTrigger>
      <SheetContent className="w-[930px] sm:max-w-none overflow-scroll">
        <SheetHeader>
          <SheetTitle>Reflection Table</SheetTitle>
          <SheetDescription>
          </SheetDescription>
        </SheetHeader>
		<ReflectionTable reflections={props.reflections}></ReflectionTable>
      </SheetContent>
    </Sheet>
  )
}

export function ReflectionTable(props: {reflections: Reflection[]}) {
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
          <TableRow key={reflection.id}>
            <TableCell className="text-center">{reflection.panel}</TableCell>
            <TableCell className="text-center">{reflection.millerIdx}</TableCell>
            <TableCell className="text-center">{reflection.XYZObs}</TableCell>
            <TableCell className="text-center">{reflection.XYZCal}</TableCell>
            <TableCell className="text-center">{reflection.wavelength}</TableCell>
            <TableCell className="text-center">{reflection.tof}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}