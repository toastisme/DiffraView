
export interface AlgorithmProps{
  importStates : ImportStates
  findSpotsStates : FindSpotsStates
  indexStates: IndexStates
  refineStates: RefineStates
  integrateStates : IntegrateStates
  serverWS: WebSocket
};

export interface ImportStates  {
    setLog : React.Dispatch<React.SetStateAction<string>>
    log : string
    loading : boolean
    setLoading : React.Dispatch<React.SetStateAction<boolean>>
};

export interface  FindSpotsStates {
    enabled : boolean
    loading: boolean
    setLoading : React.Dispatch<React.SetStateAction<boolean>>
    log: string
};

export interface IndexStates  {
    enabled : boolean
    loading: boolean
    setLoading : React.Dispatch<React.SetStateAction<boolean>>
    log: string
};

export interface RefineStates {
    enabled : boolean
    loading: boolean
    setLoading : React.Dispatch<React.SetStateAction<boolean>>
    log: string
};

export interface IntegrateStates {
    enabled : boolean
    loading: boolean
    setLoading : React.Dispatch<React.SetStateAction<boolean>>
    log: string
};

export interface LineplotData{
  x: number;
  y: number;
}

export interface ExperimentViewerStates{
    lineplotData : LineplotData[]
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
  millerIdx : string,
  XYZObs : string,
  XYZCal : string,
  wavelength: string,
  tof: string
}