

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
import { useRootContext } from "@/contexts/RootContext"
import { useIntegrateContext } from "@/contexts/IntegrateContext"
import { Status } from "@/types"

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
		calculateLineProfile,
		setCalculateLineProfile,
		dmin,
		setDmin,
		integrateType,
		setIntegrateType
  } = useIntegrateContext();

  const [basicOptions, setBasicOptions] = useState<Record<string, string>>({});
  const [advancedOptions, _] = useState<string>("");

  const [tOFBBoxPaddingValid, setTOFBBoxPaddingValid] = useState<boolean>(true);
  const [xYBBoxPaddingValid, setXYBBoxPaddingValid] = useState<boolean>(true);
  const [minPartialityValid, setMinPartialityValid] = useState<boolean>(true);
  const [minISigmaValid, setMinISigmaValid] = useState<boolean>(true);
  const [dminValid, setDminValid] = useState<boolean>(true);

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
  const defaultDmin = "2.0";

  const integrate = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setStatus(Status.Loading);
    setLog("");
    const algorithmOptions = getAlgorithmOptions();
    serverWS.current?.send(JSON.stringify({
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
    setTOFBBoxPaddingValid(isInteger(tOFBBoxPadding) || tOFBBoxPadding === "");
    setXYBBoxPaddingValid(isInteger(xYBBoxPadding) || xYBBoxPadding === "");
    setMinPartialityValid(isNumber(minPartiality) || minPartiality === "");
    setMinISigmaValid(isNumber(minISigma) || minISigma ===  "");
    setDminValid(isNumber(dmin) || dmin === "")
  }, [])


  function getAlgorithmOptions() {

    interface AlgoOptions {
      [key: string]: string | undefined | boolean; 
    }

    const algoOptions: AlgoOptions = {};

    algoOptions["corrections.lorentz"] = applyLorentz;
    algoOptions["method.line_profile_fitting"] = calculateLineProfile;
    algoOptions["integration_type"] = integrateType;
    if (integrateType === "calculated"){
      algoOptions["calculated.dmin"] = dmin;
    }

    if (applyIncidentSpectrum) {
      algoOptions["input.incident_run"] = vanadiumRun;
      algoOptions["input.empty_run"] = emptyRun;
      if (applySphericalAbsorption){
        algoOptions["incident_spectrum.sample_radius"]= vanadiumRadius;
        algoOptions["incident_spectrum.sample_number_density"]= vanadiumDensity;
        algoOptions["incident_spectrum.scattering_x_section"]= vanadiumScatteringXSection;
        algoOptions["incident_spectrum.absorption_x_section"]= vanadiumAbsorptionXSection;
      }
    }
    if (applySphericalAbsorption){
      algoOptions["target_spectrum.sample_radius"]= sampleRadius;
      algoOptions["target_spectrum.sample_number_density"]= sampleDensity;
      algoOptions["target_spectrum.scattering_x_section"]= sampleScatteringXSection;
      algoOptions["target_spectrum.absorption_x_section"]= sampleAbsorptionXSection;
    }
    return algoOptions;

  }

  function updateIncidentCorrections(state: string) {
    if(state==="unchecked"){
      addEntryToBasicOptions("input.incident_run", vanadiumRun);
      addEntryToBasicOptions("input.empty_run", emptyRun);
      addEntryToBasicOptions("incident_spectrum.sample_radius", vanadiumRadius);
      addEntryToBasicOptions("incident_spectrum.sample_number_density", vanadiumDensity);
      addEntryToBasicOptions("incident_spectrum.scattering_x_section", vanadiumScatteringXSection);
      addEntryToBasicOptions("incident_spectrum.absorption_x_section", vanadiumAbsorptionXSection);
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
      addEntryToBasicOptions("target_spectrum.sample_radius", sampleRadius);
      addEntryToBasicOptions("target_spectrum.sample_number_density", sampleDensity);
      addEntryToBasicOptions("target_spectrum.scattering_x_section", sampleScatteringXSection);
      addEntryToBasicOptions("target_spectrum.absorption_x_section", sampleAbsorptionXSection);
      addEntryToBasicOptions("incident_spectrum.sample_radius", vanadiumRadius);
      addEntryToBasicOptions("incident_spectrum.sample_number_density", vanadiumDensity);
      addEntryToBasicOptions("incident_spectrum.scattering_x_section", vanadiumScatteringXSection);
      addEntryToBasicOptions("incident_spectrum.absorption_x_section", vanadiumAbsorptionXSection);
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
      setCalculateLineProfile(true);
    }
    else {
      addEntryToBasicOptions("method.line_profile_fitting", "False");
      setCalculateLineProfile(false);
    }
  }

  function updateIntegrateType(value: string): void {
    addEntryToBasicOptions("integration_type", value);
    setIntegrateType(value);
  }

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

  useEffect(() => {
    addEntryToBasicOptions("input.incident_run", vanadiumRun);
  }, [vanadiumRun])

  useEffect(() => {
    addEntryToBasicOptions("input.empty_run", emptyRun);
  }, [emptyRun])
  
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
        serverWS.current?.send(JSON.stringify({
          "channel": "server",
          "command": "save_hkl_file",
          "min_partiality" : minPartiality,
          "min_i_sigma": minISigma
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

    setTOFBBoxPaddingValid(isInteger(cleanedInput) || cleanedInput === "");
    setTOFBBoxPadding(cleanedInput);

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
    setXYBBoxPadding(cleanedInput);

  }

  function updateParamDmin(event: any) {
    var cleanedInput = event.target.value.replace(" ", "");

    if (cleanedInput === "") {
      addEntryToBasicOptions("calculated.dmin", defaultDmin);
    }
    else {
      addEntryToBasicOptions("calculated.dmin", cleanedInput);
    }

    setDminValid(isNumber(cleanedInput) || cleanedInput === "");
    setDmin(cleanedInput);

  }

  function updateMinPartiality(event: any){
    var cleanedInput = event.target.value.replace(" ", "");

    setMinPartialityValid(isNumber(cleanedInput) || cleanedInput === "");
    setMinPartiality(cleanedInput);

  }

  function updateMinISigma(event: any){
    var cleanedInput = event.target.value.replace(" ", "");

    setMinISigmaValid(isNumber(cleanedInput) || cleanedInput === "");
    setMinISigma(cleanedInput);

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
            )
            }
          </div>
          <div className="col-start-2 col-span-2 ...">
            <CorrectionsPopover
            updateParamDerived={updateParam}
            updateLorentzCorrectionDerived={updateLorentzCorrection}
            updateIncidentCorrectionsDerived={updateIncidentCorrections}
            updateAbsorptionCorrectionsDerived={updateAbsorptionCorrections}
            ></CorrectionsPopover>
          </div>
          <div className="col-start-5 col-span-2 ...">
            <Popover>
              <PopoverTrigger asChild>
              <Button disabled={!exportEnabled} style={{ marginLeft: "70px" }}><FontAwesomeIcon icon={faSave} style={{ marginRight: '5px' }}></FontAwesomeIcon> Export</Button>
            </PopoverTrigger>
            <PopoverContent className="w-150 h-300">
              <div className="flex flex-col gap-8 ">
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
                  onClick={saveHKLFile}
                  disabled={!exportEnabled}
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
        <div className="flex items-left gap-5">
          <div className="flex flex-col  items-left">
              <div>
            <Label className="y-10">Algorithm</Label>
              </div>
              <div className="w-48">
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
            </div>
            <div className="flex flex-col text-left">
              <div>
              <Label> XY Padding (pixels) </Label>
              </div>
              <div className="w-36">
              <Input 
              style={{ borderColor: xYBBoxPaddingValid? "" : "red" }}
              placeholder={"5"} value={xYBBoxPadding} onChange={(event) => updateParamXYBBoxPadding(event)} />
              </div>
          </div>
            <div className="flex flex-col text-left">
              <div>
              <Label> ToF Padding (frames) </Label>
              </div>
              <div className="w-36">
              <Input 
              style={{ borderColor: tOFBBoxPaddingValid? "" : "red" }}
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
              <Select onValueChange={(value) => updateIntegrateType(value)}>
                <SelectTrigger >
                  <SelectValue placeholder="observed only" defaultValue={"observed"} />
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
            <div className="flex flex-col flex-[2] text-left">
              <div>
              <Label style={{color: integrateType === "calculated" ? "" : "#6a7688"}}> dmin </Label>
              </div>
              <div className="w-24">
              <Input 
              style={{ borderColor: dminValid? "" : "red" }}
              placeholder={defaultDmin} disabled={integrateType !== "calculated"} value={dmin} onChange={(event) => updateParamDmin(event)} />
              </div>
          </div>

          </div>
        <div className="space-y-1">
          <Label>Advanced Options</Label>
          <Input placeholder="See Documentation for full list of options" />
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
