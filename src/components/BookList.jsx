import React, { useEffect, useState } from "react";
import "../app.scss";
import { BookListFooter } from "./BookListFooter";

export const BookList = ({
  books,
  setBooks,
  setSelectedBookId,
  author,
  limit,
}) => {
  const [page, setPage] = useState(1);
  const URL = `https://books-express.herokuapp.com/books?page=${page}&limit=${limit}&author=${author}`;

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBooks(data);
      });
  }, [URL, setBooks]);

  console.log(books);

  const handleOnClickBook = (bookId) => {
    setSelectedBookId(bookId);
    console.log("clicked", bookId);
  };

  return (
    <>
      <main>
        {books.map((book) => (
          <article>
            <button onClick={() => handleOnClickBook(book.bookID)}>
              <h2>{book.title}</h2>
              <div className="book-bottom-container">
                <p className="author">{book.authors.replace(/-/g, ", ")}</p>
                <p className="rated">
                  Rated {Math.round(book.average_rating * 10) / 10} / 5
                </p>
              </div>
            </button>
          </article>
        ))}
      </main>
      <BookListFooter page={page} setPage={setPage} books={books} />
    </>
  );
};
