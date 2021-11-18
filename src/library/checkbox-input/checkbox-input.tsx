import React from "react";

export interface CheckboxInputProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

const CheckboxInput: React.FC<CheckboxInputProps> = (props) => {
  const { value, onChange } = props;
  return (
    <input
      checked={value}
      type="checkbox"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.checked);
      }}
    ></input>
  );
};

export default CheckboxInput;
