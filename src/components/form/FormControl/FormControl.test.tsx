import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FormControl } from './FormControl';

describe('FormControl Component', () => {
  test('renders with label and placeholder', () => {
    render(<FormControl label="Username" placeholder="Enter username" />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument();
  });

  test('calls onChange when typing', () => {
    const handleChange = jest.fn();
    render(<FormControl onChange={handleChange} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Test' } });
    expect(handleChange).toHaveBeenCalledWith('Test');
  });

  test('displays error message', () => {
    render(<FormControl label="Email" error="Invalid email" />);
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
  });

  test('disables input when disabled is true', () => {
    render(<FormControl disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });
});
