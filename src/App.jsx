import React, { useState } from "react";
import "./app.scss";
import { BookList } from "./components/BookList";
import { Header } from "./components/Header";
import { Book } from "./components/Book";

export const App = () => {
  const [selectedBookId, setSelectedBookId] = useState();

  return (
    <div>
      <Header />
      {!selectedBookId ? (
        <BookList setSelectedBookId={setSelectedBookId} />
      ) : (
        <Book
          selectedBookId={selectedBookId}
          setSelectedBookId={setSelectedBookId}
        />
      )}
    </div>
  );
};
