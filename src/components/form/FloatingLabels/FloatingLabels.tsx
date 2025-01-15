import React, { useState } from 'react';
import './FloatingLabels.scss';

export interface FloatingLabelsProps {
  label: string;
  placeholder?: string;
  value?: string;
  type?: 'text' | 'email' | 'password';
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export const FloatingLabels: React.FC<FloatingLabelsProps> = ({
  label,
  placeholder = '',
  value = '',
  type = 'text',
  disabled = false,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isFilled = Boolean(value) || isFocused;

  return (
    <div className={`floating-label ${disabled ? 'floating-label--disabled' : ''}`}>
      <input
        id={`floating-${label}`}
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        aria-label={label}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => onChange?.(e.target.value)}
        className={`floating-label__input ${isFilled ? 'floating-label__input--filled' : ''}`}
      />
      <label htmlFor={`floating-${label}`} className="floating-label__label">
        {label}
      </label>
    </div>
  );
};
