import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MouseEvent, useRef, useEffect, useState} from "react"
import { Slider } from "@/components/ui/slider"
import { FindSpotsDispersionInputParams, FindSpotsRadialProfileInputParams } from "./FindSpotsInputParams"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faStop, faFileText} from '@fortawesome/free-solid-svg-icons';
import { useFindSpotsContext } from "@/contexts/FindSpotsContext"
import { useRootContext } from "@/contexts/RootContext"
import { SoftwareBackend, Status } from "../types"



export function FindSpotsDIALSTOFTab(){

  const {
    serverWS,
    activeSoftware
  } = useRootContext();

  const {
    log,
    setLog,
    setStatus,
    status,
    maxTOF,
    minTOF,
    stepTOF,
    currentMinTOF,
    currentMaxTOF,
    setCurrentMinTOF,
    setCurrentMaxTOF,
    setAlgorithm,
    algorithm,

  } = useFindSpotsContext();

  const cardContentRef = useRef<HTMLDivElement | null>(null);

  const [basicOptions, setBasicOptions] = useState<Record<string, string>>({});
  const [advancedOptions, setAdvancedOptions] = useState<string>("");

  const addEntryToBasicOptions = (key: string, value: string) => {
    setBasicOptions((prevOptions) => ({
      ...prevOptions, 
      [key]: value,  
    }));
  };

  const removeEntryFromBasicOptions = (keyToRemove: string) => {
  setBasicOptions((prevOptions) => {
    const newOptions = { ...prevOptions };
    delete newOptions[keyToRemove];
    return newOptions;
  });
};

  const findSpots = (event : MouseEvent<HTMLButtonElement>) =>{
    
    event.preventDefault();

    const algorithmOptions = getAlgorithmOptions();

    setStatus(Status.Loading);
    setLog("");

    serverWS.current?.send(JSON.stringify({
    "channel": "server",
    "command": "find_spots", 
    "active_software": activeSoftware,
    "args" : algorithmOptions
    }));
  };

  const cancelFindSpots = (event : MouseEvent<HTMLButtonElement>) =>{
    
    event.preventDefault();
    serverWS.current?.send(JSON.stringify({
    "channel": "server",
    "command": "cancel_active_task", 
    }));
  };



  function updateTOFRange(value: readonly number[]){

    setCurrentMinTOF(value[0]);
    setCurrentMaxTOF(value[1]);

    serverWS.current?.send(JSON.stringify({
    "channel": "server",
    "command": "update_experiment_images",
    "tof_range": [value[0], value[1]]
    }));
  }

  function getAlgorithmOptions(){


    const algorithmOptions = {...basicOptions}

    // Advanced options are added second, 
    // and so replace any duplicates in basicOptions
    const keyValuePairs = advancedOptions.split(" ");

    keyValuePairs.forEach((pair) => {
      const [key, value] = pair.split("=");
      if (key != "" && value != undefined){
        algorithmOptions[key] = value;
      }
    });

    return algorithmOptions;
  }

  function updateFindSpotsAlgorithm(value: string): void{
    setAlgorithm(value);
    addEntryToBasicOptions("threshold.algorithm", value);
  }

  useEffect(() => {
    const cardContentElement = cardContentRef.current;
    if (cardContentElement) {
      cardContentElement.scrollTop = cardContentElement.scrollHeight;
    }
  }, [log]);

	return (
        <Card className="h-full flex flex-col">
          <CardHeader>
            <div className="grid grid-cols-6 gap-4">
              <div className="col-start-1 col-end-3 ...">
                { status !== Status.Loading ? (
                <Button onClick={findSpots}><FontAwesomeIcon icon={faPlay} style={{ marginRight: '5px', marginTop:"0px"}}/>Run DIALS </Button>
                ) : (
                <Button onClick={cancelFindSpots}><FontAwesomeIcon icon={faStop} style={{ marginRight: '5px', marginTop:"0px"}}/>Stop </Button>
                )
                }             
                </div>
              <div className="col-end-8 col-span-1 ...">
                <a href="src/assets/documentation/_build/html/docs/spot_finding.html" target="_blank">
                  <Button variant={"secondary"}><FontAwesomeIcon icon={faFileText} style={{ marginRight: '5px', marginTop:"0px"}}/>Documentation </Button>
                </a>

              </div>
            </div>
            <div className="grid grid-cols-6 gap-8">
              <div className="col-start-1 col-end-3">
            <Label>Algorithm</Label>
              <Select onValueChange={updateFindSpotsAlgorithm}>
                <SelectTrigger >
                <SelectValue placeholder="dispersion extended" defaultValue={"dispersion_extended"} />
                </SelectTrigger>
                <SelectContent>
                <SelectGroup>
                  <SelectItem value="dispersion_extended">dispersion extended</SelectItem>
                  <SelectItem value="dispersion">dispersion</SelectItem>
                  <SelectItem value="radial_profile">radial profile</SelectItem>
                </SelectGroup>
                </SelectContent>
              </Select>
              </div>
              <div className="col-start-3 col-end-7">
            <Label>ToF Range: {currentMinTOF}, {currentMaxTOF} (μsec)</Label>
                <Slider
                defaultValue={[currentMinTOF, currentMaxTOF]}
                max={maxTOF}
                min={minTOF}
                minStepsBetweenThumbs={stepTOF}
                onValueCommit={updateTOFRange}
                style={{
                  marginTop:"2vh"
                }}></Slider>
              </div>
            </div>
            <div hidden={algorithm === "radial_profile"}>
            <FindSpotsDispersionInputParams 
            addEntryToBasicOptions={addEntryToBasicOptions}/>
            </div>
            <div hidden={algorithm !== "radial_profile"}>
            <FindSpotsRadialProfileInputParams removeEntryFromBasicOptions={removeEntryFromBasicOptions} addEntryToBasicOptions={addEntryToBasicOptions}
            />
            </div>
            <div >
              <Label>Advanced Options</Label>
              <Input onChange={(e)=>setAdvancedOptions(e.target.value)} placeholder="See Documentation for full list of options" />
            </div>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col overflow-y-hidden">
            <Card className={status === Status.Loading ? "flex-1 flex flex-col overflow-y-hidden border border-white" : status === Status.Default ? "flex-1 overflow-y-hidden":"flex-1 overflow-y-hidden border border-red-500"} ref={cardContentRef}>
            <CardHeader>
              <CardDescription>
                DIALS Output
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-scroll">
              {status === Status.Loading ? 
              <div style={{opacity:0.5}} dangerouslySetInnerHTML={{__html:log}} />
            :
              <div dangerouslySetInnerHTML={{__html:log}} />
            }

            </CardContent>
          </Card>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
	)
}
