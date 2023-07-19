import { Label, LineChart, Line, XAxis, YAxis} from 'recharts';

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


export function LinePlot() {
    return (
        <LineChart
          width={860}
          height={200}
          data={tofData}
		  margin={{
			bottom:25,
			left:10
		  }}
        >
          <XAxis dataKey="tof" type="number">
			<Label value="Frame" position='bottom'/>
		  </XAxis>
          <YAxis dataKey ="intensity" type="number">
			<Label value="Intensity" angle={-90}  position="left"/>
		  </YAxis>
          <Line type="monotone" dataKey="intensity" stroke="#adfa1d" dot={false} activeDot={false} />
        </LineChart>
    );
  }