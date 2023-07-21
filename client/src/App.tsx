import { useRef, useEffect, useState } from "react"
import { AlgorithmTabs } from "./components/AlgorithmTabs"
import { StateTabs } from "./components/StateTabs"
import { FileTree } from "./components/FileTree"
import { ReflectionTableSheet } from "./components/ReflectionTable"
import { AlgorithmStates } from "./types"

/*
Websocket Channels

server
experiment_viewer
rlv
gui

GUI Commands

update_import_log
update_find_spots_log
update_index_log
update_refine_log
update_integrate_log
*/

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

  function is_gui_msg(msg: any){
    return "channel" in msg && msg["channel"] == "gui";
  }

  serverWS.onmessage = (event) => {
      const msg: any = JSON.parse(event.data);

      if (!is_gui_msg(msg)){ return; }

      const command = msg["command"];

      switch(command){
        case "update_import_log":
          algorithmProps.importStates.setLog(msg["log"]);
          break;
        default:
          console.warn("Unrecognised command ", command);
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