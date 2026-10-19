import { Card, CardContent } from "@/components/ui/card"
import { ProgressTabTrigger } from "@/components/ui/ProgressTabTrigger"
import { TabLoadingIndicator } from "@/components/ui/TabLoadingIndicator"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAsterisk } from "@fortawesome/free-solid-svg-icons"
import { LinePlot } from "../LinePlot"
import { useExperimentViewerContext } from "@/contexts/ExperimentViewerContext"
import { useRootContext } from "@/contexts/RootContext"
import { Status } from "@/types"
import { viewerUrl } from "@/lib/server"
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
  const { status, setHidden } = useExperimentViewerContext();
  const { capabilities } = useRootContext();
  useSyncHidden("experiment_viewer", setHidden);

  // The pixel spectrum plot needs a mode with spectra (e.g. ToF)
  const showLinePlot = capabilities.features.includes("lineplot");

  return (
    <Card className={"dark " + (status === Status.Loading ? "h-full border border-foreground overflow-hidden" : "h-full overflow-hidden")}>
      <CardContent className="h-full overflow-hidden flex flex-col">
        <iframe scrolling="no" src={viewerUrl("src/assets/ExperimentViewer/ExperimentViewerHeadless.html")} className="w-full flex-[2] min-h-0 overflow-x-hidden">
        </iframe>
        {showLinePlot && (
          <div className="w-full flex-1 min-h-0">
            <LinePlot />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
