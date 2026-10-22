import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSave } from '@fortawesome/free-solid-svg-icons';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useRootContext } from "@/contexts/RootContext"
import {
  MERGE_DEFAULTS,
  RotationMergeParams,
  RotationUnmergedExportParams,
  useRotationScaleContext,
} from "@/contexts/rotation/RotationScaleContext"
import { Status } from "@/types"
import { withSelectedSavePath } from "@/lib/electron"

type MergeTextParam = { [K in keyof RotationMergeParams]: RotationMergeParams[K] extends string ? K : never }[keyof RotationMergeParams];
type MergeBoolParam = { [K in keyof RotationMergeParams]: RotationMergeParams[K] extends boolean ? K : never }[keyof RotationMergeParams];

// dials.merge Phil name of each param
const MERGE_PHIL_NAMES: Record<keyof RotationMergeParams, string> = {
  assessSpaceGroup: "assess_space_group",
  anomalous: "anomalous",
  truncate: "truncate",
  frenchWilsonImplementation: "french_wilson.implementation",
  frenchWilsonMinReflections: "french_wilson.min_reflections",
  fallbackToFlatPrior: "french_wilson.fallback_to_flat_prior",
  dMin: "d_min",
  dMax: "d_max",
  wavelengthTolerance: "wavelength_tolerance",
  combinePartials: "combine_partials",
  partialityThreshold: "partiality_threshold",
  bestUnitCell: "best_unit_cell",
  nResidues: "n_residues",
  useInternalVariance: "merging.use_internal_variance",
  nBins: "merging.n_bins",
  mergingAnomalous: "merging.anomalous",
  generateRFree: "r_free_flags.generate",
  rFreeFraction: "r_free_flags.fraction",
  rFreeUseLatticeSymmetry: "r_free_flags.use_lattice_symmetry",
  rFreeUseDatamanShells: "r_free_flags.use_dataman_shells",
  rFreeNShells: "r_free_flags.n_shells",
  rFreeExtend: "r_free_flags.extend",
  rFreeRelativeToCompleteSet: "r_free_flags.relative_to_complete_set",
  rFreeReference: "r_free_flags.reference",
};

const TRUNCATE_PARAMS: (keyof RotationMergeParams)[] = [
  "frenchWilsonImplementation", "frenchWilsonMinReflections", "fallbackToFlatPrior",
];
const R_FREE_PARAMS: (keyof RotationMergeParams)[] = [
  "rFreeFraction", "rFreeUseLatticeSymmetry", "rFreeUseDatamanShells", "rFreeNShells",
  "rFreeExtend", "rFreeRelativeToCompleteSet", "rFreeReference",
];

const NUMBER = /^-?\d*\.?\d+(e-?\d+)?$/i;
const INT = /^\d+$/;
const MERGE_VALIDATORS: Partial<Record<MergeTextParam, (value: string) => boolean>> = {
  frenchWilsonMinReflections: (v) => INT.test(v),
  dMin: (v) => NUMBER.test(v),
  dMax: (v) => NUMBER.test(v),
  wavelengthTolerance: (v) => NUMBER.test(v),
  partialityThreshold: (v) => NUMBER.test(v),
  bestUnitCell: (v) => v.split(/[\s,]+/).filter(Boolean).length === 6
    && v.split(/[\s,]+/).filter(Boolean).every((x) => NUMBER.test(x)),
  nResidues: (v) => INT.test(v),
  nBins: (v) => INT.test(v) && Number(v) >= 1,
  rFreeFraction: (v) => NUMBER.test(v) && Number(v) > 0 && Number(v) < 1,
  rFreeNShells: (v) => INT.test(v) && Number(v) >= 1,
};

const UNMERGED_VALIDATORS: Record<"minPartiality" | "minISigma", (value: string) => boolean> = {
  minPartiality: (v) => NUMBER.test(v),
  minISigma: (v) => NUMBER.test(v),
};

// Export of the scaled reflections: merged with dials.merge, or unmerged with
// dials.export
export function RotationScaleExport() {

  const { serverWS, stepPayload } = useRootContext();
  const {
    status,
    exportEnabled,
    exportType,
    setExportType,
    unmergedParams,
    setUnmergedParam,
    mergeParams,
    setMergeParam,
  } = useRotationScaleContext();

  const merged = exportType === "merged";

  // Params sent: those changed from DIALS' defaults, sub-options only if used
  const sentMergeParams = (Object.keys(MERGE_PHIL_NAMES) as (keyof RotationMergeParams)[]).filter((key) =>
    mergeParams[key] !== MERGE_DEFAULTS[key]
    && mergeParams[key] !== ""
    && (mergeParams.truncate || !TRUNCATE_PARAMS.includes(key))
    && (mergeParams.generateRFree || !R_FREE_PARAMS.includes(key)));

  const mergeInvalid = (key: MergeTextParam) => {
    const value = mergeParams[key].trim();
    const validator = MERGE_VALIDATORS[key];
    return value !== "" && validator !== undefined && !validator(value);
  };

  const unmergedInvalid = (key: "minPartiality" | "minISigma") => {
    const value = unmergedParams[key].trim();
    return value !== "" && !UNMERGED_VALIDATORS[key](value);
  };

  const anyInvalid = merged
    ? sentMergeParams.some((key) => typeof mergeParams[key] === "string" && mergeInvalid(key as MergeTextParam))
    : unmergedInvalid("minPartiality") || unmergedInvalid("minISigma");

  function mergeArgs(): Record<string, string> {
    const args: Record<string, string> = {};
    sentMergeParams.forEach((key) => {
      const value = mergeParams[key];
      args[MERGE_PHIL_NAMES[key]] = typeof value === "boolean"
        ? (value ? "True" : "False")
        : value.trim().split(/[\s,]+/).join(",");
    });
    return args;
  }

  function unmergedArgs(): Record<string, string> {
    return {
      "mtz.partiality_threshold": unmergedParams.minPartiality.trim() || "0.4",
      "mtz.min_isigi": unmergedParams.minISigma.trim() || "-5",
      "intensity": unmergedParams.intensity,
    };
  }

  async function exportReflections() {
    serverWS.current?.send(await withSelectedSavePath("workflow.run",
      stepPayload(merged ? "merge" : "export_scaled", { "args": merged ? mergeArgs() : unmergedArgs() }), {
      title: "Save file as",
      defaultName: merged ? "merged.mtz" : "scaled.mtz",
      filters: [{ name: "MTZ files", extensions: ["mtz"] }, { name: "All files", extensions: ["*"] }],
    }));
  }

  const select = (id: string, label: string, value: string, onChange: (value: string) => void, options: [string, string][]) => (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger id={id} className="h-8">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map(([v, text]) => <SelectItem key={v} value={v}>{text}</SelectItem>)}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );

  const mergeText = (key: MergeTextParam, label: string, className = "") => (
    <div className={`flex flex-col space-y-1.5 ${className}`}>
      <Label htmlFor={`rotationMerge-${key}`}>{label}</Label>
      <Input
        id={`rotationMerge-${key}`}
        placeholder={MERGE_DEFAULTS[key] || "None"}
        value={mergeParams[key]}
        onChange={(event) => setMergeParam(key, event.target.value)}
        style={{ borderColor: mergeInvalid(key) ? "red" : "" }}
        className="h-8"
      />
    </div>
  );

  const mergeToggle = (key: MergeBoolParam, label: string) => (
    <div className="flex items-center gap-2 h-8">
      <Switch id={`rotationMerge-${key}`} checked={mergeParams[key]} onCheckedChange={(checked) => setMergeParam(key, checked)} />
      <Label htmlFor={`rotationMerge-${key}`}>{label}</Label>
    </div>
  );

  const unmergedText = (key: "minPartiality" | "minISigma", label: string, placeholder: string) => (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor={`rotationScaleExport-${key}`}>{label}</Label>
      <Input
        id={`rotationScaleExport-${key}`}
        placeholder={placeholder}
        value={unmergedParams[key]}
        onChange={(event) => setUnmergedParam(key as keyof RotationUnmergedExportParams, event.target.value)}
        style={{ borderColor: unmergedInvalid(key) ? "red" : "" }}
        className="h-8"
      />
    </div>
  );

  const heading = (text: string) => (
    <p className="col-span-full text-sm font-medium text-muted-foreground pt-1">{text}</p>
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button disabled={!exportEnabled || status === Status.Loading}><FontAwesomeIcon icon={faSave} style={{ marginRight: '5px' }} /> Export</Button>
      </PopoverTrigger>
      <PopoverContent
        collisionPadding={16}
        className={merged ? "w-[42rem] max-h-[var(--radix-popover-content-available-height)] overflow-y-auto" : "w-72"}>
        <div className="flex flex-col gap-3">
          {select("rotationScaleExportType", "Reflections", exportType, setExportType, [
            ["merged", "Merged"], ["unmerged", "Unmerged"],
          ])}
          {merged ? (
            <div className="grid grid-cols-3 gap-x-4 gap-y-3 items-end [&_label]:whitespace-nowrap">
              {mergeToggle("assessSpaceGroup", "Assess Space Group")}
              {mergeToggle("anomalous", "Anomalous")}
              {mergeToggle("combinePartials", "Combine Partials")}
              {mergeText("dMin", "d min")}
              {mergeText("dMax", "d max")}
              {mergeText("partialityThreshold", "Partiality Threshold")}
              {mergeText("wavelengthTolerance", "Wavelength Tolerance")}
              {mergeText("nResidues", "Residues")}
              <div />
              {mergeText("bestUnitCell", "Best Unit Cell", "col-span-3")}

              {heading("Merging statistics")}
              {mergeToggle("useInternalVariance", "Internal Variance")}
              {mergeToggle("mergingAnomalous", "Anomalous")}
              {mergeText("nBins", "Bins")}

              {heading("Truncation")}
              {mergeToggle("truncate", "French & Wilson")}
              {mergeParams.truncate && (
                <>
                  {select("rotationMerge-frenchWilsonImplementation", "Implementation",
                    mergeParams.frenchWilsonImplementation,
                    (value) => setMergeParam("frenchWilsonImplementation", value),
                    [["dials", "dials"], ["cctbx", "cctbx"]])}
                  {mergeText("frenchWilsonMinReflections", "Min Reflections")}
                  {mergeToggle("fallbackToFlatPrior", "Fallback to Flat Prior")}
                </>
              )}

              {heading("R-free flags")}
              {mergeToggle("generateRFree", "Generate")}
              {mergeParams.generateRFree && (
                <>
                  {mergeText("rFreeFraction", "Fraction")}
                  {mergeText("rFreeNShells", "Shells")}
                  {mergeToggle("rFreeUseLatticeSymmetry", "Lattice Symmetry")}
                  {mergeToggle("rFreeUseDatamanShells", "Dataman Shells")}
                  {mergeToggle("rFreeRelativeToCompleteSet", "Relative to Complete")}
                  {select("rotationMerge-rFreeExtend", "Extend", mergeParams.rFreeExtend,
                    (value) => setMergeParam("rFreeExtend", value),
                    [["None", "auto"], ["True", "True"], ["False", "False"]])}
                  {mergeText("rFreeReference", "Reference", "col-span-2")}
                </>
              )}
            </div>
          ) : (
            <>
              {select("rotationScaleExportIntensity", "Intensity Type", unmergedParams.intensity,
                (value) => setUnmergedParam("intensity", value),
                [["scale", "scale"], ["sum", "sum"], ["profile", "profile"]])}
              {unmergedText("minPartiality", "Min Partiality", "0.4")}
              {unmergedText("minISigma", "Min I/σ", "-5")}
            </>
          )}
          <Button onClick={exportReflections} disabled={!exportEnabled || anyInvalid} className="self-end mt-1">
            <FontAwesomeIcon icon={faSave} style={{ marginRight: "5px" }} />
            Save MTZ
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
