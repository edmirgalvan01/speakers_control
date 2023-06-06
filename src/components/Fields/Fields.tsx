import { useId } from "react";

import "./Fields.css";

interface Props {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export const FieldInput = ({
  label,
  value,
  onChange,
  type = "text",
}: Props) => {
  const fieldId = useId();

  return (
    <div className="field">
      <label htmlFor={fieldId}>{label}</label>
      <input
        type={type}
        value={value}
        name={fieldId}
        id={fieldId}
        onChange={onChange}
      />
    </div>
  );
};

interface SelectProps {
  type?: string;
  label: string;
  defaultText: string;
  options?: Array<{ label: string; value: string | number }>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const FieldSelect = ({
  label,
  options,
  defaultText,
  onChange,
}: SelectProps) => {
  const fieldId = useId();

  return (
    <div className="field">
      <label htmlFor={fieldId}>{label}</label>
      <select name={fieldId} id={fieldId} onChange={onChange}>
        <option value="">{defaultText}</option>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
