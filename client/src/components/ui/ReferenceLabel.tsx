

export function ReferenceLabel(props: any) {
  const {
    fill, value, textAnchor,
    fontSize, viewBox, dy, dx,
  } = props;
  const x = viewBox.width + viewBox.x + 20;
  const y = viewBox.y - 6;
  return (
    <text
      x={x} y={y}
      dy={dy}
      dx={dx}
      fill={fill}
      fontSize={fontSize || 10}
      textAnchor={textAnchor}>
      {value}
    </text>
  )
}
