
export interface AlgorithmProps{
  importStates : {
	setLog : React.Dispatch<React.SetStateAction<string>>
	log : string
  };
  webSockets : {
	server: WebSocket
  };
}

export interface ImportTabProps {
  importStates: AlgorithmProps["importStates"];
  webSockets: AlgorithmProps["webSockets"];
}

export interface LineplotData{
  x: number;
  y: number;
}

export interface StateProps{
  experimentStates:{
    lineplotData : LineplotData[]
  };
}