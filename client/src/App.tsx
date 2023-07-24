import { useRef, useEffect, useState } from "react"
import { AlgorithmTabs } from "./components/AlgorithmTabs"
import { StateTabs } from "./components/StateTabs"
import { FileTree } from "./components/FileTree"
import { ReflectionTableSheet } from "./components/ReflectionTable"
import { AlgorithmProps,  LineplotData, StateProps} from "./types"
import { LoadingScreen } from "./components/LoadingScreen"

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

  const [loading, setLoading] = useState(false);
  const [minLoading, setMinLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setMinLoading(true)
    setTimeout(() => {
      setMinLoading(false)
    }, 5000)
  }, [])

  const serverWS = new WebSocket("ws://127.0.0.1:8888/");

  const initialLineplotData: LineplotData[] = []; 
  const [lineplot, setLineplot] = useState<LineplotData[]>(initialLineplotData);
  const [lineplotTitle, setLineplotTitle] = useState("");

  const [importLog, setImportLog] = useState("");

  const algorithmProps: AlgorithmProps = {
    importStates : {setLog: setImportLog, log: importLog},
    webSockets : {server: serverWS}
  };

  const stateProps: StateProps = {
    experimentStates : {
      lineplotData : lineplot,
      lineplotTitle : lineplotTitle 
    }

  }

  serverWS.onopen = () => {
      console.log('Opened Connection')
      serverWS.send(JSON.stringify({
        "channel": "server",
        "command": "record_connection", 
        "id": "gui"
        }
      ));
      setLoading(false);
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
          setImportLog(msg["log"]);
          break;
        case "update_lineplot":
          const lineplotData: LineplotData[] = [];

          for (var i = 0; i < msg["x"].length; i++){
            lineplotData.push(
              {
                x: msg["x"][i],
                y: msg["y"][i]
              }
            )
          }
          setLineplot(lineplotData);
          setLineplotTitle(msg["title"]);
          break;

        default:
          console.warn("Unrecognised command ", command);
      }
    };

  return (
    <div className="App">
      {
        loading || minLoading ? 
        <LoadingScreen loading={loading} minLoading={minLoading}/>
        :
      <div className="grid grid-rows-20 gap-3">
        <div className="row-span-1">
        <FileTree></FileTree>
        <ReflectionTableSheet></ReflectionTableSheet>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="row-span-18">
          <StateTabs props={stateProps}/>
          </div>
          <div className="row-span-9">
          <AlgorithmTabs props={algorithmProps}/>
          </div>
        </div>
      </div>
      }
    </div>
  )

}


export default App