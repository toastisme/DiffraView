
import React, { ReactNode, createContext, useState, useContext } from 'react';
import { Status, DefaultViewerContextType } from '../types'

export interface IntegrationProfilerContextType extends DefaultViewerContextType {
  tOF: number[],
  intensity: number[],
  background: number[],
  lineProfile: number[],
  lineProfileValue: number,
  lineProfileSigma: number,
  summationValue: number,
  summationSigma: number,
  title: string,
  shoebox2D: number[][],
  shoeboxMask2D: number[][]
}

const IntegrationProfilerContext = createContext<IntegrationProfilerContextType | undefined>(undefined);

export const IntegrationProfilerProvider = ({ children }: { children: ReactNode }) => {

  const [enabled, setEnabled] = useState<boolean>(false);
  const [status, setStatus] = useState<Status>(Status.Default);
  const [hidden, setHidden] = useState<boolean>(false);
  const [tOF, setTOF] = useState<number[]>([-1]);
  const [intensity, setIntensity] = useState<number[]>([-1]);
  const [background, setBackground] = useState<number[]>([-1]);
  const [lineProfile, setLineProfile] = useState<number[]>([-1]);
  const [lineProfileValue, setLineProfileValue] = useState<number>(0);
  const [lineProfileSigma, setLineProfileSigma] = useState<number>(0);
  const [summationValue, setSummationValue] = useState<number>(0);
  const [summationSigma, setSummationSigma] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [shoebox2D, setShoebox2D] = useState<number[][]>([]);
  const [shoeboxMask2D, setShoeboxMask2D] = useState<number[][]>([]);

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
  }

  const updateParams = (params: Record<string, any>) => {

	Object.entries(params).forEach(([key, value]) => {
		if (actionMap.hasOwnProperty(key)){
			actionMap[key](value);
		}
		else{
			console.warn("Tried to update", key, "but not found in IntegrationProfilerContext");
		}
	});
  }

  const updateEnabled = (enabled: boolean) => {
	setEnabled(enabled);
  };

  return (
    <IntegrationProfilerContext.Provider
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
		tOF,
		intensity,
		background,
		lineProfile,
		lineProfileValue,
		lineProfileSigma,
		summationValue,
		summationSigma,
		title,
		shoebox2D,
		shoeboxMask2D
      }}
    >
      {children}
    </IntegrationProfilerContext.Provider>
  );

};

export const useIntegrationProfilerContext = () => {
  const context = useContext(IntegrationProfilerContext);
  if (!context) {
    throw new Error('useIntegrationProfilerContext must be used within an IntegrationProfilerProvider');
  }
  return context;
};