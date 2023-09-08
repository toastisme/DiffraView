import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MouseEvent, useRef, useEffect, useState} from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { BravaisLattice } from "@/types"
import { DetectSymmetrySheet } from "./DetectSymmetry"
import { IndexAlgorithmSelect } from "./IndexAlgorithmSelect"
import { IndexInputParams } from "./IndexInputParams"
import { IndexSpaceGroupSearch } from "./IndexSpacegroupSearch"

export function IndexTab(props: {
    setLog : React.Dispatch<React.SetStateAction<string>>,
	enabled : boolean, 
	loading: boolean, 
    setLoading : React.Dispatch<React.SetStateAction<boolean>>,
	log: string,
  bravaisLattices: BravaisLattice[],
  selectedBravaisLatticeId: string,
  setSelectedBravaisLatticeId: React.Dispatch<React.SetStateAction<string>>,
  detectSymmetryOpen: boolean,
  setDetectSymmetryOpen: React.Dispatch<React.SetStateAction<boolean>>,
  detectSymmetryEnabled: boolean,
  selectedBravaisLatticeLoading : boolean,
  setSelectedBravaisLatticeLoading : React.Dispatch<React.SetStateAction<boolean>>,
  ranSuccessfully : boolean,
	serverWS: React.MutableRefObject<WebSocket | null>}){

  const index = (event : MouseEvent<HTMLButtonElement>) =>{
    event.preventDefault();
    props.setLoading(true);
    props.setLog("");
    const algorithmOptions = getAlgorithmOptions();

    props.serverWS.current?.send(JSON.stringify({
    "channel": "server",
    "command": "dials.index", 
    "args" : algorithmOptions
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

  const refineBravaisSettings = (event : MouseEvent<HTMLButtonElement>) =>{
    event.preventDefault();
    props.setLoading(true);
    props.setLog("");

    props.serverWS.current?.send(JSON.stringify({
    "channel": "server",
    "command": "dials.refine_bravais_settings", 
    }));
  }

	return (
          <Card className="h-[85vh]">
          <CardHeader>
            <div className="grid grid-cols-6 gap-0">
              <div className="col-start-1 col-end-2 ...">
                <Button onClick={index}>Run </Button>
              </div>
              <div className="col-start-2 col-span-3 ...">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                    <Button onClick={refineBravaisSettings} disabled={!props.detectSymmetryEnabled}> Detect Symmetry </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Identify possible Bravais lattices</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                      <DetectSymmetrySheet
                      bravaisLattices={props.bravaisLattices}
                      selectedBravaisLatticeId={props.selectedBravaisLatticeId}
                      setSelectedBravaisLatticeId={props.setSelectedBravaisLatticeId}
                      serverWS={props.serverWS}
                      open={props.detectSymmetryOpen}
                      setOpen={props.setDetectSymmetryOpen}
                      selectedBravaisLatticeLoading={props.selectedBravaisLatticeLoading}
                      setSelectedBravaisLatticeLoading={props.setSelectedBravaisLatticeLoading}
                      ></DetectSymmetrySheet>
              </div>
              <div className="col-end-8 col-span-1 ...">
                <a href="https://dials.github.io/documentation/programs/dials_index.html" target="_blank">
                  <Button variant={"secondary"}>Documentation </Button>
                </a>

              </div>
            </div>
            <IndexAlgorithmSelect addEntryToBasicOptions={addEntryToBasicOptions}></IndexAlgorithmSelect>
            <IndexInputParams addEntryToBasicOptions={addEntryToBasicOptions}></IndexInputParams>
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
        </Card>
	)
}
