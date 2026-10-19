import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTable } from '@fortawesome/free-solid-svg-icons';

// Before import there are no reflections
export function PreImportReflectionTableSheet() {
  return (
    <Button variant="outline" disabled><FontAwesomeIcon icon={faTable} style={{ marginRight: '5px' }} /> Reflection Table</Button>
  )
}
