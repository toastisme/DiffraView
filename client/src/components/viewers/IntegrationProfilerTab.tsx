import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ProgressTabTrigger } from "@/components/ui/ProgressTabTrigger"
import { TabLoadingIndicator } from "@/components/ui/TabLoadingIndicator"
import { Label } from "@/components/ui/label"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAreaChart } from "@fortawesome/free-solid-svg-icons"
import { IntegrationLinePlot } from "../IntegrationLinePlot"
import { HeatMap } from "../Heatmap"
import { useIntegrationProfilerContext } from "@/contexts/IntegrationProfilerContext"
import { useTheme } from "@/hooks/useTheme"
import { Status } from "@/types"
import { viewerUrl } from "@/lib/server"
import { useSyncHidden } from "./useSyncHidden"

// px, not rem, so the 3D viewer matches the 2D heatmap (175 x 205 viewBox)
const SHOEBOX_SIZE = 144;

function borderClass(status: Status, base: string): string {
  if (status === Status.Failed) return `${base} border border-red-500`;
  if (status === Status.Loading) return `${base} border border-foreground`;
  return base;
}

export function IntegrationProfilerTrigger() {
  const { status, progress, enabled } = useIntegrationProfilerContext();
  return (
    <ProgressTabTrigger
      progress={progress}
      className={borderClass(status, "flex-1")}
      value="integration_profiler"
      disabled={!enabled}>
      <TabLoadingIndicator loading={status === Status.Loading} />
      <FontAwesomeIcon icon={faAreaChart} style={{ marginRight: '5px', marginTop: "0px" }} />
      Integration Profiler
    </ProgressTabTrigger>
  );
}

export function IntegrationProfilerPanel() {
  const { status, setHidden } = useIntegrationProfilerContext();
  const { colors: themeColors } = useTheme(true);
  useSyncHidden("integration_profiler", setHidden);

  const cardClass = status === Status.Loading
    ? "h-full w-full border-foreground overflow-hidden"
    : status === Status.Failed
      ? "h-full w-full border-red-500 overflow-hidden"
      : "h-full w-full overflow-hidden";

  return (
    <Card className={cardClass}>
      <CardContent className="h-full overflow-hidden flex flex-col min-h-0 gap-2">
        <div className="flex-[3] min-h-80">
          <IntegrationLinePlot legend={
            <div className="flex gap-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: themeColors.green }}></div>
                <Label style={{ color: themeColors.green }}>Foreground</Label>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: themeColors.grey }}></div>
                <Label style={{ color: themeColors.grey }}>Background</Label>
              </div>
            </div>
          } />
        </div>
        <div className="dark flex gap-5 shrink-0" style={{ height: SHOEBOX_SIZE * 205 / 175 }}>
          <div className="relative h-full shrink-0" style={{ width: SHOEBOX_SIZE }}>
            <div
              className="absolute top-2 left-2 bg-black bg-opacity-0 text-white text-sm px-2 py-1 rounded"
              style={{ zIndex: 10 }}
            >
              2D
            </div>
            <HeatMap />
          </div>
          <div className="relative flex-1" style={{ height: SHOEBOX_SIZE }}>
            <div
              className="absolute top-2 left-2 bg-black bg-opacity-0 text-white text-sm px-2 py-1 rounded"
              style={{ zIndex: 10 }}
            >
              3D
            </div>
            <iframe
              src={viewerUrl("src/assets/ShoeboxViewer/ShoeboxViewerHeadless.html")}
              className="w-full h-full border border-[#666666] rounded-lg"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  );
}
