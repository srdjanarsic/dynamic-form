import React from "react";
import { Rect } from "../common/types";

export interface RectElementProps {
  value: Rect;
}

const RectElement: React.FC<RectElementProps> = (props) => {
  const { value } = props;
  return (
    <div
      style={{
        position: "relative",
        border: "1px solid red",
        width: `500px`,
        height: `300px`,
      }}
    >
      <strong>Rect</strong>
      <div>Width: {value.width}</div>
      <div>Height: {value.height}</div>

      <div
        style={{
          position: "absolute",
          border: "4px solid red",
          width: `${value.width}px`,
          height: `${value.height}px`,
          ...(value.filled && { backgroundColor: "red" }),
        }}
      ></div>
    </div>
  );
};

export default RectElement;
