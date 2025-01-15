import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Popover } from './Popover';

describe('Popover Component', () => {
  test('renders child element', () => {
    render(<Popover content="Test content"><button>Trigger</button></Popover>);
    expect(screen.getByText('Trigger')).toBeInTheDocument();
  });

  test('shows content on click', () => {
    render(<Popover content="Test content"><button>Trigger</button></Popover>);
    fireEvent.click(screen.getByText('Trigger'));
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('closes on outside click', () => {
    render(<Popover content="Test content"><button>Trigger</button></Popover>);
    fireEvent.click(screen.getByText('Trigger'));
    fireEvent.mouseDown(document);
    expect(screen.queryByText('Test content')).not.toBeInTheDocument();
  });
});
