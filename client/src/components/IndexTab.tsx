import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MouseEvent, useRef, useEffect, useState } from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { DetectSymmetrySheet } from "./DetectSymmetry"
import { IndexAlgorithmSelect } from "./IndexAlgorithmSelect"
import { IndexInputParams } from "./IndexInputParams"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faStop, faFileText } from '@fortawesome/free-solid-svg-icons';
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
import { useIndexContext } from "@/contexts/IndexContext"
import { useRootContext } from "@/contexts/RootContext"
import { Status } from "@/types"

export function IndexTab() {

  const {
    crystalIDs,
    detectSymmetryEnabled,
    status,
    setStatus,
    log,
    setLog

  } = useIndexContext();

  const {
    serverWS
  } = useRootContext();

  const [selectedCrystalID, setSelectedCrystalID] = useState<string>("0");

  const index = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setStatus(Status.Loading);
    setLog("");
    const algorithmOptions = getAlgorithmOptions();

    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "dials.index",
      "args": algorithmOptions
    }));
  };

  const cancelIndex = (event: MouseEvent<HTMLButtonElement>) => {

    event.preventDefault();
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "cancel_active_task",
    }));
  };

  const cardContentRef = useRef<HTMLDivElement | null>(null);

  const [basicOptions, setBasicOptions] = useState<Record<string, string>>({});
  const [advancedOptions, setAdvancedOptions] = useState<string>("");

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


  useEffect(() => {
    const cardContentElement = cardContentRef.current;
    if (cardContentElement) {
      cardContentElement.scrollTop = cardContentElement.scrollHeight; }
  }, [log]);

  useEffect(() => {
    if (!(status === Status.Loading) && runningBravaisSettings) {
      setRunningBravaisSettings(false);
    }

  }, [status])

  const refineBravaisSettings = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setStatus(Status.Loading);
    setLog("");

    const args={
      "refinement.parameterisation.beam.fix":"all",
      "refinement.parameterisation.detector.fix":"all",
      "refinement.parameterisation.goniometer.fix":"all",
    }

    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "dials.refine_bravais_settings",
      "args": args
    }));
    setRunningBravaisSettings(true);
  }

  const refineBravaisSettingsWithID = (crystalID:string="0") => {
    setSelectedCrystalID(crystalID);
    setStatus(Status.Loading);
    setLog("");

    const args = {
      "crystal_id" : crystalID,
      "refinement.parameterisation.beam.fix":"all",
      "refinement.parameterisation.detector.fix":"all",
      "refinement.parameterisation.goniometer.fix":"all",
    };
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "dials.refine_bravais_settings",
      "args" : args
    }));
    setRunningBravaisSettings(true);
  }

  const [runningBravaisSettings, setRunningBravaisSettings] = useState<boolean>(false);

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-1 col-end-2 ...">
            {(status === Status.Loading && !runningBravaisSettings) ? (
              <Button onClick={cancelIndex}><FontAwesomeIcon icon={faStop} style={{ marginRight: '5px', marginTop: "0px" }} />Stop </Button>
            ) : (
              <Button onClick={index}><FontAwesomeIcon icon={faPlay} style={{ marginRight: '5px', marginTop: "0px" }} />Run </Button>
            )
            }
          </div>
          <div className="col-start-2 col-span-3 ...">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  {runningBravaisSettings ? (
                    <Button onClick={cancelIndex}><FontAwesomeIcon icon={faStop} style={{ marginRight: '5px', marginTop: "0px" }} />Stop </Button>
                  ) : crystalIDs.length > 1 ?
                   (
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button disabled={!detectSymmetryEnabled}><FontAwesomeIcon icon={faPlay} style={{ marginRight: '5px', marginTop: "0px" }} /> Detect Symmetry </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80">
                        <div className="grid gap-4">
                          <div className="space-y-2">
                            <p className="text-sm text-muted-foreground">
                              Select which crystal to apply symmetry to.
                            </p>
                        <div>
                          <Label>Crystal id</Label>
                          <Select onValueChange={(value) => refineBravaisSettingsWithID(value)}>
                            <SelectTrigger >
                            <SelectValue/>
                            </SelectTrigger>
                            <SelectContent>
                            <SelectGroup>
                              {crystalIDs.map((crystalID) => {
                                return(
                                  <SelectItem 
                                    key={crystalID} 
                                    value={crystalID.toString()}>
                                    {crystalID}</SelectItem>
                                )
                              })
                              }
                            </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  )
                  :
                   (
                    <Button onClick={refineBravaisSettings} disabled={!detectSymmetryEnabled}><FontAwesomeIcon icon={faPlay} style={{ marginRight: '5px', marginTop: "0px" }} /> Detect Symmetry </Button>
                  )
                  }
                </TooltipTrigger>
                <TooltipContent>
                  <p>Identify possible Bravais lattices</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <DetectSymmetrySheet
              selectedCrystalID={selectedCrystalID}
            ></DetectSymmetrySheet>
          </div>
          <div className="col-end-8 col-span-1 ...">
            <a href="src/assets/documentation/_build/html/docs/indexing.html" target="_blank">
              <Button variant={"secondary"}><FontAwesomeIcon icon={faFileText} style={{ marginRight: '5px', marginTop: "0px" }} />Documentation </Button>
            </a>

          </div>
        </div>
        <IndexAlgorithmSelect addEntryToBasicOptions={addEntryToBasicOptions}></IndexAlgorithmSelect>
        <IndexInputParams addEntryToBasicOptions={addEntryToBasicOptions}></IndexInputParams>
        <div >
          <Label>Advanced Options</Label>
          <Input onChange={(e) => setAdvancedOptions(e.target.value)} placeholder="See Documentation for full list of options" />
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col overflow-y-hidden">
        <Card className={status === Status.Loading ? "flex-1 flex flex-col overflow-y-scroll overflow-x-hidden border border-white flex-shrink" : status === Status.Default ? "flex-1 flex flex-col overflow-y-scroll" : "flex-1 flex flex-col overflow-y-scroll overflow-x-hidden border border-red-500"} ref={cardContentRef}>
          <CardHeader>
            <CardDescription>
              DIALS Output
            </CardDescription>
          </CardHeader>
          <CardContent >
            {status === Status.Loading ?
              <div style={{ opacity: 0.5, overflowX: "hidden", maxWidth: "100%" }} dangerouslySetInnerHTML={{ __html: log }} />
              :
              <div style={{overflowX:"hidden", maxWidth:"100%"}} dangerouslySetInnerHTML={{ __html: log }} />
            }
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}
