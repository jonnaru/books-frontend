import React, { useEffect, useState } from "react";

export const Book = ({ selectedBookId, setSelectedBookId }) => {
  const [theBook, setTheBook] = useState();

  const URL = `https://books-express.herokuapp.com/books/${selectedBookId}`;

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTheBook(data);
      });
  }, [URL]);

  console.log("the book", theBook);

  return (
    <>
      <div>{theBook?.title}</div>
      <button onClick={() => setSelectedBookId(null)}>back</button>
    </>
  );
};
