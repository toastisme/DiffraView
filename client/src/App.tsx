import { useEffect, useState, useRef } from "react"
import { AlgorithmTabs } from "./components/AlgorithmTabs"
import { StateTabs } from "./components/StateTabs"
import { FileTree } from "./components/FileTree"
import { ReflectionTableSheet } from "./components/ReflectionTable"
import { ExperimentViewerStates,  LineplotData, LineplotBboxData, LineplotCentroidData, RLVStates, BravaisLattice} from "./types"
import { ImportStates, FindSpotsStates, IndexStates, RefineStates, IntegrateStates} from "./types";
import { LoadingScreen } from "./components/LoadingScreen"
import { ExperimentSummary } from "./components/ExperimentSummary"
import { Reflection } from "./types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

/*
WebSocket Channels

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

  const serverWS = useRef<WebSocket | null>(null);

  /*
    Loading states
  */
  const [appLoading, setAppLoading] = useState<boolean>(false);
  const [minAppLoading, setMinAppLoading] = useState<boolean>(false);

  useEffect(() => {
    setAppLoading(true)
    setMinAppLoading(true)
    connectToServer();
    setTimeout(() => {
      setMinAppLoading(false)
    }, 2000)
  }, [])

  /*
    Summary states
   */

  const [instrumentName, setInstrumentName] = useState<string>("");
  const [experimentDescription, setExperimentDescription] = useState<string>("");
  const [reflectionsSummary, setReflectionsSummary] = useState<string>("");
  const [crystalSummary, setCrystalSummary] = useState<string>("");
  const [integrationSummary, setintegrationSummary] = useState<string>("");

  const [reflectionTableEnabled, setReflectionTableEnabled] = useState<boolean>(false);
  const [activeFilenames, setActiveFilenames] = useState<string []>([]);
  const [activeFilename, setActiveFilename] = useState<string>("");

  /*
    Algorithm states
  */

  const [activeAlgorithimTab, setActiveAglorithmTab] = useState<string>("import");

  // ImportTab
  const [importLoading, setImportLoading] = useState<boolean>(false);
  const [importLog, setImportLog] = useState<string>("");
  const [importRanSuccessfully, setImportRanSuccessfully] = useState(true);

  // FindSpotsTab
  const [findSpotsEnabled, setFindSpotsEnabled] = useState<boolean>(false);
  const [findSpotsLoading, setFindSpotsLoading] = useState<boolean>(false);
  const [findSpotsLog, setFindSpotsLog] = useState<string>("");
  const [minTOF, setMinTOF] = useState<number>(0)
  const [maxTOF, setMaxTOF] = useState<number>(0)
  const [stepTOF, setStepTOF] = useState<number>(0)
  const [currentMinTOF, setCurrentMinTOF] = useState<number>(0)
  const [currentMaxTOF, setCurrentMaxTOF] = useState<number>(0)
  const [findSpotsRanSuccessfully, setFindSpotsRanSuccessfully] = useState(true);

  // IndexTab
  const [indexEnabled, setIndexEnabled] = useState<boolean>(false);
  const [indexLoading, setIndexLoading] = useState<boolean>(false);
  const [indexLog, setIndexLog] = useState<string>("");
  const [selectedBravaisLatticeId, setSelectedBravaisLatticeId] = useState<string>("1");
  const initialBravaisLattices: BravaisLattice[] = [];
  const [detectSymmetryOpen, setDetectSymmetryOpen] = useState<boolean>(false);
  const [detectSymmetryEnabled, setDetectSymmetryEnabled] = useState<boolean>(false);
  const [selectedBravaisLatticeLoading, setSelectedBravaisLatticeLoading] = useState<boolean>(false);
  const [indexRanSuccessfully, setIndexRanSuccessfully] = useState(true);

  // RefineTab
  const [refineEnabled, setRefineEnabled] = useState<boolean>(false);
  const [refineLoading, setRefineLoading] = useState<boolean>(false);
  const [refineLog, setRefineLog] = useState<string>("");
  const [refineRanSuccessfully, setRefineRanSuccessfully] = useState(true);

  const [bravaisLattices, setBravaisLattices] = useState<BravaisLattice []>(initialBravaisLattices);

  // IntegrateTab
  const [integrateEnabled, setIntegrateEnabled] = useState<boolean>(false);
  const [integrateLoading, setIntegrateLoading] = useState<boolean>(false);
  const [integrateLog, setIntegrateLog] = useState<string>("");
  const [integrateRanSuccessfully, setIntegrateRanSuccessfully] = useState(true);

  const importStates: ImportStates = {
      setLog: setImportLog, 
      log: importLog, 
      setLoading: setImportLoading, 
      loading: importLoading,
      ranSuccessfully: importRanSuccessfully
  };
  const findSpotsStates: FindSpotsStates = {
      setLog: setFindSpotsLog, 
      enabled : findSpotsEnabled,
      loading: findSpotsLoading,
      setLoading: setFindSpotsLoading, 
      log: findSpotsLog, 
      minTOF: minTOF,
      maxTOF: maxTOF,
      currentMinTOF: currentMinTOF,
      currentMaxTOF: currentMaxTOF,
      stepTOF: stepTOF,
      setCurrentMinTOF: setCurrentMinTOF,
      setCurrentMaxTOF: setCurrentMaxTOF,
      ranSuccessfully: findSpotsRanSuccessfully

  };
  const indexStates: IndexStates = {
      setLog: setIndexLog, 
      enabled : indexEnabled,
      loading: indexLoading,
      setLoading: setIndexLoading, 
      bravaisLattices: bravaisLattices,
      selectedBravaisLatticeId: selectedBravaisLatticeId,
      setSelectedBravaisLatticeId: setSelectedBravaisLatticeId,
      detectSymmetryOpen: detectSymmetryOpen,
      setDetectSymmetryOpen: setDetectSymmetryOpen,
      detectSymmetryEnabled: detectSymmetryEnabled,
      selectedBravaisLatticeLoading: selectedBravaisLatticeLoading,
      setSelectedBravaisLatticeLoading: setSelectedBravaisLatticeLoading,
      log: indexLog, 
      ranSuccessfully: indexRanSuccessfully
  };
  const refineStates : RefineStates = {
      setLog: setRefineLog, 
      enabled : refineEnabled,
      loading: refineLoading,
      setLoading: setRefineLoading, 
      log: refineLog, 
      ranSuccessfully: refineRanSuccessfully
  };
  const integrateStates : IntegrateStates = {
      setLog: setIntegrateLog, 
      enabled : integrateEnabled,
      loading: integrateLoading,
      setLoading: setIntegrateLoading, 
      log: integrateLog, 
      ranSuccessfully: integrateRanSuccessfully
  };

  /*
    StateTabs states
  */

  const [activeStateTab, setActiveStateTab] = useState<string>("experiment-viewer");
  const initialLineplotData: LineplotData[] = [{x:-1, y:0}]; 
  const [lineplot, setLineplot] = useState<LineplotData[]>(initialLineplotData);

  const initialLineplotBboxData: LineplotBboxData[] = []; 
  const [lineplotBboxData, setLineplotBboxData] = useState<LineplotBboxData[]>(initialLineplotBboxData);

  const initialLineplotCentroidData: LineplotCentroidData[] = []; 
  const [lineplotCentroidData, setLineplotCentroidData] = useState<LineplotCentroidData[]>(initialLineplotCentroidData);

  const [lineplotTitle, setLineplotTitle] = useState<string>("-");

  const [experimentViewerHidden, setExperimentViewerHidden] = useState<boolean>(false);
  const [rLVEnabled, setRLVEnabled] = useState<boolean>(false);
  const [rLVHidden, setRLVHidden] = useState<boolean>(false);

  const experimentViewerStates: ExperimentViewerStates = {
      lineplotData : lineplot,
      lineplotBboxData: lineplotBboxData,
      lineplotCentroidData: lineplotCentroidData,
      lineplotTitle : lineplotTitle,
      hidden : experimentViewerHidden,
      setHidden : setExperimentViewerHidden

  }

  const rLVStates: RLVStates = {
    enabled : rLVEnabled,
    hidden : rLVHidden,
    setHidden : setRLVHidden
  }

  const emptyReflectionTable : Reflection[] = [
    {
      id : "0",
      panel : "-", 
      panelName: "-",
      millerIdx : "-", 
      XYZObs : "-", 
      XYZCal : "-", 
      wavelength : "-",
      tof : "-"
    }
  ]

  const [reflectionTable, setReflectionTable] = useState<Reflection[]>(emptyReflectionTable)
  const [selectedReflectionId, setSelectedReflectionId] = useState<string>("");

  function updateReflectionTable(msg: any) : void{
    const panelKeys = Object.keys(msg);
    const reflections: Reflection[] = [];

    for (var i = 0; i < panelKeys.length; i++){
      const panelReflections = msg[panelKeys[i]];
      for (var j = 0; j < panelReflections.length; j++){
        const refl = panelReflections[j];
        reflections.push({
          id: refl["id"],
          panel: panelKeys[i],
          panelName: refl["panelName"],
          millerIdx : "millerIdx" in refl && refl["indexed"]? "(" + refl["millerIdx"][0] + ", " + refl["millerIdx"][1] + ", " + refl["millerIdx"][2] + ")": "-",
          XYZObs: "xyzObs" in refl ? "(" + refl["xyzObs"][1].toFixed(0) + ", " + refl["xyzObs"][0].toFixed(0) + ")":  "-",
          XYZCal: "xyzCal" in refl && refl["indexed"]? "(" + refl["xyzCal"][1].toFixed(0) + ", " + refl["xyzCal"][0].toFixed(0) + ")" :  "-",
          wavelength: "wavelength" in refl ? refl["wavelength"].toFixed(3) : "-",
          tof: "tof" in refl ? (refl["tof"]*10**6).toFixed(3) : "-"
        });
      }
    }

    setReflectionTable(reflections);
  }

  function connectToServer() : void{

    console.log("connect to server called");
    serverWS.current = new WebSocket("ws://127.0.0.1:8888/");

    serverWS.current.onopen = () => {
        console.log('Frontend opened connection to server');
        if (serverWS.current?.readyState === WebSocket.OPEN){
          serverWS.current?.send(JSON.stringify({
            "channel": "server",
            "command": "record_connection", 
            "id": "gui"
            }
          ));
          setAppLoading(false);
        }
    };

    serverWS.current.onerror=(event)=>{
      console.log("Frontend connection error:", event);
    }

    serverWS.current.onclose = () => {
        console.log('Frontend closed connection to server')
        serverWS.current = null;
        setTimeout(connectToServer, 5000);
    };

    function is_gui_msg(msg: any){
      return "channel" in msg && msg["channel"] == "gui";
    }

    serverWS.current.onmessage = (event: any) => {
        const msg: any = JSON.parse(event.data);

        console.log("frontend msg received ", msg);

        if (!is_gui_msg(msg)){ return; }

        const command = msg["command"];

        switch(command){
          case "update_import_log":
            console.assert("log" in msg);
            setImportLog(msg["log"]);
            if ("success" in msg && !msg["success"]){
              setImportLoading(false);
              setImportRanSuccessfully(false);
            }
            break;
          case "load_experiment":
            console.assert("algorithm_logs" in msg)
            setImportLog(msg["algorithm_logs"]["dials.import"])
            setActiveAglorithmTab("import");

            setActiveStateTab("experiment-viewer");
            setExperimentViewerHidden(false);
            setRLVHidden(true);

            if (msg["algorithm_logs"]["dials.import"] != ""){
              setFindSpotsEnabled(true);
              setActiveAglorithmTab("find-spots");
            }
            setFindSpotsLog(msg["algorithm_logs"]["dials.find_spots"])
            if (msg["algorithm_logs"]["dials.find_spots"] != ""){
              console.assert("reflections_summary" in msg);
              setReflectionsSummary("Identified " + msg["reflections_summary"])

              console.assert("reflection_table" in msg);
              updateReflectionTable(msg["reflection_table"]);
              setReflectionTableEnabled(true);
              setIndexEnabled(true);
              setRLVEnabled(true);
              setActiveAglorithmTab("index");
            }
            setIndexLog(msg["algorithm_logs"]["dials.index"])
            if (msg["algorithm_logs"]["dials.index"] != ""){
              setRefineEnabled(true);
              setDetectSymmetryEnabled(true);
              setIntegrateEnabled(true);
              setActiveAglorithmTab("refine");
            }
            setRefineLog(msg["algorithm_logs"]["dials.refine"])
            setIntegrateLog(msg["algorithm_logs"]["dev.dials.simple_tof_integrate"])
            if (msg["algorithm_logs"]["dials.index"] != ""){
              setActiveAglorithmTab("integrate");
            }
            console.assert("instrument_name" in msg);
            setInstrumentName("<b>Instrument: </b>" + msg["instrument_name"]);

            console.assert("experiment_description" in msg);
            setExperimentDescription("<b> Experiment: </b>" + msg["experiment_description"]);

            console.assert("tof_range" in msg);
            setMinTOF(msg["tof_range"][0]);
            setCurrentMinTOF(msg["tof_range"][0]);
            setMaxTOF(msg["tof_range"][1]);
            setCurrentMaxTOF(msg["tof_range"][1]);
            setStepTOF(msg["tof_range"][2])
            console.assert("active_filename" in msg);
            setActiveFilename(msg["active_filename"]);
            
            break;

          case "update_experiment":
            setImportLoading(false);
            setImportRanSuccessfully(true);
            setFindSpotsEnabled(true);

            setActiveStateTab("experiment-viewer");
            setExperimentViewerHidden(false);
            setRLVHidden(true);

            console.assert("instrument_name" in msg);
            setInstrumentName("<b>Instrument: </b>" + msg["instrument_name"]);

            console.assert("experiment_description" in msg);
            setExperimentDescription("<b> Experiment: </b>" + msg["experiment_description"]);
            setRLVHidden(true);

            console.assert("tof_range" in msg);
            setMinTOF(msg["tof_range"][0]);
            setCurrentMinTOF(msg["tof_range"][0]);
            setMaxTOF(msg["tof_range"][1]);
            setCurrentMaxTOF(msg["tof_range"][1]);
            setStepTOF(msg["tof_range"][2])

            console.assert("active_filenames" in msg);
            setActiveFilenames(msg["active_filenames"]);
            console.assert("active_filename" in msg);
            setActiveFilename(msg["active_filename"]);

            break;
          case "clear_experiment":
            setFindSpotsEnabled(false);
            setIndexEnabled(false);
            setRefineEnabled(false);
            setDetectSymmetryEnabled(false);
            setIntegrateEnabled(false);
            setRLVEnabled(false);
            setExperimentDescription("");
            setInstrumentName("");
            setReflectionTableEnabled(false);
            setReflectionsSummary("");
            setCrystalSummary("");
            setintegrationSummary("");
            setImportLog("");
            setFindSpotsLog("");
            setIndexLog("");
            setRefineLog("");
            setIntegrateLog("");
            setLineplot(initialLineplotData);
            setLineplotBboxData(initialLineplotBboxData);
            setLineplotCentroidData(initialLineplotCentroidData)
            setSelectedReflectionId("");
            setLineplotTitle("");
            break;

          case "update_find_spots_log":
            console.assert("log" in msg);
            setFindSpotsLog(msg["log"]);
            if ("success" in msg && !msg["success"]){
              setFindSpotsLoading(false);
              setFindSpotsRanSuccessfully(false);
            }
            if (!("reflections_summary" in msg)){
              break;
            }
            setFindSpotsLoading(false);
            setIndexEnabled(true);

            console.assert("reflections_summary" in msg);
            setReflectionsSummary("Identified " + msg["reflections_summary"])

            console.assert("reflection_table" in msg);
            updateReflectionTable(msg["reflection_table"]);
            setReflectionTableEnabled(true);
            setRLVEnabled(true);
            setFindSpotsRanSuccessfully(true);
            break;
          case "update_index_log":
            console.assert("log" in msg);
            setIndexLog(msg["log"]);

            if ("success" in msg && !msg["success"]){
              setIndexLoading(false);
              setIndexRanSuccessfully(false);
            }

            if (!("reflections_summary" in msg)&& !("bravais_lattices" in msg)){
              break;
            }
            setIndexLoading(false);

            setIndexRanSuccessfully(true);
            setRefineEnabled(true);
            setDetectSymmetryEnabled(true);
            setIntegrateEnabled(true);

            if ("bravais_lattices" in msg){
              const lattices: BravaisLattice[] = [];
              for (var i = 0; i < msg["bravais_lattices"].length; i++){
                const bl: any = msg["bravais_lattices"][i];

                const unitCell: string[] = bl["Unit Cell"].replace(/\(|\)/g, '').split(', ')  as unknown as string[]

                lattices.push(
                  {
                    id: bl["Candidate"],
                    metricFit : bl["Metric Fit"],
                    RMSD: bl["RMSD"],
                    cc : bl["Min/Max CC"],
                    lattice : bl["Lattice"],
                    a: unitCell[0],
                    b: unitCell[1],
                    c: unitCell[2],
                    alpha: unitCell[3],
                    beta: unitCell[4],
                    gamma: unitCell[5],
                    volume: bl["Volume"],
                    recommended: bl["Recommended"] == "True" ? <FontAwesomeIcon icon={faCheck}/> :<FontAwesomeIcon icon={faTimes}/>
                  }
                )
              }
              setBravaisLattices(lattices)
              setDetectSymmetryOpen(true);
              return;
            }

            if ("reindexed_cell" in msg){
              setSelectedBravaisLatticeLoading(false);
            }

            console.assert("reflections_summary" in msg);
            setReflectionsSummary("Identified " + msg["reflections_summary"])

            console.assert("crystal_summary" in msg);
            setCrystalSummary("<b> Unit Cell: </b>" + msg["crystal_summary"]);

            console.assert("reflection_table" in msg);
            updateReflectionTable(msg["reflection_table"]);
            setRLVEnabled(true);
            setReflectionTableEnabled(true);
            break;
          case "update_refine_log":
            console.assert("log" in msg);
            setRefineLog(msg["log"]);

            if ("success" in msg && !msg["success"]){
              setRefineLoading(false);
              setRefineRanSuccessfully(false);
            }

            if (!("reflections_summary" in msg)){
              break;
            }
            setRefineLoading(false);


            setIntegrateEnabled(true);
            setRefineRanSuccessfully(true);

            console.assert("reflections_summary" in msg);
            setReflectionsSummary("Identified " + msg["reflections_summary"])

            console.assert("crystal_summary" in msg);
            setCrystalSummary("<b> Unit Cell: </b>" + msg["crystal_summary"]);

            console.assert("reflection_table" in msg);
            updateReflectionTable(msg["reflection_table"]);
            setRLVEnabled(true);
            setReflectionTableEnabled(true);
            break;
          case "update_integrate_log":
            console.assert("log" in msg);
            setIntegrateLog(msg["log"]);
            if ("success" in msg && !msg["success"]){
              setIntegrateLoading(false);
              setIntegrateRanSuccessfully(false);
            }
            if (!("reflections_summary" in msg)){
              break;
            }

            setIntegrateLoading(false);

            console.assert("reflections_summary" in msg);
            setReflectionsSummary("Identified " + msg["reflections_summary"])

            console.assert("crystal_summary" in msg);
            setCrystalSummary("<b> Unit Cell: </b>" + msg["crystal_summary"]);

            console.assert("reflection_table" in msg);
            updateReflectionTable(msg["reflection_table"]);
            setReflectionTableEnabled(true);
            setIntegrateRanSuccessfully(true);
            break;

          case "update_lineplot":
            const lineplotData: LineplotData[] = [];

            console.assert("x" in msg);
            console.assert("y" in msg);
            console.assert("bboxPos" in msg);
            console.assert("title" in msg);
            console.assert("centroidPos" in msg);
            console.assert("updateTableSelection" in msg);

            for (var i = 0; i < msg["x"].length; i++){
              lineplotData.push(
                {
                  x: msg["x"][i],
                  y: msg["y"][i]
                }
              )
            }
            setLineplot(lineplotData);
            setLineplotBboxData(msg["bboxPos"]);
            setLineplotTitle(msg["title"]);
            setLineplotCentroidData(msg["centroidPos"]);
            if (msg["centroidPos"].length > 0 && msg["updateTableSelection"] == true){
              setSelectedReflectionId(msg["centroidPos"][0].id);
            }
            break;

          case "update_reflection_table":
            console.assert("reflections_summary" in msg);
            setReflectionsSummary("Identified " + msg["reflections_summary"])
            console.assert("reflection_table" in msg);
            updateReflectionTable(msg["reflection_table"]);
            break;
          default:
            console.warn("Unrecognised command ", command);
        }
      };

  }


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
              <FileTree activeFilename={activeFilename} 
                    setActiveFilename={setActiveFilename} 
                    activeFilenames={activeFilenames} serverWS={serverWS}></FileTree>
              <ReflectionTableSheet 
              enabled={reflectionTableEnabled} 
              reflections={reflectionTable}
              setReflectionTable={setReflectionTable}
              selectedReflectionId={selectedReflectionId}
              setSelectedReflectionId={setSelectedReflectionId}
              serverWS={serverWS}
              ></ReflectionTableSheet>
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
          <div>
          <StateTabs 
          experimentViewerStates={experimentViewerStates}
          rLVStates={rLVStates}
          selectedReflectionId={selectedReflectionId}
          setSelectedReflectionId={setSelectedReflectionId}
          activeTab={activeStateTab}
          setActiveTab={setActiveStateTab}
          />
          </div>
          <div>
          <AlgorithmTabs 
          importStates={importStates}
          findSpotsStates={findSpotsStates}
          indexStates={indexStates}
          refineStates={refineStates}
          integrateStates={integrateStates}
          serverWS={serverWS}
          activeTab={activeAlgorithimTab}
          setActiveTab={setActiveAglorithmTab}
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
        height: "10vh",
        width: "7vw"
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
