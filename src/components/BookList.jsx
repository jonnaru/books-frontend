import React, { useEffect, useState } from "react";
import "../app.scss";

export const BookList = () => {
  const [page, setPage] = useState(1);
  const [books, setBooks] = useState([]);

  const URL = `https://books-express.herokuapp.com/books?page=${page}`;

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

  const handleOnClick = (step) => {
    setPage((prev) => prev + step);
    window.scrollTo(0, 0);
  };

  return (
    <main>
      {books.map((book) => (
        <article>
          <p>{book.title}</p>
          <p>{book.authors}</p>
        </article>
      ))}
      {page > 1 && <button onClick={() => handleOnClick(-1)}>back</button>}
      <button onClick={() => handleOnClick(1)}>next</button>
    </main>
  );
};
