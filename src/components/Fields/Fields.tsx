import { useId } from "react";

import "./Fields.css";

interface Props {
  label: string;
  value: string;
  type?: string;
}

export const FieldInput = ({ label, value, type = "text" }: Props) => {
  const fieldId = useId();

  return (
    <div className="field">
      <label htmlFor={fieldId}>{label}</label>
      <input type={type} value={value} name={fieldId} id={fieldId} />
    </div>
  );
};
