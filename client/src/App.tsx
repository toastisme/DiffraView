import { useRef, useEffect, useState } from "react"
import { AlgorithmTabs } from "./components/AlgorithmTabs"
import { StateTabs } from "./components/StateTabs"
import { FileTree } from "./components/FileTree"
import { ReflectionTableSheet } from "./components/ReflectionTable"
import { WebsocketHandler } from "./components/Comms"
import { AlgorithmStates } from "./types"

function App() {

  const serverWS = new WebSocket("ws://127.0.0.1:8888/");

  const [importLog, setImportLog] = useState("");

  const algorithmProps: AlgorithmStates = {
    importStates : {setLog: setImportLog, log: importLog},
    webSockets : {server: serverWS}
  };


  serverWS.onopen = () => {
      console.log('Opened Connection')
  };

  serverWS.onclose = () => {
      console.log('Closed Connection')
  };

  serverWS.onmessage = (event) => {
      console.log("msg received by client", event.data);
      const data: any = JSON.parse(event.data);
      if ("command" in data && data["command"] == "dials.import"){
        algorithmProps.importStates.setLog(data["log"]);
      }
    };

  return (
    <>
    <div className="grid grid-rows-20 gap-3">
      <div className="row-span-1">
      <FileTree></FileTree>
      <ReflectionTableSheet></ReflectionTableSheet>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="row-span-18">
        <StateTabs ></StateTabs>
        </div>
        <div className="row-span-9">
        <AlgorithmTabs props={algorithmProps}/>
        </div>
      </div>
    </div>
    </>
  )

}


export default App