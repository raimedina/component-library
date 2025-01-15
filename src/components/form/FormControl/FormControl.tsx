import React, { useState, useCallback, useEffect } from 'react';
import './FormControl.scss';

export interface FormControlProps {
  label?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const FormControl: React.FC<FormControlProps> = ({
  label,
  placeholder = 'Enter text',
  value,
  disabled = false,
  required = false,
  error = '',
  onChange,
  className = '',
}) => {
  const [internalValue, setInternalValue] = useState(value || '');
  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    setInternalValue(value || '');
  }, [value]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInternalValue(newValue);
      onChange?.(newValue);
      if (required) {
        setIsInvalid(newValue.trim() === '');
      }
    },
    [onChange, required]
  );

  const handleBlur = () => {
    if (required && internalValue.trim() === '') {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  };

  return (
    <div
      className={`form-control ${className} ${error || isInvalid ? 'form-control--error' : ''}`}
    >
      {label && (
        <label htmlFor="form-control-input" className="form-control__label">
          {label} {required && '*'}
        </label>
      )}
      <input
        id="form-control-input"
        className="form-control__input"
        placeholder={placeholder}
        type="text"
        value={internalValue}
        disabled={disabled}
        onChange={handleChange}
        onBlur={handleBlur}
        aria-invalid={error || isInvalid ? 'true' : 'false'}
      />
      {(error || isInvalid) && (
        <span className="form-control__error">{error || 'This field is required'}</span>
      )}
    </div>
  );
};
