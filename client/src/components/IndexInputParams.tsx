
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
import React, { useState } from "react"
import { useIndexContext } from "@/contexts/IndexContext"
import { isNumber } from "@/utils"
import { useRefineContext } from "@/contexts/RefineContext"

export function IndexInputParams() {

  const defaultUnitCell = "None";
  const defaultHKLTolerance = "0.3";

  const {
    initialUnitCell,
    setInitialUnitCell,
    hKLTolerance,
    setHKLTolerance,
    jointIndexing,
    setJointIndexing,
  } = useIndexContext();

  const {
    optimizePanelsSeparately,
    setOptimizePanelsSeparately
  } = useRefineContext();

  const [unitCellValid, setUnitCellValid] = useState<boolean>(true);
  const [hKLToleranceValid, setHKLToleranceValid] = useState<boolean>(true);

  function isValidUnitCell(unitCell: string) {
    if (unitCell === "None" || unitCell === "") {
      return true;
    }
    const values = unitCell.trim().split(',').map(x => x.trim());
    if (values.length !== 6) {
      return false;
    }
    for (const val of values) {
      if (isNaN(parseFloat(val)) || !isNumber(val)) {
        return false;
      }
    }
    return true;
  }

  function updateUnitCell(event: React.ChangeEvent<HTMLInputElement>): void {
    const cleanedInput = event.target.value.replace(" ", "");
    setInitialUnitCell(cleanedInput === "" ? defaultUnitCell : cleanedInput);
    setUnitCellValid(isValidUnitCell(cleanedInput));
  }

  function updateHKLTolerance(event: React.ChangeEvent<HTMLInputElement>): void {
    const cleanedInput = event.target.value.replace(" ", "");
    setHKLTolerance(cleanedInput === "" ? defaultHKLTolerance : cleanedInput);
    setHKLToleranceValid(isNumber(cleanedInput) || cleanedInput === "");
  }

  return (
    <div className="grid grid-cols-20 gap-8 ">
      <div className="fixed">
        <Label> Initial Space Group </Label>
        <IndexSpaceGroupSearch></IndexSpaceGroupSearch>
      </div>
      <div className="col-start-1 col-end-2">
        <div className="w-[200px]"> </div>
      </div>
      <div className="col-start-2 col-end-3">
        <Label> Inital Unit Cell </Label>
        <Input
          value={initialUnitCell === defaultUnitCell ? "" : initialUnitCell}
          onChange={updateUnitCell}
          placeholder={defaultUnitCell}
          style={{ borderColor: unitCellValid ? "" : "red" }}
        />
      </div>
      <div className="col-start-3 col-end-4">
        <Label> hkl Tolerance </Label>
        <Input
          value={hKLTolerance === defaultHKLTolerance ? "" : hKLTolerance}
          onChange={updateHKLTolerance}
          placeholder={defaultHKLTolerance}
          style={{ borderColor: hKLToleranceValid ? "" : "red" }}
        />
      </div>
      <div className="col-start-4 col-end-5 flex flex-col items-left mt-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Label htmlFor="optimize_panels_separately">
                Optimize Panels Separately
              </Label>
            </TooltipTrigger>
            <TooltipContent>
              <p> Minor refinement is done after indexing. Allow panel positions within a multi-panel detector to be optimized separately </p>
            </TooltipContent>
          </Tooltip>
          <Switch
            onCheckedChange={setOptimizePanelsSeparately}
            id="optimize_panels_separately"
            checked={optimizePanelsSeparately}
            className="mt-2"
          />
        </TooltipProvider>
      </div>
      <div className="col-start-5 col-end-6 flex flex-col items-left mt-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Label htmlFor="joint_indexing">
                Joint Indexing
              </Label>
            </TooltipTrigger>
            <TooltipContent>
              <p> Index all experiments simultaneously </p>
            </TooltipContent>
          </Tooltip>
          <Switch
            onCheckedChange={setJointIndexing}
            id="joint_indexing"
            checked={jointIndexing}
            className="mt-2"
          />
        </TooltipProvider>
      </div>
    </div>
  )
}
