import {useState} from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileImage } from '@fortawesome/free-solid-svg-icons';

export function CorrectionsPopover(props:{
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
  setApplyIncidentSpectrum : React.Dispatch<React.SetStateAction<boolean>>,
  applySphericalAbsorption: boolean,
  setApplySphericalAbsorption : React.Dispatch<React.SetStateAction<boolean>>,
  updateParamDerived: (name: string, value: string) => void,
  updateLorentzCorrectionDerived: (state: string) => void,
  updateIncidentCorrectionsDerived: (state: string) => void,
  updateAbsorptionCorrectionsDerived: (state: string) => void,
  serverWS: React.MutableRefObject<WebSocket | null>
}){

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

  function isNumber(n: string): boolean {
    const singleNumberPattern = /^\d*\.?\d*$/;
    return (singleNumberPattern.test(n) && n !== ".");
  }

  function updateIncidentCorrections() {
    const incidentCheckbox = window.document.getElementById("incident");
    const state = incidentCheckbox?.getAttribute("data-state");
    if(state==="unchecked"){
	  props.setApplyIncidentSpectrum(true);
    }
    else if(state==="checked"){
	  props.setApplyIncidentSpectrum(false);
    }
	if (state !== undefined && state !== null){
		props.updateIncidentCorrectionsDerived(state);
	}
  }

  function updateAbsorptionCorrections() {
    const sphericalAbsorptionCheckbox = window.document.getElementById("spherical_absorption");
    const state = sphericalAbsorptionCheckbox?.getAttribute("data-state");
    if(state==="unchecked"){
	  props.setApplySphericalAbsorption(true);
    }
    else if(state==="checked"){
	  props.setApplySphericalAbsorption(false);
    }
	if (state !== undefined && state !== null){
		props.updateAbsorptionCorrectionsDerived(state);
	}
  }
  function updateLorentzCorrection() {
    const lorentzCheckbox = window.document.getElementById("lorentz");
    const state = lorentzCheckbox?.getAttribute("data-state");
    if (state === "checked"){
      props.setApplyLorentz(false);
    }
    else if (state === "unchecked"){
      props.setApplyLorentz(true);
    }
	if (state !== undefined && state !== null){
		props.updateLorentzCorrectionDerived(state);
	}
  }

  function updateParam(event: any, name: string, placeholder: string): void {

    var cleanedInput = event.target.value.replace(" ", "");

    switch (name) {
      case "vanadium_radius":
        props.setVanadiumRadius(cleanedInput)
		props.updateParamDerived("vanadium_radius", cleanedInput);
        setVanadiumRadiusValid(isNumber(cleanedInput) || cleanedInput === "");
        break;
      case "vanadium_density":
        props.setVanadiumDensity(cleanedInput)
		props.updateParamDerived("vanadium_density", cleanedInput);
        setVanadiumDensityValid(isNumber(cleanedInput) || cleanedInput === "");
        break;
      case "vanadium_scattering_x_section":
        props.setVanadiumScatteringXSection(cleanedInput)
		props.updateParamDerived("vanadium_scattering_x_section", cleanedInput);
        setVanadiumScatteringXSectionValid(isNumber(cleanedInput) || cleanedInput === "");
        break;
      case "vanadium_absorption_x_section":
        props.setVanadiumAbsorptionXSection(cleanedInput)
		props.updateParamDerived("vanadium_absorption_x_section", cleanedInput);
        setVanadiumAbsorptionXSectionValid(isNumber(cleanedInput) || cleanedInput === "");
        break;
      case "sample_radius":
        props.setSampleRadius(cleanedInput)
		props.updateParamDerived("sample_radius", cleanedInput);
        setSampleRadiusValid(isNumber(cleanedInput) || cleanedInput === "");
        break;
      case "sample_density":
        props.setSampleDensity(cleanedInput)
		props.updateParamDerived("sample_density", cleanedInput);
        setSampleDensityValid(isNumber(cleanedInput) || cleanedInput === "");
        break;
      case "sample_scattering_x_section":
        props.setSampleScatteringXSection(cleanedInput)
		props.updateParamDerived("sample_scattering_x_section", cleanedInput);
        setSampleScatteringXSectionValid(isNumber(cleanedInput) || cleanedInput === "");
        break;
      case "sample_absorption_x_section":
        props.setSampleAbsorptionXSection(cleanedInput)
		props.updateParamDerived("sample_absorption_x_section", cleanedInput);
        setSampleAbsorptionXSectionValid(isNumber(cleanedInput) || cleanedInput === "");
        break;

    }
  }

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

  return(
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
				<Checkbox id="incident" checked={props.applyIncidentSpectrum} onCheckedChange={updateIncidentCorrections} />
				<label
				className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
				Incident Spectrum
				</label>
				<Checkbox id="spherical_absorption" checked={props.applySphericalAbsorption} onCheckedChange={updateAbsorptionCorrections} />
				<label
				className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
				Spherical Absorption
				</label>
			</div>
			<div hidden={!props.applySphericalAbsorption}>
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
			<div hidden={!props.applyIncidentSpectrum}>
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
			<div hidden={!(props.applySphericalAbsorption && props.applyIncidentSpectrum)}>
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
  )
}