import React from "react";

export interface FormInfoProps {
  value: { id: number; type: "rect" | "circle" };
}

const FormInfo: React.FC<FormInfoProps> = (props) => {
  const { value } = props;
  return (
    <div>
      id: {value.id}, type: {value.type}
    </div>
  );
};

export default FormInfo;
