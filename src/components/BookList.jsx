import React, { useEffect, useState } from "react";
import "../app.scss";

export const BookList = ({ setSelectedBookId, author, limit }) => {
  const [page, setPage] = useState(1);
  const [books, setBooks] = useState([]);

  const URL = `https://books-express.herokuapp.com/books?page=${page}&limit=${limit}&author=${author}`;

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBooks(data);
      });
  }, [URL]);

  console.log(books);

  const handleOnClickBook = (bookId) => {
    setSelectedBookId(bookId);
    console.log("clicked", bookId);
  };

  const handleOnClick = (step) => {
    setPage((prev) => prev + step);
    window.scrollTo(0, 0);
  };

  return (
    <main>
      {books.map((book) => (
        <article>
          <button onClick={() => handleOnClickBook(book.bookID)}>
            <h2>{book.title}</h2>
            <p>{book.authors}</p>
            <p className="test">{book.average_rating}</p>
          </button>
        </article>
      ))}
      {page > 1 && <button onClick={() => handleOnClick(-1)}>back</button>}
      {books.length > 0 && (
        <button onClick={() => handleOnClick(1)}>next</button>
      )}
      {books.length === 0 && <p>No books</p>}
    </main>
  );
};
