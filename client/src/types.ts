import React from "react"

export const enum Status {
  Default = "Default",
  Loading = "Loading",
  Failed = "Failed"
}

export const enum SoftwareBackend{
  DIALS = "DIALS",
  XDS = "XDS",
  MANTID = "MANTID"
}

export interface DefaultContextType {
  status: Status;
  enabled: boolean,
  progress: number;
  setStatus: React.Dispatch<React.SetStateAction<Status>>;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  updateStatus: (status: string) => void;
  updateParams: (params: Record<string, any>) => void;
  updateEnabled: (enabled: boolean) => void;
  reset: () => void;
}

export interface DefaultAlgorithmContextType extends DefaultContextType{
  log: string;
  setLog: React.Dispatch<React.SetStateAction<string>>;
}

export interface DefaultViewerContextType extends DefaultContextType{
  hidden: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface LineplotData {
  x: number;
  y: number;
}

export interface LineplotBboxData {
  x1: number;
  x2: number;
  id: string
}

export interface LineplotCentroidData {
  x: number;
  y: number;
  id: string;
  millerIdx: number[];
}

export interface Reflection {
  id: string,
  panel: string,
  panelName: string,
  millerIdx: string,
  XYZObs: string,
  XYZCal: string,
  wavelength: string,
  wavelengthCal: string,
  tof: string,
  tofCal: string,
  peakIntensity: string,
  summedIntensity: string,
  profileIntensity: string,
  partiality: string,
  exptID: string,
  exported?: boolean | string,
}

export interface BravaisLattice {
  id: string,
  metricFit: string,
  RMSD: string,
  cc: string,
  lattice: string,
  a: string,
  b: string,
  c: string,
  alpha: string,
  beta: string,
  gamma: string,
  volume: string,
  recommended: React.ReactNode
}

// A dials.symmetry subgroup (integrate tab)
export interface SymmetryCandidate {
  id: string,
  recommended: string,
  pattersonGroup: string,
  spaceGroup: string,
  likelihood: number,
  confidence: number,
  netZcc: number,
  ccFor: number,
  ccAgainst: number,
  delta: number,
  cbOp: string,
  a: number,
  b: number,
  c: number,
  alpha: number,
  beta: number,
  gamma: number,
}

export interface ExptNamesDict  {
    [key: string]: string;
}

// A program parameter the advanced option search offers (from workflow.param_definitions)
export interface ParamDefinition {
  path: string;
  type: string;
  help: string;
  default: string;
  choices: string[];
  // Can be given more than once
  multiple: boolean;
  expertLevel: number;
}

export interface AdvancedOption {
  path: string;
  value: string;
}
