import React from "react";
import { Circle } from "../../common/types";
import { castToInt } from "../../common/utils";
import CheckboxInput from "../../library/checkbox-input/checkbox-input";
import TextInput from "../../library/text-input/text-input";

export interface RectFormProps {
  value: Circle;
  onChange: (value: Circle) => void;
}

const CircleForm: React.FC<RectFormProps> = (props) => {
  const { value, onChange } = props;
  return (
    <>
      <div>
        Radius:
        <TextInput
          value={`${value.radius}`}
          onChange={(newVal) => {
            onChange({ ...value, radius: castToInt(newVal) });
          }}
        />
      </div>

      <div>
        Filled:
        <CheckboxInput
          value={value.filled}
          onChange={(newVal) => {
            onChange({ ...value, filled: newVal });
          }}
        />
      </div>
    </>
  );
};

export default CircleForm;
