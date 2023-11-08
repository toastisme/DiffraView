
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
import {useState,  MouseEvent, useRef, useEffect } from "react"
import { RefineFixedParams } from "./RefineFixedParams"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Switch } from "@/components/ui/switch"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faFileText} from '@fortawesome/free-solid-svg-icons';

export function RefineTab(props: {
    setLog : React.Dispatch<React.SetStateAction<string>>,
	enabled : boolean, 
	loading: boolean, 
    setLoading : React.Dispatch<React.SetStateAction<boolean>>,
	log: string,
  ranSuccessfully: boolean,
	serverWS: React.MutableRefObject<WebSocket | null>}){

  const defaultOptimizePanelsSeparately: boolean = true;

  const refine = (event : MouseEvent<HTMLButtonElement>) =>{
	event.preventDefault();
    props.setLoading(true);
	props.setLog("");
  const args = getAlgorithmOptions();

	props.serverWS.current?.send(JSON.stringify({
	"channel": "server",
	"command": "dials.refine", 
  "args" : args
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

  function updateOptimizePanelsSeparately(checked: boolean){
    var output: string = "single";
    if (checked){
      output = "hierarchical";
    }
    addEntryToBasicOptions("detector.panels", output);
  }



  useEffect(() => {
    const cardContentElement = cardContentRef.current;
    if (cardContentElement) {
      cardContentElement.scrollTop = cardContentElement.scrollHeight;
    }
  }, [props.log]);

  useEffect(()=>{
    updateOptimizePanelsSeparately(defaultOptimizePanelsSeparately);
  },[])

	return (
        <Card className="h-[84vh]">
          <CardHeader>
            <div className="grid grid-cols-6 gap-4">
              <div className="col-start-1 col-end-2 ...">
                <Button onClick={refine}><FontAwesomeIcon icon={faPlay} style={{ marginRight: '5px', marginTop:"0px"}}/>Run</Button>
              </div>
              <div className="col-start-2 col-end-7 ...">
              </div>
              <div className="col-end-8 col-span-1 ...">
                <a href="https://dials.github.io/documentation/programs/dials_refine.html" target="_blank">
                  <Button variant={"secondary"}><FontAwesomeIcon icon={faFileText} style={{ marginRight: '5px', marginTop:"0px"}}/>Documentation </Button>
                </a>

              </div>
            </div>
            <div className="grid grid-cols-2 gap-8"> 
              <div>
                <Label>Outlier Algorithm</Label>
                <Select onValueChange={(value) => addEntryToBasicOptions("refinement.reflections.outlier.algorithm", value)}>
                  <SelectTrigger >
                  <SelectValue placeholder="auto" defaultValue={"auto"} />
                  </SelectTrigger>
                  <SelectContent>
                  <SelectGroup>
                    <SelectItem value="auto">auto</SelectItem>
                    <SelectItem value="none">none</SelectItem>
                    <SelectItem value="mcd">mcd</SelectItem>
                    <SelectItem value="tukey">tukey</SelectItem>
                    <SelectItem value="sauter_poon">sauter poon</SelectItem>
                  </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div style={{marginTop:30}}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div>
                      <Label> Optimize Detector Panels Separately</Label>
                  <Switch onCheckedChange={updateOptimizePanelsSeparately} id="optimize_panels_separately" checked={defaultOptimizePanelsSeparately}/>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p> Allow panel positions within a multi-panel detector to be optimized separately </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
    </div>
            <div style={{marginTop:5}}></div>
            <div >
              <RefineFixedParams addEntryToBasicOptions={addEntryToBasicOptions}></RefineFixedParams>
              <div style={{marginTop:5}}></div>
              <Label>Advanced Options</Label>
              <Input onChange={(e)=>setAdvancedOptions(e.target.value)} placeholder="See Documentation for full list of options" />
            </div>
          </CardHeader>
          <CardContent >
            <Card className={props.loading ? "h-[40.25vh] overflow-scroll border border-white" : props.ranSuccessfully ? "h-[40.25vh] overflow-scroll":"h-[40.25vh] overflow-scroll border border-red-500" } ref={cardContentRef}>
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
