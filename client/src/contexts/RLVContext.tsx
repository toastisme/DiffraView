import React, { ReactNode, createContext, useState, useContext } from 'react';
import { Status, DefaultViewerContextType } from '../types'

export type RLVColorMode = 'orientation' | 'crystal' | 'resolution';

export interface RLVContextType extends DefaultViewerContextType {
  colorMode: RLVColorMode
  setColorMode: React.Dispatch<React.SetStateAction<RLVColorMode>>
  meshVisible: boolean
  setMeshVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const RLVContext = createContext<RLVContextType | undefined>(undefined);

export const RLVProvider = ({ children }: { children: ReactNode }) => {

  const [enabled, setEnabled] = useState<boolean>(false);
  const [status, setStatus] = useState<Status>(Status.Default);
  const [hidden, setHidden] = useState<boolean>(false);
  const [colorMode, setColorMode] = useState<RLVColorMode>('orientation');
  const [meshVisible, setMeshVisible] = useState<boolean>(false);

  const updateStatus = (status: string) => {
	const s = status as Status;
	setStatus(s);
  };

  const actionMap: Record<string, any> = {
	"status" : updateStatus,
	"hidden": setHidden,
	"enabled": setEnabled,
	"colorMode" : setColorMode,
  "meshVisible" : setMeshVisible
  }

  const reset = () => {
	setStatus(Status.Default);
	setEnabled(false);
	setColorMode('orientation');
	setHidden(false);
  setMeshVisible(false);
  }

  const updateParams = (params: Record<string, any>) => {

	Object.entries(params).forEach(([key, value]) => {
		if (actionMap.hasOwnProperty(key)){
			actionMap[key](value);
		}
		else{
			console.warn("Tried to update", key, "but not found in RLVContext");
		}
	});
  }

  const updateEnabled = (enabled: boolean) => {
	setEnabled(enabled);
  };

  return (
    <RLVContext.Provider
      value={{
		status,
		enabled,
		setStatus,
        updateStatus,
		updateParams,
		updateEnabled,
		reset,
		hidden,
		setHidden,
		colorMode,
		setColorMode,
    meshVisible,
    setMeshVisible
      }}
    >
      {children}
    </RLVContext.Provider>
  );

};

export const useRLVContext = () => {
  const context = useContext(RLVContext);
  if (!context) {
    throw new Error('useRLVContext must be used within an RLVProvider');
  }
  return context;
};
