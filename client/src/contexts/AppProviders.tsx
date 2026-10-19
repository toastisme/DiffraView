import React from 'react';
import { RootProvider } from './RootContext';
import { ImportProvider } from './ImportContext';
import { ExperimentViewerProvider } from './ExperimentViewerContext';
import { RLVProvider } from './RLVContext';
import { ExperimentPlannerProvider } from './ExperimentPlannerContext';
import { IntegrationProfilerProvider } from './IntegrationProfilerContext';
import { PluginProvider } from './PluginContext';
import { ToFLaueProviders } from './tof_laue/ToFLaueMode';
import { RotationProviders } from './rotation/RotationMode';


interface AppProviderProps {
  children: React.ReactNode;
  setAppLoading : React.Dispatch<React.SetStateAction<boolean>>
  setUserMessage : (msg: string) => void
}

const AppProviders: React.FC<AppProviderProps> = ({ children, setAppLoading, setUserMessage }) => {
  return (
	<RotationProviders>
	<ToFLaueProviders>
		<ImportProvider>
			<IntegrationProfilerProvider setUserMessage={setUserMessage}>
				<ExperimentPlannerProvider>
					<RLVProvider>
						<ExperimentViewerProvider>
							<PluginProvider>
								<RootProvider setAppLoading={setAppLoading} setUserMessage={setUserMessage}>{children}</RootProvider>
							</PluginProvider>
						</ExperimentViewerProvider>
					</RLVProvider>
				</ExperimentPlannerProvider>
			</IntegrationProfilerProvider>
		</ImportProvider>
	</ToFLaueProviders>
	</RotationProviders>
  );
};

export default AppProviders;
