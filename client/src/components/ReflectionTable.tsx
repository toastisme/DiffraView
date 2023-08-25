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
import { useState, useRef, useEffect } from "react"
 
export function ReflectionTableSheet(
  props:{
    enabled:boolean, 
    reflections: Reflection[], 
    selectedReflectionId: string,
    setSelectedReflectionId: React.Dispatch<React.SetStateAction<string>>,
    serverWS: React.MutableRefObject<WebSocket | null>}) {

  const [isOpen, setIsOpen] = useState(false);

  function handleSheetTrigger(){
    setIsOpen(!isOpen);
  }

  return (
    <Sheet modal={false} open={isOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" onClick={handleSheetTrigger} disabled={!props.enabled}>Reflection Table</Button>
      </SheetTrigger>
      <SheetContent id="reflection-table-sheet" className="w-[930px] sm:max-w-none overflow-scroll" setIsOpen={setIsOpen}>
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
  serverWS: React.MutableRefObject<WebSocket | null>}) {

  var sheetContentElement = document.getElementById("reflection-table-sheet");
  const [showScrollButton, setShowScrollButton] = useState(false);

  function clickedReflection(reflection: Reflection){

    const coords: number[] = reflection.XYZObs.substring(1, reflection.XYZObs.length - 1).split(',').map(numStr => parseFloat(numStr.trim()));

    props.serverWS.current?.send(JSON.stringify({
					"channel" : "server",
					"command" : "update_lineplot",
					"panel_idx" : reflection.panel,
          "name" : reflection.panelName,
					"panel_pos" : coords,
          "highlight_on_panel" : true
    }))
    props.setSelectedReflectionId(reflection.id);
  }
  const selectedRowElement: React.MutableRefObject<null | HTMLTableRowElement> = useRef(null);

  useEffect(() => {
      if (selectedRowElement.current) {
      selectedRowElement.current.scrollIntoView({
        behavior: 'smooth', 
        block: 'center',     
      });
    }
  }, [props.selectedReflectionId]);

  useEffect(() => {
    function handleScroll() {
      if (!sheetContentElement) return;

      if (sheetContentElement.scrollTop > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    }

    sheetContentElement = document.getElementById("reflection-table-sheet");

    if (sheetContentElement) {
      sheetContentElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (sheetContentElement) {
        sheetContentElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [])

  function scrollToTop(){
    if (sheetContentElement) {
      sheetContentElement.scrollTo({ top: 0, behavior: 'smooth' });
    }

  }

  interface sortingInterface{
    column: string | null
    direction : string 
  }


  const [sorting, setSorting] = useState<sortingInterface>({
    column: null,
    direction: 'asc',
  });

  const handleHeaderClick = (column : string) => {
    if (sorting.column === column) {
      setSorting({
        column,
        direction: sorting.direction === 'asc' ? 'desc' : 'asc',
      });
    } else {
      setSorting({
        column,
        direction: 'asc',
      });
    }
  };

  useEffect(() => {
    if (sorting.column != null) {
      props.reflections.sort(function(a, b) {
        const aValue: string = a[sorting.column as keyof Reflection];
        const bValue: string = b[sorting.column as keyof Reflection];
        return sorting.direction === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      });
    }
  }, [sorting]);

  return (
    <div>
    {(showScrollButton && <Button onClick={scrollToTop} variant={"secondary"} className="fixed left-3/4 bottom-5" > Scroll to top </Button>)}
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center" onClick={() => handleHeaderClick("panel")} style={{ cursor: 'pointer' }}> Panel</TableHead>
          <TableHead className="text-center" onClick={() => handleHeaderClick("millerIdx")} style={{ cursor: 'pointer' }}>Miller Idx</TableHead>
          <TableHead className="text-center" onClick={() => handleHeaderClick("XYZObs")} style={{ cursor: 'pointer' }}>XYZObs</TableHead>
          <TableHead className="text-center" onClick={() => handleHeaderClick("XYZCal")} style={{ cursor: 'pointer' }}>XYZCal</TableHead>
          <TableHead className="text-center" onClick={() => handleHeaderClick("wavelength")} style={{ cursor: 'pointer' }}>Wavelength (A)</TableHead>
          <TableHead className="text-center" onClick={() => handleHeaderClick("tof")} style={{ cursor: 'pointer' }}>ToF (usec)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.reflections.map((reflection) => {
          return(
            <SelectableTableRow 
            onClick={() => clickedReflection(reflection)} 
            isSelected={props.selectedReflectionId == reflection.id}
            ref={props.selectedReflectionId === reflection.id ? selectedRowElement : null}
            key={reflection.id}
            >
              <TableCell  className="text-center">{reflection.panelName}</TableCell>
              <TableCell className="text-center">{reflection.millerIdx}</TableCell>
              <TableCell className="text-center">{reflection.XYZObs}</TableCell>
              <TableCell className="text-center">{reflection.XYZCal}</TableCell>
              <TableCell className="text-center">{reflection.wavelength}</TableCell>
              <TableCell className="text-center">{reflection.tof}</TableCell>
            </SelectableTableRow>
            );
        })}
      </TableBody>
    </Table>
  </div>
  );
}