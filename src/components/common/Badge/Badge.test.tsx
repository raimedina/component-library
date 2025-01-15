import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Badge from './Badge';

describe('Badge Component', () => {
  it('renders the badge with the correct label', () => {
    render(<Badge label="Test Badge" />);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  it('applies the correct variant class', () => {
    render(<Badge label="Success Badge" variant="success" />);
    expect(screen.getByText('Success Badge')).toHaveClass('badge--success');
  });

  it('applies the rounded border when enabled', () => {
    render(<Badge label="Rounded Badge" rounded />);
    expect(screen.getByText('Rounded Badge')).toHaveClass('badge--rounded');
  });

  it('applies the correct size class', () => {
    render(<Badge label="Large Badge" size="large" />);
    expect(screen.getByText('Large Badge')).toHaveClass('badge--large');
  });
});
