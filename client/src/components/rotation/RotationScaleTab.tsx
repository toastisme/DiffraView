import { serverMessage } from "@/lib/protocol";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { AdvancedOptionsSearch } from "@/components/AdvancedOptionsSearch"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { MouseEvent, useRef, useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faStop, faFileText, faFloppyDisk, faFolderOpen, faChartLine } from '@fortawesome/free-solid-svg-icons';
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
import { RotationScaleExport } from "@/components/rotation/RotationScaleExport"
import { useRootContext } from "@/contexts/RootContext"
import { useRotationIntegrateContext } from "@/contexts/rotation/RotationIntegrateContext"
import { RotationScaleParams, SCALE_DEFAULTS, useRotationScaleContext } from "@/contexts/rotation/RotationScaleContext"
import { Status } from "@/types"
import { advancedOptionsPhil, advancedOptionsToPhil, withAdvancedOptions } from "@/utils"
import { PHIL_FILTERS, withSelectedPaths, withSelectedSavePath } from "@/lib/electron"

type TextParam = { [K in keyof RotationScaleParams]: RotationScaleParams[K] extends string ? K : never }[keyof RotationScaleParams];
type BoolParam = { [K in keyof RotationScaleParams]: RotationScaleParams[K] extends boolean ? K : never }[keyof RotationScaleParams];

// dials.scale Phil name of each param
const PHIL_NAMES: Record<keyof RotationScaleParams, string> = {
  model: "model",
  anomalous: "anomalous",
  overwriteExistingModels: "overwrite_existing_models",
  reflectionSelectionMethod: "reflection_selection.method",
  isigmaCutoff: "reflection_selection.random.multi_dataset.Isigma_cutoff",
  bestUnitCell: "reflection_selection.best_unit_cell",
  stillsMinIsigma: "weighting.error_model.basic.stills.min_Isigma",
  stillsMinMultiplicity: "weighting.error_model.basic.stills.min_multiplicity",
  resetErrorModel: "weighting.error_model.reset_error_model",
  errorModelGroup: "weighting.error_model.error_model_group",
  checkConsistentIndexing: "scaling_options.check_consistent_indexing",
  filteringMethod: "filtering.method",
  maxCycles: "filtering.deltacchalf.max_cycles",
  maxPercentRemoved: "filtering.deltacchalf.max_percent_removed",
  minCompleteness: "filtering.deltacchalf.min_completeness",
  deltaCCHalfMode: "filtering.deltacchalf.mode",
  groupSize: "filtering.deltacchalf.group_size",
  stdCutoff: "filtering.deltacchalf.stdcutoff",
};

const FILTERING_PARAMS: (keyof RotationScaleParams)[] = [
  "maxCycles", "maxPercentRemoved", "minCompleteness", "deltaCCHalfMode", "groupSize", "stdCutoff",
];

// Which values each text field accepts (lists may use commas or spaces)
const NUMBER = /^-?\d*\.?\d+$/;
const INT = /^\d+$/;
const VALIDATORS: Partial<Record<TextParam, (value: string) => boolean>> = {
  isigmaCutoff: (v) => NUMBER.test(v),
  bestUnitCell: (v) => v.split(/[\s,]+/).filter(Boolean).length === 6
    && v.split(/[\s,]+/).filter(Boolean).every((x) => NUMBER.test(x)),
  stillsMinIsigma: (v) => NUMBER.test(v),
  stillsMinMultiplicity: (v) => INT.test(v),
  errorModelGroup: (v) => v.split(/[\s,]+/).filter(Boolean).every((x) => INT.test(x)),
  maxCycles: (v) => INT.test(v) && Number(v) >= 1,
  maxPercentRemoved: (v) => NUMBER.test(v),
  minCompleteness: (v) => NUMBER.test(v) && Number(v) >= 0 && Number(v) <= 100,
  groupSize: (v) => INT.test(v) && Number(v) >= 1,
  stdCutoff: (v) => NUMBER.test(v),
};

// Scale for rotation data (dials.scale) of the integrated reflections, or
// those with the symmetry applied in the Integrate tab
export function RotationScaleTab() {

  const { serverWS, stepPayload } = useRootContext();
  const { exportSpaceGroups } = useRotationIntegrateContext();

  const {
    status,
    setStatus,
    log,
    setLog,
    params,
    setParam,
    advancedOptions,
    setAdvancedOptions,
    advancedDefinitions,
    enabled,
    inputFrom,
    setInputFrom,
    reportAvailable,
    report,
    setReport,
  } = useRotationScaleContext();

  const [reportOpen, setReportOpen] = useState<boolean>(false);

  const cardContentRef = useRef<HTMLDivElement | null>(null);
  const symmetryApplied = "apply_symmetry" in exportSpaceGroups;
  const deltaCCHalf = params.filteringMethod === "deltacchalf";

  // Params sent: those changed from DIALS' defaults, filtering only if used
  const sentParams = (Object.keys(PHIL_NAMES) as (keyof RotationScaleParams)[]).filter((key) =>
    params[key] !== SCALE_DEFAULTS[key]
    && params[key] !== ""
    && (deltaCCHalf || !FILTERING_PARAMS.includes(key))
    && (key !== "groupSize" || params.deltaCCHalfMode === "image_group"));

  const invalid = (key: TextParam) => {
    const value = params[key].trim();
    const validator = VALIDATORS[key];
    return value !== "" && validator !== undefined && !validator(value);
  };
  const anyInvalid = sentParams.some((key) => typeof params[key] === "string" && invalid(key as TextParam));

  function philValue(key: keyof RotationScaleParams): string {
    const value = params[key];
    if (typeof value === "boolean") {
      return value ? "True" : "False";
    }
    // Lists (unit cell, error model group) as DIALS writes them
    return value.trim().split(/[\s,]+/).join(",");
  }

  function getAlgorithmOptions(): Record<string, string | string[]> {
    const args: Record<string, string> = {};
    sentParams.forEach((key) => {
      args[PHIL_NAMES[key]] = philValue(key);
    });
    return withAdvancedOptions(args, advancedOptions);
  }

  const buildPhilContent = (): string => {
    const options = sentParams.map((key) => `${PHIL_NAMES[key]}=${philValue(key)}`).join(" ");
    return (advancedOptionsToPhil(options) + advancedOptionsPhil(advancedOptions)).trimStart();
  };

  // The symmetry applied in the Integrate tab unless chosen otherwise
  useEffect(() => {
    setInputFrom(symmetryApplied ? "apply_symmetry" : "integrate");
  }, [symmetryApplied]);

  const scale = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setStatus(Status.Loading);
    setLog("");
    serverWS.current?.send(serverMessage("workflow.run", stepPayload("scale", {
      "args": getAlgorithmOptions(),
      "input_from": symmetryApplied ? inputFrom : "integrate",
    })));
  };

  // The report is fetched each time, as scaling again replaces it
  const showReport = () => {
    setReport("");
    setReportOpen(true);
    serverWS.current?.send(serverMessage("workflow.get_report", { "step": "scale" }));
  };

  const cancelScale = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    serverWS.current?.send(serverMessage("session.cancel"));
  };

  const savePhil = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    serverWS.current?.send(await withSelectedSavePath("workflow.save_params", {
      "step": "scale",
      "content": buildPhilContent()
    }, { title: "Save scale Phil file", defaultName: "scale.phil", filters: PHIL_FILTERS }));
  };

  const loadPhil = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    serverWS.current?.send(await withSelectedPaths("workflow.load_params", {
      "step": "scale"
    }, { title: "Select Phil file", filters: PHIL_FILTERS }));
  };

  useEffect(() => {
    const cardContentElement = cardContentRef.current;
    if (cardContentElement) {
      cardContentElement.scrollTop = cardContentElement.scrollHeight;
    }
  }, [log]);

  const choice = (key: TextParam, label: string, options: [string, string][], width = "w-40") => (
    <div className="flex flex-col">
      <Label htmlFor={`rotationScale-${key}`}>{label}</Label>
      <div className={width}>
        <Select value={params[key]} onValueChange={(value) => setParam(key, value)}>
          <SelectTrigger id={`rotationScale-${key}`}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {options.map(([value, text]) => <SelectItem key={value} value={value}>{text}</SelectItem>)}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const text = (key: TextParam, label: string, width = "w-20") => (
    <div className="flex flex-col">
      <Label htmlFor={`rotationScale-${key}`}>{label}</Label>
      <div className={width}>
        <Input
          id={`rotationScale-${key}`}
          placeholder={SCALE_DEFAULTS[key] || "None"}
          value={params[key]}
          onChange={(event) => setParam(key, event.target.value)}
          style={{ borderColor: invalid(key) ? "red" : "" }} />
      </div>
    </div>
  );

  const toggle = (key: BoolParam, label: string) => (
    <div className="flex items-center gap-2 h-10 self-end">
      <Switch id={`rotationScale-${key}`} checked={params[key]} onCheckedChange={(checked) => setParam(key, checked)} />
      <Label htmlFor={`rotationScale-${key}`}>{label}</Label>
    </div>
  );

  return (
    <>
    <Dialog open={reportOpen} onOpenChange={setReportOpen}>
      <DialogContent className="max-w-none w-[80vw] md:w-[80vw] h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Scaling Report</DialogTitle>
          <DialogDescription>dials.scale.html</DialogDescription>
        </DialogHeader>
        {report ? (
          // White as the report has no dark theme
          <iframe title="Scaling Report" srcDoc={report} className="flex-1 w-full rounded-md bg-white" />
        ) : (
          <p className="text-sm text-muted-foreground">Loading report...</p>
        )}
      </DialogContent>
    </Dialog>
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex flex-wrap items-center gap-4">
          <div>
            {status !== Status.Loading ? (
              <Button onClick={scale} disabled={anyInvalid}><FontAwesomeIcon icon={faPlay} style={{ marginRight: '5px', marginTop: "0px" }} />Run </Button>
            ) : (
              <Button onClick={cancelScale}><FontAwesomeIcon icon={faStop} style={{ marginRight: '5px', marginTop: "0px" }} />Stop </Button>
            )}
          </div>
          <RotationScaleExport />
          {reportAvailable && status !== Status.Loading && (
            <Button variant={"secondary"} onClick={showReport}>
              <FontAwesomeIcon icon={faChartLine} style={{ marginRight: '5px', marginTop: "0px" }} />Scaling Report
            </Button>
          )}
          {/* Only a choice once symmetry has been applied in the Integrate tab */}
          {symmetryApplied && (
            <div className="flex items-center gap-2">
              <Label htmlFor="rotationScaleInput" className="whitespace-nowrap">Input</Label>
              <div className="w-56">
                <Select value={inputFrom} onValueChange={setInputFrom}>
                  <SelectTrigger id="rotationScaleInput">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="integrate">
                        Integrated{exportSpaceGroups.integrate ? ` (${exportSpaceGroups.integrate})` : ""}
                      </SelectItem>
                      <SelectItem value="apply_symmetry">
                        Applied symmetry{exportSpaceGroups.apply_symmetry ? ` (${exportSpaceGroups.apply_symmetry})` : ""}
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          <div className="ml-auto flex gap-2">
            <Button variant={"secondary"} onClick={savePhil}><FontAwesomeIcon icon={faFloppyDisk} style={{ marginRight: '5px', marginTop: "0px" }} />Save</Button>
            <Button variant={"secondary"} onClick={loadPhil}><FontAwesomeIcon icon={faFolderOpen} style={{ marginRight: '5px', marginTop: "0px" }} />Load</Button>
            <a href="https://dials.github.io/documentation/programs/dials_scale.html" target="_blank">
              <Button variant={"secondary"}><FontAwesomeIcon icon={faFileText} style={{ marginRight: '5px', marginTop: "0px" }} />Documentation </Button>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap items-start gap-5 [&_label]:whitespace-nowrap">
          {choice("model", "Model", [
            ["Auto", "auto"], ["physical", "physical"], ["KB", "KB"], ["array", "array"], ["dose_decay", "dose decay"],
          ])}
          {toggle("anomalous", "Anomalous")}
          {toggle("overwriteExistingModels", "Overwrite Existing Models")}
          {toggle("checkConsistentIndexing", "Check Consistent Indexing")}
        </div>
        <div className="flex flex-wrap items-start gap-5 [&_label]:whitespace-nowrap">
          {choice("reflectionSelectionMethod", "Reflection Selection", [
            ["auto", "auto"], ["quasi_random", "quasi random"], ["intensity_ranges", "intensity ranges"],
            ["use_all", "use all"], ["random", "random"],
          ])}
          {text("isigmaCutoff", "Multi-dataset I/σ Cutoff")}
          {text("bestUnitCell", "Best Unit Cell", "w-64")}
        </div>
        <div className="flex flex-wrap items-start gap-5 [&_label]:whitespace-nowrap">
          {toggle("resetErrorModel", "Reset Error Model")}
          {text("errorModelGroup", "Error Model Group", "w-32")}
          {text("stillsMinIsigma", "Stills Min I/σ")}
          {text("stillsMinMultiplicity", "Stills Min Multiplicity")}
        </div>
        <div className="flex flex-wrap items-start gap-5 [&_label]:whitespace-nowrap">
          {choice("filteringMethod", "Filtering", [["None", "none"], ["deltacchalf", "ΔCC½"]], "w-32")}
          {deltaCCHalf && (
            <>
              {choice("deltaCCHalfMode", "Mode", [["dataset", "dataset"], ["image_group", "image group"]], "w-36")}
              {params.deltaCCHalfMode === "image_group" && text("groupSize", "Group Size")}
              {text("maxCycles", "Max Cycles")}
              {text("maxPercentRemoved", "Max % Removed")}
              {text("minCompleteness", "Min Completeness (%)")}
              {text("stdCutoff", "Std Cutoff")}
            </>
          )}
        </div>
        <div className="space-y-1">
          <AdvancedOptionsSearch
            step="scale"
            enabled={enabled}
            definitions={advancedDefinitions}
            options={advancedOptions}
            onChange={setAdvancedOptions}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col overflow-hidden">
        <Card className={status === Status.Loading ? "flex-1 flex flex-col overflow-y-scroll border border-foreground" : status === Status.Default ? "flex-1 flex flex-col overflow-y-scroll" : "flex-1 flex flex-col overflow-y-scroll border border-red-500"} ref={cardContentRef}>
          <CardHeader>
            <CardDescription>
              DIALS Output
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ opacity: status === Status.Loading ? 0.5 : 1 }} dangerouslySetInnerHTML={{ __html: log }} />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
    </>
  )
}
