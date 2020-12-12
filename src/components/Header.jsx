import React from "react";

export const Header = ({ setAuthor }) => {
  const URL = "https://books-express.herokuapp.com/books/";

  const handleOnChange = (event) => {
    setAuthor(event.target.value);
  };

  return (
    <header>
      <h1>hello</h1>
      <input type="text" onChange={(event) => handleOnChange(event)} />
      <button onClick={URL}>home</button>
    </header>
  );
};
