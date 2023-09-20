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
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSort } from '@fortawesome/free-solid-svg-icons';
 
export function ReflectionTableSheet(
  props:{
    enabled:boolean, 
    reflections: Reflection[], 
    setReflectionTable: React.Dispatch<React.SetStateAction<Reflection[]>>,
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
      <SheetContent id="reflection-table-sheet" className="w-[50vw] sm:max-w-none overflow-scroll" setIsOpen={setIsOpen}>
        <SheetHeader>
          <SheetTitle>Reflection Table</SheetTitle>
          <SheetDescription>
          </SheetDescription>
        </SheetHeader>
		<ReflectionTable 
    reflections={props.reflections} 
    setReflectionTable={props.setReflectionTable} 
    selectedReflectionId={props.selectedReflectionId}
    setSelectedReflectionId={props.setSelectedReflectionId}
    serverWS={props.serverWS}></ReflectionTable>
      </SheetContent>
    </Sheet>
  )
}

export function ReflectionTable(props: {
  reflections: Reflection[], 
  setReflectionTable: React.Dispatch<React.SetStateAction<Reflection[]>>,
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

  function rightClickedReflection(reflection: Reflection){
    setContextReflectionID(reflection.id);
  }

  function removeContextReflection(){

    const reflections: Reflection[] = []
    for(var i = 0; i < props.reflections.length; i++){
      if (props.reflections[i].id != contextReflectionID){
        reflections.push(props.reflections[i]);
      }
    }
    props.setReflectionTable(reflections);
    props.serverWS.current?.send(JSON.stringify({
					"channel" : "server",
					"command" : "remove_reflection",
					"reflection_id" : contextReflectionID
    }))
    setContextReflectionID("");
  }

  const selectedRowElement: React.MutableRefObject<null | HTMLTableRowElement> = useRef(null);
  const [contextReflectionID, setContextReflectionID] = useState<string>("");

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
    const sortedReflections = [...props.reflections].sort((a, b) => {
      const aValue = a[sorting.column as keyof Reflection];
      const bValue = b[sorting.column as keyof Reflection];
      return sorting.direction === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    });

    props.setReflectionTable(sortedReflections)
  }
}, [sorting]);

  return (
    <div>
    {(showScrollButton && <Button onClick={scrollToTop} variant={"secondary"} className="fixed left-3/4 bottom-5" > Scroll to top </Button>)}
    <ContextMenu >
      <ContextMenuTrigger >
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center" onClick={() => handleHeaderClick("panel")} style={{ cursor: 'pointer' }}> <FontAwesomeIcon icon={faSort}/> Panel</TableHead>
          <TableHead className="text-center" onClick={() => handleHeaderClick("millerIdx")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort}/> Miller Idx</TableHead>
          <TableHead className="text-center" onClick={() => handleHeaderClick("XYZObs")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort}/> XYZObs</TableHead>
          <TableHead className="text-center" onClick={() => handleHeaderClick("XYZCal")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort}/> XYZCal</TableHead>
          <TableHead className="text-center" onClick={() => handleHeaderClick("wavelength")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort}/> Wavelength (A)</TableHead>
          <TableHead className="text-center" onClick={() => handleHeaderClick("tof")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort}/> ToF (usec)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.reflections.map((reflection) => {
          return(
                <SelectableTableRow 
                onClick={() => clickedReflection(reflection)}
                onContextMenu={() => rightClickedReflection(reflection)}
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
    </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem inset onClick={()=>removeContextReflection()}>
            Remove
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  </div>
  );
}
