
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 
export function FindSpotsAlgorithmSelect(
	props: {
    addEntryToBasicOptions : (key: string, value: string) => void
	}) {

  function updateFindSpotsAlgorithm(value: string): void{
    props.addEntryToBasicOptions("threshold.algorithm", value);
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
			<SelectItem value="radial_profile">radial profile</SelectItem>
		</SelectGroup>
		</SelectContent>
	</Select>
  )
}