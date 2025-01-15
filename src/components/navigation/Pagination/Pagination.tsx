import React, { useState, useEffect } from 'react';
import './Pagination.scss';

export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const [activePage, setActivePage] = useState(currentPage);

  useEffect(() => {
    setActivePage(currentPage);
  }, [currentPage]);

  const handlePageClick = (page: number) => {
    if (page !== activePage && page > 0 && page <= totalPages) {
      setActivePage(page);  // Atualiza o estado interno
      onPageChange(page);
    }
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="pagination" aria-label="Pagination Navigation">
      <button
        className="pagination__button"
        onClick={() => handlePageClick(activePage - 1)}
        disabled={activePage === 1}
      >
        Previous
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`pagination__button ${
            activePage === page ? 'pagination__button--active' : ''
          }`}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </button>
      ))}

      <button
        className="pagination__button"
        onClick={() => handlePageClick(activePage + 1)}
        disabled={activePage === totalPages}
      >
        Next
      </button>
    </nav>
  );
};
