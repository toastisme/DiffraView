import { ReactNode, createContext, useState, useContext } from 'react';
import { Status, DefaultViewerContextType, LineplotData, LineplotBboxData, LineplotCentroidData } from '../types'

export interface ExperimentViewerContextType extends DefaultViewerContextType {
  lineplotData: LineplotData[];
  lineplotBboxData: LineplotBboxData[];
  lineplotCentroidData: LineplotCentroidData[];
  lineplotTitle: string;
  newReflectionXYStored: boolean;
}

const ExperimentViewerContext = createContext<ExperimentViewerContextType | undefined>(undefined);

export const ExperimentViewerProvider = ({ children }: { children: ReactNode }) => {

  const [enabled, setEnabled] = useState<boolean>(true);
  const [status, setStatus] = useState<Status>(Status.Default);
  const [hidden, setHidden] = useState<boolean>(false);

  const initialLineplotData: LineplotData[] = [{ x: -1, y: 0 }];
  const [lineplotData, setLineplotData] = useState<LineplotData[]>(initialLineplotData);

  const initialLineplotBboxData: LineplotBboxData[] = [];
  const [lineplotBboxData, setLineplotBboxData] = useState<LineplotBboxData[]>(initialLineplotBboxData);

  const initialLineplotCentroidData: LineplotCentroidData[] = [];
  const [lineplotCentroidData, setLineplotCentroidData] = useState<LineplotCentroidData[]>(initialLineplotCentroidData);

  const [lineplotTitle, setLineplotTitle] = useState<string>("");
  const [newReflectionXYStored, setNewReflectionXYStored] = useState<boolean>(false);

  const updateLineplot = (msg: any) => {
		const lineplotData: LineplotData[] = [];
		for (let i = 0; i < msg["x"].length; i++) {
		lineplotData.push(
			{
			x: msg["x"][i],
			y: msg["y"][i]
			}
		)
		}
		setLineplotData(lineplotData);
  }

  const updateStatus = (status: string) => {
	const s = status as Status;
	setStatus(s);
  };

  const actionMap: Record<string, any> = {
	"status" : updateStatus,
	"hidden" : setHidden,
	"lineplot" : updateLineplot,
	"bboxPos" : setLineplotBboxData,
	"centroidPos": setLineplotCentroidData,
	"title" : setLineplotTitle,
  }

  const reset = () => {
	setStatus(Status.Default);
	setHidden(false);
	setLineplotData(initialLineplotData);
	setLineplotCentroidData(initialLineplotCentroidData);
	setLineplotBboxData(initialLineplotBboxData);
	setLineplotTitle("");
	setNewReflectionXYStored(false);
  }

  const updateParams = (params: Record<string, any>) => {

	Object.entries(params).forEach(([key, value]) => {
		if (actionMap.hasOwnProperty(key)){
			actionMap[key](value);
		}
		else{
			console.warn("Tried to update", key, "but not found in ExperimentViewerContext");
		}
	});
  }

  const updateEnabled = (enabled: boolean) => {
	setEnabled(enabled);
  };

  return (
    <ExperimentViewerContext.Provider
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
		lineplotData,
		lineplotBboxData,
		lineplotCentroidData,
		lineplotTitle,
		newReflectionXYStored
      }}
    >
      {children}
    </ExperimentViewerContext.Provider>
  );

};

export const useExperimentViewerContext = () => {
  const context = useContext(ExperimentViewerContext);
  if (!context) {
    throw new Error('useExperimentViewerContext must be used within an ExperimentViewerProvider');
  }
  return context;
};