import React from "react";
import { Circle } from "../common/types";

export interface CircleElementProps {
  value: Circle;
}

const CircleElement: React.FC<CircleElementProps> = (props) => {
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
      <strong>Circle</strong>
      <div>Radius: {value.radius}</div>
      <div>Filled: {value.filled ? "true" : "false"}</div>

      <div
        style={{
          position: "absolute",
          border: "4px solid green",
          borderRadius: `${value.radius}px`,
          width: `${value.radius}px`,
          height: `${value.radius}px`,
          ...(value.filled && { backgroundColor: "green" }),
        }}
      ></div>
    </div>
  );
};

export default CircleElement;
