import { Card, CardContent } from "@/components/ui/card"
import { ProgressTabTrigger } from "@/components/ui/ProgressTabTrigger"
import { TabLoadingIndicator } from "@/components/ui/TabLoadingIndicator"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAsterisk, faDrawPolygon, faEraser, faFloppyDisk } from "@fortawesome/free-solid-svg-icons"
import { LinePlot } from "../LinePlot"
import { useExperimentViewerContext } from "@/contexts/ExperimentViewerContext"
import { useRootContext } from "@/contexts/RootContext"
import { Status } from "@/types"
import { viewerUrl } from "@/lib/server"
import { serverMessage } from "@/lib/protocol"
import { useSyncHidden } from "./useSyncHidden"

export function ExperimentViewerTrigger() {
  const { status, progress } = useExperimentViewerContext();
  return (
    <ProgressTabTrigger
      progress={progress}
      className={status === Status.Loading ? "border border-foreground flex-1" : "flex-1"}
      value="experiment_viewer">
      <TabLoadingIndicator loading={status === Status.Loading} />
      <FontAwesomeIcon icon={faAsterisk} style={{ marginRight: '5px', marginTop: "0px" }} />
      Experiment
    </ProgressTabTrigger>
  );
}

export function ExperimentViewerPanel() {
  const { status, setHidden, maskActive, setMaskActive, maskStorable, maskStored, maskDrawing } = useExperimentViewerContext();
  const { serverWS, capabilities } = useRootContext();
  useSyncHidden("experiment_viewer", setHidden);

  // The pixel spectrum plot needs a mode with spectra (e.g. ToF)
  const showLinePlot = capabilities.features.includes("lineplot");
  const experimentLoaded = capabilities.experimentType !== null;
  // Clear is shown once there is something to clear
  const maskClearable = maskStored || maskStorable || maskDrawing;

  function toggleMask() {
    setMaskActive(!maskActive);
    serverWS.current?.send(serverMessage("mask.set_active", { "active": !maskActive }));
  }

  const buttonStyle = { padding: "0px 6px" };
  const activeStyle = { backgroundColor: '#a8d5a2', borderColor: '#a8d5a2', color: '#1a3a1a' };

  return (
    <Card className={"dark " + (status === Status.Loading ? "h-full border border-foreground overflow-hidden" : "h-full overflow-hidden")}>
      <CardContent className="h-full overflow-hidden flex flex-col">
        <iframe scrolling="no" src={viewerUrl("src/assets/ExperimentViewer/ExperimentViewerHeadless.html")} className="w-full flex-[2] min-h-0 overflow-x-hidden">
        </iframe>
        {experimentLoaded && (
          <div className="flex items-center gap-2 pt-2">
            <Button variant="outline" onClick={toggleMask}
              style={{ ...buttonStyle, ...(maskActive ? activeStyle : {}) }}>
              <FontAwesomeIcon icon={faDrawPolygon} style={{ marginRight: '5px', marginTop: "-2px" }} /> Mask
            </Button>
            {maskActive && maskClearable && (
              <Button variant="outline" style={buttonStyle}
                onClick={() => serverWS.current?.send(serverMessage("mask.clear"))}>
                <FontAwesomeIcon icon={faEraser} style={{ marginRight: '5px', marginTop: "-2px" }} /> Clear
              </Button>
            )}
            {maskActive && maskStorable && (
              <Button variant="outline" style={buttonStyle}
                onClick={() => serverWS.current?.send(serverMessage("mask.store"))}>
                <FontAwesomeIcon icon={faFloppyDisk} style={{ marginRight: '5px', marginTop: "-2px" }} /> Store
              </Button>
            )}
            {maskStored && (
              <span className="text-sm text-muted-foreground">Mask stored</span>
            )}
          </div>
        )}
        {showLinePlot && (
          <div className="w-full flex-1 min-h-0">
            <LinePlot />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
