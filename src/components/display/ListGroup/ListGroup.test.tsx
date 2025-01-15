import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ListGroup } from './ListGroup';

describe('ListGroup Component', () => {
  const items = [
    { label: 'Item 1' },
    { label: 'Item 2', active: true },
    { label: 'Item 3', disabled: true },
  ];

  test('renders all items', () => {
    render(<ListGroup items={items} />);
    items.forEach(item => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  test('triggers onItemSelect when item is clicked', () => {
    const handleSelect = jest.fn();
    render(<ListGroup items={items} selectable={true} onItemSelect={handleSelect} />);
    fireEvent.click(screen.getByText('Item 1'));
    expect(handleSelect).toHaveBeenCalledWith(0);
  });

  test('does not trigger onItemSelect for disabled items', () => {
    const handleSelect = jest.fn();
    render(<ListGroup items={items} selectable={true} onItemSelect={handleSelect} />);
    fireEvent.click(screen.getByText('Item 3'));
    expect(handleSelect).not.toHaveBeenCalled();
  });
});
