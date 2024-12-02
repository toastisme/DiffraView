

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
import React, { MouseEvent, useState, useRef, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSave, faPlay, faStop, faFileText} from '@fortawesome/free-solid-svg-icons';
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
  applyIncidentSpectrum: boolean,
  setApplyIncidentSpectrum: React.Dispatch<React.SetStateAction<boolean>>,
  applySphericalAbsorption: boolean,
  setApplySphericalAbsorption: React.Dispatch<React.SetStateAction<boolean>>,
  tofBBoxPadding: string,
  setTofBBoxPadding: React.Dispatch<React.SetStateAction<string>>,
  xYBBoxPadding: string,
  setXYBBoxPadding: React.Dispatch<React.SetStateAction<string>>,
  minPartiality: string,
  setMinPartiality: React.Dispatch<React.SetStateAction<string>>,
  minISigma: string,
  setMinISigma: React.Dispatch<React.SetStateAction<string>>,
  caclulateLineProfile: boolean,
  setCalculateLineProfile : React.Dispatch<React.SetStateAction<boolean>>,
  serverWS: React.MutableRefObject<WebSocket | null>
}) {


  const [basicOptions, setBasicOptions] = useState<Record<string, string>>({});
  const [advancedOptions, _] = useState<string>("");

  const [tofBBoxPaddingValid, setTofBBoxPaddingValid] = useState<boolean>(true);
  const [xYBBoxPaddingValid, setXYBBoxPaddingValid] = useState<boolean>(true);
  const [minPartialityValid, setMinPartialityValid] = useState<boolean>(true);
  const [minISigmaValid, setMinISigmaValid] = useState<boolean>(true);

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
  const defaultTofBBox = "10";

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

  useEffect(() => {
    setTofBBoxPaddingValid(isInteger(props.tofBBoxPadding) || props.tofBBoxPadding === "");
    setXYBBoxPaddingValid(isInteger(props.xYBBoxPadding) || props.xYBBoxPadding === "");
    setMinPartialityValid(isNumber(props.minPartiality) || props.minPartiality === "");
    setMinISigmaValid(isNumber(props.minISigma) || props.minISigma ===  "");
  }, [])


  function getAlgorithmOptions() {

    interface AlgoOptions {
      [key: string]: string | undefined | boolean; 
    }

    const algoOptions: AlgoOptions = {};

    algoOptions["corrections.lorentz"] = props.applyLorentz;

    if (props.applyIncidentSpectrum) {
      algoOptions["input.incident_run"] = props.vanadiumRun;
      algoOptions["input.empty_run"] = props.emptyRun;
      algoOptions["method.line_profile_fitting"] = props.caclulateLineProfile;
      if (props.applySphericalAbsorption){
        algoOptions["incident_spectrum.sample_radius"]= props.vanadiumRadius;
        algoOptions["incident_spectrum.sample_number_density"]= props.vanadiumDensity;
        algoOptions["incident_spectrum.scattering_x_section"]= props.vanadiumScatteringXSection;
        algoOptions["incident_spectrum.absorption_x_section"]= props.vanadiumAbsorptionXSection;
      }
    }
    if (props.applySphericalAbsorption){
      algoOptions["target_spectrum.sample_radius"]= props.sampleRadius;
      algoOptions["target_spectrum.sample_number_density"]= props.sampleDensity;
      algoOptions["target_spectrum.scattering_x_section"]= props.sampleScatteringXSection;
      algoOptions["target_spectrum.absorption_x_section"]= props.sampleAbsorptionXSection;
    }
    return algoOptions;

  }

  function updateIncidentCorrections(state: string) {
    if(state==="unchecked"){
      addEntryToBasicOptions("input.incident_run", props.vanadiumRun);
      addEntryToBasicOptions("input.empty_run", props.emptyRun);
      addEntryToBasicOptions("incident_spectrum.sample_radius", props.vanadiumRadius);
      addEntryToBasicOptions("incident_spectrum.sample_number_density", props.vanadiumDensity);
      addEntryToBasicOptions("incident_spectrum.scattering_x_section", props.vanadiumScatteringXSection);
      addEntryToBasicOptions("incident_spectrum.absorption_x_section", props.vanadiumAbsorptionXSection);
    }
    else if(state==="checked"){
      addEntryToBasicOptions("input.incident_run", defaultIncidentRun);
      addEntryToBasicOptions("input.empty_run", defaultEmptyRun);
      addEntryToBasicOptions("incident_spectrum.sample_radius", defaultVanadiumRadius);
      addEntryToBasicOptions("incident_spectrum.sample_number_density", defaultVanadiumDensity);
      addEntryToBasicOptions("incident_spectrum.scattering_x_section", defaultVanadiumScatteringXSection);
      addEntryToBasicOptions("incident_spectrum.absorption_x_section", defaultVanadiumAbsorptionXSection);
    }
  }

  function updateAbsorptionCorrections(state: string) {
    if(state==="unchecked"){
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

  function updateLorentzCorrection(state: string) {
    if (state === "checked"){
      addEntryToBasicOptions("corrections.lorentz", "False")
    }
    else if (state === "unchecked"){
      addEntryToBasicOptions("corrections.lorentz", "True")
    }
  }

  function updateIntegrateAlgorithm(value: string): void {
    if (value === "1D profile fitting") {
      addEntryToBasicOptions("method.line_profile_fitting", "True");
      props.setCalculateLineProfile(true);
    }
    else {
      addEntryToBasicOptions("method.line_profile_fitting", "False");
      props.setCalculateLineProfile(false);
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
  
  function isInteger(n: string): boolean {
  const integerPattern = /^\d+$/; // Matches an optional negative sign followed by one or more digits
  return integerPattern.test(n);
  }

  function isNumber(n: string): boolean {
    const singleNumberPattern = /^\d*\.?\d*$/;
    return (singleNumberPattern.test(n) && n !== ".");
  }


  function updateParam(name: string, cleanedInput: string): void {

    switch (name) {
      case "vanadium_radius":
        if (cleanedInput === "") {
          addEntryToBasicOptions("incident_spectrum.sample_radius", defaultVanadiumRadius);
        }
        else {
          addEntryToBasicOptions("incident_spectrum.sample_radius", cleanedInput);
        }
        break;
      case "vanadium_density":
        if (cleanedInput === "") {
          addEntryToBasicOptions("incident_spectrum.sample_number_density", defaultVanadiumDensity);
        }
        else {
          addEntryToBasicOptions("incident_spectrum.sample_number_density", cleanedInput);
        }
        break;
      case "vanadium_scattering_x_section":
        if (cleanedInput === "") {
          addEntryToBasicOptions("incident_spectrum.scattering_x_section", defaultVanadiumScatteringXSection);
        }
        else {
          addEntryToBasicOptions("incident_spectrum.scattering_x_section", cleanedInput);
        }
        break;
      case "vanadium_absorption_x_section":
        if (cleanedInput === "") {
          addEntryToBasicOptions("incident_spectrum.absorption_x_section", defaultVanadiumAbsorptionXSection);
        }
        else {
          addEntryToBasicOptions("incident_spectrum.absorption_x_section", cleanedInput);
        }
        break;
      case "sample_radius":
        if (cleanedInput === "") {
          addEntryToBasicOptions("target_spectrum.sample_radius", defaultSampleRadius);
        }
        else {
          addEntryToBasicOptions("target_spectrum.sample_radius", cleanedInput);
        }
        break;
      case "sample_density":
        if (cleanedInput === "") {
          addEntryToBasicOptions("target_spectrum.sample_number_density", defaultSampleDensity);
        }
        else {
          addEntryToBasicOptions("target_spectrum.sample_number_density", cleanedInput);
        }
        break;
      case "sample_scattering_x_section":
        if (cleanedInput === "") {
          addEntryToBasicOptions("target_spectrum.scattering_x_section", defaultSampleScatteringXSection);
        }
        else {
          addEntryToBasicOptions("target_spectrum.scattering_x_section", cleanedInput);
        }
        break;
      case "sample_absorption_x_section":
        if (cleanedInput === "") {
          addEntryToBasicOptions("target_spectrum.absorption_x_section", defaultSampleAbsorptionXSection);
        }
        else {
          addEntryToBasicOptions("target_spectrum.absorption_x_section", cleanedInput);
        }
        break;

    }
  }

  function saveHKLFile(){
        props.serverWS.current?.send(JSON.stringify({
          "channel": "server",
          "command": "save_hkl_file",
          "min_partiality" : props.minPartiality,
          "min_i_sigma": props.minISigma
        }));
  }

  function updateParamTOFBBoxPadding(event: any) {
    var cleanedInput = event.target.value.replace(" ", "");

    if (cleanedInput === "") {
      addEntryToBasicOptions("bbox_tof_padding", defaultTofBBox);
    }
    else {
      addEntryToBasicOptions("bbox_tof_padding", cleanedInput);
    }

    setTofBBoxPaddingValid(isInteger(cleanedInput) || cleanedInput === "");
    props.setTofBBoxPadding(cleanedInput);

  }

  function updateParamXYBBoxPadding(event: any) {
    var cleanedInput = event.target.value.replace(" ", "");

    if (cleanedInput === "") {
      addEntryToBasicOptions("bbox_xy_padding", defaultTofBBox);
    }
    else {
      addEntryToBasicOptions("bbox_xy_padding", cleanedInput);
    }

    setXYBBoxPaddingValid(isInteger(cleanedInput) || cleanedInput === "");
    props.setXYBBoxPadding(cleanedInput);

  }

  function updateMinPartiality(event: any){
    var cleanedInput = event.target.value.replace(" ", "");

    setMinPartialityValid(isNumber(cleanedInput) || cleanedInput === "");
    props.setMinPartiality(cleanedInput);

  }

  function updateMinISigma(event: any){
    var cleanedInput = event.target.value.replace(" ", "");

    setMinISigmaValid(isNumber(cleanedInput) || cleanedInput === "");
    props.setMinISigma(cleanedInput);

  }

  return (
    <Card className="h-full flex flex-col">
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
            <CorrectionsPopover
            emptyRun={props.emptyRun}
            setEmptyRun={props.setEmptyRun}
            vanadiumRun={props.vanadiumRun}
            setVanadiumRun={props.setVanadiumRun}
            sampleDensity={props.sampleDensity}
            setSampleDensity={props.setSampleDensity}
            sampleRadius={props.sampleRadius}
            setSampleRadius={props.setSampleRadius}
            sampleAbsorptionXSection={props.sampleAbsorptionXSection}
            setSampleAbsorptionXSection={props.setSampleAbsorptionXSection}
            sampleScatteringXSection={props.sampleScatteringXSection}
            setSampleScatteringXSection={props.setSampleScatteringXSection}
            vanadiumDensity={props.vanadiumDensity}
            setVanadiumDensity={props.setVanadiumDensity}
            vanadiumRadius={props.vanadiumRadius}
            setVanadiumRadius={props.setVanadiumRadius}
            vanadiumAbsorptionXSection={props.vanadiumAbsorptionXSection}
            setVanadiumAbsorptionXSection={props.setVanadiumAbsorptionXSection}
            vanadiumScatteringXSection={props.vanadiumScatteringXSection}
            setVanadiumScatteringXSection={props.setVanadiumScatteringXSection}
            applyLorentz={props.applyLorentz}
            setApplyLorentz={props.setApplyLorentz}
            applyIncidentSpectrum={props.applyIncidentSpectrum}
            setApplyIncidentSpectrum={props.setApplyIncidentSpectrum}
            applySphericalAbsorption={props.applySphericalAbsorption}
            setApplySphericalAbsorption={props.setApplySphericalAbsorption}
            updateParamDerived={updateParam}
            updateLorentzCorrectionDerived={updateLorentzCorrection}
            updateIncidentCorrectionsDerived={updateIncidentCorrections}
            updateAbsorptionCorrectionsDerived={updateAbsorptionCorrections}
            serverWS={props.serverWS}
            ></CorrectionsPopover>
          </div>
          <div className="col-start-5 col-span-2 ...">
            <Popover>
              <PopoverTrigger asChild>
              <Button disabled={!props.saveHKLEnabled} style={{ marginLeft: "70px" }}><FontAwesomeIcon icon={faSave} style={{ marginRight: '5px' }}></FontAwesomeIcon> Export</Button>
            </PopoverTrigger>
            <PopoverContent className="w-150 h-300">
              <div className="flex flex-col gap-8 ">
                <div className="flex flex-col space-y-4">
                  <Label htmlFor="minPartiality">Min Partiality</Label>
                  <Input
                    id="minPartiality"
                    placeholder="0"
                    value={props.minPartiality}
                    onChange={(event) => updateMinPartiality(event)}
                    style={{ borderColor: minPartialityValid ? "" : "red" }}
                    className="h-8"
                  />
                </div>
                <div className="flex flex-col space-y-4">
                  <Label htmlFor="minISigma">Min I/σ</Label>
                  <Input
                    id="minISigma"
                    value={props.minISigma}
                    placeholder="0"
                    onChange={(event) => updateMinISigma(event)}
                    style={{ borderColor: minISigmaValid ? "" : "red" }}
                    className="h-8"
                  />
                </div>
                <Button
                  onClick={saveHKLFile}
                  disabled={!props.saveHKLEnabled}
                  className="self-end mt-4"
                >
                  <FontAwesomeIcon
                    icon={faSave}
                    style={{ marginRight: "5px" }}
                  />
                  Save HKL
                </Button>
              </div>
            </PopoverContent>
            </Popover>

          </div>
          <div className="col-end-8 col-span-1 ...">
            <a href="src/assets/documentation/_build/html/docs/integration.html" target="_blank">
              <Button variant={"secondary"}><FontAwesomeIcon icon={faFileText} style={{ marginRight: '5px', marginTop: "0px" }} />Documentation </Button>
            </a>

          </div>
        </div>
        <div className="flex items-left gap-40">
          <div className="flex flex-col flex-[5] items-left">
              <div>
            <Label className="y-10">Integration Algorithm</Label>
              </div>
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
            <div className="flex gap-5">
            <div className="flex flex-col flex-[6] text-left">
              <div>
              <Label> XY Padding (pixels) </Label>
              </div>
              <Input 
              style={{ borderColor: xYBBoxPaddingValid? "" : "red" }}
              placeholder={"5"} value={props.xYBBoxPadding} onChange={(event) => updateParamXYBBoxPadding(event)} />
          </div>
            <div className="flex flex-col flex-[6] text-left">
              <div>
              <Label> ToF Padding (frames) </Label>
              </div>
              <Input 
              style={{ borderColor: tofBBoxPaddingValid? "" : "red" }}
              placeholder={"30"} value={props.tofBBoxPadding} onChange={(event) => updateParamTOFBBoxPadding(event)} />
          </div>


            </div>
        </div>
        <div className="space-y-1">
          <Label>Advanced Options</Label>
          <Input placeholder="See Documentation for full list of options" />
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col overflow-y-scroll">
        <Card className={props.loading ? "flex-1 flex flex-col overflow-y-scroll border border-white" : props.ranSuccessfully ? "flex-1 flex flex-col overflow-y-scroll" : "flex-1 flex flex-col overflow-y-scroll border border-red-500"} ref={cardContentRef}>
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
