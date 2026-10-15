import { useEffect } from "react"
import { useRootContext } from "@/contexts/RootContext"
import { ViewerName } from "@/lib/protocol"

// Keeps a viewer context's `hidden` flag in step with the active state tab.
export function useSyncHidden(id: ViewerName, setHidden: (hidden: boolean) => void) {
  const { activeStateTab } = useRootContext();
  useEffect(() => {
    setHidden(activeStateTab !== id);
  }, [activeStateTab]);
}
