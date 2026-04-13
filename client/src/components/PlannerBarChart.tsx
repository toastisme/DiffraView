import { useEffect, useState } from 'react';
import { Label, LabelList, BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer } from 'recharts';
import { useExperimentPlannerContext } from '@/contexts/ExperimentPlannerContext';
import { Tooltip as RechartsTooltip } from 'recharts';
import { plannerColors } from './plannerColors';

export function PlannerBarChart() {

  const {
    orientations,
    predReflections,
    completeness
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

  const colors = plannerColors;

  function darken(hex: string, amount = 0.1) {
    const num = parseInt(hex.replace("#", ""), 16);
    const r = Math.max(0, ((num >> 16) & 255) * (1 - amount));
    const g = Math.max(0, ((num >> 8) & 255) * (1 - amount));
    const b = Math.max(0, (num & 255) * (1 - amount));
    return `rgb(${r}, ${g}, ${b})`;
  }

  return (
  <ResponsiveContainer width="100%" height={100}>
    <BarChart 
      layout="vertical"
      width={860}
      height={60}
      data={[data]}
      margin={{
        left: -60,
        bottom: 25,
      }}
    >
      <XAxis type="number">
        <Label value="Unique Predicted Reflections" position={"bottom"} style={{ textAnchor: 'middle' }} />
      </XAxis>
      <YAxis axisLine={false} dataKey="name" type="category" />
      <Legend wrapperStyle={{ position: 'relative' }} />
      <RechartsTooltip
        cursor={false}
        isAnimationActive={false}
        content={({ active, payload }) => {
          if (active && payload && payload.length) {
            const items = payload
              .filter(p => p.value != null && Number(p.value) > 0)
              .flatMap((bar, idx) => {
                const barIndex = orientations.findIndex(
                  (o) => o.toFixed(0) + "°" === bar.name
                );
                const pct = barIndex >= 0 && barIndex < completeness.length
                  ? Number(completeness[barIndex]) || 0
                  : -1;
                if (pct < 0) return [];
                return [(
                  <div key={idx} className="text-sm">
                    <span className="font-semibold">{bar.name}:</span> {pct.toFixed(1)}%
                  </div>
                )];
              });
            if (items.length === 0) return null;
            return (
              <div className="bg-popover text-popover-foreground rounded-md border px-3 py-2 shadow-md">
                {items}
              </div>
            );
          }
          return null;
        }}
      />
      <defs>
        {orientations.map((_, index) => {
          const base = colors[index];
          const remaining = darken(base, 0.5);
          let pct = 100;
          if (index <= completeness.length - 1) {
            pct = completeness[index]; 
          }
          return (
            <linearGradient
              key={`grad_${index}`}
              id={`grad_${index}`}
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop offset="0%" stopColor={base} />
              <stop offset={`${pct}%`} stopColor={base} />
              <stop offset={`${pct}%`} stopColor={remaining} />
              <stop offset="100%" stopColor={remaining} />
            </linearGradient>
          );
        })}
      </defs>
      {orientations.map((_, index) => (
        <Bar 
          key={`pred_${index}`} 
          isAnimationActive={false}
          dataKey={`pred_${index}`}
          stackId="a"
          fill={`url(#grad_${index})`}
          name={orientations[index].toFixed(0) + "°"}
          radius={index === 0 ? [3, 0, 0, 3] : index === orientations.length - 1 ? [0, 3, 3, 0] : [0, 0, 0, 0]}
        >
          <LabelList dataKey={`pred_${index}`} style={{ fill: "#020817" }} />
        </Bar>
      ))}
    </BarChart>
  </ResponsiveContainer>
);

}
