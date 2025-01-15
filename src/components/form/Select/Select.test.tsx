import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Select } from './Select';

describe('Select Component', () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
  ];

  test('renders with placeholder', () => {
    render(<Select options={options} placeholder="Choose..." onChange={() => {}} />);
    expect(screen.getByText('Choose...')).toBeInTheDocument();
  });

  test('displays options on interaction', () => {
    render(<Select options={options} onChange={() => {}} />);
    fireEvent.mouseDown(screen.getByRole('combobox'));
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  test('calls onChange when option is selected', () => {
    const handleChange = jest.fn();
    render(<Select options={options} onChange={handleChange} />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'option1' } });
    expect(handleChange).toHaveBeenCalledWith('option1');
  });

  test('does not interact when disabled', () => {
    const handleChange = jest.fn();
    render(<Select options={options} disabled onChange={handleChange} />);
    const select = screen.getByRole('combobox');
    expect(select).toBeDisabled();
  });
});
