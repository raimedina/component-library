import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { InputGroup } from './InputGroup';

describe('InputGroup Component', () => {
  test('renders with placeholder', () => {
    render(<InputGroup placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  test('renders prepend and append content', () => {
    render(<InputGroup prepend="@" append=".com" />);
    expect(screen.getByText('@')).toBeInTheDocument();
    expect(screen.getByText('.com')).toBeInTheDocument();
  });

  test('calls onChange when typing', () => {
    const handleChange = jest.fn();
    render(<InputGroup onChange={handleChange} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Test' } });
    expect(handleChange).toHaveBeenCalledWith('Test');
  });

  test('disables input when disabled is true', () => {
    render(<InputGroup disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });
});
