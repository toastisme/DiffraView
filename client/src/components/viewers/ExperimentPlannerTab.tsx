import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ProgressTabTrigger } from "@/components/ui/ProgressTabTrigger"
import { TabLoadingIndicator } from "@/components/ui/TabLoadingIndicator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAreaChart, faLock, faPencil, faPlusSquare, faRepeat, faTrash } from "@fortawesome/free-solid-svg-icons"
import { PlannerBarChart } from "../PlannerBarChart"
import { PlannerScanLineChart } from "../PlannerScanLineChart"
import { useExperimentPlannerContext } from "@/contexts/ExperimentPlannerContext"
import { useRootContext } from "@/contexts/RootContext"
import { Status } from "@/types"
import { isNumber } from "@/utils"
import { viewerUrl } from "@/lib/server"
import { serverMessage } from "@/lib/protocol"
import { useSyncHidden } from "./useSyncHidden"

export function ExperimentPlannerTrigger() {
  const { serverWS } = useRootContext();
  const { status, progress, enabled } = useExperimentPlannerContext();
  return (
    <ProgressTabTrigger
      progress={progress}
      className={status === Status.Loading ? "border border-foreground flex-1" : "flex-1"}
      value="experiment_planner"
      disabled={!enabled}>
      <TabLoadingIndicator
        loading={status === Status.Loading}
        onCancel={() => serverWS.current?.send(serverMessage("session.cancel"))} />
      <FontAwesomeIcon icon={faPencil} style={{ marginRight: '5px', marginTop: "0px" }} />
      Experiment Planner
    </ProgressTabTrigger>
  );
}

export function ExperimentPlannerPanel() {
  const { serverWS, activeStateTab } = useRootContext();
  const {
    setHidden,
    status,
    orientations,
    setOrientations,
    predReflections,
    setPredReflections,
    dmin,
    setDmin,
    setNumStoredOrientations,
    numStoredOrientations,
    scanResults,
  } = useExperimentPlannerContext();
  useSyncHidden("experiment_planner", setHidden);

  const [dminValid, setDminValid] = useState<boolean>(true);
  const [scanPhiMin, setScanPhiMin] = useState<string>("");
  const [scanPhiMax, setScanPhiMax] = useState<string>("");
  const [scanPhiStep, setScanPhiStep] = useState<string>("");
  const [showScanPlot, setShowScanPlot] = useState<boolean>(false);
  const [storeFlash, setStoreFlash] = useState<boolean>(false);
  const storeFlashTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (scanResults.length === 0) setShowScanPlot(false);
  }, [scanResults]);

  // The server needs the current dmin when the planner is opened
  useEffect(() => {
    if (activeStateTab === "experiment_planner") {
      updateDmin(dmin.valueOf());
    }
  }, [activeStateTab]);

  function showNextBestOrientation() {
    serverWS.current?.send(serverMessage("planner.next_best_orientation", {
      "orientations": orientations,
      "dmin": dmin,
      "scan_phi_min": scanPhiMin === "" ? 0 : parseFloat(scanPhiMin),
      "scan_phi_max": scanPhiMax === "" ? 360 : parseFloat(scanPhiMax),
      "scan_phi_step": scanPhiStep === "" ? 5 : parseFloat(scanPhiStep)
    }));
  }

  function storeReflections() {
    const hasNew = orientations.length > numStoredOrientations;
    setNumStoredOrientations(orientations.length);
    serverWS.current?.send(serverMessage("planner.store", {
      "orientations": orientations,
      "num_reflections": predReflections
    }));
    if (hasNew) {
      setStoreFlash(true);
      if (storeFlashTimeout.current) clearTimeout(storeFlashTimeout.current);
      storeFlashTimeout.current = setTimeout(() => setStoreFlash(false), 600);
    }
  }

  function clearReflections() {
    serverWS.current?.send(serverMessage("planner.clear"));
    setOrientations([]);
    setPredReflections([]);
    setNumStoredOrientations(0);
  }

  function recalculateReflections() {
    serverWS.current?.send(serverMessage("planner.recalculate", { "dmin": dmin }));
    setOrientations([]);
    setPredReflections([]);
    setNumStoredOrientations(0);
  }

  function updateDmin(val: string | number) {
    if (typeof val !== "string") {
      setDmin(val);
      serverWS.current?.send(serverMessage("planner.set_dmin", { "dmin": val }));
      return;
    }
    const cleanedInput = val.replace(" ", "");
    setDminValid(isNumber(cleanedInput) || cleanedInput === "");
    if (isNumber(cleanedInput)) {
      setDmin(parseFloat(cleanedInput));
    }
    serverWS.current?.send(serverMessage("planner.set_dmin", { "dmin": cleanedInput }));
  }

  return (
    <Card className={"dark " + (status === Status.Loading ? "h-full w-full border-foreground overflow-hidden" : "h-full w-full overflow-hidden")}>
      {/* The viewer takes whatever height the controls and charts leave, and the
          panel scrolls if the window is too short to fit them all. */}
      <CardContent className="h-full flex flex-col min-h-0 overflow-y-auto overflow-x-hidden">
        <iframe src={viewerUrl("src/assets/ExperimentPlanner/ExperimentPlannerHeadless.html")} className="w-full flex-1 min-h-[30vh]">
        </iframe>
        <div className="flex flex-col gap-1 shrink-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Button disabled={status === Status.Loading} onClick={recalculateReflections}
                variant={"outline"} style={{ margin: "0px 0px 5px 5px", padding: "0px 6px" }}>
                <FontAwesomeIcon icon={faRepeat} style={{ marginRight: '5px', marginTop: "-2px" }} />Observed</Button>
              <Button disabled={status === Status.Loading}
                onClick={storeReflections}
                variant={"outline"} style={{ margin: "0px 0px 5px 5px", padding: "0px 6px", transition: "border-color 0.15s, color 0.15s", ...(storeFlash ? { borderColor: '#ffffff', color: '#ffffff' } : {}) }}
              ><FontAwesomeIcon icon={faLock} style={{ marginRight: '5px', marginTop: "-2px" }} /> Store</Button>
              <Button disabled={status === Status.Loading} onClick={clearReflections}
                variant={"outline"} style={{ margin: "0px 0px 5px 5px", padding: "0px 6px" }}>
                <FontAwesomeIcon icon={faTrash} style={{ marginRight: '5px', marginTop: "-2px" }} />Clear</Button>
            </div>
            <div className="ml-auto flex items-center space-x-2">
              <Label>dmin</Label>
              <Input
                value={dmin.toString()}
                onChange={(event) => updateDmin(event.target.value)}
                style={{ borderColor: dminValid ? "" : "red" }}
                className="w-20"/>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button disabled={status === Status.Loading} onClick={showNextBestOrientation}
              variant={"outline"} style={{ margin: "0px 0px 5px 5px", padding: "0px 6px" }}>
              <FontAwesomeIcon icon={faPlusSquare} style={{ marginRight: '5px', marginTop: "-2px" }} />Run Scan</Button>
            <Button onClick={() => setShowScanPlot(p => !p)}
              disabled={scanResults.length === 0}
              variant={"outline"} style={{ margin: "0px 0px 5px 0px", padding: "0px 6px", ...(showScanPlot ? { backgroundColor: '#a8d5a2', borderColor: '#a8d5a2', color: '#1a3a1a' } : {}) }}>
              <FontAwesomeIcon icon={faAreaChart} style={{ marginRight: '5px', marginTop: "-2px" }} />Plot</Button>
            <Label>Min</Label>
            <Input
              value={scanPhiMin}
              placeholder="0"
              onChange={(event) => setScanPhiMin(event.target.value)}
              className="w-16"
              style={{ borderColor: (() => { const v = scanPhiMin === "" ? 0 : parseFloat(scanPhiMin); return isNaN(v) || v < 0 ? "red" : ""; })() }}/>
            <Label>Max</Label>
            <Input
              value={scanPhiMax}
              placeholder="360"
              onChange={(event) => setScanPhiMax(event.target.value)}
              className="w-16"
              style={{ borderColor: (() => { const mn = scanPhiMin === "" ? 0 : parseFloat(scanPhiMin); const v = scanPhiMax === "" ? 360 : parseFloat(scanPhiMax); return isNaN(v) || v <= 0 || v <= mn ? "red" : ""; })() }}/>
            <Label>Step</Label>
            <Input
              value={scanPhiStep}
              placeholder="5"
              onChange={(event) => setScanPhiStep(event.target.value)}
              className="w-16"
              style={{ borderColor: (() => { const mn = scanPhiMin === "" ? 0 : parseFloat(scanPhiMin); const mx = scanPhiMax === "" ? 360 : parseFloat(scanPhiMax); const v = scanPhiStep === "" ? 5 : parseFloat(scanPhiStep); return isNaN(v) || v <= 0 || v >= (mx - mn) ? "red" : ""; })() }}/>
          </div>
        </div>
        <div className="shrink-0 mt-2">
          <PlannerBarChart />
          {showScanPlot && <PlannerScanLineChart />}
        </div>
      </CardContent>
    </Card>
  );
}
