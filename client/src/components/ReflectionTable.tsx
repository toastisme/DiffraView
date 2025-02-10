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
import { useRootContext } from "@/contexts/RootContext"
import { useIntegrateContext } from "@/contexts/IntegrateContext"
import { useIntegrationProfilerContext } from "@/contexts/IntegrationProfilerContext"
import { Status } from "@/types"


export function ReflectionTableSheet() {


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
      <SheetContent id="reflection-table-sheet" className="w-[50vw] sm:max-w-none overflow-y-scroll" setIsOpen={setIsOpen}>
        <SheetHeader>
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
            </div>
          </SheetTitle>
          <SheetDescription>
          </SheetDescription>
        </SheetHeader>
        <ReflectionTable
          ></ReflectionTable>
      </SheetContent>
    </Sheet>
  )
}

export function ReflectionTable() {

  const {
    reflections,
    setReflections,
    calculatedIntegratedReflections,
    setCalculatedIntegratedReflections,
    selectedReflectionID,
    setSelectedReflectionID,
    selectedExptID,
    showCalculatedIntegratedReflections,
    serverWS
  } = useRootContext();

  const {
    emptyRun,
    vanadiumRun,
    sampleDensity,
    sampleRadius,
    sampleAbsorptionXSection,
    sampleScatteringXSection,
    vanadiumDensity,
    vanadiumRadius,
    vanadiumAbsorptionXSection,
    vanadiumScatteringXSection,
    applyLorentz,
    applyIncidentSpectrum,
    applySphericalAbsorption,
    tOFBBoxPadding,
    xYBBoxPadding,
    integrateMethod
  } = useIntegrateContext();

  const {
    hidden: integrationProfilerHidden,
    setStatus: setIntegrationProfilerStatus
  } = useIntegrationProfilerContext();

  var sheetContentElement = document.getElementById("reflection-table-sheet");
  const [showScrollButton, setShowScrollButton] = useState(false);

  function clickedReflection(reflection: Reflection) {

    let reflectionType;
    let coords;
    if (showCalculatedIntegratedReflections){
      reflectionType = "calculated_integrated";
      coords = reflection.XYZCal.substring(1, reflection.XYZCal.length - 1).split(',').map(numStr => parseFloat(numStr.trim()));
    }
    else{
      reflectionType = "observed";
      coords = reflection.XYZObs.substring(1, reflection.XYZObs.length - 1).split(',').map(numStr => parseFloat(numStr.trim()));
    }

    let integrationMethod;
    switch (integrateMethod){
      case("summation"):
        integrationMethod = "summation";
        break;
      case("profile-1d"):
        integrationMethod = "profile1d";
        break;
      case("profile-3d"):
        integrationMethod = "profile3d";
        break;
      case("seed-skewness"):
        integrationMethod = "seed_skewness";
        break;
    }

    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "update_lineplot",
      "panel_idx": reflection.panel,
      "name": reflection.panelName,
      "panel_pos": coords,
      "type" : reflectionType,
      "highlight_on_panel": true,
      "reflection_id": reflection.id,
      "expt_id": reflection.exptID,
      "empty_run": emptyRun,
      "incident_run": vanadiumRun,
      "vanadium_sample_radius" : vanadiumRadius,
      "vanadium_sample_number_density": vanadiumDensity,
      "vanadium_scattering_x_section" : vanadiumScatteringXSection,
      "vanadium_absorption_x_section" : vanadiumAbsorptionXSection,
      "sample_radius" : sampleRadius,
      "sample_number_density": sampleDensity,
      "scattering_x_section" : sampleScatteringXSection,
      "absorption_x_section" : sampleAbsorptionXSection,
      "apply_lorentz" : applyLorentz,
      "apply_incident_spectrum" : applyIncidentSpectrum,
      "apply_spherical_absorption" : applySphericalAbsorption,
      "tof_padding" : tOFBBoxPadding,
      "xy_padding" : xYBBoxPadding,
      "update_integration_profiler": !integrationProfilerHidden,
      "method": integrationMethod,
      "erase_data" : true
    }))
    if (!integrationProfilerHidden) {
      setIntegrationProfilerStatus(Status.Loading);
    }
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

    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "remove_reflection",
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
  }, [selectedReflectionID]);



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

  const [calculatedSorting, setCalculatedSorting] = useState<sortingInterface>({
    column: null,
    direction: 'asc',
  });

  const handleHeaderClick = (column: string) => {
    if (showCalculatedIntegratedReflections){
      if (calculatedSorting.column === column) {
        setCalculatedSorting({
          column,
          direction: calculatedSorting.direction === 'asc' ? 'desc' : 'asc',
        });
      } else {
        setCalculatedSorting({
          column,
          direction: 'asc',
        });
      }
      
    }
    else{
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
    }
  };

useEffect(() => {
  const numberCols: string[] = ["wavelength", "wavelengthCal", "tof", "tofCal", "peakIntensity" , "summedIntensity", "profileIntensity"];

  if (sorting.column === null) {
    return;
  }

  const sortedReflections = [...reflections].sort((a, b) => {
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

  setReflections(sortedReflections);
}, [sorting]);

useEffect(() => {
  const numberCols: string[] = ["wavelengthCal", "tofCal", "summedIntensity", "profileIntensity"];

  if (calculatedSorting.column === null) {
    return;
  }

  const sortedReflections = [...calculatedIntegratedReflections].sort((a, b) => {
    const aValue = a[calculatedSorting.column as keyof Reflection];
    const bValue = b[calculatedSorting.column as keyof Reflection];

    if (calculatedSorting.column !== null && numberCols.includes(calculatedSorting.column)) {

      // Handle numeric columns
      const aNum = typeof aValue === "string" ? parseFloat(aValue) : NaN;
      const bNum = typeof bValue === "string" ? parseFloat(bValue) : NaN;

      if (!isNaN(aNum) && !isNaN(bNum)) {
        return calculatedSorting.direction === "asc" ? aNum - bNum : bNum - aNum;
      } else {
        return calculatedSorting.direction === "asc"
          ? String(aValue).localeCompare(String(bValue))
          : String(bValue).localeCompare(String(aValue));
      }
    } else {

      // Handle string columns
      return calculatedSorting.direction === "asc"
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    }
  });

  setCalculatedIntegratedReflections(sortedReflections);
}, [calculatedSorting]);




  return (
    <div className="overflow-hidden">
      {(showScrollButton && <Button onClick={scrollToTop} variant={"secondary"} className="fixed left-3/4 bottom-5"> Scroll to top </Button>)}
      <ContextMenu >
        <ContextMenuTrigger >
          <div className="overflow-hidden">
          <Table className="overflow-hidden">
            <TableHeader className="overflow-hidden">
              <TableRow className="overflow-hidden">
                {showCalculatedIntegratedReflections?(
                  <>
                  <TableHead className="text-center" onClick={() => handleHeaderClick("panel")} style={{ cursor: 'pointer' }}> <FontAwesomeIcon icon={faSort} /> Panel</TableHead>
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
              {showCalculatedIntegratedReflections ? 
              
              calculatedIntegratedReflections.map((reflection) => {
                if (reflection.millerIdx === "-" && !integrationProfilerHidden) {
                  return null;
                }
                if (reflection.exptID.toString() !== selectedExptID.toString()){return null;}
                return (
                  <SelectableTableRow
                    onClick={() => clickedReflection(reflection)}
                    onContextMenu={() => rightClickedReflection(reflection)}
                    isSelected={selectedReflectionID == reflection.id}
                    ref={selectedReflectionID === reflection.id ? selectedRowElement : null}
                    key={reflection.id}
                  >
                    <TableCell className="text-center">{reflection.panelName}</TableCell>
                    <TableCell className="text-center">{reflection.millerIdx}</TableCell>
                    <TableCell className="text-center">{reflection.XYZCal}</TableCell>
                    <TableCell className="text-center">{reflection.wavelengthCal}</TableCell>
                    <TableCell className="text-center">{reflection.tofCal}</TableCell>
                    <TableCell className="text-center">{reflection.summedIntensity}</TableCell>
                    <TableCell className="text-center">{reflection.profileIntensity}</TableCell>
                  </SelectableTableRow>

                );
              })
              
              : reflections.map((reflection) => {
                if (reflection.millerIdx === "-" && !integrationProfilerHidden) {
                  return null;
                }
                if (reflection.exptID.toString() !== selectedExptID.toString()){return null;}
                return (
                  <SelectableTableRow
                    onClick={() => clickedReflection(reflection)}
                    onContextMenu={() => rightClickedReflection(reflection)}
                    isSelected={selectedReflectionID == reflection.id}
                    ref={selectedReflectionID === reflection.id ? selectedRowElement : null}
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
