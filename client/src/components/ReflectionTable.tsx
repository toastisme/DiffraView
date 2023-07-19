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
 
export function ReflectionTableSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Reflection Table</Button>
      </SheetTrigger>
      <SheetContent className="w-[930px] sm:max-w-none">
        <SheetHeader>
          <SheetTitle>Reflection Table</SheetTitle>
          <SheetDescription>
          </SheetDescription>
        </SheetHeader>
		<ReflectionTable></ReflectionTable>
      </SheetContent>
    </Sheet>
  )
}

const reflections = [
  {
    panel: "1",
	millerIdx: "(1,-1,3)",
    XYZObs: "(43.2, 10.0, 845.2)",
    XYZCal: "(44.0, 10.2, 844.8)",
  },
  {
    panel: "1",
	millerIdx: "(1,-1,3)",
    XYZObs: "(43.2, 10.0, 845.2)",
    XYZCal: "(44.0, 10.2, 844.8)",
  },
  {
    panel: "1",
	millerIdx: "(1,-1,3)",
    XYZObs: "(43.2, 10.0, 845.2)",
    XYZCal: "(44.0, 10.2, 844.8)",
  },
  {
    panel: "1",
	millerIdx: "(1,-1,3)",
    XYZObs: "(43.2, 10.0, 845.2)",
    XYZCal: "(44.0, 10.2, 844.8)",
  },
  {
    panel: "1",
	millerIdx: "(1,-1,3)",
    XYZObs: "(43.2, 10.0, 845.2)",
    XYZCal: "(44.0, 10.2, 844.8)",
  },
  {
    panel: "1",
	millerIdx: "(1,-1,3)",
    XYZObs: "(43.2, 10.0, 845.2)",
    XYZCal: "(44.0, 10.2, 844.8)",
  },
  {
    panel: "1",
	millerIdx: "(1,-1,3)",
    XYZObs: "(43.2, 10.0, 845.2)",
    XYZCal: "(44.0, 10.2, 844.8)",
  },
]
 
export function ReflectionTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">Panel</TableHead>
          <TableHead className="text-center">Miller Idx</TableHead>
          <TableHead className="text-center">XYZObs</TableHead>
          <TableHead className="text-center">XYZCal</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reflections.map((reflection) => (
          <TableRow key={reflection.panel}>
            <TableCell className="text-center">{reflection.panel}</TableCell>
            <TableCell className="text-center">{reflection.millerIdx}</TableCell>
            <TableCell className="text-center">{reflection.XYZObs}</TableCell>
            <TableCell className="text-center">{reflection.XYZCal}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}