import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Collapse } from './Collapse';

describe('Collapse Component', () => {
  test('renders with title', () => {
    render(<Collapse title="Test Title" content="Test Content" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  test('toggles content on click', () => {
    render(<Collapse title="Toggle" content="Visible Content" />);
    const button = screen.getByText('Toggle');
    fireEvent.click(button);
    expect(screen.getByText('Visible Content')).toBeInTheDocument();
  });

  test('does not open when disabled', () => {
    render(<Collapse title="Disabled" content="Cannot open" disabled />);
    fireEvent.click(screen.getByText('Disabled'));
    expect(screen.queryByText('Cannot open')).not.toBeInTheDocument();
  });

  test('calls onToggle when clicked', () => {
    const handleToggle = jest.fn();
    render(<Collapse title="Toggle" content="Test Content" onToggle={handleToggle} />);
    fireEvent.click(screen.getByText('Toggle'));
    expect(handleToggle).toHaveBeenCalledWith(true);
  });
});
