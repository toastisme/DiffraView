import React, { ReactNode, createContext, useState, useContext } from 'react';
import { Status } from '@/types'

// dials.two_theta_refine basic parameters
export interface RotationTwoThetaRefineParams {
  filterIntegratedCentroids: boolean;
  partialityThreshold: string;
  combineCrystalModels: boolean;
  triclinic: boolean;
  // Optional outputs, set by the server (output.* is not in the options)
  cif: boolean;
  mmcif: boolean;
  p4p: boolean;
}

export const TWO_THETA_REFINE_DEFAULTS: RotationTwoThetaRefineParams = {
  filterIntegratedCentroids: true,
  partialityThreshold: "0.4",
  combineCrystalModels: true,
  triclinic: false,
  cif: true,
  mmcif: false,
  p4p: true,
};

// A crystal's cell (a, b, c, alpha, beta, gamma), with standard uncertainties once refined
export interface UnitCell {
  experiment: number;
  parameters: number[];
  volume: number;
  sd?: number[];
  volumeSd?: number;
}

export interface TwoThetaRefineResult {
  status: Status;
  log: string;
  inputCells: UnitCell[];
  refinedCells: UnitCell[];
  refinedExpt: string | null;
  files: string[];
}

export const NO_RESULT: TwoThetaRefineResult = {
  status: Status.Default, log: "", inputCells: [], refinedCells: [], refinedExpt: null, files: [],
};

export interface RotationTwoThetaRefineContextType {
  // Whether the Utils, Refine Cell (2θ) dialog is shown
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  params: RotationTwoThetaRefineParams;
  setParam: <K extends keyof RotationTwoThetaRefineParams>(key: K, value: RotationTwoThetaRefineParams[K]) => void;
  // Steps whose files it can read (scale, integrate or apply_symmetry); none before integrating
  inputs: string[];
  // The step chosen, "" for the first of inputs
  inputFrom: string;
  setInputFrom: React.Dispatch<React.SetStateAction<string>>;
  // Status is Loading while it runs
  result: TwoThetaRefineResult;
  setResult: React.Dispatch<React.SetStateAction<TwoThetaRefineResult>>;
  updateParams: (params: Record<string, any>) => void;
  reset: () => void;
}

const RotationTwoThetaRefineContext = createContext<RotationTwoThetaRefineContextType | undefined>(undefined);

export const RotationTwoThetaRefineProvider = ({ children }: { children: ReactNode }) => {

  const [open, setOpen] = useState<boolean>(false);
  const [params, setParams] = useState<RotationTwoThetaRefineParams>(TWO_THETA_REFINE_DEFAULTS);
  const [inputs, setInputs] = useState<string[]>([]);
  const [inputFrom, setInputFrom] = useState<string>("");
  const [result, setResult] = useState<TwoThetaRefineResult>(NO_RESULT);

  const setParam = <K extends keyof RotationTwoThetaRefineParams>(key: K, value: RotationTwoThetaRefineParams[K]) => {
    setParams((prev) => ({ ...prev, [key]: value }));
  };

  const actionMap: Record<string, any> = {
    "result": (update: Partial<TwoThetaRefineResult>) => setResult({ ...NO_RESULT, ...update }),
    "inputs": setInputs,
  };

  const updateParams = (newParams: Record<string, any>) => {
    Object.entries(newParams).forEach(([key, value]) => {
      if (actionMap.hasOwnProperty(key)) {
        actionMap[key](value);
      } else {
        console.warn("Tried to update", key, "but not found in RotationTwoThetaRefineContext");
      }
    });
  };

  const reset = () => {
    setOpen(false);
    setInputs([]);
    setInputFrom("");
    setResult(NO_RESULT);
  };

  return (
    <RotationTwoThetaRefineContext.Provider
      value={{
        open,
        setOpen,
        params,
        setParam,
        inputs,
        inputFrom,
        setInputFrom,
        result,
        setResult,
        updateParams,
        reset,
      }}
    >
      {children}
    </RotationTwoThetaRefineContext.Provider>
  );
};

export const useRotationTwoThetaRefineContext = () => {
  const context = useContext(RotationTwoThetaRefineContext);
  if (!context) {
    throw new Error('useRotationTwoThetaRefineContext must be used within a RotationTwoThetaRefineProvider');
  }
  return context;
};
