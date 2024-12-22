import React, { ReactNode, createContext, useState, useContext } from 'react';
import { Status, DefaultAlgorithmContextType } from '../types'

export interface ImportContextType extends DefaultAlgorithmContextType {
	browseImagesEnabled : boolean;
	setBrowseImagesEnabled: React.Dispatch<React.SetStateAction<boolean>>;
	instrumentName: string;
	experimentDescription: string;
	reflectionsSummary: string;
	crystalSummary: string[];
}

const ImportContext = createContext<ImportContextType | undefined>(undefined);

export const ImportProvider = ({ children }: { children: ReactNode }) => {

  const [enabled, setEnabled] = useState<boolean>(true);
  const [log, setLog] = useState<string>('');
  const [status, setStatus] = useState<Status>(Status.Default);
  const [browseImagesEnabled, setBrowseImagesEnabled] = useState<boolean>(true);
  const [instrumentName, setInstrumentName] = useState<string>("");
  const [experimentDescription, setExperimentDescription] = useState<string>("");
  const [reflectionsSummary, setReflectionsSummary] = useState<string>("");
  const [crystalSummary, setCrystalSummary] = useState<string[]>([]);

  const updateStatus = (status: string) => {
	const s = status as Status;
	setStatus(s);
	if (s === Status.Default){
		setBrowseImagesEnabled(true);
	}
  };

  const actionMap: Record<string, any> = {
	"log" : setLog,
	"status" : updateStatus,
	"browseImagesEnabled": setBrowseImagesEnabled,
	"instrumentName" : setInstrumentName,
	"experimentDescription" : setExperimentDescription,
	"reflectionSummary" : setReflectionsSummary,
	"crystalSummary" : setCrystalSummary,
  }

  const reset = () => {
	setLog("");
	setStatus(Status.Default);
	setBrowseImagesEnabled(true);
	setInstrumentName("");
	setReflectionsSummary("");
	setCrystalSummary([]);
  }

  const updateEnabled = (enabled: boolean) => {
	setEnabled(enabled);
  };


  const updateParams = (params: Record<string, any>) => {

	Object.entries(params).forEach(([key, value]) => {
		if (actionMap.hasOwnProperty(key)){
			actionMap[key](value);
		}
		else{
			console.warn("Tried to update", key, "but not found in ImportContext");
		}
	});
  }

  return (
    <ImportContext.Provider
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
		browseImagesEnabled,
		setBrowseImagesEnabled,
		instrumentName,
		experimentDescription,
		reflectionsSummary,
		crystalSummary
      }}
    >
      {children}
    </ImportContext.Provider>
  );
};

export const useImportContext = () => {
  const context = useContext(ImportContext);
  if (!context) {
    throw new Error('useImportContext must be used within an ImportProvider');
  }
  return context;
};
