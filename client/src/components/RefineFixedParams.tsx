
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card } from "./ui/card"

export function RefineFixedParams(
  props: {
    beamFix: string;
    crystalFix: string;
    detectorFix: string;
    goniometerFix: string;
    onBeamFixChange: (value: string) => void;
    onCrystalFixChange: (value: string) => void;
    onDetectorFixChange: (value: string) => void;
    onGoniometerFixChange: (value: string) => void;
  }) {

  return (
    <div>
      <Card>
        <Label style={{ marginLeft: 10 }}> Fixed Parameters </Label>
        <div className="grid grid-cols-4 gap-8" style={{ marginLeft: 10, marginBottom: 10 }}>
          <div className="col-start-1 col-end-2">
            <Label> Beam </Label>
            <RadioGroup value={props.beamFix} className="text-xs" onValueChange={props.onBeamFixChange}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="none" id="beam-none" />
                <Label htmlFor="beam-none" className="text-xs">none</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="beam-all" />
                <Label htmlFor="beam-all" className="text-xs">all</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="in_spindle_plane" id="beam-in-spindle" />
                <Label htmlFor="beam-in-spindle" className="text-xs">in spindle plane</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="out_spindle_plane" id="beam-out-spindle" />
                <Label htmlFor="beam-out-spindle" className="text-xs">out spindle plane</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="col-start-2 col-end-3">
            <Label> Crystal </Label>
            <RadioGroup value={props.crystalFix} className="text-xs" onValueChange={props.onCrystalFixChange}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="none" id="crystal-none" />
                <Label htmlFor="crystal-none" className="text-xs">none</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="crystal-all" />
                <Label htmlFor="crystal-all" className="text-xs">all</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cell" id="crystal-cell" />
                <Label htmlFor="crystal-cell" className="text-xs">cell</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="orientation" id="crystal-orientation" />
                <Label htmlFor="crystal-orientation" className="text-xs">orientation</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="col-start-3 col-end-4">
            <Label> Detector </Label>
            <RadioGroup value={props.detectorFix} className="text-xs" onValueChange={props.onDetectorFixChange}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="none" id="detector-none" />
                <Label htmlFor="detector-none" className="text-xs">none</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="detector-all" />
                <Label htmlFor="detector-all" className="text-xs">all</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="orientation" id="detector-orientation" />
                <Label htmlFor="detector-orientation" className="text-xs">orientation</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="distance" id="detector-distance" />
                <Label htmlFor="detector-distance" className="text-xs">distance</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="col-start-4 col-end-5">
            <Label> Goniometer </Label>
            <RadioGroup value={props.goniometerFix} className="text-xs" onValueChange={props.onGoniometerFixChange}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="none" id="goniometer-none" />
                <Label htmlFor="goniometer-none" className="text-xs">none</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="goniometer-all" />
                <Label htmlFor="goniometer-all" className="text-xs">all</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="in_beam_plane" id="goniometer-in-beam" />
                <Label htmlFor="goniometer-in-beam" className="text-xs">in beam plane</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="out_beam_plane" id="goniometer-out-beam" />
                <Label htmlFor="goniometer-out-beam" className="text-xs">out beam plane</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </Card>
    </div>
  )
}
