import React, { useState } from "react";
import "./app.scss";
import { BookList } from "./components/BookList";
import { Header } from "./components/Header";
import { Book } from "./components/Book";

export const App = () => {
  const [author, setAuthor] = useState("");
  const [selectedBookId, setSelectedBookId] = useState();
  const [limit, setLimit] = useState(20);

  return (
    <div>
      <Header limit={limit} setLimit={setLimit} setAuthor={setAuthor} />
      {!selectedBookId ? (
        <BookList
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
    </div>
  );
};
