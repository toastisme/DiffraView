import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useIndexContext } from "@/contexts/IndexContext"

export function IndexAlgorithmSelect() {

  const { indexingMethod, setIndexingMethod, outlierAlgorithm, setOutlierAlgorithm } = useIndexContext();

  return (
	<div className="grid grid-cols-2 gap-8">
		<div>
			<Label>Indexing Algorithm</Label>
			<Select value={indexingMethod} onValueChange={setIndexingMethod}>
				<SelectTrigger>
				<SelectValue />
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
			<Select value={outlierAlgorithm} onValueChange={setOutlierAlgorithm}>
				<SelectTrigger>
				<SelectValue />
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
