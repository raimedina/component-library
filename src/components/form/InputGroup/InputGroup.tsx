import React, { useState, useCallback } from 'react';
import './InputGroup.scss';

export interface InputGroupProps {
  prepend?: string | React.ReactNode;
  append?: string | React.ReactNode;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  className?: string;
}

export const InputGroup: React.FC<InputGroupProps> = ({
  prepend,
  append,
  placeholder = 'Enter text',
  value = '',
  disabled = false,
  onChange,
  className = '',
}) => {
  const [internalValue, setInternalValue] = useState(value);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInternalValue(newValue);
      onChange?.(newValue);
    },
    [onChange]
  );

  return (
    <div className={`input-group ${disabled ? 'input-group--disabled' : ''} ${className}`}>
      {prepend && <span className="input-group__prepend">{prepend}</span>}
      <input
        type="text"
        className="input-group__input"
        placeholder={placeholder}
        value={internalValue}
        disabled={disabled}
        onChange={handleChange}
      />
      {append && <span className="input-group__append">{append}</span>}
    </div>
  );
};