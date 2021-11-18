import React from "react";
import { Rect } from "../../common/types";
import { castToInt } from "../../common/utils";
import CheckboxInput from "../../library/checkbox-input/checkbox-input";
import TextInput from "../../library/text-input/text-input";

export interface RectFormProps {
  value: Rect;
  onChange: (value: Rect) => void;
}

const RectForm: React.FC<RectFormProps> = (props) => {
  const { value, onChange } = props;
  return (
    <>
      <div>
        Width:
        <TextInput
          value={`${value.width}`}
          onChange={(newVal) => {
            onChange({ ...value, width: castToInt(newVal) });
          }}
        />
      </div>

      <div>
        Height:
        <TextInput
          value={`${value.height}`}
          onChange={(newVal) => {
            onChange({
              ...value,
              height: castToInt(newVal),
            });
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

export default RectForm;
