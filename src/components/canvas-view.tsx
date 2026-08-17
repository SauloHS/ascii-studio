import { Box, Text } from "ink";
import type { Canvas } from "../core/canvas";
import { getCell } from "../core/canvas";
import { toHex } from "../core/color";

export function CanvasView({ canvas }: { canvas: Canvas }) {
  const rows = [];

  for (let y = 0; y < canvas.height; y++) {
    const cellsInRow = [];

    for (let x = 0; x < canvas.width; x++) {
      const cell = getCell(canvas, x, y);
      cellsInRow.push(
        <Text key={x} color={toHex(cell.fg)}>
          {cell.char}
        </Text>
      );
    }

    rows.push(
      <Box key={y} flexDirection="row">
        {cellsInRow}
      </Box>
    );
  }

  return <Box flexDirection="column">{rows}</Box>
}
