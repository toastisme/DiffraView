
import { ResponsiveContainer, Label, LineChart, Line, XAxis, YAxis, Legend } from 'recharts';
import { Input } from "@/components/ui/input"
import { useState, useEffect, useRef } from 'react';
import { Label as UILabel } from "@/components/ui/label"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { Button } from "@/components/ui/button"
import { useWindowSize } from "@uidotdev/usehooks";
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
import { isNumber, isInt, isTwoNumbersWithComma  } from "@/utils"

export function IntegrationLinePlot() {

  const {
    serverWS,
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
    profile1DAlpha,
    setProfile1DAlpha,
    profile1DBeta,
    setProfile1DBeta,
    profile3DAlpha,
    setProfile3DAlpha,
    profile3DBeta,
    setProfile3DBeta,
    integrateMethod,
    setIntegrateMethod,
    backgroundModel,
    setBackgroundModel,
    maskModel,
    setMaskModel
  } = useIntegrateContext();

  const {
    setStatus,
    status,
    tOF,
    intensity,
    rawIntensity,
    background,
    lineProfile1D,
    lineProfile3D,
		profile1DValue,
		profile1DSigma,
		profile3DValue,
		profile3DSigma,
		summationValue,
		summationSigma,
    seedSkewnessValue,
    seedSkewnessSigma,
		title
  } = useIntegrationProfilerContext();

  const tOFBBoxPaddingRef = useRef(tOFBBoxPadding);
  const xYBBoxPaddingRef = useRef(xYBBoxPadding);
  const profile1DAlphaRef = useRef(profile1DAlpha);
  const profile1DBetaRef = useRef(profile1DBeta);
  const profile3DAlphaRef = useRef(profile3DAlpha);
  const profile3DBetaRef = useRef(profile3DBeta);


  interface ProfilerData {
    tof: number
    rawIntensity: number
    intensity: number
    background: number
    lineProfile: number
    lineProfile3D: number
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

  const [profilerData, setProfilerData] = useState<ProfilerData[]>([]);
  const [lineProfileWidth, setLineProfileWidth] = useState<number>(980);


  const [profile1DAlphaValid, setProfile1DAlphaValid] = useState<boolean>(true);
  const [profile1DBetaValid, setProfile1DBetaValid] = useState<boolean>(true);
  const [profile3DAlphaValid, setProfile3DAlphaValid] = useState<boolean>(true);
  const [profile3DBetaValid, setProfile3DBetaValid] = useState<boolean>(true);
  const [tOFBBoxPaddingValid, setTOFBBoxPaddingValid] = useState<boolean>(true);
  const [xYBBoxPaddingValid, setXYBBoxPaddingValid] = useState<boolean>(true);

  function checkParamsValid() {
    setProfile1DAlphaValid(isNumber(profile1DAlpha) || profile1DAlpha === "");
    setProfile1DBetaValid(isNumber(profile1DBeta) || profile1DBeta === "");
    setProfile3DAlphaValid(isNumber(profile3DAlpha) || profile3DAlpha === "");
    setProfile3DBetaValid(isNumber(profile3DBeta) || profile3DBeta === "");
    setTOFBBoxPaddingValid(isNumber(tOFBBoxPadding) || tOFBBoxPadding === "");
    setXYBBoxPaddingValid(isNumber(xYBBoxPadding) || xYBBoxPadding === "");
  }


  function update_profiler_data() {

    const newProfilerData: ProfilerData[] = intensity.map((_, i) => ({
      tof: tOF[i],
      intensity: intensity[i],
      rawIntensity: rawIntensity[i],
      background: background[i],
      lineProfile: lineProfile1D[i],
      lineProfile3D: lineProfile3D[i],
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
      "profile1d_alpha": profile1DAlphaRef.current,
      "profile1d_beta": profile1DBetaRef.current,
      "profile3d_alpha": profile3DAlphaRef.current,
      "profile3d_beta": profile3DBetaRef.current,
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
      "background_model" : backgroundModel,
      "erase_data": false
    }));
    setStatus(Status.Loading)
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
  
  function updateParamProfile1DAlpha(event: any) {
    var val = event.target.value;
    setProfile1DAlphaValid(isNumber(val));
    setProfile1DAlpha(val);
    profile1DAlphaRef.current = val;
  }

  function updateParamProfile1DBeta(event: any) {
    var val = event.target.value;
    setProfile1DBetaValid(isNumber(val));
    setProfile1DBeta(val);
    profile1DBetaRef.current = val;
  }

  function updateParamProfile3DAlpha(event: any) {
    var val = event.target.value;
    setProfile3DAlphaValid(isNumber(val));
    setProfile3DAlpha(val);
    profile3DAlphaRef.current = val;
  }

  function updateParamProfile3DBeta(event: any) {
    var val = event.target.value;
    setProfile3DBetaValid(isNumber(val));
    setProfile3DBeta(val);
    profile3DBetaRef.current = val;
  }

  function updateParam(name: string, cleanedInput: string){
  }

  function updateLorentzCorrection(state: string){}

  function updateIncidentCorrections(state: string){}

  function updateAbsorptionCorrections(state: string){}


return (
  <div className="w-full space-y-6">
    <h4>{title}</h4>
  <div className="flex items-center justify-between">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead></TableHead>
          <TableHead>Summation</TableHead>
          <TableHead>1D</TableHead>
          <TableHead>Seed Skewness</TableHead>
          <TableHead>3D</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">I/σ</TableCell>
          <TableCell>{summationSigma < 1e-7 ? "-" : (summationValue / summationSigma).toFixed(2)}</TableCell>
          <TableCell>{profile1DSigma < 1e-7 ? "-" : (profile1DValue / profile1DSigma).toFixed(2)}</TableCell>
          <TableCell>{seedSkewnessSigma < 1e-7 ? "-" : (seedSkewnessValue / seedSkewnessSigma).toFixed(2)}</TableCell>
          <TableCell>{profile3DSigma < 3e-7 ? "-" : (profile3DValue / profile3DSigma).toFixed(2)}</TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <Button onClick={updateProfile} variant="secondary" className="ml-6">
      <FontAwesomeIcon icon={faRefresh} className="mr-2" />
      Calculate
    </Button>
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
              <SelectItem value="profile1d">1D Profile Fit</SelectItem>
              <SelectItem value="profile3d">3D Profile Fit</SelectItem>
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

    <div className="grid grid-cols-5 gap-2">
      <div className="max-w-[150px]">
        <UILabel>ToF Padding (frames)</UILabel>
        <Input
          placeholder="30"
          value={tOFBBoxPadding}
          onChange={updateParamTOFBBoxPadding}
          style={{ borderColor: tOFBBoxPaddingValid ? "" : "red" }}
        />
      </div>

      <div className="max-w-[150px]">
        <UILabel>XY Padding (pixels)</UILabel>
        <Input
          placeholder="5"
          value={xYBBoxPadding}
          onChange={updateParamXYBBoxPadding}
          style={{ borderColor: xYBBoxPaddingValid ? "" : "red" }}
        />
      </div>
      <div className="max-w-[150px]" hidden={integrateMethod!=="profile1d"}>
        <UILabel>Initial α</UILabel>
        <Input
          placeholder="5"
          value={profile1DAlpha}
          onChange={updateParamProfile1DAlpha}
          style={{ borderColor: profile1DAlphaValid ? "" : "red" }}
        />
      </div>
      <div className="max-w-[150px]" hidden={integrateMethod!=="profile1d"}>
        <UILabel>Initial β</UILabel>
        <Input
          placeholder="5"
          value={profile1DBeta}
          onChange={updateParamProfile1DBeta}
          style={{ borderColor: profile1DBetaValid ? "" : "red" }}
        />
      </div>
      <div className="max-w-[350px]" hidden={integrateMethod!=="profile3d"}>
        <UILabel>Initial α</UILabel>
        <Input
          placeholder="5"
          value={profile3DAlpha}
          onChange={updateParamProfile3DAlpha}
          style={{ borderColor: profile3DAlphaValid ? "" : "red" }}
        />
      </div>
      <div className="max-w-[350px]" hidden={integrateMethod!=="profile3d"}>
        <UILabel>Initial β</UILabel>
        <Input
          placeholder="5"
          value={profile3DBeta}
          onChange={updateParamProfile3DBeta}
          style={{ borderColor: profile3DBetaValid ? "" : "red" }}
        />
      </div>
    </div>

    {/* Chart */}
    <ResponsiveContainer width="100%" height={250}>
      <LineChart
        width={lineProfileWidth - 60}
        height={300}
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
        <Line type="monotone" dataKey="rawIntensity" name="raw intensity" stroke="#aaa9a9" strokeOpacity={0.5} dot={false} />
        <Line type="monotone" dataKey="intensity" stroke="#ffffff" dot={false} />
        <Line type="monotone" dataKey="background" stroke="#c8e0a0" dot={false} />
        <Line type="monotone" dataKey="lineProfile" name="profile 1d" stroke="#FF8080" strokeWidth={3} dot={false} />
        <Line type="monotone" dataKey="lineProfile3D" name="profile 3d" stroke="#80C7FF" strokeWidth={3} dot={false} />
        <Legend wrapperStyle={{ position: "relative" }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);


}
