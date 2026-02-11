import React, { ReactNode, createContext, useEffect, useRef, useState, useContext } from 'react';
import { Status, DefaultViewerContextType } from '../types'

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
}

const ExperimentPlannerContext = createContext<ExperimentPlannerContextType | undefined>(undefined);

export const ExperimentPlannerProvider = ({ children }: { children: ReactNode }) => {

  const [enabled, setEnabled] = useState<boolean>(false);
  const [status, setStatus] = useState<Status>(Status.Default);
  const [hidden, setHidden] = useState<boolean>(false);
  const [orientations, setOrientations] = useState<number[]>([]);
  const [completeness, setCompleteness] = useState<number[]>([]);
  const [numStoredOrientations, setNumStoredOrientations] = useState<number>(0);
  const [predReflections, setPredReflections] = useState<number[]>([]);
  const [dmin, setDmin] = useState<number>(0.75);
  const numExperimentsRef = useRef<number | null>(null);
  const numStoredOrientationsRef = useRef<number | null>(null);

  const updateStatus = (status: string) => {
	const s = status as Status;
	setStatus(s);
  };

  useEffect(()=>{
	numStoredOrientationsRef.current = numStoredOrientations;
  }, [numStoredOrientations])

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

  const clearUserData = (val: boolean) => {
    setOrientations([]);
    setCompleteness([]);
    setNumStoredOrientations(0);
    setPredReflections([]);
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
  "clearUserData": clearUserData
  }


  const reset = () => {
  clearUserData(true);
	setStatus(Status.Default);
	setEnabled(false);
	setHidden(false);
	setDmin(0.75);
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
		setStatus,
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
		setDmin
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