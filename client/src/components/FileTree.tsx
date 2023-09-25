 
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
    activeFilenames : string[],
    activeFilename: string,
    setActiveFilename: React.Dispatch<React.SetStateAction<string>>,
    serverWS: React.MutableRefObject<WebSocket | null>} 
  
) {

  function updateActiveFile(value: string){
    props.serverWS.current?.send(JSON.stringify({
                                        "channel" : "server",
                                        "command" : "update_active_file",
                                        "name" : value
    }));
    props.setActiveFilename(value);
  }

  return (
    <Select disabled={props.activeFilenames.length > 0 ? false : true} 
      onValueChange={(value)=>updateActiveFile(value)}
      value={props.activeFilename != "" ? props.activeFilename : undefined}
      >
      <SelectTrigger className="w-[12vw]">
        <SelectValue placeholder="Active files...">
      
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Active files</SelectLabel>
          {props.activeFilenames.map((activeFilename) => {
            return(
              <SelectItem 
                key={activeFilename} 
                value={activeFilename}>
                {activeFilename}</SelectItem>
            )
          })
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
