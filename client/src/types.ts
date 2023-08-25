
export interface AlgorithmProps{
  importStates : ImportStates
  findSpotsStates : FindSpotsStates
  indexStates: IndexStates
  refineStates: RefineStates
  integrateStates : IntegrateStates
  serverWS: React.MutableRefObject<WebSocket | null>
};

export interface ImportStates  {
    setLog : React.Dispatch<React.SetStateAction<string>>
    log : string
    loading : boolean
    setLoading : React.Dispatch<React.SetStateAction<boolean>>
};

export interface  FindSpotsStates {
    setLog : React.Dispatch<React.SetStateAction<string>>
    enabled : boolean
    loading: boolean
    setLoading : React.Dispatch<React.SetStateAction<boolean>>
    log: string
};

export interface IndexStates  {
    setLog : React.Dispatch<React.SetStateAction<string>>
    enabled : boolean
    loading: boolean
    setLoading : React.Dispatch<React.SetStateAction<boolean>>
    log: string
};

export interface RefineStates {
    setLog : React.Dispatch<React.SetStateAction<string>>
    enabled : boolean
    loading: boolean
    setLoading : React.Dispatch<React.SetStateAction<boolean>>
    log: string
    bravaisLattices: BravaisLattice[]
    selectedBravaisLatticeId: string,
    setSelectedBravaisLatticeId: React.Dispatch<React.SetStateAction<string>>,
    detectSymmetryOpen: boolean,
    setDetectSymmetryOpen: React.Dispatch<React.SetStateAction<boolean>>,

};

export interface IntegrateStates {
    setLog : React.Dispatch<React.SetStateAction<string>>
    enabled : boolean
    loading: boolean
    setLoading : React.Dispatch<React.SetStateAction<boolean>>
    log: string
};

export interface LineplotData{
  x: number;
  y: number;
}

export interface LineplotBboxData{
  x1: number;
  x2: number;
  id: string
}

export interface LineplotCentroidData{
  x: number;
  y: number;
  id: string;
  millerIdx: number[];
}

export interface ExperimentViewerStates{
    lineplotData : LineplotData[]
    lineplotBboxData: LineplotBboxData[]
    lineplotCentroidData : LineplotCentroidData[]
    lineplotTitle : string
    hidden : boolean
    setHidden : React.Dispatch<React.SetStateAction<boolean>>
}

export interface RLVStates{
  enabled : boolean
  hidden: boolean
  setHidden : React.Dispatch<React.SetStateAction<boolean>>
}

export interface StateProps{
  experimentViewerStates: ExperimentViewerStates
  rLVStates : RLVStates 
}

export interface Reflection{
  id : string,
  panel : string,
  panelName : string,
  millerIdx : string,
  XYZObs : string,
  XYZCal : string,
  wavelength: string,
  tof: string
}

export interface BravaisLattice{
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