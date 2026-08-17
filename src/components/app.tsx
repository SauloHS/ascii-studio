import { useState } from "react";
import { useInput } from "ink";
import { createCanvas, setCell } from "../core/canvas";
import { CanvasView } from "./canvas-view";
import { clamp } from "../core/math";

export function App() {
  const [canvas, setCanvas] = useState(() => createCanvas(10, 5));
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  useInput((input, key) => {
    if (key.leftArrow) {
      setCursorX((prev) => clamp(prev - 1, 0, canvas.width - 1));
    }
    if (key.rightArrow) {
      setCursorX((prev) => clamp(prev + 1, 0, canvas.width - 1));
    }
    if (key.upArrow) {
      setCursorY((prev) => clamp(prev - 1, 0, canvas.height - 1));
    }
    if (key.downArrow) {
      setCursorY((prev) => clamp(prev + 1, 0, canvas.height - 1));
    }
    if (input) {
      setCanvas((prev) => {
        setCell(prev, cursorX, cursorY, { char: input, fg: 0xffffff });
        return { ...prev };
      });
    }
  });

  return <CanvasView canvas={canvas} cursorX={cursorX} cursorY={cursorY} />
}
