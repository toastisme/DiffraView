import React, { ReactNode, createContext, useState, useContext } from 'react';
import { Status, DefaultAlgorithmContextType } from '@/types'

// dials.scale basic parameters; an empty string is DIALS' default (None)
export interface RotationScaleParams {
  model: string;
  anomalous: boolean;
  overwriteExistingModels: boolean;
  reflectionSelectionMethod: string;
  isigmaCutoff: string;
  bestUnitCell: string;
  stillsMinIsigma: string;
  stillsMinMultiplicity: string;
  resetErrorModel: boolean;
  errorModelGroup: string;
  checkConsistentIndexing: boolean;
  filteringMethod: string;
  maxCycles: string;
  maxPercentRemoved: string;
  minCompleteness: string;
  deltaCCHalfMode: string;
  groupSize: string;
  stdCutoff: string;
}

export const SCALE_DEFAULTS: RotationScaleParams = {
  model: "Auto",
  anomalous: false,
  overwriteExistingModels: false,
  reflectionSelectionMethod: "auto",
  isigmaCutoff: "1.0",
  bestUnitCell: "",
  stillsMinIsigma: "2.0",
  stillsMinMultiplicity: "4",
  resetErrorModel: false,
  errorModelGroup: "",
  checkConsistentIndexing: false,
  filteringMethod: "None",
  maxCycles: "6",
  maxPercentRemoved: "10",
  minCompleteness: "",
  deltaCCHalfMode: "dataset",
  groupSize: "10",
  stdCutoff: "4.0",
};

export interface RotationScaleContextType extends DefaultAlgorithmContextType {
  params: RotationScaleParams;
  setParam: <K extends keyof RotationScaleParams>(key: K, value: RotationScaleParams[K]) => void;
  advancedOptions: string;
  setAdvancedOptions: React.Dispatch<React.SetStateAction<string>>;
  // Step whose files are scaled (integrate or apply_symmetry)
  inputFrom: string;
  setInputFrom: React.Dispatch<React.SetStateAction<string>>;
}

const RotationScaleContext = createContext<RotationScaleContextType | undefined>(undefined);

export const RotationScaleProvider = ({ children }: { children: ReactNode }) => {

  const [enabled, setEnabled] = useState<boolean>(false);
  const [log, setLog] = useState<string>('');
  const [status, setStatus] = useState<Status>(Status.Default);
  const [progress, setProgress] = useState<number>(0);
  const [params, setParams] = useState<RotationScaleParams>(SCALE_DEFAULTS);
  const [advancedOptions, setAdvancedOptions] = useState<string>("");
  const [inputFrom, setInputFrom] = useState<string>("integrate");

  const setParam = <K extends keyof RotationScaleParams>(key: K, value: RotationScaleParams[K]) => {
	setParams((prev) => ({ ...prev, [key]: value }));
  };

  const updateStatus = (status: string) => {
	setStatus(status as Status);
  };

  const actionMap: Record<string, any> = {
	"enabled": setEnabled,
	"log": setLog,
	"status": updateStatus,
	"progress": setProgress,
	"advancedOptions": setAdvancedOptions,
  }

  const reset = () => {
	setEnabled(false);
	setLog("");
	setStatus(Status.Default);
	setProgress(0);
	setParams(SCALE_DEFAULTS);
	setAdvancedOptions("");
	setInputFrom("integrate");
  }

  const updateParams = (newParams: Record<string, any>) => {
	Object.entries(newParams).forEach(([key, value]) => {
		if (actionMap.hasOwnProperty(key)){
			actionMap[key](value);
		}
		else if (key in SCALE_DEFAULTS){
			setParam(key as keyof RotationScaleParams, value);
		}
		else{
			console.warn("Tried to update", key, "but not found in RotationScaleContext");
		}
	});
  }

  return (
    <RotationScaleContext.Provider
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
		params,
		setParam,
		advancedOptions,
		setAdvancedOptions,
		inputFrom,
		setInputFrom,
      }}
    >
      {children}
    </RotationScaleContext.Provider>
  );
};

export const useRotationScaleContext = () => {
  const context = useContext(RotationScaleContext);
  if (!context) {
    throw new Error('useRotationScaleContext must be used within a RotationScaleProvider');
  }
  return context;
};
