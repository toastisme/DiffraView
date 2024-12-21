import React, { createContext, useState, useContext } from 'react';
import { DefaultAlgorithmContextType } from '../types'

export interface ImportContextType extends DefaultAlgorithmContextType {
	browseImagesEnabled : boolean;
	setBrowseImagesEnabled: React.Dispatch<React.SetStateAction<boolean>>
}

const ImportContext = createContext<ImportContextType | undefined>(undefined);

interface ImportProviderProps {
  children: React.ReactNode;
}

export const ImportProvider: React.FC<ImportProviderProps> = ({ children }) => {

  const [log, setLog] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [inFailedState, setInFailedState] = useState<boolean>(false);
  const [browseImagesEnabled, setBrowseImagesEnabled] = useState<boolean>(true);

  const actionMap: Record<string, any> = {
	"setLog" : setLog,
	"setLoading" : setLoading,
	"setInFailedState": setInFailedState,
	"setBrowseImagesEnabled": setBrowseImagesEnabled
  }

  const reset = () => {
	setLog("");
	setLoading(false);
	setInFailedState(false);
	setBrowseImagesEnabled(true);
  }

  const updateLoading = (loading: boolean) => {
    setLoading(loading);
  };

  const updateStatus = (success: boolean) => {
    setInFailedState(!success);
	setBrowseImagesEnabled(success);
	setLoading(false);
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
		updateLoading,
        updateStatus,
		updateParams,
		reset,
		loading,
		inFailedState,
		browseImagesEnabled,
		setBrowseImagesEnabled,
		log
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
