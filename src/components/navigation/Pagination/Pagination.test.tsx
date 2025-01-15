import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from './Pagination';

describe('Pagination Component', () => {
  test('renders correct number of pages', () => {
    render(<Pagination totalPages={5} currentPage={1} onPageChange={() => {}} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(7); // 5 pages + Previous + Next
  });

  test('calls onPageChange when a page is clicked', () => {
    const handlePageChange = jest.fn();
    render(<Pagination totalPages={5} currentPage={1} onPageChange={handlePageChange} />);
    const page2Button = screen.getByText('2');
    fireEvent.click(page2Button);
    expect(handlePageChange).toHaveBeenCalledWith(2);
  });

  test('disables Previous button on first page', () => {
    render(<Pagination totalPages={5} currentPage={1} onPageChange={() => {}} />);
    const prevButton = screen.getByText('Previous');
    expect(prevButton).toBeDisabled();
  });

  test('disables Next button on last page', () => {
    render(<Pagination totalPages={5} currentPage={5} onPageChange={() => {}} />);
    const nextButton = screen.getByText('Next');
    expect(nextButton).toBeDisabled();
  });
});