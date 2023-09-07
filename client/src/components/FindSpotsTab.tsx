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
import { FindSpotsInputParams } from "./FindSpotsInputParams"


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
	serverWS: React.MutableRefObject<WebSocket | null>}){

  const cardContentRef = useRef<HTMLDivElement | null>(null);

  const [basicOptions, setBasicOptions] = useState<Record<string, string>>({});
  const [advancedOptions, setAdvancedOptions] = useState<string>("");

  const addEntryToBasicOptions = (key: string, value: string) => {
    setBasicOptions((prevOptions) => ({
      ...prevOptions, 
      [key]: value,  
    }));
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



  function updateTOFRange(value: readonly number[]){
    props.setCurrentMinTOF(value[0]);
    props.setCurrentMaxTOF(value[1]);

    const numImages = (props.maxTOF - props.minTOF)/props.stepTOF;
    const ir1 = ((props.currentMinTOF - props.minTOF) / (props.maxTOF - props.minTOF)) * (numImages - 1) + 1
    const ir2 = ((props.currentMaxTOF - props.minTOF) / (props.maxTOF - props.minTOF)) * (numImages - 1) + 1

    addEntryToBasicOptions("scan_range", Math.round(ir1).toString() + "," + Math.round(ir2).toString());
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
        <Card className="h-[85vh]">
          <CardHeader>
            <div className="grid grid-cols-6 gap-4">
              <div className="col-start-1 col-end-2 ...">
				<Button onClick={findSpots}>Run </Button>
                  </div>
              <div className="col-end-8 col-span-1 ...">
                <a href="https://dials.github.io/documentation/programs/dials_find_spots.html" target="_blank">
                  <Button variant={"secondary"}>Documentation </Button>
                </a>

              </div>
            </div>
            <div className="grid grid-cols-6 gap-8">
              <div className="col-start-1 col-end-3">
            <Label>Algorithm</Label>
            <FindSpotsAlgorithmSelect addEntryToBasicOptions={addEntryToBasicOptions} />
              </div>
              <div className="col-start-3 col-end-7">
            <Label>ToF Range: {props.currentMinTOF}, {props.currentMaxTOF} (μsec)</Label>
                <Slider
                defaultValue={[props.currentMinTOF, props.currentMaxTOF]}
                max={props.maxTOF}
                min={props.minTOF}
                minStepsBetweenThumbs={props.stepTOF}
                onValueChange={updateTOFRange}
                style={{
                  marginTop:"2vh"
                }}></Slider>
              </div>
            </div>
            <FindSpotsInputParams addEntryToBasicOptions={addEntryToBasicOptions}/>
            <div >
              <Label>Advanced Options</Label>
              <Input onChange={(e)=>setAdvancedOptions(e.target.value)} placeholder="See Documentation for full list of options" />
            </div>
          </CardHeader>
          <CardContent >
            <Card className={props.loading ? "h-[55vh] overflow-scroll border border-white" : props.ranSuccessfully ? "h-[55vh] overflow-scroll":"h-[55vh] overflow-scroll border border-red-500"} ref={cardContentRef}>
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
