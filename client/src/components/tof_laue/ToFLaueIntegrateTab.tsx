import { serverMessage } from "@/lib/protocol";


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { MouseEvent, useState, useRef, useEffect, useMemo } from "react"
import { ResponsiveContainer, AreaChart, Area, XAxis, ReferenceArea } from 'recharts'
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
import { ToFLaueCorrectionsPopover } from "@/components/tof_laue/ToFLaueCorrectionsPopover"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useRootContext } from "@/contexts/RootContext"
import { ToFLaueSymmetryResultsSheet } from "@/components/tof_laue/ToFLaueSymmetryResults"
import { useExperimentViewerContext } from "@/contexts/ExperimentViewerContext"
import { useToFLaueIntegrateContext } from "@/contexts/tof_laue/ToFLaueIntegrateContext"
import { Status } from "@/types"
import { isNumber, isInt, advancedOptionsToPhil } from "@/utils"
import { PHIL_FILTERS, withSelectedPaths, withSelectedSavePath } from "@/lib/electron"
import { useTheme } from "@/hooks/useTheme";

export function ToFLaueIntegrateTab() {
  const { isDark, colors: themeColors } = useTheme();

  const {
    serverWS,
    stepPayload,
    reflections
  } = useRootContext();
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
    setTOFBBoxPadding,
    xYBBoxPadding,
    setXYBBoxPadding,
    minPartiality,
    setMinPartiality,
    minISigma,
    setMinISigma,
    dmin,
    setDmin,
    integrateType,
    setIntegrateType,
    integrateMethod,
    setIntegrateMethod,
    maskModel,
    setMaskModel,
    ellipseMaskScale,
    setEllipseMaskScale,
    backgroundModel,
    setBackgroundModel,
    advancedOptions,
    setAdvancedOptions,
    useMask,
    setUseMask,
    intensityExportType,
    setIntensityExportType,
    minTOF,
    maxTOF,
    currentMinTOF,
    currentMaxTOF,
    setCurrentMinTOF,
    setCurrentMaxTOF,
    stepTOF,
    minWavelength,
    maxWavelength,
    currentMinWavelength,
    currentMaxWavelength,
    setCurrentMinWavelength,
    setCurrentMaxWavelength,
    displayUnit,
    setDisplayUnit,
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
  } = useToFLaueIntegrateContext();

  const unit = displayUnit === "wavelength"
    ? {
        min: minWavelength,
        max: maxWavelength,
        current: [currentMinWavelength, currentMaxWavelength] as [number, number],
        label: "Å",
        setCurrentMin: setCurrentMinWavelength,
        setCurrentMax: setCurrentMaxWavelength,
        step: 0.01,
      }
    : {
        min: minTOF,
        max: maxTOF,
        current: [currentMinTOF, currentMaxTOF] as [number, number],
        label: "μsec",
        setCurrentMin: setCurrentMinTOF,
        setCurrentMax: setCurrentMaxTOF,
        step: 1,
      };

  const tofToWavelength = (tof: number): number => {
    if (maxTOF === minTOF) {
      return 0;
    }
    const wavelength = minWavelength + (tof - minTOF) * (maxWavelength - minWavelength) / (maxTOF - minTOF);
    return Math.round(wavelength * 10000) / 10000;
  };

  const wavelengthToTof = (wavelength: number): number => {
    if (maxWavelength === minWavelength) {
      return 0;
    }
    const tof = minTOF + (wavelength - minWavelength) * (maxTOF - minTOF) / (maxWavelength - minWavelength);
    return Math.round(tof * 1000) / 1000;
  };

  const sliderContainerRef = useRef<HTMLDivElement | null>(null);
  const latestPointerPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [rangeTooltip, setRangeTooltip] = useState<{ percentage: number; x: number; y: number } | null>(null);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const containerRect = sliderContainerRef.current?.getBoundingClientRect();
      if (containerRect) {
        latestPointerPos.current = {
          x: event.clientX - containerRect.left,
          y: event.clientY - containerRect.top,
        };
      }
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  const getReflectionsInRangePercentage = (rangeMin: number, rangeMax: number): number => {
    const field = displayUnit === "wavelength" ? "wavelength" : "tof";
    const values = reflections
      .map((r) => parseFloat(r[field]))
      .filter((v) => !isNaN(v));
    if (values.length === 0) {
      return 0;
    }
    const inRange = values.filter((v) => v >= rangeMin && v <= rangeMax).length;
    return (inRange / values.length) * 100;
  };

  const HISTOGRAM_BIN_COUNT = 40;

  const histogramData = useMemo(() => {
    const field = displayUnit === "wavelength" ? "wavelength" : "tof";
    const values = reflections
      .map((r) => parseFloat(r[field]))
      .filter((v) => !isNaN(v));
    if (values.length === 0 || unit.max <= unit.min) {
      return [];
    }
    const binWidth = (unit.max - unit.min) / HISTOGRAM_BIN_COUNT;
    const bins = new Array(HISTOGRAM_BIN_COUNT).fill(0);
    values.forEach((v) => {
      const idx = Math.min(HISTOGRAM_BIN_COUNT - 1, Math.max(0, Math.floor((v - unit.min) / binWidth)));
      bins[idx]++;
    });
    // simple 3-bin moving average for a smoothed appearance
    const smoothed = bins.map((_, i) => {
      const neighbours = [bins[i - 1], bins[i], bins[i + 1]].filter((v) => v !== undefined);
      return neighbours.reduce((a, b) => a + b, 0) / neighbours.length;
    });
    return smoothed.map((count, i) => ({
      x: unit.min + (i + 0.5) * binWidth,
      count,
    }));
  }, [reflections, displayUnit, unit.min, unit.max]);

  const showRangeTooltip = (rangeMin: number, rangeMax: number) => {
    const percentage = getReflectionsInRangePercentage(rangeMin, rangeMax);
    setRangeTooltip({ percentage, x: latestPointerPos.current.x, y: latestPointerPos.current.y });
  };

  const [tOFBBoxPaddingValid, setTOFBBoxPaddingValid] = useState<boolean>(true);
  const [xYBBoxPaddingValid, setXYBBoxPaddingValid] = useState<boolean>(true);
  const [minPartialityValid, setMinPartialityValid] = useState<boolean>(true);
  const [minISigmaValid, setMinISigmaValid] = useState<boolean>(true);
  const [dminValid, setDminValid] = useState<boolean>(true);
  const [ellipseMaskScaleValid, setEllipseMaskScaleValid] = useState<boolean>(true);

  const defaultDmin = "2.0";

  const integrate = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setStatus(Status.Loading);
    setLog("");
    serverWS.current?.send(serverMessage("workflow.run", stepPayload("integrate", {
      "args": getAlgorithmOptions(),
      "use_mask": maskStored && useMask,
    })));
  };

  useEffect(() => {
    setTOFBBoxPaddingValid(isInt(tOFBBoxPadding) || tOFBBoxPadding === "");
    setXYBBoxPaddingValid(isInt(xYBBoxPadding) || xYBBoxPadding === "");
    setMinPartialityValid(isNumber(minPartiality) || minPartiality === "");
    setMinISigmaValid(isNumber(minISigma) || minISigma === "");
    setDminValid(isNumber(dmin) || dmin === "");
    setEllipseMaskScaleValid(isNumber(ellipseMaskScale) || ellipseMaskScale === "");
  }, []);

  function getAlgorithmOptions() {
    interface AlgoOptions {
      [key: string]: string | undefined | boolean;
    }

    const algoOptions: AlgoOptions = {};

    algoOptions["corrections.lorentz"] = applyLorentz;
    algoOptions["method"] = integrateMethod;
    algoOptions["integration_type"] = integrateType;
    algoOptions["mask"] = maskModel;
    algoOptions["wavelength_range"] = `${currentMinWavelength},${currentMaxWavelength}`;
    if (maskModel === "ellipse") {
      algoOptions["ellipse_mask.scale"] = ellipseMaskScale;
    }
    algoOptions["background_model"] = backgroundModel;
    if (integrateType === "calculated") {
      algoOptions["calculated.dmin"] = dmin;
    }

    if (applyIncidentSpectrum) {
      algoOptions["corrections.incident_run"] = vanadiumRun;
      algoOptions["corrections.empty_run"] = emptyRun;
      if (applySphericalAbsorption) {
        algoOptions["corrections.absorption.incident_spectrum.sample_radius"] = vanadiumRadius;
        algoOptions["corrections.absorption.incident_spectrum.sample_number_density"] = vanadiumDensity;
        algoOptions["corrections.absorption.incident_spectrum.scattering_x_section"] = vanadiumScatteringXSection;
        algoOptions["corrections.absorption.incident_spectrum.absorption_x_section"] = vanadiumAbsorptionXSection;
        algoOptions["corrections.absorption.target_spectrum.sample_radius"] = sampleRadius;
        algoOptions["corrections.absorption.target_spectrum.sample_number_density"] = sampleDensity;
        algoOptions["corrections.absorption.target_spectrum.scattering_x_section"] = sampleScatteringXSection;
        algoOptions["corrections.absorption.target_spectrum.absorption_x_section"] = sampleAbsorptionXSection;
      }
    }

    advancedOptions.split(" ").forEach((pair) => {
      const [key, value] = pair.split("=");
      if (key !== "" && value !== undefined) {
        algoOptions[key] = value;
      }
    });

    return algoOptions;
  }

  const buildPhilContent = (): string => {
    const advPhil = advancedOptionsToPhil(advancedOptions);

    return [
      `method = ${integrateMethod}`,
      `integration_type = ${integrateType}`,
      "calculated {",
      `  dmin = ${dmin}`,
      "}",
      `mask = ${maskModel}`,
      "ellipse_mask {",
      `  scale = ${ellipseMaskScale}`,
      "}",
      `background_model = ${backgroundModel}`,
      `bbox_tof_padding = ${tOFBBoxPadding}`,
      `bbox_xy_padding = ${xYBBoxPadding}`,
      `wavelength_range = ${currentMinWavelength},${currentMaxWavelength}`,
      "corrections {",
      `  incident_run = ${vanadiumRun}`,
      `  empty_run = ${emptyRun}`,
      `  lorentz = ${applyLorentz}`,
      "  absorption {",
      "    incident_spectrum {",
      `      sample_radius = ${vanadiumRadius}`,
      `      sample_number_density = ${vanadiumDensity}`,
      `      scattering_x_section = ${vanadiumScatteringXSection}`,
      `      absorption_x_section = ${vanadiumAbsorptionXSection}`,
      "    }",
      "    target_spectrum {",
      `      sample_radius = ${sampleRadius}`,
      `      sample_number_density = ${sampleDensity}`,
      `      scattering_x_section = ${sampleScatteringXSection}`,
      `      absorption_x_section = ${sampleAbsorptionXSection}`,
      "    }",
      "  }",
      "}",
    ].join("\n") + advPhil;
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

  const cancelIntegrate = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    serverWS.current?.send(serverMessage("session.cancel"));
  };

  const [symmetryOpen, setSymmetryOpen] = useState<boolean>(false);
  const [runningSymmetry, setRunningSymmetry] = useState<boolean>(false);
  const [symmetryValid, setSymmetryValid] = useState<Record<string, boolean>>({});

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
    ["tofLaueSymmetryDmin", "dmin (Å)", "Auto", symmetryDmin, setSymmetryDmin],
    ["tofLaueSymmetryMinCCHalf", "Min CC½", "0.6", symmetryMinCCHalf, setSymmetryMinCCHalf],
    ["tofLaueSymmetryPartiality", "Partiality Threshold", "0.4", symmetryPartialityThreshold, setSymmetryPartialityThreshold],
    ["tofLaueSymmetryMinIOverSigma", "Min <I>/<σ>", "4", symmetryMinIMeanOverSigmaMean, setSymmetryMinIMeanOverSigmaMean],
  ];

  function updateSymmetryNumber(id: string, value: string, setValue: (value: string) => void) {
    const cleanedInput = value.replace(" ", "");
    setSymmetryValid((prev) => ({ ...prev, [id]: isNumber(cleanedInput) || cleanedInput === "" }));
    setValue(cleanedInput);
  }

  useEffect(() => {
    if (status !== Status.Loading && runningSymmetry) {
      setRunningSymmetry(false);
    }
  }, [status]);

  const cardContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cardContentElement = cardContentRef.current;
    if (cardContentElement) {
      cardContentElement.scrollTop = cardContentElement.scrollHeight;
    }
  }, [log]);

  async function exportReflections() {
    serverWS.current?.send(await withSelectedSavePath("workflow.run", stepPayload("export", {
      "args": {
        "format": "shelx",
        "mtz.partiality_threshold": minPartiality,
        "mtz.min_isigi": minISigma,
        "intensity": intensityExportType
      },
      "input_from": exportInputFrom,
    }), {
      title: "Save file as",
      defaultName: "exported.hkl",
      filters: [{ name: "HKL files", extensions: ["hkl"] }, { name: "All files", extensions: ["*"] }],
    }));
  }

  function updateMinPartiality(event: any) {
    const cleanedInput = event.target.value.replace(" ", "");
    setMinPartialityValid(isNumber(cleanedInput) || cleanedInput === "");
    setMinPartiality(cleanedInput);
  }

  function updateMinISigma(event: any) {
    const cleanedInput = event.target.value.replace(" ", "");
    setMinISigmaValid(isNumber(cleanedInput) || cleanedInput === "");
    setMinISigma(cleanedInput);
  }

  function updateParamTOFBBoxPadding(event: any) {
    const cleanedInput = event.target.value.replace(" ", "");
    setTOFBBoxPaddingValid(isInt(cleanedInput) || cleanedInput === "");
    setTOFBBoxPadding(cleanedInput);
  }

  function updateParamXYBBoxPadding(event: any) {
    const cleanedInput = event.target.value.replace(" ", "");
    setXYBBoxPaddingValid(isInt(cleanedInput) || cleanedInput === "");
    setXYBBoxPadding(cleanedInput);
  }

  function updateParamDmin(event: any) {
    const cleanedInput = event.target.value.replace(" ", "");
    setDminValid(isNumber(cleanedInput) || cleanedInput === "");
    setDmin(cleanedInput);
  }

  function updateParamEllipseMaskScale(event: any) {
    const cleanedInput = event.target.value.replace(" ", "");
    setEllipseMaskScaleValid(isNumber(cleanedInput) || cleanedInput === "");
    setEllipseMaskScale(cleanedInput);
  }

  return (
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
            <ToFLaueCorrectionsPopover />
          </div>
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button disabled={!exportEnabled}><FontAwesomeIcon icon={faSave} style={{ marginRight: '5px' }} /> Export</Button>
              </PopoverTrigger>
              <PopoverContent className="w-72">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="tofLaueExportSymmetry">Symmetry</Label>
                    <Select value={exportInputFrom} onValueChange={setExportInputFrom}>
                      <SelectTrigger id="tofLaueExportSymmetry" className="h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="integrate">
                            Integrated{exportSpaceGroups.integrate ? ` (${exportSpaceGroups.integrate})` : ""}
                          </SelectItem>
                          <SelectItem value="apply_symmetry" disabled={!("apply_symmetry" in exportSpaceGroups)}>
                            Applied symmetry{exportSpaceGroups.apply_symmetry ? ` (${exportSpaceGroups.apply_symmetry})` : ""}
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="intensityExportType">Intensity Type</Label>
                    <Select value={intensityExportType} onValueChange={setIntensityExportType}>
                      <SelectTrigger id="intensityExportType" className="h-8">
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
                    <Label htmlFor="minPartiality">Min Partiality</Label>
                    <Input
                      id="minPartiality"
                      placeholder="0"
                      value={minPartiality}
                      onChange={(event) => updateMinPartiality(event)}
                      style={{ borderColor: minPartialityValid ? "" : "red" }}
                      className="h-8"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="minISigma">Min I/σ</Label>
                    <Input
                      id="minISigma"
                      value={minISigma}
                      placeholder="0"
                      onChange={(event) => updateMinISigma(event)}
                      style={{ borderColor: minISigmaValid ? "" : "red" }}
                      className="h-8"
                    />
                  </div>
                  <Button
                    onClick={exportReflections}
                    disabled={!exportEnabled}
                    className="self-end mt-1"
                  >
                    <FontAwesomeIcon icon={faSave} style={{ marginRight: "5px" }} />
                    Save HKL
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
                      <Label htmlFor="tofLaueSymmetryNormalisation">Normalisation</Label>
                      <Select value={symmetryNormalisation} onValueChange={setSymmetryNormalisation}>
                        <SelectTrigger id="tofLaueSymmetryNormalisation" className="h-8">
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
                          onChange={(event) => updateSymmetryNumber(id, event.target.value, setValue)}
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
            <ToFLaueSymmetryResultsSheet
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
          <div className="flex flex-col  items-left">
            <div>
              <Label className="y-10">Algorithm</Label>
            </div>
            <div className="w-48">
              <Select value={integrateMethod} onValueChange={setIntegrateMethod}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="summation">Summation</SelectItem>
                    <SelectItem value="profile_1d_ibix">1D iBIX</SelectItem>
                    <SelectItem value="profile_1d_ic">1D IC</SelectItem>
                    <SelectItem value="profile_3d_gutmann">3D Gutmann</SelectItem>
                    <SelectItem value="profile_3d_ic">3D IC</SelectItem>
                    <SelectItem value="profile_3d_ibix">3D iBIX</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col text-left">
            <div>
              <Label> XY Padding (pxs) </Label>
            </div>
            <div className="w-20">
              <Input
                style={{ borderColor: xYBBoxPaddingValid ? "" : "red" }}
                placeholder={"5"} value={xYBBoxPadding} onChange={(event) => updateParamXYBBoxPadding(event)} />
            </div>
          </div>
          <div className="flex flex-col text-left">
            <div>
              <Label> ToF Padding (bins) </Label>
            </div>
            <div className="w-20">
              <Input
                style={{ borderColor: tOFBBoxPaddingValid ? "" : "red" }}
                placeholder={"30"} value={tOFBBoxPadding} onChange={(event) => updateParamTOFBBoxPadding(event)} />
            </div>
          </div>
          <div className="flex flex-col text-left flex-1">
            <div className="flex items-center gap-2">
              <Label>Range: {unit.current[0]}, {unit.current[1]} ({unit.label})</Label>
              <Select value={displayUnit} onValueChange={(value) => setDisplayUnit(value as "tof" | "wavelength")}>
                <SelectTrigger className="w-32 h-6">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="tof">ToF</SelectItem>
                    <SelectItem value="wavelength">Wavelength</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="min-w-50" ref={sliderContainerRef} style={{ position: "relative" }}>
              {rangeTooltip && (
                <div
                  style={{
                    position: "absolute",
                    left: rangeTooltip.x,
                    top: rangeTooltip.y + 15,
                    transform: "translateX(-50%)",
                    backgroundColor: '#020817',
                    color: "#fff",
                    padding: "4px 8px",
                    borderRadius: "5px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                    pointerEvents: "none",
                    fontSize: "14px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {rangeTooltip.percentage.toFixed(1)}% of observed reflections
                </div>
              )}
              <Slider
                value={unit.current}
                max={unit.max}
                min={unit.min}
                step={unit.step}
                minStepsBetweenThumbs={displayUnit === "wavelength" ? 0 : stepTOF}
                onValueChange={(value) => {
                  unit.setCurrentMin(value[0]);
                  unit.setCurrentMax(value[1]);
                  if (displayUnit === "wavelength") {
                    setCurrentMinTOF(wavelengthToTof(value[0]));
                    setCurrentMaxTOF(wavelengthToTof(value[1]));
                  } else {
                    setCurrentMinWavelength(tofToWavelength(value[0]));
                    setCurrentMaxWavelength(tofToWavelength(value[1]));
                  }
                  showRangeTooltip(value[0], value[1]);
                }}
                onValueCommit={() => setRangeTooltip(null)}
                style={{marginTop:"2vh"}}
              />
              {rangeTooltip && histogramData.length > 0 && (
                <div style={{ marginTop: "8px" }}>
                  <ResponsiveContainer width="100%" height={50}>
                    <AreaChart data={histogramData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                      <XAxis dataKey="x" type="number" domain={[unit.min, unit.max]} hide />
                      <ReferenceArea x1={unit.current[0]} x2={unit.current[1]} fill={isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(15, 23, 42, 0.12)"} stroke="none" />
                      <Area type="monotone" dataKey="count" stroke={themeColors.logoGreenEdge} fill={themeColors.logoGreen} fillOpacity={0.4} strokeWidth={2} dot={false} isAnimationActive={false} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-start gap-5 [&_label]:whitespace-nowrap">
          <div className="flex flex-col items-left">
            <div>
              <Label className="y-10">Type</Label>
            </div>
            <div className="w-48">
              <Select value={integrateType} onValueChange={setIntegrateType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="observed">observed only</SelectItem>
                    <SelectItem value="calculated">calculated</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col text-left">
            <div>
              <Label style={{ color: integrateType === "calculated" ? "" : "#6a7688" }}> dmin </Label>
            </div>
            <div className="w-20">
              <Input
                style={{ borderColor: dminValid ? "" : "red" }}
                placeholder={defaultDmin} disabled={integrateType !== "calculated"} value={dmin} onChange={(event) => updateParamDmin(event)} />
            </div>
          </div>
          <div className="flex flex-col items-left">
            <div>
              <Label>Mask</Label>
            </div>
            <div className="w-40">
              <Select value={maskModel} onValueChange={setMaskModel}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="ellipse">Ellipse</SelectItem>
                    <SelectItem value="seed_skewness">Seed Skewness</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          {maskModel === "ellipse" && (
            <div className="flex flex-col text-left">
              <div>
                <Label>Ellipse Scale (σ)</Label>
              </div>
              <div className="w-20">
                <Input
                  style={{ borderColor: ellipseMaskScaleValid ? "" : "red" }}
                  placeholder="3.0"
                  value={ellipseMaskScale}
                  onChange={(event) => updateParamEllipseMaskScale(event)}
                />
              </div>
            </div>
          )}
          <div className="flex flex-col items-left">
            <div>
              <Label>Background Model</Label>
            </div>
            <div className="w-40">
              <Select value={backgroundModel} onValueChange={setBackgroundModel}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="linear2d">Linear 2D</SelectItem>
                    <SelectItem value="linear3d">Linear 3D</SelectItem>
                    <SelectItem value="constant2d">Constant 2D</SelectItem>
                    <SelectItem value="constant3d">Constant 3D</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        {maskStored && (
          <div className="flex items-center gap-2">
            <Switch id="tof_laue_integrate_use_mask" checked={useMask} onCheckedChange={setUseMask} />
            <Label htmlFor="tof_laue_integrate_use_mask">Use Mask</Label>
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
            {status === Status.Loading ?
              <div style={{ opacity: 0.5 }} dangerouslySetInnerHTML={{ __html: log }} />
              :
              <div dangerouslySetInnerHTML={{ __html: log }} />
            }
          </CardContent>
        </Card>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  )
}
