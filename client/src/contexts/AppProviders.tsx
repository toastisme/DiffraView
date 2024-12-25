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
import { IntegrationProfilerProvider } from './IntegrationProfilerContext';


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
						<IntegrationProfilerProvider>
							<ExperimentPlannerProvider>
								<RLVProvider>
									<ExperimentViewerProvider>
										<RootProvider setAppLoading={setAppLoading}>{children}</RootProvider>
									</ExperimentViewerProvider>
								</RLVProvider>
							</ExperimentPlannerProvider>
						</IntegrationProfilerProvider>
					</ImportProvider>
				</FindSpotsProvider>
			</IndexProvider>
		</RefineProvider>
	</IntegrateProvider>
  );
};

export default AppProviders;
