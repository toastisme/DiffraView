import React, { ReactNode, createContext, useState, useContext } from 'react';
import { Status, DefaultAlgorithmContextType, AdvancedOption, ParamDefinition } from '@/types'
import { RotationSpotFindingParams } from '@/components/rotation/RotationFindSpotsInputParams'

export interface RotationFindSpotsContextType extends DefaultAlgorithmContextType, RotationSpotFindingParams {
  setAlgorithm: React.Dispatch<React.SetStateAction<string>>;
  numImages: number;
  advancedOptions: AdvancedOption[];
  setAdvancedOptions: React.Dispatch<React.SetStateAction<AdvancedOption[]>>;
  // Parameters the advanced option search offers; null until requested
  advancedDefinitions: ParamDefinition[] | null;
  // Whether a mask stored in the experiment viewer is used
  useMask: boolean;
  setUseMask: React.Dispatch<React.SetStateAction<boolean>>;
}

const RotationFindSpotsContext = createContext<RotationFindSpotsContextType | undefined>(undefined);

export const RotationFindSpotsProvider = ({ children }: { children: ReactNode }) => {

  const [enabled, setEnabled] = useState<boolean>(false);
  const [log, setLog] = useState<string>("");
  const [status, setStatus] = useState<Status>(Status.Default);
  const [progress, setProgress] = useState<number>(0);
  const [numImages, setNumImages] = useState<number>(0);
  const [algorithm, setAlgorithm] = useState<string>("dispersion_extended");
  const [gain, setGain] = useState<string>("1.0");
  const [sigmaStrong, setSigmaStrong] = useState<string>("3.0");
  const [sigmaBackground, setSigmaBackground] = useState<string>("6.0");
  const [globalThreshold, setGlobalThreshold] = useState<string>("0.0");
  const [kernelSize, setKernelSize] = useState<string>("3,3");
  const [minLocal, setMinLocal] = useState<string>("2");
  const [iQR, setIQR] = useState<string>("6");
  const [blur, setBlur] = useState<string>("none");
  const [nBins, setNBins] = useState<string>("100");
  const [debug, setDebug] = useState<boolean>(false);
  const [debugImageIdx, setDebugImageIdx] = useState<number>(0);
  const [debugView, setDebugView] = useState<string>("image");
  const [advancedOptions, setAdvancedOptions] = useState<AdvancedOption[]>([]);
  const [advancedDefinitions, setAdvancedDefinitions] = useState<ParamDefinition[] | null>(null);
  const [useMask, setUseMask] = useState<boolean>(true);

  const updateStatus = (status: string) => {
	setStatus(status as Status);
  };

  const actionMap: Record<string, any> = {
	"enabled": setEnabled,
	"log": setLog,
	"status": updateStatus,
	"progress": setProgress,
	"numImages": setNumImages,
	"algorithm": setAlgorithm,
	"gain": setGain,
	"sigmaStrong": setSigmaStrong,
	"sigmaBackground": setSigmaBackground,
	"globalThreshold": setGlobalThreshold,
	"kernelSize": setKernelSize,
	"minLocal": setMinLocal,
	"iQR": setIQR,
	"blur": setBlur,
	"nBins": setNBins,
	"debug": setDebug,
	"debugImageIdx": setDebugImageIdx,
	"debugView": setDebugView,
	"advancedOptions": setAdvancedOptions,
	"advancedDefinitions": setAdvancedDefinitions,
  }

  const reset = () => {
	setEnabled(false);
	setLog("");
	setStatus(Status.Default);
	setProgress(0);
	setNumImages(0);
	setAlgorithm("dispersion_extended");
	setGain("1.0");
	setSigmaStrong("3.0");
	setSigmaBackground("6.0");
	setGlobalThreshold("0.0");
	setKernelSize("3,3");
	setMinLocal("2");
	setIQR("6");
	setBlur("none");
	setNBins("100");
	setDebug(false);
	setDebugImageIdx(0);
	setDebugView("image");
	setAdvancedOptions([]);
	setAdvancedDefinitions(null);
	setUseMask(true);
  }

  const updateParams = (params: Record<string, any>) => {
	Object.entries(params).forEach(([key, value]) => {
		if (actionMap.hasOwnProperty(key)){
			actionMap[key](value);
		}
		else{
			console.warn("Tried to update", key, "but not found in RotationFindSpotsContext");
		}
	});
  }

  return (
    <RotationFindSpotsContext.Provider
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
		numImages,
		algorithm,
		setAlgorithm,
		gain,
		setGain,
		sigmaStrong,
		setSigmaStrong,
		sigmaBackground,
		setSigmaBackground,
		globalThreshold,
		setGlobalThreshold,
		kernelSize,
		setKernelSize,
		minLocal,
		setMinLocal,
		iQR,
		setIQR,
		blur,
		setBlur,
		nBins,
		setNBins,
		debug,
		setDebug,
		debugImageIdx,
		setDebugImageIdx,
		debugView,
		setDebugView,
		advancedOptions,
		setAdvancedOptions,
		advancedDefinitions,
		useMask,
		setUseMask,
      }}
    >
      {children}
    </RotationFindSpotsContext.Provider>
  );
};

export const useRotationFindSpotsContext = () => {
  const context = useContext(RotationFindSpotsContext);
  if (!context) {
    throw new Error('useRotationFindSpotsContext must be used within a RotationFindSpotsProvider');
  }
  return context;
};
