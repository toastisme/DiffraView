import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 
export function IndexAlgorithmSelect(
	props: {
    addEntryToBasicOptions : (key: string, value: string) => void
	}) {

  function updateIndexAlgorithm(name: string, value: string): void{
	props.addEntryToBasicOptions(name, value);
  }

  return (
	<div className="grid grid-cols-2 gap-8"> 
		<div>
			<Label>Indexing Algorithm</Label>
			<Select onValueChange={(value) => updateIndexAlgorithm("indexing.method", value)}>
				<SelectTrigger >
				<SelectValue placeholder="fft3d" defaultValue={"fft3d"} />
				</SelectTrigger>
				<SelectContent>
				<SelectGroup>
					<SelectItem value="fft3d">fft3d</SelectItem>
					<SelectItem value="fft1d">fft1d</SelectItem>
					<SelectItem value="real_space_grid_search">real space grid search</SelectItem>
				</SelectGroup>
				</SelectContent>
			</Select>
		</div>
		<div>
			<Label>Outlier Algorithm</Label>
			<Select onValueChange={(value) => updateIndexAlgorithm("refinement.reflections.outlier.algorithm", value)}>
				<SelectTrigger >
				<SelectValue placeholder="auto" defaultValue={"auto"} />
				</SelectTrigger>
				<SelectContent>
				<SelectGroup>
					<SelectItem value="auto">auto</SelectItem>
					<SelectItem value="none">none</SelectItem>
					<SelectItem value="mcd">mcd</SelectItem>
					<SelectItem value="tukey">tukey</SelectItem>
					<SelectItem value="sauter_poon">sauter poon</SelectItem>
				</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	</div>
  )
}