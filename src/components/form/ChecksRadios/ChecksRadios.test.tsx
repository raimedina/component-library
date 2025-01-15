import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ChecksRadios } from './ChecksRadios';

describe('ChecksRadios Component', () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ];

  test('renders all options', () => {
    render(<ChecksRadios type="checkbox" name="test" options={options} />);
    options.forEach(option => {
      expect(screen.getByLabelText(option.label)).toBeInTheDocument();
    });
  });

  test('selects checkbox option', () => {
    const handleChange = jest.fn();
    render(<ChecksRadios type="checkbox" name="test" options={options} onChange={handleChange} />);
    fireEvent.click(screen.getByLabelText('Option 1'));
    expect(handleChange).toHaveBeenCalledWith(['1']);
  });

  test('selects radio option', () => {
    const handleChange = jest.fn();
    render(<ChecksRadios type="radio" name="test" options={options} onChange={handleChange} />);
    fireEvent.click(screen.getByLabelText('Option 2'));
    expect(handleChange).toHaveBeenCalledWith(['2']);
  });

  test('does not select disabled option', () => {
    const handleChange = jest.fn();
    render(<ChecksRadios type="checkbox" name="test" options={[...options, { label: 'Option 3', value: '3', disabled: true }]} onChange={handleChange} />);
    fireEvent.click(screen.getByLabelText('Option 3'));
    expect(handleChange).not.toHaveBeenCalled();
  });
});
