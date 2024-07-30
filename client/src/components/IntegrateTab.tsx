

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
import { Checkbox } from "@/components/ui/checkbox"
import React, { MouseEvent, useState, useRef, useEffect } from "react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSave, faPlay, faStop, faFileText, faFileImage } from '@fortawesome/free-solid-svg-icons';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function IntegrateTab(props: {
  setLog: React.Dispatch<React.SetStateAction<string>>,
  enabled: boolean,
  loading: boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  log: string,
  ranSuccessfully: boolean,
  saveHKLEnabled: boolean,
  emptyRun: string,
  setEmptyRun: React.Dispatch<React.SetStateAction<string>>,
  vanadiumRun: string,
  setVanadiumRun: React.Dispatch<React.SetStateAction<string>>,
  sampleDensity: string,
  setSampleDensity: React.Dispatch<React.SetStateAction<string>>,
  sampleRadius: string,
  setSampleRadius: React.Dispatch<React.SetStateAction<string>>,
  sampleAbsorptionXSection: string,
  setSampleAbsorptionXSection: React.Dispatch<React.SetStateAction<string>>,
  sampleScatteringXSection: string,
  setSampleScatteringXSection: React.Dispatch<React.SetStateAction<string>>,
  vanadiumDensity: string,
  setVanadiumDensity: React.Dispatch<React.SetStateAction<string>>,
  vanadiumRadius: string,
  setVanadiumRadius: React.Dispatch<React.SetStateAction<string>>,
  vanadiumAbsorptionXSection: string,
  setVanadiumAbsorptionXSection: React.Dispatch<React.SetStateAction<string>>,
  vanadiumScatteringXSection: string,
  setVanadiumScatteringXSection: React.Dispatch<React.SetStateAction<string>>,
  applyLorentz: boolean,
  setApplyLorentz : React.Dispatch<React.SetStateAction<boolean>>,
  serverWS: React.MutableRefObject<WebSocket | null>
}) {


  const [basicOptions, setBasicOptions] = useState<Record<string, string>>({});
  const [advancedOptions, _] = useState<string>("");
  const [showIncidentCorrections, setShowIncidentCorrections] = useState<boolean>(false);
  const [showAbsorptionCorrections, setShowAbsorptionCorrections] = useState<boolean>(false);

  const [vanadiumRadiusValid, setVanadiumRadiusValid] = useState<boolean>(true);
  const [vanadiumDensityValid, setVanadiumDensityValid] = useState<boolean>(true);
  const [vanadiumScatteringXSectionValid, setVanadiumScatteringXSectionValid] = useState<boolean>(true);
  const [vanadiumAbsorptionXSectionValid, setVanadiumAbsorptionXSectionValid] = useState<boolean>(true);
  const [sampleRadiusValid, setSampleRadiusValid] = useState<boolean>(true);
  const [sampleDensityValid, setSampleDensityValid] = useState<boolean>(true);
  const [sampleScatteringXSectionValid, setSampleScatteringXSectionValid] = useState<boolean>(true);
  const [sampleAbsorptionXSectionValid, setSampleAbsorptionXSectionValid] = useState<boolean>(true);

  const defaultIncidentRun =  "None";
  const defaultEmptyRun =  "None";
  const defaultVanadiumRadius = "0.03";
  const defaultVanadiumDensity = "0.0722";
  const defaultVanadiumScatteringXSection = "5.158";
  const defaultVanadiumAbsorptionXSection = "4.4883";
  const defaultSampleRadius = "None";
  const defaultSampleDensity = "None";
  const defaultSampleScatteringXSection = "None";
  const defaultSampleAbsorptionXSection = "None";

  const integrate = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    props.setLoading(true);
    props.setLog("");
    const algorithmOptions = getAlgorithmOptions();
    props.serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "dials.integrate",
      "args": algorithmOptions
    }));
  };

  const addEntryToBasicOptions = (key: string, value: string) => {
    setBasicOptions((prevOptions) => ({
      ...prevOptions,
      [key]: value,
    }));
  };

  function getAlgorithmOptions() {


    const algorithmOptions = { ...basicOptions }

    // Advanced options are added second, 
    // and so replace any duplicates in basicOptions
    const keyValuePairs = advancedOptions.split(" ");

    keyValuePairs.forEach((pair) => {
      const [key, value] = pair.split("=");
      if (key != "" && value != undefined) {
        algorithmOptions[key] = value;
      }
    });

    return algorithmOptions;
  }

  function getReducedFilename(filepath: string, maxSize: number) {
    if (!filepath) return '';

    const parts = filepath.split(/[/\\]/);

    const filename = parts.pop();
    if (filename === undefined){
      return "";
    }
    if (filename.length > maxSize){
      return filename?.substring(0,maxSize-3) + "...";
    }
    return filename;
  }


  function updateIncidentCorrections() {
    const incidentCheckbox = window.document.getElementById("incident");
    const state = incidentCheckbox?.getAttribute("data-state");
    if(state==="unchecked"){
      setShowIncidentCorrections(true);
      addEntryToBasicOptions("input.incident_run", props.vanadiumRun);
      addEntryToBasicOptions("input.empty_run", props.emptyRun);
      addEntryToBasicOptions("incident_spectrum.sample_radius", props.vanadiumRadius);
      addEntryToBasicOptions("incident_spectrum.sample_number_density", props.vanadiumDensity);
      addEntryToBasicOptions("incident_spectrum.scattering_x_section", props.vanadiumScatteringXSection);
      addEntryToBasicOptions("incident_spectrum.absorption_x_section", props.vanadiumAbsorptionXSection);
    }
    else if(state==="checked"){
      setShowIncidentCorrections(false);
      addEntryToBasicOptions("input.incident_run", defaultIncidentRun);
      addEntryToBasicOptions("input.empty_run", defaultEmptyRun);
      addEntryToBasicOptions("incident_spectrum.sample_radius", defaultVanadiumRadius);
      addEntryToBasicOptions("incident_spectrum.sample_number_density", defaultVanadiumDensity);
      addEntryToBasicOptions("incident_spectrum.scattering_x_section", defaultVanadiumScatteringXSection);
      addEntryToBasicOptions("incident_spectrum.absorption_x_section", defaultVanadiumAbsorptionXSection);
    }
  }

  function updateAbsorptionCorrections() {
    const sphericalAbsorptionCheckbox = window.document.getElementById("spherical_absorption");
    const state = sphericalAbsorptionCheckbox?.getAttribute("data-state");
    if(state==="unchecked"){
      setShowAbsorptionCorrections(true);
      addEntryToBasicOptions("target_spectrum.sample_radius", props.sampleRadius);
      addEntryToBasicOptions("target_spectrum.sample_number_density", props.sampleDensity);
      addEntryToBasicOptions("target_spectrum.scattering_x_section", props.sampleScatteringXSection);
      addEntryToBasicOptions("target_spectrum.absorption_x_section", props.sampleAbsorptionXSection);
      addEntryToBasicOptions("incident_spectrum.sample_radius", props.vanadiumRadius);
      addEntryToBasicOptions("incident_spectrum.sample_number_density", props.vanadiumDensity);
      addEntryToBasicOptions("incident_spectrum.scattering_x_section", props.vanadiumScatteringXSection);
      addEntryToBasicOptions("incident_spectrum.absorption_x_section", props.vanadiumAbsorptionXSection);
    }
    else if(state==="checked"){
      setShowAbsorptionCorrections(false);
      addEntryToBasicOptions("target_spectrum.sample_radius", defaultSampleRadius);
      addEntryToBasicOptions("target_spectrum.sample_number_density", defaultSampleDensity);
      addEntryToBasicOptions("target_spectrum.scattering_x_section", defaultSampleScatteringXSection);
      addEntryToBasicOptions("target_spectrum.absorption_x_section", defaultSampleAbsorptionXSection);
      addEntryToBasicOptions("incident_spectrum.sample_radius", defaultVanadiumRadius);
      addEntryToBasicOptions("incident_spectrum.sample_number_density", defaultVanadiumDensity);
      addEntryToBasicOptions("incident_spectrum.scattering_x_section", defaultVanadiumScatteringXSection);
      addEntryToBasicOptions("incident_spectrum.absorption_x_section", defaultVanadiumAbsorptionXSection);
    }
  }
  function updateLorentzCorrection() {
    const lorentzCheckbox = window.document.getElementById("lorentz");
    const state = lorentzCheckbox?.getAttribute("data-state");
    if (state === "checked"){
      addEntryToBasicOptions("corrections.lorentz", "False")
      props.setApplyLorentz(false);
    }
    else if (state === "unchecked"){
      addEntryToBasicOptions("corrections.lorentz", "True")
      props.setApplyLorentz(true);
    }
  }

  function updateIntegrateAlgorithm(value: string): void {
    if (value === "1D profile fitting") {
      addEntryToBasicOptions("method.line_profile_fitting", "True");
    }
    else {
      addEntryToBasicOptions("method.line_profile_fitting", "False");
    }
  }

  const cancelIntegrate = (event: MouseEvent<HTMLButtonElement>) => {

    event.preventDefault();
    props.serverWS.current?.send(JSON.stringify({
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
  }, [props.log]);

  useEffect(() => {
    addEntryToBasicOptions("input.incident_run", props.vanadiumRun);
  }, [props.vanadiumRun])

  useEffect(() => {
    addEntryToBasicOptions("input.empty_run", props.emptyRun);
  }, [props.emptyRun])
  
  function getVanadiumFilePath() {
        props.serverWS.current?.send(JSON.stringify({
          "channel": "server",
          "command": "browse_file",
          "update_param" : "vanadium_run"
        }));
  }

  function getEmptyFilePath() {
        props.serverWS.current?.send(JSON.stringify({
          "channel": "server",
          "command": "browse_file",
          "update_param" : "empty_run"
        }));
  }

  function isNumber(n: string): boolean {
    const singleNumberPattern = /^\d*\.?\d*$/;
    return (singleNumberPattern.test(n) && n !== ".");
  }

  function updateParam(event: any, name: string, placeholder: string): void {

    var cleanedInput = event.target.value.replace(" ", "");

    switch (name) {
      case "vanadium_radius":
        props.setVanadiumRadius(cleanedInput)
        if (cleanedInput === "") {
          addEntryToBasicOptions("incident_spectrum.sample_radius", placeholder);
        }
        else {
          addEntryToBasicOptions("incident_spectrum.sample_radius", cleanedInput);
        }
        setVanadiumRadiusValid(isNumber(cleanedInput) || cleanedInput === "");
        break;
      case "vanadium_density":
        props.setVanadiumDensity(cleanedInput)
        if (cleanedInput === "") {
          addEntryToBasicOptions("incident_spectrum.sample_number_density", placeholder);
        }
        else {
          addEntryToBasicOptions("incident_spectrum.sample_number_density", cleanedInput);
        }
        setVanadiumDensityValid(isNumber(cleanedInput) || cleanedInput === "");
        break;
      case "vanadium_scattering_x_section":
        props.setVanadiumScatteringXSection(cleanedInput)
        if (cleanedInput === "") {
          addEntryToBasicOptions("incident_spectrum.scattering_x_section", placeholder);
        }
        else {
          addEntryToBasicOptions("incident_spectrum.scattering_x_section", cleanedInput);
        }
        setVanadiumScatteringXSectionValid(isNumber(cleanedInput) || cleanedInput === "");
        break;
      case "vanadium_absorption_x_section":
        props.setVanadiumAbsorptionXSection(cleanedInput)
        if (cleanedInput === "") {
          addEntryToBasicOptions("incident_spectrum.absorption_x_section", placeholder);
        }
        else {
          addEntryToBasicOptions("incident_spectrum.absorption_x_section", cleanedInput);
        }
        setVanadiumAbsorptionXSectionValid(isNumber(cleanedInput) || cleanedInput === "");
        break;
      case "sample_radius":
        props.setSampleRadius(cleanedInput)
        if (cleanedInput === "") {
          addEntryToBasicOptions("target_spectrum.sample_radius", placeholder);
        }
        else {
          addEntryToBasicOptions("target_spectrum.sample_radius", cleanedInput);
        }
        setSampleRadiusValid(isNumber(cleanedInput) || cleanedInput === "");
        break;
      case "sample_density":
        props.setSampleDensity(cleanedInput)
        if (cleanedInput === "") {
          addEntryToBasicOptions("target_spectrum.sample_number_density", placeholder);
        }
        else {
          addEntryToBasicOptions("target_spectrum.sample_number_density", cleanedInput);
        }
        setSampleDensityValid(isNumber(cleanedInput) || cleanedInput === "");
        break;
      case "sample_scattering_x_section":
        props.setSampleScatteringXSection(cleanedInput)
        if (cleanedInput === "") {
          addEntryToBasicOptions("target_spectrum.scattering_x_section", placeholder);
        }
        else {
          addEntryToBasicOptions("target_spectrum.scattering_x_section", cleanedInput);
        }
        setSampleScatteringXSectionValid(isNumber(cleanedInput) || cleanedInput === "");
        break;
      case "sample_absorption_x_section":
        props.setSampleAbsorptionXSection(cleanedInput)
        if (cleanedInput === "") {
          addEntryToBasicOptions("target_spectrum.absorption_x_section", placeholder);
        }
        else {
          addEntryToBasicOptions("target_spectrum.absorption_x_section", cleanedInput);
        }
        setSampleAbsorptionXSectionValid(isNumber(cleanedInput) || cleanedInput === "");
        break;

    }
  }

  function saveHKLFile(){
        props.serverWS.current?.send(JSON.stringify({
          "channel": "server",
          "command": "save_hkl_file"
        }));
  }

  return (
    <Card className="w-full md:w-full h-[84vh]">
      <CardHeader>
        <div className="grid grid-cols-6 gap-0">
          <div className="col-start-1 col-end-2 ...">
            {!props.loading ? (
              <Button onClick={integrate}><FontAwesomeIcon icon={faPlay} style={{ marginRight: '5px', marginTop: "0px" }} />Run </Button>
            ) : (
              <Button onClick={cancelIntegrate}><FontAwesomeIcon icon={faStop} style={{ marginRight: '5px', marginTop: "0px" }} />Stop </Button>
            )
            }
          </div>
          <div className="col-start-2 col-span-2 ...">
            <Popover>
              <PopoverTrigger asChild>
                <Button >Apply Corrections</Button>
              </PopoverTrigger>
              <PopoverContent className="w-150">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Corrections</h4>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="lorentz" checked={props.applyLorentz} onCheckedChange={updateLorentzCorrection} />
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Lorentz
                      </label>
                      <Checkbox id="incident" checked={showIncidentCorrections} onCheckedChange={updateIncidentCorrections} />
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Incident Spectrum
                      </label>
                      <Checkbox id="spherical_absorption" checked={showAbsorptionCorrections} onCheckedChange={updateAbsorptionCorrections} />
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Spherical Absorption
                      </label>
                    </div>
                    <div hidden={!showAbsorptionCorrections}>
                      <p className="text-sm text-muted-foreground">
                        Parameters for applying a spherical absoption correction
                      </p>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="width">Sample Number Density</Label>
                          <Input
                            id="width"
                            value={props.sampleDensity}
                            onChange={(event) => updateParam(event, "sample_density", defaultSampleDensity)}
                            style={{ borderColor: sampleDensityValid? "" : "red" }}
                            className="col-span-2 h-8"
                          />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="maxWidth">Sample Radius (mm)</Label>
                          <Input
                            id="maxWidth"
                            onChange={(event) => updateParam(event, "sample_radius", defaultSampleRadius)}
                            style={{ borderColor: sampleRadiusValid? "" : "red" }}
                            value={props.sampleRadius}
                            className="col-span-2 h-8"
                          />
                        </div>                <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="maxHeight">Absorption XSection</Label>
                          <Input
                            onChange={(event) => updateParam(event, "sample_absorption_x_section", defaultSampleAbsorptionXSection)}
                            style={{ borderColor: sampleAbsorptionXSectionValid? "" : "red" }}
                            id="maxHeight"
                            value={props.sampleAbsorptionXSection}
                            className="col-span-2 h-8"
                          />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="height">Scattering XSection</Label>
                          <Input
                            id="height"
                            onChange={(event) => updateParam(event, "sample_scattering_x_section", defaultSampleScatteringXSection)}
                            style={{ borderColor: sampleScatteringXSectionValid? "" : "red" }}
                            value={props.sampleScatteringXSection}
                            className="col-span-2 h-8"
                          />
                        </div>
                      </div>
                    </div>
                    <div hidden={!showIncidentCorrections}>
                      <p className="text-sm text-muted-foreground">
                        Parameters for correcting the incident spectrum
                      </p>
                      <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="vanadiumRun">Vanadium Run</Label>
                        <Button id="vanadiumRun" variant={"outline"} onClick={getVanadiumFilePath}><FontAwesomeIcon icon={faFileImage} style={{ marginRight: '5px', marginTop: "0px" }} />{props.vanadiumRun !== "" ? getReducedFilename(props.vanadiumRun, 12) : "Browse"} </Button>
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="emptyRun">Empty Run</Label>
                        <Button id="emptyRun" variant={"outline"} onClick={getEmptyFilePath}><FontAwesomeIcon icon={faFileImage} style={{ marginRight: '5px', marginTop: "0px" }} />{props.emptyRun !== "" ? getReducedFilename(props.emptyRun, 12) : "Browse"} </Button>
                      </div>
                      </div>
                    </div>
                    <div hidden={!(showAbsorptionCorrections && showIncidentCorrections)}>
                      <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="width">Vanadium Number Density</Label>
                        <Input
                          id="width"
                          value={props.vanadiumDensity}
                          onChange={(event) => updateParam(event, "vanadium_density", defaultVanadiumDensity)}
                          style={{ borderColor: vanadiumDensityValid? "" : "red" }}
                          className="col-span-2 h-8"
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="maxWidth">Vanadium Radius (mm)</Label>
                        <Input
                          id="maxWidth"
                          value={props.vanadiumRadius}
                          className="col-span-2 h-8"
                          onChange={(event) => updateParam(event, "vanadium_radius", defaultVanadiumRadius)}
                          style={{ borderColor: vanadiumRadiusValid? "" : "red" }}
                        />
                      </div>                <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="maxHeight">Vanadium Absorption XSection</Label>
                        <Input
                          id="maxHeight"
                          value={props.vanadiumAbsorptionXSection}
                          className="col-span-2 h-8"
                          onChange={(event) => updateParam(event, "vanadium_absorption_x_section", defaultVanadiumAbsorptionXSection)}
                          style={{ borderColor: vanadiumAbsorptionXSectionValid? "" : "red" }}
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="height">Vanadium Scattering XSection</Label>
                        <Input
                          id="height"
                          value={props.vanadiumScatteringXSection}
                          onChange={(event) => updateParam(event, "vanadium_absorption_x_section", defaultVanadiumScatteringXSection)}
                          style={{ borderColor: vanadiumScatteringXSectionValid? "" : "red" }}
                          className="col-span-2 h-8"
                        />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="col-start-5 col-span-2 ...">
            <Button onClick={saveHKLFile} disabled={!props.saveHKLEnabled} style={{ marginLeft: "70px" }}><FontAwesomeIcon icon={faSave} style={{ marginRight: '5px' }}></FontAwesomeIcon> Save HKL</Button>
          </div>
          <div className="col-end-8 col-span-1 ...">
            <a href="https://dials.github.io/documentation/programs/dials_integrate.html" target="_blank">
              <Button variant={"secondary"}><FontAwesomeIcon icon={faFileText} style={{ marginRight: '5px', marginTop: "0px" }} />Documentation </Button>
            </a>

          </div>
        </div>
        <div>
          <Label>Integration Algorithm</Label>
          <Select onValueChange={(value) => updateIntegrateAlgorithm(value)}>
            <SelectTrigger >
              <SelectValue placeholder="summation" defaultValue={"summation"} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="summation">summation</SelectItem>
                <SelectItem value="1D profile fitting">1D profile fitting</SelectItem>
                <SelectItem disabled={true} value="XDS profile fitting">XDS profile fitting</SelectItem>
                <SelectItem disabled={true} value="3D profile fitting">3D profile fitting</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1">
          <Label>Advanced Options</Label>
          <Input placeholder="See Documentation for full list of options" />
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <Card className={props.loading ? "h-[56.5vh] overflow-scroll border border-white" : props.ranSuccessfully ? "h-[56.5vh] overflow-scroll" : "h-[56.5vh] overflow-scroll border border-red-500"} ref={cardContentRef}>
          <CardHeader>
            <CardDescription>
              DIALS Output
            </CardDescription>
          </CardHeader>
          <CardContent>
            {props.loading ?
              <div style={{ opacity: 0.5 }} dangerouslySetInnerHTML={{ __html: props.log }} />
              :
              <div dangerouslySetInnerHTML={{ __html: props.log }} />
            }

          </CardContent>
        </Card>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  )
}
