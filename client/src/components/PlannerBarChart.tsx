import { useEffect, useState } from 'react';
import { Label, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
			var key = props.orientations[i];
			currentData[key.toString() + "°"] = props.reflections[i];
		}

		setData(currentData);
		console.log("test UPdateData ccalled currentData", data);

	}

	useEffect(() => {
		console.log("test useEffect called", props.orientations, props.reflections)
		updateData();
		console.log("data", data);
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
				<Bar key={entry.toString()} 
					dataKey={entry.toFixed(0).toString() + "°"} 
					stackId="a" 
					fill={colors[index]} 
					radius={index === 0 ? [3, 0, 0, 3] : index === props.orientations.length - 1 ? [0, 3, 3, 0] : [0, 0, 0, 0]} />
			))}

        </BarChart>
      </ResponsiveContainer>
    );
}
