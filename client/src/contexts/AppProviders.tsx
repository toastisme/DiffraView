import React from 'react';
import { ImportProvider } from './ImportContext';
import { RootProvider } from './RootContext';
import { FindSpotsProvider } from './FindSpotsContext';

interface AppProviderProps {
  children: React.ReactNode;
  setAppLoading : React.Dispatch<React.SetStateAction<boolean>>
}

const AppProviders: React.FC<AppProviderProps> = ({ children, setAppLoading }) => {
  return (
	<FindSpotsProvider>
		<ImportProvider>
			<RootProvider setAppLoading={setAppLoading}>{children}</RootProvider>
		</ImportProvider>
	</FindSpotsProvider>
  );
};

export default AppProviders;
