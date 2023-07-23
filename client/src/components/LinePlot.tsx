import { Label, LineChart, Line, XAxis, YAxis} from 'recharts';
import { LineplotData } from '@/types';

const x = Array.from(Array(1821), (_, i) => i);
const y = Array.from(Array(1821), (_, i) => Math.floor(Math.random() * 100));

interface TofData{
	tof: number;
	intensity: number;
}

const tofData: TofData[] = [];

for (var i = 0; i < x.length; i++){
	tofData.push(
		{
			tof: x[i],
			intensity: y[i] * Math.E**(-x[i]/182)
		}
	)
}


export function LinePlot(props: {lineplotData: LineplotData[], lineplotTitle: string}) {
    return (
		<div>
		<h4>{props.lineplotTitle}</h4>

        <LineChart
          width={860}
          height={200}
          data={props.lineplotData}
		  margin={{
			bottom:25,
			left:10
		  }}
        >
          <XAxis dataKey="x" type="number">
			<Label value="ToF (usec)" position='bottom'/>
		  </XAxis>
          <YAxis dataKey ="y" type="number">
			<Label value="Intensity (AU)" angle={-90}  position="left" style={{ textAnchor: 'middle' }}/>
		  </YAxis>
          <Line type="monotone" dataKey="y" stroke="#adfa1d" dot={false} activeDot={false} />
        </LineChart>
		</div>
    );
  }