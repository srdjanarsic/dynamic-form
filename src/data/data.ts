import { Rect, Circle } from "../common/types";

export const getMockData = (): Array<Rect | Circle> => [
  { id: 1, type: "circle", radius: 30, filled: false },
  { id: 2, type: "circle", radius: 80, filled: false },
  { id: 3, type: "rect", width: 100, height: 100, filled: false },
  { id: 4, type: "rect", width: 50, height: 50, filled: false },
  { id: 5, type: "circle", radius: 50, filled: true },
  { id: 6, type: "rect", width: 150, height: 150, filled: false },
];
