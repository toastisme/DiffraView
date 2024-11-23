
import { ResponsiveContainer, Label, LineChart, Line, XAxis, YAxis, Legend } from 'recharts';
import { Input } from "@/components/ui/input"
import { useState, useEffect } from 'react';
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

export function IntegrationLinePlot(props: {
  tof: number[],
  intensity: number[],
  background: number[],
  lineProfile: number[],
  lineProfileValue: number,
  lineProfileSigma: number,
  summationValue: number,
  summationSigma: number,
  lineplotTitle: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  serverWS: React.MutableRefObject<WebSocket | null>,
  reflectionID: string
}) {


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
  const [paramXYPadding, setparamXYPadding] = useState<string>("5");
  const [paramA, setParamA] = useState<string>("200.0");
  const [paramAlpha, setParamAlpha] = useState<string>("0.4");
  const [paramBeta, setParamBeta] = useState<string>("0.4");
  const [paramSigma, setParamSigma] = useState<string>("8.0");
  const [paramTOFPadding, setParamTOFPadding] = useState<string>("50");
  const [lineProfileWidth, setLineProfileWidth] = useState<number>(980);


  function update_profiler_data() {

    const newProfilerData: ProfilerData[] = props.intensity.map((_, i) => ({
      tof: props.tof[i],
      intensity: props.intensity[i],
      background: props.background[i],
      lineProfile: props.lineProfile[i],
    }));
    setProfilerData(newProfilerData);
  }

  useEffect(() => {
    update_profiler_data();
    props.setLoading(false);
  }, [props.intensity]);

  const formatAxis = (value: number): string => {
    return value.toFixed(0);
  };

  function updateProfileMethod(value: any) { console.log(value); }

  function updateProfile() {
    props.serverWS.current?.send(JSON.stringify({
      "channel": "server",
      "command": "update_integration_profiler",
      "reflection_id": props.reflectionID,
      "A": paramA,
      "alpha": paramAlpha,
      "beta": paramBeta,
      "sigma": paramSigma,
      "tof_padding": paramTOFPadding,
      "xy_padding": paramXYPadding
    }))
    props.setLoading(true);
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

    setparamXYPadding(value);
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

    setParamTOFPadding(value);

  }

  return (
    <div className="w-[100%]">
      <h4>{props.lineplotTitle}</h4>
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
                <TableCell>{props.summationSigma < 1E-7 ? "-"  : (props.summationValue / props.summationSigma).toFixed(2)}</TableCell>
                <TableCell>{props.lineProfileSigma < 1E-7 ? "-" : (props.lineProfileValue / props.lineProfileSigma).toFixed(2)}</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

<div className="col-span-1">
  <UILabel> ToF Padding (frames) </UILabel>
  <Input placeholder={"30"} onChange={(event) => updateParamTOFPadding(event)} />
</div>
<div>
  <div className="grid grid-cols-4 gap-8 items-end">
    <div className="col-span-1">
      <UILabel> XY Padding (pixels) </UILabel>
      <Input placeholder={"5"} onChange={(event) => updateParamXYPadding(event)} />
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
<div className="mt-4"></div>

      </div>
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
            <XAxis tickFormatter={formatAxis} dataKey="tof" type="number" domain={[props.tof[0], props.tof[props.tof.length - 1]]} allowDataOverflow>
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
