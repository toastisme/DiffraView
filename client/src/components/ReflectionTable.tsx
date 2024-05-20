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
import { faSort, faTable } from '@fortawesome/free-solid-svg-icons';
 
export function ReflectionTableSheet(
  props:{
    enabled:boolean, 
    reflections: Reflection[], 
    setReflectionTable: React.Dispatch<React.SetStateAction<Reflection[]>>,
    selectedReflectionId: string,
    setSelectedReflectionId: React.Dispatch<React.SetStateAction<string>>,
    integrationProfilerHidden: boolean,
    setIntegrationProfilerLoading: React.Dispatch<React.SetStateAction<boolean>>,
    serverWS: React.MutableRefObject<WebSocket | null>}) {

  const [isOpen, setIsOpen] = useState(false);

  function handleSheetTrigger(){
    setIsOpen(!isOpen);
  }

  return (
    <Sheet modal={false} open={isOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" onClick={handleSheetTrigger} disabled={!props.enabled}><FontAwesomeIcon icon={faTable}style={{ marginRight: '5px' }}/> Reflection Table</Button>
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
    integrationProfilerHidden={props.integrationProfilerHidden}
    setIntegrationProfilerLoading={props.setIntegrationProfilerLoading}
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
  integrationProfilerHidden: boolean,
  setIntegrationProfilerLoading: React.Dispatch<React.SetStateAction<boolean>>,
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
          "highlight_on_panel" : true,
          "id" : reflection.id,
          "expt_id" : reflection.exptID,
          "update_integration_profiler" : !props.integrationProfilerHidden
    }))
    if (!props.integrationProfilerHidden){
      props.setIntegrationProfilerLoading(true);
    }
    props.setSelectedReflectionId(reflection.id);
  }

  function rightClickedReflection(reflection: Reflection){
    setContextReflection(reflection);
  }

  function removeContextReflection(){
    if (contextReflection == null){
      return;
    }

    const reflections: Reflection[] = []
    for(var i = 0; i < props.reflections.length; i++){
      if (props.reflections[i].id != contextReflection.id){
        reflections.push(props.reflections[i]);
      }
    }
    props.setReflectionTable(reflections);
    const coords: number[] = contextReflection.XYZObs.substring(1, contextReflection.XYZObs.length - 1).split(',').map(numStr => parseFloat(numStr.trim()));

    props.serverWS.current?.send(JSON.stringify({
					"channel" : "server",
					"command" : "remove_reflection",
          "isSelectedReflection" : contextReflection.id == props.selectedReflectionId,
					"reflection_id" : contextReflection.id,
                                        "panel_idx" : contextReflection.panel,
                                        "name" : contextReflection.panelName,
                                        "panel_pos" : coords
    }))
    if (contextReflection.id == props.selectedReflectionId){
      props.setSelectedReflectionId("");
      selectedRowElement.current = null;    }
    setContextReflection(null);
  }

  var selectedRowElement: React.MutableRefObject<null | HTMLTableRowElement> = useRef(null);
  const [contextReflection, setContextReflection] = useState<Reflection | null>(null);

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

  const numberCols: string[] = [
    "wavelength",
    "tof",
    "peakIntensity"
  ];

  if (sorting.column === null) {
    return;
  }

  if (numberCols.includes(sorting.column)){
    const sortedReflections = [...props.reflections].sort((a, b) => {
      const aValue = parseFloat(a[sorting.column as keyof Reflection]);
      const bValue = parseFloat(b[sorting.column as keyof Reflection]);

      if (!isNaN(aValue) && !isNaN(bValue)) {
        // Both values are valid numbers
        return sorting.direction === 'asc' ? aValue - bValue : bValue - aValue;
      } else {
        // One or both values are not valid numbers, fall back to string comparison
        return sorting.direction === 'asc' ? String(aValue).localeCompare(String(bValue)) : String(bValue).localeCompare(String(aValue));
      }
    });
    props.setReflectionTable(sortedReflections)
  }

  else {
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
    {(showScrollButton && <Button onClick={scrollToTop} variant={"secondary"} className="fixed left-3/4 bottom-5"> Scroll to top </Button>)}
    <ContextMenu >
      <ContextMenuTrigger >
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center" onClick={() => handleHeaderClick("panel")} style={{ cursor: 'pointer' }}> <FontAwesomeIcon icon={faSort}/> Panel</TableHead>
          <TableHead className="text-center" onClick={() => handleHeaderClick("peakIntensity")} style={{ cursor: 'pointer' }}> <FontAwesomeIcon icon={faSort}/> Peak</TableHead>
          <TableHead className="text-center" onClick={() => handleHeaderClick("millerIdx")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort}/> Miller Idx</TableHead>
          <TableHead className="text-center" onClick={() => handleHeaderClick("XYZObs")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort}/> XYZObs</TableHead>
          <TableHead className="text-center" onClick={() => handleHeaderClick("XYZCal")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort}/> XYZCal</TableHead>
          <TableHead className="text-center" onClick={() => handleHeaderClick("wavelength")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort}/> Wavelength (A)</TableHead>
          <TableHead className="text-center" onClick={() => handleHeaderClick("tof")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort}/> ToF (usec)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.reflections.map((reflection) => {
          if (reflection.millerIdx === "-" && !props.integrationProfilerHidden) {
            return null; 
          }
          return(
                <SelectableTableRow 
                onClick={() => clickedReflection(reflection)}
                onContextMenu={() => rightClickedReflection(reflection)}
                isSelected={props.selectedReflectionId == reflection.id}
                ref={props.selectedReflectionId === reflection.id ? selectedRowElement : null}
                key={reflection.id}
                >
                  <TableCell  className="text-center">{reflection.panelName}</TableCell>
                  <TableCell className="text-center">{reflection.peakIntensity}</TableCell>
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
