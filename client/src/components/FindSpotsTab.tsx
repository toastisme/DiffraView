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
import { MouseEvent, useRef, useEffect, useState} from "react"
import { Slider } from "@/components/ui/slider"
import { FindSpotsAlgorithmSelect } from "./FindSpotsAlgorithmSelect"
import { FindSpotsDispersionInputParams, FindSpotsRadialProfileInputParams } from "./FindSpotsInputParams"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faStop, faFileText} from '@fortawesome/free-solid-svg-icons';


export function FindSpotsTab(props: {
  setLog : React.Dispatch<React.SetStateAction<string>>,
	enabled : boolean, 
	loading: boolean, 
    setLoading : React.Dispatch<React.SetStateAction<boolean>>,
	log: string,
  minTOF : number,
  maxTOF : number,
  currentMinTOF: number,
  setCurrentMinTOF: React.Dispatch<React.SetStateAction<number>>,
  currentMaxTOF: number,
  setCurrentMaxTOF: React.Dispatch<React.SetStateAction<number>>,
  stepTOF: number,
  ranSuccessfully: boolean,
  gain: string,
  setGain: React.Dispatch<React.SetStateAction<string>>,
  sigmaStrong: string,
  setSigmaStrong: React.Dispatch<React.SetStateAction<string>>,
  sigmaBG: string,
  setSigmaBG: React.Dispatch<React.SetStateAction<string>>,
  globalThreshold: string,
  setGlobalThreshold: React.Dispatch<React.SetStateAction<string>>,
  kernelSize: string,
  setKernelSize: React.Dispatch<React.SetStateAction<string>>,
  minLocal: string,
  setMinLocal: React.Dispatch<React.SetStateAction<string>>,
  iQR: string,
  setIQR: React.Dispatch<React.SetStateAction<string>>,
  blur: string,
  setBlur: React.Dispatch<React.SetStateAction<string>>,
  nBins: string,
  setNBins: React.Dispatch<React.SetStateAction<string>>,
	serverWS: React.MutableRefObject<WebSocket | null>}){

  const cardContentRef = useRef<HTMLDivElement | null>(null);

  const [basicOptions, setBasicOptions] = useState<Record<string, string>>({});
  const [advancedOptions, setAdvancedOptions] = useState<string>("");
  const [findSpotsAlgorithm, setFindSpotsAlgorithm] = useState<string>("");

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

    props.setLoading(true);
    props.setLog("");

    props.serverWS.current?.send(JSON.stringify({
    "channel": "server",
    "command": "dials.find_spots", 
    "args" : algorithmOptions
    }));
  };

  const cancelFindSpots = (event : MouseEvent<HTMLButtonElement>) =>{
    
    event.preventDefault();
    props.serverWS.current?.send(JSON.stringify({
    "channel": "server",
    "command": "cancel_active_task", 
    }));
  };



  function updateTOFRange(value: readonly number[]){
    props.setCurrentMinTOF(value[0]);
    props.setCurrentMaxTOF(value[1]);

    const numImages = (props.maxTOF - props.minTOF)/props.stepTOF;
    const ir1 = ((value[0] - props.minTOF) / (props.maxTOF - props.minTOF)) * (numImages - 1) + 1
    const ir2 = ((value[1] - props.minTOF) / (props.maxTOF - props.minTOF)) * (numImages - 1) + 1

    addEntryToBasicOptions("scan_range", Math.round(ir1).toString() + "," + Math.round(ir2).toString());
    props.serverWS.current?.send(JSON.stringify({
    "channel": "server",
    "command": "update_experiment_images",
    "image_range": [ir1, ir2]
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



  useEffect(() => {
    const cardContentElement = cardContentRef.current;
    if (cardContentElement) {
      cardContentElement.scrollTop = cardContentElement.scrollHeight;
    }
  }, [props.log]);

	return (
        <Card className="h-[84vh]">
          <CardHeader>
            <div className="grid grid-cols-6 gap-4">
              <div className="col-start-1 col-end-2 ...">
                { !props.loading? (
                <Button onClick={findSpots}><FontAwesomeIcon icon={faPlay} style={{ marginRight: '5px', marginTop:"0px"}}/>Run </Button>
                ) : (
                <Button onClick={cancelFindSpots}><FontAwesomeIcon icon={faStop} style={{ marginRight: '5px', marginTop:"0px"}}/>Stop </Button>
                )
                }             
                </div>
              <div className="col-end-8 col-span-1 ...">
                <a href="https://dials.github.io/documentation/programs/dials_find_spots.html" target="_blank">
                  <Button variant={"secondary"}><FontAwesomeIcon icon={faFileText} style={{ marginRight: '5px', marginTop:"0px"}}/>Documentation </Button>
                </a>

              </div>
            </div>
            <div className="grid grid-cols-6 gap-8">
              <div className="col-start-1 col-end-3">
            <Label>Algorithm</Label>
            <FindSpotsAlgorithmSelect setFindSpotsAlgorithm={setFindSpotsAlgorithm} addEntryToBasicOptions={addEntryToBasicOptions} />
              </div>
              <div className="col-start-3 col-end-7">
            <Label>ToF Range: {props.currentMinTOF}, {props.currentMaxTOF} (μsec)</Label>
                <Slider
                defaultValue={[props.currentMinTOF, props.currentMaxTOF]}
                max={props.maxTOF}
                min={props.minTOF}
                minStepsBetweenThumbs={props.stepTOF}
                onValueCommit={updateTOFRange}
                style={{
                  marginTop:"2vh"
                }}></Slider>
              </div>
            </div>
            <div hidden={findSpotsAlgorithm === "radial_profile"}>
            <FindSpotsDispersionInputParams 
            addEntryToBasicOptions={addEntryToBasicOptions}
            gain={props.gain}
            setGain={props.setGain}
            sigmaStrong={props.sigmaStrong}
            setSigmaStrong={props.setSigmaStrong}
            sigmaBG={props.sigmaBG}
            setSigmaBG={props.setSigmaBG}
            globalThreshold={props.globalThreshold}
            setGlobalThreshold={props.setGlobalThreshold}
            kernelSize={props.kernelSize}
            setKernelSize={props.setKernelSize}
            minLocal={props.minLocal}
            setMinLocal={props.setMinLocal}
            />
            </div>
            <div hidden={findSpotsAlgorithm !== "radial_profile"}>
            <FindSpotsRadialProfileInputParams removeEntryFromBasicOptions={removeEntryFromBasicOptions} addEntryToBasicOptions={addEntryToBasicOptions}
            iQR={props.iQR}
            setIQR={props.setIQR}
            blur={props.blur}
            setBlur={props.setBlur}
            nBins={props.nBins}
            setNBins={props.setNBins}
            />
            </div>
            <div >
              <Label>Advanced Options</Label>
              <Input onChange={(e)=>setAdvancedOptions(e.target.value)} placeholder="See Documentation for full list of options" />
            </div>
          </CardHeader>
          <CardContent >
            <Card className={props.loading ? "h-[49.65vh] overflow-y-scroll border border-white" : props.ranSuccessfully ? "h-[49.65vh] overflow-y-scroll":"h-[49.65vh] overflow-y-scroll border border-red-500"} ref={cardContentRef}>
            <CardHeader>
              <CardDescription>
                DIALS Output
              </CardDescription>
            </CardHeader>
            <CardContent>
              {props.loading ? 
              <div style={{opacity:0.5}} dangerouslySetInnerHTML={{__html:props.log}} />
            :
              <div dangerouslySetInnerHTML={{__html:props.log}} />
            }

            </CardContent>
          </Card>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
	)
}
