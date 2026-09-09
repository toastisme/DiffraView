import { Label, LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { useExperimentPlannerContext } from '@/contexts/ExperimentPlannerContext';
import { plannerColors } from './plannerColors';

export function PlannerScanLineChart() {
  const { scanResults } = useExperimentPlannerContext();

  // Build a unified dataset: one row per unique phi value across all scans
  const phiSet = new Set<string>();
  scanResults.forEach(r => r.data.forEach(([phi]) => phiSet.add(phi.toFixed(1))));
  const sortedPhis = Array.from(phiSet)
    .map(Number)
    .sort((a, b) => a - b);

  const scanMaps = scanResults.map(r =>
    new Map(r.data.map(([phi, count]) => [phi.toFixed(1), count]))
  );

  const chartData = sortedPhis.map(phi => {
    const key = phi.toFixed(1);
    const point: { phi: number; [key: string]: number } = { phi };
    scanResults.forEach((_, i) => {
      point[`scan_${i}`] = scanMaps[i].get(key) ?? 0;
    });
    return point;
  });

  return (
    <ResponsiveContainer width="100%" height={170}>
      <LineChart data={chartData} margin={{ left: 10, right: 20, top: 10, bottom: 25 }}>
        <XAxis dataKey="phi" type="number" domain={['dataMin', 'dataMax']}>
          <Label value="φ (°)" position="bottom" style={{ fill: '#aaa' }} />
        </XAxis>
        <YAxis width={45}>
          <Label value="New reflections" angle={-90} position="insideLeft" style={{ fill: '#aaa', textAnchor: 'middle' }} />
        </YAxis>
        <Tooltip
          contentStyle={{ background: 'hsl(222.2 84% 4.9%)', border: '1px solid hsl(217.2 32.6% 17.5%)', borderRadius: '6px' }}
          labelFormatter={(v) => `φ = ${v}°`}
          formatter={(value, name) => {
            const idx = parseInt((name as string).replace('scan_', ''));
            return [value, `${scanResults[idx]?.colorIndex + 1 ?? idx + 1}`];
          }}
        />
        {scanResults.map((r, i) => (
          <Line
            key={i}
            type="monotone"
            dataKey={`scan_${i}`}
            dot={false}
            stroke={plannerColors[r.colorIndex % plannerColors.length]}
            strokeWidth={1.5}
            isAnimationActive={false}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
