
import { ReactNode, createContext, useState, useContext } from 'react';
import { Status, DefaultViewerContextType } from '../types'

export interface IntegrationProfilerContextType extends DefaultViewerContextType {
  tOF: number[];
  rawIntensity : number[];
  intensity: number[];
  background: number[];
  lineProfile1D: number[];
  lineProfile3D: number[];
  profile1DIBIXValue: number;
  profile1DIBIXSigma: number;
  profile1DICValue: number;
  profile1DICSigma: number;
  profile3DGutmannValue: number;
  profile3DGutmannSigma: number;
  profile3DICValue: number;
  profile3DICSigma: number;
  summationValue: number;
  summationSigma: number;
  partiality: number;
  title: string;
  shoebox2D: number[][];
  shoeboxMaskEllipse2D: number[][];
  shoeboxMaskSeedSkewness2D: number[][];
  shoeboxMaskProfile1D2D: number[][];
  shoeboxMaskProfile3D2D: number[][];
  optimizeProfile: boolean;
  setOptimizeProfile: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IntegrationProfilerProps {
  children: React.ReactNode;
  setUserMessage : React.Dispatch<React.SetStateAction<string>>
}

const IntegrationProfilerContext = createContext<IntegrationProfilerContextType | undefined>(undefined);

export const IntegrationProfilerProvider: React.FC<IntegrationProfilerProps> = (
  { children, setUserMessage }: {
     children: ReactNode, 
     setUserMessage: React.Dispatch<React.SetStateAction<string>>}) => {

  const [enabled, setEnabled] = useState<boolean>(false);
  const [status, setStatus] = useState<Status>(Status.Default);
  const [progress, setProgress] = useState<number>(0);
  const [hidden, setHidden] = useState<boolean>(false);
  const [tOF, setTOF] = useState<number[]>([-1]);
  const [rawIntensity, setRawIntensity] = useState<number[]>([-1]);
  const [intensity, setIntensity] = useState<number[]>([-1]);
  const [background, setBackground] = useState<number[]>([-1]);
  const [lineProfile1D, setLineProfile1D] = useState<number[]>([-1]);
  const [lineProfile3DGutmann, setLineProfile3DGutmann] = useState<number[]>([-1]);
  const [lineProfile3DIC, setLineProfile3DIC] = useState<number[]>([-1]);
  const [profile1DIBIXValue, setProfile1DIBIXValue] = useState<number>(0);
  const [profile1DIBIXSigma, setProfile1DIBIXSigma] = useState<number>(0);
  const [profile1DICValue, setProfile1DICValue] = useState<number>(0);
  const [profile1DICSigma, setProfile1DICSigma] = useState<number>(0);
  const [profile3DGutmannValue, setProfile3DGutmannValue] = useState<number>(0);
  const [profile3DGutmannSigma, setProfile3DGutmannSigma] = useState<number>(0);
  const [profile3DICValue, setProfile3DICValue] = useState<number>(0);
  const [profile3DICSigma, setProfile3DICSigma] = useState<number>(0);
  const [summationValue, setSummationValue] = useState<number>(0);
  const [summationSigma, setSummationSigma] = useState<number>(0);
  const [partiality, setPartiality] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [shoebox2D, setShoebox2D] = useState<number[][]>([]);
  const [shoeboxMaskEllipse2D, setShoeboxMaskEllipse2D] = useState<number[][]>([]);
  const [shoeboxMaskSeedSkewness2D, setShoeboxMaskSeedSkewness2D] = useState<number[][]>([]);
  const [shoeboxMaskProfile1D2D, setShoeboxMaskProfile1D2D] = useState<number[][]>([]);
  const [shoeboxMaskProfile3D2D, setShoeboxMaskProfile3D2D] = useState<number[][]>([]);
  const [optimizeProfile, setOptimizeProfile] = useState<boolean>(true);

  const updateStatus = (status: string) => {
	const s = status as Status;
	setStatus(s);
  };

  const displayError = (msg: string) => {
    setUserMessage(msg);
  }

  const actionMap: Record<string, any> = {
  "log" : displayError,
	"status" : updateStatus,
	"hidden": setHidden,
	"enabled": setEnabled,
	"tOF": setTOF,
	"intensity": setIntensity,
	"rawIntensity": setRawIntensity,
	"background": setBackground,
	"lineProfile1D": setLineProfile1D,
	"lineProfile3DGutmann": setLineProfile3DGutmann,
	"lineProfile3DIC": setLineProfile3DIC,
	"profile1DIBIXValue" : setProfile1DIBIXValue,
	"profile1DIBIXSigma" : setProfile1DIBIXSigma,
	"profile1DICValue" : setProfile1DICValue,
	"profile1DICSigma" : setProfile1DICSigma,
	"profile3DGutmannValue" : setProfile3DGutmannValue,
	"profile3DGutmannSigma" : setProfile3DGutmannSigma,
	"profile3DICValue" : setProfile3DICValue,
	"profile3DICSigma" : setProfile3DICSigma,
	"summationValue" : setSummationValue,
	"summationSigma" : setSummationSigma,
	"partiality" : setPartiality,
	"title": setTitle,
	"shoebox2D" : setShoebox2D,
	"shoeboxMaskEllipse2D" : setShoeboxMaskEllipse2D,
	"shoeboxMaskSeedSkewness2D" : setShoeboxMaskSeedSkewness2D,
  "shoeboxMaskProfile1D2D" : setShoeboxMaskProfile1D2D,
  "shoeboxMaskProfile3D2D" : setShoeboxMaskProfile3D2D,
  "optimizeProfile" : setOptimizeProfile,
  "progress" : setProgress,
  }

  const reset = () => {
	setStatus(Status.Default);
	setEnabled(false);
	setHidden(false);
  setTOF([-1]);
  setIntensity([-1]);
  setBackground([-1]);
  setLineProfile1D([-1]);
  setLineProfile3DGutmann([-1]);
  setLineProfile3DIC([-1]);
  setProfile1DIBIXValue(0);
  setProfile1DIBIXSigma(0);
  setProfile1DICValue(0);
  setProfile1DICSigma(0);
  setProfile3DGutmannValue(0);
  setProfile3DGutmannSigma(0);
  setProfile3DICValue(0);
  setProfile3DICSigma(0);
  setSummationValue(0);
  setSummationSigma(0);
  setPartiality(0);
  setShoebox2D([]);
  setShoeboxMaskEllipse2D([]);
  setShoeboxMaskSeedSkewness2D([]);
  setShoeboxMaskProfile1D2D([]);
  setShoeboxMaskProfile3D2D([]);
  setOptimizeProfile(true);
  setProgress(0);
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
		progress,
		setStatus,
		setProgress,
    updateStatus,
		updateParams,
		updateEnabled,
		reset,
		hidden,
		setHidden,
		tOF,
		intensity,
    rawIntensity,
		background,
		lineProfile1D,
		lineProfile3DGutmann,
		lineProfile3DIC,
		profile1DIBIXValue,
		profile1DIBIXSigma,
		profile1DICValue,
		profile1DICSigma,
		profile3DGutmannValue,
		profile3DGutmannSigma,
		profile3DICValue,
		profile3DICSigma,
		summationValue,
		summationSigma,
		partiality,
		title,
		shoebox2D,
		shoeboxMaskEllipse2D,
		shoeboxMaskSeedSkewness2D,
    shoeboxMaskProfile1D2D,
    shoeboxMaskProfile3D2D,
    optimizeProfile,
    setOptimizeProfile
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
