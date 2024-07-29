
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
import React, { useState, useEffect, ChangeEvent } from "react"
import { LoadImage } from "./ui/LoadImage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileText } from '@fortawesome/free-solid-svg-icons';
import { Checkbox } from "@/components/ui/checkbox"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { faPlay, faStop, faFileImage } from '@fortawesome/free-solid-svg-icons';

export function ImportTab(props: {
  setLog: React.Dispatch<React.SetStateAction<string>>
  log: string
  loading: boolean
  ranSuccessfully: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  localFileDir: string
  setLocalFileDir: React.Dispatch<React.SetStateAction<string>>
  usingLocalServer: boolean
  setUsingLocalServer: React.Dispatch<React.SetStateAction<boolean>>
  serverWS: React.MutableRefObject<WebSocket | null>
  currentFileKey: string
}) {
  const [advancedOptions, setAdvancedOptions] = useState<string>("");

  function getAlgorithmOptions() {


    const algorithmOptions: Record<string, string> = {}

    const keyValuePairs = advancedOptions.split(" ");

    keyValuePairs.forEach((pair) => {
      const [key, value] = pair.split("=");
      if (key != "" && value != undefined) {
        algorithmOptions[key] = value;
      }
    });

    return algorithmOptions;
  }

  const importFile = async (event: ChangeEvent<HTMLInputElement>) => {
    props.setLoading(true);
    const newFiles: FileList | null = event.target.files;
    if (newFiles != null) {
      const filenames: string[] = newFiles ? [...newFiles].map(file => file.name) : [];
      props.setLog("");
      const algorithmOptions = getAlgorithmOptions();
      if (props.usingLocalServer) {
        props.serverWS.current?.send(JSON.stringify({
          "channel": "server",
          "command": "dials.import",
          "filenames": filenames,
          "local_file_dir": props.localFileDir,
          "args": algorithmOptions
        }
        ));

      }
      else {
        const fileContents = newFiles
          ? await Promise.all([...newFiles].map(async file => await parseImageFile(file)))
          : [];
        props.serverWS.current?.send(JSON.stringify({
          "channel": "server",
          "command": "dials.import",
          "filenames": filenames,
          "file_contents": fileContents,
          "args": algorithmOptions
        }
        ));
      }
    }

  }

  function browseImagesForImport() {
      const algorithmOptions = getAlgorithmOptions();
        props.serverWS.current?.send(JSON.stringify({
          "channel": "server",
          "command": "browse_files_for_import",
          "args": algorithmOptions
        }));

  }

  const parseImageFile = (file: File) => {
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
            <Button onClick={browseImagesForImport}><FontAwesomeIcon icon={faFileImage} style={{ marginRight: '5px', marginTop: "0px" }} />{props.currentFileKey !== "" ? props.currentFileKey : "Browse"} </Button>
          </div>
          <div className="col-end-8 col-span-1 ...">
            <a href="https://dials.github.io/documentation/programs/dials_import.html" target="_blank">
              <Button variant={"secondary"}><FontAwesomeIcon icon={faFileText} style={{ marginRight: '5px', marginTop: "0px" }} />Documentation </Button>
            </a>
          </div>
        </div>
        <div className="space-y-1">
          <Label>Advanced Options</Label>
          <Input onChange={(e) => setAdvancedOptions(e.target.value)} placeholder="See Documentation for full list of options" />
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <Card className={
          props.usingLocalServer ?
            props.loading ? "h-[56vh] overflow-scroll border border-white" :
              props.ranSuccessfully ? "h-[56vh] overflow-scroll" :
                "h-[56vh] overflow-scroll border border-red-500" :
            props.loading ? "h-[61vh] overflow-scroll border border-white" :
              props.ranSuccessfully ? "h-[61vh] overflow-scroll" :
                "h-[61vh] overflow-scroll border border-red-500"
        }>
          <CardHeader>
            <CardDescription>
              DIALS Output
            </CardDescription>
          </CardHeader>
          <CardContent>
            {props.loading ?

              <div style={{ opacity: 0.5 }} dangerouslySetInnerHTML={{ __html: props.log }} />
              :
              <div dangerouslySetInnerHTML={{ __html: props.log }} />
            }

          </CardContent>
        </Card>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  )
}
