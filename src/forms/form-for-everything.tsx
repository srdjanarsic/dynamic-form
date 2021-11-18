import React from "react";
import { Dot, Circle, Rect } from "../common/types";
import { castToInt } from "../common/utils";
import CheckboxInput from "../library/checkbox-input/checkbox-input";
import TextInput from "../library/text-input/text-input";

export interface FormForEverythingProps {
  dotValue: Dot;
  circleValue: Circle;
  rectValue: Rect;
  onDotChange: (value: Dot) => void;
  onCircleChange: (value: Circle) => void;
  onRectChange: (value: Rect) => void;
  type: "dot" | "rect" | "circle";
}

const FormForEverything: React.FC<FormForEverythingProps> = (props) => {
  const {
    dotValue,
    circleValue,
    rectValue,
    onDotChange,
    onCircleChange,
    onRectChange,
    type,
  } = props;

  if (type === "circle") {
    return (
      <>
        CIRCLE
        <div>
          Radius:
          <TextInput
            value={`${circleValue.radius}`}
            onChange={(newVal) => {
              onCircleChange({ ...circleValue, radius: castToInt(newVal) });
            }}
          />
        </div>
        <div>
          Filled:
          <CheckboxInput
            value={circleValue.filled}
            onChange={(newVal) => {
              onCircleChange({ ...circleValue, filled: newVal });
            }}
          />
        </div>
      </>
    );
  } else if (type === "dot") {
    return (
      <>
        DOT
        <div>
          X:
          <TextInput
            value={`${dotValue.x}`}
            onChange={(newVal) => {
              onDotChange({ ...dotValue, x: castToInt(newVal) });
            }}
          />
        </div>
        <div>
          Y:
          <TextInput
            value={`${dotValue.y}`}
            onChange={(newVal) => {
              onDotChange({ ...dotValue, y: castToInt(newVal) });
            }}
          />
        </div>
      </>
    );
  } else if (type === "rect") {
    return (
      <>
        RECT
        <div>
          Width:
          <TextInput
            value={`${rectValue.width}`}
            onChange={(newVal) => {
              onRectChange({ ...rectValue, width: castToInt(newVal) });
            }}
          />
        </div>
        <div>
          Height:
          <TextInput
            value={`${rectValue.height}`}
            onChange={(newVal) => {
              onRectChange({
                ...rectValue,
                height: castToInt(newVal),
              });
            }}
          />
        </div>
        <div>
          Filled:
          <CheckboxInput
            value={rectValue.filled}
            onChange={(newVal) => {
              onRectChange({ ...rectValue, filled: newVal });
            }}
          />
        </div>
      </>
    );
  }

  return null;
};

export default FormForEverything;
