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
import { useState, useRef, useEffect, useMemo } from "react"
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
    serverWS,
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
    profile1DAlpha,
    profile1DBeta,
    profile1DA,
    profile1DNRestarts,
    profile3DNRestarts,
    profile3DAlpha,
    profile3DBeta,
    integrateMethod,
    backgroundModel,
    maskModel
  } = useIntegrateContext();


  const {
    hidden: integrationProfilerHidden,
    setStatus: setIntegrationProfilerStatus,
    optimizeProfile: integrationProfilerOptimizeProfile
  } = useIntegrationProfilerContext();

  const parentRef = useRef<HTMLDivElement>(null);
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
      "method": integrateMethod,
      "mask_model" : maskModel,
      "background_model" : backgroundModel,
      "profile1d_alpha": profile1DAlpha,
      "profile1d_beta": profile1DBeta,
      "profile1d_A": profile1DA,
      "profile1d_n_restarts": profile1DNRestarts,
      "profile3d_n_restarts": profile3DNRestarts,
      "profile3d_alpha": profile3DAlpha,
      "profile3d_beta": profile3DBeta,
      "erase_data" : true,
      "optimize_profile": integrationProfilerOptimizeProfile
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

  const visibleReflections = useMemo(() => {
    const numberCols = showCalculatedIntegratedReflections
      ? ["wavelengthCal", "tofCal", "summedIntensity", "profileIntensity"]
      : ["wavelength", "wavelengthCal", "tof", "tofCal", "peakIntensity", "summedIntensity", "profileIntensity"];

    const filtered = activeReflections.filter(r =>
      r.exptID.toString() === selectedExptID.toString() &&
      (integrationProfilerHidden || r.millerIdx !== "-")
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
  }, [activeReflections, selectedExptID, activeSorting, integrationProfilerHidden]);

  const rowVirtualizer = useVirtualizer({
    count: visibleReflections.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 36,
    overscan: 15,
  });

  useEffect(() => {
    if (!selectedReflectionID) return;
    const idx = visibleReflections.findIndex(r => r.id === selectedReflectionID);
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
    parentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
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
    <div className="overflow-hidden">
      {showScrollButton && <Button onClick={scrollToTop} variant={"secondary"} className="fixed left-3/4 bottom-5"> Scroll to top </Button>}
      <ContextMenu>
        <ContextMenuTrigger>
          <div ref={parentRef} style={{ height: '75vh', overflowY: 'auto' }}>
            <Table>
              <TableHeader>
                <TableRow>
                  {showCalculatedIntegratedReflections ? (
                    <>
                      <TableHead className="text-center" onClick={() => handleHeaderClick("panel")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort} /> Panel</TableHead>
                      <TableHead className="text-center" onClick={() => handleHeaderClick("millerIdx")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort} /> hkl</TableHead>
                      <TableHead className="text-center" onClick={() => handleHeaderClick("XYZCal")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort} /> XY<sub>Cal</sub></TableHead>
                      <TableHead className="text-center" onClick={() => handleHeaderClick("wavelengthCal")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort} /> λ<sub>cal</sub>(A)</TableHead>
                      <TableHead className="text-center" onClick={() => handleHeaderClick("tofCal")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort} /> ToF<sub>Cal</sub> (usec)</TableHead>
                      <TableHead className="text-center" onClick={() => handleHeaderClick("summedIntensity")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort} /> I<sub>Summed</sub></TableHead>
                      <TableHead className="text-center" onClick={() => handleHeaderClick("profileIntensity")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort} /> I<sub>Profile</sub></TableHead>
                    </>
                  ) : (
                    <>
                      <TableHead className="text-center" onClick={() => handleHeaderClick("panel")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort} /> Panel</TableHead>
                      <TableHead className="text-center" onClick={() => handleHeaderClick("peakIntensity")} style={{ cursor: 'pointer' }}><FontAwesomeIcon icon={faSort} /> Peak</TableHead>
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
                  )}
                </TableRow>
              </TableHeader>
              <TableBody>
                {paddingTop > 0 && <tr><td colSpan={99} style={{ height: paddingTop, padding: 0 }} /></tr>}
                {virtualItems.map(virtualRow => {
                  const reflection = visibleReflections[virtualRow.index];
                  return (
                    <SelectableTableRow
                      key={reflection.id}
                      onClick={() => clickedReflection(reflection)}
                      onContextMenu={() => rightClickedReflection(reflection)}
                      isSelected={selectedReflectionID === reflection.id}
                    >
                      {showCalculatedIntegratedReflections ? (
                        <>
                          <TableCell className="text-center">{reflection.panelName}</TableCell>
                          <TableCell className="text-center">{reflection.millerIdx}</TableCell>
                          <TableCell className="text-center">{reflection.XYZCal}</TableCell>
                          <TableCell className="text-center">{reflection.wavelengthCal}</TableCell>
                          <TableCell className="text-center">{reflection.tofCal}</TableCell>
                          <TableCell className="text-center">{reflection.summedIntensity}</TableCell>
                          <TableCell className="text-center">{reflection.profileIntensity}</TableCell>
                        </>
                      ) : (
                        <>
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
                        </>
                      )}
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
