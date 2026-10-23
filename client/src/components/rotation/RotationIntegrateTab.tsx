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
import { MouseEvent, useState, useRef, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSave, faPlay, faShapes, faStop, faFileText, faFloppyDisk, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useRootContext } from "@/contexts/RootContext"
import { RotationSymmetryResultsSheet } from "@/components/rotation/RotationSymmetryResults"
import { useExperimentViewerContext } from "@/contexts/ExperimentViewerContext"
import { useRotationIntegrateContext } from "@/contexts/rotation/RotationIntegrateContext"
import { useRotationScaleContext } from "@/contexts/rotation/RotationScaleContext"
import { AlgorithmResetWarning } from "@/components/AlgorithmResetWarning"
import { Status } from "@/types"
import { isNumber, advancedOptionsToPhil } from "@/utils"
import { PHIL_FILTERS, withSelectedPaths, withSelectedSavePath } from "@/lib/electron"

// Integrate for rotation data (dials.integrate), which always integrates the
// reflections predicted from the refined model
export function RotationIntegrateTab() {

  const { serverWS, stepPayload } = useRootContext();
  const { maskStored } = useExperimentViewerContext();

  const {
    status,
    setStatus,
    log,
    setLog,
    exportEnabled,
    exportSpaceGroups,
    exportInputFrom,
    setExportInputFrom,
    symmetryCandidates,
    symmetryResultsOpen,
    setSymmetryResultsOpen,
    profileFitting,
    setProfileFitting,
    backgroundAlgorithm,
    setBackgroundAlgorithm,
    dmin,
    setDmin,
    advancedOptions,
    setAdvancedOptions,
    useMask,
    setUseMask,
    intensityExportType,
    setIntensityExportType,
    minPartiality,
    setMinPartiality,
    minISigma,
    setMinISigma,
    symmetryNormalisation,
    setSymmetryNormalisation,
    symmetryDmin,
    setSymmetryDmin,
    symmetryMinCCHalf,
    setSymmetryMinCCHalf,
    symmetryPartialityThreshold,
    setSymmetryPartialityThreshold,
    symmetryMinIMeanOverSigmaMean,
    setSymmetryMinIMeanOverSigmaMean,
  } = useRotationIntegrateContext();
  const { log: scaleLog, reset: resetScale } = useRotationScaleContext();

  const [dminValid, setDminValid] = useState<boolean>(true);
  const [minPartialityValid, setMinPartialityValid] = useState<boolean>(true);
  const [minISigmaValid, setMinISigmaValid] = useState<boolean>(true);
  const [symmetryOpen, setSymmetryOpen] = useState<boolean>(false);
  const [runningSymmetry, setRunningSymmetry] = useState<boolean>(false);
  const [symmetryValid, setSymmetryValid] = useState<Record<string, boolean>>({});
  const [pendingRun, setPendingRun] = useState<boolean>(false);
  const cardContentRef = useRef<HTMLDivElement | null>(null);

  function getAlgorithmOptions(): Record<string, string> {
    const args: Record<string, string> = {
      "integration.profile.fitting": profileFitting ? "True" : "False",
    };
    // dials.integrate fails if Auto (its default) is given explicitly
    if (backgroundAlgorithm !== "Auto") {
      args["integration.background.algorithm"] = backgroundAlgorithm;
    }
    if (dmin !== "") {
      args["prediction.d_min"] = dmin;
    }

    advancedOptions.split(" ").forEach((pair) => {
      const [key, value] = pair.split("=");
      if (key !== "" && value !== undefined) {
        args[key] = value;
      }
    });
    return args;
  }

  const buildPhilContent = (): string => {
    const background = backgroundAlgorithm === "Auto" ? [] : [
      "  background {",
      `    algorithm = ${backgroundAlgorithm}`,
      "  }",
    ];
    return [
      "integration {",
      "  profile {",
      `    fitting = ${profileFitting ? "True" : "False"}`,
      "  }",
      ...background,
      "}",
      "prediction {",
      `  d_min = ${dmin || "None"}`,
      "}",
    ].join("\n") + advancedOptionsToPhil(advancedOptions);
  };

  const integrate = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (scaleLog) {
      setPendingRun(true);
      return;
    }
    doIntegrate();
  };

  const doIntegrate = () => {
    setStatus(Status.Loading);
    setLog("");
    serverWS.current?.send(serverMessage("workflow.run", stepPayload("integrate", {
      "args": getAlgorithmOptions(),
      "use_mask": maskStored && useMask,
    })));
  };

  const cancelIntegrate = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    serverWS.current?.send(serverMessage("session.cancel"));
  };

  const savePhil = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    serverWS.current?.send(await withSelectedSavePath("workflow.save_params", {
      "step": "integrate",
      "content": buildPhilContent()
    }, { title: "Save integrate Phil file", defaultName: "integrate.phil", filters: PHIL_FILTERS }));
  };

  const loadPhil = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    serverWS.current?.send(await withSelectedPaths("workflow.load_params", {
      "step": "integrate"
    }, { title: "Select Phil file", filters: PHIL_FILTERS }));
  };

  async function exportReflections() {
    serverWS.current?.send(await withSelectedSavePath("workflow.run", stepPayload("export", {
      "args": {
        "format": "mtz",
        "mtz.partiality_threshold": minPartiality || "0.4",
        "mtz.min_isigi": minISigma || "-5",
        "intensity": intensityExportType,
      },
      "input_from": exportInputFrom,
    }), {
      title: "Save file as",
      defaultName: "integrated.mtz",
      filters: [{ name: "MTZ files", extensions: ["mtz"] }, { name: "All files", extensions: ["*"] }],
    }));
  }

  const runSymmetry = () => {
    const args: Record<string, string> = {
      "normalisation": symmetryNormalisation,
      "min_cc_half": symmetryMinCCHalf || "0.6",
      "partiality_threshold": symmetryPartialityThreshold || "0.4",
      "min_i_mean_over_sigma_mean": symmetryMinIMeanOverSigmaMean || "4",
    };
    if (symmetryDmin !== "") {
      args["d_min"] = symmetryDmin;
    }
    setSymmetryOpen(false);
    setRunningSymmetry(true);
    setStatus(Status.Loading);
    setLog("");
    serverWS.current?.send(serverMessage("workflow.run", stepPayload("symmetry", { "args": args })));
  };

  const applySymmetry = (id: string) => {
    setRunningSymmetry(true);
    setStatus(Status.Loading);
    setLog("");
    serverWS.current?.send(serverMessage("workflow.run", stepPayload("apply_symmetry", { "id": id })));
  };

  const symmetryInputs: [string, string, string, string, (value: string) => void][] = [
    ["rotationSymmetryDmin", "dmin (Å)", "Auto", symmetryDmin, setSymmetryDmin],
    ["rotationSymmetryMinCCHalf", "Min CC½", "0.6", symmetryMinCCHalf, setSymmetryMinCCHalf],
    ["rotationSymmetryPartiality", "Partiality Threshold", "0.4", symmetryPartialityThreshold, setSymmetryPartialityThreshold],
    ["rotationSymmetryMinIOverSigma", "Min <I>/<σ>", "4", symmetryMinIMeanOverSigmaMean, setSymmetryMinIMeanOverSigmaMean],
  ];

  function updateNumber(
    event: React.ChangeEvent<HTMLInputElement>,
    setValue: (value: string) => void,
    setValid: (valid: boolean) => void,
  ) {
    const cleanedInput = event.target.value.replace(" ", "");
    setValid(isNumber(cleanedInput) || cleanedInput === "");
    setValue(cleanedInput);
  }

  useEffect(() => {
    if (status !== Status.Loading && runningSymmetry) {
      setRunningSymmetry(false);
    }
  }, [status]);

  useEffect(() => {
    const cardContentElement = cardContentRef.current;
    if (cardContentElement) {
      cardContentElement.scrollTop = cardContentElement.scrollHeight;
    }
  }, [log]);

  return (
    <>
    <AlgorithmResetWarning
      open={pendingRun}
      algorithmsThatWillReset={["Scale"]}
      onConfirm={() => { resetScale(); setPendingRun(false); doIntegrate(); }}
      onCancel={() => setPendingRun(false)}
    />
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex flex-wrap items-center gap-4">
          <div>
            {(status !== Status.Loading || runningSymmetry) ? (
              <Button onClick={integrate} disabled={runningSymmetry}><FontAwesomeIcon icon={faPlay} style={{ marginRight: '5px', marginTop: "0px" }} />Run </Button>
            ) : (
              <Button onClick={cancelIntegrate}><FontAwesomeIcon icon={faStop} style={{ marginRight: '5px', marginTop: "0px" }} />Stop </Button>
            )}
          </div>
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button disabled={!exportEnabled}><FontAwesomeIcon icon={faSave} style={{ marginRight: '5px' }} /> Export</Button>
              </PopoverTrigger>
              <PopoverContent className="w-72">
                <div className="flex flex-col gap-3">
                  {/* Only a choice once symmetry has been applied */}
                  {"apply_symmetry" in exportSpaceGroups && (
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="rotationExportSymmetry">Symmetry</Label>
                      <Select value={exportInputFrom} onValueChange={setExportInputFrom}>
                        <SelectTrigger id="rotationExportSymmetry" className="h-8">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="integrate">
                              Integrated{exportSpaceGroups.integrate ? ` (${exportSpaceGroups.integrate})` : ""}
                            </SelectItem>
                            <SelectItem value="apply_symmetry">
                              Applied symmetry{exportSpaceGroups.apply_symmetry ? ` (${exportSpaceGroups.apply_symmetry})` : ""}
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="rotationIntensityExportType">Intensity Type</Label>
                    <Select value={intensityExportType} onValueChange={setIntensityExportType}>
                      <SelectTrigger id="rotationIntensityExportType" className="h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="sum">sum</SelectItem>
                          <SelectItem value="profile">profile</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="rotationMinPartiality">Min Partiality</Label>
                    <Input
                      id="rotationMinPartiality"
                      placeholder="0.4"
                      value={minPartiality}
                      onChange={(event) => updateNumber(event, setMinPartiality, setMinPartialityValid)}
                      style={{ borderColor: minPartialityValid ? "" : "red" }}
                      className="h-8"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="rotationMinISigma">Min I/σ</Label>
                    <Input
                      id="rotationMinISigma"
                      placeholder="-5"
                      value={minISigma}
                      onChange={(event) => updateNumber(event, setMinISigma, setMinISigmaValid)}
                      style={{ borderColor: minISigmaValid ? "" : "red" }}
                      className="h-8"
                    />
                  </div>
                  <Button onClick={exportReflections} disabled={!exportEnabled} className="self-end mt-1">
                    <FontAwesomeIcon icon={faSave} style={{ marginRight: "5px" }} />
                    Save MTZ
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div>
            {runningSymmetry ? (
              <Button onClick={cancelIntegrate}><FontAwesomeIcon icon={faStop} style={{ marginRight: '5px', marginTop: "0px" }} />Stop </Button>
            ) : (
              <Popover open={symmetryOpen} onOpenChange={setSymmetryOpen}>
                <PopoverTrigger asChild>
                  <Button disabled={!exportEnabled || status === Status.Loading}><FontAwesomeIcon icon={faShapes} style={{ marginRight: '5px' }} /> Detect Space Group</Button>
                </PopoverTrigger>
                <PopoverContent className="w-60">
                  <div className="flex flex-col gap-3">
                    <p className="text-sm text-muted-foreground">Determine the Laue group with dials.symmetry</p>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="rotationSymmetryNormalisation">Normalisation</Label>
                      <Select value={symmetryNormalisation} onValueChange={setSymmetryNormalisation}>
                        <SelectTrigger id="rotationSymmetryNormalisation" className="h-8">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="ml_aniso">ml_aniso</SelectItem>
                            <SelectItem value="ml_iso">ml_iso</SelectItem>
                            <SelectItem value="quasi">quasi</SelectItem>
                            <SelectItem value="kernel">kernel</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    {symmetryInputs.map(([id, label, placeholder, value, setValue]) => (
                      <div key={id} className="flex flex-col space-y-1.5">
                        <Label htmlFor={id}>{label}</Label>
                        <Input
                          id={id}
                          placeholder={placeholder}
                          value={value}
                          onChange={(event) => updateNumber(event, setValue,
                            (valid) => setSymmetryValid((prev) => ({ ...prev, [id]: valid })))}
                          style={{ borderColor: symmetryValid[id] === false ? "red" : "" }}
                          className="h-8"
                        />
                      </div>
                    ))}
                    <div className="flex justify-end gap-2 mt-1">
                      {symmetryCandidates.length > 0 && (
                        <Button variant={"secondary"} onClick={() => { setSymmetryOpen(false); setSymmetryResultsOpen(true); }}>
                          Results
                        </Button>
                      )}
                      <Button
                        onClick={runSymmetry}
                        disabled={!exportEnabled || Object.values(symmetryValid).some((valid) => !valid)}>
                        <FontAwesomeIcon icon={faPlay} style={{ marginRight: "5px" }} />
                        Run
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )}
            <RotationSymmetryResultsSheet
              candidates={symmetryCandidates}
              open={symmetryResultsOpen}
              setOpen={setSymmetryResultsOpen}
              status={status}
              applySymmetry={applySymmetry}
            />
          </div>
          <div className="ml-auto flex gap-2">
            <Button variant={"secondary"} onClick={savePhil}><FontAwesomeIcon icon={faFloppyDisk} style={{ marginRight: '5px', marginTop: "0px" }} />Save</Button>
            <Button variant={"secondary"} onClick={loadPhil}><FontAwesomeIcon icon={faFolderOpen} style={{ marginRight: '5px', marginTop: "0px" }} />Load</Button>
            <a href="src/assets/documentation/_build/html/docs/integration.html" target="_blank">
              <Button variant={"secondary"}><FontAwesomeIcon icon={faFileText} style={{ marginRight: '5px', marginTop: "0px" }} />Documentation </Button>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap items-start gap-5 [&_label]:whitespace-nowrap">
          <div className="flex flex-col">
            <Label>Algorithm</Label>
            <div className="w-48">
              <Select
                value={profileFitting ? "profile" : "summation"}
                onValueChange={(value) => setProfileFitting(value === "profile")}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="summation">Summation</SelectItem>
                    <SelectItem value="profile">Profile fitting</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col">
            <Label>Background Algorithm</Label>
            <div className="w-40">
              <Select value={backgroundAlgorithm} onValueChange={setBackgroundAlgorithm}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Auto">auto</SelectItem>
                    <SelectItem value="simple">simple</SelectItem>
                    <SelectItem value="glm">glm</SelectItem>
                    <SelectItem value="gmodel">gmodel</SelectItem>
                    <SelectItem value="null">null</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col">
            <Label>dmin (Å)</Label>
            <div className="w-20">
              <Input
                style={{ borderColor: dminValid ? "" : "red" }}
                placeholder="None"
                value={dmin}
                onChange={(event) => updateNumber(event, setDmin, setDminValid)} />
            </div>
          </div>
        </div>
        {maskStored && (
          <div className="flex items-center gap-2">
            <Switch id="rotation_integrate_use_mask" checked={useMask} onCheckedChange={setUseMask} />
            <Label htmlFor="rotation_integrate_use_mask">Use Mask</Label>
          </div>
        )}
        <div className="space-y-1">
          <Label>Advanced Options</Label>
          <Input value={advancedOptions} onChange={(e) => setAdvancedOptions(e.target.value)} placeholder="See Documentation for full list of options" />
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col overflow-hidden">
        <Card className={status === Status.Loading ? "flex-1 flex flex-col overflow-y-scroll border border-foreground" : status === Status.Default ? "flex-1 flex flex-col overflow-y-scroll" : "flex-1 flex flex-col overflow-y-scroll border border-red-500"} ref={cardContentRef}>
          <CardHeader>
            <CardDescription>
              DIALS Output
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ opacity: status === Status.Loading ? 0.5 : 1 }} dangerouslySetInnerHTML={{ __html: log }} />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
    </>
  )
}
