import React, { useState } from "react";
import "./app.scss";
import { BookList } from "./components/BookList";
import { Header } from "./components/Header";
import { Book } from "./components/Book";
import { Footer } from "./components/Footer";

export const App = () => {
  const [author, setAuthor] = useState("");
  const [selectedBookId, setSelectedBookId] = useState();
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);
  const [books, setBooks] = useState([]);

  return (
    <div>
      <Header limit={limit} setLimit={setLimit} setAuthor={setAuthor} />
      {!selectedBookId ? (
        <BookList
          books={books}
          setBooks={setBooks}
          limit={limit}
          author={author}
          page={page}
          setSelectedBookId={setSelectedBookId}
        />
      ) : (
        <Book
          selectedBookId={selectedBookId}
          setSelectedBookId={setSelectedBookId}
        />
      )}
      <Footer page={page} setPage={setPage} books={books} />
    </div>
  );
};
