import { CanvasView } from "./src/components/canvas-view";
import { render } from "ink";
import { createCanvas, setCell } from "./src/core/canvas";

const canvas = createCanvas(10, 5);
setCell(canvas, 7, 3, { char: 'X', fg: 0xf3d050 })

render(<CanvasView canvas={canvas} />)
