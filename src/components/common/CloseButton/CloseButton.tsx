import React from 'react';
import './CloseButton.scss';

export interface CloseButtonProps {
  size?: 'small' | 'medium' | 'large';
  onClick: () => void;
  ariaLabel?: string;
}

export const CloseButton: React.FC<CloseButtonProps> = ({
  size = 'medium',
  onClick,
  ariaLabel = 'Close',
}) => {
  const className = `close-button close-button--${size}`;

  return (
    <button className={className} onClick={onClick} aria-label={ariaLabel}>
      &times;
    </button>
  );
};

export default CloseButton;
