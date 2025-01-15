import React from 'react';
import { render, screen } from '@testing-library/react';
import { Progress } from './Progress';

describe('Progress Component', () => {
  test('renders correct value', () => {
    render(<Progress value={50} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveStyle({ width: '50%' });
  });

  test('does not exceed maximum value', () => {
    render(<Progress value={150} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveStyle({ width: '100%' });
  });

  test('applies striped style', () => {
    render(<Progress value={75} striped />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveClass('progress__bar--striped');
  });

  test('applies animation when enabled', () => {
    render(<Progress value={60} striped animated />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveClass('progress__bar--animated');
  });
});
