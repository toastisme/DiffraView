
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 
export function FindSpotsAlgorithmSelect(
	props:{serverWS: React.MutableRefObject<WebSocket | null>}) {

  function updateFindSpotsAlgorithm(value: string): void{
    props.serverWS.current?.send(JSON.stringify({
    "channel": "server",
    "command": "dials.update_algorithm_arg", 
    "algorithm_type" : "dials.find_spots",
    "param_name" : "threshold.algorithm",
    "param_value" : value
    }));
  }
  return (
	<Select onValueChange={updateFindSpotsAlgorithm}>
		<SelectTrigger >
		<SelectValue placeholder="dispersion extended" defaultValue={"dispersion_extended"} />
		</SelectTrigger>
		<SelectContent>
		<SelectGroup>
			<SelectItem value="dispersion_extended">dispersion extended</SelectItem>
			<SelectItem value="dispersion">dispersion</SelectItem>
		</SelectGroup>
		</SelectContent>
	</Select>
  )
}