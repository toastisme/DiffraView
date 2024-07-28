import React from "react"

export interface AlgorithmProps {
  importStates: ImportStates
  findSpotsStates: FindSpotsStates
  indexStates: IndexStates
  refineStates: RefineStates
  integrateStates: IntegrateStates
  serverWS: React.MutableRefObject<WebSocket | null>
};

export interface ImportStates {
  setLog: React.Dispatch<React.SetStateAction<string>>
  log: string
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  localFileDir: string
  setLocalFileDir: React.Dispatch<React.SetStateAction<string>>
  usingLocalServer: boolean
  setUsingLocalServer: React.Dispatch<React.SetStateAction<boolean>>
  ranSuccessfully: boolean
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
  ranSuccessfully: boolean
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
}

export interface RLVStates {
  enabled: boolean
  hidden: boolean
  setHidden: React.Dispatch<React.SetStateAction<boolean>>
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ExperimentPlannerStates {
  enabled: boolean
  hidden: boolean
  setHidden: React.Dispatch<React.SetStateAction<boolean>>
  orientations: number[]
  reflections: number[]
  setOrientations: React.Dispatch<React.SetStateAction<number[]>>
  setReflections: React.Dispatch<React.SetStateAction<number[]>>
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
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
  reflectionID: string
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
  exptID: string
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
