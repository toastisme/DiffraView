
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
import { IndexInputXDSParams } from "./IndexInputParams"
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
import { useFindSpotsContext } from "@/contexts/FindSpotsContext"
import { Status } from "@/types"

export function IndexXDSTab() {

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

  const {
    imageStackRange
  } = useFindSpotsContext();

  const [selectedCrystalID, setSelectedCrystalID] = useState<string>("0");

  const index = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setStatus(Status.Loading);
    setLog("");
    const algorithmOptions = getAlgorithmOptions();

    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "dials.index",
      "image_stack_range": imageStackRange,
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
      cardContentElement.scrollTop = cardContentElement.scrollHeight;
    }
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

    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "dials.refine_bravais_settings",
    }));
    setRunningBravaisSettings(true);
  }

  const refineBravaisSettingsWithID = (crystalID:string="0") => {
    setSelectedCrystalID(crystalID);
    setStatus(Status.Loading);
    setLog("");

    const args = {"crystal_id" : crystalID};
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
          <div className="col-start-1 col-end-3 ...">
            {(status === Status.Loading && !runningBravaisSettings) ? (
              <Button onClick={cancelIndex}><FontAwesomeIcon icon={faStop} style={{ marginRight: '5px', marginTop: "0px" }} />Stop </Button>
            ) : (
              <Button onClick={index}><FontAwesomeIcon icon={faPlay} style={{ marginRight: '5px', marginTop: "0px" }} />Run XDS </Button>
            )
            }
          </div>
          <div className="col-end-8 col-span-1 ...">
            <a href="src/assets/documentation/_build/html/docs/indexing.html" target="_blank">
              <Button variant={"secondary"}><FontAwesomeIcon icon={faFileText} style={{ marginRight: '5px', marginTop: "0px" }} />Documentation </Button>
            </a>

          </div>
        </div>
        <IndexInputXDSParams addEntryToBasicOptions={addEntryToBasicOptions}></IndexInputXDSParams>
        <div >
          <Label>Advanced Options</Label>
          <Input onChange={(e) => setAdvancedOptions(e.target.value)} placeholder="See Documentation for full list of options" />
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col overflow-y-hidden">
        <Card className={status === Status.Loading ? "flex-1 flex flex-col overflow-y-scroll overflow-x-hidden border border-white flex-shrink" : status === Status.Default ? "flex-1 flex flex-col overflow-y-scroll" : "flex-1 flex flex-col overflow-y-scroll overflow-x-hidden border border-red-500"} ref={cardContentRef}>
          <CardHeader>
            <CardDescription>
              XDS Output
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
