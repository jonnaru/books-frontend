import React, { useState } from "react";
import "./app.scss";
import { BookList } from "./components/BookList";
import { Header } from "./components/Header";
import { Book } from "./components/Book";

export const App = () => {
  const [author, setAuthor] = useState("");
  const [selectedBookId, setSelectedBookId] = useState();
  const [limit, setLimit] = useState(20);

  const [books, setBooks] = useState([]);

  return (
    <>
      <Header limit={limit} setLimit={setLimit} setAuthor={setAuthor} />
      {!selectedBookId ? (
        <BookList
          books={books}
          setBooks={setBooks}
          limit={limit}
          author={author}
          setSelectedBookId={setSelectedBookId}
        />
      ) : (
        <Book
          selectedBookId={selectedBookId}
          setSelectedBookId={setSelectedBookId}
        />
      )}
      {/* <BookListFooter page={page} setPage={setPage} books={books} /> */}
    </>
  );
};
