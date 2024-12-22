import { useEffect, useState, useRef } from "react"
import { AlgorithmTabs } from "./components/AlgorithmTabs"
import { StateTabs } from "./components/StateTabs"
import { FileTree } from "./components/FileTree"
import { ReflectionTableSheet } from "./components/ReflectionTable"
import {
  ExperimentViewerStates, LineplotData, LineplotBboxData,
  LineplotCentroidData, RLVStates, BravaisLattice,
  ExperimentPlannerStates, IntegrationProfilerStates, ExptNamesDict
} from "./types"
import { IntegrateStates } from "./types";
import { LoadingScreen } from "./components/LoadingScreen"
import { ExperimentSummary } from "./components/ExperimentSummary"
import { Reflection } from "./types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faTimes, faSave } from '@fortawesome/free-solid-svg-icons';
import { Button } from "@/components/ui/button"
import { ErrorHandler } from "./components/errorHandler"
import { Toaster } from "./components/ui/toaster"
import { useToast } from "@/components/ui/use-toast";

import { AppMenubar } from "./components/AppMenubar"
import AppProviders from "./contexts/AppProviders"



function App() {

  const [appLoading, setAppLoading] = useState<boolean>(false);

  const serverWS = useRef<WebSocket | null>(null);
  const [userMessage, setUserMessage] = useState<string>("");

  /*
    Summary states
   */


  const [instrumentName, setInstrumentName] = useState<string>("");
  const [experimentDescription, setExperimentDescription] = useState<string>("");
  const [reflectionsSummary, setReflectionsSummary] = useState<string>("");
  const [crystalSummary, setCrystalSummary] = useState<string[]>([]);
  const [integrationSummary, setIntegrationSummary] = useState<string>("");

  const [saveEnabled, setSaveEnabled] = useState<boolean>(false);
  const [reflectionTableEnabled, setReflectionTableEnabled] = useState<boolean>(false);
  const [openFileKeys, setOpenFileKeys] = useState<string[]>([]);
  const [currentFileKey, setCurrentFileKey] = useState<string>("");
  const [crystalIDs, setCrystalIDs] = useState<number[]>([]);

  /*
    Algorithm states
  */

  const [activeAlgorithimTab, setActiveAglorithmTab] = useState<string>("import");

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
  const [findSpotsDebug, setFindSpotsDebug] = useState<boolean>(false);
  const [findSpotsDebugImageIdx, setFindSpotsDebugImageIdx] = useState<number>(0);
  const [findSpotsDebugView, setFindSpotsDebugView] = useState<string>("image");
  const [findSpotsNumTOFBins, setFindSpotsNumTOFBins] = useState<number>(0);
  const [findSpotsAlgorithm, setFindSpotsAlgorithm] = useState<string>("dispersion_extended");

  useEffect(() => {
    console.log("Setting numTOFBins ",Math.floor((maxTOF - minTOF)/stepTOF), maxTOF, minTOF, stepTOF );
    setFindSpotsNumTOFBins(Math.floor((maxTOF - minTOF)/stepTOF))
  }, [minTOF, maxTOF, stepTOF]);


  // IndexTab
  const [indexEnabled, setIndexEnabled] = useState<boolean>(false);
  const [indexLoading, setIndexLoading] = useState<boolean>(false);
  const [indexLog, setIndexLog] = useState<string>("");
  const [selectedBravaisLatticeId, setSelectedBravaisLatticeId] = useState<string>("");
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
  const [applyIncidentSpectrum, setApplyIncidentSpectrum] = useState<boolean>(false);
  const [applySphericalAbsorption, setApplySphericalAbsorption] = useState<boolean>(false);
  const [integrateTOFBBoxPadding, setIntegrateTOFBBoxPadding] = useState<string>("30");
  const [integrateXYBBoxPadding, setIntegrateXYBBoxPadding] = useState<string>("5");
  const [integrateMinPartiality, setIntegrateMinPartiality] = useState<string>("0");
  const [integrateMinISigma, setIntegrateMinISigma] = useState<string>("0");
  const [integrateCalculateLineProfile, setIntegrateCalculateLineProfile] = useState<boolean>(false);
  const [integrateDmin, setIntegrateDmin] = useState<string>("2");
  const [integrateType, setIntegrateType] = useState<string>("observed");

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
    setApplyLorentz: setApplyLorentz,
    applyIncidentSpectrum: applyIncidentSpectrum,
    setApplyIncidentSpectrum: setApplyIncidentSpectrum,
    applySphericalAbsorption: applySphericalAbsorption,
    setApplySphericalAbsorption: setApplySphericalAbsorption,
    tofBBoxPadding: integrateTOFBBoxPadding,
    setTofBBoxPadding: setIntegrateTOFBBoxPadding,
    xYBBoxPadding: integrateXYBBoxPadding,
    setXYBBoxPadding: setIntegrateXYBBoxPadding,
    minPartiality: integrateMinPartiality,
    setMinPartiality: setIntegrateMinPartiality,
    minISigma: integrateMinISigma,
    setMinISigma: setIntegrateMinISigma,
    calculateLineProfile: integrateCalculateLineProfile,
    setCalculateLineProfile: setIntegrateCalculateLineProfile,
    integrateType: integrateType,
    setIntegrateType: setIntegrateType,
    dmin: integrateDmin,
    setDmin: setIntegrateDmin
  };

  /*
    StateTabs states
  */

  const [numExperiments, setNumExperiments] = useState<number>(0);
  const numExperimentsRef = useRef<number | null>();
  const [activeStateTab, setActiveStateTab] = useState<string>("experiment-viewer");
  const activeStateTabRef = useRef(activeStateTab);
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
  const [experimentPlannerNumStoredOrientations, setExperimentPlannerNumStoredOrientations] = useState<number>(0);
  const experimentPlannerNumStoredRef = useRef(experimentPlannerNumStoredOrientations);
  useEffect(() => {
    experimentPlannerNumStoredRef.current = experimentPlannerNumStoredOrientations;
  }, [experimentPlannerNumStoredOrientations]);
  const experimentPlannerOrientationsRef= useRef<number[]>([]);
  const [experimentPlannerReflections, setExperimentPlannerReflections] = useState<number[]>([]);
  const [experimentPlannerPredReflections, setExperimentPlannerPredReflections] = useState<number[]>([]);
  const [experimentPlannerCompleteness, setExperimentPlannerCompleteness] = useState<number[]>([]);
  const [experimentPlannerEnabled, setExperimentPlannerEnabled] = useState<boolean>(false);
  const [experimentPlannerDmin, setExperimentPlannerDmin] = useState<number>(0.75);

  const [rLVEnabled, setRLVEnabled] = useState<boolean>(false);
  const [rLVHidden, setRLVHidden] = useState<boolean>(false);
  const [rLVLoading, setRLVLoading] = useState<boolean>(false);
  const [rLVOrientationViewSelected, setRLVOrientationViewSelected] = useState<boolean>(true);

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
  const [integrationProfilerShoebox2d, setIntegrationProfilerShoebox2d] = useState<number[][]>([]);
  const [integrationProfilerShoeboxMask2d, setIntegrationProfilerShoeboxMask2d] = useState<number[][]>([]);

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
    maxTOF: maxTOF,
    debugMode: findSpotsDebug,
    debugImageIdx: findSpotsDebugImageIdx,
    setDebugImageIdx: setFindSpotsDebugImageIdx
    
  }

  const rLVStates: RLVStates = {
    enabled: rLVEnabled,
    hidden: rLVHidden,
    setHidden: setRLVHidden,
    loading: rLVLoading,
    setLoading: setRLVLoading,
    orientationViewSelected: rLVOrientationViewSelected,
    setOrientationViewSelected: setRLVOrientationViewSelected
  }

  const experimentPlannerStates: ExperimentPlannerStates = {
    enabled: experimentPlannerEnabled,
    hidden: experimentPlannerHidden,
    setHidden: setExperimentPlannerHidden,
    orientations: experimentPlannerOrientations,
    numStoredOrientations: experimentPlannerNumStoredOrientations,
    setNumStoredOrientations: setExperimentPlannerNumStoredOrientations,
    reflections: experimentPlannerReflections,
    predReflections: experimentPlannerPredReflections,
    completeness: experimentPlannerCompleteness,
    numExpOrientations: numExperiments,
    setOrientations: setExperimentPlannerOrientations,
    setReflections: setExperimentPlannerReflections,
    setPredReflections: setExperimentPlannerPredReflections,
    loading: experimentPlannerLoading,
    setLoading: setExperimentPlannerLoading,
    dmin: experimentPlannerDmin,
    setDmin: setExperimentPlannerDmin
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
  const [calculatedIntegratedreflectionTable, setCalculatedIntegratedReflectionTable] = useState<Reflection[]>(emptyReflectionTable)
  const [selectedReflectionId, setSelectedReflectionId] = useState<string>("");
  const [selectedReflectionTableExptId, setSelectedReflectionTableExptId] = useState<string>("0");
  const [reflectionTableShowCalculated, setReflectionTableShowCalculated] = useState<boolean>(false);
  const [exptNames, setExptNames] = useState<ExptNamesDict>({});


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
    reflectionID: selectedReflectionId,
    shoeboxData2D: integrationProfilerShoebox2d,
    shoeboxMaskData2D: integrationProfilerShoeboxMask2d,
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
    setApplyLorentz: setApplyLorentz,
    applyIncidentSpectrum: applyIncidentSpectrum,
    setApplyIncidentSpectrum: setApplyIncidentSpectrum,
    applySphericalAbsorption: applySphericalAbsorption,
    setApplySphericalAbsorption: setApplySphericalAbsorption,
    tOFPadding: integrateTOFBBoxPadding,
    setTOFPadding: setIntegrateTOFBBoxPadding,
    xYPadding: integrateXYBBoxPadding,
    setXYPadding: setIntegrateXYBBoxPadding,
    calculatedIntegrationReflections: reflectionTableShowCalculated
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

    setCalculatedIntegratedReflectionTable(reflections);
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
          exptID: "exptID" in refl ? refl["exptID"] : "0",
        });
      }
    }

    setReflectionTable(reflections);
  }

  function resetIntegrationProfiler(){
    setIntegrationProfilerTOF([-1]);
    setIntegrationProfilerIntensity([-1]);
    setIntegrationProfilerLine([-1]);
    setIntegrationProfilerLineValue(0);
    setIntegrationProfilerLineSigma(0);
    setIntegrationProfilerSummationValue(0);
    setIntegrationProfilerSummationSigma(0);
    setIntegrationProfilerTitle("");
    setIntegrationProfilerLoading(false);
  }

  function appendPlannerOrientation(orientation: number, reflections: number, predReflections: number, completeness: number) {
    setExperimentPlannerOrientations(prevOrientations => [...prevOrientations, orientation]);
    setExperimentPlannerReflections(prevReflections => [...prevReflections, reflections]);
    setExperimentPlannerPredReflections(prevPredReflections => [...prevPredReflections, predReflections]);
    setExperimentPlannerCompleteness(prevCompleteness => [...prevCompleteness, completeness]);
    setExperimentPlannerNumStoredOrientations(prevNumStored => prevNumStored + 1);
  }

  function updatePlannerOrientation(orientation: number, predReflections: number) {
    if (numExperimentsRef.current === null || numExperimentsRef.current === undefined){
      return;
    }
    setExperimentPlannerOrientations((prevOrientations) => {
      const previousOrientationsStored = experimentPlannerNumStoredRef.current === prevOrientations.length;
  
      // If previous orientations have been stored, add the new orientation
      if (previousOrientationsStored) {
        return [...prevOrientations, orientation];
      }
      else{
        // Otherwise, update the last element
        const newOrientations = [...prevOrientations];
        newOrientations[newOrientations.length - 1] = orientation;
        return newOrientations;
      }
    });
  
    setExperimentPlannerPredReflections((prevPredReflections) => {
      const previousOrientationsStored = experimentPlannerNumStoredRef.current === prevPredReflections.length;
      // If previous orientations have been stored, add the new orientation
      if (previousOrientationsStored) {
        return [...prevPredReflections, predReflections];
      }
      else{
        // Otherwise, update the last element
        const newPredReflections = [...prevPredReflections];
        newPredReflections[newPredReflections.length - 1] = predReflections;
        return newPredReflections;
      }
    });
  }

  function clearPlannerUserPredictedReflections(numInitialOrientations: number){
    setExperimentPlannerOrientations(prevOrientations => prevOrientations.slice(0, numInitialOrientations));
    setExperimentPlannerPredReflections(prevPredReflections => prevPredReflections.slice(0, numInitialOrientations));
  }

  function updateExperimentPlannerDmin(){
    serverWS.current?.send(JSON.stringify({
      "channel" : "server",
      "command" : "update_user_dmin",
      "dmin" : experimentPlannerDmin
    }));
  }

  useEffect(() => {
    const serverMsg = {
      "channel": "server",
      "command": "update_experiment_planner_params",
      "orientations": experimentPlannerOrientations,
      "num_reflections": experimentPlannerReflections,
    }
    if (experimentPlannerOrientations.length !== 0) {
      serverWS.current?.send(JSON.stringify(serverMsg
      ))
    }
  }, [experimentPlannerOrientations])

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
    };

    serverWS.current.onerror = (event) => {
      console.log("Frontend connection error:", event);
    }

    serverWS.current.onclose = () => {
      console.log('Frontend closed connection to server')
      throw new Error("Server has crashed. Please restart the app.")
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
        case "lost_connection_error":
          throw new Error("Server has crashed. Please restart the app.")
        case "load_experiment":
          console.assert("algorithm_logs" in msg,
            "no algorithm logs found in experiment");
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
              setCrystalSummary(msg["crystal_summary"]);
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
          //setImportBrowseImagesEnabled(true);

          break;

        case "import_processing_folder":
          importProcessingFolder(msg);
          break;

        case "update_experiment":
          //setImportLoading(false);
          //setImportRanSuccessfully(true);
          //setImportBrowseImagesEnabled(true);
          setFindSpotsEnabled(true);
          setExperimentViewerLoading(true);

          setActiveStateTab("experiment-viewer");
          setExperimentViewerHidden(false);
          setRLVHidden(true);
          setIntegrationProfilerHidden(true)

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
          console.assert("experiment_names" in msg);
          const _exptNames = msg["experiment_names"];
          setExptNames(_exptNames);
          setSelectedReflectionTableExptId("0");

          break;
        case "clear_experiment":
          setActiveStateTab("experiment-viewer");
          // Algorithm tabs
          setFindSpotsEnabled(false);
          setIndexEnabled(false);
          setRefineEnabled(false);
          setDetectSymmetryEnabled(false);
          setIntegrateEnabled(false);

          setReflectionTable([]);
          setCalculatedIntegratedReflectionTable([]);

          // State tabs
          setLineplot(initialLineplotData);
          setLineplotBboxData(initialLineplotBboxData);
          setLineplotCentroidData(initialLineplotCentroidData)
          setSelectedReflectionId("");
          setLineplotTitle("");
          setRLVEnabled(false);
          setRLVOrientationViewSelected(true);
          setExperimentPlannerEnabled(false);
          setExperimentPlannerHidden(true);
          setExperimentPlannerOrientations([]);
          setExperimentPlannerReflections([]);
          setExperimentPlannerPredReflections([]);
          setExperimentPlannerCompleteness([]);
          setIntegrationProfilerEnabled(false);
          setIntegrationProfilerHidden(true);
          resetIntegrationProfiler();

          setExperimentDescription("");
          setInstrumentName("");
          setReflectionTableEnabled(false);
          setReflectionsSummary("");
          setReflectionTableShowCalculated(false);
          setCrystalSummary([]);
          setIntegrationSummary("");

          // Logs
          //setImportLog("");
          setFindSpotsLog("");
          setIndexLog("");
          setRefineLog("");
          setIntegrateLog("");

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
          setCrystalSummary([]);
          setIntegrationSummary("");
          setIndexLog("");
          setRefineLog("");
          setIntegrateLog("");
          setExperimentPlannerEnabled(false);
          setExperimentPlannerHidden(true);
          setExperimentPlannerOrientations([]);
          setExperimentPlannerReflections([]);
          setExperimentPlannerPredReflections([]);
          setExperimentPlannerCompleteness([]);
          setIntegrationProfilerHidden(true);
          resetIntegrationProfiler();
          setSelectedReflectionId("");
          setSaveHKLEnabled(false);
          setIntegrationProfilerEnabled(false);
          if (activeStateTab !== "rlv"){
            setActiveStateTab("experiment-viewer");
          }

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
          updateExperimentPlannerDmin();
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
          setCrystalSummary(msg["crystal_summary"]);
          console.assert("crystal_ids" in msg,
            "crystal ids not found after running indexing");
          setCrystalIDs(msg["crystal_ids"]);

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
          setCrystalSummary(msg["crystal_summary"]);

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
          setCrystalSummary(msg["crystal_summary"]);

          console.assert("reflection_table" in msg,
            "reflection table not found after running integration");
          if ("reflection_table" in msg){
            updateReflectionTable(msg["reflection_table"]);
          }
          if ("calculated_reflection_table" in msg){
            updateCalculatedReflectionTable(msg["calculated_reflection_table"])
          }
          else{
            setCalculatedIntegratedReflectionTable(emptyReflectionTable);
          }
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

        case "update_shoebox_viewer_2d":
          setIntegrationProfilerShoebox2d(msg["shoebox_data_2d"]);
          setIntegrationProfilerShoeboxMask2d(msg["mask_data_2d"]);
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

          if("expt_id" in msg){
            setSelectedReflectionTableExptId(msg["expt_id"].toString());
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
          if ("calculated_reflection_table" in msg){
            updateCalculatedReflectionTable(msg["calculated_reflection_table"])
          }
          else{
            setCalculatedIntegratedReflectionTable(emptyReflectionTable);
          }
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
        case "clear_planner_orientations":
          setExperimentPlannerOrientations([]);
          setExperimentPlannerReflections([]);
          setExperimentPlannerPredReflections([]);
          setExperimentPlannerCompleteness([]);
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
        case "enable_browse_files_button":
          //setImportBrowseImagesEnabled(true);
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
        case "updating_experiment_planner":
          setExperimentPlannerLoading(true);
          break;
        case "finished_updating_experiment_planner":
          setExperimentPlannerLoading(false);
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
        case "update_find_spots_debug_image_idx":
          setFindSpotsDebugImageIdx(parseInt(msg["idx"]));
          break;
        default:
          console.warn("Unrecognised command ", command);
      }
    };

  }

  useEffect(() => {
    activeStateTabRef.current = activeStateTab;
  }, [activeStateTab]);

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

  const handleBeforeUnload = () => {
    /*
    serverWS.current?.send(JSON.stringify({ "channel": "server",
      "command" : "close",
      }));
      */
  };
  window.addEventListener("beforeunload", handleBeforeUnload);

  function importProcessingFolder(msg : any){

    //setImportBrowseImagesEnabled(true);
    const command = msg["last_successful_command"];
    console.assert("instrument_name" in msg,
      "instrument name not found in experiment");
    setInstrumentName("<b>Instrument: </b>" + msg["instrument_name"]);

    console.assert("experiment_description" in msg,
      "experiment description not found in experiment");
    setExperimentDescription("<b> Experiment: </b>" + msg["experiment_description"]);

    //setImportLog(msg["import_log"])
    setFindSpotsEnabled(true);

    if (command === "dials.import"){
      return;
    }

    setFindSpotsLog(msg["find_spots_log"])
    setReflectionTableEnabled(true)
    updateReflectionTable(msg["reflection_table"]);
    setIndexEnabled(true);
    setRLVEnabled(true);
    setReflectionsSummary("Identified " + msg["reflections_summary"])

    if (command === "dials.find_spots"){
      return;
    }
    const _exptNames = msg["experiment_names"];
    setExptNames(_exptNames);

    setIndexLog(msg["index_log"])
    setDetectSymmetryEnabled(true);
    setRefineEnabled(true);
    setExperimentPlannerEnabled(true);
    setCrystalSummary(msg["crystal_summary"])

    if (command === "dials.index"){
      return;
    }
    setRefineLog(msg["refine_log"])

    setIntegrationProfilerEnabled(true)
    setIntegrateEnabled(true)

    if (command === "dials.refine"){
      return;
    }
    setIntegrateLog(msg["integrate_log"])
    if ("calculated_reflection_table" in msg){
      updateCalculatedReflectionTable(msg["calculated_reflection_table"]);
    }

    setSaveHKLEnabled(true);

  }

  return (
		<AppProviders setAppLoading={setAppLoading}>
    <div className="App h-[100vh] overflow-hidden">
      {
        appLoading ?
          <LoadingScreen/>
          :
          <div>
            <AppMenubar/>
          <div className="grid grid-rows-20 gap-3">
            <ErrorHandler />
            <Toaster />
            <div className="row-span-1">
              <div className="grid grid-cols-8">
                <div className="col-span-1 grid grid-rows-2 gap-2">
                  <div className="[grid-column:1] [grid-row:1]">
                    <FileTree/>
                  </div>
                  <div className="grid grid-columns-2 gap-0">
                    <div className="[grid-column:1] [grid-row:2]">
                      <ReflectionTableSheet
                        enabled={reflectionTableEnabled}
                        reflections={reflectionTable}
                        calculatedIntegratedReflections={calculatedIntegratedreflectionTable}
                        setCalculatedIntegratedReflectionTable={setCalculatedIntegratedReflectionTable}
                        setReflectionTable={setReflectionTable}
                        selectedReflectionId={selectedReflectionId}
                        setSelectedReflectionId={setSelectedReflectionId}
                        setSelectedExptId={setSelectedReflectionTableExptId}
                        selectedExptId={selectedReflectionTableExptId}
                        integrationProfilerHidden={integrationProfilerHidden}
                        setIntegrationProfilerLoading={setIntegrationProfilerLoading}
                        exptNames={exptNames}
                        emptyRun={emptyRun}
                        vanadiumRun={vanadiumRun}
                        sampleDensity={sampleDensity}
                        sampleRadius={sampleRadius}
                        sampleAbsorptionXSection={sampleAbsorptionXSection}
                        sampleScatteringXSection={sampleScatteringXSection}
                        vanadiumDensity={vanadiumDensity}
                        vanadiumRadius={vanadiumRadius}
                        vanadiumAbsorptionXSection={vanadiumAbsorptionXSection}
                        vanadiumScatteringXSection={vanadiumScatteringXSection}
                        applyLorentz={applyLorentz}
                        applyIncidentSpectrum={applyIncidentSpectrum}
                        applySphericalAbsorption={applySphericalAbsorption}
                        tOFPadding={integrateTOFBBoxPadding}
                        xYPadding={integrateXYBBoxPadding}
                        showCalculatedReflections={reflectionTableShowCalculated}
                        setShowCalculatedReflections={setReflectionTableShowCalculated}
                        serverWS={serverWS}
                      ></ReflectionTableSheet>
                    </div>
                    <div className="[grid-column:2] [grid-row:2]" hidden={true}>
                      <Button disabled={!saveEnabled} variant={"outline"} style={{ padding: "0px 6px" }} ><FontAwesomeIcon icon={faSave} style={{ marginRight: '5px' }}></FontAwesomeIcon> Save </Button>
                    </div>
                  </div>
                </div>
                <div className="col-start-2 col-span-6">
                  <ExperimentSummary/>
                </div>
                <img 
                    src="src/assets/logo_transparent.png"
                    alt="Logo"
                    className="w-2/3 ml-16 mt-5"
                    />
              </div>
            </div>
                <div className="flex gap-5 w-full h-full">
                  <div className="w-1/2">
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
                  </div>
                  <div className="w-1/2">
                    <AlgorithmTabs
                      integrateStates={integrateStates}
                      serverWS={serverWS}
                      activeTab={activeAlgorithimTab}
                      setActiveTab={setActiveAglorithmTab}
                    />
                  </div>
                </div>
          </div>
          </div>
      }
    </div>
    </AppProviders>
  )

}


export default App
