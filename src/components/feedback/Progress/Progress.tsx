import React from 'react';
import './Progress.scss';

export interface ProgressProps {
  value: number;
  max?: number;
  color?: 'primary' | 'success' | 'warning' | 'danger';
  striped?: boolean;
  animated?: boolean;
  onChange?: (value: number) => void;
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  color = 'primary',
  striped = false,
  animated = false,
  onChange,
}) => {
  const percentage = Math.min((value / max) * 100, 100);

  React.useEffect(() => {
    if (onChange) onChange(percentage);
  }, [percentage, onChange]);

  return (
    <div className="progress">
      <div
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        style={{ width: `${percentage}%` }}
        className={`progress__bar progress__bar--${color} 
                    ${striped ? 'progress__bar--striped' : ''} 
                    ${animated ? 'progress__bar--animated' : ''}`}
      />
    </div>
  );
};
