 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useRootContext } from "@/contexts/RootContext";
 
export function FileTree() {

  const {
    openFileKeys,
    currentFileKey,
    setCurrentFileKey,
    serverWS
  } = useRootContext();

  function updateCurrentFileKey(value: string){
    serverWS.current?.send(JSON.stringify({
                                        "channel" : "server",
                                        "command" : "update_active_file",
                                        "name" : value
    }));
    setCurrentFileKey(value);
  }

  return (
    <Select disabled={true} 
      onValueChange={(value)=>updateCurrentFileKey(value)}
      value={currentFileKey != "" ? currentFileKey : undefined}
      >
      <SelectTrigger className="w-[12vw]">
        <SelectValue placeholder="Active files...">
      
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Active files</SelectLabel>
          {openFileKeys.map((openFileKey) => {
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
