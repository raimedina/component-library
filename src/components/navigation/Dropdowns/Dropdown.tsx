import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.scss';

export interface DropdownItem {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export interface DropdownProps {
  label: string;
  items: DropdownItem[];
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  items,
  position = 'bottom',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown__toggle" onClick={handleToggle}>
        {label}
      </button>
      {isOpen && (
        <ul className={`dropdown__menu dropdown__menu--${position}`}>
          {items.map((item, index) => (
            <li
              key={index}
              className={`dropdown__item ${item.disabled ? 'dropdown__item--disabled' : ''}`}
              onClick={!item.disabled ? item.onClick : undefined}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
