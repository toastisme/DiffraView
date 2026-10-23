import { useEffect } from "react"
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
import { faPlay, faStop, faCheck, faFileText } from '@fortawesome/free-solid-svg-icons';
import { useRootContext } from "@/contexts/RootContext"
import {
  BEAM_POSITION_DEFAULTS,
  BeamCentre,
  RotationBeamPositionParams as BeamPositionParams,
  useRotationBeamPositionContext,
} from "@/contexts/rotation/RotationBeamPositionContext"
import { serverMessage } from "@/lib/protocol"
import { Status } from "@/types"

type TextParam = { [K in keyof BeamPositionParams]: BeamPositionParams[K] extends string ? K : never }[keyof BeamPositionParams];
type BoolParam = { [K in keyof BeamPositionParams]: BeamPositionParams[K] extends boolean ? K : never }[keyof BeamPositionParams];

// dials.search_beam_position Phil name of each param
const PHIL_NAMES: Record<keyof BeamPositionParams, string> = {
  method: "method",
  nproc: "default.nproc",
  plotSearchScope: "default.plot_search_scope",
  maxCell: "default.max_cell",
  imageRange: "default.image_range",
  maxReflections: "default.max_reflections",
  mmSearchScope: "default.mm_search_scope",
  wideSearchBinning: "default.wide_search_binning",
  nMacroCycles: "default.n_macro_cycles",
  dMin: "default.d_min",
  seed: "default.seed",
  methodX: "projection.method_x",
  methodY: "projection.method_y",
  plot: "projection.plot",
  excludePixelRangeX: "projection.exclude_pixel_range_x",
  excludePixelRangeY: "projection.exclude_pixel_range_y",
  perImage: "projection.per_image",
  colorCutoff: "projection.color_cutoff",
  midpointExcludeIntensityPercent: "projection.midpoint.exclude_intensity_percent",
  midpointIntersectionRange: "projection.midpoint.intersection_range",
  midpointConvolutionWidth: "projection.midpoint.convolution_width",
  midpointDeadPixelRangeX: "projection.midpoint.dead_pixel_range_x",
  midpointDeadPixelRangeY: "projection.midpoint.dead_pixel_range_y",
  midpointIntersectionMinWidth: "projection.midpoint.intersection_min_width",
  maximumBadPixelThreshold: "projection.maximum.bad_pixel_threshold",
  maximumNConvolutions: "projection.maximum.n_convolutions",
  maximumConvolutionWidth: "projection.maximum.convolution_width",
  maximumBinWidth: "projection.maximum.bin_width",
  maximumBinStep: "projection.maximum.bin_step",
  inversionBadPixelThreshold: "projection.inversion.bad_pixel_threshold",
  inversionGuessPosition: "projection.inversion.guess_position",
  inversionWindowWidth: "projection.inversion.inversion_window_width",
  inversionBackgroundCutoff: "projection.inversion.background_cutoff",
  inversionConvolutionWidth: "projection.inversion.convolution_width",
};

// Which params each method uses (by key prefix for the projection methods)
const DEFAULT_PARAMS: (keyof BeamPositionParams)[] = [
  "nproc", "plotSearchScope", "maxCell", "imageRange", "maxReflections",
  "mmSearchScope", "wideSearchBinning", "nMacroCycles", "dMin", "seed",
];
const PROJECTION_METHODS = ["midpoint", "maximum", "inversion"];

const NUMBER = /^-?\d*\.?\d+$/;
const INT = /^\d+$/;
const items = (v: string) => v.split(/[\s,()]+/).filter(Boolean);
const numberList = (count?: number, even = false) => (v: string) => {
  const values = items(v);
  return values.every((x) => NUMBER.test(x))
    && (count === undefined || values.length === count)
    && (!even || values.length % 2 === 0);
};
const VALIDATORS: Partial<Record<TextParam, (value: string) => boolean>> = {
  nproc: (v) => INT.test(v),
  maxCell: (v) => NUMBER.test(v),
  imageRange: numberList(undefined, true),
  maxReflections: (v) => INT.test(v),
  mmSearchScope: (v) => NUMBER.test(v),
  wideSearchBinning: (v) => NUMBER.test(v),
  nMacroCycles: (v) => INT.test(v),
  dMin: (v) => NUMBER.test(v),
  seed: (v) => INT.test(v),
  excludePixelRangeX: numberList(undefined, true),
  excludePixelRangeY: numberList(undefined, true),
  colorCutoff: (v) => NUMBER.test(v),
  midpointExcludeIntensityPercent: (v) => NUMBER.test(v),
  midpointIntersectionRange: numberList(3),
  midpointConvolutionWidth: (v) => INT.test(v),
  midpointDeadPixelRangeX: numberList(undefined, true),
  midpointDeadPixelRangeY: numberList(undefined, true),
  midpointIntersectionMinWidth: (v) => INT.test(v),
  maximumBadPixelThreshold: (v) => NUMBER.test(v),
  maximumNConvolutions: (v) => INT.test(v),
  maximumConvolutionWidth: (v) => INT.test(v),
  maximumBinWidth: (v) => INT.test(v),
  maximumBinStep: (v) => INT.test(v),
  inversionBadPixelThreshold: (v) => NUMBER.test(v),
  inversionGuessPosition: numberList(2),
  inversionWindowWidth: (v) => INT.test(v),
  inversionBackgroundCutoff: (v) => NUMBER.test(v),
  inversionConvolutionWidth: (v) => INT.test(v),
};

// Lists as DIALS expects them, so they can be compared with the defaults
const normalise = (value: string) => items(value).join(",");

const fixed = (value: number | undefined) => value === undefined ? "-" : value.toFixed(2);

// The current beam position, and if searched the optimised one and the shift
function BeamCentreTable({ current, optimised }: { current: BeamCentre[], optimised: BeamCentre[] }) {
  const several = current.length > 1;
  const multiPanel = [...current, ...optimised].some((c) => (c.panel ?? 0) !== 0);
  const header = ["", "x (px)", "y (px)", "x (mm)", "y (mm)", ...(multiPanel ? ["Panel"] : [])];
  const cells = (centre: BeamCentre | undefined) => centre?.panel === undefined
    ? [<td key="miss" colSpan={multiPanel ? 5 : 4} className="px-3 py-1 text-muted-foreground">Beam misses the detector</td>]
    : [centre.x, centre.y, centre.xMm, centre.yMm].map((v, i) => <td key={i} className="px-3 py-1 text-right tabular-nums">{fixed(v)}</td>)
      .concat(multiPanel ? [<td key="panel" className="px-3 py-1 text-right">{centre.panel}</td>] : []);
  const shift = (a: BeamCentre, b: BeamCentre | undefined) => {
    if (b?.panel === undefined || a.panel === undefined || a.panel !== b.panel) return null;
    const d = [b.x! - a.x!, b.y! - a.y!, b.xMm! - a.xMm!, b.yMm! - a.yMm!];
    const distance = Math.hypot(d[2], d[3]);
    return (
      <>
        {d.map((v, i) => <td key={i} className="px-3 py-1 text-right tabular-nums">{v >= 0 ? "+" : ""}{fixed(v)}</td>)}
        {multiPanel && <td />}
        <td className="px-3 py-1 text-muted-foreground whitespace-nowrap">{fixed(Math.hypot(d[0], d[1]))} px, {fixed(distance)} mm</td>
      </>
    );
  };
  return (
    <table className="text-sm self-start">
      <thead>
        <tr className="text-muted-foreground">
          {header.map((h) => <th key={h} className="px-3 py-1 font-normal text-right first:text-left">{h}</th>)}
        </tr>
      </thead>
      <tbody>
        {current.map((centre, i) => {
          const label = several ? ` (experiment ${centre.experiment})` : "";
          const other = optimised[i];
          return [
            <tr key={`current-${i}`}><td className="px-3 py-1 whitespace-nowrap">Current{label}</td>{cells(centre)}</tr>,
            ...(other ? [
              <tr key={`optimised-${i}`}><td className="px-3 py-1 whitespace-nowrap">Optimised{label}</td>{cells(other)}</tr>,
              <tr key={`shift-${i}`} className="text-muted-foreground"><td className="px-3 py-1">Shift</td>{shift(centre, other)}</tr>,
            ] : []),
          ];
        })}
      </tbody>
    </table>
  );
}

// Utils > Search Beam Position: dials.search_beam_position on the current
// experiments, whose optimised experiments can then replace them
export function RotationSearchBeamPositionDialog() {

  const { serverWS } = useRootContext();
  const {
    open,
    setOpen,
    params,
    setParam,
    result: beamPosition,
    setResult: setBeamPosition,
    progress: beamPositionProgress,
    setProgress: setBeamPositionProgress,
    currentCentres: currentBeamCentres,
    used: beamPositionUsed,
    setUsed: setBeamPositionUsed,
  } = useRotationBeamPositionContext();

  // The current position, to compare with the search's
  useEffect(() => {
    if (open) {
      serverWS.current?.send(serverMessage("beam_position.get_centres"));
    }
  }, [open]);

  const running = beamPosition.status === Status.Loading;
  const projection = params.method !== "default" || params.methodX !== "" || params.methodY !== "";
  // Projection methods used along x and y
  const usedMethods = projection
    ? [params.method, params.methodX, params.methodY].filter((m) => PROJECTION_METHODS.includes(m))
    : [];

  const used = (key: keyof BeamPositionParams) => {
    if (key === "method") return true;
    if (DEFAULT_PARAMS.includes(key)) return !projection;
    const method = PROJECTION_METHODS.find((m) => key.startsWith(m));
    return projection && (method === undefined || usedMethods.includes(method));
  };

  const sentParams = (Object.keys(PHIL_NAMES) as (keyof BeamPositionParams)[]).filter((key) => {
    const value = params[key];
    const fallback = BEAM_POSITION_DEFAULTS[key];
    const changed = typeof value === "boolean" ? value !== fallback : normalise(value) !== normalise(fallback as string);
    return used(key) && changed && value !== "";
  });

  const invalid = (key: TextParam) => {
    const value = params[key].trim();
    const validator = VALIDATORS[key];
    return value !== "" && validator !== undefined && !validator(value);
  };
  const anyInvalid = sentParams.some((key) => typeof params[key] === "string" && invalid(key as TextParam));

  function args(): Record<string, string> {
    const result: Record<string, string> = {};
    sentParams.forEach((key) => {
      const value = params[key];
      result[PHIL_NAMES[key]] = typeof value === "boolean" ? (value ? "True" : "False") : normalise(value);
    });
    return result;
  }

  const run = () => {
    setBeamPosition({ status: Status.Loading, log: "", images: [], numImages: 0, optimisedAvailable: false, optimisedCentres: [] });
    setBeamPositionUsed(false);
    setBeamPositionProgress(0);
    serverWS.current?.send(serverMessage("beam_position.search", { "args": args() }));
  };

  const stop = () => {
    serverWS.current?.send(serverMessage("beam_position.cancel"));
  };

  const useOptimised = () => {
    serverWS.current?.send(serverMessage("beam_position.use_optimised"));
  };

  const choice = (key: TextParam, label: string, options: [string, string][]) => (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor={`beamPosition-${key}`}>{label}</Label>
      <Select value={params[key] || "same"} onValueChange={(value) => setParam(key, value === "same" ? "" : value)}>
        <SelectTrigger id={`beamPosition-${key}`} className="h-8">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map(([value, text]) => <SelectItem key={value} value={value}>{text}</SelectItem>)}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );

  const text = (key: TextParam, label: string, className = "") => (
    <div className={`flex flex-col space-y-1.5 ${className}`}>
      <Label htmlFor={`beamPosition-${key}`}>{label}</Label>
      <Input
        id={`beamPosition-${key}`}
        placeholder={BEAM_POSITION_DEFAULTS[key] || (key === "nproc" ? "Auto" : "None")}
        value={params[key]}
        onChange={(event) => setParam(key, event.target.value)}
        style={{ borderColor: invalid(key) ? "red" : "" }}
        className="h-8"
      />
    </div>
  );

  const toggle = (key: BoolParam, label: string) => (
    <div className="flex items-center gap-2 h-8">
      <Switch id={`beamPosition-${key}`} checked={params[key]} onCheckedChange={(checked) => setParam(key, checked)} />
      <Label htmlFor={`beamPosition-${key}`}>{label}</Label>
    </div>
  );

  const heading = (label: string) => (
    <p className="col-span-full text-sm font-medium text-muted-foreground pt-1">{label}</p>
  );

  const projectionOptions: [string, string][] = [
    ["same", "Same as method"], ["midpoint", "midpoint"], ["maximum", "maximum"], ["inversion", "inversion"],
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-none w-[90vw] md:w-[90vw] h-[85vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Search Beam Position</DialogTitle>
          <DialogDescription>dials.search_beam_position on the current experiments</DialogDescription>
        </DialogHeader>
        <div className="flex-1 flex gap-6 min-h-0">
          <div className="w-[30rem] shrink-0 overflow-y-auto pr-2">
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 items-end [&_label]:whitespace-nowrap">
              {choice("method", "Method", [
                ["default", "default"], ["midpoint", "midpoint"], ["maximum", "maximum"], ["inversion", "inversion"],
              ])}
              <div />
              {!projection ? (
                <>
                  {heading("Default (needs spots from Find Spots)")}
                  {text("dMin", "d min")}
                  {text("maxCell", "Max Cell")}
                  {text("mmSearchScope", "Search Scope (mm)")}
                  {text("wideSearchBinning", "Wide Search Binning")}
                  {text("nMacroCycles", "Macro Cycles")}
                  {text("maxReflections", "Max Reflections")}
                  {text("imageRange", "Image Range")}
                  {text("seed", "Seed")}
                  {text("nproc", "Processes")}
                  {toggle("plotSearchScope", "Plot Search Scope")}
                </>
              ) : (
                <>
                  {heading("Projection")}
                  {choice("methodX", "Method x", projectionOptions)}
                  {choice("methodY", "Method y", projectionOptions)}
                  {toggle("plot", "Plot")}
                  {toggle("perImage", "Per Image")}
                  {text("excludePixelRangeX", "Exclude Pixel Range x")}
                  {text("excludePixelRangeY", "Exclude Pixel Range y")}
                  {text("colorCutoff", "Colour Cutoff")}
                  <div />
                  {usedMethods.includes("midpoint") && (
                    <>
                      {heading("Midpoint")}
                      {text("midpointExcludeIntensityPercent", "Exclude Intensity %")}
                      {text("midpointIntersectionRange", "Intersection Range")}
                      {text("midpointConvolutionWidth", "Convolution Width")}
                      {text("midpointIntersectionMinWidth", "Intersection Min Width")}
                      {text("midpointDeadPixelRangeX", "Dead Pixel Range x")}
                      {text("midpointDeadPixelRangeY", "Dead Pixel Range y")}
                    </>
                  )}
                  {usedMethods.includes("maximum") && (
                    <>
                      {heading("Maximum")}
                      {text("maximumBadPixelThreshold", "Bad Pixel Threshold")}
                      {text("maximumNConvolutions", "Convolutions")}
                      {text("maximumConvolutionWidth", "Convolution Width")}
                      {text("maximumBinWidth", "Bin Width")}
                      {text("maximumBinStep", "Bin Step")}
                    </>
                  )}
                  {usedMethods.includes("inversion") && (
                    <>
                      {heading("Inversion")}
                      {text("inversionBadPixelThreshold", "Bad Pixel Threshold")}
                      {text("inversionGuessPosition", "Guess Position (x, y)")}
                      {text("inversionWindowWidth", "Window Width")}
                      {text("inversionBackgroundCutoff", "Background Cutoff")}
                      {text("inversionConvolutionWidth", "Convolution Width")}
                    </>
                  )}
                </>
              )}
            </div>
            <div className="flex gap-2 mt-4">
              {running ? (
                <Button onClick={stop}>
                  <FontAwesomeIcon icon={faStop} style={{ marginRight: '5px' }} />Stop
                </Button>
              ) : (
                <Button onClick={run} disabled={anyInvalid}>
                  <FontAwesomeIcon icon={faPlay} style={{ marginRight: '5px' }} />Run
                </Button>
              )}
              <a href="https://dials.github.io/documentation/programs/dials_search_beam_position.html" target="_blank">
                <Button variant={"secondary"}><FontAwesomeIcon icon={faFileText} style={{ marginRight: '5px' }} />Documentation</Button>
              </a>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-3 min-w-0 min-h-0">
            {beamPosition.optimisedAvailable && !running && !beamPositionUsed && (
              <div>
                <Button onClick={useOptimised}>
                  <FontAwesomeIcon icon={faCheck} style={{ marginRight: '5px' }} />Use Optimised Position
                </Button>
              </div>
            )}
            {beamPositionUsed && (
              <p className="text-sm text-muted-foreground">The current experiments now use the optimised position.</p>
            )}
            {currentBeamCentres.length > 0 && (
              <BeamCentreTable
                current={currentBeamCentres}
                optimised={beamPosition.optimisedAvailable && !beamPositionUsed ? beamPosition.optimisedCentres : []}
              />
            )}
            {running && beamPositionProgress > 0 && (
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full bg-primary"
                    style={{ width: `${beamPositionProgress}%`, transition: "width 0.4s ease" }}
                  />
                </div>
                <span className="text-sm text-muted-foreground w-10 text-right">{beamPositionProgress}%</span>
              </div>
            )}
            <div className="flex-1 flex flex-col gap-3 overflow-y-auto min-h-0">
              <Card className={running ? "border border-foreground" : beamPosition.status === Status.Failed ? "border border-red-500" : ""}>
                <CardHeader>
                  <CardDescription>DIALS Output</CardDescription>
                </CardHeader>
                <CardContent>
                  {running && <p className="text-sm text-muted-foreground">Searching...</p>}
                  <div dangerouslySetInnerHTML={{ __html: beamPosition.log }} />
                </CardContent>
              </Card>
              {beamPosition.images.map(({ name, url }) => (
                <figure key={name} className="flex flex-col gap-1">
                  {/* White as the plots are drawn on white */}
                  <img src={url} alt={name} className="w-full rounded-md bg-white" />
                  <figcaption className="text-xs text-muted-foreground">{name}</figcaption>
                </figure>
              ))}
              {beamPosition.numImages > beamPosition.images.length && (
                <p className="text-sm text-muted-foreground">
                  Showing {beamPosition.images.length} of {beamPosition.numImages} plots (in the search_beam_position folder)
                </p>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
