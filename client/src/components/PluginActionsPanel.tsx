import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { usePluginContext } from "@/contexts/PluginContext"
import { usePluginIframeTheme } from "@/hooks/usePluginIframeTheme"

export function PluginActionsPanel() {

  const { pluginName, pluginActionsUrl } = usePluginContext();
  const { iframeRef, onIframeLoad } = usePluginIframeTheme();

  if (pluginActionsUrl) {
    return (
      <Card className="h-full flex flex-col">
        <CardContent className="h-full overflow-hidden flex flex-col">
          <iframe ref={iframeRef} onLoad={onIframeLoad} scrolling="no" src={pluginActionsUrl} className="w-full flex-1 min-h-0 overflow-x-hidden">
          </iframe>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>Actions</CardHeader>
      <CardContent className="h-full flex items-center justify-center text-muted-foreground">
        {pluginName} actions coming soon
      </CardContent>
    </Card>
  );
}
