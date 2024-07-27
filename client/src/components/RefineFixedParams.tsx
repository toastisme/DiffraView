
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card } from "./ui/card"

export function RefineFixedParams(
  props: {
    addEntryToBasicOptions: (key: string, value: string) => void
  }) {

  return (
    <div>
      <Card>
        <Label style={{ marginLeft: 10 }}> Fixed Parameters </Label>
        <div className="grid grid-cols-4 gap-8" style={{ marginLeft: 10, marginBottom: 10 }}>
          <div className="col-start-1 col-end-2">
            <Label> Beam </Label>
            <RadioGroup defaultValue="none" className="text-xs" onValueChange={(value) => props.addEntryToBasicOptions("refinement.parameterisation.beam.fix", value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="none" id="r1" />
                <Label htmlFor="r1" className="text-xs">none</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="r2" />
                <Label htmlFor="r2" className="text-xs">all</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="in_spindle_plane" id="r3" />
                <Label htmlFor="r3" className="text-xs">in spindle plane</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="out_spindle_plane" id="r3" />
                <Label htmlFor="r3" className="text-xs">out spindle plane</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="col-start-2 col-end-3">
            <Label> Crystal </Label>
            <RadioGroup defaultValue="none" className="text-xs" onValueChange={(value) => props.addEntryToBasicOptions("refinement.parameterisation.crystal.fix", value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="none" id="r1" />
                <Label htmlFor="r1" className="text-xs">none</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="r2" />
                <Label htmlFor="r2" className="text-xs">all</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cell" id="r3" />
                <Label htmlFor="r3" className="text-xs">cell</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="orientation" id="r3" />
                <Label htmlFor="r3" className="text-xs">orientation</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="col-start-3 col-end-4">
            <Label> Detector </Label>
            <RadioGroup defaultValue="none" className="text-xs" onValueChange={(value) => props.addEntryToBasicOptions("refinement.parameterisation.detector.fix", value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="none" id="r1" />
                <Label htmlFor="r1" className="text-xs">none</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="r2" />
                <Label htmlFor="r2" className="text-xs">all</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="orientation" id="r3" />
                <Label htmlFor="r3" className="text-xs">orientation</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="distance" id="r3" />
                <Label htmlFor="r3" className="text-xs">distance</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="col-start-4 col-end-5">
            <Label> Goniometer </Label>
            <RadioGroup defaultValue="all" className="text-xs" onValueChange={(value) => props.addEntryToBasicOptions("refinement.parameterisation.goniometer.fix", value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="none" id="r1" />
                <Label htmlFor="r1" className="text-xs">none</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="r2" />
                <Label htmlFor="r2" className="text-xs">all</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="in_beam_plane" id="r3" />
                <Label htmlFor="r3" className="text-xs">in beam plane</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="out_beam_plane" id="r3" />
                <Label htmlFor="r3" className="text-xs">out beam plane</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </Card>
    </div>
  )
}
