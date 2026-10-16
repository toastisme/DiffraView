import { useCallback, useState } from "react"
import { MainPanels } from "./components/MainPanels"
import { FileTree } from "./components/FileTree"
import { ReflectionTableSheet } from "./components/ReflectionTable"
import { LoadingScreen } from "./components/LoadingScreen"
import { ExperimentSummary } from "./components/ExperimentSummary"
import { ErrorHandler } from "./components/errorHandler"
import { Toaster } from "./components/ui/toaster"
import { useToast } from "@/components/ui/use-toast";

import { AppMenubar } from "./components/AppMenubar"
import AppProviders from "./contexts/AppProviders"
import { usePluginContext } from "./contexts/PluginContext"
import { useTheme } from "@/hooks/useTheme"



function AppContent({ appLoading }: { appLoading: boolean }) {
  // These three elements describe the currently-open DiffraView experiment,
  // which do nothing while a plugin's own viewer/actions are shown in
  // its place.
  const { activePlugin, pluginLogoUrl } = usePluginContext();
  const pluginActive = activePlugin !== null;
  const { isDark } = useTheme();
  const logo = isDark ? "src/assets/logo_transparent.png" : "src/assets/logo_light.png";
  const isLightLogo = !(pluginActive && pluginLogoUrl) && !isDark;
  const padRight = `${(2 / 3) * (30 / 297) * 100}%`;
  const logoStyle = isLightLogo
    ? {
        width: `${(2 / 3) * (357 / 297) * 100}%`,
        marginRight: "1rem",
        marginTop: `calc(1.25rem - ${(2 / 3) * (22 / 297) * 100}%)`,
      }
    : { marginRight: `calc(1rem + ${padRight})` };

  return (
    <div className="App h-screen flex flex-col overflow-hidden">
      {
        appLoading ?
          <LoadingScreen
          />
          :
          <div className="flex flex-col flex-1 min-h-0">
            <AppMenubar/>
          <div className="flex flex-col flex-1 min-h-0 gap-3">
            <ErrorHandler />
            <Toaster />
            <div>
              <div className="grid grid-cols-8">
                <div className="col-span-1 grid grid-rows-2 gap-2">
                  {!pluginActive && (
                    <div className="[grid-column:1] [grid-row:1]">
                      <FileTree/>
                    </div>
                  )}
                  {!pluginActive && (
                    <div className="grid grid-columns-2 gap-0">
                      <div className="[grid-column:1] [grid-row:2]">
                        <ReflectionTableSheet
                        ></ReflectionTableSheet>
                      </div>
                    </div>
                  )}
                </div>
                {!pluginActive && (
                  <div className="col-start-2 col-span-6">
                    <ExperimentSummary/>
                  </div>
                )}
                <img
                    src={pluginActive && pluginLogoUrl ? pluginLogoUrl : logo}
                    alt="Logo"
                    className="col-start-8 w-2/3 justify-self-end mt-5"
                    style={logoStyle}
                    />
              </div>
            </div>
                <MainPanels/>
          </div>
          </div>
      }
    </div>
  )
}

function App() {

  const [appLoading, setAppLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const setUserMessage = useCallback((message: string) => {
    if (message === "") return;
    toast({
      title: "Message",
      description: message
    });
  }, [toast]);

  return (
		<AppProviders setAppLoading={setAppLoading} setUserMessage={setUserMessage}>
      <AppContent appLoading={appLoading} />
    </AppProviders>
  )

}


export default App
