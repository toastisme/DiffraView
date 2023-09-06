
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
import { useState, ChangeEvent} from "react"
import { LoadImage } from "./ui/LoadImage"

export function ImportTab(props: {
    setLog : React.Dispatch<React.SetStateAction<string>>
    log : string
    loading : boolean
    ranSuccessfully: boolean
    setLoading : React.Dispatch<React.SetStateAction<boolean>>
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
      props.setLog("");
      const algorithmOptions = getAlgorithmOptions();
      const fileContent = await parseImageFile(newFiles[0]);
      props.serverWS.current?.send(JSON.stringify({
        "channel": "server",
        "command": "dials.import", 
        "filename" : newFiles[0].name, 
        "file" : fileContent,
        "args" : algorithmOptions}
      ));
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
        <Card className="w-full md:w-full lg:w-full xl:w-full h-full md:h-full lg:h-full xl:h-full">
          <CardHeader>
            <div className="grid grid-cols-6 gap-4">
              <div className="col-start-1 col-span-2 ...">
                <LoadImage name={"bl"} id="image-files" type="file" onChange={importFile}/>
              </div>
              <div className="col-end-8 col-span-1 ...">
                <a href="https://dials.github.io/documentation/programs/dials_import.html" target="_blank">
                  <Button variant={"secondary"}>Documentation </Button>
                </a>

              </div>
            </div>
            <div className="space-y-1">
              <Label>Advanced Options</Label>
              <Input onChange={(e)=>setAdvancedOptions(e.target.value)} placeholder="See Documentation for full list of options" />
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <Card className={props.loading ? "h-[600px] overflow-scroll border border-white" : props.ranSuccessfully? "h-[600px] overflow-scroll" :"h-[600px] overflow-scroll border border-red-500" }>
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
