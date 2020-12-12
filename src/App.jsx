import React, { useState } from "react";
import "./app.scss";
import { BookList } from "./components/BookList";
import { Header } from "./components/Header";
import { Book } from "./components/Book";

export const App = () => {
  const [author, setAuthor] = useState("");
  const [selectedBookId, setSelectedBookId] = useState();

  return (
    <div>
      <Header setAuthor={setAuthor} />
      {!selectedBookId ? (
        <BookList author={author} setSelectedBookId={setSelectedBookId} />
      ) : (
        <Book
          selectedBookId={selectedBookId}
          setSelectedBookId={setSelectedBookId}
        />
      )}
    </div>
  );
};
