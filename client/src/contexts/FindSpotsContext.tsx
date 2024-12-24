import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Status, DefaultAlgorithmContextType } from '../types';

export interface FindSpotsContextType extends DefaultAlgorithmContextType {
  minTOF: number;
  setMinTOF: React.Dispatch<React.SetStateAction<number>>;
  maxTOF: number;
  setMaxTOF: React.Dispatch<React.SetStateAction<number>>;
  currentMinTOF: number;
  setCurrentMinTOF: React.Dispatch<React.SetStateAction<number>>;
  currentMaxTOF: number;
  setCurrentMaxTOF: React.Dispatch<React.SetStateAction<number>>;
  stepTOF: number;
  setStepTOF: React.Dispatch<React.SetStateAction<number>>;
  gain: string;
  setGain: React.Dispatch<React.SetStateAction<string>>;
  sigmaStrong: string;
  setSigmaStrong: React.Dispatch<React.SetStateAction<string>>;
  sigmaBackground: string;
  setSigmaBackground: React.Dispatch<React.SetStateAction<string>>;
  globalThreshold: string;
  setGlobalThreshold: React.Dispatch<React.SetStateAction<string>>;
  kernelSize: string;
  setKernelSize: React.Dispatch<React.SetStateAction<string>>;
  minLocal: string;
  setMinLocal: React.Dispatch<React.SetStateAction<string>>;
  iQR: string;
  setIQR: React.Dispatch<React.SetStateAction<string>>;
  blur: string;
  setBlur: React.Dispatch<React.SetStateAction<string>>;
  nBins: string;
  setNBins: React.Dispatch<React.SetStateAction<string>>;
  debug: boolean;
  setDebug: React.Dispatch<React.SetStateAction<boolean>>;
  debugImageIdx: number;
  setDebugImageIdx: React.Dispatch<React.SetStateAction<number>>;
  debugView: string;
  setDebugView: React.Dispatch<React.SetStateAction<string>>;
  numTOFBins: number;
  setNumTOFBins: React.Dispatch<React.SetStateAction<number>>;
  algorithm: string;
  setAlgorithm: React.Dispatch<React.SetStateAction<string>>;
}

const FindSpotsContext = createContext<FindSpotsContextType | undefined>(undefined);

export const FindSpotsProvider = ({ children }: { children: ReactNode }) => {

  const [log, setLog] = useState<string>("");
  const [status, setStatus] = useState<Status>(Status.Default);
  const [enabled, setEnabled] = useState<boolean>(false);
  const [minTOF, setMinTOF] = useState<number>(0);
  const [maxTOF, setMaxTOF] = useState<number>(0);
  const [currentMinTOF, setCurrentMinTOF] = useState<number>(0);
  const [currentMaxTOF, setCurrentMaxTOF] = useState<number>(0);
  const [stepTOF, setStepTOF] = useState<number>(0);
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
  const [numTOFBins, setNumTOFBins] = useState<number>(0);
  const [algorithm, setAlgorithm] = useState<string>("dispersion_extended");

  const updateStatus = (status: string) => {
	const s = status as Status;
	setStatus(s);
  };

  const actionMap: Record<string, any> = {
	"enabled": setEnabled,
	"log" : setLog,
	"status" : updateStatus,
	"minTOF" : setMinTOF,
	"maxTOF" : setMaxTOF,
	"currentMinTOF" : setCurrentMinTOF,
	"currentMaxTOF" : setCurrentMaxTOF,
	"stepTOF" : setStepTOF, 
	"gain" : setGain,
	"sigmaStrong": setSigmaStrong,
	"sigmaBackground" : setSigmaBackground,
	"globalThreshold" : setGlobalThreshold,
	"kernelSize": setKernelSize,
	"minLocal" : setMinLocal,
	"iQR" : setIQR,
	"blur" : setBlur,
	"nBins" : setNBins,
	"debug" : setDebug,
	"debugImageIdx": setDebugImageIdx,
	"debugView" : setDebugView,
	"numTOFBins" : setNumTOFBins,
	"algorithm" : setAlgorithm
  }

  useEffect(() => {
    setNumTOFBins(Math.floor((maxTOF - minTOF)/stepTOF));
	setCurrentMinTOF(minTOF);
	setCurrentMaxTOF(maxTOF);
  }, [minTOF, maxTOF, stepTOF]);

  const reset = () => {
	setLog("");
	setStatus(Status.Default);
	setMinTOF(0);
	setMaxTOF(0);
	setCurrentMinTOF(0);
	setCurrentMaxTOF(0);
	setStepTOF(0);
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
	setNumTOFBins(0);
	setAlgorithm("dispersion_extended")
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
			console.warn("Tried to update", key, "but not found in FindSpotsContext");
		}
	});
  }

  return (
    <FindSpotsContext.Provider
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
        minTOF,
        setMinTOF,
        maxTOF,
        setMaxTOF,
        currentMinTOF,
        setCurrentMinTOF,
        currentMaxTOF,
        setCurrentMaxTOF,
        stepTOF,
        setStepTOF,
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
        numTOFBins,
        setNumTOFBins,
        algorithm,
        setAlgorithm,
      }}
    >
      {children}
    </FindSpotsContext.Provider>
  );
};

export const useFindSpotsContext = () => {
  const context = useContext(FindSpotsContext);
  if (!context) {
    throw new Error("useFindSpotsContext must be used within a FindSpotsProvider");
  }
  return context;
};
