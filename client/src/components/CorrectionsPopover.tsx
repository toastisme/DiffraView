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
import { useRootContext } from "@/contexts/RootContext"
import { useIntegrateContext } from "@/contexts/IntegrateContext"
import { isNumber } from "@/utils"

export function CorrectionsPopover() {

  const {
    serverWS
  } = useRootContext();

  const {
		emptyRun,
		vanadiumRun,
		sampleDensity,
		setSampleDensity,
		sampleRadius,
		setSampleRadius,
		sampleAbsorptionXSection,
		setSampleAbsorptionXSection,
		sampleScatteringXSection,
		setSampleScatteringXSection,
		vanadiumDensity,
		setVanadiumDensity,
		vanadiumRadius,
		setVanadiumRadius,
		vanadiumAbsorptionXSection,
		setVanadiumAbsorptionXSection,
		vanadiumScatteringXSection,
		setVanadiumScatteringXSection,
		applyLorentz,
		setApplyLorentz,
		applyIncidentSpectrum,
		setApplyIncidentSpectrum,
		applySphericalAbsorption,
		setApplySphericalAbsorption,
  } = useIntegrateContext();


  const [vanadiumRadiusValid, setVanadiumRadiusValid] = useState<boolean>(true);
  const [vanadiumDensityValid, setVanadiumDensityValid] = useState<boolean>(true);
  const [vanadiumScatteringXSectionValid, setVanadiumScatteringXSectionValid] = useState<boolean>(true);
  const [vanadiumAbsorptionXSectionValid, setVanadiumAbsorptionXSectionValid] = useState<boolean>(true);
  const [sampleRadiusValid, setSampleRadiusValid] = useState<boolean>(true);
  const [sampleDensityValid, setSampleDensityValid] = useState<boolean>(true);
  const [sampleScatteringXSectionValid, setSampleScatteringXSectionValid] = useState<boolean>(true);
  const [sampleAbsorptionXSectionValid, setSampleAbsorptionXSectionValid] = useState<boolean>(true);


  function updateIncidentCorrections() {
    const incidentCheckbox = window.document.getElementById("incident");
    const state = incidentCheckbox?.getAttribute("data-state");
    if (state === "unchecked") {
      setApplyIncidentSpectrum(true);
    } else if (state === "checked") {
      setApplyIncidentSpectrum(false);
    }
  }

  function updateAbsorptionCorrections() {
    const sphericalAbsorptionCheckbox = window.document.getElementById("spherical_absorption");
    const state = sphericalAbsorptionCheckbox?.getAttribute("data-state");
    if (state === "unchecked") {
      setApplySphericalAbsorption(true);
    } else if (state === "checked") {
      setApplySphericalAbsorption(false);
    }
  }

  function updateLorentzCorrection() {
    const lorentzCheckbox = window.document.getElementById("lorentz");
    const state = lorentzCheckbox?.getAttribute("data-state");
    if (state === "checked") {
      setApplyLorentz(false);
    } else if (state === "unchecked") {
      setApplyLorentz(true);
    }
  }

  function updateParam(event: any, name: string): void {
    const cleanedInput = event.target.value.replace(" ", "");

    switch (name) {
      case "vanadium_radius":
        setVanadiumRadius(cleanedInput);
        setVanadiumRadiusValid(isNumber(cleanedInput) || cleanedInput === "");
        break;
      case "vanadium_density":
        setVanadiumDensity(cleanedInput);
        setVanadiumDensityValid(isNumber(cleanedInput) || cleanedInput === "");
        break;
      case "vanadium_scattering_x_section":
        setVanadiumScatteringXSection(cleanedInput);
        setVanadiumScatteringXSectionValid(isNumber(cleanedInput) || cleanedInput === "");
        break;
      case "vanadium_absorption_x_section":
        setVanadiumAbsorptionXSection(cleanedInput);
        setVanadiumAbsorptionXSectionValid(isNumber(cleanedInput) || cleanedInput === "");
        break;
      case "sample_radius":
        setSampleRadius(cleanedInput);
        setSampleRadiusValid(isNumber(cleanedInput) || cleanedInput === "");
        break;
      case "sample_density":
        setSampleDensity(cleanedInput);
        setSampleDensityValid(isNumber(cleanedInput) || cleanedInput === "");
        break;
      case "sample_scattering_x_section":
        setSampleScatteringXSection(cleanedInput);
        setSampleScatteringXSectionValid(isNumber(cleanedInput) || cleanedInput === "");
        break;
      case "sample_absorption_x_section":
        setSampleAbsorptionXSection(cleanedInput);
        setSampleAbsorptionXSectionValid(isNumber(cleanedInput) || cleanedInput === "");
        break;
    }
  }

  function getVanadiumFilePath() {
        serverWS.current?.send(JSON.stringify({
          "channel": "server",
          "command": "browse_file",
          "update_param" : "vanadiumRun"
        }));
  }

  function getEmptyFilePath() {
        serverWS.current?.send(JSON.stringify({
          "channel": "server",
          "command": "browse_file",
          "update_param" : "emptyRun"
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
				<Checkbox id="lorentz" checked={applyLorentz} onCheckedChange={updateLorentzCorrection} />
				<label
				className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
				Lorentz
				</label>
				<Checkbox id="incident" checked={applyIncidentSpectrum} onCheckedChange={updateIncidentCorrections} />
				<label
				className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
				Incident Spectrum
				</label>
				<Checkbox id="spherical_absorption" checked={applySphericalAbsorption} onCheckedChange={updateAbsorptionCorrections} />
				<label
				className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
				Spherical Absorption
				</label>
			</div>
			<div hidden={!applySphericalAbsorption}>
				<p className="text-sm text-muted-foreground">
				Parameters for applying a spherical absoption correction
				</p>
				<div className="grid gap-2">
				<div className="grid grid-cols-3 items-center gap-4">
					<Label htmlFor="width">Sample Number Density</Label>
					<Input
					id="width"
					value={sampleDensity}
					onChange={(event) => updateParam(event, "sample_density")}
					style={{ borderColor: sampleDensityValid? "" : "red" }}
					className="col-span-2 h-8"
					/>
				</div>
				<div className="grid grid-cols-3 items-center gap-4">
					<Label htmlFor="maxWidth">Sample Radius (mm)</Label>
					<Input
					id="maxWidth"
					onChange={(event) => updateParam(event, "sample_radius")}
					style={{ borderColor: sampleRadiusValid? "" : "red" }}
					value={sampleRadius}
					className="col-span-2 h-8"
					/>
				</div>                <div className="grid grid-cols-3 items-center gap-4">
					<Label htmlFor="maxHeight">Absorption XSection</Label>
					<Input
					onChange={(event) => updateParam(event, "sample_absorption_x_section")}
					style={{ borderColor: sampleAbsorptionXSectionValid? "" : "red" }}
					id="maxHeight"
					value={sampleAbsorptionXSection}
					className="col-span-2 h-8"
					/>
				</div>
				<div className="grid grid-cols-3 items-center gap-4">
					<Label htmlFor="height">Scattering XSection</Label>
					<Input
					id="height"
					onChange={(event) => updateParam(event, "sample_scattering_x_section")}
					style={{ borderColor: sampleScatteringXSectionValid? "" : "red" }}
					value={sampleScatteringXSection}
					className="col-span-2 h-8"
					/>
				</div>
				</div>
			</div>
			<div hidden={!applyIncidentSpectrum}>
				<p className="text-sm text-muted-foreground">
				Parameters for correcting the incident spectrum
				</p>
				<div className="grid gap-2">
				<div className="grid grid-cols-3 items-center gap-4">
				<Label htmlFor="vanadiumRun">Vanadium Run</Label>
				<Button id="vanadiumRun" variant={"outline"} onClick={getVanadiumFilePath}><FontAwesomeIcon icon={faFileImage} style={{ marginRight: '5px', marginTop: "0px" }} />{vanadiumRun !== "" ? getReducedFilename(vanadiumRun, 12) : "Browse"} </Button>
				</div>
				<div className="grid grid-cols-3 items-center gap-4">
				<Label htmlFor="emptyRun">Empty Run</Label>
				<Button id="emptyRun" variant={"outline"} onClick={getEmptyFilePath}><FontAwesomeIcon icon={faFileImage} style={{ marginRight: '5px', marginTop: "0px" }} />{emptyRun !== "" ? getReducedFilename(emptyRun, 12) : "Browse"} </Button>
				</div>
				</div>
			</div>
			<div hidden={!(applySphericalAbsorption && applyIncidentSpectrum)}>
				<div className="grid gap-2">
				<div className="grid grid-cols-3 items-center gap-4">
				<Label htmlFor="width">Vanadium Number Density</Label>
				<Input
					id="width"
					value={vanadiumDensity}
					onChange={(event) => updateParam(event, "vanadium_density")}
					style={{ borderColor: vanadiumDensityValid? "" : "red" }}
					className="col-span-2 h-8"
				/>
				</div>
				<div className="grid grid-cols-3 items-center gap-4">
				<Label htmlFor="maxWidth">Vanadium Radius (mm)</Label>
				<Input
					id="maxWidth"
					value={vanadiumRadius}
					className="col-span-2 h-8"
					onChange={(event) => updateParam(event, "vanadium_radius")}
					style={{ borderColor: vanadiumRadiusValid? "" : "red" }}
				/>
				</div>                <div className="grid grid-cols-3 items-center gap-4">
				<Label htmlFor="maxHeight">Vanadium Absorption XSection</Label>
				<Input
					id="maxHeight"
					value={vanadiumAbsorptionXSection}
					className="col-span-2 h-8"
					onChange={(event) => updateParam(event, "vanadium_absorption_x_section")}
					style={{ borderColor: vanadiumAbsorptionXSectionValid? "" : "red" }}
				/>
				</div>
				<div className="grid grid-cols-3 items-center gap-4">
				<Label htmlFor="height">Vanadium Scattering XSection</Label>
				<Input
					id="height"
					value={vanadiumScatteringXSection}
					onChange={(event) => updateParam(event, "vanadium_absorption_x_section")}
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