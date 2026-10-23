import { MenubarItem } from "@/components/ui/menubar"
import { RotationSearchBeamPositionDialog } from "@/components/rotation/RotationSearchBeamPositionDialog"
import { useRotationBeamPositionContext } from "@/contexts/rotation/RotationBeamPositionContext"

// Rotation-only entries in the Utils menu
export function RotationUtilsMenuItems() {
  const { setOpen } = useRotationBeamPositionContext();
  return (
    <MenubarItem onClick={() => setOpen(true)}>
      Search Beam Position
    </MenubarItem>
  );
}

// Their dialogs, outside the menu so they stay open when it closes
export function RotationUtilsDialogs() {
  return <RotationSearchBeamPositionDialog />;
}
