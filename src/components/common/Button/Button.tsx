import React from 'react';
import './Button.scss';

export interface ButtonProps {
  label: string;
  variant?: 
    | 'primary' 
    | 'secondary' 
    | 'success' 
    | 'danger' 
    | 'warning' 
    | 'info' 
    | 'light' 
    | 'dark' 
    | 'link';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
}) => {
  const className = `button button--${variant} button--${size}`;
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
};
