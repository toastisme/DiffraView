import React, { ReactNode, createContext, useState, useContext } from 'react';
import { BravaisLattice, Status, DefaultAlgorithmContextType, AdvancedOption, ParamDefinition } from '@/types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

export interface RotationIndexContextType extends DefaultAlgorithmContextType {
  detectSymmetryEnabled: boolean;
  crystalIDs: number[];
  bravaisLattices: BravaisLattice[];
  detectSymmetryOpen: boolean;
  setDetectSymmetryOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedBravaisLatticeID: string;
  setSelectedBravaisLatticeID: React.Dispatch<React.SetStateAction<string>>;
  initialUnitCell: string;
  setInitialUnitCell: React.Dispatch<React.SetStateAction<string>>;
  initialSpacegroup: string;
  setInitialSpacegroup: React.Dispatch<React.SetStateAction<string>>;
  hKLTolerance: string;
  setHKLTolerance: React.Dispatch<React.SetStateAction<string>>;
  indexingMethod: string;
  setIndexingMethod: React.Dispatch<React.SetStateAction<string>>;
  outlierAlgorithm: string;
  setOutlierAlgorithm: React.Dispatch<React.SetStateAction<string>>;
  jointIndexing: boolean;
  setJointIndexing: React.Dispatch<React.SetStateAction<boolean>>;
  advancedOptions: AdvancedOption[];
  setAdvancedOptions: React.Dispatch<React.SetStateAction<AdvancedOption[]>>;
  // Parameters the advanced option search offers; null until requested
  advancedDefinitions: ParamDefinition[] | null;
}

const RotationIndexContext = createContext<RotationIndexContextType | undefined>(undefined);

// bravaisLattices rows from the server (dials.refine_bravais_settings table)
function toBravaisLattices(rows: any[]): BravaisLattice[] {
  return rows.map((bl) => {
	const unitCell: string[] = bl["Unit Cell"].replace(/\(|\)/g, '').split(', ');
	return {
		id: bl["Candidate"],
		metricFit: bl["Metric Fit"],
		RMSD: bl["RMSD"],
		cc: bl["Min/Max CC"],
		lattice: bl["Lattice"],
		a: unitCell[0],
		b: unitCell[1],
		c: unitCell[2],
		alpha: unitCell[3],
		beta: unitCell[4],
		gamma: unitCell[5],
		volume: bl["Volume"],
		recommended: bl["Recommended"] == "True" ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimes} />
	};
  });
}

export const RotationIndexProvider = ({ children }: { children: ReactNode }) => {

  const [enabled, setEnabled] = useState<boolean>(false);
  const [log, setLog] = useState<string>('');
  const [status, setStatus] = useState<Status>(Status.Default);
  const [progress, setProgress] = useState<number>(0);
  const [bravaisLattices, setBravaisLattices] = useState<BravaisLattice[]>([]);
  const [selectedBravaisLatticeID, setSelectedBravaisLatticeID] = useState<string>("");
  const [detectSymmetryOpen, setDetectSymmetryOpen] = useState<boolean>(false);
  const [detectSymmetryEnabled, setDetectSymmetryEnabled] = useState<boolean>(false);
  const [crystalIDs, setCrystalIDs] = useState<number[]>([]);
  const [initialUnitCell, setInitialUnitCell] = useState<string>("None");
  const [initialSpacegroup, setInitialSpacegroup] = useState<string>("None");
  const [hKLTolerance, setHKLTolerance] = useState<string>("0.3");
  const [indexingMethod, setIndexingMethod] = useState<string>("fft3d");
  const [outlierAlgorithm, setOutlierAlgorithm] = useState<string>("auto");
  const [jointIndexing, setJointIndexing] = useState<boolean>(true);
  const [advancedOptions, setAdvancedOptions] = useState<AdvancedOption[]>([]);
  const [advancedDefinitions, setAdvancedDefinitions] = useState<ParamDefinition[] | null>(null);

  const updateStatus = (status: string) => {
	setStatus(status as Status);
  };

  const actionMap: Record<string, (value: any) => void> = {
	"enabled": setEnabled,
	"log": setLog,
	"status": updateStatus,
	"progress": setProgress,
	"crystalIDs": setCrystalIDs,
	"bravaisLattices": (rows: any[]) => setBravaisLattices(toBravaisLattices(rows)),
	"detectSymmetryEnabled": setDetectSymmetryEnabled,
	"detectSymmetryOpen": setDetectSymmetryOpen,
	"initialUnitCell": setInitialUnitCell,
	"initialSpacegroup": setInitialSpacegroup,
	"hKLTolerance": setHKLTolerance,
	"indexingMethod": setIndexingMethod,
	"outlierAlgorithm": setOutlierAlgorithm,
	"jointIndexing": setJointIndexing,
	"advancedOptions": setAdvancedOptions,
	"advancedDefinitions": setAdvancedDefinitions,
  }

  const reset = () => {
	setEnabled(false);
	setLog("");
	setStatus(Status.Default);
	setProgress(0);
	setBravaisLattices([]);
	setSelectedBravaisLatticeID("");
	setDetectSymmetryOpen(false);
	setDetectSymmetryEnabled(false);
	setCrystalIDs([]);
	setInitialUnitCell("None");
	setInitialSpacegroup("None");
	setHKLTolerance("0.3");
	setIndexingMethod("fft3d");
	setOutlierAlgorithm("auto");
	setJointIndexing(true);
	setAdvancedOptions([]);
	setAdvancedDefinitions(null);
  }

  const updateParams = (params: Record<string, any>) => {
	Object.entries(params).forEach(([key, value]) => {
		if (actionMap.hasOwnProperty(key)){
			actionMap[key](value);
		}
		else{
			console.warn("Tried to update", key, "but not found in RotationIndexContext");
		}
	});
  }

  return (
    <RotationIndexContext.Provider
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
		detectSymmetryEnabled,
		crystalIDs,
		bravaisLattices,
		detectSymmetryOpen,
		setDetectSymmetryOpen,
		selectedBravaisLatticeID,
		setSelectedBravaisLatticeID,
		initialUnitCell,
		setInitialUnitCell,
		initialSpacegroup,
		setInitialSpacegroup,
		hKLTolerance,
		setHKLTolerance,
		indexingMethod,
		setIndexingMethod,
		outlierAlgorithm,
		setOutlierAlgorithm,
		jointIndexing,
		setJointIndexing,
		advancedOptions,
		setAdvancedOptions,
		advancedDefinitions,
      }}
    >
      {children}
    </RotationIndexContext.Provider>
  );
};

export const useRotationIndexContext = () => {
  const context = useContext(RotationIndexContext);
  if (!context) {
    throw new Error('useRotationIndexContext must be used within a RotationIndexProvider');
  }
  return context;
};
