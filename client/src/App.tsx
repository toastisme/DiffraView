import { useEffect, useState} from "react"
import { AlgorithmTabs } from "./components/AlgorithmTabs"
import { StateTabs } from "./components/StateTabs"
import { FileTree } from "./components/FileTree"
import { ReflectionTableSheet } from "./components/ReflectionTable"
import { LoadingScreen } from "./components/LoadingScreen"
import { ExperimentSummary } from "./components/ExperimentSummary"
import { ErrorHandler } from "./components/errorHandler"
import { Toaster } from "./components/ui/toaster"
import { useToast } from "@/components/ui/use-toast";

import { AppMenubar } from "./components/AppMenubar"
import AppProviders from "./contexts/AppProviders"



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
    <div className="App h-[100vh] overflow-hidden">
      {
        appLoading ?
          <LoadingScreen
          />
          :
          <div>
            <AppMenubar/>
          <div className="grid grid-rows-20 gap-3">
            <ErrorHandler />
            <Toaster />
            <div className="row-span-1">
              <div className="grid grid-cols-8">
                <div className="col-span-1 grid grid-rows-2 gap-2">
                  <div className="[grid-column:1] [grid-row:1]">
                    <FileTree/>
                  </div>
                  <div className="grid grid-columns-2 gap-0">
                    <div className="[grid-column:1] [grid-row:2]">
                      <ReflectionTableSheet
                      ></ReflectionTableSheet>
                    </div>
                  </div>
                </div>
                <div className="col-start-2 col-span-6">
                  <ExperimentSummary/>
                </div>
                <img 
                    src="src/assets/logo_transparent.png"
                    alt="Logo"
                    className="w-2/3 ml-16 mt-5"
                    />
              </div>
            </div>
                <div className="flex gap-5 w-full h-full">
                  <div className="w-1/2">
                    <StateTabs/>
                  </div>
                  <div className="w-1/2">
                    <AlgorithmTabs/>
                  </div>
                </div>
          </div>
          </div>
      }
    </div>
    </AppProviders>
  )

}


export default App
