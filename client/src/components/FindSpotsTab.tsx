import { serverMessage } from "@/lib/protocol";
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
import { MouseEvent, useRef, useEffect, useState } from "react"
import { Slider } from "@/components/ui/slider"
import { FindSpotsDispersionInputParams, FindSpotsRadialProfileInputParams } from "./FindSpotsInputParams"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faStop, faFileText, faFloppyDisk, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { useFindSpotsContext } from "@/contexts/FindSpotsContext"
import { useIndexContext } from "@/contexts/IndexContext"
import { useRefineContext } from "@/contexts/RefineContext"
import { useIntegrateContext } from "@/contexts/IntegrateContext"
import { useRootContext } from "@/contexts/RootContext"
import { Status } from "../types"
import { advancedOptionsToPhil } from "@/utils"
import { PHIL_FILTERS, withSelectedPaths, withSelectedSavePath } from "@/lib/electron"
import { AlgorithmResetWarning } from "@/components/AlgorithmResetWarning"
import { ALGORITHM_SUCCESSORS } from "@/constants/algorithmSuccessors"



export function FindSpotsTab(){

  const {
    serverWS,
    stepPayload
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
    minWavelength,
    maxWavelength,
    currentMinWavelength,
    currentMaxWavelength,
    setCurrentMinWavelength,
    setCurrentMaxWavelength,
    displayUnit,
    setDisplayUnit,
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

  const { log: indexLog, reset: resetIndex } = useIndexContext();
  const { log: refineLog, reset: resetRefine } = useRefineContext();
  const { log: integrateLog, reset: resetIntegrate } = useIntegrateContext();

  const cardContentRef = useRef<HTMLDivElement | null>(null);
  const [showUpdateImages, setShowUpdateImages] = useState(false);
  const [pendingRun, setPendingRun] = useState(false);
  const pendingRange = useRef<{ values: [number, number]; unit: "tof" | "wavelength" } | null>(null);
  const lastSyncTime = useRef<number>(0);
  const pendingSyncTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const latestSyncValue = useRef<[number, number] | null>(null);

  const unit = displayUnit === "wavelength"
    ? {
        min: minWavelength,
        max: maxWavelength,
        current: [currentMinWavelength, currentMaxWavelength] as [number, number],
        label: "Å",
        setCurrentMin: setCurrentMinWavelength,
        setCurrentMax: setCurrentMaxWavelength,
        rangeKey: "wavelength_range",
        step: 0.01,
      }
    : {
        min: minTOF,
        max: maxTOF,
        current: [currentMinTOF, currentMaxTOF] as [number, number],
        label: "μsec",
        setCurrentMin: setCurrentMinTOF,
        setCurrentMax: setCurrentMaxTOF,
        rangeKey: "tof_range",
        step: 1,
      };

  const findSpots = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const successorLogs = [indexLog, refineLog, integrateLog];
    const willReset = ALGORITHM_SUCCESSORS.findSpots.filter((_, i) => !!successorLogs[i]);
    if (willReset.length > 0) {
      setPendingRun(true);
      return;
    }
    doFindSpots();
  };

  const doFindSpots = () => {
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

    const payload: Record<string, unknown> = {
      "args": args,
    };
    if (stepTOF > 0) {
      payload[unit.rangeKey] = unit.current;
    }
    serverWS.current?.send(serverMessage("workflow.run", stepPayload("find_spots", payload)));
  };

  const cancelFindSpots = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    serverWS.current?.send(serverMessage("session.cancel"));
  };

  const buildPhilContent = (): string => {
    const advPhil = advancedOptionsToPhil(advancedOptions);
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
      ].join("\n") + advPhil;
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
    ].join("\n") + advPhil;
  };

  const savePhil = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const payload: Record<string, unknown> = {
      "step": "find_spots",
      "content": buildPhilContent(),
    };
    if (stepTOF > 0) {
      payload[unit.rangeKey] = unit.current;
    }
    serverWS.current?.send(await withSelectedSavePath("workflow.save_params", payload, { title: "Save find_spots Phil file", defaultName: "find_spots.phil", filters: PHIL_FILTERS }));
  };

  const loadPhil = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    serverWS.current?.send(await withSelectedPaths("workflow.load_params", {
      "step": "find_spots"
    }, { title: "Select Phil file", filters: PHIL_FILTERS }));
  };

  function syncTOFRange(minVal: number, maxVal: number){
    const payload: Record<string, unknown> = {};
    if (displayUnit === "wavelength") {
      payload["current_wavelength_min"] = minVal;
      payload["current_wavelength_max"] = maxVal;
    } else {
      payload["current_tof_min"] = minVal;
      payload["current_tof_max"] = maxVal;
    }
    serverWS.current?.send(serverMessage("tof.set_range", payload));
  }

  const SYNC_THROTTLE_MS = 50;

  function throttledSyncTOFRange(minVal: number, maxVal: number){
    latestSyncValue.current = [minVal, maxVal];
    const elapsed = Date.now() - lastSyncTime.current;
    if (elapsed >= SYNC_THROTTLE_MS) {
      lastSyncTime.current = Date.now();
      syncTOFRange(minVal, maxVal);
      return;
    }
    if (pendingSyncTimeout.current === null) {
      pendingSyncTimeout.current = setTimeout(() => {
        pendingSyncTimeout.current = null;
        lastSyncTime.current = Date.now();
        if (latestSyncValue.current !== null) {
          syncTOFRange(latestSyncValue.current[0], latestSyncValue.current[1]);
        }
      }, SYNC_THROTTLE_MS - elapsed);
    }
  }

  function updateTOFRange(value: readonly number[]){
    unit.setCurrentMin(value[0]);
    unit.setCurrentMax(value[1]);
    pendingRange.current = { values: [value[0], value[1]], unit: displayUnit };
    setShowUpdateImages(true);
    if (pendingSyncTimeout.current !== null) {
      clearTimeout(pendingSyncTimeout.current);
      pendingSyncTimeout.current = null;
    }
    latestSyncValue.current = null;
    syncTOFRange(value[0], value[1]);
  }

  function sendTOFRangeUpdate(){
    if (pendingRange.current === null){ return; }
    setUpdateTOFRangeEnabled(false);
    const rangeKey = pendingRange.current.unit === "wavelength" ? "wavelength_range" : "tof_range";
    serverWS.current?.send(serverMessage("viewer.update_images", {
      [rangeKey]: pendingRange.current.values
    }));
    setShowUpdateImages(false);
  }

  useEffect(() => {
    const cardContentElement = cardContentRef.current;
    if (cardContentElement) {
      cardContentElement.scrollTop = cardContentElement.scrollHeight;
    }
  }, [log]);

  useEffect(() => {
    return () => {
      if (pendingSyncTimeout.current !== null) {
        clearTimeout(pendingSyncTimeout.current);
      }
    };
  }, []);

	return (
        <>
        <AlgorithmResetWarning
          open={pendingRun}
          algorithmsThatWillReset={ALGORITHM_SUCCESSORS.findSpots.filter((_, i) => !![indexLog, refineLog, integrateLog][i])}
          onConfirm={() => { resetIndex(); resetRefine(); resetIntegrate(); setPendingRun(false); doFindSpots(); }}
          onCancel={() => setPendingRun(false)}
        />
        <Card className="h-full flex flex-col">
          <CardHeader>
            <div className="flex flex-wrap items-center gap-4">
              <div>
                { status !== Status.Loading ? (
                <Button onClick={findSpots}><FontAwesomeIcon icon={faPlay} style={{ marginRight: '5px', marginTop:"0px"}}/>Run </Button>
                ) : (
                <Button onClick={cancelFindSpots}><FontAwesomeIcon icon={faStop} style={{ marginRight: '5px', marginTop:"0px"}}/>Stop </Button>
                )
                }
                </div>
              <div className="ml-auto flex gap-2">
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
              <div className="col-start-3 col-end-6">
            <div className="flex items-center gap-2">
              <Label>Range: {unit.current[0]}, {unit.current[1]} ({unit.label})</Label>
              { stepTOF > 0 &&
              <Select value={displayUnit} onValueChange={(value) => setDisplayUnit(value as "tof" | "wavelength")}>
                <SelectTrigger className="w-32 h-6">
                <SelectValue />
                </SelectTrigger>
                <SelectContent>
                <SelectGroup>
                  <SelectItem value="tof">ToF</SelectItem>
                  <SelectItem value="wavelength">Wavelength</SelectItem>
                </SelectGroup>
                </SelectContent>
              </Select>
              }
              </div>
                <Slider
                value={unit.current}
                max={unit.max}
                min={unit.min}
                step={unit.step}
                minStepsBetweenThumbs={displayUnit === "wavelength" ? 0 : stepTOF}
                onValueChange={(value) => {
                  unit.setCurrentMin(value[0]);
                  unit.setCurrentMax(value[1]);
                  if (displayUnit === "wavelength") {
                    throttledSyncTOFRange(value[0], value[1]);
                  }
                }}
                onValueCommit={updateTOFRange}
                disabled={!updateTOFRangeEnabled}
                style={{marginTop:"2vh"}}
                ></Slider>
              </div>
              <div className="col-start-6 col-end-7">
                <Label>&nbsp;</Label>
                <Button variant={"secondary"} onClick={sendTOFRangeUpdate} style={{marginTop:"2vh", whiteSpace:"nowrap"}} className={showUpdateImages ? "" : "invisible"}>Update Images</Button>
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
            <Card className={status === Status.Loading ? "flex-1 flex flex-col overflow-y-hidden border border-foreground" : status === Status.Default ? "flex-1 overflow-y-hidden":"flex-1 overflow-y-hidden border border-red-500"} ref={cardContentRef}>
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
        </>
	)
}
