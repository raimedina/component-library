import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Range } from './Range';

describe('Range Component', () => {
  test('renders the range input', () => {
    render(<Range />);
    const slider = screen.getByRole('slider');
    expect(slider).toBeInTheDocument();
  });

  test('calls onChange when value changes', () => {
    const handleChange = jest.fn();
    render(<Range onChange={handleChange} />);
    const slider = screen.getByRole('slider');

    fireEvent.change(slider, { target: { value: '75' } });
    expect(handleChange).toHaveBeenCalledWith(75);
  });

  test('disables the input when disabled is true', () => {
    render(<Range disabled />);
    const slider = screen.getByRole('slider');
    expect(slider).toBeDisabled();
  });
});
