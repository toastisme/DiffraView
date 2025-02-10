
import { ReactNode, createContext, useState, useContext } from 'react';
import { Status, DefaultViewerContextType } from '../types'

export interface IntegrationProfilerContextType extends DefaultViewerContextType {
  tOF: number[],
  intensity: number[],
  background: number[],
  lineProfile1D: number[],
  lineProfile3D: number[],
  profile1DValue: number,
  profile1DSigma: number,
  profile3DValue: number,
  profile3DSigma: number,
  seedSkewnessValue: number,
  seedSkewnessSigma: number,
  summationValue: number,
  summationSigma: number,
  title: string,
  shoebox2D: number[][],
  shoeboxMaskEllipse2D: number[][],
  shoeboxMaskSeedSkewness2D: number[][],
  shoeboxMaskProfile1D2D: number[][],
}

const IntegrationProfilerContext = createContext<IntegrationProfilerContextType | undefined>(undefined);

export const IntegrationProfilerProvider = ({ children }: { children: ReactNode }) => {

  const [enabled, setEnabled] = useState<boolean>(false);
  const [status, setStatus] = useState<Status>(Status.Default);
  const [hidden, setHidden] = useState<boolean>(false);
  const [tOF, setTOF] = useState<number[]>([-1]);
  const [intensity, setIntensity] = useState<number[]>([-1]);
  const [background, setBackground] = useState<number[]>([-1]);
  const [lineProfile1D, setLineProfile1D] = useState<number[]>([-1]);
  const [lineProfile3D, setLineProfile3D] = useState<number[]>([-1]);
  const [profile1DValue, setProfile1DValue] = useState<number>(0);
  const [profile1DSigma, setProfile1DSigma] = useState<number>(0);
  const [profile3DValue, setProfile3DValue] = useState<number>(0);
  const [profile3DSigma, setProfile3DSigma] = useState<number>(0);
  const [seedSkewnessValue, setSeedSkewnessValue] = useState<number>(0);
  const [seedSkewnessSigma, setSeedSkewnessSigma] = useState<number>(0);
  const [summationValue, setSummationValue] = useState<number>(0);
  const [summationSigma, setSummationSigma] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [shoebox2D, setShoebox2D] = useState<number[][]>([]);
  const [shoeboxMaskEllipse2D, setShoeboxMaskEllipse2D] = useState<number[][]>([]);
  const [shoeboxMaskSeedSkewness2D, setShoeboxMaskSeedSkewness2D] = useState<number[][]>([]);
  const [shoeboxMaskProfile1D2D, setShoeboxMaskProfile1D2D] = useState<number[][]>([]);

  const updateStatus = (status: string) => {
	const s = status as Status;
	setStatus(s);
  };

  const actionMap: Record<string, any> = {
	"status" : updateStatus,
	"hidden": setHidden,
	"enabled": setEnabled,
	"tOF": setTOF,
	"intensity": setIntensity,
	"background": setBackground,
	"lineProfile1D": setLineProfile1D,
	"lineProfile3D": setLineProfile3D,
	"profile1DValue" : setProfile1DValue,
	"profile1DSigma" : setProfile1DSigma,
	"profile3DValue" : setProfile3DValue,
	"profile3DSigma" : setProfile3DSigma,
  "seedSkewnessValue" : setSeedSkewnessValue,
  "seedSkewnessSigma" : setSeedSkewnessSigma,
	"summationValue" : setSummationValue,
	"summationSigma" : setSummationSigma,
	"title": setTitle,
	"shoebox2D" : setShoebox2D,
	"shoeboxMaskEllipse2D" : setShoeboxMaskEllipse2D,
	"shoeboxMaskSeedSkewness2D" : setShoeboxMaskSeedSkewness2D,
  "shoeboxMaskProfile1D2D" : setShoeboxMaskProfile1D2D
  }

  const reset = () => {
	setStatus(Status.Default);
	setEnabled(false);
	setHidden(false);
  setTOF([-1]);
  setIntensity([-1]);
  setBackground([-1]);
  setLineProfile1D([-1]);
  setLineProfile3D([-1]);
  setProfile1DValue(0);
  setProfile1DSigma(0);
  setProfile3DValue(0);
  setProfile3DSigma(0);
  setSeedSkewnessValue(0);
  setSeedSkewnessSigma(0);
  setSummationValue(0);
  setSummationSigma(0);
  setShoebox2D([]);
  setShoeboxMaskEllipse2D([]);
  setShoeboxMaskSeedSkewness2D([]);
  setShoeboxMaskProfile1D2D([]);
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
		lineProfile1D,
		lineProfile3D,
		profile1DValue,
		profile1DSigma,
		profile3DValue,
		profile3DSigma,
    seedSkewnessValue,
    seedSkewnessSigma,
		summationValue,
		summationSigma,
		title,
		shoebox2D,
		shoeboxMaskEllipse2D,
		shoeboxMaskSeedSkewness2D,
    shoeboxMaskProfile1D2D
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