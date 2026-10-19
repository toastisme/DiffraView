import { ComponentType } from "react"
import { useRootContext } from "@/contexts/RootContext"
import { ModeName, modeName } from "@/lib/modes"
import { PreImportAlgorithmTabs } from "@/components/pre_import/PreImportAlgorithmTabs"
import { PreImportReflectionTableSheet } from "@/components/pre_import/PreImportReflectionTableSheet"
import { ToFLaueAlgorithmTabs } from "@/components/tof_laue/ToFLaueAlgorithmTabs"
import { ToFLaueReflectionTableSheet } from "@/components/tof_laue/ToFLaueReflectionTable"
import { RotationAlgorithmTabs } from "@/components/rotation/RotationAlgorithmTabs"
import { RotationReflectionTableSheet } from "@/components/rotation/RotationReflectionTable"

interface ModeComponents {
  AlgorithmTabs: ComponentType;
  ReflectionTableSheet: ComponentType;
}

const PRE_IMPORT: ModeComponents = {
  AlgorithmTabs: PreImportAlgorithmTabs,
  ReflectionTableSheet: PreImportReflectionTableSheet,
};

const MODE_COMPONENTS: Record<ModeName, ModeComponents> = {
  tof_laue: {
    AlgorithmTabs: ToFLaueAlgorithmTabs,
    ReflectionTableSheet: ToFLaueReflectionTableSheet,
  },
  rotation: {
    AlgorithmTabs: RotationAlgorithmTabs,
    ReflectionTableSheet: RotationReflectionTableSheet,
  },
};

function useModeComponents(): ModeComponents {
  const { capabilities } = useRootContext();
  const mode = modeName(capabilities.experimentType);
  return mode === null ? PRE_IMPORT : MODE_COMPONENTS[mode];
}

export function AlgorithmTabs() {
  const { AlgorithmTabs } = useModeComponents();
  return <AlgorithmTabs/>;
}

export function ReflectionTableSheet() {
  const { ReflectionTableSheet } = useModeComponents();
  return <ReflectionTableSheet/>;
}
