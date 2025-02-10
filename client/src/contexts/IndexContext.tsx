import React, { ReactNode, createContext, useState, useContext } from 'react';
import { BravaisLattice, Status, DefaultAlgorithmContextType } from '../types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

export interface IndexContextType extends DefaultAlgorithmContextType {
  detectSymmetryEnabled: boolean;
  crystalIDs: number[];
  bravaisLattices: BravaisLattice[];
  detectSymmetryOpen: boolean;
  setDetectSymmetryOpen: React.Dispatch<React.SetStateAction<boolean>>
  selectedBravaisLatticeID: string;
  setSelectedBravaisLatticeID: React.Dispatch<React.SetStateAction<string>>;
}

const IndexContext = createContext<IndexContextType | undefined>(undefined);

export const IndexProvider = ({ children }: { children: ReactNode }) => {

  const initialBravaisLattices: BravaisLattice[] = [];
  const [bravaisLattices, setBravaisLattices] = useState<BravaisLattice[]>(initialBravaisLattices);
  const [enabled, setEnabled] = useState<boolean>(true);
  const [log, setLog] = useState<string>('');
  const [status, setStatus] = useState<Status>(Status.Default);
  const [selectedBravaisLatticeID, setSelectedBravaisLatticeID] = useState<string>("");
  const [detectSymmetryOpen, setDetectSymmetryOpen] = useState<boolean>(false);
  const [detectSymmetryEnabled, setDetectSymmetryEnabled] = useState<boolean>(false);
  const [crystalIDs, setCrystalIDs] = useState<number[]>([]);

  const updateStatus = (status: string) => {
	const s = status as Status;
	setStatus(s);
  };

  const updateBravaisLattices = (bravaisLattices: any) => {

	const lattices: BravaisLattice[] = [];
	for (var i = 0; i < bravaisLattices.length; i++) {
		const bl: any = bravaisLattices[i];

		const unitCell: string[] = bl["Unit Cell"].replace(/\(|\)/g, '').split(', ') as unknown as string[]

		lattices.push(
		{
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
		}
		)
	}
	setBravaisLattices(lattices)
  }

  type ActionFunc = (...args: any[]) => void;

  const actionMap: Record<string, ActionFunc> = {
	"enabled" : setEnabled,
	"log" : setLog,
	"status" : updateStatus,
	"crystalIDs" : setCrystalIDs,
	"bravaisLattices" : updateBravaisLattices,
	"detectSymmetryEnabled": setDetectSymmetryEnabled,
	"detectSymmetryOpen": setDetectSymmetryOpen
  }

  const reset = () => {
	setLog("");
	setStatus(Status.Default);
	setEnabled(false);
	setBravaisLattices(initialBravaisLattices);
	setSelectedBravaisLatticeID("");
	setDetectSymmetryOpen(false);
	setDetectSymmetryEnabled(false);
	setCrystalIDs([]);
  }

  const updateParams = (params: Record<string, any>) => {

	Object.entries(params).forEach(([key, value]) => {
		if (actionMap.hasOwnProperty(key)){
			actionMap[key](value);
		}
		else{
			console.warn("Tried to update", key, "but not found in IndexContext");
		}
	});
  }

  const updateEnabled = (enabled: boolean) => {
	setEnabled(enabled);
  };

  return (
    <IndexContext.Provider
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
		detectSymmetryEnabled,
		crystalIDs,
		bravaisLattices,
		detectSymmetryOpen,
		setDetectSymmetryOpen,
		selectedBravaisLatticeID,
		setSelectedBravaisLatticeID
      }}
    >
      {children}
    </IndexContext.Provider>
  );

};

export const useIndexContext = () => {
  const context = useContext(IndexContext);
  if (!context) {
    throw new Error('useIndexContext must be used within an IndexProvider');
  }
  return context;
};