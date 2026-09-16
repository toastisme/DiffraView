import { Card, CardContent } from "@/components/ui/card"
import { usePluginContext } from "@/contexts/PluginContext"
import { usePluginIframeTheme } from "@/hooks/usePluginIframeTheme"

export function PluginViewer() {

  const { pluginViewerUrl } = usePluginContext();
  const { iframeRef, onIframeLoad } = usePluginIframeTheme();

  return (
    <Card className="h-full overflow-hidden">
      <CardContent className="h-full overflow-hidden flex flex-col">
        {pluginViewerUrl && (
          <iframe ref={iframeRef} onLoad={onIframeLoad} scrolling="no" src={pluginViewerUrl} className="w-full flex-1 min-h-0 overflow-x-hidden">
          </iframe>
        )}
      </CardContent>
    </Card>
  );
}
