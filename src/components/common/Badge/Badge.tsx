import React from 'react';
import './Badge.scss';

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
type BadgeSize = 'small' | 'medium' | 'large';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  rounded?: boolean;
  onClick?: () => void;  // ✅ Adicionei o onClick
}

const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'primary',
  size = 'medium',
  rounded = false,
  onClick,  // ✅ Adicionado ao componente
}) => {
  const classes = [
    'badge',
    `badge--${variant}`,
    `badge--${size}`,
    rounded ? 'badge--rounded' : '',
  ].join(' ');

  return (
    <span className={classes} onClick={onClick}>  {/* ✅ onClick aplicado */}
      {label}
    </span>
  );
};

export default Badge;
