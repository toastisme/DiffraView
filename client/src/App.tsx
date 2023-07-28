import { useRef, useEffect, useState } from "react"
import { AlgorithmTabs } from "./components/AlgorithmTabs"
import { StateTabs } from "./components/StateTabs"
import { FileTree } from "./components/FileTree"
import { ReflectionTableSheet } from "./components/ReflectionTable"
import { AlgorithmProps,  LineplotData, StateProps} from "./types"
import { ImportStates, FindSpotsStates, IndexStates, RefineStates, IntegrateStates} from "./types";
import { LoadingScreen } from "./components/LoadingScreen"
import { ExperimentSummary } from "./components/ExperimentSummary"

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

  /*
    Loading states
  */

  const [appLoading, setAppLoading] = useState(false);
  const [minAppLoading, setMinAppLoading] = useState(false);

  useEffect(() => {
    setAppLoading(true)
    setMinAppLoading(true)
    setTimeout(() => {
      setMinAppLoading(false)
    }, 2000)
  }, [])

  /*
    Summary states
   */

  const [instrumentName, setInstrumentName] = useState("");
  const [experimentDescription, setExperimentDescription] = useState("");
  const [reflectionsSummary, setReflectionsSummary] = useState("");
  const [crystalSummary, setCrystalSummary] = useState("");
  const [integrationSummary, setintegrationSummary] = useState("");

  /*
    Algorithm states
  */

  // ImportTab
  const [importLoading, setImportLoading] = useState(false);
  const [importLog, setImportLog] = useState("");

  // FindSpotsTab
  const [findSpotsEnabled, setFindSpotsEnabled] = useState(false);
  const [findSpotsLoading, setFindSpotsLoading] = useState(false);
  const [findSpotsLog, setFindSpotsLog] = useState("");

  // IndexTab
  const [indexEnabled, setIndexEnabled] = useState(false);
  const [indexLoading, setIndexLoading] = useState(false);
  const [indexLog, setIndexLog] = useState("");

  // RefineTab
  const [refineEnabled, setRefineEnabled] = useState(false);
  const [refineLoading, setRefineLoading] = useState(false);
  const [refineLog, setRefineLog] = useState("");

  // IntegrateTab
  const [integrateEnabled, setIntegrateEnabled] = useState(false);
  const [integrateLoading, setIntegrateLoading] = useState(false);
  const [integrateLog, setIntegrateLog] = useState("");

  const importStates: ImportStates = {
      setLog: setImportLog, 
      log: importLog, 
      setLoading: setImportLoading, 
      loading: importLoading,
  };
  const findSpotsStates: FindSpotsStates = {
      enabled : findSpotsEnabled,
      loading: findSpotsLoading,
      setLoading: setFindSpotsLoading, 
      log: findSpotsLog, 
  };
  const indexStates: IndexStates = {
      enabled : indexEnabled,
      loading: indexLoading,
      setLoading: setIndexLoading, 
      log: indexLog, 
  };
  const refineStates : RefineStates = {
      enabled : refineEnabled,
      loading: refineLoading,
      setLoading: setRefineLoading, 
      log: refineLog, 
  };
  const integrateStates : IntegrateStates = {
      enabled : integrateEnabled,
      loading: integrateLoading,
      setLoading: setIntegrateLoading, 
      log: integrateLog, 
  };

  /*
    StateTabs states
  */

  const initialLineplotData: LineplotData[] = []; 
  const [lineplot, setLineplot] = useState<LineplotData[]>(initialLineplotData);
  const [lineplotTitle, setLineplotTitle] = useState("");

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
          setFindSpotsEnabled(true);
          setInstrumentName("<b>Instrument: </b>" + msg["instrument_name"]);
          setExperimentDescription("<b> Experiment: </b>" + msg["experiment_description"]);
          break;
        case "update_find_spots_log":
          setFindSpotsLog(msg["log"]);
          setFindSpotsLoading(false);
          setIndexEnabled(true);
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
            <div className="col-span-1">
          <FileTree></FileTree>
          <ReflectionTableSheet></ReflectionTableSheet>
            </div>
            <div className="col-span-6">
              <ExperimentSummary 
                name={instrumentName} 
                summary={experimentDescription} 
                reflections_summary={reflectionsSummary}
                crystal_summary={crystalSummary}
                integration_summary={integrationSummary}></ExperimentSummary>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="row-span-18">
          <StateTabs props={stateProps}/>
          </div>
          <div className="row-span-9">
          <AlgorithmTabs 
          importStates={importStates}
          findSpotsStates={findSpotsStates}
          indexStates={indexStates}
          refineStates={refineStates}
          integrateStates={integrateStates}
          serverWS={serverWS}
          />
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