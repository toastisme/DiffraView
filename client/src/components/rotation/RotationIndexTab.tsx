import { serverMessage } from "@/lib/protocol";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { MouseEvent, useRef, useEffect, useState } from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RotationDetectSymmetrySheet } from "@/components/rotation/RotationDetectSymmetry"
import { RotationIndexAlgorithmSelect } from "@/components/rotation/RotationIndexAlgorithmSelect"
import { RotationIndexSpaceGroupSearch } from "@/components/rotation/RotationIndexSpacegroupSearch"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faStop, faFileText, faFloppyDisk, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { useRotationIndexContext } from "@/contexts/rotation/RotationIndexContext"
import { useRotationRefineContext } from "@/contexts/rotation/RotationRefineContext"
import { useRotationIntegrateContext } from "@/contexts/rotation/RotationIntegrateContext"
import { useRootContext } from "@/contexts/RootContext"
import { Status } from "@/types"
import { advancedOptionsToPhil, isNumber } from "@/utils"
import { PHIL_FILTERS, withSelectedPaths, withSelectedSavePath } from "@/lib/electron"
import { AlgorithmResetWarning } from "@/components/AlgorithmResetWarning"
import { ALGORITHM_SUCCESSORS } from "@/constants/algorithmSuccessors"

const DEFAULT_UNIT_CELL = "None";
const DEFAULT_HKL_TOLERANCE = "0.3";

const REFINE_BRAVAIS_SETTINGS_ARGS = {
  "refinement.parameterisation.beam.fix": "all",
  "refinement.parameterisation.detector.fix": "all",
  "refinement.parameterisation.goniometer.fix": "all",
};

function isValidUnitCell(unitCell: string) {
  if (unitCell === DEFAULT_UNIT_CELL || unitCell === "") {
    return true;
  }
  const values = unitCell.trim().split(',').map(x => x.trim());
  return values.length === 6 && values.every((val) => isNumber(val));
}

// Index for rotation data: no per-panel detector refinement
export function RotationIndexTab() {

  const indexState = useRotationIndexContext();
  const {
    crystalIDs,
    detectSymmetryEnabled,
    status,
    setStatus,
    log,
    setLog,
    initialUnitCell,
    setInitialUnitCell,
    initialSpacegroup,
    setInitialSpacegroup,
    hKLTolerance,
    setHKLTolerance,
    indexingMethod,
    setIndexingMethod,
    outlierAlgorithm,
    setOutlierAlgorithm,
    jointIndexing,
    setJointIndexing,
    advancedOptions,
    setAdvancedOptions,
  } = indexState;

  const { log: refineLog, reset: resetRefine } = useRotationRefineContext();
  const { log: integrateLog, reset: resetIntegrate } = useRotationIntegrateContext();
  const { serverWS, stepPayload } = useRootContext();

  const [selectedCrystalID, setSelectedCrystalID] = useState<string>("0");
  const [pendingRun, setPendingRun] = useState(false);
  const [runningBravaisSettings, setRunningBravaisSettings] = useState<boolean>(false);
  const [unitCellValid, setUnitCellValid] = useState<boolean>(true);
  const [hKLToleranceValid, setHKLToleranceValid] = useState<boolean>(true);
  const cardContentRef = useRef<HTMLDivElement | null>(null);

  const successorLogs = [refineLog, integrateLog];
  const willReset = ALGORITHM_SUCCESSORS.index.filter((_, i) => !!successorLogs[i]);

  const index = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (willReset.length > 0) {
      setPendingRun(true);
      return;
    }
    doIndex();
  };

  const doIndex = () => {
    setStatus(Status.Loading);
    setLog("");

    const args: Record<string, string> = {
      "unit_cell": initialUnitCell || DEFAULT_UNIT_CELL,
      "space_group": initialSpacegroup || "None",
      "indexing.index_assignment.simple.hkl_tolerance": hKLTolerance,
      "indexing.method": indexingMethod,
      "refinement.reflections.outlier.algorithm": outlierAlgorithm,
      "joint_indexing": jointIndexing ? "True" : "False",
    };

    // Advanced options override any duplicate keys
    advancedOptions.split(" ").forEach((pair) => {
      const [key, value] = pair.split("=");
      if (key && value !== undefined) {
        args[key] = value;
      }
    });

    serverWS.current?.send(serverMessage("workflow.run", stepPayload("index", { "args": args })));
  };

  const cancelIndex = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    serverWS.current?.send(serverMessage("session.cancel"));
  };

  const buildPhilContent = (): string => {
    return [
      "indexing {",
      `  method = ${indexingMethod}`,
      "  known_symmetry {",
      `    space_group = ${initialSpacegroup || "None"}`,
      `    unit_cell = ${initialUnitCell || DEFAULT_UNIT_CELL}`,
      "  }",
      "  index_assignment {",
      "    simple {",
      `      hkl_tolerance = ${hKLTolerance}`,
      "    }",
      "  }",
      "}",
      "refinement {",
      "  reflections {",
      "    outlier {",
      `      algorithm = ${outlierAlgorithm}`,
      "    }",
      "  }",
      "}",
    ].join("\n") + advancedOptionsToPhil(advancedOptions);
  };

  const savePhil = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    serverWS.current?.send(await withSelectedSavePath("workflow.save_params", {
      "step": "index",
      "content": buildPhilContent()
    }, { title: "Save index Phil file", defaultName: "index.phil", filters: PHIL_FILTERS }));
  };

  const loadPhil = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    serverWS.current?.send(await withSelectedPaths("workflow.load_params", {
      "step": "index"
    }, { title: "Select Phil file", filters: PHIL_FILTERS }));
  };

  const refineBravaisSettings = (crystalID?: string) => {
    const args: Record<string, string> = { ...REFINE_BRAVAIS_SETTINGS_ARGS };
    if (crystalID !== undefined) {
      setSelectedCrystalID(crystalID);
      args["crystal_id"] = crystalID;
    }
    setStatus(Status.Loading);
    setLog("");
    serverWS.current?.send(serverMessage("workflow.run", stepPayload("refine_bravais_settings", { "args": args })));
    setRunningBravaisSettings(true);
  };

  function updateUnitCell(event: React.ChangeEvent<HTMLInputElement>): void {
    const cleanedInput = event.target.value.replace(" ", "");
    setInitialUnitCell(cleanedInput === "" ? DEFAULT_UNIT_CELL : cleanedInput);
    setUnitCellValid(isValidUnitCell(cleanedInput));
  }

  function updateHKLTolerance(event: React.ChangeEvent<HTMLInputElement>): void {
    const cleanedInput = event.target.value.replace(" ", "");
    setHKLTolerance(cleanedInput === "" ? DEFAULT_HKL_TOLERANCE : cleanedInput);
    setHKLToleranceValid(isNumber(cleanedInput) || cleanedInput === "");
  }

  useEffect(() => {
    const cardContentElement = cardContentRef.current;
    if (cardContentElement) {
      cardContentElement.scrollTop = cardContentElement.scrollHeight;
    }
  }, [log]);

  useEffect(() => {
    if (status !== Status.Loading && runningBravaisSettings) {
      setRunningBravaisSettings(false);
    }
  }, [status]);

  return (
    <>
    <AlgorithmResetWarning
      open={pendingRun}
      algorithmsThatWillReset={willReset}
      onConfirm={() => { resetRefine(); resetIntegrate(); setPendingRun(false); doIndex(); }}
      onCancel={() => setPendingRun(false)}
    />
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex flex-wrap items-center gap-4">
          <div>
            {(status === Status.Loading && !runningBravaisSettings) ? (
              <Button onClick={cancelIndex}><FontAwesomeIcon icon={faStop} style={{ marginRight: '5px', marginTop: "0px" }} />Stop </Button>
            ) : (
              <Button onClick={index}><FontAwesomeIcon icon={faPlay} style={{ marginRight: '5px', marginTop: "0px" }} />Run </Button>
            )}
          </div>
          <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  {runningBravaisSettings ? (
                    <Button onClick={cancelIndex}><FontAwesomeIcon icon={faStop} style={{ marginRight: '5px', marginTop: "0px" }} />Stop </Button>
                  ) : crystalIDs.length > 1 ? (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button disabled={!detectSymmetryEnabled}><FontAwesomeIcon icon={faPlay} style={{ marginRight: '5px', marginTop: "0px" }} /> Detect Symmetry </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80">
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground">
                            Select which crystal to apply symmetry to.
                          </p>
                          <Label>Crystal id</Label>
                          <Select onValueChange={(value) => refineBravaisSettings(value)}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                {crystalIDs.map((crystalID) => (
                                  <SelectItem key={crystalID} value={crystalID.toString()}>{crystalID}</SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </PopoverContent>
                    </Popover>
                  ) : (
                    <Button onClick={() => refineBravaisSettings()} disabled={!detectSymmetryEnabled}><FontAwesomeIcon icon={faPlay} style={{ marginRight: '5px', marginTop: "0px" }} /> Detect Symmetry </Button>
                  )}
                </TooltipTrigger>
                <TooltipContent>
                  <p>Identify possible Bravais lattices</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <RotationDetectSymmetrySheet selectedCrystalID={selectedCrystalID} index={indexState} />
          </div>
          <div className="ml-auto flex gap-2">
            <Button variant={"secondary"} onClick={savePhil}><FontAwesomeIcon icon={faFloppyDisk} style={{ marginRight: '5px', marginTop: "0px" }} />Save</Button>
            <Button variant={"secondary"} onClick={loadPhil}><FontAwesomeIcon icon={faFolderOpen} style={{ marginRight: '5px', marginTop: "0px" }} />Load</Button>
            <a href="src/assets/documentation/_build/html/docs/indexing.html" target="_blank">
              <Button variant={"secondary"}><FontAwesomeIcon icon={faFileText} style={{ marginRight: '5px', marginTop: "0px" }} />Documentation </Button>
            </a>
          </div>
        </div>
        <RotationIndexAlgorithmSelect
          indexingMethod={indexingMethod}
          setIndexingMethod={setIndexingMethod}
          outlierAlgorithm={outlierAlgorithm}
          setOutlierAlgorithm={setOutlierAlgorithm}
        />
        <div className="flex flex-wrap items-start gap-x-8 gap-y-4">
          <div>
            <Label> Initial Space Group </Label>
            <RotationIndexSpaceGroupSearch initialSpacegroup={initialSpacegroup} setInitialSpacegroup={setInitialSpacegroup} />
          </div>
          <div>
            <Label> Inital Unit Cell </Label>
            <Input
              value={initialUnitCell === DEFAULT_UNIT_CELL ? "" : initialUnitCell}
              onChange={updateUnitCell}
              placeholder={DEFAULT_UNIT_CELL}
              style={{ borderColor: unitCellValid ? "" : "red" }}
            />
          </div>
          <div>
            <Label> hkl Tolerance </Label>
            <Input
              value={hKLTolerance === DEFAULT_HKL_TOLERANCE ? "" : hKLTolerance}
              onChange={updateHKLTolerance}
              placeholder={DEFAULT_HKL_TOLERANCE}
              className="w-20"
              style={{ borderColor: hKLToleranceValid ? "" : "red" }}
            />
          </div>
          <div className="flex flex-col items-left mt-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Label htmlFor="rotation_joint_indexing">Joint Indexing</Label>
                </TooltipTrigger>
                <TooltipContent>
                  <p> Index all experiments simultaneously </p>
                </TooltipContent>
              </Tooltip>
              <Switch
                onCheckedChange={setJointIndexing}
                id="rotation_joint_indexing"
                checked={jointIndexing}
                className="mt-2"
              />
            </TooltipProvider>
          </div>
        </div>
        <div>
          <Label>Advanced Options</Label>
          <Input value={advancedOptions} onChange={(e) => setAdvancedOptions(e.target.value)} placeholder="See Documentation for full list of options" />
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col overflow-y-hidden">
        <Card className={status === Status.Loading ? "flex-1 flex flex-col overflow-y-scroll overflow-x-hidden border border-foreground flex-shrink" : status === Status.Default ? "flex-1 flex flex-col overflow-y-scroll" : "flex-1 flex flex-col overflow-y-scroll overflow-x-hidden border border-red-500"} ref={cardContentRef}>
          <CardHeader>
            <CardDescription>
              DIALS Output
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ opacity: status === Status.Loading ? 0.5 : 1, overflowX: "hidden", maxWidth: "100%" }} dangerouslySetInnerHTML={{ __html: log }} />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
    </>
  )
}
