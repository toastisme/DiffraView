 
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
    openFileKeys : string[],
    currentFileKey: string,
    setCurrentFileKey: React.Dispatch<React.SetStateAction<string>>,
    serverWS: React.MutableRefObject<WebSocket | null>} 
  
) {

  function updateCurrentFileKey(value: string){
    props.serverWS.current?.send(JSON.stringify({
                                        "channel" : "server",
                                        "command" : "update_active_file",
                                        "name" : value
    }));
    props.setCurrentFileKey(value);
  }

  return (
    <Select disabled={true} 
      onValueChange={(value)=>updateCurrentFileKey(value)}
      value={props.currentFileKey != "" ? props.currentFileKey : undefined}
      >
      <SelectTrigger className="w-[12vw]">
        <SelectValue placeholder="Active files...">
      
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Active files</SelectLabel>
          {props.openFileKeys.map((openFileKey) => {
            return(
              <SelectItem 
                key={openFileKey} 
                value={openFileKey}>
                {openFileKey}</SelectItem>
            )
          })
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
