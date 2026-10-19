import { serverMessage } from "@/lib/protocol";
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
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
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
import { ReactNode, useState, useRef, useEffect, useMemo } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSort, faTable } from '@fortawesome/free-solid-svg-icons';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useVirtualizer } from "@tanstack/react-virtual"
import { useRootContext } from "@/contexts/RootContext"


export function RotationReflectionTableSheet() {


  const {
    reflectionTableEnabled: enabled,
    reflections,
    calculatedIntegratedReflections,
    selectedExptID,
    setSelectedExptID,
    experimentNames,
    setShowCalculatedIntegratedReflections,
  } = useRootContext();

  const [isOpen, setIsOpen] = useState(false);
  const [exportedFilter, setExportedFilter] = useState("all");

  const hasExportedField = reflections.some(r => r.exported === true || r.exported === false) ||
    calculatedIntegratedReflections.some(r => r.exported === true || r.exported === false);

  function handleSheetTrigger() {
    setIsOpen(!isOpen);
  }

  useEffect(()=>{
    if (!enabled){
      setIsOpen(false);
    }
  },[enabled])  

  function updateShowCalculatedReflections(value: string){
    if (value === "calculated"){
      setShowCalculatedIntegratedReflections(true);
    }
    else if (value === "observed"){
      setShowCalculatedIntegratedReflections(false);
    }
  }
  useEffect(()=>{
    if (calculatedIntegratedReflections.length <= 1){
      setShowCalculatedIntegratedReflections(false);
    }
  },[reflections])  

  return (
    <Sheet modal={false} open={isOpen} >
      <SheetTrigger asChild>
        <Button variant="outline" onClick={handleSheetTrigger} disabled={!enabled}><FontAwesomeIcon icon={faTable} style={{ marginRight: '5px' }} /> Reflection Table</Button>
      </SheetTrigger>
      <SheetContent id="reflection-table-sheet" className="w-[50vw] sm:max-w-none flex flex-col" setIsOpen={setIsOpen}>
        <SheetHeader className="shrink-0">
          <SheetTitle>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              Reflection Table
              <div 
                style={{ marginLeft: '20px' }} >
              <Select
                onValueChange={(value) => setSelectedExptID(experimentNames[value])}
                value={Object.keys(experimentNames).find(key => experimentNames[key] === selectedExptID)}
              >
                <SelectTrigger className="w-[12vw]">
                  <SelectValue>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Experiments</SelectLabel>
                  {Object.keys(experimentNames).map((key) => (
                    <SelectItem key={key} value={key}>
                      {key}
                    </SelectItem>))}
                  </SelectGroup>
                </SelectContent>
              </Select></div>
          <RadioGroup
            style={{marginLeft:"20px", visibility: calculatedIntegratedReflections.length > 1 ? "visible" : "hidden"}}
            defaultValue="observed"
            className="flex items-center space-x-4 text-xs"
            onValueChange={(value) => updateShowCalculatedReflections(value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="observed" id="r1" />
              <Label htmlFor="r1" className="text-xs">
                observed
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="calculated" id="r2" />
              <Label htmlFor="r2" className="text-xs">
                calculated
              </Label>
            </div>
          </RadioGroup>
          {hasExportedField &&
            <div className="flex items-center space-x-2" style={{marginLeft:"20px"}}>
              <Label className="text-xs">filter</Label>
              <Select
                defaultValue="all"
                onValueChange={(value) => setExportedFilter(value)}
              >
                <SelectTrigger className="w-[10vw] text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="all">all</SelectItem>
                    <SelectItem value="exported">exported</SelectItem>
                    <SelectItem value="unexported">unexported</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          }
            </div>
          </SheetTitle>
          <SheetDescription>
          </SheetDescription>
        </SheetHeader>
        <RotationReflectionTable
          exportedFilter={exportedFilter}
          ></RotationReflectionTable>
      </SheetContent>
    </Sheet>
  )
}

interface RotationReflectionTableProps {
  exportedFilter?: string
}

interface RotationReflectionColumn {
  key: keyof Reflection;
  header: ReactNode;
  // Shown even when no reflection has a value
  always?: boolean;
}

const OBSERVED_COLUMNS: RotationReflectionColumn[] = [
  { key: "panelName", header: "Panel", always: true },
  { key: "peakIntensity", header: "Peak" },
  { key: "millerIdx", header: "hkl", always: true },
  { key: "XYZObs", header: <>XY<sub>Obs</sub></> },
  { key: "XYZCal", header: <>XY<sub>Cal</sub></> },
  { key: "summedIntensity", header: <>I<sub>Summed</sub></> },
  { key: "profileIntensity", header: <>I<sub>Profile</sub></> },
  { key: "partiality", header: "Partiality" },
];

const CALCULATED_COLUMNS: RotationReflectionColumn[] = [
  { key: "panelName", header: "Panel", always: true },
  { key: "millerIdx", header: "hkl", always: true },
  { key: "XYZCal", header: <>XY<sub>Cal</sub></> },
  { key: "summedIntensity", header: <>I<sub>Summed</sub></> },
  { key: "profileIntensity", header: <>I<sub>Profile</sub></> },
  { key: "partiality", header: "Partiality" },
];

export function RotationReflectionTable({ exportedFilter = "all" }: RotationReflectionTableProps) {

  const {
    reflections,
    setReflections,
    calculatedIntegratedReflections,
    setCalculatedIntegratedReflections,
    selectedReflectionID,
    setSelectedReflectionID,
    selectedExptID,
    showCalculatedIntegratedReflections,
    serverWS,
  } = useRootContext();

  const parentRef = useRef<HTMLDivElement>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  function clickedReflection(reflection: Reflection) {
    const xyz = showCalculatedIntegratedReflections ? reflection.XYZCal : reflection.XYZObs;
    const coords = xyz.substring(1, xyz.length - 1).split(',').map(numStr => parseFloat(numStr.trim()));
    serverWS.current?.send(serverMessage("reflections.select", {
      "panel_idx": reflection.panel,
      "name": reflection.panelName,
      "panel_pos": coords,
      "reflection_id": reflection.id,
      "expt_id": reflection.exptID,
    }))
    setSelectedReflectionID(reflection.id);
  }

  function rightClickedReflection(reflection: Reflection) {
    if (!showCalculatedIntegratedReflections){
      setContextReflection(reflection);
    }
  }

  function removeContextReflection() {
    if (contextReflection == null) {
      return;
    }

    let coords;
    let reflectionType;
    const reflections: Reflection[] = []
    if (showCalculatedIntegratedReflections){
      for (var i = 0; i < calculatedIntegratedReflections.length; i++) {
        if (calculatedIntegratedReflections[i].id != contextReflection.id) {
          reflections.push(calculatedIntegratedReflections[i]);
        }
      }
      setCalculatedIntegratedReflections(reflections);
      coords = contextReflection.XYZCal.substring(1, contextReflection.XYZCal.length - 1).split(',').map(numStr => parseFloat(numStr.trim()));
      reflectionType = "calculated_integrated";
    }
    else{
      for (var i = 0; i < reflections.length; i++) {
        if (reflections[i].id != contextReflection.id) {
          reflections.push(reflections[i]);
        }
      }
      setReflections(reflections);
      coords = contextReflection.XYZObs.substring(1, contextReflection.XYZObs.length - 1).split(',').map(numStr => parseFloat(numStr.trim()));
      reflectionType = "observed";
    }

    serverWS.current?.send(serverMessage("reflections.remove", {
      "type" : reflectionType,
      "has_calculated_integrated_reflections" : calculatedIntegratedReflections.length !== 0,
      "isSelectedReflection": contextReflection.id == selectedReflectionID,
      "reflection_id": contextReflection.id,
      "panel_idx": contextReflection.panel,
      "name": contextReflection.panelName,
      "panel_pos": coords
    }))
    if (contextReflection.id == selectedReflectionID) {
      setSelectedReflectionID("");
    }
    setContextReflection(null);
  }

  const [contextReflection, setContextReflection] = useState<Reflection | null>(null);

  interface sortingInterface {
    column: string | null
    direction: string
  }

  const [sorting, setSorting] = useState<sortingInterface>({ column: null, direction: 'asc' });
  const [calculatedSorting, setCalculatedSorting] = useState<sortingInterface>({ column: null, direction: 'asc' });

  const activeSorting = showCalculatedIntegratedReflections ? calculatedSorting : sorting;
  const activeReflections = showCalculatedIntegratedReflections ? calculatedIntegratedReflections : reflections;

  const shownColumns = useMemo(() => {
    const columns = showCalculatedIntegratedReflections ? CALCULATED_COLUMNS : OBSERVED_COLUMNS;
    return columns.filter(({ key, always }) =>
      always || activeReflections.some(r => r[key] !== undefined && r[key] !== "-"));
  }, [activeReflections, showCalculatedIntegratedReflections]);

  const visibleReflections = useMemo(() => {
    const numberCols = showCalculatedIntegratedReflections
      ? ["summedIntensity", "profileIntensity", "partiality"]
      : ["peakIntensity", "summedIntensity", "profileIntensity", "partiality"];

    const filtered = activeReflections.filter(r =>
      r.exptID.toString() === selectedExptID.toString() &&
      (exportedFilter === "all" ||
        (exportedFilter === "exported" && r.exported === true) ||
        (exportedFilter === "unexported" && r.exported === false))
    );

    const { column, direction } = activeSorting;
    if (!column) return filtered;

    return [...filtered].sort((a, b) => {
      const aValue = a[column as keyof Reflection];
      const bValue = b[column as keyof Reflection];
      if (numberCols.includes(column)) {
        const aNum = typeof aValue === "string" ? parseFloat(aValue) : NaN;
        const bNum = typeof bValue === "string" ? parseFloat(bValue) : NaN;
        if (!isNaN(aNum) && !isNaN(bNum)) {
          return direction === "asc" ? aNum - bNum : bNum - aNum;
        }
      }
      return direction === "asc"
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });
  }, [activeReflections, selectedExptID, activeSorting, exportedFilter]);

  const rowVirtualizer = useVirtualizer({
    count: visibleReflections.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 53,
    overscan: 15,
  });

  useEffect(() => {
    if (selectedReflectionID === '' || selectedReflectionID == null) return;
    const idx = visibleReflections.findIndex(r => String(r.id) === String(selectedReflectionID));
    if (idx !== -1) {
      rowVirtualizer.scrollToIndex(idx, { align: 'center' });
    }
  }, [selectedReflectionID]);

  useEffect(() => {
    const el = parentRef.current;
    if (!el) return;
    const handleScroll = () => setShowScrollButton(el.scrollTop > 300);
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollToTop() {
    // Not smooth: measuring rows on the way up stops a smooth scroll early
    rowVirtualizer.scrollToOffset(0);
  }

  const handleHeaderClick = (column: string) => {
    if (showCalculatedIntegratedReflections) {
      setCalculatedSorting(prev => ({
        column,
        direction: prev.column === column && prev.direction === 'asc' ? 'desc' : 'asc',
      }));
    } else {
      setSorting(prev => ({
        column,
        direction: prev.column === column && prev.direction === 'asc' ? 'desc' : 'asc',
      }));
    }
  };

  const virtualItems = rowVirtualizer.getVirtualItems();
  const paddingTop = virtualItems.length > 0 ? virtualItems[0].start : 0;
  const paddingBottom = virtualItems.length > 0
    ? rowVirtualizer.getTotalSize() - virtualItems[virtualItems.length - 1].end
    : 0;




  return (
    <div className="flex flex-col flex-1 min-h-0">
      {showScrollButton && <Button onClick={scrollToTop} variant={"secondary"} className="fixed left-3/4 bottom-5"> Scroll to top </Button>}
      <ContextMenu>
        <ContextMenuTrigger className="flex flex-col flex-1 min-h-0">
          <div ref={parentRef} style={{ height: '100%', overflow: 'auto' }}>
            <Table wrapperClassName="overflow-visible">
              <TableHeader>
                <TableRow>
                  {shownColumns.map(({ key, header }) => (
                    <TableHead key={key} className="text-center" onClick={() => handleHeaderClick(key === "panelName" ? "panel" : key)} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort} /> {header}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {paddingTop > 0 && <tr><td colSpan={99} style={{ height: paddingTop, padding: 0 }} /></tr>}
                {virtualItems.map(virtualRow => {
                  const reflection = visibleReflections[virtualRow.index];
                  return (
                    <SelectableTableRow
                      key={reflection.id}
                      data-index={virtualRow.index}
                      ref={rowVirtualizer.measureElement}
                      onClick={() => clickedReflection(reflection)}
                      onContextMenu={() => rightClickedReflection(reflection)}
                      isSelected={String(selectedReflectionID) === String(reflection.id)}
                    >
                      {shownColumns.map(({ key }) => (
                        <TableCell key={key} className="text-center">{String(reflection[key])}</TableCell>
                      ))}
                    </SelectableTableRow>
                  );
                })}
                {paddingBottom > 0 && <tr><td colSpan={99} style={{ height: paddingBottom, padding: 0 }} /></tr>}
              </TableBody>
            </Table>
          </div>
        </ContextMenuTrigger>
        {!showCalculatedIntegratedReflections &&
          <ContextMenuContent className="w-64">
            <ContextMenuItem inset onClick={() => removeContextReflection()}>
              Remove
            </ContextMenuItem>
          </ContextMenuContent>
        }
      </ContextMenu>
    </div>
  );
}
