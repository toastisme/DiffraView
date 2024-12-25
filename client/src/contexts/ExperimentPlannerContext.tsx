import React, { ReactNode, createContext, useState, useContext } from 'react';
import { Status, DefaultViewerContextType } from '../types'

export interface ExperimentPlannerContextType extends DefaultViewerContextType {
  orientations: number[]
  numStoredOrientations: number
  setNumStoredOrientations: React.Dispatch<React.SetStateAction<number>>
  predReflections: number[]
  setOrientations: React.Dispatch<React.SetStateAction<number[]>>
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
  const [numStoredOrientations, setNumStoredOrientations] = useState<number>(0);
  const [predReflections, setPredReflections] = useState<number[]>([]);
  const [dmin, setDmin] = useState<number>(0.75);

  const updateStatus = (status: string) => {
	const s = status as Status;
	setStatus(s);
  };

  const actionMap: Record<string, any> = {
	"status" : updateStatus,
	"hidden": setHidden,
	"enabled": setEnabled,
  }

  const reset = () => {
	setStatus(Status.Default);
	setEnabled(false);
	setHidden(false);
	setOrientations([]);
	setNumStoredOrientations(0);
	setPredReflections([]);
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