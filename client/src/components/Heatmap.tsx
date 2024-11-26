import { useState } from "react";

type HeatMapProps = {
  data: number[][]; 
  mask: number[][]; 
};

export function HeatMap({ data, mask }: HeatMapProps) {
  const defaultData: number[][] = Array.from({ length: 10 }, () =>
      Array.from({ length: 10 }, () => 0)
    );

  const gridData = data.length > 0 ? data : defaultData;
  const gridMask = mask.length > 0 ? mask : defaultData;

  const additionalProperties = gridMask.map(row =>
    row.map(value => {
      if (value & (1 << 2)) return "foreground";
      if (value & (1 << 1)) return "background";
      return "none";
    })
  );

  const CONTAINER_SIZE = 225;
  const LEGEND_HEIGHT = 30;
  const TOTAL_HEIGHT = CONTAINER_SIZE + LEGEND_HEIGHT;
  const BORDER_WIDTH = 1;
  const PADDING = 10;
  const BORDER_COLOR = '#666666';
  const BORDER_RADIUS = 10;
  const availableSpace = CONTAINER_SIZE - (2 * (BORDER_WIDTH + PADDING));
  const rows = gridData.length;
  const cols = gridData[0].length;
  const cellSize = availableSpace / Math.max(rows, cols);
  const xOffset = (availableSpace - cols * cellSize) / 2 + BORDER_WIDTH + PADDING;
  const yOffset = (availableSpace - rows * cellSize) / 2 + BORDER_WIDTH + PADDING;

  const getColor = (value: number, property?: string): string => {
    const alpha = Math.min(Math.max(value+0.25, 0), 1);
    if (property === "foreground") return `rgba(150, 249, 123, ${alpha})`;
    if (property === "background") return `rgba(106, 118, 136, ${alpha})`;
    return `rgba(255, 255, 255, ${alpha})`;
  };

  const [hoveredCell, setHoveredCell] = useState<{ value: number; x: number; y: number } | null>(null);

  return (
    <div style={{ position: "relative", width: CONTAINER_SIZE, height: TOTAL_HEIGHT }}>
      <svg
        width={CONTAINER_SIZE}
        height={TOTAL_HEIGHT}
        style={{ backgroundColor: '#020817', fontFamily: "Roboto, sans-serif" }}
      >
        <rect
          x={BORDER_WIDTH / 2}
          y={BORDER_WIDTH / 2}
          width={CONTAINER_SIZE - BORDER_WIDTH}
          height={CONTAINER_SIZE - BORDER_WIDTH}
          rx={BORDER_RADIUS}
          ry={BORDER_RADIUS}
          fill="none"
          stroke={BORDER_COLOR}
          strokeWidth={BORDER_WIDTH}
        />

        {gridData.map((row, rowIndex) =>
          row.map((value, colIndex) => {
            const property = additionalProperties[rowIndex][colIndex];
            const cellX = xOffset + colIndex * cellSize;
            const cellY = yOffset + rowIndex * cellSize;

            return (
              <rect
                key={`${rowIndex}-${colIndex}`}
                x={cellX}
                y={cellY}
                width={cellSize}
                height={cellSize}
                fill={getColor(value, property)}
                stroke="#000"
                onMouseMove={(event) =>
                  setHoveredCell({
                    value,
                    x: event.nativeEvent.offsetX,
                    y: event.nativeEvent.offsetY,
                  })
                }
                onMouseLeave={() => setHoveredCell(null)}
              />
            );
          })
        )}

      </svg>

      {hoveredCell && (
        <div
          style={{
            position: "absolute",
            left: hoveredCell.x + 15,
            top: hoveredCell.y - 20,
            backgroundColor:  '#020817',
            color: "#fff",
            padding: "8px",
            borderRadius: "5px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            pointerEvents: "none",
            fontSize: "14px",
          }}
        >
          {(hoveredCell.value).toFixed(3)}
        </div>
      )}
    </div>
  );
}
