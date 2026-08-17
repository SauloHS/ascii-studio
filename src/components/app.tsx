import { useState } from "react";
import { useInput } from "ink";
import { createCanvas } from "../core/canvas";
import { CanvasView } from "./canvas-view";
import { clamp } from "../core/math";

export function App() {
  const [canvas] = useState(() => createCanvas(10, 5));
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  useInput((input, key) => {
    if (key.leftArrow) {
      setCursorX(clamp(cursorX - 1, 0, canvas.width - 1));
    }
    if (key.rightArrow) {
      setCursorX(clamp(cursorX + 1, 0, canvas.width - 1));
    }
    if (key.upArrow) {
      setCursorY(clamp(cursorY - 1, 0, canvas.height - 1));
    }
    if (key.downArrow) {
      setCursorY(clamp(cursorY + 1, 0, canvas.height - 1));
    }
  });

  return <CanvasView canvas={canvas} cursorX={cursorX} cursorY={cursorY} />
}
