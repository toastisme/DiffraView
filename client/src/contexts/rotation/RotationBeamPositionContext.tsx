import React, { ReactNode, createContext, useState, useContext } from 'react';
import { Status } from '@/types'

// dials.search_beam_position basic parameters; an empty string is DIALS' default (None)
export interface RotationBeamPositionParams {
  method: string;
  // default method
  nproc: string;
  plotSearchScope: boolean;
  maxCell: string;
  imageRange: string;
  maxReflections: string;
  mmSearchScope: string;
  wideSearchBinning: string;
  nMacroCycles: string;
  dMin: string;
  seed: string;
  // projection methods (midpoint, maximum, inversion)
  methodX: string;
  methodY: string;
  plot: boolean;
  excludePixelRangeX: string;
  excludePixelRangeY: string;
  perImage: boolean;
  colorCutoff: string;
  midpointExcludeIntensityPercent: string;
  midpointIntersectionRange: string;
  midpointConvolutionWidth: string;
  midpointDeadPixelRangeX: string;
  midpointDeadPixelRangeY: string;
  midpointIntersectionMinWidth: string;
  maximumBadPixelThreshold: string;
  maximumNConvolutions: string;
  maximumConvolutionWidth: string;
  maximumBinWidth: string;
  maximumBinStep: string;
  inversionBadPixelThreshold: string;
  inversionGuessPosition: string;
  inversionWindowWidth: string;
  inversionBackgroundCutoff: string;
  inversionConvolutionWidth: string;
}

export const BEAM_POSITION_DEFAULTS: RotationBeamPositionParams = {
  method: "default",
  nproc: "",
  plotSearchScope: false,
  maxCell: "",
  imageRange: "",
  maxReflections: "10000",
  mmSearchScope: "4.0",
  wideSearchBinning: "2",
  nMacroCycles: "1",
  dMin: "",
  seed: "42",
  methodX: "",
  methodY: "",
  plot: true,
  excludePixelRangeX: "",
  excludePixelRangeY: "",
  perImage: false,
  colorCutoff: "",
  midpointExcludeIntensityPercent: "0.01",
  midpointIntersectionRange: "0.3,0.9,0.01",
  midpointConvolutionWidth: "80",
  midpointDeadPixelRangeX: "",
  midpointDeadPixelRangeY: "",
  midpointIntersectionMinWidth: "10",
  maximumBadPixelThreshold: "",
  maximumNConvolutions: "1",
  maximumConvolutionWidth: "1",
  maximumBinWidth: "20",
  maximumBinStep: "10",
  inversionBadPixelThreshold: "",
  inversionGuessPosition: "",
  inversionWindowWidth: "400",
  inversionBackgroundCutoff: "",
  inversionConvolutionWidth: "1",
};

// Where a beam meets its detector; no panel if it misses
export interface BeamCentre {
  experiment: number;
  panel?: number;
  x?: number;
  y?: number;
  xMm?: number;
  yMm?: number;
}

export interface BeamPositionResult {
  status: Status;
  log: string;
  images: { name: string; url: string }[];
  numImages: number;
  optimisedAvailable: boolean;
  optimisedCentres: BeamCentre[];
}

export const NO_RESULT: BeamPositionResult = {
  status: Status.Default, log: "", images: [], numImages: 0, optimisedAvailable: false, optimisedCentres: [],
};

export interface RotationBeamPositionContextType {
  // Whether the Utils > Search Beam Position dialog is shown
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  params: RotationBeamPositionParams;
  setParam: <K extends keyof RotationBeamPositionParams>(key: K, value: RotationBeamPositionParams[K]) => void;
  // Status is Loading while the search runs
  result: BeamPositionResult;
  setResult: React.Dispatch<React.SetStateAction<BeamPositionResult>>;
  // Percent done, from the projection methods' progress bar
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  // Of the current experiments
  currentCentres: BeamCentre[];
  used: boolean;
  setUsed: React.Dispatch<React.SetStateAction<boolean>>;
  updateParams: (params: Record<string, any>) => void;
  reset: () => void;
}

const RotationBeamPositionContext = createContext<RotationBeamPositionContextType | undefined>(undefined);

export const RotationBeamPositionProvider = ({ children }: { children: ReactNode }) => {

  const [open, setOpen] = useState<boolean>(false);
  const [params, setParams] = useState<RotationBeamPositionParams>(BEAM_POSITION_DEFAULTS);
  const [result, setResult] = useState<BeamPositionResult>(NO_RESULT);
  const [progress, setProgress] = useState<number>(0);
  const [currentCentres, setCurrentCentres] = useState<BeamCentre[]>([]);
  const [used, setUsed] = useState<boolean>(false);

  const setParam = <K extends keyof RotationBeamPositionParams>(key: K, value: RotationBeamPositionParams[K]) => {
    setParams((prev) => ({ ...prev, [key]: value }));
  };

  const actionMap: Record<string, any> = {
    "result": (update: Partial<BeamPositionResult>) => setResult({ ...NO_RESULT, ...update }),
    "progress": setProgress,
    "currentCentres": setCurrentCentres,
    "used": setUsed,
  };

  const updateParams = (newParams: Record<string, any>) => {
    Object.entries(newParams).forEach(([key, value]) => {
      if (actionMap.hasOwnProperty(key)) {
        actionMap[key](value);
      } else {
        console.warn("Tried to update", key, "but not found in RotationBeamPositionContext");
      }
    });
  };

  const reset = () => {
    setOpen(false);
    setResult(NO_RESULT);
    setProgress(0);
    setCurrentCentres([]);
    setUsed(false);
  };

  return (
    <RotationBeamPositionContext.Provider
      value={{
        open,
        setOpen,
        params,
        setParam,
        result,
        setResult,
        progress,
        setProgress,
        currentCentres,
        used,
        setUsed,
        updateParams,
        reset,
      }}
    >
      {children}
    </RotationBeamPositionContext.Provider>
  );
};

export const useRotationBeamPositionContext = () => {
  const context = useContext(RotationBeamPositionContext);
  if (!context) {
    throw new Error('useRotationBeamPositionContext must be used within a RotationBeamPositionProvider');
  }
  return context;
};
