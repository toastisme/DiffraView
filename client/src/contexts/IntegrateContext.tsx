
import React, { ReactNode, createContext, useState, useContext, useEffect } from 'react';
import { Status, DefaultAlgorithmContextType } from '../types'

export interface IntegrateContextType extends DefaultAlgorithmContextType {
  exportEnabled: boolean,
  emptyRun: string,
  setEmptyRun: React.Dispatch<React.SetStateAction<string>>,
  vanadiumRun: string,
  setVanadiumRun: React.Dispatch<React.SetStateAction<string>>,
  sampleDensity: string,
  setSampleDensity: React.Dispatch<React.SetStateAction<string>>,
  sampleRadius: string,
  setSampleRadius: React.Dispatch<React.SetStateAction<string>>,
  sampleAbsorptionXSection: string,
  setSampleAbsorptionXSection: React.Dispatch<React.SetStateAction<string>>,
  sampleScatteringXSection: string,
  setSampleScatteringXSection: React.Dispatch<React.SetStateAction<string>>,
  vanadiumDensity: string,
  setVanadiumDensity: React.Dispatch<React.SetStateAction<string>>,
  vanadiumRadius: string,
  setVanadiumRadius: React.Dispatch<React.SetStateAction<string>>,
  vanadiumAbsorptionXSection: string,
  setVanadiumAbsorptionXSection: React.Dispatch<React.SetStateAction<string>>,
  vanadiumScatteringXSection: string,
  setVanadiumScatteringXSection: React.Dispatch<React.SetStateAction<string>>,
  applyLorentz: boolean,
  setApplyLorentz : React.Dispatch<React.SetStateAction<boolean>>,
  applyIncidentSpectrum: boolean,
  setApplyIncidentSpectrum: React.Dispatch<React.SetStateAction<boolean>>,
  applySphericalAbsorption: boolean,
  setApplySphericalAbsorption: React.Dispatch<React.SetStateAction<boolean>>,
  tOFBBoxPadding: string,
  setTOFBBoxPadding: React.Dispatch<React.SetStateAction<string>>,
  xYBBoxPadding: string,
  setXYBBoxPadding: React.Dispatch<React.SetStateAction<string>>,
  profile1DIBIXAlpha: string;
  setProfile1DIBIXAlpha: React.Dispatch<React.SetStateAction<string>>;
  profile1DIBIXBeta: string
  setProfile1DIBIXBeta: React.Dispatch<React.SetStateAction<string>>;
  profile1DIBIXA: string
  setProfile1DIBIXA: React.Dispatch<React.SetStateAction<string>>;
  profile1DIBIXNRestarts: string
  setProfile1DIBIXNRestarts: React.Dispatch<React.SetStateAction<string>>;
  profile1DICA: string;
  setProfile1DICA: React.Dispatch<React.SetStateAction<string>>;
  profile1DICB: string
  setProfile1DICB: React.Dispatch<React.SetStateAction<string>>;
  profile1DICR: string
  setProfile1DICR: React.Dispatch<React.SetStateAction<string>>;
  profile1DICNRestarts: string
  setProfile1DICNRestarts: React.Dispatch<React.SetStateAction<string>>;
  profile3DGutmannAlpha: string;
  setProfile3DGutmannAlpha: React.Dispatch<React.SetStateAction<string>>;
  profile3DGutmannBeta: string
  setProfile3DGutmannBeta: React.Dispatch<React.SetStateAction<string>>;
  profile3DGutmannNRestarts: string
  setProfile3DGutmannNRestarts: React.Dispatch<React.SetStateAction<string>>;
  profile3DICNRestarts: string
  setProfile3DICNRestarts: React.Dispatch<React.SetStateAction<string>>;
  profile3DICInitA: string
  setProfile3DICInitA: React.Dispatch<React.SetStateAction<string>>;
  profile3DICInitB: string
  setProfile3DICInitB: React.Dispatch<React.SetStateAction<string>>;
  profile3DIBIXAlpha: string;
  setProfile3DIBIXAlpha: React.Dispatch<React.SetStateAction<string>>;
  profile3DIBIXBeta: string
  setProfile3DIBIXBeta: React.Dispatch<React.SetStateAction<string>>;
  profile3DIBIXNRestarts: string
  setProfile3DIBIXNRestarts: React.Dispatch<React.SetStateAction<string>>;
  minPartiality: string,
  setMinPartiality: React.Dispatch<React.SetStateAction<string>>,
  minISigma: string,
  setMinISigma: React.Dispatch<React.SetStateAction<string>>,
  calculateLineProfile: boolean,
  setCalculateLineProfile : React.Dispatch<React.SetStateAction<boolean>>,
  dmin: string,
  setDmin: React.Dispatch<React.SetStateAction<string>>,
  integrateType : string,
  setIntegrateType: React.Dispatch<React.SetStateAction<string>>,
  integrateMethod : string,
  setIntegrateMethod: React.Dispatch<React.SetStateAction<string>>,
  backgroundModel : string,
  setBackgroundModel: React.Dispatch<React.SetStateAction<string>>,
  maskModel: string,
  setMaskModel: React.Dispatch<React.SetStateAction<string>>,
  ellipseMaskScale: string,
  setEllipseMaskScale: React.Dispatch<React.SetStateAction<string>>,
  advancedOptions: string,
  setAdvancedOptions: React.Dispatch<React.SetStateAction<string>>,
  intensityExportType: string,
  setIntensityExportType: React.Dispatch<React.SetStateAction<string>>,
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
  minWavelength: number;
  setMinWavelength: React.Dispatch<React.SetStateAction<number>>;
  maxWavelength: number;
  setMaxWavelength: React.Dispatch<React.SetStateAction<number>>;
  currentMinWavelength: number;
  setCurrentMinWavelength: React.Dispatch<React.SetStateAction<number>>;
  currentMaxWavelength: number;
  setCurrentMaxWavelength: React.Dispatch<React.SetStateAction<number>>;
  displayUnit: "tof" | "wavelength";
  setDisplayUnit: React.Dispatch<React.SetStateAction<"tof" | "wavelength">>;

}

const IntegrateContext = createContext<IntegrateContextType | undefined>(undefined);

export const IntegrateProvider = ({ children }: { children: ReactNode }) => {

  const [enabled, setEnabled] = useState<boolean>(false);
  const [log, setLog] = useState<string>('');
  const [status, setStatus] = useState<Status>(Status.Default);
  const [progress, setProgress] = useState<number>(0);
  const [exportEnabled, setExportEnabled] = useState<boolean>(false);
  const [vanadiumRun, setVanadiumRun] = useState<string>("None");
  const [emptyRun, setEmptyRun] = useState<string>("None");
  const [sampleDensity, setSampleDensity] = useState<string>("");
  const [sampleRadius, setSampleRadius] = useState<string>("");
  const [sampleScatteringXSection, setSampleScatteringXSection] = useState<string>("");
  const [sampleAbsorptionXSection, setSampleAbsorptionXSection] = useState<string>("");
  const [vanadiumDensity, setVanadiumDensity] = useState<string>("0.0722");
  const [vanadiumRadius, setVanadiumRadius] = useState<string>("0.03");
  const [vanadiumScatteringXSection, setVanadiumScatteringXSection] = useState<string>("5.158");
  const [vanadiumAbsorptionXSection, setVanadiumAbsorptionXSection] = useState<string>("4.4883");
  const [applyLorentz, setApplyLorentz] = useState<boolean>(false);
  const [applyIncidentSpectrum, setApplyIncidentSpectrum] = useState<boolean>(false);
  const [applySphericalAbsorption, setApplySphericalAbsorption] = useState<boolean>(false);
  const [tOFBBoxPadding, setTOFBBoxPadding] = useState<string>("2");
  const [xYBBoxPadding, setXYBBoxPadding] = useState<string>("1");
  const [profile1DIBIXAlpha, setProfile1DIBIXAlpha] = useState<string>("0.03");
  const [profile1DIBIXBeta, setProfile1DIBIXBeta] = useState<string>("0.03");
  const [profile1DIBIXA, setProfile1DIBIXA] = useState<string>("0.1");
  const [profile1DIBIXNRestarts, setProfile1DIBIXNRestarts] = useState<string>("100");
  const [profile1DICA, setProfile1DICA] = useState<string>("1.0");
  const [profile1DICB, setProfile1DICB] = useState<string>("0.05");
  const [profile1DICR, setProfile1DICR] = useState<string>("0.5");
  const [profile1DICNRestarts, setProfile1DICNRestarts] = useState<string>("100");
  const [profile3DGutmannAlpha, setProfile3DGutmannAlpha] = useState<string>("1.0");
  const [profile3DGutmannBeta, setProfile3DGutmannBeta] = useState<string>("0.1");
  const [profile3DGutmannNRestarts, setProfile3DGutmannNRestarts] = useState<string>("100");
  const [profile3DICNRestarts, setProfile3DICNRestarts] = useState<string>("100");
  const [profile3DICInitA, setProfile3DICInitA] = useState<string>("1.0");
  const [profile3DICInitB, setProfile3DICInitB] = useState<string>("0.05");
  const [profile3DIBIXAlpha, setProfile3DIBIXAlpha] = useState<string>("0.03");
  const [profile3DIBIXBeta, setProfile3DIBIXBeta] = useState<string>("0.03");
  const [profile3DIBIXNRestarts, setProfile3DIBIXNRestarts] = useState<string>("100");
  const [minPartiality, setMinPartiality] = useState<string>("0");
  const [minISigma, setMinISigma] = useState<string>("0");
  const [calculateLineProfile, setCalculateLineProfile] = useState<boolean>(false);
  const [dmin, setDmin] = useState<string>("2");
  const [integrateType, setIntegrateType] = useState<string>("observed");
  const [integrateMethod, setIntegrateMethod] = useState<string>("summation");
  const [backgroundModel, setBackgroundModel] = useState<string>("linear3d");
  const [maskModel, setMaskModel] = useState<string>("ellipse");
  const [ellipseMaskScale, setEllipseMaskScale] = useState<string>("1.0");
  const [advancedOptions, setAdvancedOptions] = useState<string>("");
  const [intensityExportType, setIntensityExportType] = useState<string>("sum");
  const [minTOF, setMinTOF] = useState<number>(0);
  const [maxTOF, setMaxTOF] = useState<number>(0);
  const [currentMinTOF, setCurrentMinTOF] = useState<number>(0);
  const [currentMaxTOF, setCurrentMaxTOF] = useState<number>(0);
  const [stepTOF, setStepTOF] = useState<number>(0);
  const [minWavelength, setMinWavelength] = useState<number>(0);
  const [maxWavelength, setMaxWavelength] = useState<number>(0);
  const [currentMinWavelength, setCurrentMinWavelength] = useState<number>(0);
  const [currentMaxWavelength, setCurrentMaxWavelength] = useState<number>(0);
  const [displayUnit, setDisplayUnit] = useState<"tof" | "wavelength">("tof");

  const updateStatus = (status: string) => {
	const s = status as Status;
	setStatus(s);
  };

  const actionMap: Record<string, any> = {
	"enabled" : setEnabled,
	"log" : setLog,
	"status" : updateStatus,
	"exportEnabled" : setExportEnabled,
	"vanadiumRun" : setVanadiumRun,
	"emptyRun" : setEmptyRun,
  "tOFBBoxPadding" : setTOFBBoxPadding,
  "xYBBoxPadding" : setXYBBoxPadding,
  "profile1DIBIXAlpha" : setProfile1DIBIXAlpha,
  "profile1DIBIXBeta" : setProfile1DIBIXBeta,
  "profile1DIBIXA" : setProfile1DIBIXA,
  "profile1DIBIXNRestarts" : setProfile1DIBIXNRestarts,
  "profile1DICA" : setProfile1DICA,
  "profile1DICB" : setProfile1DICB,
  "profile1DICR" : setProfile1DICR,
  "profile1DICNRestarts" : setProfile1DICNRestarts,
  "profile3DGutmannAlpha" : setProfile3DGutmannAlpha,
  "profile3DGutmannBeta" : setProfile3DGutmannBeta,
  "profile3DGutmannNRestarts" : setProfile3DGutmannNRestarts,
  "profile3DICNRestarts" : setProfile3DICNRestarts,
  "profile3DICInitA" : setProfile3DICInitA,
  "profile3DICInitB" : setProfile3DICInitB,
  "profile3DIBIXAlpha" : setProfile3DIBIXAlpha,
  "profile3DIBIXBeta" : setProfile3DIBIXBeta,
  "profile3DIBIXNRestarts" : setProfile3DIBIXNRestarts,
  "backgroundModel" : setBackgroundModel,
  "maskModel" : setMaskModel,
  "ellipseMaskScale" : setEllipseMaskScale,
  "advancedOptions" : setAdvancedOptions,
  "applyLorentz" : setApplyLorentz,
  "applyIncidentSpectrum" : setApplyIncidentSpectrum,
  "applySphericalAbsorption" : setApplySphericalAbsorption,
  "integrateMethod" : setIntegrateMethod,
  "integrateType" : setIntegrateType,
  "dmin" : setDmin,
  "tOFBBoxPadding" : setTOFBBoxPadding,
  "xYBBoxPadding" : setXYBBoxPadding,
  "vanadiumRun" : setVanadiumRun,
  "emptyRun" : setEmptyRun,
  "vanadiumRadius" : setVanadiumRadius,
  "vanadiumDensity" : setVanadiumDensity,
  "vanadiumScatteringXSection" : setVanadiumScatteringXSection,
  "vanadiumAbsorptionXSection" : setVanadiumAbsorptionXSection,
  "sampleRadius" : setSampleRadius,
  "sampleDensity" : setSampleDensity,
  "sampleScatteringXSection" : setSampleScatteringXSection,
  "sampleAbsorptionXSection" : setSampleAbsorptionXSection,
  "progress" : setProgress,
  "intensityExportType": setIntensityExportType,
  "minTOF" : setMinTOF,
  "maxTOF" : setMaxTOF,
  "currentMinTOF" : setCurrentMinTOF,
  "currentMaxTOF" : setCurrentMaxTOF,
  "stepTOF" : setStepTOF,
  "minWavelength" : setMinWavelength,
  "maxWavelength" : setMaxWavelength,
  "currentMinWavelength" : setCurrentMinWavelength,
  "currentMaxWavelength" : setCurrentMaxWavelength,
  }

  useEffect(() => {
	setCurrentMinTOF(minTOF);
	setCurrentMaxTOF(maxTOF);
  }, [minTOF, maxTOF, stepTOF]);

  useEffect(() => {
	setCurrentMinWavelength(minWavelength);
	setCurrentMaxWavelength(maxWavelength);
  }, [minWavelength, maxWavelength]);

  const reset = () => {
	setLog("");
	setStatus(Status.Default);
	setExportEnabled(false);
	setVanadiumRun("None");
	setEmptyRun("None");
	setSampleDensity("");
	setSampleRadius("");
	setSampleScatteringXSection("");
	setSampleAbsorptionXSection("");
	setVanadiumDensity("0.0722");
	setVanadiumRadius("0.03");
	setVanadiumScatteringXSection("5.158")
	setVanadiumAbsorptionXSection("4.4883")
	setApplyLorentz(false);
	setApplyIncidentSpectrum(false);
	setApplySphericalAbsorption(false);
	setTOFBBoxPadding("2");
	setXYBBoxPadding("1");
  setProfile1DIBIXAlpha("0.03")
  setProfile1DIBIXBeta("0.03")
  setProfile1DIBIXA("1.0")
  setProfile1DIBIXNRestarts("100")
  setProfile1DICA("1.0")
  setProfile1DICB("0.05")
  setProfile1DICR("0.5")
  setProfile1DICNRestarts("100")
  setProfile3DGutmannAlpha("1.0")
  setProfile3DGutmannBeta("0.1")
  setProfile3DGutmannNRestarts("100")
  setProfile3DICNRestarts("100")
  setProfile3DICInitA("1.0")
  setProfile3DICInitB("0.05")
  setProfile3DIBIXAlpha("0.03")
  setProfile3DIBIXBeta("0.03")
  setProfile3DIBIXNRestarts("100")
	setMinPartiality("0");
	setMinISigma("0");
	setCalculateLineProfile(false);
	setDmin("2");
	setIntegrateType("observed");
  setEnabled(false);
  setBackgroundModel("linear3d");
  setMaskModel("ellipse");
  setEllipseMaskScale("1.0");
  setAdvancedOptions("");
  setProgress(0);
  setIntensityExportType("sum");
  setMinTOF(0);
  setMaxTOF(0);
  setCurrentMinTOF(0);
  setCurrentMaxTOF(0);
  setStepTOF(0);
  setMinWavelength(0);
  setMaxWavelength(0);
  setCurrentMinWavelength(0);
  setCurrentMaxWavelength(0);
  setDisplayUnit("tof");
  }

  const updateParams = (params: Record<string, any>) => {

	Object.entries(params).forEach(([key, value]) => {
		if (actionMap.hasOwnProperty(key)){
			actionMap[key](value);
		}
		else{
			console.warn("Tried to update", key, "but not found in IntegrateContext");
		}
	});
  }

  const updateEnabled = (enabled: boolean) => {
	setEnabled(enabled);
  };

  return (
    <IntegrateContext.Provider
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
		log,
		setLog,
		exportEnabled,
		emptyRun,
		setEmptyRun,
		vanadiumRun,
		setVanadiumRun,
		sampleDensity,
		setSampleDensity,
		sampleRadius,
		setSampleRadius,
		sampleAbsorptionXSection,
		setSampleAbsorptionXSection,
		sampleScatteringXSection,
		setSampleScatteringXSection,
		vanadiumDensity,
		setVanadiumDensity,
		vanadiumRadius,
		setVanadiumRadius,
		vanadiumAbsorptionXSection,
		setVanadiumAbsorptionXSection,
		vanadiumScatteringXSection,
		setVanadiumScatteringXSection,
		applyLorentz,
		setApplyLorentz,
		applyIncidentSpectrum,
		setApplyIncidentSpectrum,
		applySphericalAbsorption,
		setApplySphericalAbsorption,
		tOFBBoxPadding,
		setTOFBBoxPadding,
		xYBBoxPadding,
		setXYBBoxPadding,
    profile1DIBIXAlpha,
    setProfile1DIBIXAlpha,
    profile1DIBIXBeta,
    setProfile1DIBIXBeta,
    profile1DIBIXA,
    setProfile1DIBIXA,
    profile1DIBIXNRestarts,
    setProfile1DIBIXNRestarts,
    profile1DICA,
    setProfile1DICA,
    profile1DICB,
    setProfile1DICB,
    profile1DICR,
    setProfile1DICR,
    profile1DICNRestarts,
    setProfile1DICNRestarts,
    profile3DGutmannAlpha,
    setProfile3DGutmannAlpha,
    profile3DGutmannBeta,
    setProfile3DGutmannBeta,
    profile3DGutmannNRestarts,
    setProfile3DGutmannNRestarts,
    profile3DICNRestarts,
    setProfile3DICNRestarts,
    profile3DICInitA,
    setProfile3DICInitA,
    profile3DICInitB,
    setProfile3DICInitB,
    profile3DIBIXAlpha,
    setProfile3DIBIXAlpha,
    profile3DIBIXBeta,
    setProfile3DIBIXBeta,
    profile3DIBIXNRestarts,
    setProfile3DIBIXNRestarts,
		minPartiality,
		setMinPartiality,
		minISigma,
		setMinISigma,
		calculateLineProfile,
		setCalculateLineProfile,
		dmin,
		setDmin,
		integrateType,
		setIntegrateType,
		integrateMethod,
		setIntegrateMethod,
    backgroundModel,
    setBackgroundModel,
    maskModel,
    setMaskModel,
    ellipseMaskScale,
    setEllipseMaskScale,
    advancedOptions,
    setAdvancedOptions,
    intensityExportType,
    setIntensityExportType,
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
    minWavelength,
    setMinWavelength,
    maxWavelength,
    setMaxWavelength,
    currentMinWavelength,
    setCurrentMinWavelength,
    currentMaxWavelength,
    setCurrentMaxWavelength,
    displayUnit,
    setDisplayUnit,
      }}
    >
      {children}
    </IntegrateContext.Provider>
  );

};

export const useIntegrateContext = () => {
  const context = useContext(IntegrateContext);
  if (!context) {
    throw new Error('useIntegrateContext must be used within an IntegrateProvider');
  }
  return context;
};
