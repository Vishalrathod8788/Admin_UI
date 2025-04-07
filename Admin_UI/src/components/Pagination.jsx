import React from 'react';
// import './Pagination.css';

function Pagination({ totalPages, currentPage, setCurrentPage }) {
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <button className="first-page" onClick={() => goToPage(1)}>
        «
      </button>
      <button className="previous-page" onClick={() => goToPage(currentPage - 1)}>
        ‹
      </button>

      {pageNumbers.map((num) => (
        <button
          key={num}
          className={num === currentPage ? 'active' : ''}
          onClick={() => goToPage(num)}
        >
          {num}
        </button>
      ))}

      <button className="next-page" onClick={() => goToPage(currentPage + 1)}>
        ›
      </button>
      <button className="last-page" onClick={() => goToPage(totalPages)}>
        »
      </button>
    </div>
  );
}

export default Pagination;
