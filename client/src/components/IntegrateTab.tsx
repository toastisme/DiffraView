

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
import { MouseEvent, useState, useRef, useEffect } from "react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSave, faPlay, faStop, faFileText } from '@fortawesome/free-solid-svg-icons';
import { LoadImage } from "./ui/LoadImage"
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
  serverWS: React.MutableRefObject<WebSocket | null>
}) {

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

  const [basicOptions, setBasicOptions] = useState<Record<string, string>>({});
  const [advancedOptions, _] = useState<string>("");
  const [showIncidentCorrections, setShowIncidentCorrections] = useState<boolean>(false);
  const [showAbsorptionCorrections, setShowAbsorptionCorrections] = useState<boolean>(false);

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

  function updateIncidentCorrections(event: any) {
    setShowIncidentCorrections(!showIncidentCorrections);
  }

  function updateAbsorptionCorrections(event: any) {
    setShowAbsorptionCorrections(!showAbsorptionCorrections);
  }
  function updateLorentzCorrection(event: any) {
    console.log("lorentz", event.target.value);
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
                <Button>Apply Corrections</Button>
              </PopoverTrigger>
              <PopoverContent className="w-150">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Corrections</h4>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="lorentz" onClick={(event) => updateLorentzCorrection(event)} />
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Lorentz
                      </label>
                      <Checkbox id="incident" onClick={(event) => updateIncidentCorrections(event)} />
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Incident Spectrum
                      </label>
                      <Checkbox id="spherical_absorption" onClick={(event) => updateAbsorptionCorrections(event)} />
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
                          defaultValue="0.0722"
                          className="col-span-2 h-8"
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="maxWidth">Sample Radius</Label>
                        <Input
                          id="maxWidth"
                          defaultValue="0.3"
                          className="col-span-2 h-8"
                        />
                      </div>                <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="maxHeight">Absoption XSection</Label>
                        <Input
                          id="maxHeight"
                          defaultValue="4.4883"
                          className="col-span-2 h-8"
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="height">Scattering XSection</Label>
                        <Input
                          id="height"
                          defaultValue="5.158"
                          className="col-span-2 h-8"
                        />
                      </div>
                    </div>
                    </div>
                    <div hidden={!showIncidentCorrections}>
                      <p className="text-sm text-muted-foreground">
                        Parameters for correcting the incident spectrum
                      </p>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="vanadiumRun">Vanadium Run</Label>
                        <LoadImage id="vanadiumRun" type="file" className="col-span-2" />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="emptyRun">Empty Run</Label>
                        <LoadImage id="emptyRun" type="file" className="col-span-2" />
                      </div>
                    </div>
                    <div hidden={!(showAbsorptionCorrections && showIncidentCorrections)}>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="width">Vanadium Number Density</Label>
                        <Input
                          id="width"
                          defaultValue="0.0722"
                          className="col-span-2 h-8"
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="maxWidth">Vanadium Radius</Label>
                        <Input
                          id="maxWidth"
                          defaultValue="0.3"
                          className="col-span-2 h-8"
                        />
                      </div>                <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="maxHeight">Vanadium Absoption XSection</Label>
                        <Input
                          id="maxHeight"
                          defaultValue="4.4883"
                          className="col-span-2 h-8"
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="height">Vanadium Scattering XSection</Label>
                        <Input
                          id="height"
                          defaultValue="5.158"
                          className="col-span-2 h-8"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="col-start-5 col-span-2 ...">
            <Button disabled={!props.saveHKLEnabled} style={{ marginLeft: "70px" }}><FontAwesomeIcon icon={faSave} style={{ marginRight: '5px' }}></FontAwesomeIcon> Save HKL</Button>
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
