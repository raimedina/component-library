import React from 'react';
import { render, screen } from '@testing-library/react';
import { Spinner } from './Spinner';

describe('Spinner Component', () => {
  test('renders spinner when loading is true', () => {
    render(<Spinner loading={true} />);
    const spinnerElement = screen.getByRole('status');
    expect(spinnerElement).toBeInTheDocument();
  });

  test('does not render spinner when loading is false', () => {
    render(<Spinner loading={false} />);
    const spinnerElement = screen.queryByRole('status');
    expect(spinnerElement).not.toBeInTheDocument();
  });

  test('applies correct size class', () => {
    render(<Spinner size="large" />);
    const spinnerElement = screen.getByRole('status');
    expect(spinnerElement).toHaveClass('spinner--large');
  });

  test('applies correct variant class', () => {
    render(<Spinner variant="danger" />);
    const spinnerElement = screen.getByRole('status');
    expect(spinnerElement).toHaveClass('spinner--danger');
  });
});
