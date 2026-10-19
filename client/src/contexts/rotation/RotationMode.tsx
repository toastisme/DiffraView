import { ReactNode } from 'react';
import { StateTarget } from '@/lib/protocol';
import { RotationFindSpotsProvider, useRotationFindSpotsContext } from './RotationFindSpotsContext';
import { RotationIndexProvider, useRotationIndexContext } from './RotationIndexContext';
import { RotationRefineProvider, useRotationRefineContext } from './RotationRefineContext';
import { RotationIntegrateProvider, useRotationIntegrateContext } from './RotationIntegrateContext';

export const RotationProviders = ({ children }: { children: ReactNode }) => (
  <RotationIntegrateProvider>
    <RotationRefineProvider>
      <RotationIndexProvider>
        <RotationFindSpotsProvider>{children}</RotationFindSpotsProvider>
      </RotationIndexProvider>
    </RotationRefineProvider>
  </RotationIntegrateProvider>
);

// The state.update targets this mode's contexts handle, and their reset
export const useRotationModeState = () => {
  const findSpots = useRotationFindSpotsContext();
  const index = useRotationIndexContext();
  const refine = useRotationRefineContext();
  const integrate = useRotationIntegrateContext();
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
