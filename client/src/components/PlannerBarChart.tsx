import { useEffect, useState } from 'react';
import { Label, LabelList, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function PlannerBarChart(props : {
	reflections: number[],
	orientations: number[],
}){

	interface Data {
	name: string;
	[key: string]: any; 
	}

	var inital_data: Data = {
		name: ""
	}

	const [data, setData] = useState<Data>(inital_data);


	function updateData(){
		var currentData = inital_data;
		for (var i = 0; i < props.reflections.length; i++){
			currentData[i] = props.reflections[i];
		}

		setData(currentData);

	}

	useEffect(() => {
		updateData();
	}, [props.orientations])

	const colors = [
		"#95BDFF",
		"#F6FDC3",
		"#FF8080",
		"#FFCF96",
		"#D0BFFF",
		"#CDFAD5",

	]

    return (
      <ResponsiveContainer width="100%" height={100}>
        <BarChart layout="vertical"
          width={860}
          height={60}
          data={[data]}
          margin={{
            left: -60,
            bottom: 25,
          }}
        >
          <XAxis type="number" >
			<Label value="Unique Predicted Reflections" position={"bottom"} style={{ textAnchor: 'middle' }}/>
		  </XAxis>
          <YAxis axisLine={false} dataKey="name" type="category"/>
          <Legend wrapperStyle={{ position: 'relative' }}/>

			{props.orientations.map((entry, index) => (
				<Bar key={index} isAnimationActive={false}
					dataKey={index} 
					stackId="a" 
					fill={colors[index]}
					name={props.orientations[index].toFixed(0) + "°"} 
					radius={index === 0 ? [3, 0, 0, 3] : index === props.orientations.length - 1 ? [0, 3, 3, 0] : [0, 0, 0, 0]} >
					<LabelList dataKey={index} style={{fill: "#020817"}}/>
			</Bar>
			))}

        </BarChart>
      </ResponsiveContainer>
    );
}
