

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
import { MouseEvent, useState, useRef, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSave, faPlay, faStop, faFileText, faFloppyDisk, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CorrectionsPopover } from "./CorrectionsPopover"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useRootContext } from "@/contexts/RootContext"
import { useIntegrateContext } from "@/contexts/IntegrateContext"
import { Status } from "@/types"
import { isNumber, isInt, advancedOptionsToPhil } from "@/utils"

export function IntegrateTab() {

  const {
    serverWS
  } = useRootContext();

  const {
    status,
    setStatus,
    log,
    setLog,
    exportEnabled,
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
    backgroundModel,
    setBackgroundModel,
    advancedOptions,
    setAdvancedOptions,
  } = useIntegrateContext();

  const [tOFBBoxPaddingValid, setTOFBBoxPaddingValid] = useState<boolean>(true);
  const [xYBBoxPaddingValid, setXYBBoxPaddingValid] = useState<boolean>(true);
  const [minPartialityValid, setMinPartialityValid] = useState<boolean>(true);
  const [minISigmaValid, setMinISigmaValid] = useState<boolean>(true);
  const [dminValid, setDminValid] = useState<boolean>(true);

  const defaultDmin = "2.0";

  const integrate = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setStatus(Status.Loading);
    setLog("");
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "dials.integrate",
      "args": getAlgorithmOptions()
    }));
  };

  useEffect(() => {
    setTOFBBoxPaddingValid(isInt(tOFBBoxPadding) || tOFBBoxPadding === "");
    setXYBBoxPaddingValid(isInt(xYBBoxPadding) || xYBBoxPadding === "");
    setMinPartialityValid(isNumber(minPartiality) || minPartiality === "");
    setMinISigmaValid(isNumber(minISigma) || minISigma === "");
    setDminValid(isNumber(dmin) || dmin === "");
  }, []);

  function getAlgorithmOptions() {
    interface AlgoOptions {
      [key: string]: string | undefined | boolean;
    }

    const algoOptions: AlgoOptions = {};

    let integrationMethod = "";
    switch (integrateMethod) {
      case "summation": integrationMethod = "summation"; break;
      case "profile-1d": integrationMethod = "profile1d"; break;
      case "profile-3d": integrationMethod = "profile3d"; break;
    }

    algoOptions["corrections.lorentz"] = applyLorentz;
    algoOptions["method"] = integrationMethod;
    algoOptions["integration_type"] = integrateType;
    algoOptions["mask"] = maskModel;
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

    let methodValue = "";
    switch (integrateMethod) {
      case "summation": methodValue = "summation"; break;
      case "profile-1d": methodValue = "profile1d"; break;
      case "profile-3d": methodValue = "profile3d"; break;
    }

    return [
      `method = ${methodValue}`,
      `integration_type = ${integrateType}`,
      "calculated {",
      `  dmin = ${dmin}`,
      "}",
      `mask = ${maskModel}`,
      `background_model = ${backgroundModel}`,
      `bbox_tof_padding = ${tOFBBoxPadding}`,
      `bbox_xy_padding = ${xYBBoxPadding}`,
      "corrections {",
      `  incident_run = ${vanadiumRun}`,
      `  empty_run = ${emptyRun}`,
      `  lorentz = ${applyLorentz}`,
      `  apply_incident_spectrum = ${applyIncidentSpectrum}`,
      `  apply_spherical_absorption = ${applySphericalAbsorption}`,
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

  const savePhil = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "save_integrate_phil",
      "content": buildPhilContent(),
    }));
  };

  const loadPhil = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "load_integrate_phil",
    }));
  };

  const cancelIntegrate = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "cancel_active_task",
    }));
  };

  const cardContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cardContentElement = cardContentRef.current;
    if (cardContentElement) {
      cardContentElement.scrollTop = cardContentElement.scrollHeight;
    }
  }, [log]);

  function exportReflections() {
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "dials.export",
      "args": {
        "format": "shelx",
        "mtz.partiality_threshold": minPartiality,
        "mtz.min_isigi": minISigma,
      }
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

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="grid grid-cols-6 gap-0">
          <div className="col-start-1 col-end-2 ...">
            {status !== Status.Loading ? (
              <Button onClick={integrate}><FontAwesomeIcon icon={faPlay} style={{ marginRight: '5px', marginTop: "0px" }} />Run </Button>
            ) : (
              <Button onClick={cancelIntegrate}><FontAwesomeIcon icon={faStop} style={{ marginRight: '5px', marginTop: "0px" }} />Stop </Button>
            )}
          </div>
          <div className="col-start-2 col-span-2 ...">
            <CorrectionsPopover />
          </div>
          <div className="col-start-5 col-span-2 ...">
            <Popover>
              <PopoverTrigger asChild>
                <Button disabled={!exportEnabled} style={{ marginLeft: "70px" }}><FontAwesomeIcon icon={faSave} style={{ marginRight: '5px' }} /> Export</Button>
              </PopoverTrigger>
              <PopoverContent className="w-150 h-300">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col space-y-4">
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
                  <div className="flex flex-col space-y-4">
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
                    className="self-end mt-4"
                  >
                    <FontAwesomeIcon icon={faSave} style={{ marginRight: "5px" }} />
                    Save HKL
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="col-end-8 col-span-1 flex gap-2 justify-end">
            <Button variant={"secondary"} onClick={savePhil}><FontAwesomeIcon icon={faFloppyDisk} style={{ marginRight: '5px', marginTop: "0px" }} />Save</Button>
            <Button variant={"secondary"} onClick={loadPhil}><FontAwesomeIcon icon={faFolderOpen} style={{ marginRight: '5px', marginTop: "0px" }} />Load</Button>
            <a href="src/assets/documentation/_build/html/docs/integration.html" target="_blank">
              <Button variant={"secondary"}><FontAwesomeIcon icon={faFileText} style={{ marginRight: '5px', marginTop: "0px" }} />Documentation </Button>
            </a>
          </div>
        </div>
        <div className="flex items-left gap-5">
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
                    <SelectItem value="profile-1d">1D Profile Fit</SelectItem>
                    <SelectItem value="profile-3d">3D Profile Fit</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col text-left">
            <div>
              <Label> XY Padding (pixels) </Label>
            </div>
            <div className="w-36">
              <Input
                style={{ borderColor: xYBBoxPaddingValid ? "" : "red" }}
                placeholder={"5"} value={xYBBoxPadding} onChange={(event) => updateParamXYBBoxPadding(event)} />
            </div>
          </div>
          <div className="flex flex-col text-left">
            <div>
              <Label> ToF Padding (frames) </Label>
            </div>
            <div className="w-36">
              <Input
                style={{ borderColor: tOFBBoxPaddingValid ? "" : "red" }}
                placeholder={"30"} value={tOFBBoxPadding} onChange={(event) => updateParamTOFBBoxPadding(event)} />
            </div>
          </div>
        </div>
        <div className="flex items-left gap-5">
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
            <div className="w-24">
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
        <div className="space-y-1">
          <Label>Advanced Options</Label>
          <Input value={advancedOptions} onChange={(e) => setAdvancedOptions(e.target.value)} placeholder="See Documentation for full list of options" />
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col overflow-hidden">
        <Card className={status === Status.Loading ? "flex-1 flex flex-col overflow-y-scroll border border-white" : status === Status.Default ? "flex-1 flex flex-col overflow-y-scroll" : "flex-1 flex flex-col overflow-y-scroll border border-red-500"} ref={cardContentRef}>
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
