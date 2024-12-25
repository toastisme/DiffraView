import { useEffect, useState } from 'react';
import { Label, LabelList, BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer } from 'recharts';
import { useExperimentPlannerContext } from '@/contexts/ExperimentPlannerContext';

export function PlannerBarChart() {

  const {
    orientations,
    predReflections,
  } = useExperimentPlannerContext();

  interface Data {
    name: string;
    [key: string]: any;
  }

  var inital_data: Data = {
    name: ""
  }

  const [data, setData] = useState<Data>(inital_data);

  function updateData() {
    var currentData = { ...inital_data };
    for (var i = 0; i < predReflections.length; i++) {
      currentData[`pred_${i}`] = predReflections[i];
    }

    setData(currentData);
  }

  useEffect(() => {
    updateData();
  }, [orientations, predReflections])

  const colors = [
    "#96f97b", "#75bbfd", "#bf77f6", "#13eac9", "#ffb07c",
    "#ffd1df", "#d0fefe", "#ffff84", "#ffffff", "#ff9408",
    "#01f9c6", "#aefd6c", "#fe0002", "#990f4b", "#78d1b6",
    "#fff917", "#ff0789", "#d4ffff", "#69d84f", "#56ae57"
  ];

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
          <Label value="Unique Predicted Reflections" position={"bottom"} style={{ textAnchor: 'middle' }} />
        </XAxis>
        <YAxis axisLine={false} dataKey="name" type="category" />
        <Legend wrapperStyle={{ position: 'relative' }} />

        {orientations.map((_, index) => (
          <Bar key={`pred_${index}`} isAnimationActive={false}
            dataKey={`pred_${index}`}
            stackId="a"
            fill={colors[index]}
            name={orientations[index].toFixed(0) + "°"}
            radius={index === 0 ? [3, 0, 0, 3] : index === orientations.length - 1 ? [0, 3, 3, 0] : [0, 0, 0, 0]}>
            <LabelList dataKey={`pred_${index}`} style={{ fill: "#020817" }} />
          </Bar>
        ))}
        

      </BarChart>
    </ResponsiveContainer>
  );
}
