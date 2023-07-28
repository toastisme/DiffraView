 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 
export function FileTree() {
  return (
    <Select disabled={true}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Active files..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Active files</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}