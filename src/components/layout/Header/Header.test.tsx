import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header Component', () => {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
  ];

  it('renders the logo and navigation links', () => {
    render(<Header links={links} />);
    expect(screen.getByText('MyLogo')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('calls onLinkClick when a link is clicked', () => {
    const handleClick = jest.fn();
    render(<Header links={links} onLinkClick={handleClick} />);

    fireEvent.click(screen.getByText('About'));
    expect(handleClick).toHaveBeenCalledWith('About', expect.any(Object));
  });

  it('renders the mobile HamburgerMenu', () => {
    render(<Header links={links} />);
    const button = screen.getByLabelText(/toggle navigation menu/i);
    expect(button).toBeInTheDocument();
  });
});
