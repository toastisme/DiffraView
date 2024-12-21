import React from "react"

export const enum Status {
  Default = "Default",
  Loading = "Loading",
  Failed = "Failed"
}

export interface DefaultContextType {
  status: Status;
  setStatus: React.Dispatch<React.SetStateAction<Status>>;
  updateStatus: (status: string) => void;
  updateParams: (params: Record<string, any>) => void;
  updateEnabled: (enabled: boolean) => void;
  reset: () => void;
}

export interface DefaultAlgorithmContextType extends DefaultContextType{
  log: string;
}

export interface AlgorithmProps {
  findSpotsStates: FindSpotsStates
  indexStates: IndexStates
  refineStates: RefineStates
  integrateStates: IntegrateStates
  serverWS: React.MutableRefObject<WebSocket | null>
};

export interface FindSpotsStates {
  setLog: React.Dispatch<React.SetStateAction<string>>
  enabled: boolean
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  log: string
  minTOF: number
  maxTOF: number
  currentMinTOF: number
  setCurrentMinTOF: React.Dispatch<React.SetStateAction<number>>
  currentMaxTOF: number
  setCurrentMaxTOF: React.Dispatch<React.SetStateAction<number>>
  stepTOF: number
  ranSuccessfully: boolean,
  gain: string,
  setGain: React.Dispatch<React.SetStateAction<string>>,
  sigmaStrong: string,
  setSigmaStrong: React.Dispatch<React.SetStateAction<string>>,
  sigmaBG: string,
  setSigmaBG: React.Dispatch<React.SetStateAction<string>>,
  globalThreshold: string,
  setGlobalThreshold: React.Dispatch<React.SetStateAction<string>>,
  kernelSize: string,
  setKernelSize: React.Dispatch<React.SetStateAction<string>>,
  minLocal: string,
  setMinLocal: React.Dispatch<React.SetStateAction<string>>,
  iQR: string,
  setIQR: React.Dispatch<React.SetStateAction<string>>,
  blur: string,
  setBlur: React.Dispatch<React.SetStateAction<string>>,
  nBins: string,
  setNBins: React.Dispatch<React.SetStateAction<string>>,
  debug: boolean,
  setDebug: React.Dispatch<React.SetStateAction<boolean>>
  debugImageIdx: number,
  setDebugImageIdx: React.Dispatch<React.SetStateAction<number>>,
  debugView: string,
  setDebugView:React.Dispatch<React.SetStateAction<string>> ,
  numTOFBins: number,
  algorithm: string,
  setAlgorithm: React.Dispatch<React.SetStateAction<string>>
};

export interface IndexStates {
  setLog: React.Dispatch<React.SetStateAction<string>>
  enabled: boolean
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  log: string
  bravaisLattices: BravaisLattice[]
  selectedBravaisLatticeId: string,
  setSelectedBravaisLatticeId: React.Dispatch<React.SetStateAction<string>>,
  detectSymmetryOpen: boolean,
  setDetectSymmetryOpen: React.Dispatch<React.SetStateAction<boolean>>,
  detectSymmetryEnabled: boolean
  selectedBravaisLatticeLoading: boolean,
  setSelectedBravaisLatticeLoading: React.Dispatch<React.SetStateAction<boolean>>,
  ranSuccessfully: boolean,
  crystalIDs: number[]
};

export interface RefineStates {
  setLog: React.Dispatch<React.SetStateAction<string>>
  enabled: boolean
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  log: string
  ranSuccessfully: boolean

};

export interface IntegrateStates {
  setLog: React.Dispatch<React.SetStateAction<string>>
  enabled: boolean
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  log: string
  ranSuccessfully: boolean
  saveHKLEnabled: boolean
  vanadiumRun: string,
  setVanadiumRun: React.Dispatch<React.SetStateAction<string>>,
  emptyRun: string,
  setEmptyRun: React.Dispatch<React.SetStateAction<string>>,
  sampleDensity: string,
  setSampleDensity: React.Dispatch<React.SetStateAction<string>>,
  sampleRadius: string,
  setSampleRadius: React.Dispatch<React.SetStateAction<string>>,
  sampleAbsorptionXSection: string,
  setSampleAbsorptionXSection: React.Dispatch<React.SetStateAction<string>>,
  sampleScatteringXSection: string,
  setSampleScatteringXSection: React.Dispatch<React.SetStateAction<string>>,
  vanadiumDensity: string,
  setVanadiumDensity: React.Dispatch<React.SetStateAction<string>>,
  vanadiumRadius: string,
  setVanadiumRadius: React.Dispatch<React.SetStateAction<string>>,
  vanadiumAbsorptionXSection: string,
  setVanadiumAbsorptionXSection: React.Dispatch<React.SetStateAction<string>>,
  vanadiumScatteringXSection: string
  setVanadiumScatteringXSection: React.Dispatch<React.SetStateAction<string>>,
  applyLorentz: boolean
  setApplyLorentz: React.Dispatch<React.SetStateAction<boolean>>,
  tofBBoxPadding: string,
  setTofBBoxPadding: React.Dispatch<React.SetStateAction<string>>,
  xYBBoxPadding: string,
  setXYBBoxPadding: React.Dispatch<React.SetStateAction<string>>,
  applyIncidentSpectrum: boolean,
  setApplyIncidentSpectrum: React.Dispatch<React.SetStateAction<boolean>>,
  applySphericalAbsorption: boolean,
  setApplySphericalAbsorption: React.Dispatch<React.SetStateAction<boolean>>,
  minPartiality: string,
  setMinPartiality: React.Dispatch<React.SetStateAction<string>>,
  minISigma: string,
  setMinISigma: React.Dispatch<React.SetStateAction<string>>
  calculateLineProfile: boolean,
  setCalculateLineProfile: React.Dispatch<React.SetStateAction<boolean>>
  dmin: string
  setDmin: React.Dispatch<React.SetStateAction<string>>
  integrateType : string
  setIntegrateType: React.Dispatch<React.SetStateAction<string>>
};

export interface LineplotData {
  x: number;
  y: number;
}

export interface LineplotBboxData {
  x1: number;
  x2: number;
  id: string
}

export interface LineplotCentroidData {
  x: number;
  y: number;
  id: string;
  millerIdx: number[];
}

export interface ExperimentViewerStates {
  lineplotData: LineplotData[]
  lineplotBboxData: LineplotBboxData[]
  lineplotCentroidData: LineplotCentroidData[]
  lineplotTitle: string
  serverWS: React.MutableRefObject<WebSocket | null>
  newReflectionXYStored: boolean,
  hidden: boolean
  setHidden: React.Dispatch<React.SetStateAction<boolean>>
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  minTOF: number,
  maxTOF: number,
  currentMinTOF: number,
  currentMaxTOF: number,
  debugMode : boolean,
  debugImageIdx : number,
  setDebugImageIdx : React.Dispatch<React.SetStateAction<number>>
}

export interface RLVStates {
  enabled: boolean
  hidden: boolean
  setHidden: React.Dispatch<React.SetStateAction<boolean>>
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  orientationViewSelected: boolean
  setOrientationViewSelected: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ExperimentPlannerStates {
  enabled: boolean
  hidden: boolean
  setHidden: React.Dispatch<React.SetStateAction<boolean>>
  orientations: number[]
  numStoredOrientations: number
  setNumStoredOrientations: React.Dispatch<React.SetStateAction<number>>
  reflections: number[]
  predReflections: number[]
  completeness: number[]
  numExpOrientations : number
  setOrientations: React.Dispatch<React.SetStateAction<number[]>>
  setReflections: React.Dispatch<React.SetStateAction<number[]>>
  setPredReflections: React.Dispatch<React.SetStateAction<number[]>>
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  dmin: Number
  setDmin: React.Dispatch<React.SetStateAction<number>>
}

export interface IntegrationProfilerStates {
  enabled: boolean
  hidden: boolean
  setHidden: React.Dispatch<React.SetStateAction<boolean>>
  tof: number[]
  intensity: number[],
  background: number[],
  lineProfile: number[],
  lineProfileValue: number,
  lineProfileSigma: number,
  summationValue: number,
  summationSigma: number,
  title: string,
  loading: boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  serverWS: React.MutableRefObject<WebSocket | null>,
  reflectionID: string,
  shoeboxData2D: number[][],
  shoeboxMaskData2D: number[][],
  tOFPadding: string,
  setTOFPadding: React.Dispatch<React.SetStateAction<string>>,
  xYPadding: string,
  setXYPadding: React.Dispatch<React.SetStateAction<string>>,
  vanadiumRun: string,
  setVanadiumRun: React.Dispatch<React.SetStateAction<string>>,
  emptyRun: string,
  setEmptyRun: React.Dispatch<React.SetStateAction<string>>,
  sampleDensity: string,
  setSampleDensity: React.Dispatch<React.SetStateAction<string>>,
  sampleRadius: string,
  setSampleRadius: React.Dispatch<React.SetStateAction<string>>,
  sampleAbsorptionXSection: string,
  setSampleAbsorptionXSection: React.Dispatch<React.SetStateAction<string>>,
  sampleScatteringXSection: string,
  setSampleScatteringXSection: React.Dispatch<React.SetStateAction<string>>,
  vanadiumDensity: string,
  setVanadiumDensity: React.Dispatch<React.SetStateAction<string>>,
  vanadiumRadius: string,
  setVanadiumRadius: React.Dispatch<React.SetStateAction<string>>,
  vanadiumAbsorptionXSection: string,
  setVanadiumAbsorptionXSection: React.Dispatch<React.SetStateAction<string>>,
  vanadiumScatteringXSection: string
  setVanadiumScatteringXSection: React.Dispatch<React.SetStateAction<string>>,
  applyLorentz: boolean
  setApplyLorentz: React.Dispatch<React.SetStateAction<boolean>>,
  applyIncidentSpectrum: boolean,
  setApplyIncidentSpectrum: React.Dispatch<React.SetStateAction<boolean>>,
  applySphericalAbsorption: boolean,
  setApplySphericalAbsorption: React.Dispatch<React.SetStateAction<boolean>>,
  calculatedIntegrationReflections: boolean
}


export interface StateProps {
  experimentViewerStates: ExperimentViewerStates
  rLVStates: RLVStates
}

export interface Reflection {
  id: string,
  panel: string,
  panelName: string,
  millerIdx: string,
  XYZObs: string,
  XYZCal: string,
  wavelength: string,
  wavelengthCal: string,
  tof: string,
  tofCal: string,
  peakIntensity: string,
  summedIntensity: string,
  profileIntensity: string,
  exptID: string,
}

export interface BravaisLattice {
  id: string,
  metricFit: string,
  RMSD: string,
  cc: string,
  lattice: string,
  a: string,
  b: string,
  c: string,
  alpha: string,
  beta: string,
  gamma: string,
  volume: string,
  recommended: React.ReactNode
}

export interface ExptNamesDict  {
    [key: string]: string;
}
