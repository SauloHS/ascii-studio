import type { Cell } from "./cell";

export type Canvas = {
  width: number,
  height: number,
  cells: Cell[], // plain array
}

export function index(canvas: Canvas, x: number, y: number): number {
  return y * canvas.width + x;
}

export function createCanvas(width: number, height: number): Canvas {
  return {
    width,
    height,
    cells: Array.from({ length: width * height }, () => ({ char: ' ', fg: 0xffffff }))
  }
}

export function getCell(canvas: Canvas, x: number, y: number): Cell {
  const cell = canvas.cells[index(canvas, x, y)];
  if (cell === undefined) {
    throw new Error(`Cell out of bounds: ${x}, ${y}`);
  }

  return cell;
}

export function setCell(canvas: Canvas, x: number, y: number, cell: Cell) {
  canvas.cells[index(canvas, x, y)] = cell;
}
