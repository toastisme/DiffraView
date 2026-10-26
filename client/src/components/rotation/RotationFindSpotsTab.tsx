import { serverMessage } from "@/lib/protocol";
import {
  Card,
  CardContent,
  CardDescription,
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
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { MouseEvent, useRef, useEffect, useState } from "react"
import { RotationFindSpotsDispersionInputParams, RotationFindSpotsRadialProfileInputParams } from "@/components/rotation/RotationFindSpotsInputParams"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faStop, faFileText, faFloppyDisk, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { useRotationFindSpotsContext } from "@/contexts/rotation/RotationFindSpotsContext"
import { useRotationIndexContext } from "@/contexts/rotation/RotationIndexContext"
import { useRotationRefineContext } from "@/contexts/rotation/RotationRefineContext"
import { useRotationIntegrateContext } from "@/contexts/rotation/RotationIntegrateContext"
import { useRotationScaleContext } from "@/contexts/rotation/RotationScaleContext"
import { useRootContext } from "@/contexts/RootContext"
import { useExperimentViewerContext } from "@/contexts/ExperimentViewerContext"
import { Status } from "@/types"
import { advancedOptionsPhil, withAdvancedOptions } from "@/utils"
import { AdvancedOptionsSearch } from "@/components/AdvancedOptionsSearch"
import { PHIL_FILTERS, withSelectedPaths, withSelectedSavePath } from "@/lib/electron"
import { AlgorithmResetWarning } from "@/components/AlgorithmResetWarning"
import { ALGORITHM_SUCCESSORS } from "@/constants/algorithmSuccessors"

// Find spots for rotation data: no ToF range, all images are searched
export function RotationFindSpotsTab() {

  const { serverWS, stepPayload } = useRootContext();

  const findSpotsState = useRotationFindSpotsContext();
  const {
    log,
    setLog,
    enabled,
    status,
    setStatus,
    algorithm,
    setAlgorithm,
    numImages,
    advancedOptions,
    setAdvancedOptions,
    advancedDefinitions,
    useMask,
    setUseMask,
    gain,
    sigmaStrong,
    sigmaBackground,
    globalThreshold,
    kernelSize,
    minLocal,
    iQR,
    blur,
    nBins,
  } = findSpotsState;

  const { maskStored } = useExperimentViewerContext();
  const { log: indexLog, reset: resetIndex } = useRotationIndexContext();
  const { log: refineLog, reset: resetRefine } = useRotationRefineContext();
  const { log: integrateLog, reset: resetIntegrate } = useRotationIntegrateContext();
  const { log: scaleLog, reset: resetScale } = useRotationScaleContext();

  const cardContentRef = useRef<HTMLDivElement | null>(null);
  const [pendingRun, setPendingRun] = useState(false);
  const successorLogs = [indexLog, refineLog, integrateLog, scaleLog];
  const willReset = [...ALGORITHM_SUCCESSORS.findSpots, "Scale"].filter((_, i) => !!successorLogs[i]);

  const findSpots = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (willReset.length > 0) {
      setPendingRun(true);
      return;
    }
    doFindSpots();
  };

  const doFindSpots = () => {
    setStatus(Status.Loading);
    setLog("");

    const args: Record<string, string> = { "threshold.algorithm": algorithm };
    if (algorithm === "radial_profile") {
      args["radial_profile.n_iqr"] = iQR || "6";
      args["radial_profile.n_bins"] = nBins || "100";
      if (blur !== "none") {
        args["radial_profile.blur"] = blur;
      }
    } else {
      args["gain"] = gain || "1.0";
      args["sigma_strong"] = sigmaStrong || "3.0";
      args["sigma_background"] = sigmaBackground || "6.0";
      args["global_threshold"] = globalThreshold || "0.0";
      args["kernel_size"] = kernelSize || "3,3";
      args["min_local"] = minLocal || "2";
    }


    serverWS.current?.send(serverMessage("workflow.run", stepPayload("find_spots", { "args": withAdvancedOptions(args, advancedOptions), "use_mask": maskStored && useMask })));
  };

  const cancelFindSpots = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    serverWS.current?.send(serverMessage("session.cancel"));
  };

  const buildPhilContent = (): string => {
    const threshold = algorithm === "radial_profile"
      ? [
          "    radial_profile {",
          `      n_iqr = ${iQR || "6"}`,
          `      n_bins = ${nBins || "100"}`,
          `      blur = ${blur}`,
          "    }",
        ]
      : [
          "    dispersion {",
          `      gain = ${gain || "1.0"}`,
          `      sigma_strong = ${sigmaStrong || "3.0"}`,
          `      sigma_background = ${sigmaBackground || "6.0"}`,
          `      global_threshold = ${globalThreshold || "0.0"}`,
          `      kernel_size = ${kernelSize || "3,3"}`,
          `      min_local = ${minLocal || "2"}`,
          "    }",
        ];
    return [
      "spotfinder {",
      "  threshold {",
      `    algorithm = ${algorithm}`,
      ...threshold,
      "  }",
      "}",
    ].join("\n") + advancedOptionsPhil(advancedOptions);
  };

  const savePhil = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    serverWS.current?.send(await withSelectedSavePath("workflow.save_params", {
      "step": "find_spots",
      "content": buildPhilContent(),
    }, { title: "Save find_spots Phil file", defaultName: "find_spots.phil", filters: PHIL_FILTERS }));
  };

  const loadPhil = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    serverWS.current?.send(await withSelectedPaths("workflow.load_params", {
      "step": "find_spots"
    }, { title: "Select Phil file", filters: PHIL_FILTERS }));
  };

  useEffect(() => {
    const cardContentElement = cardContentRef.current;
    if (cardContentElement) {
      cardContentElement.scrollTop = cardContentElement.scrollHeight;
    }
  }, [log]);

  const maxImageIdx = Math.max(numImages - 1, 0);

  return (
    <>
    <AlgorithmResetWarning
      open={pendingRun}
      algorithmsThatWillReset={willReset}
      onConfirm={() => { resetIndex(); resetRefine(); resetIntegrate(); resetScale(); setPendingRun(false); doFindSpots(); }}
      onCancel={() => setPendingRun(false)}
    />
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex flex-wrap items-center gap-4">
          <div>
            {status !== Status.Loading ? (
              <Button onClick={findSpots}><FontAwesomeIcon icon={faPlay} style={{ marginRight: '5px', marginTop: "0px" }} />Run </Button>
            ) : (
              <Button onClick={cancelFindSpots}><FontAwesomeIcon icon={faStop} style={{ marginRight: '5px', marginTop: "0px" }} />Stop </Button>
            )}
          </div>
          <div className="ml-auto flex gap-2">
            <Button variant={"secondary"} onClick={savePhil}><FontAwesomeIcon icon={faFloppyDisk} style={{ marginRight: '5px', marginTop: "0px" }} />Save</Button>
            <Button variant={"secondary"} onClick={loadPhil}><FontAwesomeIcon icon={faFolderOpen} style={{ marginRight: '5px', marginTop: "0px" }} />Load</Button>
            <a href="src/assets/documentation/_build/html/docs/spot_finding.html" target="_blank">
              <Button variant={"secondary"}><FontAwesomeIcon icon={faFileText} style={{ marginRight: '5px', marginTop: "0px" }} />Documentation </Button>
            </a>
          </div>
        </div>
        <div className="w-1/3">
          <Label>Algorithm</Label>
          <Select value={algorithm} onValueChange={setAlgorithm}>
            <SelectTrigger>
              <SelectValue />
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
        <div hidden={algorithm === "radial_profile"}>
          <RotationFindSpotsDispersionInputParams params={findSpotsState} maxImageIdx={maxImageIdx} />
        </div>
        <div hidden={algorithm !== "radial_profile"}>
          <RotationFindSpotsRadialProfileInputParams params={findSpotsState} maxImageIdx={maxImageIdx} />
        </div>
        {maskStored && (
          <div className="flex items-center gap-2">
            <Switch id="rotation_use_mask" checked={useMask} onCheckedChange={setUseMask} />
            <Label htmlFor="rotation_use_mask">Use Mask</Label>
          </div>
        )}
        <AdvancedOptionsSearch
          step="find_spots"
          enabled={enabled}
          definitions={advancedDefinitions}
          options={advancedOptions}
          onChange={setAdvancedOptions}
        />
      </CardHeader>
      <CardContent className="flex-1 flex flex-col overflow-y-hidden">
        <Card className={status === Status.Loading ? "flex-1 flex flex-col overflow-y-hidden border border-foreground" : status === Status.Default ? "flex-1 overflow-y-hidden" : "flex-1 overflow-y-hidden border border-red-500"} ref={cardContentRef}>
          <CardHeader>
            <CardDescription>
              DIALS Output
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-scroll">
            <div style={{ opacity: status === Status.Loading ? 0.5 : 1 }} dangerouslySetInnerHTML={{ __html: log }} />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
    </>
  )
}
