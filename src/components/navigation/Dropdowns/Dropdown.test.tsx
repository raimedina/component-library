import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown Component', () => {
  const items = [
    { label: 'Option 1', onClick: jest.fn() },
    { label: 'Option 2', onClick: jest.fn() },
  ];

  test('renders dropdown button', () => {
    render(<Dropdown label="Menu" items={items} />);
    expect(screen.getByText('Menu')).toBeInTheDocument();
  });

  test('opens dropdown on click', () => {
    render(<Dropdown label="Menu" items={items} />);
    fireEvent.click(screen.getByText('Menu'));
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  test('calls onClick when item is selected', () => {
    const handleClick = jest.fn();
    const itemsWithHandler = [{ label: 'Option 1', onClick: handleClick }];
    render(<Dropdown label="Menu" items={itemsWithHandler} />);
    fireEvent.click(screen.getByText('Menu'));
    fireEvent.click(screen.getByText('Option 1'));
    expect(handleClick).toHaveBeenCalled();
  });
});
