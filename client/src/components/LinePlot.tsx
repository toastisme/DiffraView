import { Label, LineChart, Line, XAxis, YAxis, ReferenceArea, ReferenceDot } from 'recharts';
import { LineplotBboxData, LineplotCentroidData, LineplotData } from '@/types';

export function LinePlot(props: {
	lineplotData: LineplotData[], 
	lineplotBboxData: LineplotBboxData[], 
	lineplotCentroidData: LineplotCentroidData[], 
	lineplotTitle: string, 
	}) {

  return (
    <div>
      <h4>{props.lineplotTitle}</h4>
      <LineChart
        width={860}
        height={200}
        data={props.lineplotData}
        margin={{
          bottom: 25,
          left: 10
        }}
      >
        <XAxis dataKey="x" type="number">
          <Label value="ToF (usec)" position='bottom'/>
        </XAxis>
        <YAxis dataKey="y" type="number">
          <Label value="Intensity (AU)" angle={-90} position="left" style={{ textAnchor: 'middle' }}/>
        </YAxis>
        <Line type="monotone" dataKey="y" stroke="#ffffff" dot={false} activeDot={false} />
        {props.lineplotBboxData.map((entry, index) => (
          <ReferenceArea
            key={`annotation-${index}` + Math.random().toString()}
            x1={entry.x1}
            x2={entry.x2}
			fill={'rgba(255, 255, 255, 0.25)'}
	  		stroke={'rgba(255, 255, 255, 0.1)'}
			strokeWidth={2}
          />
        ))}
        {props.lineplotCentroidData.map((entry, index) => (
          <ReferenceDot
            key={`annotation-${index}`}
            x={entry.x}
            y={entry.y}
			fill={'white'}
	  		stroke={'white'}
			r={2}
          />
        ))}

      </LineChart>
    </div>
  );
}