import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HamburgerMenu from './HamburgerMenu';

describe('HamburgerMenu Component', () => {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
  ];

  it('renders the hamburger button and hides the menu by default', async () => {
    render(<HamburgerMenu links={links} />);
    const button = screen.getByLabelText(/toggle navigation menu/i);

    expect(button).toBeInTheDocument();
    expect(screen.queryByText('Home')).not.toBeInTheDocument();
  });

  it('shows the menu when button is clicked', async () => {
    render(<HamburgerMenu links={links} />);
    const button = screen.getByLabelText(/toggle navigation menu/i);

    fireEvent.click(button);
    const menuItem = await screen.findByText('Home');
    expect(menuItem).toBeVisible();
  });
});
