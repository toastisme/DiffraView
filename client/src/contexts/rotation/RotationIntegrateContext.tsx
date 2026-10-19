import React, { ReactNode, createContext, useState, useContext } from 'react';
import { Status, DefaultAlgorithmContextType } from '@/types'

export interface RotationIntegrateContextType extends DefaultAlgorithmContextType {
  exportEnabled: boolean;
  // integration.profile.fitting; false is summation only
  profileFitting: boolean;
  setProfileFitting: React.Dispatch<React.SetStateAction<boolean>>;
  backgroundAlgorithm: string;
  setBackgroundAlgorithm: React.Dispatch<React.SetStateAction<string>>;
  dmin: string;
  setDmin: React.Dispatch<React.SetStateAction<string>>;
  advancedOptions: string;
  setAdvancedOptions: React.Dispatch<React.SetStateAction<string>>;
  intensityExportType: string;
  setIntensityExportType: React.Dispatch<React.SetStateAction<string>>;
  minPartiality: string;
  setMinPartiality: React.Dispatch<React.SetStateAction<string>>;
  minISigma: string;
  setMinISigma: React.Dispatch<React.SetStateAction<string>>;
}

const RotationIntegrateContext = createContext<RotationIntegrateContextType | undefined>(undefined);

export const RotationIntegrateProvider = ({ children }: { children: ReactNode }) => {

  const [enabled, setEnabled] = useState<boolean>(false);
  const [log, setLog] = useState<string>('');
  const [status, setStatus] = useState<Status>(Status.Default);
  const [progress, setProgress] = useState<number>(0);
  const [exportEnabled, setExportEnabled] = useState<boolean>(false);
  const [profileFitting, setProfileFitting] = useState<boolean>(true);
  const [backgroundAlgorithm, setBackgroundAlgorithm] = useState<string>("Auto");
  const [dmin, setDmin] = useState<string>("");
  const [advancedOptions, setAdvancedOptions] = useState<string>("");
  const [intensityExportType, setIntensityExportType] = useState<string>("profile");
  // dials.export mtz defaults
  const [minPartiality, setMinPartiality] = useState<string>("0.4");
  const [minISigma, setMinISigma] = useState<string>("-5");

  const updateStatus = (status: string) => {
	setStatus(status as Status);
  };

  const actionMap: Record<string, any> = {
	"enabled": setEnabled,
	"log": setLog,
	"status": updateStatus,
	"progress": setProgress,
	"exportEnabled": setExportEnabled,
	"profileFitting": setProfileFitting,
	"backgroundAlgorithm": setBackgroundAlgorithm,
	"dmin": setDmin,
	"advancedOptions": setAdvancedOptions,
	"intensityExportType": setIntensityExportType,
  }

  const reset = () => {
	setEnabled(false);
	setLog("");
	setStatus(Status.Default);
	setProgress(0);
	setExportEnabled(false);
	setProfileFitting(true);
	setBackgroundAlgorithm("Auto");
	setDmin("");
	setAdvancedOptions("");
	setIntensityExportType("profile");
	setMinPartiality("0.4");
	setMinISigma("-5");
  }

  const updateParams = (params: Record<string, any>) => {
	Object.entries(params).forEach(([key, value]) => {
		if (actionMap.hasOwnProperty(key)){
			actionMap[key](value);
		}
		else{
			console.warn("Tried to update", key, "but not found in RotationIntegrateContext");
		}
	});
  }

  return (
    <RotationIntegrateContext.Provider
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
		exportEnabled,
		profileFitting,
		setProfileFitting,
		backgroundAlgorithm,
		setBackgroundAlgorithm,
		dmin,
		setDmin,
		advancedOptions,
		setAdvancedOptions,
		intensityExportType,
		setIntensityExportType,
		minPartiality,
		setMinPartiality,
		minISigma,
		setMinISigma,
      }}
    >
      {children}
    </RotationIntegrateContext.Provider>
  );
};

export const useRotationIntegrateContext = () => {
  const context = useContext(RotationIntegrateContext);
  if (!context) {
    throw new Error('useRotationIntegrateContext must be used within a RotationIntegrateProvider');
  }
  return context;
};
