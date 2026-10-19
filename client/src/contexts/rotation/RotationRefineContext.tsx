import React, { ReactNode, createContext, useState, useContext } from 'react';
import { Status, DefaultAlgorithmContextType } from '@/types'

export interface RotationRefineContextType extends DefaultAlgorithmContextType {
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

const RotationRefineContext = createContext<RotationRefineContextType | undefined>(undefined);

// dials.refine defaults: the wavelength of monochromatic data stays fixed
const DEFAULT_BEAM_FIX = "in_spindle_plane+wavelength";

export const RotationRefineProvider = ({ children }: { children: ReactNode }) => {

  const [enabled, setEnabled] = useState<boolean>(false);
  const [log, setLog] = useState<string>('');
  const [status, setStatus] = useState<Status>(Status.Default);
  const [progress, setProgress] = useState<number>(0);
  const [outlierAlgorithm, setOutlierAlgorithm] = useState<string>("auto");
  const [beamFix, setBeamFix] = useState<string>(DEFAULT_BEAM_FIX);
  const [crystalFix, setCrystalFix] = useState<string>("none");
  const [detectorFix, setDetectorFix] = useState<string>("none");
  const [goniometerFix, setGoniometerFix] = useState<string>("all");
  const [advancedOptions, setAdvancedOptions] = useState<string>("");

  const updateStatus = (status: string) => {
	setStatus(status as Status);
  };

  const actionMap: Record<string, any> = {
	"enabled": setEnabled,
	"log": setLog,
	"status": updateStatus,
	"progress": setProgress,
	"outlierAlgorithm": setOutlierAlgorithm,
	"beamFix": setBeamFix,
	"crystalFix": setCrystalFix,
	"detectorFix": setDetectorFix,
	"goniometerFix": setGoniometerFix,
	"advancedOptions": setAdvancedOptions,
  }

  const reset = () => {
	setEnabled(false);
	setLog("");
	setStatus(Status.Default);
	setProgress(0);
	setOutlierAlgorithm("auto");
	setBeamFix(DEFAULT_BEAM_FIX);
	setCrystalFix("none");
	setDetectorFix("none");
	setGoniometerFix("all");
	setAdvancedOptions("");
  }

  const updateParams = (params: Record<string, any>) => {
	Object.entries(params).forEach(([key, value]) => {
		if (actionMap.hasOwnProperty(key)){
			actionMap[key](value);
		}
		else{
			console.warn("Tried to update", key, "but not found in RotationRefineContext");
		}
	});
  }

  return (
    <RotationRefineContext.Provider
      value={{
		status,
		enabled,
		progress,
		setStatus,
		setProgress,
		updateStatus,
		updateParams,
		updateEnabled: setEnabled,
		reset,
		log,
		setLog,
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
    </RotationRefineContext.Provider>
  );
};

export const useRotationRefineContext = () => {
  const context = useContext(RotationRefineContext);
  if (!context) {
    throw new Error('useRotationRefineContext must be used within a RotationRefineProvider');
  }
  return context;
};
