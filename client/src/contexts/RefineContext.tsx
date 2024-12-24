import { ReactNode, createContext, useState, useContext } from 'react';
import { Status, DefaultAlgorithmContextType } from '../types'

export interface RefineContextType extends DefaultAlgorithmContextType {
}

const RefineContext = createContext<RefineContextType | undefined>(undefined);

export const RefineProvider = ({ children }: { children: ReactNode }) => {

  const [enabled, setEnabled] = useState<boolean>(false);
  const [log, setLog] = useState<string>('');
  const [status, setStatus] = useState<Status>(Status.Default);

  const updateStatus = (status: string) => {
	const s = status as Status;
	setStatus(s);
  };

  const actionMap: Record<string, any> = {
	"enabled": setEnabled,
	"log" : setLog,
	"status" : updateStatus,
  }

  const reset = () => {
	setLog("");
	setEnabled(false);
	setStatus(Status.Default);
  }

  const updateParams = (params: Record<string, any>) => {

	Object.entries(params).forEach(([key, value]) => {
		if (actionMap.hasOwnProperty(key)){
			actionMap[key](value);
		}
		else{
			console.warn("Tried to update", key, "but not found in RefineContext");
		}
	});
  }

  const updateEnabled = (enabled: boolean) => {
	setEnabled(enabled);
  };

  return (
    <RefineContext.Provider
      value={{
		status,
		enabled,
		setStatus,
        updateStatus,
		updateParams,
		updateEnabled,
		reset,
		log,
		setLog,
      }}
    >
      {children}
    </RefineContext.Provider>
  );

};

export const useRefineContext = () => {
  const context = useContext(RefineContext);
  if (!context) {
    throw new Error('useRefineContext must be used within an RefineProvider');
  }
  return context;
};