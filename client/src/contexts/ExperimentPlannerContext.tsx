import React, { ReactNode, createContext, useEffect, useRef, useState, useContext } from 'react';
import { Status, DefaultViewerContextType } from '../types'

export interface ScanResult {
  data: [number, number][];
  colorIndex: number;
}

export interface ExperimentPlannerContextType extends DefaultViewerContextType {
  orientations: number[]
  numStoredOrientations: number
  setNumStoredOrientations: React.Dispatch<React.SetStateAction<number>>
  predReflections: number[]
  setOrientations: React.Dispatch<React.SetStateAction<number[]>>
  completeness: number[]
  setCompleteness: React.Dispatch<React.SetStateAction<number[]>>
  setPredReflections: React.Dispatch<React.SetStateAction<number[]>>
  dmin: Number
  setDmin: React.Dispatch<React.SetStateAction<number>>
  scanResults: ScanResult[]
}

const ExperimentPlannerContext = createContext<ExperimentPlannerContextType | undefined>(undefined);

export const ExperimentPlannerProvider = ({ children }: { children: ReactNode }) => {

  const [enabled, setEnabled] = useState<boolean>(false);
  const [status, setStatus] = useState<Status>(Status.Default);
  const [progress, setProgress] = useState<number>(0);
  const [hidden, setHidden] = useState<boolean>(false);
  const [orientations, setOrientations] = useState<number[]>([]);
  const [completeness, setCompleteness] = useState<number[]>([]);
  const [numStoredOrientations, setNumStoredOrientations] = useState<number>(0);
  const [predReflections, setPredReflections] = useState<number[]>([]);
  const [dmin, setDmin] = useState<number>(0.75);
  const [scanResults, setScanResults] = useState<ScanResult[]>([]);
  const numExperimentsRef = useRef<number | null>(null);
  const numStoredOrientationsRef = useRef<number | null>(null);
  const orientationsRef = useRef<number[]>([]);

  const updateStatus = (status: string) => {
	const s = status as Status;
	setStatus(s);
  };

  useEffect(()=>{
	numStoredOrientationsRef.current = numStoredOrientations;
  }, [numStoredOrientations])

  useEffect(()=>{
    orientationsRef.current = orientations;
  }, [orientations])

  const addEntry = (newData: [number, number, number]) => {
	const newOrientation = newData[0];
	const newPredReflections = newData[1];
	const newCompleteness = newData[2];
	setOrientations(prev => [...prev, newOrientation]);
	setPredReflections(prev => [...prev, newPredReflections]);
	setCompleteness(prev => [...prev, newCompleteness]);
	setNumStoredOrientations(prevNumStored => prevNumStored + 1);
  }

  const updateEntry = (newData : [number, number]) => {
    if (numExperimentsRef.current === null || numExperimentsRef.current === undefined){
      return;
    }
	const updatedOrientation = newData[0];
	const updatedPredReflections = newData[1];

    setOrientations((prevOrientations) => {
      const previousOrientationsStored = numStoredOrientationsRef.current === prevOrientations.length;

      // If previous orientations have been stored, add the new orientation
      if (previousOrientationsStored) {
        return [...prevOrientations, updatedOrientation];
      }
      else{
        // Otherwise, update the last element
        const newOrientations = [...prevOrientations];
        newOrientations[newOrientations.length - 1] = updatedOrientation;
        return newOrientations;
      }
    });

    setPredReflections((prevPredReflections) => {
      const previousOrientationsStored = numStoredOrientationsRef.current === prevPredReflections.length;
      // If previous orientations have been stored, add the new orientation
      if (previousOrientationsStored) {
        return [...prevPredReflections, updatedPredReflections];
      }
      else{
        // Otherwise, update the last element
        const newPredReflections = [...prevPredReflections];
        newPredReflections[newPredReflections.length - 1] = updatedPredReflections;
        return newPredReflections;
      }
    });

  }

  const updateNumExperiments = (val: number) => {
	numExperimentsRef.current = val;
  }

  // addScanResult is called BEFORE updateEntry (server send order), so
  // orientationsRef.current.length is still the pre-update count.
  // colorIndex = orientations.length if all entries stored (new entry will be appended)
  //            = orientations.length - 1 if there's an unsaved entry (last entry will be updated)
  const addScanResult = (data: [number, number][]) => {
    const currentLen = orientationsRef.current.length;
    const numStored = numStoredOrientationsRef.current ?? 0;
    const colorIndex = numStored === currentLen ? currentLen : currentLen - 1;
    setScanResults(prev => {
      const existingIdx = prev.findIndex(r => r.colorIndex === colorIndex);
      if (existingIdx >= 0) {
        const updated = [...prev];
        updated[existingIdx] = { data, colorIndex };
        return updated;
      }
      return [...prev, { data, colorIndex }];
    });
  };

  const clearUserData = (val: boolean) => {
    setOrientations([]);
    setCompleteness([]);
    setNumStoredOrientations(0);
    setPredReflections([]);
    setScanResults([]);
  }

  const actionMap: Record<string, any> = {
	"status" : updateStatus,
	"hidden": setHidden,
	"enabled": setEnabled,
	"orientations" : setOrientations,
  "completeness" : setCompleteness,
	"predReflections" : setPredReflections,
	"numStoredOrientations" : setNumStoredOrientations,
	"addEntry" : addEntry,
	"updateEntry" : updateEntry,
	"numExperiments" : updateNumExperiments,
  "clearUserData": clearUserData,
  "progress": setProgress,
  "addScanResult": addScanResult,
  }


  const reset = () => {
  clearUserData(true);
	setStatus(Status.Default);
	setEnabled(false);
	setHidden(false);
	setDmin(0.75);
	setProgress(0);
  }


  const updateParams = (params: Record<string, any>) => {

	Object.entries(params).forEach(([key, value]) => {
		if (actionMap.hasOwnProperty(key)){
			actionMap[key](value);
		}
		else{
			console.warn("Tried to update", key, "but not found in ExperimentPlannerContext");
		}
	});
  }

  const updateEnabled = (enabled: boolean) => {
	setEnabled(enabled);
  };

  return (
    <ExperimentPlannerContext.Provider
      value={{
		status,
		enabled,
		hidden,
		setHidden,
		progress,
		setStatus,
		setProgress,
    updateStatus,
		updateParams,
		updateEnabled,
		reset,
		orientations,
		numStoredOrientations,
		setNumStoredOrientations,
		predReflections,
		setOrientations,
    completeness,
    setCompleteness,
		setPredReflections,
		dmin,
		setDmin,
		scanResults,
      }}
    >
      {children}
    </ExperimentPlannerContext.Provider>
  );

};

export const useExperimentPlannerContext = () => {
  const context = useContext(ExperimentPlannerContext);
  if (!context) {
    throw new Error('useExperimentPlannerContext must be used within an ExperimentPlannerProvider');
  }
  return context;
};
