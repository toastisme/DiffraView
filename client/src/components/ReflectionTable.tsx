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
import { Reflection, ExptNamesDict } from "@/types"
import { useState, useRef, useEffect } from "react"
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

export function ReflectionTableSheet(
  props: {
    enabled: boolean,
    reflections: Reflection[],
    calculatedIntegratedReflections: Reflection[],
    setCalculatedIntegratedReflectionTable: React.Dispatch<React.SetStateAction<Reflection[]>>,
    setReflectionTable: React.Dispatch<React.SetStateAction<Reflection[]>>,
    selectedReflectionId: string,
    selectedExptId: string,
    setSelectedReflectionId: React.Dispatch<React.SetStateAction<string>>,
    setSelectedExptId: React.Dispatch<React.SetStateAction<string>>,
    integrationProfilerHidden: boolean,
    setIntegrationProfilerLoading: React.Dispatch<React.SetStateAction<boolean>>,
    exptNames: ExptNamesDict,
    emptyRun: string,
    vanadiumRun: string,
    sampleDensity: string,
    sampleRadius: string,
    sampleAbsorptionXSection: string,
    sampleScatteringXSection: string,
    vanadiumDensity: string,
    vanadiumRadius: string,
    vanadiumAbsorptionXSection: string,
    vanadiumScatteringXSection: string,
    applyLorentz: boolean,
    applyIncidentSpectrum: boolean,
    applySphericalAbsorption: boolean,
    tOFPadding: string,
    xYPadding: string,
    showCalculatedReflections: boolean,
    setShowCalculatedReflections: React.Dispatch<React.SetStateAction<boolean>>,
    serverWS: React.MutableRefObject<WebSocket | null>
  }) {

  const [isOpen, setIsOpen] = useState(false);

  function handleSheetTrigger() {
    setIsOpen(!isOpen);
  }

  function updateShowCalculatedReflections(value: string){
    if (value === "calculated"){
      props.setShowCalculatedReflections(true);
    }
    else if (value === "observed"){
      props.setShowCalculatedReflections(false);
    }
  }
  useEffect(()=>{
    if (props.calculatedIntegratedReflections.length <= 1){
      props.setShowCalculatedReflections(false);
    }
  },[props.reflections])  

  return (
    <Sheet modal={false} open={isOpen} >
      <SheetTrigger asChild>
        <Button variant="outline" onClick={handleSheetTrigger} disabled={!props.enabled}><FontAwesomeIcon icon={faTable} style={{ marginRight: '5px' }} /> Reflection Table</Button>
      </SheetTrigger>
      <SheetContent id="reflection-table-sheet" className="w-[50vw] sm:max-w-none overflow-y-scroll" setIsOpen={setIsOpen}>
        <SheetHeader>
          <SheetTitle>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              Reflection Table
              <div 
                style={{ marginLeft: '20px' }} >
              <Select
                onValueChange={(value) => props.setSelectedExptId(props.exptNames[value].toString())}
                value={Object.keys(props.exptNames).find(key => props.exptNames[key] === props.selectedExptId)}
              >
                <SelectTrigger className="w-[12vw]">
                  <SelectValue>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Experiments</SelectLabel>
                  {Object.keys(props.exptNames).map((key) => (
                    <SelectItem key={key} value={key}>
                      {key}
                    </SelectItem>))}
                  </SelectGroup>
                </SelectContent>
              </Select></div>
          <RadioGroup
            style={{marginLeft:"20px", visibility: props.calculatedIntegratedReflections.length > 1 ? "visible" : "hidden"}}
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
            </div>
          </SheetTitle>
          <SheetDescription>
          </SheetDescription>
        </SheetHeader>
        <ReflectionTable
          reflections={props.reflections}
          calculatedIntegrationReflections={props.calculatedIntegratedReflections}
          setCalculatedIntegratedReflectionTable={props.setCalculatedIntegratedReflectionTable}
          setReflectionTable={props.setReflectionTable}
          selectedReflectionId={props.selectedReflectionId}
          setSelectedReflectionId={props.setSelectedReflectionId}
          integrationProfilerHidden={props.integrationProfilerHidden}
          setIntegrationProfilerLoading={props.setIntegrationProfilerLoading}
          selectedExptId={props.selectedExptId}
          emptyRun={props.emptyRun}
          vanadiumRun={props.vanadiumRun}
          sampleDensity={props.sampleDensity}
          sampleRadius={props.sampleRadius}
          sampleAbsorptionXSection={props.sampleAbsorptionXSection}
          sampleScatteringXSection={props.sampleScatteringXSection}
          vanadiumDensity={props.vanadiumDensity}
          vanadiumRadius={props.vanadiumRadius}
          vanadiumAbsorptionXSection={props.vanadiumAbsorptionXSection}
          vanadiumScatteringXSection={props.vanadiumScatteringXSection}
          applyLorentz={props.applyLorentz}
          applyIncidentSpectrum={props.applyIncidentSpectrum}
          applySphericalAbsorption={props.applySphericalAbsorption}
          tOFPadding={props.tOFPadding}
          xYPadding={props.xYPadding}
          showCalculated={props.showCalculatedReflections}
          serverWS={props.serverWS}></ReflectionTable>
      </SheetContent>
    </Sheet>
  )
}

export function ReflectionTable(props: {
  reflections: Reflection[],
  calculatedIntegrationReflections: Reflection[],
  setReflectionTable: React.Dispatch<React.SetStateAction<Reflection[]>>,
  setCalculatedIntegratedReflectionTable: React.Dispatch<React.SetStateAction<Reflection[]>>,
  selectedReflectionId: string,
  selectedExptId:string,
  setSelectedReflectionId: React.Dispatch<React.SetStateAction<string>>,
  integrationProfilerHidden: boolean,
  setIntegrationProfilerLoading: React.Dispatch<React.SetStateAction<boolean>>,
  emptyRun: string,
  vanadiumRun: string,
  sampleDensity: string,
  sampleRadius: string,
  sampleAbsorptionXSection: string,
  sampleScatteringXSection: string,
  vanadiumDensity: string,
  vanadiumRadius: string,
  vanadiumAbsorptionXSection: string,
  vanadiumScatteringXSection: string,
  applyLorentz: boolean,
  applyIncidentSpectrum: boolean,
  applySphericalAbsorption: boolean,
  tOFPadding: string,
  xYPadding: string,
  showCalculated: boolean,
  serverWS: React.MutableRefObject<WebSocket | null>
}) {

  var sheetContentElement = document.getElementById("reflection-table-sheet");
  const [showScrollButton, setShowScrollButton] = useState(false);

  function clickedReflection(reflection: Reflection) {

    let reflectionType;
    let coords;
    if (props.showCalculated){
      reflectionType = "calculated_integrated";
      coords = reflection.XYZCal.substring(1, reflection.XYZCal.length - 1).split(',').map(numStr => parseFloat(numStr.trim()));
    }
    else{
      reflectionType = "observed";
      coords = reflection.XYZObs.substring(1, reflection.XYZObs.length - 1).split(',').map(numStr => parseFloat(numStr.trim()));
    }

    props.serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "update_lineplot",
      "panel_idx": reflection.panel,
      "name": reflection.panelName,
      "panel_pos": coords,
      "type" : reflectionType,
      "highlight_on_panel": true,
      "reflection_id": reflection.id,
      "expt_id": reflection.exptID,
      "empty_run": props.emptyRun,
      "incident_run":props.vanadiumRun,
      "vanadium_sample_radius" : props.vanadiumRadius,
      "vanadium_sample_number_density": props.vanadiumDensity,
      "vanadium_scattering_x_section" : props.vanadiumScatteringXSection,
      "vanadium_absorption_x_section" : props.vanadiumAbsorptionXSection,
      "sample_radius" : props.sampleRadius,
      "sample_number_density": props.sampleDensity,
      "scattering_x_section" : props.sampleScatteringXSection,
      "absorption_x_section" : props.sampleAbsorptionXSection,
      "apply_lorentz" : props.applyLorentz,
      "apply_incident_spectrum" : props.applyIncidentSpectrum,
      "apply_spherical_absorption" : props.applySphericalAbsorption,
      "tof_padding" : props.tOFPadding,
      "xy_padding" : props.xYPadding,
      "update_integration_profiler": !props.integrationProfilerHidden
    }))
    if (!props.integrationProfilerHidden) {
      props.setIntegrationProfilerLoading(true);
    }
    props.setSelectedReflectionId(reflection.id);
  }

  function rightClickedReflection(reflection: Reflection) {
    if (!props.showCalculated){
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
    if (props.showCalculated){
      for (var i = 0; i < props.calculatedIntegrationReflections.length; i++) {
        if (props.calculatedIntegrationReflections[i].id != contextReflection.id) {
          reflections.push(props.calculatedIntegrationReflections[i]);
        }
      }
      props.setCalculatedIntegratedReflectionTable(reflections);
      coords = contextReflection.XYZCal.substring(1, contextReflection.XYZCal.length - 1).split(',').map(numStr => parseFloat(numStr.trim()));
      reflectionType = "calculated_integrated";
    }
    else{
      for (var i = 0; i < props.reflections.length; i++) {
        if (props.reflections[i].id != contextReflection.id) {
          reflections.push(props.reflections[i]);
        }
      }
      props.setReflectionTable(reflections);
      coords = contextReflection.XYZObs.substring(1, contextReflection.XYZObs.length - 1).split(',').map(numStr => parseFloat(numStr.trim()));
      reflectionType = "observed";
    }

    props.serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "remove_reflection",
      "type" : reflectionType,
      "has_calculated_integrated_reflections" : props.calculatedIntegrationReflections.length !== 0,
      "isSelectedReflection": contextReflection.id == props.selectedReflectionId,
      "reflection_id": contextReflection.id,
      "panel_idx": contextReflection.panel,
      "name": contextReflection.panelName,
      "panel_pos": coords
    }))
    if (contextReflection.id == props.selectedReflectionId) {
      props.setSelectedReflectionId("");
      selectedRowElement.current = null;
    }
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

  function scrollToTop() {
    if (sheetContentElement) {
      sheetContentElement.scrollTo({ top: 0, behavior: 'smooth' });
    }

  }

  interface sortingInterface {
    column: string | null
    direction: string
  }


  const [sorting, setSorting] = useState<sortingInterface>({
    column: null,
    direction: 'asc',
  });

  const handleHeaderClick = (column: string) => {
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
  const numberCols: string[] = ["wavelength", "tof", "peakIntensity"];

  if (sorting.column === null) {
    return;
  }

  const sortedReflections = [...props.reflections].sort((a, b) => {
    const aValue = a[sorting.column as keyof Reflection];
    const bValue = b[sorting.column as keyof Reflection];

    if (sorting.column !== null && numberCols.includes(sorting.column)) {

      // Handle numeric columns
      const aNum = typeof aValue === "string" ? parseFloat(aValue) : NaN;
      const bNum = typeof bValue === "string" ? parseFloat(bValue) : NaN;

      if (!isNaN(aNum) && !isNaN(bNum)) {
        return sorting.direction === "asc" ? aNum - bNum : bNum - aNum;
      } else {
        return sorting.direction === "asc"
          ? String(aValue).localeCompare(String(bValue))
          : String(bValue).localeCompare(String(aValue));
      }
    } else {

      // Handle string columns
      return sorting.direction === "asc"
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    }
  });

  props.setReflectionTable(sortedReflections);
}, [sorting]);




  return (
    <div className="overflow-hidden">
      {(showScrollButton && <Button onClick={scrollToTop} variant={"secondary"} className="fixed left-3/4 bottom-5"> Scroll to top </Button>)}
      <ContextMenu >
        <ContextMenuTrigger >
          <div className="overflow-hidden">
          <Table className="overflow-hidden">
            <TableHeader className="overflow-hidden">
              <TableRow className="overflow-hidden">
                {props.showCalculated?(
                  <>
                  <TableHead className="text-center" onClick={() => handleHeaderClick("panel")} style={{ cursor: 'pointer' }}> <FontAwesomeIcon icon={faSort} /> Panel</TableHead>
                  <TableHead className="text-center" onClick={() => handleHeaderClick("peakIntensity")} style={{ cursor: 'pointer' }}> <FontAwesomeIcon icon={faSort} /> Peak</TableHead>
                  <TableHead className="text-center" onClick={() => handleHeaderClick("millerIdx")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort} /> hkl</TableHead>
                  <TableHead className="text-center" onClick={() => handleHeaderClick("XYZCal")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort} /> XY<sub>Cal</sub></TableHead>
                  <TableHead className="text-center" onClick={() => handleHeaderClick("wavelengthCal")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort} /> λ<sub>cal</sub>(A)</TableHead>
                  <TableHead className="text-center" onClick={() => handleHeaderClick("tofCal")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort} /> ToF<sub>Cal</sub> (usec)</TableHead>
                  <TableHead className="text-center" onClick={() => handleHeaderClick("summedIntensity")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort} /> I<sub>Summed</sub></TableHead>
                  <TableHead className="text-center" onClick={() => handleHeaderClick("profileIntensity")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort} /> I<sub>Profile</sub></TableHead>
                  </>
                )
                
                :(
                  <>
                  <TableHead className="text-center" onClick={() => handleHeaderClick("panel")} style={{ cursor: 'pointer' }}> <FontAwesomeIcon icon={faSort} /> Panel</TableHead>
                  <TableHead className="text-center" onClick={() => handleHeaderClick("peakIntensity")} style={{ cursor: 'pointer' }}> <FontAwesomeIcon icon={faSort} /> Peak</TableHead>
                  <TableHead className="text-center" onClick={() => handleHeaderClick("millerIdx")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort} /> hkl</TableHead>
                  <TableHead className="text-center" onClick={() => handleHeaderClick("XYZObs")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort} /> XY<sub>Obs</sub></TableHead>
                  <TableHead className="text-center" onClick={() => handleHeaderClick("XYZCal")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort} /> XY<sub>Cal</sub></TableHead>
                  <TableHead className="text-center" onClick={() => handleHeaderClick("wavelength")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort} /> λ (A)</TableHead>
                  <TableHead className="text-center" onClick={() => handleHeaderClick("wavelengthCal")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort} /> λ<sub>cal</sub>(A)</TableHead>
                  <TableHead className="text-center" onClick={() => handleHeaderClick("tof")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort} /> ToF (usec)</TableHead>
                  <TableHead className="text-center" onClick={() => handleHeaderClick("tofCal")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort} /> ToF<sub>Cal</sub> (usec)</TableHead>
                  <TableHead className="text-center" onClick={() => handleHeaderClick("summedIntensity")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort} /> I<sub>Summed</sub></TableHead>
                  <TableHead className="text-center" onClick={() => handleHeaderClick("profileIntensity")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort} /> I<sub>Profile</sub></TableHead>
                </>
                )
                }
              </TableRow>
            </TableHeader>
            <TableBody className="overflow-hidden">
              {props.showCalculated? 
              
              props.calculatedIntegrationReflections.map((reflection) => {
                if (reflection.millerIdx === "-" && !props.integrationProfilerHidden) {
                  return null;
                }
                if (reflection.exptID.toString() !== props.selectedExptId.toString()){return null;}
                return (
                  <SelectableTableRow
                    onClick={() => clickedReflection(reflection)}
                    onContextMenu={() => rightClickedReflection(reflection)}
                    isSelected={props.selectedReflectionId == reflection.id}
                    ref={props.selectedReflectionId === reflection.id ? selectedRowElement : null}
                    key={reflection.id}
                  >
                    <TableCell className="text-center">{reflection.panelName}</TableCell>
                    <TableCell className="text-center">{reflection.peakIntensity}</TableCell>
                    <TableCell className="text-center">{reflection.millerIdx}</TableCell>
                    <TableCell className="text-center">{reflection.XYZCal}</TableCell>
                    <TableCell className="text-center">{reflection.wavelengthCal}</TableCell>
                    <TableCell className="text-center">{reflection.tofCal}</TableCell>
                    <TableCell className="text-center">{reflection.summedIntensity}</TableCell>
                    <TableCell className="text-center">{reflection.profileIntensity}</TableCell>
                  </SelectableTableRow>

                );
              })
              
              : props.reflections.map((reflection) => {
                if (reflection.millerIdx === "-" && !props.integrationProfilerHidden) {
                  return null;
                }
                if (reflection.exptID.toString() !== props.selectedExptId.toString()){return null;}
                return (
                  <SelectableTableRow
                    onClick={() => clickedReflection(reflection)}
                    onContextMenu={() => rightClickedReflection(reflection)}
                    isSelected={props.selectedReflectionId == reflection.id}
                    ref={props.selectedReflectionId === reflection.id ? selectedRowElement : null}
                    key={reflection.id}
                  >
                    <TableCell className="text-center">{reflection.panelName}</TableCell>
                    <TableCell className="text-center">{reflection.peakIntensity}</TableCell>
                    <TableCell className="text-center">{reflection.millerIdx}</TableCell>
                    <TableCell className="text-center">{reflection.XYZObs}</TableCell>
                    <TableCell className="text-center">{reflection.XYZCal}</TableCell>
                    <TableCell className="text-center">{reflection.wavelength}</TableCell>
                    <TableCell className="text-center">{reflection.wavelengthCal}</TableCell>
                    <TableCell className="text-center">{reflection.tof}</TableCell>
                    <TableCell className="text-center">{reflection.tofCal}</TableCell>
                    <TableCell className="text-center">{reflection.summedIntensity}</TableCell>
                    <TableCell className="text-center">{reflection.profileIntensity}</TableCell>
                  </SelectableTableRow>

                );
              })}
            </TableBody>
          </Table>
          </div>
        </ContextMenuTrigger>
        {!props.showCalculated && 
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
