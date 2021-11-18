import React from "react";
import { Dot } from "../common/types";

export interface DotElementProps {
  value: Dot;
}

const DotElement: React.FC<DotElementProps> = (props) => {
  const { value } = props;
  return (
    <div
      style={{
        position: "relative",
        border: "1px solid green",
        width: `500px`,
        height: `150px`,
      }}
    >
      <strong>Dot</strong>
      <div>X: {value.x}</div>
      <div>Y: {value.y}</div>

      <div
        style={{
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            border: "4px solid blue",
            left: `${value.x}px`,
            top: `${value.y}px`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default DotElement;
