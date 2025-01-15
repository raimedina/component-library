import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal Component', () => {
  test('renders when open', () => {
    render(<Modal isOpen={true} onClose={() => {}}>Modal Content</Modal>);
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  test('does not render when closed', () => {
    render(<Modal isOpen={false} onClose={() => {}}>Modal Content</Modal>);
    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
  });

  test('closes when close button is clicked', () => {
    const handleClose = jest.fn();
    render(<Modal isOpen={true} onClose={handleClose}>Modal Content</Modal>);
    fireEvent.click(screen.getByLabelText('Close'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test('closes when Escape key is pressed', () => {
    const handleClose = jest.fn();
    render(<Modal isOpen={true} onClose={handleClose}>Modal Content</Modal>);
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
