
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
import { useEffect } from "react"

export function IndexInputParams(
  props: {
    addEntryToBasicOptions: (key: string, value: string) => void
  }) {

  const defaultUnitCell: string = "None";
  const defaultSpaceGroup: string = "None";
  const defaultHKLTolerance: string = "0.3";
  const defaultOptimizePanelsSeparately: boolean = true;

  useEffect(() => {
    updateOptimizePanelsSeparately(defaultOptimizePanelsSeparately);
    props.addEntryToBasicOptions("unit_cell", defaultUnitCell);
    props.addEntryToBasicOptions("space_group", defaultSpaceGroup);
    props.addEntryToBasicOptions("indexing.index_assignment.simple.hkl_tolerance", defaultHKLTolerance)
  }, [])


  function updateUnitCell(event: any, placeholder: string): void {
    event.target.value = event.target.value.replace(/[^0-9.,]/g, "");
    var value: string = event.target.value;

    if (value == "") {
      value = placeholder;
    }

    if (value != placeholder) {
    }

    props.addEntryToBasicOptions("unit_cell", value);

  }

  function updateOptimizePanelsSeparately(checked: boolean) {
    var output: string = "single";
    if (checked) {
      output = "hierarchical";
    }
    props.addEntryToBasicOptions("detector.panels", output);
  }



  function updateIndexAlgorithm(event: any, name: string, placeholder: string, expectedType: string): void {

    if (expectedType == "float") {
      var cleanedInput = event.target.value.replace(/[^0-9.]/g, "");

      // Ensure there is at most one dot
      const dotCount = (cleanedInput.match(/\./g) || []).length;

      if (dotCount > 1) {
        const firstDotIndex = cleanedInput.indexOf('.');
        const lastDotIndex = cleanedInput.lastIndexOf('.');
        cleanedInput = cleanedInput.substring(0, firstDotIndex + 1) + cleanedInput.substring(firstDotIndex + 1, lastDotIndex);
      }
      event.target.value = cleanedInput;
    }
    else {
      event.target.value = event.target.value.replace(/[^0-9]/g, "");
    }
    var value: string = event.target.value;

    if (value == "") {
      value = placeholder;
    }


    props.addEntryToBasicOptions(name, value);
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
        <Input placeholder={defaultUnitCell}
          onChange={(event) => updateUnitCell(event, defaultUnitCell)}
        />
      </div>
      <div className="col-start-3 col-end-4">
        <Label> hkl Tolerance </Label>
        <Input placeholder={defaultHKLTolerance}
          onChange={(event) => updateIndexAlgorithm(event, "indexing.index_assignment.simple.hkl_tolerance", defaultHKLTolerance, "float")}
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
