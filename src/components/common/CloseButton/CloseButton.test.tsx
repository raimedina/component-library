import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CloseButton from './CloseButton';

describe('CloseButton Component', () => {
  it('renders the close button', () => {
    render(<CloseButton onClick={() => {}} />);
    const button = screen.getByRole('button', { name: /close/i }); 
    expect(button).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<CloseButton onClick={handleClick} />);
    const button = screen.getByRole('button', { name: /close/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies the correct size class', () => {
    render(<CloseButton size="large" onClick={() => {}} />);
    const button = screen.getByRole('button', { name: /close/i }); 
    expect(button).toHaveClass('close-button--large');
  });
});
