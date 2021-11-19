import { Circle, Rect } from "../common/types";
import CircleForm from "../forms/circle-form/circle-form";
import RectForm from "../forms/rect-form/rect-form";

type FormValue = Rect | Circle;

export function getForm(
  value: FormValue,
  onChange: (value: FormValue) => void
) {
  switch (value?.type) {
    case "circle": {
      return <CircleForm value={value} onChange={onChange} />;
    }
    case "rect": {
      return <RectForm value={value} onChange={onChange} />;
    }
    default:
      return null;
  }
}
