import { ResponsiveContainer, Label, LineChart, Line, XAxis, YAxis, ReferenceArea, ReferenceDot } from 'recharts';
import { LineplotBboxData, LineplotCentroidData, LineplotData } from '@/types';
import { useState, useEffect } from 'react';

export function LinePlot(props: {
	lineplotData: LineplotData[], 
	lineplotBboxData: LineplotBboxData[], 
	lineplotCentroidData: LineplotCentroidData[], 
	lineplotTitle: string, 
	}) {

	const initialState = {
		data: props.lineplotData,
		left: "dataMin",
		right: "dataMax",
		refAreaLeft: "",
		refAreaRight: "",
		top: "dataMax+1",
		bottom: "dataMin-1",
		animation: true
	};

	const [state, setState] = useState(initialState);

	const findIndexByX = (dataArray: LineplotData[], targetX: number): number => {
 	 const xValues = dataArray.map((item) => item.x);
 	 return xValues.indexOf(targetX);
	};

	const getAxisYDomain = (
	from: number,
	to: number,
	offset: number
	) => {

	from = findIndexByX(props.lineplotData, from);
	to = findIndexByX(props.lineplotData, to);
	const refData: any[] = props.lineplotData.slice(from - 1, to);
	let [bottom, top] = [0, refData[0]["y"]];

	refData.forEach((d) => {
		if (d["y"] > top) top = d["y"];
	});

	return [bottom, (top | 0) + offset];
	};


	useEffect(() => {
		setState({
		...state,
		data: props.lineplotData,
		refAreaLeft: "",
		refAreaRight: "",
		left: "dataMin",
		right: "dataMax",
		top: "dataMax+1",
		bottom: "dataMin",
		});

	}, [props.lineplotData]);


	const zoom = () => {
		let { refAreaLeft, refAreaRight } = state;
		const { data } = state;

		if (refAreaLeft === refAreaRight || refAreaRight === "") {
		setState({
			...state,
			refAreaLeft: "",
			refAreaRight: ""
		});
		return;
		}

		// xAxis domain
		if (refAreaLeft > refAreaRight)
		[refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

		const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, 1);

		setState({
		...state,
		refAreaLeft: "",
		refAreaRight: "",
		data: data.slice(),
		left: refAreaLeft,
		right: refAreaRight,
		bottom: bottom,
		top: top
		});
	};

	const zoomOut = () => {
		const { data } = state;
		setState({
		...state,
		data: data.slice(),
		refAreaLeft: "",
		refAreaRight: "",
		left: "dataMin",
		right: "dataMax",
		top: "dataMax+1",
		bottom: "dataMin",
		});
	};

  return (
    <div>
      <h4>{props.lineplotTitle}</h4>
	  <ResponsiveContainer width="100%" height={200}>
		<div>
	    <button type="button" className="btn update" onClick={zoomOut}>
        Zoom Out
      </button>
      <LineChart
        width={860}
        height={200}
        data={state.data}
        margin={{
          bottom: 25,
          left: 10
        }}
		onMouseDown={(e: any) => {
			setState({ ...state, refAreaLeft: e.activeLabel })}}
        onMouseMove={(e: any) =>
          {
			state.refAreaLeft && setState({ ...state, refAreaRight: e.activeLabel })
		  }
        }
        onMouseUp={zoom}
      >
        <XAxis dataKey="x" type="number" domain={[state.left, state.right]} allowDataOverflow>
          <Label value="ToF (usec)" position='bottom'/>
        </XAxis>
        <YAxis dataKey="y" type="number" domain={[state.bottom, state.top]} allowDataOverflow>
          <Label value="Intensity (AU)" angle={-90} position="left" style={{ textAnchor: 'middle' }}/>
        </YAxis>
        <Line type="monotone" dataKey="y" stroke="#ffffff" dot={false} activeDot={false} animationDuration={300} />
        {props.lineplotBboxData.map((entry, index) => (
          <ReferenceArea
            key={`annotation-${index}` + Math.random().toString()}
            x1={entry.x1}
            x2={entry.x2}
			fill={'rgba(255, 255, 255, 0.25)'}
	  		stroke={'rgba(255, 255, 255, 0.1)'}
			strokeWidth={2}
			animationDuration={300}
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

		        {state.refAreaLeft && state.refAreaRight ? (
          <ReferenceArea
            yAxisId="1"
            x1={state.refAreaLeft}
            x2={state.refAreaRight}
            strokeOpacity={0.9}
			animationDuration={300}
          />
        ) : null}
      </LineChart>
	  </div>
	  </ResponsiveContainer>
    </div>
  );
}