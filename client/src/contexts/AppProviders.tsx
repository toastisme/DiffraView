import React from 'react';
import { RootProvider } from './RootContext';
import { ImportProvider } from './ImportContext';
import { FindSpotsProvider } from './FindSpotsContext';
import { IndexProvider } from './IndexContext';
import { RefineProvider } from './RefineContext';
import { IntegrateProvider } from './IntegrateContext';
import { ExperimentViewerProvider } from './ExperimentViewerContext';
import { RLVProvider } from './RLVContext';
import { ExperimentPlannerProvider } from './ExperimentPlannerContext';

interface AppProviderProps {
  children: React.ReactNode;
  setAppLoading : React.Dispatch<React.SetStateAction<boolean>>
}

const AppProviders: React.FC<AppProviderProps> = ({ children, setAppLoading }) => {
  return (
	<IntegrateProvider>
		<RefineProvider>
			<IndexProvider>
				<FindSpotsProvider>
					<ImportProvider>
						<ExperimentPlannerProvider>
							<RLVProvider>
								<ExperimentViewerProvider>
									<RootProvider setAppLoading={setAppLoading}>{children}</RootProvider>
								</ExperimentViewerProvider>
							</RLVProvider>
						</ExperimentPlannerProvider>
					</ImportProvider>
				</FindSpotsProvider>
			</IndexProvider>
		</RefineProvider>
	</IntegrateProvider>
  );
};

export default AppProviders;
