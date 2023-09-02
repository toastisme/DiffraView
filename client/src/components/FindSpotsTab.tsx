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
	serverWS: React.MutableRefObject<WebSocket | null>}){

  const findSpots = (event : MouseEvent<HTMLButtonElement>) =>{
    
    event.preventDefault();

    updateAdvancedOptions();

    props.setLoading(true);
    props.setLog("");

    props.serverWS.current?.send(JSON.stringify({
    "channel": "server",
    "command": "dials.find_spots", 
    }));
  };

  function updateTOFRange(value: readonly number[]){
    props.setCurrentMinTOF(value[0]);
    props.setCurrentMaxTOF(value[1]);

    props.serverWS.current?.send(JSON.stringify({
    "channel": "server",
    "command": "dials.update_tof_range", 
    "tof_min" : props.minTOF,
    "tof_max" : props.maxTOF,
    "current_tof_min" : props.currentMinTOF,
    "current_tof_max" : props.currentMaxTOF,
    "step_tof" : props.stepTOF
    }));

  }

  function updateAdvancedOptions(){

    const inputString = advancedOptions;

    const keyValuePairs = inputString.split(" ");

    keyValuePairs.forEach((pair) => {
      const [key, value] = pair.split("=");
      if (key != "" && value != undefined){
        props.serverWS.current?.send(JSON.stringify({
        "channel": "server",
        "command": "dials.update_algorithm_arg", 
        "algorithm_type" : "dials.find_spots",
        "param_name" : key,
        "param_value" : value
        }));
      }
    });
  }

  const cardContentRef = useRef<HTMLDivElement | null>(null);

  const [advancedOptions, setAdvancedOptions] = useState("");

  useEffect(() => {
    const cardContentElement = cardContentRef.current;
    if (cardContentElement) {
      cardContentElement.scrollTop = cardContentElement.scrollHeight;
    }
  }, [props.log]);

	return (
        <Card className="w-full md:w-full lg:w-full xl:w-full h-full md:h-full lg:h-full xl:h-full">
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
            <FindSpotsAlgorithmSelect serverWS={props.serverWS} />
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
            <FindSpotsInputParams serverWS={props.serverWS}/>
            <div className="space-y-1">
              <Label>Advanced Options</Label>
              <Input onChange={(e)=>setAdvancedOptions(e.target.value)} placeholder="See Documentation for full list of options" />
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <Card className={props.loading ? "h-[600px] overflow-scroll border border-white" : "h-[600px] overflow-scroll"} ref={cardContentRef}>
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
