import React, { useRef, useState, createContext, useEffect, useContext } from 'react';

interface RootContextType {
	loading: boolean;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	serverWS: WebSocket;
	currentFileKey: string;
}

const RootContext = createContext<RootContextType | undefined>(undefined);

interface RootProviderProps{
	children: React.ReactNode;
}

export const RootProvider: React.FC<RootProviderProps> = ({ children }) => {

  const serverWS = useRef<WebSocket | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true)
    connectToServer();
	setDefaultStateTabsVisibility();
  }, [])

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
      if (serverWS.readyState === WebSocket.OPEN) {
        serverWS.send(JSON.stringify({
          "channel": "server",
          "command": "record_connection",
          "id": "gui"
        }
        ));
      }
      setLoading(false);
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
      default:
        console.warn('Unhandled command:', command);
    }

  };

  return <RootContext.Provider value={{
	loading,
	setLoading,
	serverWS
  }}>{children}</RootContext.Provider>;
};

export const useRootContext = () => {
  const context = useContext(RootContext);
  if (!context) {
    throw new Error('useRootContext must be used within a RootProvider');
  }
  return context;
};
