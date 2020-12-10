import React, { useEffect, useState } from "react";

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

  return (
    <div>
      {books.map((book) => (
        <div>
          <p>{book.title}</p>
          <p>{book.authors}</p>
        </div>
      ))}
      <button onClick={() => setPage((prev) => prev + 1)}>next</button>
      {page > 1 && (
        <button onClick={() => setPage((prev) => prev - 1)}>back</button>
      )}
    </div>
  );
};
