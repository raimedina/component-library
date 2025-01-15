import React, { useState, useEffect, useCallback } from 'react';
import './Carousel.scss';
import defaultImage from '../../../assets/defaultImage.webp';

interface Slide {
  src: string;
  alt: string;
}

interface CarouselProps {
  slides: Slide[];
  autoPlay?: boolean;
  interval?: number;
  onSlideChange?: (index: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({
  slides,
  autoPlay = false,
  interval = 3000,
  onSlideChange,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const nextIndex = (prev + 1) % slides.length;
      onSlideChange?.(nextIndex);
      return nextIndex;
    });
  }, [slides.length, onSlideChange]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const prevIndex = (prev - 1 + slides.length) % slides.length;
      onSlideChange?.(prevIndex);
      return prevIndex;
    });
  }, [slides.length, onSlideChange]);

  useEffect(() => {
    if (autoPlay && slides.length > 1) {
      const slideInterval = setInterval(() => {
        nextSlide();
      }, interval);

      return () => clearInterval(slideInterval);
    }
  }, [autoPlay, interval, nextSlide, slides.length]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = defaultImage;
  };

  if (slides.length === 0) {
    return <p>No slides available.</p>;
  }

  return (
    <div className="carousel">
      <button
        onClick={prevSlide}
        className="carousel-button prev"
        aria-label="Previous Slide"
      >
        ❮
      </button>

      <div className="carousel-slide">
        <img
          src={slides[currentSlide].src}
          alt={slides[currentSlide].alt}
          onError={handleImageError}
        />
      </div>

      <button
        onClick={nextSlide}
        className="carousel-button next"
        aria-label="Next Slide"
      >
        ❯
      </button>

      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={`slide-${index}`}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => {
              setCurrentSlide(index);
              onSlideChange?.(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
