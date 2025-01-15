import React, { useState } from 'react';
import './Collapse.scss';

export interface CollapseProps {
  title: string;
  content: React.ReactNode;
  isOpen?: boolean;
  disabled?: boolean;
  onToggle?: (isOpen: boolean) => void;
}

export const Collapse: React.FC<CollapseProps> = ({
  title,
  content,
  isOpen = false,
  disabled = false,
  onToggle,
}) => {
  const [open, setOpen] = useState(isOpen);

  const handleToggle = () => {
    if (disabled) return;
    setOpen(!open);
    if (onToggle) onToggle(!open);
  };

  return (
    <div className={`collapse ${disabled ? 'collapse--disabled' : ''}`}>
      <button
        className="collapse__header"
        onClick={handleToggle}
        disabled={disabled}
        aria-expanded={open}
      >
        {title}
        <span className={`collapse__icon ${open ? 'collapse__icon--open' : ''}`}>▼</span>
      </button>
      <div className={`collapse__content ${open ? 'collapse__content--open' : ''}`}>
        {open && <div>{content}</div>}
      </div>
    </div>
  );
};
