import { useState, useEffect } from "react";
import { useIntegrationProfilerContext } from "@/contexts/IntegrationProfilerContext";
import { useIntegrateContext } from "@/contexts/IntegrateContext";

export function HeatMap() {
  const {
    shoebox2D,
    shoeboxMaskEllipse2D,
    shoeboxMaskSeedSkewness2D,
    shoeboxMaskProfile1D2D,
  } = useIntegrationProfilerContext();

  const { integrateMethod } = useIntegrateContext();

  const defaultData: number[][] = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => 0)
  );

  const [additionalProperties, setAdditionalProperties] = useState<string[][]>(
    Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => "none"))
  );

  useEffect(() => {
    let mask: number[][] = [];
    switch (integrateMethod) {
      case "summation":
        mask = shoeboxMaskEllipse2D;
        break;
      case "seed-skewness":
        mask = shoeboxMaskSeedSkewness2D;
        break;
      case "profile-1d":
        mask = shoeboxMaskProfile1D2D;
        break;
    }

    const gridData = shoebox2D.length > 0 ? shoebox2D : defaultData;
    const gridMask = mask.length > 0 ? mask : gridData;

    const newAdditionalProperties = gridMask.map((row) =>
      row.map((value) => {
        if (value & (1 << 2)) return "foreground";
        if (value & (1 << 1)) return "background";
        return "none";
      })
    );

    setAdditionalProperties(newAdditionalProperties);
  }, [integrateMethod, shoebox2D, shoeboxMaskEllipse2D, shoeboxMaskSeedSkewness2D, shoeboxMaskProfile1D2D]);

  const CONTAINER_SIZE = 225;
  const LEGEND_HEIGHT = 30;
  const TOTAL_HEIGHT = CONTAINER_SIZE + LEGEND_HEIGHT;
  const BORDER_WIDTH = 1;
  const PADDING = 10;
  const BORDER_COLOR = '#666666';
  const BORDER_RADIUS = 10;
  const availableSpace = CONTAINER_SIZE - (2 * (BORDER_WIDTH + PADDING));
  const rows = shoebox2D.length > 0 ? shoebox2D.length : defaultData.length;
  const cols = shoebox2D.length > 0 ? shoebox2D[0].length : defaultData[0].length;
  const cellSize = availableSpace / Math.max(rows, cols);
  const xOffset = (availableSpace - cols * cellSize) / 2 + BORDER_WIDTH + PADDING;
  const yOffset = (availableSpace - rows * cellSize) / 2 + BORDER_WIDTH + PADDING;

  const getColor = (value: number, property?: string): string => {
    const alpha = Math.min(Math.max(value + 0.25, 0), 1);
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

        {(shoebox2D.length > 0 ? shoebox2D : defaultData).map((row, rowIndex) =>
          row.map((value, colIndex) => {
            const property = additionalProperties[rowIndex]?.[colIndex]?? "background";
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
            backgroundColor: '#020817',
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