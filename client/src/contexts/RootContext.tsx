import React, { useRef, useState, createContext, useEffect, useContext } from 'react';
import { useImportContext } from './ImportContext';
import { useFindSpotsContext } from './FindSpotsContext';
import { useIndexContext } from './IndexContext';
import { useRefineContext } from './RefineContext';
import { useIntegrateContext } from './IntegrateContext';
import { useExperimentViewerContext } from './ExperimentViewerContext';
import { useRLVContext } from './RLVContext';
import { useExperimentPlannerContext } from './ExperimentPlannerContext';
import { useIntegrationProfilerContext } from './IntegrationProfilerContext';
import { Reflection, SoftwareBackend, ExperimentType } from '@/types';

interface RootContextType {
	serverWS: React.MutableRefObject<WebSocket | null>;
	currentFileKey: string;
	setCurrentFileKey : React.Dispatch<React.SetStateAction<string>>;
	openFileKeys: string[];
	numExperiments: number;
	experimentNames: Record<string, string>;
	selectedReflectionID : string;
	setSelectedReflectionID : React.Dispatch<React.SetStateAction<string>>;
	reflectionTableEnabled : boolean;
	reflections : Reflection[];
	setReflections : React.Dispatch<React.SetStateAction<Reflection[]>>;
	calculatedIntegratedReflections : Reflection[];
	setCalculatedIntegratedReflections : React.Dispatch<React.SetStateAction<Reflection[]>>;
	selectedExptID : string,
	setSelectedExptID : React.Dispatch<React.SetStateAction<string>>;
  showCalculatedIntegratedReflections: boolean,
  setShowCalculatedIntegratedReflections: React.Dispatch<React.SetStateAction<boolean>>,
	setActiveStateTab: React.Dispatch<React.SetStateAction<string>>,
	setActiveAlgorithmTab: React.Dispatch<React.SetStateAction<string>>,
	activeSoftware: SoftwareBackend,
	setActiveSoftware: React.Dispatch<React.SetStateAction<SoftwareBackend>>,
	experimentType: ExperimentType,
	setExperimentType: React.Dispatch<React.SetStateAction<ExperimentType>>,
  clearActiveLog: () => void
}

const RootContext = createContext<RootContextType | undefined>(undefined);

interface RootProviderProps{
	children: React.ReactNode;
	setAppLoading : React.Dispatch<React.SetStateAction<boolean>>
}

export const RootProvider: React.FC<RootProviderProps> = ({ children, setAppLoading }) => {

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

  const serverWS = useRef<WebSocket | null>(null);
  const [currentFileKey, setCurrentFileKey] = useState<string>("");
  const [openFileKeys, setOpenFileKeys] = useState<string[]>([]);
  const [numExperiments, setNumExperiments] = useState<number>(0);
  const [experimentNames, setExperimentNames] = useState<Record<string, string>>({});
  const [reflections, setReflections] = useState<Reflection[]>(emptyReflectionTable)
  const [calculatedIntegratedReflections, setCalculatedIntegratedReflections] = useState<Reflection[]>(emptyReflectionTable)
  const [selectedReflectionID, setSelectedReflectionID] = useState<string>("");
  const [selectedExptID, setSelectedExptID] = useState<string>("0");
  const [selectedReflectionTableExptID, setSelectedReflectionTableExptID] = useState<string>("0");
  const [reflectionTableShowCalculated, setReflectionTableShowCalculated] = useState<boolean>(false);
  const [reflectionTableEnabled, setReflectionTableEnabled] = useState<boolean>(false);
  const [showCalculatedIntegratedReflections, setShowCalculatedIntegratedReflections] = useState<boolean>(false);
  const [activeStateTab, setActiveStateTab] = useState<string>("experiment-viewer");
  const [activeAlgorithmTab, setActiveAlgorithmTab] = useState<string>("experiment-viewer");
  const [activeSoftware, setActiveSoftware] = useState<SoftwareBackend>(SoftwareBackend.DIALS);
  const [experimentType, setExperimentType] = useState<ExperimentType>(ExperimentType.ROTATION);

  const activeStateTabRef = useRef<string | null>(null);

  useEffect(() => {
    activeStateTabRef.current = activeStateTab;
  }, [activeStateTab]);

  const {
	reset: importReset, 
	updateParams: updateImportParams} = useImportContext();
	
  const {
	reset: findSpotsReset, 
	updateParams: updateFindSpotsParams} = useFindSpotsContext();

  const {
	reset: indexReset, 
	updateParams: updateIndexParams} = useIndexContext();
	
  const {
	reset: refineReset, 
	updateParams: updateRefineParams} = useRefineContext();

  const {
	reset: integrateReset, 
	updateParams: updateIntegrateParams} = useIntegrateContext();

  const {
	reset: experimentViewerReset, 
	updateParams: updateExperimentViewerParams,
	setHidden: setExperimentViewerHidden
	} = useExperimentViewerContext();

  const {
	reset: rLVReset, 
	setHidden: setRLVHidden,
	updateParams: updateRLVParams} = useRLVContext();

  const {
	reset: experimentPlannerReset, 
	setHidden: setExperimentPlannerHidden,
	orientations: experimentPlannerOrientations,
	predReflections: experimentPlannerPredReflections,
	updateParams: updateExperimentPlannerParams} = useExperimentPlannerContext();

  const {
	reset: integrationProfilerReset, 
	setHidden: setIntegrationProfilerHidden,
	updateParams: updateIntegrationProfilerParams} = useIntegrationProfilerContext();

  useEffect(() => {
    setAppLoading(true)
    connectToServer();
	reset();
	setDefaultStateTabsVisibility();
  }, [])

  function reset(){

	setNumExperiments(0);
	setCurrentFileKey("");
	setExperimentNames({});
	setReflectionTableEnabled(false);

	importReset();
	findSpotsReset();
	indexReset();
	refineReset();
	integrateReset();
	experimentViewerReset();
	rLVReset();
	experimentPlannerReset();
	integrationProfilerReset();

	setDefaultStateTabsVisibility();
  }

  function updateCalculatedReflectionTable(msg: any): void {
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
          XYZObs: "-",
          XYZCal: "xyzCal" in refl && refl["indexed"] ? "(" + refl["xyzCal"][1].toFixed(0) + ", " + refl["xyzCal"][0].toFixed(0) + ")" : "-",
          wavelength: "-", 
          wavelengthCal: "wavelengthCal" in refl ? refl["wavelengthCal"].toFixed(3) : "-",
          tof: "-",
          tofCal: "tofCal" in refl ? (refl["tofCal"]).toFixed(0) : "-",
          summedIntensity: "summedIntensity" in refl ? (refl["summedIntensity"]).toFixed(3) : "-",
          profileIntensity: "profileIntensity" in refl ? (refl["profileIntensity"]).toFixed(3) : "-",
          exptID: "exptID" in refl ? refl["exptID"] : "0",
        });
      }
    }

    setCalculatedIntegratedReflections(reflections);
  }

  const handleKeyDown = (event: any) => {
    if (event.key === 's' || event.key === 'S') {
      let command = "";
      switch (activeStateTabRef.current){
        case "experiment-viewer":
        command = "toggle_experiment_viewer_sidebar";
        break;
        case "rlv":
        command = "toggle_rlv_sidebar";
        break;
        case "experiment-planner":
        command = "toggle_experiment_planner_sidebar";
        break;
        case "integration-profiler":
        command = "toggle_shoebox_viewer_sidebar";
        break;
      }
      if (command !== ""){
        const serverMsg = {
          "channel": "server",
          "command": command,
        };
        serverWS.current?.send(JSON.stringify(serverMsg));
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const serverMsg = {
      "channel": "server",
      "command": "update_experiment_planner_params",
      "orientations": experimentPlannerOrientations,
      "num_reflections": experimentPlannerPredReflections,
    }
    if (experimentPlannerOrientations.length !== 0) {
      serverWS.current?.send(JSON.stringify(serverMsg
      ))
    }
  }, [experimentPlannerOrientations])

  function updateReflectionTable(msg: any): void {
	setReflectionTableEnabled(true);
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
          exptID: "exptID" in refl ? refl["exptID"] : "0",
        });
      }
    }

    setReflections(reflections);
  }

  function updateNumExperiments(val : number){
	setNumExperiments(val);
	updateExperimentPlannerParams({"numExperiments" : val});
  }

  const updateActiveSoftware = (softwareBackend: string) => {
	const s = softwareBackend as SoftwareBackend
	setActiveSoftware(s);
  }

  const updateExperimentType = (experimentType: string) => {
	const e = experimentType as ExperimentType
	setExperimentType(e);
  }

  const clearActiveLog = () => {
    switch (activeAlgorithmTab){
      case "import":
        updateImportParams({"log": ""});
        break;
      case "find-spots":
        updateFindSpotsParams({"log": ""});
        break;
      case "index":
        updateIndexParams({"log": ""});
        break;
      case "refine":
        updateRefineParams({"log": ""});
        break;
      case "integrate":
        updateIntegrateParams({"log": ""});
        break;
    }
  }


  const actionMap: Record<string, any> = {
	"openFileKeys" : setOpenFileKeys,
	"currentFileKey" : setCurrentFileKey,
	"numExperiments" : updateNumExperiments,
	"experimentNames" : setExperimentNames,
	"reflectionTable" : updateReflectionTable,
	"calculatedReflectionTable": updateCalculatedReflectionTable,
	"selectedReflectionTableExptID" : setSelectedReflectionTableExptID,
	"selectedReflectionID" : setSelectedReflectionID,
	"activeSoftware" : updateActiveSoftware,
	"experimentType" : updateExperimentType,
  "clearActiveLog": clearActiveLog,
  "loading" : setAppLoading
  }

  const updateParams = (params: Record<string, any>) => {

	Object.entries(params).forEach(([key, value]) => {
		if (actionMap.hasOwnProperty(key)){
			actionMap[key](value);
		}
		else{
			console.warn("Tried to update", key, "but not found in RootContext");
		}
	});
  }

  function setDefaultStateTabsVisibility(){

	setRLVHidden(true);
	setExperimentPlannerHidden(true);
	setIntegrationProfilerHidden(true);
	setExperimentViewerHidden(false);
  }

  function connectToServer(): void {

    console.log("connect to server called");
    serverWS.current = new WebSocket("ws://127.0.0.1:50010/");

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

    serverWS.current.onerror = (event: any) => {
      console.log("Frontend connection error:", event);
    }

    serverWS.current.onclose = () => {
      console.log('Frontend closed connection to server')
      throw new Error("Server has crashed. Please restart the app.")
    };

    serverWS.current.onmessage = (event: any) => {
      const msg: any = JSON.parse(event.data);

      console.log("frontend msg received ", msg);

      const command = msg["command"];
	  handleServerMessage(command, msg);
    };
  }

  const handleServerMessage = (command: string, msg: any) => {

    switch (command) {
      case "lost_connection_error":
        throw new Error("Server has crashed. Please restart the app.");
	  case "clear_experiment":
		reset();
		break;
	  case "update_root_params":
		updateParams(msg["params"]);
		break;
	  case "update_import_params":
		updateImportParams(msg["params"]);
		break;
	  case "update_find_spots_params":
		updateFindSpotsParams(msg["params"]);
		break;
	  case "update_index_params":
		updateIndexParams(msg["params"]);
		break;
	  case "update_refine_params":
		updateRefineParams(msg["params"]);
		break;
	  case "update_integrate_params":
		updateIntegrateParams(msg["params"]);
		break;
	  case "update_experiment_viewer_params":
		updateExperimentViewerParams(msg["params"]);
		break;
	  case "update_rlv_params":
		updateRLVParams(msg["params"]);
		break;
	  case "update_experiment_planner_params":
		updateExperimentPlannerParams(msg["params"]);
		break;
	  case "update_integration_profiler_params":
		updateIntegrationProfilerParams(msg["params"]);
		break;
      default:
        console.warn("Unhandled command:", command);
    }

  };

  return <RootContext.Provider value={{
	serverWS,
	currentFileKey,
	setCurrentFileKey,
	openFileKeys,
	numExperiments,
	experimentNames,
	selectedReflectionID,
	setSelectedReflectionID,
	reflectionTableEnabled,
	reflections,
	setReflections,
	calculatedIntegratedReflections,
	setCalculatedIntegratedReflections,
	selectedExptID,
	setSelectedExptID,
	showCalculatedIntegratedReflections,
	setShowCalculatedIntegratedReflections,
	setActiveStateTab,
	setActiveAlgorithmTab,
	activeSoftware,
	setActiveSoftware,
	experimentType,
	setExperimentType,
  clearActiveLog
  }}>{children}</RootContext.Provider>;
};

export const useRootContext = () => {
  const context = useContext(RootContext);
  if (!context) {
    throw new Error('useRootContext must be used within a RootProvider');
  }
  return context;
};
