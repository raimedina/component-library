import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tooltips } from './Tooltips';

describe('Tooltip Component', () => {
  test('applies correct position class', () => {
    render(
      <Tooltips text="Tooltip Content" position="right">
        <button>Hover me</button>
      </Tooltips>
    );

    const button = screen.getByText(/hover me/i);
    
    fireEvent.mouseEnter(button);

    const tooltipElement = screen.getByText(/tooltip content/i);
    expect(tooltipElement).toBeInTheDocument();
    expect(tooltipElement).toHaveClass('tooltip--right');
  });
});
