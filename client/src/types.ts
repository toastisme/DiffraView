
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

export interface StateProps{
  experimentStates:{
    lineplotData : LineplotData[]
    lineplotTitle : string
  };
}