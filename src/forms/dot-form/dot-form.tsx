import React from "react";
import { Dot } from "../../common/types";
import { castToInt } from "../../common/utils";
import TextInput from "../../library/text-input/text-input";

export interface DotFormProps {
  value: Dot;
  onChange: (value: Dot) => void;
}

const DotForm: React.FC<DotFormProps> = (props) => {
  const { value, onChange } = props;
  return (
    <>
      <div>
        X:
        <TextInput
          value={`${value.x}`}
          onChange={(newVal) => {
            onChange({ ...value, x: castToInt(newVal) });
          }}
        />
      </div>

      <div>
        Y:
        <TextInput
          value={`${value.y}`}
          onChange={(newVal) => {
            onChange({ ...value, y: castToInt(newVal) });
          }}
        />
      </div>
    </>
  );
};

export default DotForm;
