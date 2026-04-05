import React, { ReactNode, createContext, useState, useContext } from 'react';
import { Status, DefaultAlgorithmContextType } from '../types'

export interface TemplateContextType extends DefaultAlgorithmContextType {
}

const TemplateContext = createContext<TemplateContextType | undefined>(undefined);

export const TemplateProvider = ({ children }: { children: ReactNode }) => {

  const [enabled, setEnabled] = useState<boolean>(true);
  const [log, setLog] = useState<string>('');
  const [status, setStatus] = useState<Status>(Status.Default);
  const [progress, setProgress] = useState<number>(0);

  const updateStatus = (status: string) => {
	const s = status as Status;
	setStatus(s);
  };

  const actionMap: Record<string, any> = {
	"log" : setLog,
	"status" : updateStatus,
	"progress" : setProgress,
  }

  const reset = () => {
	setLog("");
	setStatus(Status.Default);
	setProgress(0);
  }

  const updateParams = (params: Record<string, any>) => {

	Object.entries(params).forEach(([key, value]) => {
		if (actionMap.hasOwnProperty(key)){
			actionMap[key](value);
		}
		else{
			console.warn("Tried to update", key, "but not found in TemplateContext");
		}
	});
  }

  const updateEnabled = (enabled: boolean) => {
	setEnabled(enabled);
  };

  return (
    <TemplateContext.Provider
      value={{
		status,
		enabled,
		progress,
		setStatus,
		setProgress,
        updateStatus,
		updateParams,
		updateEnabled,
		reset,
		log,
		setLog,
      }}
    >
      {children}
    </TemplateContext.Provider>
  );

};

export const useTemplateContext = () => {
  const context = useContext(TemplateContext);
  if (!context) {
    throw new Error('useTemplateContext must be used within an TemplateProvider');
  }
  return context;
};