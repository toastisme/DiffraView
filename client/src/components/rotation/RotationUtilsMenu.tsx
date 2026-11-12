import { MenubarItem } from "@/components/ui/menubar"
import { RotationSearchBeamPositionDialog } from "@/components/rotation/RotationSearchBeamPositionDialog"
import { RotationTwoThetaRefineDialog } from "@/components/rotation/RotationTwoThetaRefineDialog"
import { useRotationBeamPositionContext } from "@/contexts/rotation/RotationBeamPositionContext"
import { useRotationTwoThetaRefineContext } from "@/contexts/rotation/RotationTwoThetaRefineContext"

// Rotation-only entries in the Utils menu
export function RotationUtilsMenuItems() {
  const { setOpen } = useRotationBeamPositionContext();
  const twoThetaRefine = useRotationTwoThetaRefineContext();
  return (
    <>
      <MenubarItem onClick={() => setOpen(true)}>
        Search Beam Position
      </MenubarItem>
      {/* Needs integrated or scaled reflections */}
      <MenubarItem disabled={twoThetaRefine.inputs.length === 0} onClick={() => twoThetaRefine.setOpen(true)}>
        Refine Cell (2θ)
      </MenubarItem>
    </>
  );
}

// Their dialogs, outside the menu so they stay open when it closes
export function RotationUtilsDialogs() {
  return (
    <>
      <RotationSearchBeamPositionDialog />
      <RotationTwoThetaRefineDialog />
    </>
  );
}
