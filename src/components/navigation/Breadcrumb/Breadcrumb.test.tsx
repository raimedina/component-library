import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Breadcrumb from './Breadcrumb';

describe('Breadcrumb Component', () => {
  const items = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
  ];

  it('calls onClick when an item is clicked', () => {
    const handleClick = jest.fn();

    render(<Breadcrumb items={items} onClick={handleClick} />);

    const aboutLink = screen.getByText('About');
    fireEvent.click(aboutLink);

    expect(handleClick).toHaveBeenCalledWith({ label: 'About', href: '#about' }, 1);
  });
});
