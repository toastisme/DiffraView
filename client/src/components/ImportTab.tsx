
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
import { faFileText } from '@fortawesome/free-solid-svg-icons';
import { faFileImage } from '@fortawesome/free-solid-svg-icons';
import { useImportContext } from "@/contexts/ImportContext";
import { useRootContext } from "@/contexts/RootContext"
import { Status } from "../types"

export function ImportTab() {

  const { serverWS, currentFileKey } = useRootContext();
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

  return (
<Card className="w-full md:w-full h-full flex flex-col">
  <CardHeader>
    <div className="grid grid-cols-6 gap-4">
      <div className="col-start-1 col-span-3">
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
      </div>
      <div className="col-end-8 col-span-1">
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

  <CardContent className="flex-1 flex flex-col">
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
