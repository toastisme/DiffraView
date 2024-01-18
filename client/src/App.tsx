import { useEffect, useState, useRef } from "react"
import { AlgorithmTabs } from "./components/AlgorithmTabs"
import { StateTabs } from "./components/StateTabs"
import { FileTree } from "./components/FileTree"
import { ReflectionTableSheet } from "./components/ReflectionTable"
import {
  ExperimentViewerStates, LineplotData, LineplotBboxData,
  LineplotCentroidData, RLVStates, BravaisLattice,
  ExperimentPlannerStates, IntegrationProfilerStates
} from "./types"
import { ImportStates, FindSpotsStates, IndexStates, RefineStates, IntegrateStates } from "./types";
import { LoadingScreen } from "./components/LoadingScreen"
import { ExperimentSummary } from "./components/ExperimentSummary"
import { Reflection } from "./types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faTimes, faSave } from '@fortawesome/free-solid-svg-icons';
import { Button } from "@/components/ui/button"

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
  const [viewerLoadDelay, setViewerLoadDelay] = useState<boolean>(false);

  useEffect(() => {
    setAppLoading(true)
    setMinAppLoading(true)
    connectToServer();
    setTimeout(() => {
      setMinAppLoading(false)
    }, 2000)
    setTimeout(() => { setViewerLoadDelay(true) }, 5000)
  }, [])

  /*
    Summary states
   */


  const [instrumentName, setInstrumentName] = useState<string>("");
  const [experimentDescription, setExperimentDescription] = useState<string>("");
  const [reflectionsSummary, setReflectionsSummary] = useState<string>("");
  const [crystalSummary, setCrystalSummary] = useState<string>("");
  const [integrationSummary, setintegrationSummary] = useState<string>("");

  const [saveEnabled, setSaveEnabled] = useState<boolean>(false);
  const [reflectionTableEnabled, setReflectionTableEnabled] = useState<boolean>(false);
  const [openFileKeys, setOpenFileKeys] = useState<string[]>([]);
  const [currentFileKey, setCurrentFileKey] = useState<string>("");

  /*
    Algorithm states
  */

  const [activeAlgorithimTab, setActiveAglorithmTab] = useState<string>("import");

  // ImportTab
  const [importLoading, setImportLoading] = useState<boolean>(false);
  const [importLog, setImportLog] = useState<string>("");
  const [importRanSuccessfully, setImportRanSuccessfully] = useState<boolean>(true);
  const [importLocalFileDir, setImportLocalFileDir] = useState<string>("./");
  const [importUsingLocalServer, setImportUsingLocalServer] = useState<boolean>(false);

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

  const [bravaisLattices, setBravaisLattices] = useState<BravaisLattice[]>(initialBravaisLattices);

  // IntegrateTab
  const [integrateEnabled, setIntegrateEnabled] = useState<boolean>(false);
  const [integrateLoading, setIntegrateLoading] = useState<boolean>(false);
  const [integrateLog, setIntegrateLog] = useState<string>("");
  const [integrateRanSuccessfully, setIntegrateRanSuccessfully] = useState(true);
  const [saveHKLEnabled, setSaveHKLEnabled] = useState<boolean>(false);

  const importStates: ImportStates = {
    setLog: setImportLog,
    log: importLog,
    setLoading: setImportLoading,
    loading: importLoading,
    localFileDir: importLocalFileDir,
    setLocalFileDir: setImportLocalFileDir,
    usingLocalServer: importUsingLocalServer,
    setUsingLocalServer : setImportUsingLocalServer,
    ranSuccessfully: importRanSuccessfully
  };
  const findSpotsStates: FindSpotsStates = {
    setLog: setFindSpotsLog,
    enabled: findSpotsEnabled,
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
    enabled: indexEnabled,
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
  const refineStates: RefineStates = {
    setLog: setRefineLog,
    enabled: refineEnabled,
    loading: refineLoading,
    setLoading: setRefineLoading,
    log: refineLog,
    ranSuccessfully: refineRanSuccessfully
  };
  const integrateStates: IntegrateStates = {
    setLog: setIntegrateLog,
    enabled: integrateEnabled,
    loading: integrateLoading,
    setLoading: setIntegrateLoading,
    log: integrateLog,
    ranSuccessfully: integrateRanSuccessfully,
    saveHKLEnabled: saveHKLEnabled
  };

  /*
    StateTabs states
  */

  const [activeStateTab, setActiveStateTab] = useState<string>("experiment-viewer");
  const initialLineplotData: LineplotData[] = [{ x: -1, y: 0 }];
  const [lineplot, setLineplot] = useState<LineplotData[]>(initialLineplotData);

  const initialLineplotBboxData: LineplotBboxData[] = [];
  const [lineplotBboxData, setLineplotBboxData] = useState<LineplotBboxData[]>(initialLineplotBboxData);

  const initialLineplotCentroidData: LineplotCentroidData[] = [];
  const [lineplotCentroidData, setLineplotCentroidData] = useState<LineplotCentroidData[]>(initialLineplotCentroidData);

  const [lineplotTitle, setLineplotTitle] = useState<string>("-");

  const [experimentViewerHidden, setExperimentViewerHidden] = useState<boolean>(false);
  const [experimentPlannerHidden, setExperimentPlannerHidden] = useState<boolean>(false);
  const [experimentPlannerOrientations, setExperimentPlannerOrientations] = useState<number[]>([]);
  const [experimentPlannerReflections, setExperimentPlannerReflections] = useState<number[]>([]);
  const [experimentPlannerEnabled, setExperimentPlannerEnabled] = useState<boolean>(false);
  const [rLVEnabled, setRLVEnabled] = useState<boolean>(false);
  const [rLVHidden, setRLVHidden] = useState<boolean>(false);

  const [integrationProfilerEnabled, setIntegrationProfilerEnabled] = useState<boolean>(false);
  const [integrationProfilerHidden, setIntegrationProfilerHidden] = useState<boolean>(true);
  const [integrationProfilerTOF, setIntegrationProfilerTOF] = useState<number[]>([-1]);
  const [integrationProfilerIntensity, setIntegrationProfilerIntensity] = useState<number[]>([-1]);
  const [integrationProfilerBackground, setIntegrationProfilerBackground] = useState<number[]>([-1]);
  const [integrationProfilerLine, setIntegrationProfilerLine] = useState<number[]>([-1]);
  const [integrationProfilerLineValue, setIntegrationProfilerLineValue] = useState<number>(0);
  const [integrationProfilerLineSigma, setIntegrationProfilerLineSigma] = useState<number>(0);
  const [integrationProfilerSummationValue, setIntegrationProfilerSummationValue] = useState<number>(0);
  const [integrationProfilerSummationSigma, setIntegrationProfilerSummationSigma] = useState<number>(0);
  const [integrationProfilerTitle, setIntegrationProfilerTitle] = useState<string>("");
  const [integrationProfilerLoading, setIntegrationProfilerLoading] = useState<boolean>(false)

  const experimentViewerStates: ExperimentViewerStates = {
    lineplotData: lineplot,
    lineplotBboxData: lineplotBboxData,
    lineplotCentroidData: lineplotCentroidData,
    lineplotTitle: lineplotTitle,
    hidden: experimentViewerHidden,
    setHidden: setExperimentViewerHidden

  }

  const rLVStates: RLVStates = {
    enabled: rLVEnabled,
    hidden: rLVHidden,
    setHidden: setRLVHidden
  }

  const experimentPlannerStates: ExperimentPlannerStates = {
    enabled: experimentPlannerEnabled,
    hidden: experimentPlannerHidden,
    setHidden: setExperimentPlannerHidden,
    orientations: experimentPlannerOrientations,
    reflections: experimentPlannerReflections,
    setOrientations: setExperimentPlannerOrientations,
    setReflections: setExperimentPlannerReflections,
  }

  const emptyReflectionTable: Reflection[] = [
    {
      id: "0",
      panel: "-",
      panelName: "-",
      millerIdx: "-",
      XYZObs: "-",
      XYZCal: "-",
      wavelength: "-",
      tof: "-",
      peakIntensity: "-"
    }
  ]

  const [reflectionTable, setReflectionTable] = useState<Reflection[]>(emptyReflectionTable)
  const [selectedReflectionId, setSelectedReflectionId] = useState<string>("");

  const integrationProfilerStates: IntegrationProfilerStates = {
    enabled: integrationProfilerEnabled,
    hidden: integrationProfilerHidden,
    setHidden: setIntegrationProfilerHidden,
    tof: integrationProfilerTOF,
    intensity: integrationProfilerIntensity,
    background: integrationProfilerBackground,
    lineProfile: integrationProfilerLine,
    lineProfileValue  : integrationProfilerLineValue,
    lineProfileSigma  : integrationProfilerLineSigma,
    summationValue  : integrationProfilerSummationValue,
    summationSigma  : integrationProfilerSummationSigma,
    title: integrationProfilerTitle,
    loading: integrationProfilerLoading,
    setLoading: setIntegrationProfilerLoading,
    serverWS: serverWS,
    reflectionID: selectedReflectionId
  }

  function updateReflectionTable(msg: any): void {
    const panelKeys = Object.keys(msg);
    const reflections: Reflection[] = [];

    for (var i = 0; i < panelKeys.length; i++) {
      const panelReflections = msg[panelKeys[i]];
      for (var j = 0; j < panelReflections.length; j++) {
        const refl = panelReflections[j];
        reflections.push({
          id: refl["id"],
          peakIntensity: refl["peakIntensity"].toFixed(0),
          panel: panelKeys[i],
          panelName: refl["panelName"],
          millerIdx: "millerIdx" in refl && refl["indexed"] ? "(" + refl["millerIdx"][0] + ", " + refl["millerIdx"][1] + ", " + refl["millerIdx"][2] + ")" : "-",
          XYZObs: "xyzObs" in refl ? "(" + refl["xyzObs"][1].toFixed(0) + ", " + refl["xyzObs"][0].toFixed(0) + ")" : "-",
          XYZCal: "xyzCal" in refl && refl["indexed"] ? "(" + refl["xyzCal"][1].toFixed(0) + ", " + refl["xyzCal"][0].toFixed(0) + ")" : "-",
          wavelength: "wavelength" in refl ? refl["wavelength"].toFixed(3) : "-",
          tof: "tof" in refl ? (refl["tof"] * 10 ** 6).toFixed(3) : "-"
        });
      }
    }

    setReflectionTable(reflections);
  }

  function appendPlannerOrientation(orientation: number, reflections: number) {
    setExperimentPlannerOrientations(prevOrientations => [...prevOrientations, orientation]);
    setExperimentPlannerReflections(prevReflections => [...prevReflections, reflections]);
  }

  function updatePlannerOrientation(orientation: number, reflections: number) {
    setExperimentPlannerOrientations((prevOrientations) => {
      const copyOfOrientations = [...prevOrientations];
      if (copyOfOrientations.length > 0) {
        copyOfOrientations[copyOfOrientations.length - 1] = orientation;
        return copyOfOrientations;
      }
      return prevOrientations;
    });

    setExperimentPlannerReflections((prevreflections) => {
      const copyOfreflections = [...prevreflections];
      if (copyOfreflections.length > 0) {
        copyOfreflections[copyOfreflections.length - 1] = reflections;
        return copyOfreflections;
      }
      return prevreflections;
    });

  }

  function connectToServer(): void {

    console.log("connect to server called");
    serverWS.current = new WebSocket("ws://127.0.0.1:8888/");

    serverWS.current.onopen = () => {
      console.log('Frontend opened connection to server');
      if (serverWS.current?.readyState === WebSocket.OPEN) {
        serverWS.current?.send(JSON.stringify({
          "channel": "server",
          "command": "record_connection",
          "id": "gui"
        }
        ));
        setAppLoading(false);
      }
    };

    serverWS.current.onerror = (event) => {
      console.log("Frontend connection error:", event);
    }

    serverWS.current.onclose = () => {
      console.log('Frontend closed connection to server')
      serverWS.current = null;
      setTimeout(connectToServer, 5000);
    };

    function is_gui_msg(msg: any) {
      return "channel" in msg && msg["channel"] == "gui";
    }

    serverWS.current.onmessage = (event: any) => {
      const msg: any = JSON.parse(event.data);

      console.log("frontend msg received ", msg);

      if (!is_gui_msg(msg)) { return; }

      const command = msg["command"];

      switch (command) {
        case "update_import_log":
          console.assert("log" in msg);
          setImportLog(msg["log"]);
          if ("success" in msg && !msg["success"]) {
            setImportLoading(false);
            setImportRanSuccessfully(false);
          }
          break;
        case "load_experiment":
          console.assert("algorithm_logs" in msg)
          setImportLog(msg["algorithm_logs"]["dials.import"])
          setActiveAglorithmTab("import");


          if (msg["algorithm_logs"]["dials.import"] != "") {
            setFindSpotsEnabled(true);
            setActiveAglorithmTab("find-spots");
          }
          setFindSpotsLog(msg["algorithm_logs"]["dials.find_spots"])
          if (msg["algorithm_logs"]["dials.find_spots"] != "") {
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
          if (msg["algorithm_logs"]["dials.index"] != "") {
            console.assert("crystal_summary" in msg);
            if (msg["crystal_summary"] != "") {
              setCrystalSummary("<b> Unit Cell: </b>" + msg["crystal_summary"]);
            }
            setRefineEnabled(true);
            setDetectSymmetryEnabled(true);
            setIntegrateEnabled(true);
            setActiveAglorithmTab("refine");
          }
          setRefineLog(msg["algorithm_logs"]["dials.refine"])
          setIntegrateLog(msg["algorithm_logs"]["dev.dials.simple_tof_integrate"])
          if (msg["algorithm_logs"]["dials.index"] != "") {
            setActiveAglorithmTab("integrate");
          }

          if (msg["algorithm_logs"]["dev.dials.simple_tof_integrate"] != "") {
            setSaveHKLEnabled(true);
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
          setCurrentFileKey(msg["active_filename"]);
          setSaveEnabled(true);

          setActiveStateTab("experiment-viewer");
          setExperimentViewerHidden(false);
          setRLVHidden(true);
          setExperimentPlannerHidden(true)
          setSaveHKLEnabled(false);

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
          setOpenFileKeys(msg["open_file_keys"]);
          console.assert("active_filename" in msg);
          setCurrentFileKey(msg["active_filename"]);
          setSaveEnabled(true);

          console.assert("goniometer_orientation" in msg);
          console.assert("predicted_reflections" in msg);

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
          setSaveEnabled(false);
          setSaveHKLEnabled(false);
          break;

        case "update_find_spots_log":
          console.assert("log" in msg);
          setFindSpotsLog(msg["log"]);
          if ("success" in msg && !msg["success"]) {
            setFindSpotsLoading(false);
            setFindSpotsRanSuccessfully(false);
          }
          if (!("reflections_summary" in msg)) {
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

          if ("success" in msg && !msg["success"]) {
            setIndexLoading(false);
            setIndexRanSuccessfully(false);
          }

          if (!("reflections_summary" in msg) && !("bravais_lattices" in msg)) {
            break;
          }
          setIndexLoading(false);

          setIndexRanSuccessfully(true);
          setExperimentPlannerEnabled(true);
          setRefineEnabled(true);
          setDetectSymmetryEnabled(true);
          setIntegrateEnabled(true);

          if ("bravais_lattices" in msg) {
            const lattices: BravaisLattice[] = [];
            for (var i = 0; i < msg["bravais_lattices"].length; i++) {
              const bl: any = msg["bravais_lattices"][i];

              const unitCell: string[] = bl["Unit Cell"].replace(/\(|\)/g, '').split(', ') as unknown as string[]

              lattices.push(
                {
                  id: bl["Candidate"],
                  metricFit: bl["Metric Fit"],
                  RMSD: bl["RMSD"],
                  cc: bl["Min/Max CC"],
                  lattice: bl["Lattice"],
                  a: unitCell[0],
                  b: unitCell[1],
                  c: unitCell[2],
                  alpha: unitCell[3],
                  beta: unitCell[4],
                  gamma: unitCell[5],
                  volume: bl["Volume"],
                  recommended: bl["Recommended"] == "True" ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimes} />
                }
              )
            }
            setBravaisLattices(lattices)
            setDetectSymmetryOpen(true);
            return;
          }

          if ("reindexed_cell" in msg) {
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

          if ("success" in msg && !msg["success"]) {
            setRefineLoading(false);
            setRefineRanSuccessfully(false);
          }

          if (!("reflections_summary" in msg)) {
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
          if ("success" in msg && !msg["success"]) {
            setIntegrateLoading(false);
            setIntegrateRanSuccessfully(false);
          }
          if (!("reflections_summary" in msg)) {
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
          setSaveHKLEnabled(true);
          break;

        case "update_integration_profiler":
            setIntegrationProfilerTOF(msg["integrationProfilerTOF"]);
            setIntegrationProfilerIntensity(msg["integrationProfilerIntensity"]);
            setIntegrationProfilerBackground(msg["integrationProfilerBackground"]);
            setIntegrationProfilerLine(msg["integrationProfilerLine"]);
            setIntegrationProfilerLineValue(msg["integrationProfilerLineValue"]);
            setIntegrationProfilerLineSigma(msg["integrationProfilerLineSigma"]);
            setIntegrationProfilerSummationValue(msg["integrationProfilerSummationValue"]);
            setIntegrationProfilerSummationSigma(msg["integrationProfilerSummationSigma"]);
          break;

        case "update_lineplot":
          const lineplotData: LineplotData[] = [];

          console.assert("x" in msg);
          console.assert("y" in msg);
          console.assert("bboxPos" in msg);
          console.assert("title" in msg);
          console.assert("centroidPos" in msg);
          console.assert("updateTableSelection" in msg);

          for (var i = 0; i < msg["x"].length; i++) {
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
          if (msg["centroidPos"].length > 0 && msg["updateTableSelection"] == true) {
            setSelectedReflectionId(msg["centroidPos"][0].id);
          }

          if ("updateIntegrationProfiler" in msg && msg["updateIntegrationProfiler"]){
            setIntegrationProfilerTOF(msg["integrationProfilerTOF"]);
            setIntegrationProfilerIntensity(msg["integrationProfilerIntensity"]);
            setIntegrationProfilerBackground(msg["integrationProfilerBackground"]);
            setIntegrationProfilerLine(msg["integrationProfilerLine"]);
            setIntegrationProfilerLineValue(msg["integrationProfilerLineValue"]);
            setIntegrationProfilerLineSigma(msg["integrationProfilerLineSigma"]);
            setIntegrationProfilerSummationValue(msg["integrationProfilerSummationValue"]);
            setIntegrationProfilerSummationSigma(msg["integrationProfilerSummationSigma"]);
            setIntegrationProfilerTitle(msg["title"]);
          }
          break;

        case "update_reflection_table":
          console.assert("reflections_summary" in msg);
          setReflectionsSummary("Identified " + msg["reflections_summary"])
          console.assert("reflection_table" in msg);
          updateReflectionTable(msg["reflection_table"]);
          break;

        case "add_planner_orientation":
          console.assert("orientation" in msg);
          console.assert("reflections" in msg);
          appendPlannerOrientation(msg["orientation"], msg["reflections"])
          break;

        case "update_planner_orientation":
          console.assert("orientation" in msg);
          console.assert("reflections" in msg);
          updatePlannerOrientation(msg["orientation"], msg["reflections"])
          break;

        case "get_planner_orientations":
          console.assert("dmin" in msg);
          console.assert("phi" in msg);
          const orientations = [...experimentPlannerOrientations]
          const serverMsg = {
            "channel": "server",
            "command": "update_planner_goniometer_phi",
            "orientations": orientations,
            "dmin": msg["dmin"],
            "phi": msg["phi"]
          }
          serverWS.current?.send(JSON.stringify(serverMsg
          ))
          break;
        default:
          console.warn("Unrecognised command ", command);
      }
    };

  }

  useEffect(() => {
    const serverMsg = {
      "channel": "server",
      "command": "update_experiment_planner_params",
      "orientations": experimentPlannerOrientations,
      "num_reflections": experimentPlannerReflections
    }
    if (experimentPlannerOrientations.length !== 0) {
      serverWS.current?.send(JSON.stringify(serverMsg
      ))
    }

  }, [experimentPlannerOrientations])

  useEffect(() => {
    if (viewerLoadDelay === true) {
      experimentViewerStates.setHidden(false);
      rLVStates.setHidden(true);
      experimentPlannerStates.setHidden(true);
    }
  }, [viewerLoadDelay])


  return (
    <div className="App h-[100vh]">
      {
        appLoading || minAppLoading ?
          <LoadingScreen loading={appLoading} minLoading={minAppLoading} />
          :
          <div className="grid grid-rows-20 gap-3">
            <div className="row-span-1">
              <div className="grid grid-cols-8">
                <div className="col-span-1 grid grid-rows-2 gap-2">
                  <div className="[grid-column:1] [grid-row:1]">
                    <FileTree currentFileKey={currentFileKey}
                      setCurrentFileKey={setCurrentFileKey}
                      openFileKeys={openFileKeys} serverWS={serverWS}></FileTree>
                  </div>
                  <div className="grid grid-columns-2 gap-0">
                    <div className="[grid-column:1] [grid-row:2]">
                      <ReflectionTableSheet
                        enabled={reflectionTableEnabled}
                        reflections={reflectionTable}
                        setReflectionTable={setReflectionTable}
                        selectedReflectionId={selectedReflectionId}
                        setSelectedReflectionId={setSelectedReflectionId}
                        integrationProfilerHidden={integrationProfilerHidden}
                        setIntegrationProfilerLoading={setIntegrationProfilerLoading}
                        serverWS={serverWS}
                      ></ReflectionTableSheet>
                    </div>
                    <div className="[grid-column:2] [grid-row:2]">
                      <Button disabled={!saveEnabled} variant={"outline"} style={{ padding: "0px 6px" }} ><FontAwesomeIcon icon={faSave} style={{ marginRight: '5px' }}></FontAwesomeIcon> Save </Button>
                    </div>
                  </div>
                </div>
                <div className="col-start-2 col-span-6">
                  <ExperimentSummary
                    name={instrumentName}
                    summary={experimentDescription}
                    reflections_summary={reflectionsSummary}
                    crystal_summary={crystalSummary}
                    integration_summary={integrationSummary}></ExperimentSummary>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 ">
              <StateTabs
                experimentViewerStates={experimentViewerStates}
                rLVStates={rLVStates}
                experimentPlannerStates={experimentPlannerStates}
                integrationProfilerStates={integrationProfilerStates}
                selectedReflectionId={selectedReflectionId}
                setSelectedReflectionId={setSelectedReflectionId}
                activeTab={activeStateTab}
                setActiveTab={setActiveStateTab}
                serverWS={serverWS}
              />
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
          </div>
      }
    </div>
  )

}


export default App
