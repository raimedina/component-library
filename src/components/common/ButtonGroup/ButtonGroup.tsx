import React from 'react';
import './ButtonGroup.scss';

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

interface ButtonItem {
  label: string;
  variant?: ButtonVariant;
  disabled?: boolean;
}

interface ButtonGroupProps {
  buttons: ButtonItem[];
  orientation?: 'horizontal' | 'vertical';
  onButtonClick?: (label: string) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  buttons,
  orientation = 'horizontal',
  onButtonClick,
}) => {
  return (
    <div className={`button-group button-group-${orientation}`}>
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`btn btn-${button.variant || 'primary'}`}
          onClick={() => !button.disabled && onButtonClick?.(button.label)}
          disabled={button.disabled}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
