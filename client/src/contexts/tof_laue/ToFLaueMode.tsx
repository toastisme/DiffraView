import { ReactNode } from 'react';
import { StateTarget } from '@/lib/protocol';
import { ToFLaueFindSpotsProvider, useToFLaueFindSpotsContext } from './ToFLaueFindSpotsContext';
import { ToFLaueIndexProvider, useToFLaueIndexContext } from './ToFLaueIndexContext';
import { ToFLaueRefineProvider, useToFLaueRefineContext } from './ToFLaueRefineContext';
import { ToFLaueIntegrateProvider, useToFLaueIntegrateContext } from './ToFLaueIntegrateContext';

export const ToFLaueProviders = ({ children }: { children: ReactNode }) => (
  <ToFLaueIntegrateProvider>
    <ToFLaueRefineProvider>
      <ToFLaueIndexProvider>
        <ToFLaueFindSpotsProvider>{children}</ToFLaueFindSpotsProvider>
      </ToFLaueIndexProvider>
    </ToFLaueRefineProvider>
  </ToFLaueIntegrateProvider>
);

// The state.update targets this mode's contexts handle, and their reset
export const useToFLaueModeState = () => {
  const findSpots = useToFLaueFindSpotsContext();
  const index = useToFLaueIndexContext();
  const refine = useToFLaueRefineContext();
  const integrate = useToFLaueIntegrateContext();
  const updaters: Partial<Record<StateTarget, (params: Record<string, any>) => void>> = {
    find_spots: findSpots.updateParams,
    index: index.updateParams,
    refine: refine.updateParams,
    integrate: integrate.updateParams,
  };
  const reset = () => {
    findSpots.reset();
    index.reset();
    refine.reset();
    integrate.reset();
  };
  return { updaters, reset };
};
