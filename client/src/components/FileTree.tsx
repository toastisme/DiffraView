 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 
export function FileTree(
  props:{
    activeFilenames : string[]
  }
) {
  return (
    <Select disabled={props.activeFilenames.length > 0 ? false : true}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Active files..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Active files</SelectLabel>
          {props.activeFilenames.map((activeFilename) => {
            return(
              <SelectItem key={activeFilename} value={activeFilename}>{activeFilename}</SelectItem>
            )
          })
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
