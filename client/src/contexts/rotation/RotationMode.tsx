import { ReactNode } from 'react';
import { StateTarget } from '@/lib/protocol';
import { RotationFindSpotsProvider, useRotationFindSpotsContext } from './RotationFindSpotsContext';
import { RotationIndexProvider, useRotationIndexContext } from './RotationIndexContext';
import { RotationRefineProvider, useRotationRefineContext } from './RotationRefineContext';
import { RotationIntegrateProvider, useRotationIntegrateContext } from './RotationIntegrateContext';
import { RotationScaleProvider, useRotationScaleContext } from './RotationScaleContext';

export const RotationProviders = ({ children }: { children: ReactNode }) => (
  <RotationScaleProvider>
    <RotationIntegrateProvider>
      <RotationRefineProvider>
        <RotationIndexProvider>
          <RotationFindSpotsProvider>{children}</RotationFindSpotsProvider>
        </RotationIndexProvider>
      </RotationRefineProvider>
    </RotationIntegrateProvider>
  </RotationScaleProvider>
);

// The state.update targets this mode's contexts handle, and their reset
export const useRotationModeState = () => {
  const findSpots = useRotationFindSpotsContext();
  const index = useRotationIndexContext();
  const refine = useRotationRefineContext();
  const integrate = useRotationIntegrateContext();
  const scale = useRotationScaleContext();
  const updaters: Partial<Record<StateTarget, (params: Record<string, any>) => void>> = {
    find_spots: findSpots.updateParams,
    index: index.updateParams,
    refine: refine.updateParams,
    integrate: integrate.updateParams,
    scale: scale.updateParams,
  };
  const reset = () => {
    findSpots.reset();
    index.reset();
    refine.reset();
    integrate.reset();
    scale.reset();
  };
  return { updaters, reset };
};
