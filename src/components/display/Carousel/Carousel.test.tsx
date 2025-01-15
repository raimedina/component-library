import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Carousel from './Carousel';

describe('Carousel Component', () => {
  const slides = [
    { src: "https://picsum.photos/600/300?random=1", alt: "Slide 1" },
    { src: "https://picsum.photos/600/300?random=2", alt: "Slide 2" },
  ];

  it('renders the first slide by default', () => {
    render(<Carousel slides={slides} />);
    expect(screen.getByAltText('Slide 1')).toBeInTheDocument();
  });

  it('navigates to the next slide when the next button is clicked', () => {
    render(<Carousel slides={slides} />);
    fireEvent.click(screen.getByLabelText('Next Slide'));
    expect(screen.getByAltText('Slide 2')).toBeInTheDocument();
  });

  it('navigates to the previous slide when the previous button is clicked', () => {
    render(<Carousel slides={slides} />);
    fireEvent.click(screen.getByLabelText('Previous Slide'));
    expect(screen.getByAltText('Slide 2')).toBeInTheDocument();
  });
});
