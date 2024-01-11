
import { ResponsiveContainer, Label, LineChart, Line, XAxis, YAxis, Legend, Tooltip} from 'recharts';
import { Input } from "@/components/ui/input"
import { useState, useEffect } from 'react';
import { Label as UILabel} from "@/components/ui/label" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt, faRefresh } from '@fortawesome/free-solid-svg-icons';
import { Button } from "@/components/ui/button"
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
  intensity : number[],
  background : number[],
  lineProfile : number[],
  lineProfileValue : number,
  lineProfileSigma : number,
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

  const [profilerData, setProfilerData] = useState<ProfilerData[]>([]);
  const [paramA, setParamA] = useState<string>("200.0");
  const [paramAlpha, setParamAlpha] = useState<string>("0.4");
  const [paramBeta, setParamBeta] = useState<string>("0.4");
  const [paramSigma, setParamSigma] = useState<string>("8.0");
  const [paramTOFBBox, setParamTOFBBox] = useState<string>("10");


  function update_profiler_data(){

    const newProfilerData: ProfilerData[] = props.intensity.map((intensity, i) => ({
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
    return value.toFixed(2);
  };

  function updateProfileMethod(value:any){}

  function updateProfile(){
    props.serverWS.current?.send(JSON.stringify({
					"channel" : "server",
					"command" : "update_integration_profiler",
          "reflection_id" : props.reflectionID,
          "A" : paramA,
          "alpha" : paramAlpha,
          "beta" : paramBeta,
          "sigma" : paramSigma,
          "tof_bbox" : paramTOFBBox
    }))
    props.setLoading(true);
  }

  function updateParamA(event: any){
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

      if (value == ""){
        value = "200";
      }

    setParamA(value);
  }
  function updateParamAlpha(event: any){
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

      if (value == ""){
        value = "0.4";
      }

    setParamAlpha(value);

  }
  function updateParamBeta(event: any){
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

      if (value == ""){
        value = "0.4";
      }

    setParamBeta(value);

  }
  function updateParamSigma(event: any){
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

      if (value == ""){
        value = "8.0";
      }

    setParamSigma(value);

  }
  function updateParamTOFBBox(event: any){
      var cleanedInput = event.target.value.replace(/[^0-9]/g, "");

      event.target.value = cleanedInput;
      var value: string = event.target.value;

      if (value == ""){
        value = "10";
      }

    setParamTOFBBox(value);

  }

  return (
    <div>
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
        <div className="col-start-2 col-end-3"  style={{ margin: "-2px 10px" }}   >
          <Table  >
            <TableHeader style={{lineHeight:"1.0"}}>
              <TableRow>
                <TableHead className="w-[10px]"></TableHead>
                <TableHead>Summation</TableHead>
                <TableHead>1D</TableHead>
                <TableHead>3D</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">I/σ</TableCell>
                <TableCell>{(props.summationValue/props.summationSigma).toFixed(2)}</TableCell>
                <TableCell>{(props.lineProfileValue/props.lineProfileSigma).toFixed(2)}</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div>
            <UILabel> ToF Bounding Box Size (frames) </UILabel>
            <Input placeholder={"10"} onChange={(event)=> updateParamTOFBBox(event)}/>
        </div>
        <div>
            <div className="grid grid-cols-5 gap-8">
            <div>
            <UILabel> A </UILabel>
            <Input placeholder={"200"} onChange={(event) => updateParamA(event)}/>
            </div>
            <div>
            <UILabel> α </UILabel>
            <Input placeholder={"0.4"} onChange={(event) => updateParamAlpha(event)}/>
            </div>
            <div>
            <UILabel> β </UILabel>
            <Input placeholder={"0.4"} onChange={(event)=> updateParamBeta(event)}/>
            </div>
            <div>
            <UILabel> σ </UILabel>
            <Input placeholder={"10"} onChange={(event)=> updateParamSigma(event)}/>
            </div>
            <div>
            <Button onClick={updateProfile} variant={"secondary"} style={{ marginRight: '0px', marginTop:"23px"}} ><FontAwesomeIcon icon={faRefresh} style={{ marginRight: '5px', marginTop:"0px"}}/>Calculate</Button>
            </div>

            </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <div>
          <LineChart
            width={900}
            height={400}
            data={profilerData}
            margin={{
              bottom: 25,
              left: 10
            }}
          >
            <XAxis tickFormatter={formatAxis} dataKey="tof" type="number" domain={[props.tof[0], props.tof[props.tof.length-1]]}  allowDataOverflow>
              <Label value="ToF (usec)" position='bottom' />
            </XAxis>
            <YAxis tickFormatter={formatAxis} dataKey="intensity" type="number"  allowDataOverflow>
              <Label value="Intensity (AU)" angle={-90} position="left" style={{ textAnchor: 'middle' }} />
            </YAxis>
            <Line type="monotone" dataKey="intensity" stroke="#ffffff" dot={false} activeDot={false} animationDuration={300} />
            <Line type="monotone" dataKey="background" stroke="#aaa9a9" strokeOpacity={.5} dot={false} activeDot={false} animationDuration={300} />
            <Line type="monotone" dataKey="lineProfile" name="profile" stroke="#FF8080" strokeWidth={3} dot={false} activeDot={false} animationDuration={300} />
            <Legend wrapperStyle={{ position: 'relative' }}/>
          </LineChart>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
