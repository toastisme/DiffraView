import React from 'react';
import { ImportProvider } from './ImportContext';
import { RootProvider } from './RootContext';

interface AppProviderProps {
  children: React.ReactNode;
  setAppLoading : React.Dispatch<React.SetStateAction<boolean>>
}

const AppProviders: React.FC<AppProviderProps> = ({ children, setAppLoading }) => {
  return (
    <ImportProvider>
		<RootProvider setAppLoading={setAppLoading}>{children}</RootProvider>
    </ImportProvider>
  );
};

export default AppProviders;
