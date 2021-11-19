import { Circle, Rect } from "../common/types";
import CircleElement from "../elements/circle-element";
import RectElement from "../elements/rect-element";

type ElementValue = Rect | Circle;

export function getElement(value: ElementValue) {
  switch (value?.type) {
    case "circle": {
      return <CircleElement value={value} />;
    }
    case "rect": {
      return <RectElement value={value} />;
    }
    default:
      return null;
  }
}
