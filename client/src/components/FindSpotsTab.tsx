import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MouseEvent, useRef, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { FindSpotsDispersionInputParams, FindSpotsRadialProfileInputParams } from "./FindSpotsInputParams"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faStop, faFileText, faFloppyDisk, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { useFindSpotsContext } from "@/contexts/FindSpotsContext"
import { useRootContext } from "@/contexts/RootContext"
import { Status } from "../types"



export function FindSpotsTab(){

  const {
    serverWS
  } = useRootContext();

  const {
    log,
    setLog,
    setStatus,
    status,
    maxTOF,
    minTOF,
    stepTOF,
    currentMinTOF,
    currentMaxTOF,
    setCurrentMinTOF,
    setCurrentMaxTOF,
    setAlgorithm,
    algorithm,
    updateTOFRangeEnabled,
    setUpdateTOFRangeEnabled,
    advancedOptions,
    setAdvancedOptions,
    gain,
    sigmaStrong,
    sigmaBackground,
    globalThreshold,
    kernelSize,
    minLocal,
    iQR,
    blur,
    nBins,
  } = useFindSpotsContext();

  const cardContentRef = useRef<HTMLDivElement | null>(null);

  const findSpots = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setStatus(Status.Loading);
    setLog("");

    const args: Record<string, string> = {};

    if (algorithm === "radial_profile") {
      args["threshold.algorithm"] = "radial_profile";
      args["radial_profile.n_iqr"] = iQR || "6";
      args["radial_profile.n_bins"] = nBins || "100";
      if (blur !== "none") {
        args["radial_profile.blur"] = blur;
      }
    } else {
      args["threshold.algorithm"] = algorithm;
      args["gain"] = gain || "1.0";
      args["sigma_strong"] = sigmaStrong || "3.0";
      args["sigma_background"] = sigmaBackground || "6.0";
      args["global_threshold"] = globalThreshold || "0.0";
      args["kernel_size"] = kernelSize || "3,3";
      args["min_local"] = minLocal || "2";
    }

    advancedOptions.split(" ").forEach((pair) => {
      const [key, value] = pair.split("=");
      if (key !== "" && value !== undefined) {
        args[key] = value;
      }
    });

    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "dials.find_spots",
      "args": args
    }));
  };

  const cancelFindSpots = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "cancel_active_task",
    }));
  };

  const buildPhilContent = (): string => {
    if (algorithm === "radial_profile") {
      return [
        "spotfinder {",
        "  threshold {",
        `    algorithm = radial_profile`,
        "    radial_profile {",
        `      n_iqr = ${iQR || "6"}`,
        `      n_bins = ${nBins || "100"}`,
        `      blur = ${blur}`,
        "    }",
        "  }",
        "}",
      ].join("\n");
    }
    return [
      "spotfinder {",
      "  threshold {",
      `    algorithm = ${algorithm}`,
      "    dispersion {",
      `      gain = ${gain || "1.0"}`,
      `      sigma_strong = ${sigmaStrong || "3.0"}`,
      `      sigma_background = ${sigmaBackground || "6.0"}`,
      `      global_threshold = ${globalThreshold || "0.0"}`,
      `      kernel_size = ${kernelSize || "3,3"}`,
      `      min_local = ${minLocal || "2"}`,
      "    }",
      "  }",
      "}",
    ].join("\n");
  };

  const savePhil = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "save_find_spots_phil",
      "content": buildPhilContent(),
    }));
  };

  const loadPhil = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "load_find_spots_phil",
    }));
  };

  function updateTOFRange(value: readonly number[]){
    setCurrentMinTOF(value[0]);
    setCurrentMaxTOF(value[1]);
    setUpdateTOFRangeEnabled(false);
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "update_experiment_images",
      "tof_range": [value[0], value[1]]
    }));
  }

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
                { status !== Status.Loading ? (
                <Button onClick={findSpots}><FontAwesomeIcon icon={faPlay} style={{ marginRight: '5px', marginTop:"0px"}}/>Run </Button>
                ) : (
                <Button onClick={cancelFindSpots}><FontAwesomeIcon icon={faStop} style={{ marginRight: '5px', marginTop:"0px"}}/>Stop </Button>
                )
                }
                </div>
              <div className="col-end-8 col-span-1 flex gap-2 justify-end">
                <Button variant={"secondary"} onClick={savePhil}><FontAwesomeIcon icon={faFloppyDisk} style={{ marginRight: '5px', marginTop:"0px"}}/>Save</Button>
                <Button variant={"secondary"} onClick={loadPhil}><FontAwesomeIcon icon={faFolderOpen} style={{ marginRight: '5px', marginTop:"0px"}}/>Load</Button>
                <a href="src/assets/documentation/_build/html/docs/spot_finding.html" target="_blank">
                  <Button variant={"secondary"}><FontAwesomeIcon icon={faFileText} style={{ marginRight: '5px', marginTop:"0px"}}/>Documentation </Button>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-8">
              <div className="col-start-1 col-end-3">
            <Label>Algorithm</Label>
              <Select onValueChange={setAlgorithm}>
                <SelectTrigger >
                <SelectValue placeholder="dispersion extended" defaultValue={"dispersion_extended"} />
                </SelectTrigger>
                <SelectContent>
                <SelectGroup>
                  <SelectItem value="dispersion_extended">dispersion extended</SelectItem>
                  <SelectItem value="dispersion">dispersion</SelectItem>
                  <SelectItem value="radial_profile">radial profile</SelectItem>
                </SelectGroup>
                </SelectContent>
              </Select>
              </div>
              <div className="col-start-3 col-end-7">
            <Label>ToF Range: {currentMinTOF}, {currentMaxTOF} (μsec)</Label>
                <Slider
                defaultValue={[currentMinTOF, currentMaxTOF]}
                max={maxTOF}
                min={minTOF}
                minStepsBetweenThumbs={stepTOF}
                onValueCommit={updateTOFRange}
                disabled={!updateTOFRangeEnabled}
                style={{
                  marginTop:"2vh"
                }}></Slider>
              </div>
            </div>
            <div hidden={algorithm === "radial_profile"}>
            <FindSpotsDispersionInputParams />
            </div>
            <div hidden={algorithm !== "radial_profile"}>
            <FindSpotsRadialProfileInputParams />
            </div>
            <div >
              <Label>Advanced Options</Label>
              <Input
                value={advancedOptions}
                onChange={(e) => setAdvancedOptions(e.target.value)}
                placeholder="See Documentation for full list of options"
              />
            </div>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col overflow-y-hidden">
            <Card className={status === Status.Loading ? "flex-1 flex flex-col overflow-y-hidden border border-white" : status === Status.Default ? "flex-1 overflow-y-hidden":"flex-1 overflow-y-hidden border border-red-500"} ref={cardContentRef}>
            <CardHeader>
              <CardDescription>
                DIALS Output
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-scroll">
              {status === Status.Loading ?
              <div style={{opacity:0.5}} dangerouslySetInnerHTML={{__html:log}} />
            :
              <div dangerouslySetInnerHTML={{__html:log}} />
            }

            </CardContent>
          </Card>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
	)
}
