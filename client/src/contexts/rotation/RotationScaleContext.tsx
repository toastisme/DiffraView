import React, { ReactNode, createContext, useState, useContext } from 'react';
import { Status, DefaultAlgorithmContextType } from '@/types'

// dials.scale basic parameters; an empty string is DIALS' default (None)
export interface RotationScaleParams {
  model: string;
  anomalous: boolean;
  overwriteExistingModels: boolean;
  reflectionSelectionMethod: string;
  isigmaCutoff: string;
  bestUnitCell: string;
  stillsMinIsigma: string;
  stillsMinMultiplicity: string;
  resetErrorModel: boolean;
  errorModelGroup: string;
  checkConsistentIndexing: boolean;
  filteringMethod: string;
  maxCycles: string;
  maxPercentRemoved: string;
  minCompleteness: string;
  deltaCCHalfMode: string;
  groupSize: string;
  stdCutoff: string;
}

export const SCALE_DEFAULTS: RotationScaleParams = {
  model: "Auto",
  anomalous: false,
  overwriteExistingModels: false,
  reflectionSelectionMethod: "auto",
  isigmaCutoff: "1.0",
  bestUnitCell: "",
  stillsMinIsigma: "2.0",
  stillsMinMultiplicity: "4",
  resetErrorModel: false,
  errorModelGroup: "",
  checkConsistentIndexing: false,
  filteringMethod: "None",
  maxCycles: "6",
  maxPercentRemoved: "10",
  minCompleteness: "",
  deltaCCHalfMode: "dataset",
  groupSize: "10",
  stdCutoff: "4.0",
};

// Export of the scaled reflections without merging (dials.export), as the Integrate tab's
export interface RotationUnmergedExportParams {
  intensity: string;
  minPartiality: string;
  minISigma: string;
}

export const UNMERGED_EXPORT_DEFAULTS: RotationUnmergedExportParams = {
  intensity: "scale",
  minPartiality: "",
  minISigma: "",
};

// dials.merge basic parameters; an empty string is DIALS' default (None)
export interface RotationMergeParams {
  assessSpaceGroup: boolean;
  anomalous: boolean;
  truncate: boolean;
  frenchWilsonImplementation: string;
  frenchWilsonMinReflections: string;
  fallbackToFlatPrior: boolean;
  dMin: string;
  dMax: string;
  wavelengthTolerance: string;
  combinePartials: boolean;
  partialityThreshold: string;
  bestUnitCell: string;
  nResidues: string;
  useInternalVariance: boolean;
  nBins: string;
  mergingAnomalous: boolean;
  generateRFree: boolean;
  rFreeFraction: string;
  rFreeUseLatticeSymmetry: boolean;
  rFreeUseDatamanShells: boolean;
  rFreeNShells: string;
  rFreeExtend: string;
  rFreeRelativeToCompleteSet: boolean;
  rFreeReference: string;
}

export const MERGE_DEFAULTS: RotationMergeParams = {
  assessSpaceGroup: true,
  anomalous: true,
  truncate: true,
  frenchWilsonImplementation: "dials",
  frenchWilsonMinReflections: "200",
  fallbackToFlatPrior: true,
  dMin: "",
  dMax: "",
  wavelengthTolerance: "1e-4",
  combinePartials: true,
  partialityThreshold: "0.4",
  bestUnitCell: "",
  nResidues: "200",
  useInternalVariance: false,
  nBins: "20",
  mergingAnomalous: false,
  generateRFree: true,
  rFreeFraction: "0.05",
  rFreeUseLatticeSymmetry: true,
  rFreeUseDatamanShells: false,
  rFreeNShells: "20",
  rFreeExtend: "None",
  rFreeRelativeToCompleteSet: false,
  rFreeReference: "",
};

export interface RotationScaleContextType extends DefaultAlgorithmContextType {
  params: RotationScaleParams;
  setParam: <K extends keyof RotationScaleParams>(key: K, value: RotationScaleParams[K]) => void;
  advancedOptions: string;
  setAdvancedOptions: React.Dispatch<React.SetStateAction<string>>;
  // Step whose files are scaled (integrate or apply_symmetry)
  inputFrom: string;
  setInputFrom: React.Dispatch<React.SetStateAction<string>>;
  // Whether the last scaling wrote dials.scale.html, and its contents once requested
  reportAvailable: boolean;
  report: string;
  setReport: React.Dispatch<React.SetStateAction<string>>;
  // Scaled reflections can be exported unmerged (dials.export) or merged (dials.merge)
  exportEnabled: boolean;
  exportType: string;
  setExportType: React.Dispatch<React.SetStateAction<string>>;
  // mtz or shelx (.hkl); merged reflections are always mtz (dials.merge)
  exportFormat: string;
  setExportFormat: React.Dispatch<React.SetStateAction<string>>;
  unmergedParams: RotationUnmergedExportParams;
  setUnmergedParam: <K extends keyof RotationUnmergedExportParams>(key: K, value: string) => void;
  mergeParams: RotationMergeParams;
  setMergeParam: <K extends keyof RotationMergeParams>(key: K, value: RotationMergeParams[K]) => void;
}

const RotationScaleContext = createContext<RotationScaleContextType | undefined>(undefined);

export const RotationScaleProvider = ({ children }: { children: ReactNode }) => {

  const [enabled, setEnabled] = useState<boolean>(false);
  const [log, setLog] = useState<string>('');
  const [status, setStatus] = useState<Status>(Status.Default);
  const [progress, setProgress] = useState<number>(0);
  const [params, setParams] = useState<RotationScaleParams>(SCALE_DEFAULTS);
  const [advancedOptions, setAdvancedOptions] = useState<string>("");
  const [inputFrom, setInputFrom] = useState<string>("integrate");
  const [reportAvailable, setReportAvailable] = useState<boolean>(false);
  const [report, setReport] = useState<string>("");
  const [exportEnabled, setExportEnabled] = useState<boolean>(false);
  const [exportType, setExportType] = useState<string>("merged");
  const [exportFormat, setExportFormat] = useState<string>("mtz");
  const [unmergedParams, setUnmergedParams] = useState<RotationUnmergedExportParams>(UNMERGED_EXPORT_DEFAULTS);
  const [mergeParams, setMergeParams] = useState<RotationMergeParams>(MERGE_DEFAULTS);

  const setParam = <K extends keyof RotationScaleParams>(key: K, value: RotationScaleParams[K]) => {
	setParams((prev) => ({ ...prev, [key]: value }));
  };

  const setUnmergedParam = <K extends keyof RotationUnmergedExportParams>(key: K, value: string) => {
	setUnmergedParams((prev) => ({ ...prev, [key]: value }));
  };

  const setMergeParam = <K extends keyof RotationMergeParams>(key: K, value: RotationMergeParams[K]) => {
	setMergeParams((prev) => ({ ...prev, [key]: value }));
  };

  const updateStatus = (status: string) => {
	setStatus(status as Status);
  };

  const actionMap: Record<string, any> = {
	"enabled": setEnabled,
	"log": setLog,
	"status": updateStatus,
	"progress": setProgress,
	"advancedOptions": setAdvancedOptions,
	"reportAvailable": setReportAvailable,
	"report": setReport,
	"exportEnabled": setExportEnabled,
  }

  const reset = () => {
	setEnabled(false);
	setLog("");
	setStatus(Status.Default);
	setProgress(0);
	setParams(SCALE_DEFAULTS);
	setAdvancedOptions("");
	setInputFrom("integrate");
	setReportAvailable(false);
	setReport("");
	setExportEnabled(false);
	setExportType("merged");
	setExportFormat("mtz");
	setUnmergedParams(UNMERGED_EXPORT_DEFAULTS);
	setMergeParams(MERGE_DEFAULTS);
  }

  const updateParams = (newParams: Record<string, any>) => {
	Object.entries(newParams).forEach(([key, value]) => {
		if (actionMap.hasOwnProperty(key)){
			actionMap[key](value);
		}
		else if (key in SCALE_DEFAULTS){
			setParam(key as keyof RotationScaleParams, value);
		}
		else{
			console.warn("Tried to update", key, "but not found in RotationScaleContext");
		}
	});
  }

  return (
    <RotationScaleContext.Provider
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
		params,
		setParam,
		advancedOptions,
		setAdvancedOptions,
		inputFrom,
		setInputFrom,
		reportAvailable,
		report,
		setReport,
		exportEnabled,
		exportType,
		setExportType,
		exportFormat,
		setExportFormat,
		unmergedParams,
		setUnmergedParam,
		mergeParams,
		setMergeParam,
      }}
    >
      {children}
    </RotationScaleContext.Provider>
  );
};

export const useRotationScaleContext = () => {
  const context = useContext(RotationScaleContext);
  if (!context) {
    throw new Error('useRotationScaleContext must be used within a RotationScaleProvider');
  }
  return context;
};
