import React from "react";

export const BookListFooter = ({ page, setPage, books }) => {
  const handleOnClick = (step) => {
    setPage((prev) => prev + step);
    window.scrollTo(0, 0);
  };

  return (
    <footer>
      <div className="footer-button-container">
        {page > 1 && <button onClick={() => handleOnClick(-1)}>back</button>}
        {books.length > 0 && (
          <button onClick={() => handleOnClick(1)}>next</button>
        )}
        {books.length === 0 && <p>No books</p>}
      </div>
    </footer>
  );
};
