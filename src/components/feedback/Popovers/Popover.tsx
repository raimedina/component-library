import React, { useState, useRef, useEffect, ReactNode } from 'react';
import './Popover.scss';

export interface PopoverProps {
  content: React.ReactNode;
  position?: 'top' | 'right' | 'bottom' | 'left';
  trigger?: 'click' ;
  children: ReactNode;
}

export const Popover: React.FC<PopoverProps> = ({
  content,
  position = 'top',
  trigger = 'click',
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsVisible(!isVisible);
  const handleOutsideClick = (e: MouseEvent) => {
    if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (isVisible && trigger === 'click') {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isVisible, trigger]);

  return (
    <div className="popover" ref={popoverRef}>
      <div
        onClick={trigger === 'click' ? handleToggle : undefined}
      >
        {children}
      </div>
      {isVisible && (
        <div className={`popover__content popover__content--${position} visible`}>
          {content}
        </div>
      )}
    </div>
  );
};
