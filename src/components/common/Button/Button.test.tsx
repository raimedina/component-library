import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  test('renders the button with the correct label', () => {
    render(<Button label="Click me" onClick={() => {}} />);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('triggers onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click me" onClick={handleClick} />);
    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders the button as disabled when the disabled prop is true', () => {
    render(<Button label="Disabled" disabled onClick={() => {}} />);
    const buttonElement = screen.getByText(/disabled/i);
    expect(buttonElement).toBeDisabled();
  });

  test('applies the correct variant class', () => {
    render(<Button label="Primary" variant="primary" onClick={() => {}} />);
    const buttonElement = screen.getByText(/primary/i);
    expect(buttonElement).toHaveClass('button--primary');
  });
});
