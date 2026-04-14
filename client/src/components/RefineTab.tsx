
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
import { MouseEvent, useRef, useEffect } from "react"
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
import { faPlay, faStop, faFileText, faFloppyDisk, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { useRefineContext } from "@/contexts/RefineContext"
import { useRootContext } from "@/contexts/RootContext"
import { Status } from "@/types"
import { advancedOptionsToPhil } from "@/utils"

export function RefineTab(){

  const {
    serverWS
  } = useRootContext();

  const {
    status,
    setStatus,
    log,
    setLog,
    optimizePanelsSeparately,
    setOptimizePanelsSeparately,
    outlierAlgorithm,
    setOutlierAlgorithm,
    beamFix,
    setBeamFix,
    crystalFix,
    setCrystalFix,
    detectorFix,
    setDetectorFix,
    goniometerFix,
    setGoniometerFix,
    advancedOptions,
    setAdvancedOptions,
  } = useRefineContext();

  const cardContentRef = useRef<HTMLDivElement | null>(null);

  function getAlgorithmOptions(): Record<string, string> {
    const args: Record<string, string> = {
      "refinement.parameterisation.beam.fix": beamFix,
      "refinement.parameterisation.crystal.fix": crystalFix,
      "refinement.parameterisation.detector.fix": detectorFix,
      "refinement.parameterisation.goniometer.fix": goniometerFix,
      "refinement.reflections.outlier.algorithm": outlierAlgorithm,
      "detector.hierarchy_level": optimizePanelsSeparately ? "1" : "0",
    };

    advancedOptions.split(" ").forEach((pair) => {
      const [key, value] = pair.split("=");
      if (key !== "" && value !== undefined) {
        args[key] = value;
      }
    });

    return args;
  }

  const buildPhilContent = (): string => {
    const advPhil = advancedOptionsToPhil(advancedOptions);
    return [
      "refinement {",
      "  parameterisation {",
      "    beam {",
      `      fix = ${beamFix}`,
      "    }",
      "    crystal {",
      `      fix = ${crystalFix}`,
      "    }",
      "    detector {",
      `      fix = ${detectorFix}`,
      "    }",
      "    goniometer {",
      `      fix = ${goniometerFix}`,
      "    }",
      "  }",
      "  reflections {",
      "    outlier {",
      `      algorithm = ${outlierAlgorithm}`,
      "    }",
      "  }",
      "}",
      "detector {",
      `  hierarchy_level = ${optimizePanelsSeparately ? "1" : "0"}`,
      "}",
    ].join("\n") + advPhil;
  };

  const refine = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setStatus(Status.Loading);
    setLog("");
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "dials.refine",
      "args": getAlgorithmOptions(),
    }));
  };

  const cancelRefine = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "cancel_active_task",
    }));
  };

  const savePhil = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "save_refine_phil",
      "content": buildPhilContent(),
    }));
  };

  const loadPhil = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "load_refine_phil",
    }));
  };

  useEffect(() => {
    const cardContentElement = cardContentRef.current;
    if (cardContentElement) {
      cardContentElement.scrollTop = cardContentElement.scrollHeight;
    }
  }, [log]);

	return (
        <Card className="h-full flex flex-col">
          <CardHeader>
            <div className="grid grid-cols-6 gap-4">
              <div className="col-start-1 col-end-2 ...">
                { status !== Status.Loading? (
                <Button onClick={refine}><FontAwesomeIcon icon={faPlay} style={{ marginRight: '5px', marginTop:"0px"}}/>Run </Button>
                ) : (
                <Button onClick={cancelRefine}><FontAwesomeIcon icon={faStop} style={{ marginRight: '5px', marginTop:"0px"}}/>Stop </Button>
                )
                }
              </div>
              <div className="col-start-2 col-end-7 ...">
              </div>
              <div className="col-end-8 col-span-1 flex gap-2 justify-end">
                <Button variant={"secondary"} onClick={savePhil}><FontAwesomeIcon icon={faFloppyDisk} style={{ marginRight: '5px', marginTop:"0px"}}/>Save</Button>
                <Button variant={"secondary"} onClick={loadPhil}><FontAwesomeIcon icon={faFolderOpen} style={{ marginRight: '5px', marginTop:"0px"}}/>Load</Button>
                <a href="src/assets/documentation/_build/html/docs/refinement.html" target="_blank">
                  <Button variant={"secondary"}><FontAwesomeIcon icon={faFileText} style={{ marginRight: '5px', marginTop:"0px"}}/>Documentation </Button>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <Label>Outlier Algorithm</Label>
                <Select value={outlierAlgorithm} onValueChange={setOutlierAlgorithm}>
                  <SelectTrigger >
                  <SelectValue placeholder="auto" />
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
              <div style={{}}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex flex-col gap-1">
                      <Label> Optimize Panels Separately</Label>
                  <Switch onCheckedChange={setOptimizePanelsSeparately} id="optimize_panels_separately" checked={optimizePanelsSeparately} style={{marginTop:10}}/>
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
              <RefineFixedParams
                beamFix={beamFix}
                crystalFix={crystalFix}
                detectorFix={detectorFix}
                goniometerFix={goniometerFix}
                onBeamFixChange={setBeamFix}
                onCrystalFixChange={setCrystalFix}
                onDetectorFixChange={setDetectorFix}
                onGoniometerFixChange={setGoniometerFix}
              />
              <div style={{marginTop:5}}></div>
              <Label>Advanced Options</Label>
              <Input value={advancedOptions} onChange={(e) => setAdvancedOptions(e.target.value)} placeholder="See Documentation for full list of options" />
            </div>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col overflow-hidden">
            <Card className={status === Status.Loading ? "flex-1 flex flex-col overflow-hidden border border-white" : status === Status.Default ? "flex-1 flex flex-col overflow-hidden":"flex-1 flex flex-col overflow-hidden border border-red-500" } ref={cardContentRef}>
            <CardHeader>
              <CardDescription>
                DIALS Output
              </CardDescription>
            </CardHeader>
            <CardContent className="overflow-x-hidden">
              {status === Status.Loading ?
              <div style={{opacity:0.5, overflowX: "hidden"}} dangerouslySetInnerHTML={{__html:log}} />
            :
              <div style={{overflowX: "hidden"}} dangerouslySetInnerHTML={{__html:log}} />
            }

            </CardContent>
          </Card>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
	)
}
