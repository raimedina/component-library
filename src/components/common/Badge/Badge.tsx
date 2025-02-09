import React from 'react';
import './Badge.scss';

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
type BadgeSize = 'small' | 'medium' | 'large';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  rounded?: boolean;
  onClick?: () => void;  
}

const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'primary',
  size = 'medium',
  rounded = false,
  onClick,  
}) => {
  const classes = [
    'badge',
    `badge--${variant}`,
    `badge--${size}`,
    rounded ? 'badge--rounded' : '',
  ].join(' ');

  return (
    <span className={classes} onClick={onClick}> 
      {label}
    </span>
  );
};

export default Badge;
