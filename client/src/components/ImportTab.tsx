
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
import React, { useState, ChangeEvent} from "react"
import { LoadImage } from "./ui/LoadImage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileText} from '@fortawesome/free-solid-svg-icons';
import { Checkbox } from "@/components/ui/checkbox"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function ImportTab(props: {
    setLog : React.Dispatch<React.SetStateAction<string>>
    log : string
    loading : boolean
    ranSuccessfully: boolean
    setLoading : React.Dispatch<React.SetStateAction<boolean>>
    localFileDir : string
    setLocalFileDir : React.Dispatch<React.SetStateAction<string>>
    usingLocalServer: boolean
    setUsingLocalServer : React.Dispatch<React.SetStateAction<boolean>>
    serverWS: React.MutableRefObject<WebSocket | null>
  }){

  const [advancedOptions, setAdvancedOptions] = useState<string>("");

  function getAlgorithmOptions(){


    const algorithmOptions : Record<string,string> = {}

    const keyValuePairs = advancedOptions.split(" ");

    keyValuePairs.forEach((pair) => {
      const [key, value] = pair.split("=");
      if (key != "" && value != undefined){
        algorithmOptions[key] = value;
      }
    });

    return algorithmOptions;
  }


  const importFile = async (event : ChangeEvent<HTMLInputElement>) =>{
    props.setLoading(true);
    const newFiles: FileList | null = event.target.files;
    if (newFiles != null){
      const filenames: string[] = newFiles ? [...newFiles].map(file => file.name) : [];
      props.setLog("");
      const algorithmOptions = getAlgorithmOptions();
      if (props.usingLocalServer){
        props.serverWS.current?.send(JSON.stringify({
          "channel": "server",
          "command": "dials.import", 
          "filenames" : filenames, 
          "local_file_dir" : props.localFileDir,
          "args" : algorithmOptions}
        ));

      }
      else{
        const fileContents = newFiles
          ? await Promise.all([...newFiles].map(async file => await parseImageFile(file)))
          : [];
        props.serverWS.current?.send(JSON.stringify({
          "channel": "server",
          "command": "dials.import", 
          "filenames" : filenames, 
          "file_contents" : fileContents,
          "args" : algorithmOptions}
        ));
      }
    }

  }

  const parseImageFile = (file : File) => {
    const reader: FileReader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.onerror = () => {
        reader.abort();
        reject(new DOMException("Problem parsing image file."));
      };

      reader.onloadend = () => {
        resolve(reader.result);
        return reader.result;
      }
      reader.readAsDataURL(file);    
    });
  }

	return (
        <Card className="w-full md:w-full h-[84vh]">
          <CardHeader>
            <div className="grid grid-cols-6 gap-4">
              <div className="col-start-1 col-span-3 ...">
                <LoadImage name={"bl"} id="image-files" multiple={true} type="file" onChange={importFile}/>
              </div>
              <div className="col-end-8 col-span-1 ...">
                <a href="https://dials.github.io/documentation/programs/dials_import.html" target="_blank">
                  <Button variant={"secondary"}><FontAwesomeIcon icon={faFileText} style={{ marginRight: '5px', marginTop:"0px"}}/>Documentation </Button>
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <Checkbox checked={props.usingLocalServer} id="using-local-server" onCheckedChange={(e)=>props.setUsingLocalServer(e)}/>
              </div>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="ml-2">
                      <label
                        htmlFor="using-local-server"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Using Local Server
                      </label>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Avoids making a local copy of the images file on the client
                      </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
              <div hidden={!props.usingLocalServer}>
              <Input value={props.localFileDir} disabled={!props.usingLocalServer} onChange={(e)=>props.setLocalFileDir(e.target.value)} placeholder="Path to images directory..." />
              </div>
            <div className="space-y-1">
              <Label>Advanced Options</Label>
              <Input onChange={(e)=>setAdvancedOptions(e.target.value)} placeholder="See Documentation for full list of options" />
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <Card className={
              props.usingLocalServer ?
                props.loading ? "h-[56vh] overflow-scroll border border-white" : 
                props.ranSuccessfully? "h-[56vh] overflow-scroll" :
                "h-[56vh] overflow-scroll border border-red-500" :
              props.loading ? "h-[61vh] overflow-scroll border border-white" : 
              props.ranSuccessfully? "h-[61vh] overflow-scroll" :
              "h-[61vh] overflow-scroll border border-red-500" 
              }>
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
