import React, { useState, useCallback, useEffect } from 'react';
import './Range.scss';

export interface RangeProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
}

export const Range: React.FC<RangeProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value = 50,
  disabled = false,
  onChange,
}) => {
  const [currentValue, setCurrentValue] = useState<number>(value);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value);
      setCurrentValue(newValue);
      onChange?.(newValue);
    },
    [onChange]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;

    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      const newValue = Math.min(currentValue + step, max);
      setCurrentValue(newValue);
      onChange?.(newValue);
    }

    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      const newValue = Math.max(currentValue - step, min);
      setCurrentValue(newValue);
      onChange?.(newValue);
    }
  };

  return (
    <div className="range">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={currentValue}
        disabled={disabled}
        onChange={handleChange}
        onKeyDown={handleKeyDown} 
        className="range__input"
      />
      <span className="range__value">{currentValue}</span>
    </div>
  );
};
