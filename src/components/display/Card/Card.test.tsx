import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';
import defaultImage from '../../../assets/defaultImage.webp';

describe('Card Component', () => {
  it('renders the title and description', () => {
    render(<Card title="Test Title" description="Test Description" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('displays the default image when the provided image fails to load', () => {
    render(
      <Card
        title="Test Title"
        description="Test Description"
        image="https://invalid-url.com/image.jpg"
      />
    );

    const image = screen.getByRole('img');
    fireEvent.error(image);
    expect(image).toHaveAttribute('src', defaultImage);
  });
});
