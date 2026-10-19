import { serverMessage } from "@/lib/protocol";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MouseEvent, useRef, useEffect, useState } from "react"
import { RotationFixOption, RotationRefineFixedParams } from "@/components/rotation/RotationRefineFixedParams"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faStop, faFileText, faFloppyDisk, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { useRotationRefineContext } from "@/contexts/rotation/RotationRefineContext"
import { useRotationIntegrateContext } from "@/contexts/rotation/RotationIntegrateContext"
import { useRootContext } from "@/contexts/RootContext"
import { Status } from "@/types"
import { advancedOptionsToPhil } from "@/utils"
import { PHIL_FILTERS, withSelectedPaths, withSelectedSavePath } from "@/lib/electron"
import { AlgorithmResetWarning } from "@/components/AlgorithmResetWarning"
import { ALGORITHM_SUCCESSORS } from "@/constants/algorithmSuccessors"

// Monochromatic beam: the wavelength is normally kept fixed
const BEAM_OPTIONS: RotationFixOption[] = [
  { value: "none", label: "none" },
  { value: "all", label: "all" },
  { value: "in_spindle_plane+wavelength", label: "in spindle plane, wavelength" },
  { value: "wavelength", label: "wavelength" },
];

// Refine for rotation data: no per-panel detector refinement
export function RotationRefineTab() {

  const { serverWS, stepPayload } = useRootContext();

  const {
    status,
    setStatus,
    log,
    setLog,
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
  } = useRotationRefineContext();

  const { log: integrateLog, reset: resetIntegrate } = useRotationIntegrateContext();

  const cardContentRef = useRef<HTMLDivElement | null>(null);
  const [pendingRun, setPendingRun] = useState(false);

  function getAlgorithmOptions(): Record<string, string> {
    const args: Record<string, string> = {
      "refinement.parameterisation.beam.fix": beamFix,
      "refinement.parameterisation.crystal.fix": crystalFix,
      "refinement.parameterisation.detector.fix": detectorFix,
      "refinement.parameterisation.goniometer.fix": goniometerFix,
      "refinement.reflections.outlier.algorithm": outlierAlgorithm,
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
    ].join("\n") + advancedOptionsToPhil(advancedOptions);
  };

  const refine = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (integrateLog) {
      setPendingRun(true);
      return;
    }
    doRefine();
  };

  const doRefine = () => {
    setStatus(Status.Loading);
    setLog("");
    serverWS.current?.send(serverMessage("workflow.run", stepPayload("refine", {
      "args": getAlgorithmOptions()
    })));
  };

  const cancelRefine = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    serverWS.current?.send(serverMessage("session.cancel"));
  };

  const savePhil = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    serverWS.current?.send(await withSelectedSavePath("workflow.save_params", {
      "step": "refine",
      "content": buildPhilContent()
    }, { title: "Save refine Phil file", defaultName: "refine.phil", filters: PHIL_FILTERS }));
  };

  const loadPhil = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    serverWS.current?.send(await withSelectedPaths("workflow.load_params", {
      "step": "refine"
    }, { title: "Select Phil file", filters: PHIL_FILTERS }));
  };

  useEffect(() => {
    const cardContentElement = cardContentRef.current;
    if (cardContentElement) {
      cardContentElement.scrollTop = cardContentElement.scrollHeight;
    }
  }, [log]);

  return (
    <>
    <AlgorithmResetWarning
      open={pendingRun}
      algorithmsThatWillReset={ALGORITHM_SUCCESSORS.refine}
      onConfirm={() => { resetIntegrate(); setPendingRun(false); doRefine(); }}
      onCancel={() => setPendingRun(false)}
    />
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex flex-wrap items-center gap-4">
          <div>
            {status !== Status.Loading ? (
              <Button onClick={refine}><FontAwesomeIcon icon={faPlay} style={{ marginRight: '5px', marginTop: "0px" }} />Run </Button>
            ) : (
              <Button onClick={cancelRefine}><FontAwesomeIcon icon={faStop} style={{ marginRight: '5px', marginTop: "0px" }} />Stop </Button>
            )}
          </div>
          <div className="ml-auto flex gap-2">
            <Button variant={"secondary"} onClick={savePhil}><FontAwesomeIcon icon={faFloppyDisk} style={{ marginRight: '5px', marginTop: "0px" }} />Save</Button>
            <Button variant={"secondary"} onClick={loadPhil}><FontAwesomeIcon icon={faFolderOpen} style={{ marginRight: '5px', marginTop: "0px" }} />Load</Button>
            <a href="src/assets/documentation/_build/html/docs/refinement.html" target="_blank">
              <Button variant={"secondary"}><FontAwesomeIcon icon={faFileText} style={{ marginRight: '5px', marginTop: "0px" }} />Documentation </Button>
            </a>
          </div>
        </div>
        <div className="w-1/2 pr-4">
          <Label>Outlier Algorithm</Label>
          <Select value={outlierAlgorithm} onValueChange={setOutlierAlgorithm}>
            <SelectTrigger>
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
        <div style={{ marginTop: 5 }}>
          <RotationRefineFixedParams
            beamOptions={BEAM_OPTIONS}
            beamFix={beamFix}
            crystalFix={crystalFix}
            detectorFix={detectorFix}
            goniometerFix={goniometerFix}
            onBeamFixChange={setBeamFix}
            onCrystalFixChange={setCrystalFix}
            onDetectorFixChange={setDetectorFix}
            onGoniometerFixChange={setGoniometerFix}
          />
          <div style={{ marginTop: 5 }}></div>
          <Label>Advanced Options</Label>
          <Input value={advancedOptions} onChange={(e) => setAdvancedOptions(e.target.value)} placeholder="See Documentation for full list of options" />
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col overflow-hidden">
        <Card className={status === Status.Loading ? "flex-1 flex flex-col overflow-hidden border border-foreground" : status === Status.Default ? "flex-1 flex flex-col overflow-hidden" : "flex-1 flex flex-col overflow-hidden border border-red-500"} ref={cardContentRef}>
          <CardHeader>
            <CardDescription>
              DIALS Output
            </CardDescription>
          </CardHeader>
          <CardContent className="overflow-x-hidden">
            <div style={{ opacity: status === Status.Loading ? 0.5 : 1, overflowX: "hidden" }} dangerouslySetInnerHTML={{ __html: log }} />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
    </>
  )
}
