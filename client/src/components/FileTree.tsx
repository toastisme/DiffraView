 
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
    serverWS: React.MutableRefObject<WebSocket | null>} 
  
) {


  function updateActiveFile(value: string){
    console.log("updating active file to ", value);
    props.serverWS.current?.send(JSON.stringify({
					"channel" : "server",
					"command" : "update_active_file",
                                        "name" : value
    }));

  }

  return (
    <Select disabled={props.activeFilenames.length > 0 ? false : true} onValueChange={(value)=>updateActiveFile(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Active files..." >
      
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
