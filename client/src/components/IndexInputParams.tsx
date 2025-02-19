
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Switch } from "@/components/ui/switch"
import { IndexSpaceGroupSearch } from "./IndexSpacegroupSearch"
import { useEffect, useState } from "react"
import { useIndexContext } from "@/contexts/IndexContext"

export function IndexInputParams(
  props: {
    addEntryToBasicOptions: (key: string, value: string) => void
  }) {

  const defaultUnitCell: string = "None";
  const defaultSpaceGroup: string = "None";
  const defaultHKLTolerance: string = "0.3";
  const defaultOptimizePanelsSeparately: boolean = true;

  const {
    initialUnitCell,
    setInitialUnitCell,
    initialSpacegroup,
    setInitialSpacegroup,
    hKLTolerance,
    setHKLTolerance
  } = useIndexContext();


  useEffect(() => {
    updateOptimizePanelsSeparately(defaultOptimizePanelsSeparately);
    props.addEntryToBasicOptions("unit_cell", initialUnitCell);
    props.addEntryToBasicOptions("space_group", initialSpacegroup);
    props.addEntryToBasicOptions("indexing.index_assignment.simple.hkl_tolerance", hKLTolerance)
    checkParamsValid();
  }, [])

  const [unitCellValid, setUnitCellValid] = useState<boolean>(true);
  const [hKLToleranceValid, setHKLToleranceValid] = useState<boolean>(true);


  function isValidUnitCell(unitCell: string){

    if (unitCell === "None" || unitCell === ""){
      return true;
    }

    const values = unitCell.trim().split(',').map(x => x.trim());
    
    if (values.length !== 6) {
        return false;
    }

    for (let val of values){
        if (isNaN(parseFloat(val)) || !isNumber(val)){
          return false;
        }
    }
    return true;
    
  }

  function checkParamsValid() {
    setUnitCellValid(isValidUnitCell(initialUnitCell));
  }


  function updateUnitCell(event: any, placeholder: string): void {
    let cleanedInput = event.target.value.replace(" ", "");

    setInitialUnitCell(cleanedInput);
    let valid = isValidUnitCell(cleanedInput);
    setUnitCellValid(valid);
    if (valid && cleanedInput !== ""){
      props.addEntryToBasicOptions("unit_cell", cleanedInput);
    }

  }

  function updateOptimizePanelsSeparately(checked: boolean) {
    var output: string = "single";
    if (checked) {
      output = "hierarchical";
    }
    props.addEntryToBasicOptions("detector.panels", output);
  }

  function updateHKLTolerance(event: any, placeholder: string) : void{
    let cleanedInput = event.target.value.replace(" ", "");
    if (cleanedInput === "") {
      props.addEntryToBasicOptions(
        "indexing.index_assignment.simple.hkl_tolerance"
        , placeholder);
      setHKLTolerance(placeholder);
    }
    else {
      props.addEntryToBasicOptions(
        "indexing.index_assignment.simple.hkl_tolerance"
        , cleanedInput);
      setHKLTolerance(cleanedInput);
    }

    let valid = isNumber(cleanedInput) || cleanedInput === "";
    setHKLToleranceValid(valid);
  }


  function isNumber(n: string): boolean {
    const singleNumberPattern = /^\d*\.?\d*$/;
    return (singleNumberPattern.test(n) && n !== ".");
  }

  return (
    <div className="grid grid-cols-20 gap-8 ">
      <div className="fixed">
        <Label> Initial Space Group </Label>
        <IndexSpaceGroupSearch addEntryToBasicOptions={props.addEntryToBasicOptions}></IndexSpaceGroupSearch>
      </div>
      <div className="col-start-1 col-end-2">
        <div className="w-[200px]"> </div>
      </div>
      <div className="col-start-2 col-end-3">
        <Label> Inital Unit Cell </Label>
        <Input 
          value={initialUnitCell}
          onChange={(event) => updateUnitCell(event, defaultUnitCell)}
          style={{ borderColor: unitCellValid ? "" : "red" }}
        />
      </div>
      <div className="col-start-3 col-end-4">
        <Label> hkl Tolerance </Label>
        <Input 
          value={hKLTolerance}
          onChange={(event) => updateHKLTolerance(event, defaultHKLTolerance)}
          style={{ borderColor: hKLToleranceValid ? "" : "red" }}
        />
      </div>
      <div className="col-start-4 col-end-6 flex flex-col items-left mt-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Label htmlFor="optimize_panels_separately" >
                Optimize Detector Panels Separately
              </Label>
            </TooltipTrigger>
            <TooltipContent>
              <p> Minor refinement is done after indexing. Allow panel positions within a multi-panel detector to be optimized separately </p>
            </TooltipContent>
          </Tooltip>
          <Switch 
            onCheckedChange={updateOptimizePanelsSeparately} 
            id="optimize_panels_separately" 
            checked={defaultOptimizePanelsSeparately} 
            className="mt-2" // Adds a margin between the label and switch
          />
      </TooltipProvider>
    </div>
    </div>
  )
}
