
import React, { ReactNode, createContext, useState, useContext } from 'react';
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
}

const IntegrateContext = createContext<IntegrateContextType | undefined>(undefined);

export const IntegrateProvider = ({ children }: { children: ReactNode }) => {

  const [enabled, setEnabled] = useState<boolean>(false);
  const [log, setLog] = useState<string>('');
  const [status, setStatus] = useState<Status>(Status.Default);
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
  const [tOFBBoxPadding, setTOFBBoxPadding] = useState<string>("30");
  const [xYBBoxPadding, setXYBBoxPadding] = useState<string>("5");
  const [minPartiality, setMinPartiality] = useState<string>("0");
  const [minISigma, setMinISigma] = useState<string>("0");
  const [calculateLineProfile, setCalculateLineProfile] = useState<boolean>(false);
  const [dmin, setDmin] = useState<string>("2");
  const [integrateType, setIntegrateType] = useState<string>("observed");
  const [integrateMethod, setIntegrateMethod] = useState<string>("summation");

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
	"emptyRun" : setEmptyRun
  }

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
	setTOFBBoxPadding("30");
	setXYBBoxPadding("5");
	setMinPartiality("0");
	setMinISigma("0");
	setCalculateLineProfile(false);
	setDmin("2");
	setIntegrateType("observed");
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
		setStatus,
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
		setIntegrateMethod
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