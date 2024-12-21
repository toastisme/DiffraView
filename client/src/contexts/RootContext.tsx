import React, { useRef, useState, createContext, useEffect, useContext } from 'react';
import { useImportContext } from './ImportContext';

interface RootContextType {
	serverWS: React.MutableRefObject<WebSocket | null>;
	currentFileKey: string;
}

const RootContext = createContext<RootContextType | undefined>(undefined);

interface RootProviderProps{
	children: React.ReactNode;
	setAppLoading : React.Dispatch<React.SetStateAction<boolean>>
}

export const RootProvider: React.FC<RootProviderProps> = ({ children, setAppLoading }) => {

  const serverWS = useRef<WebSocket | null>(null);
  const [currentFileKey, setCurrentFileKey] = useState<string>("");
  const {
	reset: importReset, 
	updateParams: updateImportParams} = useImportContext();

  useEffect(() => {
    setAppLoading(true)
    connectToServer();
	reset();
	setDefaultStateTabsVisibility();
  }, [])

  function reset(){
	importReset();
  }

  function setDefaultStateTabsVisibility(){
	/*
    experimentViewerStates.setHidden(false);
    rLVStates.setHidden(true);
    experimentPlannerStates.setHidden(true);
	*/
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
      case 'lost_connection_error':
        throw new Error('Server has crashed. Please restart the app.');
	  case 'update_import_params':
		updateImportParams(msg["params"]);
		break;
      default:
        console.warn('Unhandled command:', command);
    }

  };

  return <RootContext.Provider value={{
	serverWS,
	currentFileKey
  }}>{children}</RootContext.Provider>;
};

export const useRootContext = () => {
  const context = useContext(RootContext);
  if (!context) {
    throw new Error('useRootContext must be used within a RootProvider');
  }
  return context;
};
