import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FloatingLabels } from './FloatingLabels';

describe('FloatingLabels Component', () => {
  test('renders with label', () => {
    render(<FloatingLabels label="Username" />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });

  test('calls onChange when typing', () => {
    const handleChange = jest.fn();
    render(<FloatingLabels label="Name" onChange={handleChange} />);
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Test' } });
    expect(handleChange).toHaveBeenCalledWith('Test');
  });

  test('disables input when disabled is true', () => {
    render(<FloatingLabels label="Email" disabled />);
    expect(screen.getByLabelText('Email')).toBeDisabled();
  });
});
