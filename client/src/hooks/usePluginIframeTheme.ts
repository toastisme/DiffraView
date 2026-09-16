import { useCallback, useEffect, useRef } from "react";
import { useTheme } from "@/hooks/useTheme";

// DiffraView's own bundled viewers (ExperimentViewer etc.) share its
// WebSocket connection and can be told to switch theme via an "update_theme"
// command. Plugins are served from their own origin by PluginManager
// (see plugin_manager.py), so that channel isn't available to them -- the
// current theme is instead pushed into the plugin's iframe via postMessage,
// both once it finishes loading and whenever the user switches theme while
// it's mounted.
export function usePluginIframeTheme() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { theme } = useTheme();

  const postTheme = useCallback(() => {
    iframeRef.current?.contentWindow?.postMessage(
      { channel: "diffraview_plugin", command: "update_theme", theme },
      "*"
    );
  }, [theme]);

  useEffect(() => {
    postTheme();
  }, [postTheme]);

  const onIframeLoad = useCallback(() => {
    postTheme();
  }, [postTheme]);

  return { iframeRef, onIframeLoad };
}
