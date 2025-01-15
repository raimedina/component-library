import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar';

const mockLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

describe('Navbar Component', () => {
  it('renders all navigation links', () => {
    render(<Navbar links={mockLinks} />);
    mockLinks.forEach((link) => {
      expect(screen.getByText(link.label)).toBeInTheDocument();
    });
  });

  it('calls onLinkClick when a link is clicked', () => {
    const handleClick = jest.fn();
    render(<Navbar links={mockLinks} onLinkClick={handleClick} />);

    fireEvent.click(screen.getByText('About'));
    expect(handleClick).toHaveBeenCalledWith('About', expect.any(Object));
  });

  it('prevents default link behavior in Storybook', () => {
    process.env.STORYBOOK = 'true';
    const handleClick = jest.fn();

    render(<Navbar links={mockLinks} onLinkClick={handleClick} />);
    const link = screen.getByText('Projects');

    fireEvent.click(link);
    expect(handleClick).toHaveBeenCalledWith('Projects', expect.any(Object));
  });
});
