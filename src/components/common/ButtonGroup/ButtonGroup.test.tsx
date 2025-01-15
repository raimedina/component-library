import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonGroup from './ButtonGroup';

describe('ButtonGroup Component', () => {
  const buttons = [
    { label: 'Button 1' },
    { label: 'Button 2' },
  ];

  it('renders all buttons', () => {
    render(<ButtonGroup buttons={buttons} />);
    expect(screen.getByText('Button 1')).toBeInTheDocument();
    expect(screen.getByText('Button 2')).toBeInTheDocument();
  });

  it('handles button clicks', () => {
    const handleClick = jest.fn();
    render(<ButtonGroup buttons={buttons} onButtonClick={handleClick} />);
    fireEvent.click(screen.getByText('Button 1'));
    expect(handleClick).toHaveBeenCalledWith('Button 1');
  });

  it('disables buttons when disabled', () => {
    render(<ButtonGroup buttons={[{ label: 'Disabled', disabled: true }]} />);
    expect(screen.getByText('Disabled')).toBeDisabled();
  });
});
