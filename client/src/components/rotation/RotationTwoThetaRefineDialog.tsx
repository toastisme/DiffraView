import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faStop, faFileText } from '@fortawesome/free-solid-svg-icons';
import { useRootContext } from "@/contexts/RootContext"
import {
  RotationTwoThetaRefineParams as TwoThetaRefineParams,
  TWO_THETA_REFINE_DEFAULTS,
  UnitCell,
  useRotationTwoThetaRefineContext,
} from "@/contexts/rotation/RotationTwoThetaRefineContext"
import { serverMessage } from "@/lib/protocol"
import { Status } from "@/types"

type BoolParam = { [K in keyof TwoThetaRefineParams]: TwoThetaRefineParams[K] extends boolean ? K : never }[keyof TwoThetaRefineParams];

// dials.two_theta_refine Phil name of each option
const PHIL_NAMES: Partial<Record<keyof TwoThetaRefineParams, string>> = {
  filterIntegratedCentroids: "refinement.filter_integrated_centroids",
  partialityThreshold: "refinement.partiality_threshold",
  combineCrystalModels: "refinement.combine_crystal_models",
  triclinic: "refinement.triclinic",
};
const FORMATS = ["cif", "mmcif", "p4p"] as const;

const INPUT_LABELS: Record<string, string> = {
  scale: "Scaled",
  integrate: "Integrated",
  apply_symmetry: "Integrated (symmetry applied)",
};

const NUMBER = /^-?\d*\.?\d+$/;

const CELL_HEADER = ["a (Å)", "b (Å)", "c (Å)", "α (°)", "β (°)", "γ (°)", "Volume (Å³)"];

const withSd = (value: number, sd: number | undefined, digits: number) =>
  sd === undefined ? value.toFixed(digits) : `${value.toFixed(digits)} ± ${sd.toFixed(digits + 1)}`;

// Cells before and after refinement, one pair per crystal
function UnitCellTable({ input, refined }: { input: UnitCell[], refined: UnitCell[] }) {
  const several = Math.max(input.length, refined.length) > 1;
  const row = (label: string, cell: UnitCell) => (
    <tr key={`${label}-${cell.experiment}`}>
      <td className="px-3 py-1 whitespace-nowrap">{label}{several ? ` (experiment ${cell.experiment})` : ""}</td>
      {cell.parameters.map((v, i) => (
        <td key={i} className="px-3 py-1 text-right tabular-nums whitespace-nowrap">{withSd(v, cell.sd?.[i], i < 3 ? 4 : 3)}</td>
      ))}
      <td className="px-3 py-1 text-right tabular-nums whitespace-nowrap">{withSd(cell.volume, cell.volumeSd, 1)}</td>
    </tr>
  );
  return (
    <div className="overflow-x-auto">
      <table className="text-sm">
        <thead>
          <tr className="text-muted-foreground">
            <th />
            {CELL_HEADER.map((h) => <th key={h} className="px-3 py-1 font-normal text-right">{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {input.map((cell) => row("Input", cell))}
          {refined.map((cell) => row("Refined", cell))}
        </tbody>
      </table>
    </div>
  );
}

// Utils, Refine Cell: dials.two_theta_refine on the scaled or integrated
// files, for the cell and its standard uncertainties (and CIF / p4p files)
export function RotationTwoThetaRefineDialog() {

  const { serverWS } = useRootContext();
  const {
    open,
    setOpen,
    params,
    setParam,
    inputs,
    inputFrom,
    setInputFrom,
    result,
    setResult,
  } = useRotationTwoThetaRefineContext();

  const running = result.status === Status.Loading;
  // Scaled if available, unless another input was chosen
  const input = inputs.includes(inputFrom) ? inputFrom : inputs[0] ?? "";
  const partialityInvalid = !NUMBER.test(params.partialityThreshold.trim());

  function args(): Record<string, string> {
    const sent: Record<string, string> = {};
    (Object.keys(PHIL_NAMES) as (keyof TwoThetaRefineParams)[]).forEach((key) => {
      const value = params[key];
      if (value === TWO_THETA_REFINE_DEFAULTS[key]) return;
      sent[PHIL_NAMES[key]!] = typeof value === "boolean" ? (value ? "True" : "False") : value.trim();
    });
    return sent;
  }

  const run = () => {
    setResult({ status: Status.Loading, log: "", inputCells: [], refinedCells: [], refinedExpt: null, files: [] });
    serverWS.current?.send(serverMessage("two_theta_refine.run", {
      "args": args(),
      "input_from": input,
      "formats": FORMATS.filter((f) => params[f]),
    }));
  };

  const stop = () => {
    serverWS.current?.send(serverMessage("two_theta_refine.cancel"));
  };

  const toggle = (key: BoolParam, label: string) => (
    <div className="flex items-center gap-2 h-8">
      <Switch id={`twoThetaRefine-${key}`} checked={params[key]} onCheckedChange={(checked) => setParam(key, checked)} />
      <Label htmlFor={`twoThetaRefine-${key}`}>{label}</Label>
    </div>
  );

  const heading = (label: string) => (
    <p className="col-span-full text-sm font-medium text-muted-foreground pt-1">{label}</p>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-none w-[90vw] md:w-[90vw] h-[85vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Refine Cell (2θ)</DialogTitle>
          <DialogDescription>dials.two_theta_refine on the scaled or integrated reflections</DialogDescription>
        </DialogHeader>
        <div className="flex-1 flex gap-6 min-h-0">
          <div className="w-[30rem] shrink-0 overflow-y-auto pr-2">
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 items-end [&_label]:whitespace-nowrap">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="twoThetaRefine-input">Input</Label>
                <Select value={input} onValueChange={setInputFrom} disabled={inputs.length === 0}>
                  <SelectTrigger id="twoThetaRefine-input" className="h-8">
                    <SelectValue placeholder="Integrate first" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {inputs.map((step) => <SelectItem key={step} value={step}>{INPUT_LABELS[step] ?? step}</SelectItem>)}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="twoThetaRefine-partialityThreshold">Partiality Threshold</Label>
                <Input
                  id="twoThetaRefine-partialityThreshold"
                  placeholder={TWO_THETA_REFINE_DEFAULTS.partialityThreshold}
                  value={params.partialityThreshold}
                  onChange={(event) => setParam("partialityThreshold", event.target.value)}
                  style={{ borderColor: partialityInvalid ? "red" : "" }}
                  className="h-8"
                />
              </div>
              {toggle("filterIntegratedCentroids", "Filter Integrated Centroids")}
              {toggle("combineCrystalModels", "Combine Crystal Models")}
              {toggle("triclinic", "Triclinic (P 1)")}
              <div />
              {heading("Output (in the two_theta_refine folder)")}
              {toggle("cif", "CIF")}
              {toggle("mmcif", "mmCIF")}
              {toggle("p4p", "p4p (XPREP)")}
            </div>
            <div className="flex gap-2 mt-4">
              {running ? (
                <Button onClick={stop}>
                  <FontAwesomeIcon icon={faStop} style={{ marginRight: '5px' }} />Stop
                </Button>
              ) : (
                <Button onClick={run} disabled={partialityInvalid || input === ""}>
                  <FontAwesomeIcon icon={faPlay} style={{ marginRight: '5px' }} />Run
                </Button>
              )}
              <a href="https://dials.github.io/documentation/programs/dials_two_theta_refine.html" target="_blank">
                <Button variant={"secondary"}><FontAwesomeIcon icon={faFileText} style={{ marginRight: '5px' }} />Documentation</Button>
              </a>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-3 min-w-0 min-h-0">
            {(result.inputCells.length > 0 || result.refinedCells.length > 0) && (
              <UnitCellTable input={result.inputCells} refined={result.refinedCells} />
            )}
            {result.files.length > 0 && (
              <div className="text-sm">
                <p className="text-muted-foreground">Written</p>
                {result.files.map((path) => <p key={path} className="font-mono break-all">{path}</p>)}
              </div>
            )}
            <div className="flex-1 flex flex-col gap-3 overflow-y-auto min-h-0">
              <Card className={running ? "border border-foreground" : result.status === Status.Failed ? "border border-red-500" : ""}>
                <CardHeader>
                  <CardDescription>DIALS Output</CardDescription>
                </CardHeader>
                <CardContent>
                  {running && <p className="text-sm text-muted-foreground">Refining...</p>}
                  <div dangerouslySetInnerHTML={{ __html: result.log }} />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
