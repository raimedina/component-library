import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Accordion from './Accordion';

describe('Accordion Component', () => {
  const items = [
    { title: "Section 1", content: "Content 1" },
    { title: "Section 2", content: "Content 2" },
  ];

  it('renders all accordion titles', () => {
    render(<Accordion items={items} />);
    expect(screen.getByText('Section 1')).toBeInTheDocument();
    expect(screen.getByText('Section 2')).toBeInTheDocument();
  });

  it('toggles content visibility on click', () => {
    const onToggleMock = jest.fn();  
    render(<Accordion items={items} onToggle={onToggleMock} />);

    fireEvent.click(screen.getByText('Section 1'));

    expect(screen.getByText('Content 1')).toBeVisible();
    expect(onToggleMock).toHaveBeenCalledWith(0);  
  });

  it('hides content when clicked again', () => {
    render(<Accordion items={items} />);
    const section1 = screen.getByText('Section 1');

    fireEvent.click(section1);
    expect(screen.getByText('Content 1')).toBeVisible();

    fireEvent.click(section1);
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });
});
