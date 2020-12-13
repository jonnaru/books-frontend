import React, { useEffect } from "react";
import "../app.scss";

export const BookList = ({
  books,
  setBooks,
  setSelectedBookId,
  page,
  author,
  limit,
}) => {
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
    </main>
  );
};
