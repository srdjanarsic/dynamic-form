import React from "react";

export interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const { value, onChange } = props;
  return (
    <input
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
      }}
    ></input>
  );
};

export default TextInput;
