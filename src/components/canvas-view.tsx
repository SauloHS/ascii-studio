import { Box, Text } from "ink";
import type { Canvas } from "../core/canvas";
import { getCell } from "../core/canvas";
import { toHex } from "../core/color";

export function CanvasView({ canvas, cursorX, cursorY }: { canvas: Canvas; cursorX: number; cursorY: number }) {
  const rows = [];

  for (let y = 0; y < canvas.height; y++) {
    const cellsInRow = [];

    for (let x = 0; x < canvas.width; x++) {
      const cell = getCell(canvas, x, y);
      const isCursor = x === cursorX && y === cursorY;
      cellsInRow.push(
        <Text key={x} color={toHex(cell.fg)} inverse={isCursor}>
          {cell.char}
        </Text >
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
