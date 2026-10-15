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
import { usePluginContext } from './PluginContext';
import { Reflection } from '@/types';
import { serverWSAddr } from '@/lib/server';
import {
  Capabilities,
  DEFAULT_CAPABILITIES,
  ServerEvent,
  StateTarget,
  StepName,
  ViewerName,
  serverMessage,
} from '@/lib/protocol';

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
    showCalculatedIntegratedReflections: boolean;
    setShowCalculatedIntegratedReflections: React.Dispatch<React.SetStateAction<boolean>>,
	setActiveStateTab: React.Dispatch<React.SetStateAction<ViewerName>>;
  activeStateTab: ViewerName
  // What the loaded dataset supports (backends, steps, viewers, features)
  capabilities: Capabilities
  // Payload of a workflow.run message, run by the backend chosen in the menu
  stepPayload: (step: StepName, payload?: Record<string, unknown>) => Record<string, unknown>
	setActiveAlgorithmTab: React.Dispatch<React.SetStateAction<string>>;
  activeAlgorithmTab: string
  processingDir: string,
	setProcessingDir: React.Dispatch<React.SetStateAction<string>>;
  setUserMessage: React.Dispatch<React.SetStateAction<string>>;
}

// Viewer whose sidebar the S key toggles for each state tab
const SIDEBAR_VIEWERS: Record<ViewerName, string> = {
  experiment_viewer: "experiment_viewer",
  rlv: "rlv",
  experiment_planner: "experiment_planner",
  integration_profiler: "shoebox_viewer",
};

const RootContext = createContext<RootContextType | undefined>(undefined);

interface RootProviderProps{
	children: React.ReactNode;
	setAppLoading : React.Dispatch<React.SetStateAction<boolean>>;
	setUserMessage : React.Dispatch<React.SetStateAction<string>>;
}

export const RootProvider: React.FC<RootProviderProps> = ({ children, setAppLoading, setUserMessage }) => {

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
      partiality: "-",
      exported: "-",
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
  const [activeStateTab, setActiveStateTab] = useState<ViewerName>("experiment_viewer");
  const [capabilities, setCapabilities] = useState<Capabilities>(DEFAULT_CAPABILITIES);
  const [activeAlgorithmTab, setActiveAlgorithmTab] = useState<string>("import");
  const [processingDir, setProcessingDir] = useState<string>("");

  const activeStateTabRef = useRef<ViewerName | null>(null);

  useEffect(() => {
    activeStateTabRef.current = activeStateTab;
  }, [activeStateTab]);

  const {
	reset: importReset, 
	softwareBackend,
	updateParams: updateImportParams} = useImportContext();

  function stepPayload(step: StepName, payload: Record<string, unknown> = {}) {
    return { "step": step, "backend": softwareBackend, ...payload };
  }
	
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

  const { updateParams: updatePluginParams } = usePluginContext();

  useEffect(() => {
    setAppLoading(true)
    connectToServer();
	reset();
	setDefaultStateTabsVisibility();
  setDefaultAlgorithmTabsVisibility();
  }, [])

  function reset(){

	setNumExperiments(0);
	setCurrentFileKey("");
	setExperimentNames({});
	setReflectionTableEnabled(false);
  setReflections([]);
  setCalculatedIntegratedReflections([]);
  setShowCalculatedIntegratedReflections(false);

	importReset();
	findSpotsReset();
	indexReset();
	refineReset();
	integrateReset();
	experimentViewerReset();
	rLVReset();
	experimentPlannerReset();
	integrationProfilerReset();

	setCapabilities(DEFAULT_CAPABILITIES);
	setDefaultStateTabsVisibility();
  setDefaultAlgorithmTabsVisibility();
  }

  function resetCalculatedReflections(){
    setCalculatedIntegratedReflections([]);
    setShowCalculatedIntegratedReflections(false);
  }

  function updateCalculatedReflectionTable(msg: any): void {
    const panelKeys = Object.keys(msg);
    const reflections: Reflection[] = [];

    for (var i = 0; i < panelKeys.length; i++) {
      const panelReflections = msg[panelKeys[i]];
      for (var j = 0; j < panelReflections.length; j++) {
        const refl = panelReflections[j];
        console.log("refl", refl);
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
          partiality: "partiality" in refl ? (refl["partiality"]).toFixed(3) : "-",
          exported: "exported" in refl ? refl["exported"] : "-",
          exptID: "exptID" in refl ? refl["exptID"] : "0",
        });
      }
    }

    setCalculatedIntegratedReflections(reflections);
  }

  const handleKeyDown = (event: any) => {

    const isInput = event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA' || event.target.isContentEditable;

    if (isInput) {
      return; 
    }

    if ((event.key === 's' || event.key === 'S') && activeStateTabRef.current) {
      serverWS.current?.send(serverMessage("viewer.toggle_sidebar", {
        "viewer": SIDEBAR_VIEWERS[activeStateTabRef.current],
      }));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (experimentPlannerOrientations.length !== 0) {
      serverWS.current?.send(serverMessage("planner.set_params", {
        "orientations": experimentPlannerOrientations,
        "num_reflections": experimentPlannerPredReflections,
      }));
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
          partiality: "partiality" in refl ? (refl["partiality"]).toFixed(3) : "-",
          exported: "exported" in refl ? refl["exported"] : "-",
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


  const actionMap: Record<string, any> = {
	"openFileKeys" : setOpenFileKeys,
	"currentFileKey" : setCurrentFileKey,
	"numExperiments" : updateNumExperiments,
	"experimentNames" : setExperimentNames,
	"reflectionTable" : updateReflectionTable,
	"calculatedReflectionTable": updateCalculatedReflectionTable,
	"resetCalculatedReflectionTable": resetCalculatedReflections,
	"selectedReflectionTableExptID" : setSelectedReflectionTableExptID,
	"selectedReflectionID" : setSelectedReflectionID,
  "processingDir" : setProcessingDir,
  "userMessage" : setUserMessage
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
    setActiveStateTab("experiment_viewer");
  }

  function setDefaultAlgorithmTabsVisibility(){
    setActiveAlgorithmTab("import");

  }

  const serverConnected = useRef(false);

  function connectToServer(): void {

    console.log("connect to server called");

    if (serverWS.current) {
      serverWS.current.onopen = null;
      serverWS.current.onclose = null;
      serverWS.current.onerror = null;
      serverWS.current.onmessage = null;
      if (serverWS.current.readyState === WebSocket.OPEN ||
          serverWS.current.readyState === WebSocket.CONNECTING) {
        serverWS.current.close();
      }
    }

    serverConnected.current = false;
    serverWS.current = new WebSocket(serverWSAddr);

    serverWS.current.onopen = () => {
      console.log('Frontend opened connection to server');
      serverConnected.current = true;
      if (serverWS.current?.readyState === WebSocket.OPEN) {
        serverWS.current?.send(serverMessage("session.connect", {
          "id": "gui"
        }));
      }
      setAppLoading(false);
    };

    serverWS.current.onerror = (event: any) => {
      console.log("Frontend connection error:", event);
    }

    serverWS.current.onclose = () => {
      if (serverConnected.current) {
        throw new Error("Server has crashed. Please restart the app.")
      }
    };

    serverWS.current.onmessage = (event: any) => {
      const msg: ServerEvent = JSON.parse(event.data);
      handleServerMessage(msg);
    };
  }

  const displayError = (msg: string) => {
      throw new Error(msg);
  }

  // Updaters for each "state.update" target
  const stateUpdaters: Record<StateTarget, (params: Record<string, any>) => void> = {
    root: updateParams,
    import: updateImportParams,
    find_spots: updateFindSpotsParams,
    index: updateIndexParams,
    refine: updateRefineParams,
    integrate: updateIntegrateParams,
    experiment_viewer: updateExperimentViewerParams,
    rlv: updateRLVParams,
    experiment_planner: updateExperimentPlannerParams,
    integration_profiler: updateIntegrationProfilerParams,
    plugin: updatePluginParams,
  };

  const handleServerMessage = (msg: ServerEvent) => {

    switch (msg.type) {

      case "state.update":
        if (msg.target in stateUpdaters) {
          stateUpdaters[msg.target](msg.params);
        } else {
          console.warn("Unknown state update target:", msg.target);
        }
        break;

      case "session.capabilities": {
        const { type: _type, ...capabilities } = msg;
        setCapabilities(capabilities);
        break;
      }

      case "session.lost_connection":
        throw new Error("Server has crashed. Please restart the app.");

      case "session.error":
        displayError(msg.error);
        break;

      case "session.clear_experiment":
        reset();
        break;

      default:
        console.warn("Unhandled server message:", msg);
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
  activeStateTab,
  capabilities,
  stepPayload,
	setActiveAlgorithmTab,
  activeAlgorithmTab,
  processingDir,
  setProcessingDir,
  setUserMessage
  }}>{children}</RootContext.Provider>;
};

export const useRootContext = () => {
  const context = useContext(RootContext);
  if (!context) {
    throw new Error('useRootContext must be used within a RootProvider');
  }
  return context;
};
