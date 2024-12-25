
import { ResponsiveContainer, Label, LineChart, Line, XAxis, YAxis, Legend } from 'recharts';
import { Input } from "@/components/ui/input"
import React, { useState, useEffect } from 'react';
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

export function IntegrationLinePlot() {

  const {
    serverWS,
    showCalculatedIntegratedReflections: usingCalculatedIntegrationReflections,
    selectedReflectionID
  } = useRootContext();

  const {
		emptyRun,
		setEmptyRun,
		vanadiumRun,
		setVanadiumRun,
		sampleDensity,
		setSampleDensity,
		sampleRadius,
		setSampleRadius,
		sampleAbsorptionXSection,
		setSampleAbsorptionXSection,
		sampleScatteringXSection,
		setSampleScatteringXSection,
		vanadiumDensity,
		setVanadiumDensity,
		vanadiumRadius,
		setVanadiumRadius,
		vanadiumAbsorptionXSection,
		setVanadiumAbsorptionXSection,
		vanadiumScatteringXSection,
		setVanadiumScatteringXSection,
		applyLorentz,
		setApplyLorentz,
		applyIncidentSpectrum,
		setApplyIncidentSpectrum,
		applySphericalAbsorption,
		setApplySphericalAbsorption,
		tOFBBoxPadding,
		setTOFBBoxPadding,
		xYBBoxPadding,
		setXYBBoxPadding,
  } = useIntegrateContext();

  const {
    setStatus,
    tOF,
    intensity,
    background,
    lineProfile,
		lineProfileValue,
		lineProfileSigma,
		summationValue,
		summationSigma,
		title,
  } = useIntegrationProfilerContext();


  interface ProfilerData {
    tof: number
    intensity: number
    background: number
    lineProfile: number
  }

  const size = useWindowSize();

  useEffect(() => {
      let w = size.width;

      if (w !== null){
        setLineProfileWidth(w/2);
      }

  }, [size.width])

  const [profilerData, setProfilerData] = useState<ProfilerData[]>([]);
  const [paramA, setParamA] = useState<string>("200.0");
  const [paramAlpha, setParamAlpha] = useState<string>("0.4");
  const [paramBeta, setParamBeta] = useState<string>("0.4");
  const [paramSigma, setParamSigma] = useState<string>("8.0");
  const [lineProfileWidth, setLineProfileWidth] = useState<number>(980);


  function update_profiler_data() {

    const newProfilerData: ProfilerData[] = intensity.map((_, i) => ({
      tof: tOF[i],
      intensity: intensity[i],
      background: background[i],
      lineProfile: lineProfile[i],
    }));
    setProfilerData(newProfilerData);
  }

  useEffect(() => {
    update_profiler_data();
    setStatus(Status.Loading);
  }, [intensity]);

  const formatAxis = (value: number): string => {
    return value.toFixed(0);
  };

  function updateProfileMethod(value: any) { console.log(value); }

  function updateProfile() {
    let reflType = "observed";
    if (usingCalculatedIntegrationReflections){
      reflType = "calculated_integrated"
    }
    serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "update_integration_profiler",
      "reflection_id": selectedReflectionID,
      "A": paramA,
      "alpha": paramAlpha,
      "beta": paramBeta,
      "sigma": paramSigma,
      "tof_padding": tOFBBoxPadding,
      "xy_padding": xYBBoxPadding,
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
      "type" : reflType
    }));
    setStatus(Status.Loading)
  }

  function updateParamA(event: any) {
    var cleanedInput = event.target.value.replace(/[^0-9.]/g, "");

    // Ensure there is at most one dot
    const dotCount = (cleanedInput.match(/\./g) || []).length;

    if (dotCount > 1) {
      const firstDotIndex = cleanedInput.indexOf('.');
      const lastDotIndex = cleanedInput.lastIndexOf('.');
      cleanedInput = cleanedInput.substring(0, firstDotIndex + 1) + cleanedInput.substring(firstDotIndex + 1, lastDotIndex);
    }
    event.target.value = cleanedInput;
    var value: string = event.target.value;

    if (value == "") {
      value = "200";
    }

    setParamA(value);
  }

  function updateParamXYPadding(event: any) {
    var cleanedInput = event.target.value.replace(/[^0-9.]/g, "");

    // Ensure there is at most one dot
    const dotCount = (cleanedInput.match(/\./g) || []).length;

    if (dotCount > 1) {
      const firstDotIndex = cleanedInput.indexOf('.');
      const lastDotIndex = cleanedInput.lastIndexOf('.');
      cleanedInput = cleanedInput.substring(0, firstDotIndex + 1) + cleanedInput.substring(firstDotIndex + 1, lastDotIndex);
    }
    event.target.value = cleanedInput;
    var value: string = event.target.value;

    if (value == "") {
      value = "5";
    }

    setXYBBoxPadding(value);
  }

  function updateParamAlpha(event: any) {
    var cleanedInput = event.target.value.replace(/[^0-9.]/g, "");

    // Ensure there is at most one dot
    const dotCount = (cleanedInput.match(/\./g) || []).length;

    if (dotCount > 1) {
      const firstDotIndex = cleanedInput.indexOf('.');
      const lastDotIndex = cleanedInput.lastIndexOf('.');
      cleanedInput = cleanedInput.substring(0, firstDotIndex + 1) + cleanedInput.substring(firstDotIndex + 1, lastDotIndex);
    }
    event.target.value = cleanedInput;
    var value: string = event.target.value;

    if (value == "") {
      value = "0.4";
    }

    setParamAlpha(value);

  }
  function updateParamBeta(event: any) {
    var cleanedInput = event.target.value.replace(/[^0-9.]/g, "");

    // Ensure there is at most one dot
    const dotCount = (cleanedInput.match(/\./g) || []).length;

    if (dotCount > 1) {
      const firstDotIndex = cleanedInput.indexOf('.');
      const lastDotIndex = cleanedInput.lastIndexOf('.');
      cleanedInput = cleanedInput.substring(0, firstDotIndex + 1) + cleanedInput.substring(firstDotIndex + 1, lastDotIndex);
    }
    event.target.value = cleanedInput;
    var value: string = event.target.value;

    if (value == "") {
      value = "0.4";
    }

    setParamBeta(value);

  }
  function updateParamSigma(event: any) {
    var cleanedInput = event.target.value.replace(/[^0-9.]/g, "");

    // Ensure there is at most one dot
    const dotCount = (cleanedInput.match(/\./g) || []).length;

    if (dotCount > 1) {
      const firstDotIndex = cleanedInput.indexOf('.');
      const lastDotIndex = cleanedInput.lastIndexOf('.');
      cleanedInput = cleanedInput.substring(0, firstDotIndex + 1) + cleanedInput.substring(firstDotIndex + 1, lastDotIndex);
    }
    event.target.value = cleanedInput;
    var value: string = event.target.value;

    if (value == "") {
      value = "8.0";
    }

    setParamSigma(value);

  }
  function updateParamTOFPadding(event: any) {
    var cleanedInput = event.target.value.replace(/[^0-9]/g, "");

    event.target.value = cleanedInput;
    var value: string = event.target.value;

    if (value == "") {
      value = "30";
    }

    setTOFBBoxPadding(value);

  }

  function updateParam(name: string, cleanedInput: string){
  }

  function updateLorentzCorrection(state: string){}

  function updateIncidentCorrections(state: string){}

  function updateAbsorptionCorrections(state: string){}



  return (
    <div className="w-[100%]">
      <h4>{title}</h4>
      <div className="grid grid-cols gap-8 ">
        <div className="col-start-1 col-end-2">
          <UILabel> Method </UILabel>
          <Select onValueChange={(value) => updateProfileMethod(value)}>
            <SelectTrigger >
              <SelectValue placeholder="1D Profile Fit" defaultValue={"1D Profile Fit"} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="1D">1D Profile Fit</SelectItem>
                <SelectItem disabled={true} value="3D">3D Profile Fit</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="col-start-2 col-end-3" style={{ margin: "-2px 10px" }}   >
          <Table  >
            <TableHeader style={{ lineHeight: "1.0" }}>
              <TableRow>
                <TableHead className="w-[10px]"></TableHead>
                <TableHead>Summation</TableHead>
                <TableHead>1D</TableHead>
                <TableHead>3D</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium min-w-20">I/σ</TableCell>
                <TableCell>{summationSigma < 1E-7 ? "-"  : (summationValue / summationSigma).toFixed(2)}</TableCell>
                <TableCell>{lineProfileSigma < 1E-7 ? "-" : (lineProfileValue / lineProfileSigma).toFixed(2)}</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

<div className="col-span-1">
  <UILabel> ToF Padding (frames) </UILabel>
  <Input placeholder={"30"} value={tOFBBoxPadding} onChange={(event) => updateParamTOFPadding(event)} />
</div>
<div>
  <div className="grid grid-cols-7 gap-0 items-end">
    <div className="col-span-2">
      <UILabel> XY Padding (pixels) </UILabel>
      <Input placeholder={"5"} value={xYBBoxPadding} onChange={(event) => updateParamXYPadding(event)} />
    </div>
    <div className="col-span-2 flex justify-end">
      <CorrectionsPopover
            emptyRun={emptyRun}
            setEmptyRun={setEmptyRun}
            vanadiumRun={vanadiumRun}
            setVanadiumRun={setVanadiumRun}
            sampleDensity={sampleDensity}
            setSampleDensity={setSampleDensity}
            sampleRadius={sampleRadius}
            setSampleRadius={setSampleRadius}
            sampleAbsorptionXSection={sampleAbsorptionXSection}
            setSampleAbsorptionXSection={setSampleAbsorptionXSection}
            sampleScatteringXSection={sampleScatteringXSection}
            setSampleScatteringXSection={setSampleScatteringXSection}
            vanadiumDensity={vanadiumDensity}
            setVanadiumDensity={setVanadiumDensity}
            vanadiumRadius={vanadiumRadius}
            setVanadiumRadius={setVanadiumRadius}
            vanadiumAbsorptionXSection={vanadiumAbsorptionXSection}
            setVanadiumAbsorptionXSection={setVanadiumAbsorptionXSection}
            vanadiumScatteringXSection={vanadiumScatteringXSection}
            setVanadiumScatteringXSection={setVanadiumScatteringXSection}
            applyLorentz={applyLorentz}
            setApplyLorentz={setApplyLorentz}
            applyIncidentSpectrum={applyIncidentSpectrum}
            setApplyIncidentSpectrum={setApplyIncidentSpectrum}
            applySphericalAbsorption={applySphericalAbsorption}
            setApplySphericalAbsorption={setApplySphericalAbsorption}
            updateParamDerived={updateParam}
            updateLorentzCorrectionDerived={updateLorentzCorrection}
            updateIncidentCorrectionsDerived={updateIncidentCorrections}
            updateAbsorptionCorrectionsDerived={updateAbsorptionCorrections}
            serverWS={serverWS}
      ></CorrectionsPopover>
    </div>
    <div className="col-span-3 flex justify-end">
      <Button 
        onClick={updateProfile} 
        variant={"secondary"} 
        className="mt-0"
      >
        <FontAwesomeIcon icon={faRefresh} className="mr-2" />
        Calculate
      </Button>
    </div>
  </div>
</div>
</div>
<div className="mt-4"></div>
      <ResponsiveContainer width="100%" height={300}>
        <div className="flex gap-50">
          <LineChart
            width={lineProfileWidth-60}
            height={300}
            data={profilerData}
            margin={{
              bottom: 25,
              left: 10
            }}
          >
            <XAxis tickFormatter={formatAxis} dataKey="tof" type="number" domain={[tOF[0], tOF[tOF.length - 1]]} allowDataOverflow>
              <Label value="ToF (usec)" position='bottom' />
            </XAxis>
            <YAxis tickFormatter={formatAxis} dataKey="intensity" type="number" allowDataOverflow>
              <Label value="Intensity (AU)" angle={-90} position="left" style={{ textAnchor: 'middle' }} />
            </YAxis>
            <Line type="monotone" dataKey="intensity" stroke="#ffffff" dot={false} activeDot={false} animationDuration={300} />
            <Line type="monotone" dataKey="background" stroke="#aaa9a9" strokeOpacity={.5} dot={false} activeDot={false} animationDuration={300} />
            <Line type="monotone" dataKey="lineProfile" name="profile" stroke="#FF8080" strokeWidth={3} dot={false} activeDot={false} animationDuration={300} />
            <Legend wrapperStyle={{ position: 'relative' }} />
          </LineChart>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
