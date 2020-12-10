import React from "react";
import "./app.scss";
import { BookList } from "./components/BookList";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <div>
      <Header />

      <BookList />
    </div>
  );
};
