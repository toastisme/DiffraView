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

  // App states
  const [appLoading, setAppLoading] = useState(false);
  const [minAppLoading, setMinAppLoading] = useState(false);

  useEffect(() => {
    setAppLoading(true)
    setMinAppLoading(true)
    setTimeout(() => {
      setMinAppLoading(false)
    }, 2000)
  }, [])

  // Algorithm states
  const [importLoading, setImportLoading] = useState(false);


  const serverWS = new WebSocket("ws://127.0.0.1:8888/");

  const initialLineplotData: LineplotData[] = []; 
  const [lineplot, setLineplot] = useState<LineplotData[]>(initialLineplotData);
  const [lineplotTitle, setLineplotTitle] = useState("");

  const [importLog, setImportLog] = useState("");

  const algorithmProps: AlgorithmProps = {
    importStates : {setLog: setImportLog, log: importLog, setLoading: setImportLoading, loading: importLoading},
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
      setAppLoading(false);
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
          setImportLoading(false);
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
        appLoading || minAppLoading ? 
        <LoadingScreen loading={appLoading} minLoading={minAppLoading}/>
        :
      <div className="grid grid-rows-20 gap-3">
        <div className="row-span-1">
          <div className="grid grid-cols-10">
            <div className="col-span-3">
          <FileTree></FileTree>
          <ReflectionTableSheet></ReflectionTableSheet>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="row-span-18">
          <StateTabs props={stateProps}/>
          </div>
          <div className="row-span-9">
          <AlgorithmTabs props={algorithmProps}/>
          </div>
        </div>
            <div>
            <a href="https://dials.github.io" target="_blank">
            <img
              src="./src/assets/dials_logo.png"
      style={{ 
        position: "absolute",
        top: "0vh",
        left: "92vw",
        height: "110px",
        width: "147px"
      }}
              />
            </a>
            </div>
      </div>
      }
    </div>
  )

}


export default App