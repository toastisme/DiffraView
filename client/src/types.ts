
export interface AlgorithmStates{
  importStates : {
	setLog : React.Dispatch<React.SetStateAction<string>>
	log : string
  };
  webSockets : {
	server: WebSocket
  }
}

export interface ImportTabProps {
  importStates: AlgorithmStates["importStates"];
  webSockets: AlgorithmStates["webSockets"];
}