import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface AlgorithmResetWarningProps {
  open: boolean
  algorithmsThatWillReset: string[]
  onConfirm: () => void
  onCancel: () => void
}

export function AlgorithmResetWarning({
  open,
  algorithmsThatWillReset,
  onConfirm,
  onCancel,
}: AlgorithmResetWarningProps) {
  return (
    <Dialog open={open} onOpenChange={(isOpen) => { if (!isOpen) onCancel(); }}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Results will be reset</DialogTitle>
          <DialogDescription>
            Re-running this algorithm will reset the following:{" "}
            <strong>{algorithmsThatWillReset.join(", ")}</strong>.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="secondary" onClick={onCancel}>Cancel</Button>
          <Button onClick={onConfirm}>Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
