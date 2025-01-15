import React, { useState, useEffect } from 'react';
import './Select.scss';

export interface SelectProps {
  options: { label: string; value: string }[];
  placeholder?: string;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  onChange: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({
  options,
  placeholder = 'Select an option',
  disabled = false,
  size = 'medium',
  variant = 'primary',
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedValue(value);
    onChange(value);
  };

  useEffect(() => {
    setSelectedValue('');
  }, [options]);  

  return (
    <select
      className={`select select--${size} select--${variant}`}
      disabled={disabled}
      value={selectedValue}
      onChange={handleChange}
    >
      <option value="" disabled hidden>{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={String(option.value)}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
