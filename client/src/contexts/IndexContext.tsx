import React, { ReactNode, createContext, useState, useContext } from 'react';
import { BravaisLattice, Status, DefaultAlgorithmContextType } from '../types'

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

  const actionMap: Record<string, any> = {
	"log" : setLog,
	"status" : updateStatus,
  }

  const reset = () => {
	setLog("");
	setStatus(Status.Default);
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