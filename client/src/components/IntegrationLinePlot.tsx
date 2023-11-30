
import { ResponsiveContainer, Label, LineChart, Line, XAxis, YAxis, Legend} from 'recharts';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { Button } from "@/components/ui/button"

export function IntegrationLinePlot(props: {
  tof: number[],
  intensity : number[],
  background : number[],
  lineProfile : number[],
  lineProfileValue : number,
  lineProfileVariance : number,
  lineplotTitle: string,
}) {


  interface ProfilerData {
    tof: number
    intensity: number
    background: number
    lineProfile: number
  }

  const [profilerData, setProfilerData] = useState<ProfilerData[]>([]);
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
  }, [props.intensity]);

  const formatAxis = (value: number): string => {
    return value.toFixed(2);
  };

  return (
    <div>
      <h4>{props.lineplotTitle}</h4>
      <ResponsiveContainer width="100%" height={200}>
        <div>
          <LineChart
            width={860}
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
