import React, { ReactNode, createContext, useState, useContext } from 'react';

// Utils menu tools every mode has; a mode's own are in its contexts
export interface UtilsContextType {
  // dials.report of the current files, or why it failed
  generalReport: string;
  setGeneralReport: React.Dispatch<React.SetStateAction<string>>;
  generalReportError: string;
  setGeneralReportError: React.Dispatch<React.SetStateAction<string>>;
  updateParams: (params: Record<string, any>) => void;
  reset: () => void;
}

const UtilsContext = createContext<UtilsContextType | undefined>(undefined);

export const UtilsProvider = ({ children }: { children: ReactNode }) => {

  const [generalReport, setGeneralReport] = useState<string>("");
  const [generalReportError, setGeneralReportError] = useState<string>("");

  const actionMap: Record<string, any> = {
    "generalReport": setGeneralReport,
    "generalReportError": setGeneralReportError,
  };

  const updateParams = (params: Record<string, any>) => {
    Object.entries(params).forEach(([key, value]) => {
      if (actionMap.hasOwnProperty(key)) {
        actionMap[key](value);
      } else {
        console.warn("Tried to update", key, "but not found in UtilsContext");
      }
    });
  };

  const reset = () => {
    setGeneralReport("");
    setGeneralReportError("");
  };

  return (
    <UtilsContext.Provider
      value={{
        generalReport,
        setGeneralReport,
        generalReportError,
        setGeneralReportError,
        updateParams,
        reset,
      }}
    >
      {children}
    </UtilsContext.Provider>
  );
};

export const useUtilsContext = () => {
  const context = useContext(UtilsContext);
  if (!context) {
    throw new Error('useUtilsContext must be used within a UtilsProvider');
  }
  return context;
};
