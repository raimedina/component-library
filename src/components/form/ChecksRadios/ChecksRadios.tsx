import React, { useState } from 'react';
import './ChecksRadios.scss';

export interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface ChecksRadiosProps {
  type: 'checkbox' | 'radio';
  name: string;
  options: Option[];
  onChange?: (selected: string[]) => void;
}

export const ChecksRadios: React.FC<ChecksRadiosProps> = ({
  type,
  name,
  options,
  onChange,
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleChange = (value: string, disabled?: boolean) => {
    if (disabled) return;

    let updatedValues = [...selectedValues];
    if (type === 'checkbox') {
      updatedValues = updatedValues.includes(value)
        ? updatedValues.filter((v) => v !== value)
        : [...updatedValues, value];
    } else {
      updatedValues = [value];
    }

    setSelectedValues(updatedValues);
    onChange && onChange(updatedValues);
  };

  return (
    <div className="checks-radios">
      {options.map((option) => (
        <label
          key={option.value}
          className={`checks-radios__label ${option.disabled ? 'disabled' : ''}`}
        >
          <input
            type={type}
            name={name}
            value={option.value}
            disabled={option.disabled}
            checked={selectedValues.includes(option.value)}
            onChange={() => handleChange(option.value, option.disabled)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};
