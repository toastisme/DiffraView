
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
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileText, faFolder } from '@fortawesome/free-solid-svg-icons';
import { faFileImage } from '@fortawesome/free-solid-svg-icons';
import { useImportContext } from "@/contexts/ImportContext";
import { useRootContext } from "@/contexts/RootContext"
import { Status } from "../types"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function ImportTab() {

  const { 
    serverWS,
    currentFileKey,
    processingDir,
    } = useRootContext();

  const { 
    browseImagesEnabled, 
    setBrowseImagesEnabled,
    status,
    log,
    softwareBackend
   } = useImportContext();

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

  function getReducedProcessingDir(dirPath: string){
    const parts = dirPath.split(/[\\/]/);
    return parts.pop();
  }

  function browseImagesForImport() {
      const algorithmOptions = getAlgorithmOptions();
        serverWS.current?.send(JSON.stringify({
          "channel": "server",
          "command": "browse_files_for_import",
          "softwareBackend" : softwareBackend,
          "args": algorithmOptions
        }));
        setBrowseImagesEnabled(false);

  }
  
  function browseToSetProcessingFolder() {
      const algorithmOptions = getAlgorithmOptions();
        serverWS.current?.send(JSON.stringify({
          "channel": "server",
          "command": "browse_for_processing_folder",
          "softwareBackend" : softwareBackend,
          "args": algorithmOptions
        }));
        setBrowseImagesEnabled(false);

  }


  return (
<Card className="w-full md:w-full h-full flex flex-col">
  <CardHeader>
    <div className="flex items-center w-full gap-4">
        <Button
          disabled={!browseImagesEnabled}
          onClick={browseImagesForImport}
        >
          <FontAwesomeIcon
            icon={faFileImage}
            style={{ marginRight: "5px", marginTop: "0px" }}
          />
          {currentFileKey !== "" ? currentFileKey : "Browse"}
        </Button>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button variant={"secondary"}
                disabled={!browseImagesEnabled}
                onClick={browseToSetProcessingFolder}
              >
                <FontAwesomeIcon
                  icon={faFolder}
                  style={{ marginRight: "5px", marginTop: "0px" }}
                />
                {processingDir !== "" ? getReducedProcessingDir(processingDir) : "Processing Directory"}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                Set the directory where processing files are stored. <br/> 
                If no directory is set processing files are stored in the same directory as the imported images.<br/> 
                Current directory: {processingDir === "" ? "None"  : processingDir}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      <div className="ml-auto">
        <a
          href="src/assets/documentation/_build/html/docs/importing_data.html"
          target="_blank"
        >
          <Button variant={"secondary"}>
            <FontAwesomeIcon
              icon={faFileText}
              style={{ marginRight: "5px", marginTop: "0px" }}
            />
            Documentation
          </Button>
        </a>
      </div>
    </div>
    <div className="space-y-1">
      <Label>Advanced Options</Label>
      <Input
        onChange={(e) => setAdvancedOptions(e.target.value)}
        placeholder="See Documentation for full list of options"
      />
    </div>
  </CardHeader>

  <CardContent className="flex-1 flex flex-col overflow-y-hidden">
    <Card
      className={
        status === Status.Loading ? "flex-1 flex flex-col overflow-y-hidden custom-scrollbar border border-white" :
        status === Status.Default ? "flex-1 flex flex-col overflow-y-hidden custom-scrollbar border" : "flex-1 flex flex-col overflow-y-scroll custom-scrollbar border border-red-500"
      }
    >
      <CardHeader>
        <CardDescription>DIALS Output</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-scroll">
        {status === Status.Loading ? (
          <div
            style={{ opacity: 0.5 }}
            dangerouslySetInnerHTML={{ __html: log }}
          />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: log }} />
        )}
      </CardContent>
    </Card>
  </CardContent>

  <CardFooter />
</Card>


  )
}
