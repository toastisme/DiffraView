import React, { ReactNode, createContext, useState, useContext } from 'react';
import { Status, DefaultAlgorithmContextType, SymmetryCandidate } from '@/types'

export interface RotationIntegrateContextType extends DefaultAlgorithmContextType {
  exportEnabled: boolean;
  symmetryCandidates: SymmetryCandidate[];
  symmetryResultsOpen: boolean;
  setSymmetryResultsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  exportSpaceGroups: Record<string, string>;
  exportInputFrom: string;
  setExportInputFrom: React.Dispatch<React.SetStateAction<string>>;
  // integration.profile.fitting; false is summation only
  profileFitting: boolean;
  setProfileFitting: React.Dispatch<React.SetStateAction<boolean>>;
  backgroundAlgorithm: string;
  setBackgroundAlgorithm: React.Dispatch<React.SetStateAction<string>>;
  dmin: string;
  setDmin: React.Dispatch<React.SetStateAction<string>>;
  advancedOptions: string;
  setAdvancedOptions: React.Dispatch<React.SetStateAction<string>>;
  // Whether a mask stored in the experiment viewer is used
  useMask: boolean;
  setUseMask: React.Dispatch<React.SetStateAction<boolean>>;
  intensityExportType: string;
  setIntensityExportType: React.Dispatch<React.SetStateAction<string>>;
  minPartiality: string;
  setMinPartiality: React.Dispatch<React.SetStateAction<string>>;
  minISigma: string;
  setMinISigma: React.Dispatch<React.SetStateAction<string>>;
  // dials.symmetry
  symmetryNormalisation: string;
  setSymmetryNormalisation: React.Dispatch<React.SetStateAction<string>>;
  symmetryDmin: string;
  setSymmetryDmin: React.Dispatch<React.SetStateAction<string>>;
  symmetryMinCCHalf: string;
  setSymmetryMinCCHalf: React.Dispatch<React.SetStateAction<string>>;
  symmetryPartialityThreshold: string;
  setSymmetryPartialityThreshold: React.Dispatch<React.SetStateAction<string>>;
  symmetryMinIMeanOverSigmaMean: string;
  setSymmetryMinIMeanOverSigmaMean: React.Dispatch<React.SetStateAction<string>>;
}

const RotationIntegrateContext = createContext<RotationIntegrateContextType | undefined>(undefined);

export const RotationIntegrateProvider = ({ children }: { children: ReactNode }) => {

  const [enabled, setEnabled] = useState<boolean>(false);
  const [log, setLog] = useState<string>('');
  const [status, setStatus] = useState<Status>(Status.Default);
  const [progress, setProgress] = useState<number>(0);
  const [exportEnabled, setExportEnabled] = useState<boolean>(false);
  const [symmetryCandidates, setSymmetryCandidates] = useState<SymmetryCandidate[]>([]);
  const [symmetryResultsOpen, setSymmetryResultsOpen] = useState<boolean>(false);
  // {step: space group} of the files export can read (integrate, apply_symmetry)
  const [exportSpaceGroups, setExportSpaceGroupsState] = useState<Record<string, string>>({});
  const [exportInputFrom, setExportInputFrom] = useState<string>("integrate");
  const setExportSpaceGroups = (spaceGroups: Record<string, string>) => {
	setExportSpaceGroupsState(spaceGroups);
	setExportInputFrom("apply_symmetry" in spaceGroups ? "apply_symmetry" : "integrate");
  };
  const [profileFitting, setProfileFitting] = useState<boolean>(true);
  const [backgroundAlgorithm, setBackgroundAlgorithm] = useState<string>("Auto");
  const [dmin, setDmin] = useState<string>("");
  const [advancedOptions, setAdvancedOptions] = useState<string>("");
  const [useMask, setUseMask] = useState<boolean>(true);
  const [intensityExportType, setIntensityExportType] = useState<string>("profile");
  // dials.export mtz defaults
  const [minPartiality, setMinPartiality] = useState<string>("0.4");
  const [minISigma, setMinISigma] = useState<string>("-5");
  // dials.symmetry defaults; an empty dmin is Auto
  const [symmetryNormalisation, setSymmetryNormalisation] = useState<string>("ml_aniso");
  const [symmetryDmin, setSymmetryDmin] = useState<string>("");
  const [symmetryMinCCHalf, setSymmetryMinCCHalf] = useState<string>("0.6");
  const [symmetryPartialityThreshold, setSymmetryPartialityThreshold] = useState<string>("0.4");
  const [symmetryMinIMeanOverSigmaMean, setSymmetryMinIMeanOverSigmaMean] = useState<string>("4");

  const updateStatus = (status: string) => {
	setStatus(status as Status);
  };

  const actionMap: Record<string, any> = {
	"enabled": setEnabled,
	"log": setLog,
	"status": updateStatus,
	"progress": setProgress,
	"exportEnabled": setExportEnabled,
	"symmetryCandidates": setSymmetryCandidates,
	"symmetryResultsOpen": setSymmetryResultsOpen,
	"exportSpaceGroups": setExportSpaceGroups,
	"profileFitting": setProfileFitting,
	"backgroundAlgorithm": setBackgroundAlgorithm,
	"dmin": setDmin,
	"advancedOptions": setAdvancedOptions,
	"intensityExportType": setIntensityExportType,
  }

  const reset = () => {
	setEnabled(false);
	setLog("");
	setStatus(Status.Default);
	setProgress(0);
	setExportEnabled(false);
	setSymmetryCandidates([]);
	setSymmetryResultsOpen(false);
	setExportSpaceGroups({});
	setProfileFitting(true);
	setBackgroundAlgorithm("Auto");
	setDmin("");
	setAdvancedOptions("");
	setUseMask(true);
	setIntensityExportType("profile");
	setMinPartiality("0.4");
	setMinISigma("-5");
	setSymmetryNormalisation("ml_aniso");
	setSymmetryDmin("");
	setSymmetryMinCCHalf("0.6");
	setSymmetryPartialityThreshold("0.4");
	setSymmetryMinIMeanOverSigmaMean("4");
  }

  const updateParams = (params: Record<string, any>) => {
	Object.entries(params).forEach(([key, value]) => {
		if (actionMap.hasOwnProperty(key)){
			actionMap[key](value);
		}
		else{
			console.warn("Tried to update", key, "but not found in RotationIntegrateContext");
		}
	});
  }

  return (
    <RotationIntegrateContext.Provider
      value={{
		status,
		enabled,
		progress,
		setStatus,
		setProgress,
		updateStatus,
		updateParams,
		updateEnabled: setEnabled,
		reset,
		log,
		setLog,
		exportEnabled,
		symmetryCandidates,
		symmetryResultsOpen,
		setSymmetryResultsOpen,
		exportSpaceGroups,
		exportInputFrom,
		setExportInputFrom,
		profileFitting,
		setProfileFitting,
		backgroundAlgorithm,
		setBackgroundAlgorithm,
		dmin,
		setDmin,
		advancedOptions,
		setAdvancedOptions,
		useMask,
		setUseMask,
		intensityExportType,
		setIntensityExportType,
		minPartiality,
		setMinPartiality,
		minISigma,
		setMinISigma,
		symmetryNormalisation,
		setSymmetryNormalisation,
		symmetryDmin,
		setSymmetryDmin,
		symmetryMinCCHalf,
		setSymmetryMinCCHalf,
		symmetryPartialityThreshold,
		setSymmetryPartialityThreshold,
		symmetryMinIMeanOverSigmaMean,
		setSymmetryMinIMeanOverSigmaMean,
      }}
    >
      {children}
    </RotationIntegrateContext.Provider>
  );
};

export const useRotationIntegrateContext = () => {
  const context = useContext(RotationIntegrateContext);
  if (!context) {
    throw new Error('useRotationIntegrateContext must be used within a RotationIntegrateProvider');
  }
  return context;
};
