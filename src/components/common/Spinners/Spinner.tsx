import React, { useEffect, useCallback } from 'react';
import './Spinner.scss';

export interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'gradient' | 'neon';
  loading?: boolean;
  onStart?: () => void;
  onStop?: () => void;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'medium',
  variant = 'primary',
  loading = true,
  onStart,
  onStop,
}) => {
  const handleStart = useCallback(() => {
    onStart && onStart();
  }, [onStart]);

  const handleStop = useCallback(() => {
    onStop && onStop();
  }, [onStop]);

  useEffect(() => {
    loading ? handleStart() : handleStop();
  }, [loading, handleStart, handleStop]);

  if (!loading) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`spinner spinner--${size} spinner--${variant}`}
    />
  );
};
