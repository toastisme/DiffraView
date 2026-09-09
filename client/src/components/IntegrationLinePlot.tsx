
import { ResponsiveContainer, Label, LineChart, Line, XAxis, YAxis, Legend } from 'recharts';
import { Input } from "@/components/ui/input"
import { MouseEvent, useState, useEffect, useRef } from 'react';
import { Label as UILabel } from "@/components/ui/label"
import { useTheme } from "@/hooks/useTheme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh, faStop } from '@fortawesome/free-solid-svg-icons';
import { Button } from "@/components/ui/button"
import { useWindowSize } from "@uidotdev/usehooks";
import { Checkbox } from "@/components/ui/checkbox"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CorrectionsPopover } from './CorrectionsPopover';
import { useIntegrationProfilerContext } from '@/contexts/IntegrationProfilerContext';
import { useIntegrateContext } from '@/contexts/IntegrateContext';
import { useRootContext } from '@/contexts/RootContext';
import { Status } from '@/types';
import { isNumber, isInt} from "@/utils"

export function IntegrationLinePlot() {

  const { isLight, colors: themeColors } = useTheme();

  const {
    serverWS,
    setSelectedReflectionID,
    showCalculatedIntegratedReflections: usingCalculatedIntegrationReflections,
    selectedReflectionID
  } = useRootContext();

  const {
		emptyRun,
		vanadiumRun,
		sampleDensity,
		sampleRadius,
		sampleAbsorptionXSection,
		sampleScatteringXSection,
		vanadiumDensity,
		vanadiumRadius,
		vanadiumAbsorptionXSection,
		vanadiumScatteringXSection,
		applyLorentz,
		applyIncidentSpectrum,
		applySphericalAbsorption,
		tOFBBoxPadding,
		setTOFBBoxPadding,
		xYBBoxPadding,
		setXYBBoxPadding,
    profile1DIBIXAlpha,
    setProfile1DIBIXAlpha,
    profile1DIBIXBeta,
    setProfile1DIBIXBeta,
    profile1DIBIXNRestarts,
    setProfile1DIBIXNRestarts,
    profile1DICA,
    setProfile1DICA,
    profile1DICB,
    setProfile1DICB,
    profile1DICR,
    setProfile1DICR,
    profile1DICNRestarts,
    setProfile1DICNRestarts,
    profile3DGutmannNRestarts,
    setProfile3DGutmannNRestarts,
    profile3DGutmannAlpha,
    setProfile3DGutmannAlpha,
    profile3DGutmannBeta,
    setProfile3DGutmannBeta,
    profile3DICNRestarts,
    setProfile3DICNRestarts,
    profile3DICInitA,
    setProfile3DICInitA,
    profile3DICInitB,
    setProfile3DICInitB,
    profile3DIBIXAlpha,
    setProfile3DIBIXAlpha,
    profile3DIBIXBeta,
    setProfile3DIBIXBeta,
    profile3DIBIXNRestarts,
    setProfile3DIBIXNRestarts,
    integrateMethod,
    setIntegrateMethod,
    backgroundModel,
    setBackgroundModel,
    maskModel,
    setMaskModel,
    ellipseMaskScale,
    setEllipseMaskScale,
  } = useIntegrateContext();

  const {
    setStatus,
    status,
    tOF,
    intensity,
    rawIntensity,
    background,
    lineProfile1DIBIX,
    lineProfile1DIC,
    lineProfile3DGutmann,
    lineProfile3DIC,
    lineProfile3DIBIX,
		profile1DIBIXValue,
		profile1DIBIXSigma,
		profile1DICValue,
		profile1DICSigma,
		profile3DICValue,
		profile3DICSigma,
		profile3DGutmannValue,
		profile3DGutmannSigma,
		profile3DIBIXValue,
		profile3DIBIXSigma,
		summationValue,
		summationSigma,
		partiality,
		title,
    optimizeProfile,
    setOptimizeProfile
  } = useIntegrationProfilerContext();

  const tOFBBoxPaddingRef = useRef(tOFBBoxPadding);
  const xYBBoxPaddingRef = useRef(xYBBoxPadding);
  const profile1DIBIXAlphaRef = useRef(profile1DIBIXAlpha);
  const profile1DIBIXBetaRef = useRef(profile1DIBIXBeta);
  const profile1DIBIXNRestartsRef = useRef(profile1DIBIXNRestarts);
  const profile1DICARef = useRef(profile1DICA);
  const profile1DICBRef = useRef(profile1DICB);
  const profile1DICRRef = useRef(profile1DICR);
  const profile1DICNRestartsRef = useRef(profile1DICNRestarts);
  const profile3DGutmannNRestartsRef = useRef(profile3DGutmannNRestarts);
  const profile3DGutmannAlphaRef = useRef(profile3DGutmannAlpha);
  const profile3DGutmannBetaRef = useRef(profile3DGutmannBeta);
  const profile3DICNRestartsRef = useRef(profile3DICNRestarts);
  const profile3DICInitARef = useRef(profile3DICInitA);
  const profile3DICInitBRef = useRef(profile3DICInitB);
  const profile3DIBIXAlphaRef = useRef(profile3DIBIXAlpha);
  const profile3DIBIXBetaRef = useRef(profile3DIBIXBeta);
  const profile3DIBIXNRestartsRef = useRef(profile3DIBIXNRestarts);
  const ellipseMaskScaleRef = useRef(ellipseMaskScale);

  interface ProfilerData {
    tof: number
    rawIntensity: number
    intensity: number
    background: number
    lineProfile1DIBIX: number
    lineProfile1DIC: number
    lineProfile3DGutmann: number
    lineProfile3DIC: number
    lineProfile3DIBIX: number
  }

  const size = useWindowSize();

  useEffect(() => {
      let w = size.width;

      if (w !== null){
        setLineProfileWidth(w/2);
      }

  }, [size.width])

  useEffect(() => {
    checkParamsValid();
  }, [])

  useEffect(() => {
    profile1DIBIXNRestartsRef.current = profile1DIBIXNRestarts;
    profile3DGutmannNRestartsRef.current = profile3DGutmannNRestarts;
    profile1DIBIXAlphaRef.current = profile1DIBIXAlpha;
    profile1DIBIXBetaRef.current = profile1DIBIXBeta;
    profile1DICARef.current = profile1DICA;
    profile1DICBRef.current = profile1DICB;
    profile1DICRRef.current = profile1DICR;
    profile1DICNRestartsRef.current = profile1DICNRestarts;
    profile3DICNRestartsRef.current = profile3DICNRestarts;
    profile3DICInitARef.current = profile3DICInitA;
    profile3DICInitBRef.current = profile3DICInitB;
    profile3DIBIXAlphaRef.current = profile3DIBIXAlpha;
    profile3DIBIXBetaRef.current = profile3DIBIXBeta;
    profile3DIBIXNRestartsRef.current = profile3DIBIXNRestarts;
    ellipseMaskScaleRef.current = ellipseMaskScale;
  }, [profile1DIBIXNRestarts, profile3DGutmannNRestarts,
     profile1DIBIXAlpha, profile1DIBIXBeta, profile3DGutmannAlpha, profile3DGutmannBeta,
     profile1DICA, profile1DICB, profile1DICR, profile1DICNRestarts,
     profile3DICNRestarts, profile3DICInitA, profile3DICInitB,
     profile3DIBIXAlpha, profile3DIBIXBeta, profile3DIBIXNRestarts, ellipseMaskScale])

  const [profilerData, setProfilerData] = useState<ProfilerData[]>([]);
  const [lineProfileWidth, setLineProfileWidth] = useState<number>(980);


  const [profile1DIBIXAlphaValid, setProfile1DIBIXAlphaValid] = useState<boolean>(true);
  const [profile1DIBIXBetaValid, setProfile1DIBIXBetaValid] = useState<boolean>(true);
  const [profile1DIBIXNRestartsValid, setProfile1DIBIXNRestartsValid] = useState<boolean>(true);
  const [profile1DICAValid, setProfile1DICAValid] = useState<boolean>(true);
  const [profile1DICBValid, setProfile1DICBValid] = useState<boolean>(true);
  const [profile1DICRValid, setProfile1DICRValid] = useState<boolean>(true);
  const [profile1DICNRestartsValid, setProfile1DICNRestartsValid] = useState<boolean>(true);
  const [profile3DGutmannNRestartsValid, setProfile3DGutmannNRestartsValid] = useState<boolean>(true);
  const [profile3DGutmannAlphaValid, setProfile3DGutmannAlphaValid] = useState<boolean>(true);
  const [profile3DGutmannBetaValid, setProfile3DGutmannBetaValid] = useState<boolean>(true);
  const [profile3DICNRestartsValid, setProfile3DICNRestartsValid] = useState<boolean>(true);
  const [profile3DICInitAValid, setProfile3DICInitAValid] = useState<boolean>(true);
  const [profile3DICInitBValid, setProfile3DICInitBValid] = useState<boolean>(true);
  const [profile3DIBIXAlphaValid, setProfile3DIBIXAlphaValid] = useState<boolean>(true);
  const [profile3DIBIXBetaValid, setProfile3DIBIXBetaValid] = useState<boolean>(true);
  const [profile3DIBIXNRestartsValid, setProfile3DIBIXNRestartsValid] = useState<boolean>(true);
  const [tOFBBoxPaddingValid, setTOFBBoxPaddingValid] = useState<boolean>(true);
  const [xYBBoxPaddingValid, setXYBBoxPaddingValid] = useState<boolean>(true);
  const [ellipseMaskScaleValid, setEllipseMaskScaleValid] = useState<boolean>(true);

  function checkParamsValid() {
    setProfile1DIBIXAlphaValid(isNumber(profile1DIBIXAlpha) || profile1DIBIXAlpha === "");
    setProfile1DIBIXBetaValid(isNumber(profile1DIBIXBeta) || profile1DIBIXBeta === "");
    setProfile1DIBIXNRestartsValid(isInt(profile1DIBIXNRestarts) || profile1DIBIXNRestarts === "");
    setProfile1DICAValid(isNumber(profile1DICA) || profile1DICA === "");
    setProfile1DICBValid(isNumber(profile1DICB) || profile1DICB === "");
    setProfile1DICRValid(isNumber(profile1DICR) || profile1DICR === "");
    setProfile1DICNRestartsValid(isInt(profile1DICNRestarts) || profile1DICNRestarts === "");
    setProfile3DGutmannNRestartsValid(isInt(profile3DGutmannNRestarts) || profile3DGutmannNRestarts === "");
    setProfile3DGutmannAlphaValid(isNumber(profile3DGutmannAlpha) || profile3DGutmannAlpha === "");
    setProfile3DGutmannBetaValid(isNumber(profile3DGutmannBeta) || profile3DGutmannBeta === "");
    setProfile3DICNRestartsValid(isInt(profile3DICNRestarts) || profile3DICNRestarts === "");
    setProfile3DICInitAValid(isNumber(profile3DICInitA) || profile3DICInitA === "");
    setProfile3DICInitBValid(isNumber(profile3DICInitB) || profile3DICInitB === "");
    setProfile3DIBIXAlphaValid(isNumber(profile3DIBIXAlpha) || profile3DIBIXAlpha === "");
    setProfile3DIBIXBetaValid(isNumber(profile3DIBIXBeta) || profile3DIBIXBeta === "");
    setProfile3DIBIXNRestartsValid(isInt(profile3DIBIXNRestarts) || profile3DIBIXNRestarts === "");
    setTOFBBoxPaddingValid(isNumber(tOFBBoxPadding) || tOFBBoxPadding === "");
    setXYBBoxPaddingValid(isNumber(xYBBoxPadding) || xYBBoxPadding === "");
    setEllipseMaskScaleValid(isNumber(ellipseMaskScale) || ellipseMaskScale === "");
  }


  function update_profiler_data() {

    const newProfilerData: ProfilerData[] = intensity.map((_, i) => ({
      tof: tOF[i],
      intensity: intensity[i],
      rawIntensity: rawIntensity[i],
      background: background[i],
      lineProfile1DIBIX: lineProfile1DIBIX[i],
      lineProfile1DIC: lineProfile1DIC[i],
      lineProfile3DGutmann: lineProfile3DGutmann[i],
      lineProfile3DIC: lineProfile3DIC[i],
      lineProfile3DIBIX: lineProfile3DIBIX[i],
    }));
    setProfilerData(newProfilerData);
  }

  useEffect(() => {
    update_profiler_data();
    setStatus(Status.Default);
  }, [intensity]);

  const formatAxis = (value: number): string => {
    return value.toFixed(0);
  };

  function updateProfileMethod(value: any) { 
    setIntegrateMethod(value);
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "update_integration_profiler_method",
      "method": value,
    }));
  }

  function updateMaskModel(value: any){
    setMaskModel(value);
  }

  function updateBackgroundModel(value: any){
    setBackgroundModel(value);

  }

  function updateProfile() {
    if (selectedReflectionID === ""){
      return;
    }

    let reflType = "observed";
    if (usingCalculatedIntegrationReflections){
      reflType = "calculated_integrated"
    }
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "update_integration_profiler",
      "reflection_id": selectedReflectionID,
      "profile_1d_ibix_alpha": profile1DIBIXAlphaRef.current,
      "profile_1d_ibix_beta": profile1DIBIXBetaRef.current,
      "profile_1d_ibix_A": 1.0,
      "profile_1d_ibix_n_restarts": profile1DIBIXNRestartsRef.current,
      "profile_1d_ic_A": profile1DICARef.current,
      "profile_1d_ic_B": profile1DICBRef.current,
      "profile_1d_ic_R": profile1DICRRef.current,
      "profile_1d_ic_n_restarts": profile1DICNRestartsRef.current,
      "profile_3d_gutmann_n_restarts": profile3DGutmannNRestartsRef.current,
      "profile_3d_gutmann_alpha": profile3DGutmannAlphaRef.current,
      "profile_3d_gutmann_beta": profile3DGutmannBetaRef.current,
      "profile_3d_ic_n_restarts": profile3DICNRestartsRef.current,
      "profile_3d_ic_init_A": profile3DICInitARef.current,
      "profile_3d_ic_init_B": profile3DICInitBRef.current,
      "profile_3d_ibix_alpha": profile3DIBIXAlphaRef.current,
      "profile_3d_ibix_beta": profile3DIBIXBetaRef.current,
      "profile_3d_ibix_n_restarts": profile3DIBIXNRestartsRef.current,
      "tof_padding": tOFBBoxPaddingRef.current,
      "xy_padding": xYBBoxPaddingRef.current,
      "incident_run": vanadiumRun,
      "empty_run": emptyRun,
      "vanadium_sample_radius" : vanadiumRadius,
      "vanadium_sample_number_density": vanadiumDensity,
      "vanadium_scattering_x_section" : vanadiumScatteringXSection,
      "vanadium_absorption_x_section" : vanadiumAbsorptionXSection,
      "sample_radius" : sampleRadius,
      "sample_number_density": sampleDensity,
      "scattering_x_section" : sampleScatteringXSection,
      "absorption_x_section" : sampleAbsorptionXSection,
      "apply_lorentz" : applyLorentz,
      "apply_incident_spectrum" : applyIncidentSpectrum,
      "apply_spherical_absorption" : applySphericalAbsorption,
      "type" : reflType,
      "method": integrateMethod,
      "mask_model" : maskModel,
      "ellipse_mask_scale" : ellipseMaskScaleRef.current,
      "background_model" : backgroundModel,
      "erase_data": false,
      "optimize_profile": optimizeProfile
    }));
    setStatus(Status.Loading)
  }

  function stopProfile(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "cancel_active_task",
    }));
    setStatus(Status.Default);
    setSelectedReflectionID("");
  }

  function updateParamXYBBoxPadding(event: any) {
    var val = event.target.value;
    setXYBBoxPaddingValid(isNumber(val));
    setXYBBoxPadding(val);
    xYBBoxPaddingRef.current = val;
  }

  function updateParamTOFBBoxPadding(event: any) {
    var val = event.target.value;
    setTOFBBoxPaddingValid(isNumber(val));
    setTOFBBoxPadding(val);
    tOFBBoxPaddingRef.current = val;

  }
  
  function updateParamProfile1DIBIXAlpha(event: any) {
    var val = event.target.value;
    setProfile1DIBIXAlphaValid(isNumber(val));
    setProfile1DIBIXAlpha(val);
    profile1DIBIXAlphaRef.current = val;
  }

  function updateParamProfile1DIBIXBeta(event: any) {
    var val = event.target.value;
    setProfile1DIBIXBetaValid(isNumber(val));
    setProfile1DIBIXBeta(val);
    profile1DIBIXBetaRef.current = val;
  }

  function updateParamProfile1DIBIXNRestarts(event: any) {
    var val = event.target.value;
    setProfile1DIBIXNRestartsValid(isInt(val));
    setProfile1DIBIXNRestarts(val);
    profile1DIBIXNRestartsRef.current = val;
  }

  function updateParamProfile1DICA(event: any) {
    var val = event.target.value;
    setProfile1DICAValid(isNumber(val));
    setProfile1DICA(val);
    profile1DICARef.current = val;
  }

  function updateParamProfile1DICB(event: any) {
    var val = event.target.value;
    setProfile1DICBValid(isNumber(val));
    setProfile1DICB(val);
    profile1DICBRef.current = val;
  }

  function updateParamProfile1DICR(event: any) {
    var val = event.target.value;
    setProfile1DICRValid(isNumber(val));
    setProfile1DICR(val);
    profile1DICRRef.current = val;
  }

  function updateParamProfile1DICNRestarts(event: any) {
    var val = event.target.value;
    setProfile1DICNRestartsValid(isInt(val));
    setProfile1DICNRestarts(val);
    profile1DICNRestartsRef.current = val;
  }

  function updateParamProfile3DGutmannNRestarts(event: any) {
    var val = event.target.value;
    setProfile3DGutmannNRestartsValid(isInt(val));
    setProfile3DGutmannNRestarts(val);
    profile3DGutmannNRestartsRef.current = val;
  }

  function updateParamProfile3DGutmannAlpha(event: any) {
    var val = event.target.value;
    setProfile3DGutmannAlphaValid(isNumber(val));
    setProfile3DGutmannAlpha(val);
    profile3DGutmannAlphaRef.current = val;
  }

  function updateParamProfile3DGutmannBeta(event: any) {
    var val = event.target.value;
    setProfile3DGutmannBetaValid(isNumber(val));
    setProfile3DGutmannBeta(val);
    profile3DGutmannBetaRef.current = val;
  }

  function updateParamProfile3DICNRestarts(event: any) {
    var val = event.target.value;
    setProfile3DICNRestartsValid(isInt(val));
    setProfile3DICNRestarts(val);
    profile3DICNRestartsRef.current = val;
  }

  function updateParamProfile3DICInitA(event: any) {
    var val = event.target.value;
    setProfile3DICInitAValid(isNumber(val));
    setProfile3DICInitA(val);
    profile3DICInitARef.current = val;
  }

  function updateParamProfile3DICInitB(event: any) {
    var val = event.target.value;
    setProfile3DICInitBValid(isNumber(val));
    setProfile3DICInitB(val);
    profile3DICInitBRef.current = val;
  }

  function updateParamProfile3DIBIXAlpha(event: any) {
    var val = event.target.value;
    setProfile3DIBIXAlphaValid(isNumber(val));
    setProfile3DIBIXAlpha(val);
    profile3DIBIXAlphaRef.current = val;
  }

  function updateParamProfile3DIBIXBeta(event: any) {
    var val = event.target.value;
    setProfile3DIBIXBetaValid(isNumber(val));
    setProfile3DIBIXBeta(val);
    profile3DIBIXBetaRef.current = val;
  }

  function updateParamProfile3DIBIXNRestarts(event: any) {
    var val = event.target.value;
    setProfile3DIBIXNRestartsValid(isInt(val));
    setProfile3DIBIXNRestarts(val);
    profile3DIBIXNRestartsRef.current = val;
  }

  function updateParamEllipseMaskScale(event: any) {
    var val = event.target.value;
    setEllipseMaskScaleValid(isNumber(val));
    setEllipseMaskScale(val);
    ellipseMaskScaleRef.current = val;
  }

  function updateParam(name: string, cleanedInput: string){}

  function updateLorentzCorrection(state: string){}

  function updateIncidentCorrections(state: string){}

  function updateAbsorptionCorrections(state: string){}


return (
  <div className="w-full space-y-3">
    <h4>{title}</h4>
  <div className="flex items-center justify-between">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead>Summation</TableHead>
          <TableHead>1D iBIX</TableHead>
          <TableHead>1D Ikeda Carpenter</TableHead>
          <TableHead>3D Ikeda Carpenter</TableHead>
          <TableHead>3D Gutmann</TableHead>
          <TableHead>3D iBIX</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">I/σ</TableCell>
          <TableCell>{summationSigma < 1e-7 ? "-" : (summationValue / summationSigma).toFixed(2)}</TableCell>
          <TableCell>{profile1DIBIXSigma < 1e-7 ? "-" : (profile1DIBIXValue / profile1DIBIXSigma).toFixed(2)}</TableCell>
          <TableCell>{profile1DICSigma < 1e-7 ? "-" : (profile1DICValue / profile1DICSigma).toFixed(2)}</TableCell>
          <TableCell>{profile3DICSigma < 1e-7 ? "-" : (profile3DICValue / profile3DICSigma).toFixed(2)}</TableCell>
          <TableCell>{profile3DGutmannSigma < 3e-7 ? "-" : (profile3DGutmannValue / profile3DGutmannSigma).toFixed(2)}</TableCell>
          <TableCell>{profile3DIBIXSigma < 1e-7 ? "-" : (profile3DIBIXValue / profile3DIBIXSigma).toFixed(2)}</TableCell>
        </TableRow>
      </TableBody>
    </Table>

    {status !== Status.Loading ? (
      <Button onClick={updateProfile} variant="secondary" className="ml-6">
        <FontAwesomeIcon icon={faRefresh} className="mr-2" />
        Calculate
      </Button>
    ) : (
      <Button onClick={stopProfile} variant="secondary" className="ml-6">
        <FontAwesomeIcon icon={faStop} className="mr-2" />
        Stop
      </Button>
    )}
  </div>

    <div className="grid grid-cols-4 gap-6 items-end">
      <div>
        <UILabel>Method</UILabel>
        <Select
          onValueChange={updateProfileMethod}
          value={integrateMethod}
        >
          <SelectTrigger>
            <SelectValue placeholder="1D Profile Fit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="summation">Summation</SelectItem>
              <SelectItem value="profile_1d_ibix">1D iBIX</SelectItem>
              <SelectItem value="profile_1d_ic">1D Ikeda Carpenter</SelectItem>
              <SelectItem value="profile_3d_gutmann">3D Gutmann</SelectItem>
              <SelectItem value="profile_3d_ic">3D Ikeda Carpenter</SelectItem>
              <SelectItem value="profile_3d_ibix">3D iBIX</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <UILabel>Mask</UILabel>
        <Select
          onValueChange={updateMaskModel}
          value={maskModel}
        >
          <SelectTrigger>
            <SelectValue placeholder="Ellipse" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="ellipse">Ellipse</SelectItem>
              <SelectItem value="seed_skewness">Seed Skewness</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <UILabel>Background</UILabel>
        <Select
          onValueChange={updateBackgroundModel}
          value={backgroundModel}
        >
          <SelectTrigger>
            <SelectValue placeholder="Linear2D" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="linear2d">Linear2D</SelectItem>
              <SelectItem value="linear3d">Linear3D</SelectItem>
              <SelectItem value="constant2d">Constant2D</SelectItem>
              <SelectItem value="constant3d">Constant3D</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-end">
        <CorrectionsPopover
          updateParamDerived={updateParam}
          updateLorentzCorrectionDerived={updateLorentzCorrection}
          updateIncidentCorrectionsDerived={updateIncidentCorrections}
          updateAbsorptionCorrectionsDerived={updateAbsorptionCorrections}
        />
      </div>
    </div>

    <div className="grid grid-cols-6 gap-2">
      <div className="max-w-[140px]">
        <UILabel>ToF Padding (frames)</UILabel>
        <Input
          placeholder="2"
          value={tOFBBoxPadding}
          onChange={updateParamTOFBBoxPadding}
          style={{ borderColor: tOFBBoxPaddingValid ? "" : "red" }}
        />
      </div>

      <div className="max-w-[130px]">
        <UILabel>XY Padding (pixels)</UILabel>
        <Input
          placeholder="1"
          value={xYBBoxPadding}
          onChange={updateParamXYBBoxPadding}
          style={{ borderColor: xYBBoxPaddingValid ? "" : "red" }}
        />
      </div>
      <div className="max-w-[100px]" hidden={maskModel !== "ellipse"}>
        <UILabel>Ellipse Scale (σ)</UILabel>
        <Input
          placeholder="1.0"
          value={ellipseMaskScale}
          onChange={updateParamEllipseMaskScale}
          style={{ borderColor: ellipseMaskScaleValid ? "" : "red" }}
        />
      </div>
      <div className="max-w-[80px]" hidden={integrateMethod!=="profile_1d_ibix"}>
        <UILabel>Init α</UILabel>
        <Input
          placeholder="0.03"
          value={profile1DIBIXAlpha}
          onChange={updateParamProfile1DIBIXAlpha}
          style={{ borderColor: profile1DIBIXAlphaValid ? "" : "red" }}
        />
      </div>
      <div className="max-w-[80px]" hidden={integrateMethod!=="profile_1d_ibix"}>
        <UILabel>Init β</UILabel>
        <Input
          placeholder="0.03"
          value={profile1DIBIXBeta}
          onChange={updateParamProfile1DIBIXBeta}
          style={{ borderColor: profile1DIBIXBetaValid ? "" : "red" }}
        />
      </div>
      <div className="max-w-[90px]" hidden={integrateMethod!=="profile_1d_ibix"}>
        <UILabel>Num Restarts</UILabel>
        <Input
          placeholder="100"
          value={profile1DIBIXNRestarts}
          onChange={updateParamProfile1DIBIXNRestarts}
          style={{ borderColor: profile1DIBIXNRestartsValid ? "" : "red" }}
        />
      </div>

      <div className="max-w-[80px]" hidden={integrateMethod!=="profile_1d_ic"}>
        <UILabel>Init A</UILabel>
        <Input
          placeholder="1.0"
          value={profile1DICA}
          onChange={updateParamProfile1DICA}
          style={{ borderColor: profile1DICAValid ? "" : "red" }}
        />
      </div>
      <div className="max-w-[80px]" hidden={integrateMethod!=="profile_1d_ic"}>
        <UILabel>Init B</UILabel>
        <Input
          placeholder="0.05"
          value={profile1DICB}
          onChange={updateParamProfile1DICB}
          style={{ borderColor: profile1DICBValid ? "" : "red" }}
        />
      </div>
      <div className="max-w-[80px]" hidden={integrateMethod!=="profile_1d_ic"}>
        <UILabel>Init R</UILabel>
        <Input
          placeholder="0.5"
          value={profile1DICR}
          onChange={updateParamProfile1DICR}
          style={{ borderColor: profile1DICRValid ? "" : "red" }}
        />
      </div>
      <div className="max-w-[90px]" hidden={integrateMethod!=="profile_1d_ic"}>
        <UILabel>Num Restarts</UILabel>
        <Input
          placeholder="100"
          value={profile1DICNRestarts}
          onChange={updateParamProfile1DICNRestarts}
          style={{ borderColor: profile1DICNRestartsValid ? "" : "red" }}
        />
      </div>

      <div className="max-w-[80px]" hidden={integrateMethod!=="profile_3d_gutmann"}>
        <UILabel>Init α</UILabel>
        <Input
          placeholder="1.0"
          value={profile3DGutmannAlpha}
          onChange={updateParamProfile3DGutmannAlpha}
          style={{ borderColor: profile3DGutmannAlphaValid ? "" : "red" }}
        />
      </div>
      <div className="max-w-[80px]" hidden={integrateMethod!=="profile_3d_gutmann"}>
        <UILabel>Init β</UILabel>
        <Input
          placeholder="0.1"
          value={profile3DGutmannBeta}
          onChange={updateParamProfile3DGutmannBeta}
          style={{ borderColor: profile3DGutmannBetaValid ? "" : "red" }}
        />
      </div>
      <div className="max-w-[100px]" hidden={integrateMethod!=="profile_3d_gutmann"}>
        <UILabel>Num Restarts</UILabel>
        <Input
          placeholder="100"
          value={profile3DGutmannNRestarts}
          onChange={updateParamProfile3DGutmannNRestarts}
          style={{ borderColor: profile3DGutmannNRestartsValid ? "" : "red" }}
        />
      </div>

      <div className="max-w-[80px]" hidden={integrateMethod!=="profile_3d_ic"}>
        <UILabel>Init A</UILabel>
        <Input
          placeholder="1.0"
          value={profile3DICInitA}
          onChange={updateParamProfile3DICInitA}
          style={{ borderColor: profile3DICInitAValid ? "" : "red" }}
        />
      </div>
      <div className="max-w-[80px]" hidden={integrateMethod!=="profile_3d_ic"}>
        <UILabel>Init B</UILabel>
        <Input
          placeholder="0.05"
          value={profile3DICInitB}
          onChange={updateParamProfile3DICInitB}
          style={{ borderColor: profile3DICInitBValid ? "" : "red" }}
        />
      </div>
      <div className="max-w-[100px]" hidden={integrateMethod!=="profile_3d_ic"}>
        <UILabel>Num Restarts</UILabel>
        <Input
          placeholder="100"
          value={profile3DICNRestarts}
          onChange={updateParamProfile3DICNRestarts}
          style={{ borderColor: profile3DICNRestartsValid ? "" : "red" }}
        />
      </div>

      <div className="max-w-[80px]" hidden={integrateMethod!=="profile_3d_ibix"}>
        <UILabel>Init α</UILabel>
        <Input
          placeholder="0.03"
          value={profile3DIBIXAlpha}
          onChange={updateParamProfile3DIBIXAlpha}
          style={{ borderColor: profile3DIBIXAlphaValid ? "" : "red" }}
        />
      </div>
      <div className="max-w-[80px]" hidden={integrateMethod!=="profile_3d_ibix"}>
        <UILabel>Init β</UILabel>
        <Input
          placeholder="0.03"
          value={profile3DIBIXBeta}
          onChange={updateParamProfile3DIBIXBeta}
          style={{ borderColor: profile3DIBIXBetaValid ? "" : "red" }}
        />
      </div>
      <div className="max-w-[100px]" hidden={integrateMethod!=="profile_3d_ibix"}>
        <UILabel>Num Restarts</UILabel>
        <Input
          placeholder="100"
          value={profile3DIBIXNRestarts}
          onChange={updateParamProfile3DIBIXNRestarts}
          style={{ borderColor: profile3DIBIXNRestartsValid ? "" : "red" }}
        />
      </div>
    </div>

    {/* Chart */}
    <ResponsiveContainer width="100%" height={260}>
      <LineChart
        width={lineProfileWidth - 60}
        height={260}
        data={profilerData}
        margin={{ bottom: 25, left: 10 }}
      >
        <XAxis
          tickFormatter={formatAxis}
          dataKey="tof"
          type="number"
          domain={[tOF[0], tOF[tOF.length - 1]]}
          allowDataOverflow
        >
          <Label value="ToF (usec)" position="bottom" />
        </XAxis>
        <YAxis
          tickFormatter={formatAxis}
          dataKey="rawIntensity"
          type="number"
          allowDataOverflow
        >
          <Label
            value="Intensity (AU)"
            angle={-90}
            position="left"
            style={{ textAnchor: "middle" }}
          />
        </YAxis>
        <Line type="monotone" dataKey="rawIntensity" name="Raw Intensity" stroke={themeColors.grey} strokeOpacity={0.5} dot={false} />
        <Line type="monotone" dataKey="intensity" name="Intensity" stroke={themeColors.linePlot} dot={false} />
        <Line type="monotone" dataKey="background" name="Background" stroke={themeColors.green} dot={false} />
        <Line type="monotone" dataKey="lineProfile1DIBIX" name="Profile 1d iBIX" stroke={themeColors.red} strokeWidth={3} dot={false} />
        <Line type="monotone" dataKey="lineProfile1DIC" name="Profile 1d IC" stroke={themeColors.teal} strokeWidth={3} dot={false} />
        <Line type="monotone" dataKey="lineProfile3DGutmann" name="Profile 3d Gutmann" stroke={themeColors.blue} strokeWidth={3} dot={false} />
        <Line type="monotone" dataKey="lineProfile3DIC" name="Profile 3d IC" stroke={themeColors.orange} strokeWidth={3} dot={false} />
        <Line type="monotone" dataKey="lineProfile3DIBIX" name="Profile 3d iBIX" stroke={themeColors.purple} strokeWidth={3} dot={false} />
        <Legend wrapperStyle={{ position: "relative" }} />
      </LineChart>
    </ResponsiveContainer>
    <div className="flex items-center gap-2 text-sm">
      <UILabel>Partiality</UILabel>
      <span>{partiality > 0 ? partiality.toFixed(4) : "-"}</span>
    </div>
  </div>
);


}
