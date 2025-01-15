import React, { useState, useEffect } from 'react';
import './Tooltips.scss';


export interface TooltipsProps {
  text: string;
  position?: 'top' | 'right' | 'bottom' | 'left';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onShow?: () => void;
}

export const Tooltips: React.FC<TooltipsProps> = ({
  text,
  position = 'top',
  size = 'medium',
  children,
  onShow,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible && onShow) {
      onShow();
    }
  }, [isVisible, onShow]);

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <span role="tooltip" className={`tooltip tooltip--${position} tooltip--${size} visible`}>
          {text}
        </span>
      )}
    </div>
  );
};
