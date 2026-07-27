import { useEffect, useState} from "react"
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



function AppContent({ appLoading }: { appLoading: boolean }) {
  // These three elements describe the currently-open DiffraView experiment,
  // which has no meaning while a plugin's own viewer/actions are shown in
  // its place.
  const { activePlugin } = usePluginContext();
  const pluginActive = activePlugin !== null;

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
                    src="src/assets/logo_transparent.png"
                    alt="Logo"
                    className="col-start-8 w-2/3 ml-16 mt-5"
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
  const [userMessage, setUserMessage] = useState<string>("");
  const { toast } = useToast();

  const triggerUserMessage = () => {
    toast({
      title: "Message",
      description: userMessage
    });
  };

  useEffect(() => {
    if (userMessage === ""){return;}
    triggerUserMessage();
  }, [userMessage])

  return (
		<AppProviders setAppLoading={setAppLoading} setUserMessage={setUserMessage}>
      <AppContent appLoading={appLoading} />
    </AppProviders>
  )

}


export default App
