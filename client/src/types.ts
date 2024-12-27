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
  setStatus: React.Dispatch<React.SetStateAction<Status>>;
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
  exptID: string,
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

export interface ExptNamesDict  {
    [key: string]: string;
}
