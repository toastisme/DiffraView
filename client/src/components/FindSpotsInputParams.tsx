import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function FindSpotsInputParams(
	props:{serverWS: React.MutableRefObject<WebSocket | null>}) {

  const defaultGain: string = "1.0";
  const defaultSigmaStrong: string = "3.0";
  const defaultSigmaBG: string = "6.0";
  const defaultGlobalThreshold: string = "0.0";
  const defaultKernelSize: string = "3,3";
  const defaultMinLocal: string = "2";

  var lastSentPlaceholder: boolean = false;

  function updateKernelSize(event: any):void{

    function containsTwoIntegersSeparatedByComma(input: string): boolean {
      const regex = /^\d+,\d+$/;
      return regex.test(input);
    }

    // Remove non-digit characters (except for commas)
    var cleanedInput = event.target.value.replace(/[^0-9,]/g, '');

    // Ensure there is at most one comma
    const commaCount = (cleanedInput.match(/,/g) || []).length;
    
    if (commaCount > 1) {
      const firstCommaIndex = cleanedInput.indexOf(',');
      const lastCommaIndex = cleanedInput.lastIndexOf(',');
      // Keep only the first two integers and the first comma
      cleanedInput = cleanedInput.substring(0, firstCommaIndex + 1) + cleanedInput.substring(firstCommaIndex + 1, lastCommaIndex);
    }

    event.target.value=cleanedInput;
    if (cleanedInput == "" && !lastSentPlaceholder){
      cleanedInput = defaultKernelSize; 
      lastSentPlaceholder=true;
    }
    if (containsTwoIntegersSeparatedByComma(cleanedInput)){

      console.log("valid input");
      console.log(containsTwoIntegersSeparatedByComma(defaultKernelSize))
      if (cleanedInput != defaultKernelSize){
        lastSentPlaceholder=false;
      }

      props.serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "dials.update_algorithm_arg", 
      "algorithm_type" : "dials.find_spots",
      "param_name" : "kernel_size",
      "param_value" : cleanedInput
      }));
    }
  }


  function updateFindSpotsAlgorithm(event:any, name: string, placeholder: string): void{
    event.target.value = event.target.value.replace(/[^0-9]/g, "");
    var value: string = event.target.value;

    if (value == ""){
      value = placeholder;
      lastSentPlaceholder=true;
    }

    if (value != placeholder){
      lastSentPlaceholder=false;
    }

    props.serverWS.current?.send(JSON.stringify({
    "channel": "server",
    "command": "dials.update_algorithm_arg", 
    "algorithm_type" : "dials.find_spots",
    "param_name" : name,
    "param_value" : value
    }));
  }

  return (
            <div className="grid grid-cols-20 gap-8 ">
                <div className="col-start-1 col-end-2">
                  <Label> Gain </Label>
                  <Input  placeholder={defaultGain} 
                  onChange={(event)=>updateFindSpotsAlgorithm(event, "gain", defaultGain)} 
                  />
                </div>
                <div className="col-start-2 col-end-3">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Label> σ<sub> strong</sub> </Label>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>The number of standard deviations above the mean in the local
                          area above which the pixel will be classified as strong</p>
                      </TooltipContent>
                    </Tooltip>
                    <Input
                      placeholder={defaultSigmaStrong}
                      onChange={(event) =>
                        updateFindSpotsAlgorithm(event, "sigma_strong", defaultSigmaStrong)
                      }
                    />
                  </TooltipProvider>
                </div>
                <div className="col-start-3 col-end-4">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Label> σ<sub> bg</sub> </Label>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>The number of standard deviations of the index of dispersion
                            in the local area below which the pixel 
                            will be classified as background</p>
                      </TooltipContent>
                    </Tooltip>
                  <Input placeholder={defaultSigmaBG}
                  onChange={(event)=>updateFindSpotsAlgorithm(event, "sigma_background", defaultSigmaBG)} 
                   />
                  </TooltipProvider>
                </div>
                <div className="col-start-4 col-end-6">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Label> Global Threshlold </Label>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p> All pixels less than this value considered background </p>
                      </TooltipContent>
                    </Tooltip>
                  <Input placeholder={defaultGlobalThreshold}
                  onChange={(event)=>updateFindSpotsAlgorithm(event, "global_threshold", defaultGlobalThreshold)} 
                   />
                  </TooltipProvider>
                </div>
                <div className="col-start-6 col-end-8">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Label> Kernel Size </Label>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p> The local area around the pixel to calculate dispersion</p>
                      </TooltipContent>
                    </Tooltip>
                  <Input placeholder={defaultKernelSize}
                  onChange={(event)=>updateKernelSize(event)} 
                  />
                  </TooltipProvider>
                </div>
                <div className="col-start-8 col-end-10">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Label> Min Local </Label>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p> The minimum number of pixels used under the kernel</p>
                      </TooltipContent>
                    </Tooltip>
                  <Input placeholder={defaultMinLocal}
                  onChange={(event)=>updateFindSpotsAlgorithm(event, "min_local", defaultMinLocal)} 
                   />
                  </TooltipProvider>
                </div>
            </div>
  )
  }