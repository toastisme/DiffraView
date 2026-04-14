import React, { ReactNode, createContext, useState, useContext } from 'react';
import { Status, DefaultAlgorithmContextType } from '../types'

export interface RefineContextType extends DefaultAlgorithmContextType {
  optimizePanelsSeparately: boolean;
  setOptimizePanelsSeparately: React.Dispatch<React.SetStateAction<boolean>>;
  outlierAlgorithm: string;
  setOutlierAlgorithm: React.Dispatch<React.SetStateAction<string>>;
  beamFix: string;
  setBeamFix: React.Dispatch<React.SetStateAction<string>>;
  crystalFix: string;
  setCrystalFix: React.Dispatch<React.SetStateAction<string>>;
  detectorFix: string;
  setDetectorFix: React.Dispatch<React.SetStateAction<string>>;
  goniometerFix: string;
  setGoniometerFix: React.Dispatch<React.SetStateAction<string>>;
  advancedOptions: string;
  setAdvancedOptions: React.Dispatch<React.SetStateAction<string>>;
}

const RefineContext = createContext<RefineContextType | undefined>(undefined);

export const RefineProvider = ({ children }: { children: ReactNode }) => {

  const [enabled, setEnabled] = useState<boolean>(false);
  const [log, setLog] = useState<string>('');
  const [status, setStatus] = useState<Status>(Status.Default);
  const [progress, setProgress] = useState<number>(0);
  const [optimizePanelsSeparately, setOptimizePanelsSeparately] = useState<boolean>(false);
  const [outlierAlgorithm, setOutlierAlgorithm] = useState<string>("auto");
  const [beamFix, setBeamFix] = useState<string>("none");
  const [crystalFix, setCrystalFix] = useState<string>("none");
  const [detectorFix, setDetectorFix] = useState<string>("none");
  const [goniometerFix, setGoniometerFix] = useState<string>("all");
  const [advancedOptions, setAdvancedOptions] = useState<string>("");

  const updateStatus = (status: string) => {
	const s = status as Status;
	setStatus(s);
  };

  const actionMap: Record<string, any> = {
	"enabled": setEnabled,
	"log" : setLog,
	"status" : updateStatus,
  "optimizePanelsSeparately": setOptimizePanelsSeparately,
  "progress": setProgress,
  "outlierAlgorithm": setOutlierAlgorithm,
  "beamFix": setBeamFix,
  "crystalFix": setCrystalFix,
  "detectorFix": setDetectorFix,
  "goniometerFix": setGoniometerFix,
  "advancedOptions": setAdvancedOptions,
  }

  const reset = () => {
	setLog("");
	setEnabled(false);
	setStatus(Status.Default);
	setProgress(0);
  setOutlierAlgorithm("auto");
  setBeamFix("none");
  setCrystalFix("none");
  setDetectorFix("none");
  setGoniometerFix("all");
  setOptimizePanelsSeparately(false);
  setAdvancedOptions("");
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
		progress,
		setStatus,
		setProgress,
        updateStatus,
		updateParams,
		updateEnabled,
		reset,
		log,
		setLog,
    optimizePanelsSeparately,
    setOptimizePanelsSeparately,
    outlierAlgorithm,
    setOutlierAlgorithm,
    beamFix,
    setBeamFix,
    crystalFix,
    setCrystalFix,
    detectorFix,
    setDetectorFix,
    goniometerFix,
    setGoniometerFix,
    advancedOptions,
    setAdvancedOptions,
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