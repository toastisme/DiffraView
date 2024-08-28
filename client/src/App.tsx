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
import { ErrorHandler } from "./components/errorHandler"
import { Toaster } from "./components/ui/toaster"
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

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
  const [userMessage, setUserMessage] = useState<string>("");

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
    }, 1000)
    setTimeout(() => { setViewerLoadDelay(true) }, 5000)
  }, [])

  /*
    Summary states
   */


  const [instrumentName, setInstrumentName] = useState<string>("");
  const [experimentDescription, setExperimentDescription] = useState<string>("");
  const [reflectionsSummary, setReflectionsSummary] = useState<string>("");
  const [crystalSummary, setCrystalSummary] = useState<string>("");
  const [integrationSummary, setIntegrationSummary] = useState<string>("");

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
  const [findSpotsGain, setFindSpotsGain] = useState<string>("1.0");
  const [findSpotsSigmaStrong, setFindSpotsSigmaStrong] = useState<string>("3.0");
  const [findSpotsSigmaBG, setFindSpotsSigmaBG] = useState<string>("6.0");
  const [findSpotsGlobalThreshold, setFindSpotsGlobalThreshold] = useState<string>("0.0");
  const [findSpotskernelSize, setFindSpotsKernelSize] = useState<string>("3,3");
  const [findSpotsMinLocal, setFindSpotsMinLocal] = useState<string>("2");
  const [findSpotsIQR, setFindSpotsIQR] = useState<string>("6");
  const [findSpotsBlur, setFindSpotsBlur] = useState<string>("none");
  const [findSpotsNbins, setFindSpotsNBins] = useState<string>("100");


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
  const [vanadiumRun, setVanadiumRun] = useState<string>("None");
  const [emptyRun, setEmptyRun] = useState<string>("None");
  const [sampleDensity, setSampleDensity] = useState<string>("");
  const [sampleRadius, setSampleRadius] = useState<string>("");
  const [sampleScatteringXSection, setSampleScatteringXSection] = useState<string>("");
  const [sampleAbsorptionXSection, setSampleAbsorptionXSection] = useState<string>("");
  const [vanadiumDensity, setVanadiumDensity] = useState<string>("0.0722");
  const [vanadiumRadius, setVanadiumRadius] = useState<string>("0.03");
  const [vanadiumScatteringXSection, setVanadiumScatteringXSection] = useState<string>("5.158");
  const [vanadiumAbsorptionXSection, setVanadiumAbsorptionXSection] = useState<string>("4.4883");
  const [applyLorentz, setApplyLorentz] = useState<boolean>(false);

  const importStates: ImportStates = {
    setLog: setImportLog,
    log: importLog,
    setLoading: setImportLoading,
    loading: importLoading,
    localFileDir: importLocalFileDir,
    setLocalFileDir: setImportLocalFileDir,
    usingLocalServer: importUsingLocalServer,
    setUsingLocalServer: setImportUsingLocalServer,
    ranSuccessfully: importRanSuccessfully,
    currentFileKey: currentFileKey
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
    ranSuccessfully: findSpotsRanSuccessfully,
    gain: findSpotsGain,
    setGain: setFindSpotsGain,
    sigmaStrong: findSpotsSigmaStrong,
    setSigmaStrong: setFindSpotsSigmaStrong,
    sigmaBG: findSpotsSigmaBG,
    setSigmaBG: setFindSpotsSigmaBG,
    globalThreshold: findSpotsGlobalThreshold,
    setGlobalThreshold: setFindSpotsGlobalThreshold,
    kernelSize: findSpotskernelSize,
    setKernelSize: setFindSpotsKernelSize,
    minLocal: findSpotsMinLocal,
    setMinLocal: setFindSpotsMinLocal,
    iQR: findSpotsIQR,
    setIQR: setFindSpotsIQR,
    blur: findSpotsBlur,
    setBlur: setFindSpotsBlur,
    nBins: findSpotsNbins,
    setNBins: setFindSpotsNBins
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
    saveHKLEnabled: saveHKLEnabled,
    vanadiumRun: vanadiumRun,
    setVanadiumRun: setVanadiumRun,
    emptyRun: emptyRun,
    setEmptyRun: setEmptyRun,
    sampleDensity: sampleDensity,
    setSampleDensity: setSampleDensity,
    sampleRadius: sampleRadius,
    setSampleRadius: setSampleRadius,
    sampleAbsorptionXSection: sampleAbsorptionXSection,
    setSampleAbsorptionXSection: setSampleAbsorptionXSection,
    sampleScatteringXSection: sampleScatteringXSection,
    setSampleScatteringXSection: setSampleScatteringXSection,
    vanadiumDensity: vanadiumDensity,
    setVanadiumDensity: setVanadiumDensity,
    vanadiumRadius: vanadiumRadius,
    setVanadiumRadius: setVanadiumRadius,
    vanadiumAbsorptionXSection: vanadiumAbsorptionXSection,
    setVanadiumAbsorptionXSection: setVanadiumAbsorptionXSection,
    vanadiumScatteringXSection: vanadiumScatteringXSection,
    setVanadiumScatteringXSection: setVanadiumScatteringXSection,
    applyLorentz: applyLorentz,
    setApplyLorentz: setApplyLorentz
  };

  /*
    StateTabs states
  */

  const [numExperiments, setNumExperiments] = useState<number>(0);
  const numExperimentsRef = useRef<number | null>();
  const [activeStateTab, setActiveStateTab] = useState<string>("experiment-viewer");
  const initialLineplotData: LineplotData[] = [{ x: -1, y: 0 }];
  const [lineplot, setLineplot] = useState<LineplotData[]>(initialLineplotData);

  const initialLineplotBboxData: LineplotBboxData[] = [];
  const [lineplotBboxData, setLineplotBboxData] = useState<LineplotBboxData[]>(initialLineplotBboxData);

  const initialLineplotCentroidData: LineplotCentroidData[] = [];
  const [lineplotCentroidData, setLineplotCentroidData] = useState<LineplotCentroidData[]>(initialLineplotCentroidData);

  const [lineplotTitle, setLineplotTitle] = useState<string>("");
  const [newReflectionXYStored, setNewReflectionXYStored] = useState<boolean>(false);

  const [experimentViewerHidden, setExperimentViewerHidden] = useState<boolean>(false);
  const [experimentViewerLoading, setExperimentViewerLoading] = useState<boolean>(false);
  const [experimentPlannerHidden, setExperimentPlannerHidden] = useState<boolean>(false);
  const [experimentPlannerLoading, setExperimentPlannerLoading] = useState<boolean>(false);
  const [experimentPlannerOrientations, setExperimentPlannerOrientations] = useState<number[]>([]);
  const experimentPlannerOrientationsRef= useRef<number[]>([]);
  const [experimentPlannerReflections, setExperimentPlannerReflections] = useState<number[]>([]);
  const [experimentPlannerPredReflections, setExperimentPlannerPredReflections] = useState<number[]>([]);
  const [experimentPlannerCompleteness, setExperimentPlannerCompleteness] = useState<number[]>([]);
  const [experimentPlannerEnabled, setExperimentPlannerEnabled] = useState<boolean>(false);
  const [rLVEnabled, setRLVEnabled] = useState<boolean>(false);
  const [rLVHidden, setRLVHidden] = useState<boolean>(false);
  const [rLVLoading, setRLVLoading] = useState<boolean>(false);

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
    serverWS: serverWS,
    newReflectionXYStored: newReflectionXYStored,
    hidden: experimentViewerHidden,
    setHidden: setExperimentViewerHidden,
    loading: experimentViewerLoading,
    setLoading: setExperimentViewerLoading,
    currentMinTOF: currentMinTOF,
    currentMaxTOF: currentMaxTOF,
    minTOF: minTOF,
    maxTOF: maxTOF
  }

  const rLVStates: RLVStates = {
    enabled: rLVEnabled,
    hidden: rLVHidden,
    setHidden: setRLVHidden,
    loading: rLVLoading,
    setLoading: setRLVLoading
  }

  const experimentPlannerStates: ExperimentPlannerStates = {
    enabled: experimentPlannerEnabled,
    hidden: experimentPlannerHidden,
    setHidden: setExperimentPlannerHidden,
    orientations: experimentPlannerOrientations,
    reflections: experimentPlannerReflections,
    predReflections: experimentPlannerPredReflections,
    completeness: experimentPlannerCompleteness,
    numExpOrientations: numExperiments,
    setOrientations: setExperimentPlannerOrientations,
    setReflections: setExperimentPlannerReflections,
    setPredReflections: setExperimentPlannerPredReflections,
    loading: experimentPlannerLoading,
    setLoading: setExperimentPlannerLoading
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
      wavelengthCal:  "-",
      tof: "-",
      tofCal: "-",
      peakIntensity: "-",
      summedIntensity: "-",
      profileIntensity: "-",
      exptID: "0"
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
    lineProfileValue: integrationProfilerLineValue,
    lineProfileSigma: integrationProfilerLineSigma,
    summationValue: integrationProfilerSummationValue,
    summationSigma: integrationProfilerSummationSigma,
    title: integrationProfilerTitle,
    loading: integrationProfilerLoading,
    setLoading: setIntegrationProfilerLoading,
    serverWS: serverWS,
    reflectionID: selectedReflectionId
  }

  function updateParam(key: string, value: string){
    type ParamMap = {
      [key: string] : React.Dispatch<React.SetStateAction<string>>
    }
    const param_map: ParamMap = {
      "vanadium_run" : setVanadiumRun,
      "empty_run" : setEmptyRun
    };

    console.assert(key in param_map);
    param_map[key](value);
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
          peakIntensity: "peakIntensity" in refl ? refl["peakIntensity"].toFixed(0) : "-",
          panel: panelKeys[i],
          panelName: refl["panelName"],
          millerIdx: "millerIdx" in refl && refl["indexed"] ? "(" + refl["millerIdx"][0] + ", " + refl["millerIdx"][1] + ", " + refl["millerIdx"][2] + ")" : "-",
          XYZObs: "xyzObs" in refl ? "(" + refl["xyzObs"][1].toFixed(0) + ", " + refl["xyzObs"][0].toFixed(0) + ")" : "-",
          XYZCal: "xyzCal" in refl && refl["indexed"] ? "(" + refl["xyzCal"][1].toFixed(0) + ", " + refl["xyzCal"][0].toFixed(0) + ")" : "-",
          wavelength: "wavelength" in refl ? refl["wavelength"].toFixed(3) : "-",
          wavelengthCal: "wavelengthCal" in refl ? refl["wavelengthCal"].toFixed(3) : "-",
          tof: "tof" in refl ? (refl["tof"]).toFixed(0) : "-",
          tofCal: "tofCal" in refl ? (refl["tofCal"]).toFixed(0) : "-",
          summedIntensity: "summedIntensity" in refl ? (refl["summedIntensity"]).toFixed(3) : "-",
          profileIntensity: "profileIntensity" in refl ? (refl["profileIntensity"]).toFixed(3) : "-",
          exptID: "exptID" in refl ? refl["exptID"] : "0"
        });
      }
    }

    setReflectionTable(reflections);
  }

  function appendPlannerOrientation(orientation: number, reflections: number, predReflections: number, completeness: number) {
    setExperimentPlannerOrientations(prevOrientations => [...prevOrientations, orientation]);
    setExperimentPlannerReflections(prevReflections => [...prevReflections, reflections]);
    setExperimentPlannerPredReflections(prevPredReflections => [...prevPredReflections, predReflections]);
    setExperimentPlannerCompleteness(prevCompleteness => [...prevCompleteness, completeness]);
  }

  function updatePlannerOrientation(
    orientation: number, 
    predReflections: number,
  ) {
    const orientations = experimentPlannerOrientations;
    if (numExperimentsRef.current === null || numExperimentsRef.current === undefined){
      return;
    }
    if (experimentPlannerOrientationsRef.current === null || experimentPlannerOrientationsRef.current === undefined){
      return;
    }
    if (numExperimentsRef.current >= experimentPlannerOrientationsRef.current.length){
      setExperimentPlannerOrientations(prevOrientations => [...prevOrientations, orientation]);
      setExperimentPlannerPredReflections(prevPredReflections => [...prevPredReflections, predReflections]);
    } else {
      setExperimentPlannerOrientations(prevOrientations => {
        const newOrientations = [...prevOrientations];
        newOrientations[prevOrientations.length-1] = orientation;
        return newOrientations;
      });

      setExperimentPlannerPredReflections(prevPredReflections => {
        const newPredReflections = [...prevPredReflections];
        newPredReflections[prevPredReflections.length-1] = predReflections;
        return newPredReflections;
      });
    }
  }

  function clearPlannerUserPredictedReflections(numInitialOrientations: number){
    setExperimentPlannerOrientations(prevOrientations => prevOrientations.slice(0, numInitialOrientations));
    setExperimentPlannerPredReflections(prevPredReflections => prevPredReflections.slice(0, numInitialOrientations));
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
      }
      setAppLoading(false);
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
          console.assert("log" in msg,
            "no log found from dials import");
          setImportLog(msg["log"]);
          if ("success" in msg && !msg["success"]) {
            setImportLoading(false);
            setImportRanSuccessfully(false);
          }
          break;
        case "load_experiment":
          console.assert("algorithm_logs" in msg,
            "no algorithm logs found in experiment");
          setImportLog(msg["algorithm_logs"]["dials.import"])
          setActiveAglorithmTab("import");


          if (msg["algorithm_logs"]["dials.import"] != "") {
            setFindSpotsEnabled(true);
            setActiveAglorithmTab("find-spots");
          }
          setFindSpotsLog(msg["algorithm_logs"]["dials.find_spots"])
          if (msg["algorithm_logs"]["dials.find_spots"] != "") {
            console.assert("reflections_summary" in msg,
              "no reflections summary found in experiment but find spots has been run");
            setReflectionsSummary("Identified " + msg["reflections_summary"])

            console.assert("reflection_table" in msg,
              "no reflection table found in experiment but find spots has been run");
            updateReflectionTable(msg["reflection_table"]);
            setReflectionTableEnabled(true);
            setIndexEnabled(true);
            setRLVEnabled(true);
            setActiveAglorithmTab("index");
          }
          setIndexLog(msg["algorithm_logs"]["dials.index"])
          if (msg["algorithm_logs"]["dials.index"] != "") {
            console.assert("crystal_summary" in msg,
              "no crystal found in experiment but indexing has been run");
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



          console.assert("instrument_name" in msg,
            "instrument name not found in experiment");
          setInstrumentName("<b>Instrument: </b>" + msg["instrument_name"]);

          console.assert("experiment_description" in msg,
            "experiment description not found in experiment");
          setExperimentDescription("<b> Experiment: </b>" + msg["experiment_description"]);

          console.assert("tof_range" in msg,
            "tof range not found in experiment");
          setMinTOF(msg["tof_range"][0]);
          setCurrentMinTOF(msg["tof_range"][0]);
          setMaxTOF(msg["tof_range"][1]);
          setCurrentMaxTOF(msg["tof_range"][1]);
          setStepTOF(msg["tof_range"][2])
          console.assert("active_filename" in msg,
            "active filename not found in experiment");
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
          setExperimentViewerLoading(true);

          setActiveStateTab("experiment-viewer");
          setExperimentViewerHidden(false);
          setRLVHidden(true);

          console.assert("instrument_name" in msg,
            "instrument name not found in experiment");
          setInstrumentName("<b>Instrument: </b>" + msg["instrument_name"]);

          console.assert("experiment_description" in msg,
            "instrument description not found in experiment");
          setExperimentDescription("<b> Experiment: </b>" + msg["experiment_description"]);

          console.assert("tof_range" in msg,
            "tof range not found in experiment");
          setMinTOF(msg["tof_range"][0]);
          setCurrentMinTOF(msg["tof_range"][0]);
          setMaxTOF(msg["tof_range"][1]);
          setCurrentMaxTOF(msg["tof_range"][1]);
          setStepTOF(msg["tof_range"][2])

          console.assert("open_file_keys" in msg,
            "active filenames not found in experiment");
          setOpenFileKeys(msg["open_file_keys"]);
          console.assert("current_file_key" in msg,
            "active filename not found in experiment");
          setCurrentFileKey(msg["current_file_key"]);
          setSaveEnabled(true);

          console.assert("goniometer_orientation" in msg,
            "goniometer orientations not found in experiment");
          console.assert("predicted_reflections" in msg,
            "predicted reflections not found in experiment");
          console.assert("num_experiments" in msg);
          setNumExperiments(msg["num_experiments"])

          break;
        case "clear_experiment":
          setFindSpotsEnabled(false);
          setIndexEnabled(false);
          setRefineEnabled(false);
          setDetectSymmetryEnabled(false);
          setIntegrateEnabled(false);
          setRLVEnabled(false);
          setExperimentPlannerEnabled(false);
          setIntegrationProfilerEnabled(false);
          setExperimentDescription("");
          setInstrumentName("");
          setReflectionTableEnabled(false);
          setReflectionsSummary("");
          setCrystalSummary("");
          setIntegrationSummary("");
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
          console.assert("log" in msg,
            "log not found after running find spots");
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
          setRefineEnabled(false);
          setIntegrateEnabled(false);
          setDetectSymmetryEnabled(false);
          setCrystalSummary("");
          setIntegrationSummary("");
          setIndexLog("");
          setRefineLog("");
          setIntegrateLog("");
          setSelectedReflectionId("");
          setSaveHKLEnabled(false);
          setIntegrationProfilerEnabled(false);

          console.assert("reflections_summary" in msg,
            "reflections summary not found after running find spots");
          setReflectionsSummary("Identified " + msg["reflections_summary"])

          console.assert("reflection_table" in msg,
            "reflection table not found after running find spots");
          updateReflectionTable(msg["reflection_table"]);
          setReflectionTableEnabled(true);
          setRLVEnabled(true);
          setFindSpotsRanSuccessfully(true);
          break;

        case "update_index_log":
          console.assert("log" in msg,
            "log not found after running indexing");
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

          console.assert("reflections_summary" in msg,
            "reflections summary not found after running indexing");
          setReflectionsSummary("Identified " + msg["reflections_summary"])

          console.assert("crystal_summary" in msg,
            "crystal summary not found after running indexing");
          setCrystalSummary("<b> Unit Cell: </b>" + msg["crystal_summary"]);

          console.assert("reflection_table" in msg,
            "reflection table not found after running indexing");
          updateReflectionTable(msg["reflection_table"]);
          setRLVEnabled(true);
          setReflectionTableEnabled(true);
          setIntegrateEnabled(false);
          setIntegrationProfilerEnabled(false);
          break;

        case "update_refine_log":
          console.assert("log" in msg,
            "log not found after running refinement");
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
          setIntegrationProfilerEnabled(true);
          setRefineRanSuccessfully(true);

          console.assert("reflections_summary" in msg,
            "reflections summary not found after running refinement");
          setReflectionsSummary("Identified " + msg["reflections_summary"])

          console.assert("crystal_summary" in msg,
            "crystal summary not found after running refinement");
          setCrystalSummary("<b> Unit Cell: </b>" + msg["crystal_summary"]);

          console.assert("reflection_table" in msg,
            "reflection table not found after running refinement");
          updateReflectionTable(msg["reflection_table"]);
          setRLVEnabled(true);
          setReflectionTableEnabled(true);
          break;

        case "update_integrate_log":
          console.assert("log" in msg,
            "log not found after running integration");
          setIntegrateLog(msg["log"]);
          if ("success" in msg && !msg["success"]) {
            setIntegrateLoading(false);
            setIntegrateRanSuccessfully(false);
          }
          if (!("reflections_summary" in msg)) {
            break;
          }

          setIntegrateLoading(false);

          console.assert("reflections_summary" in msg,
            "reflections summary not found after running integration");
          setReflectionsSummary("Identified " + msg["reflections_summary"])

          console.assert("crystal_summary" in msg,
            "crystal summary not found after running integration");
          setCrystalSummary("<b> Unit Cell: </b>" + msg["crystal_summary"]);

          console.assert("reflection_table" in msg,
            "reflection table not found after running integration");
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

          console.assert("x" in msg, "x not found in lineplot");
          console.assert("y" in msg, "y not found in lineplot");
          console.assert("bboxPos" in msg, "bboxPos not found in lineplot");
          console.assert("title" in msg, "title not found in lineplot");
          console.assert("centroidPos" in msg, "centroidPos not found in lineplot");
          console.assert("updateTableSelection" in msg, "updateTableSelection not found in lineplot");

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

          if ("updateIntegrationProfiler" in msg && msg["updateIntegrationProfiler"]) {
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

        case "clear_lineplot":
          setLineplot(initialLineplotData);
          setLineplotBboxData(initialLineplotBboxData);
          setLineplotTitle("");
          setLineplotCentroidData(initialLineplotCentroidData);
          break;

        case "update_reflection_table":
          console.assert("reflections_summary" in msg,
            "reflections summary not found when trying to update reflection table");
          setReflectionsSummary("Identified " + msg["reflections_summary"])
          console.assert("reflection_table" in msg,
            "reflection table not found when trying to update reflection table");
          updateReflectionTable(msg["reflection_table"]);
          break;

        case "add_planner_orientation":
          console.assert("orientation" in msg,
            "orientation not found when trying to add planner orientation");
          console.assert("num_reflections" in msg,
            "num_reflections not found when trying to add planner orientation");
          console.assert("predicted_num_reflections" in msg,
            "predicted_num_reflections not found when trying to add planner orientation");
          console.assert("completeness" in msg,
            "num_reflections not found when trying to add planner orientation");
          appendPlannerOrientation(msg["orientation"], msg["num_reflections"],
            msg["predicted_num_reflections"], msg["completeness"]
          )
          break;

        case "update_planner_orientation":
          console.assert("orientation" in msg,
            "orientations not found when trying to update planner orientation");
          console.assert("reflections" in msg,
            "reflections not found when trying to update planner orientation");
          updatePlannerOrientation(
            msg["orientation"], 
            msg["reflections"],
          );
          break;

        case "clear_planner_user_predicted_reflections":
          console.assert("num_initial_orientations" in msg);
          clearPlannerUserPredictedReflections(
            msg["num_initial_orientations"]
          )
          break; 

        case "get_planner_orientations":
          console.assert("dmin" in msg,
            "dmin not found when trying to get planner orientations");
          console.assert("phi" in msg,
            "phi not found when trying to get planner orientations"
          );
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
        case "updating_experiment_viewer":
          setExperimentViewerLoading(true);
          break;
        case "finished_updating_experiment_viewer":
          setExperimentViewerLoading(false);
          break;
        case "updating_rlv":
          setRLVLoading(true);
          break;
        case "finished_updating_rlv":
          setRLVLoading(false);
          break;
        case "finished_updating_experiment_planner":
          setExperimentPlannerLoading(false);
          break;
        case "cancel_update_import_log":
          setImportLoading(false);
          break;
        case "cancel_update_find_spots_log":
          setFindSpotsLoading(false);
          break;
        case "cancel_update_index_log":
          setIndexLoading(false);
          break;
        case "cancel_update_refine_log":
          setRefineLoading(false);
          break;
        case "cancel_update_integrate_log":
          setIntegrateLoading(false);
          break;
        case "new_reflection_xy":
          setNewReflectionXYStored(true);
          break;
        case "cancel_new_reflection":
          setNewReflectionXYStored(false);
          break;
        case "selected_file":
          console.assert("update_param" in msg);
          console.assert("value" in msg);
          updateParam(msg["update_param"], msg["value"]);
          break;
        case "display_message":
          console.assert("message" in msg);
          setUserMessage(msg["message"])
          break;
        case "update_experiment_description":
          console.assert("experiment_description" in msg);
          setExperimentDescription("<b> Experiment: </b>" + msg["experiment_description"]);
          break;
        default:
          console.warn("Unrecognised command ", command);
      }
    };

  }

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

  useEffect(() => {
    numExperimentsRef.current = numExperiments;
  }, [numExperiments])

  useEffect(() => {
    experimentPlannerOrientationsRef.current = experimentPlannerOrientations;
  }, [experimentPlannerOrientations])
  useEffect(() => {
  }, [experimentPlannerPredReflections])

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

  const handleBeforeUnload = () => {
    /*
    serverWS.current?.send(JSON.stringify({ "channel": "server",
      "command" : "close",
      }));
      */
  };
  window.addEventListener("beforeunload", handleBeforeUnload);

  return (
    <div className="App h-[100vh] overflow-hidden">
      {
        appLoading || minAppLoading ?
          <LoadingScreen loading={appLoading} minLoading={minAppLoading} />
          :
          <div className="grid grid-rows-20 gap-3">
            <ErrorHandler />
            <Toaster />
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
