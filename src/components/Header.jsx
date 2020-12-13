import React from "react";

export const Header = ({ limit, setLimit, setAuthor }) => {
  const handleOnChange = (event) => {
    setAuthor(event.target.value);
  };

  return (
    <header>
      <h1>Hello happy book club!</h1>
      <input type="text" onChange={(event) => handleOnChange(event)} />
      <select onChange={(event) => setLimit(event.target.value)} value={limit}>
        <option value="20">20</option>
        <option value="40">40</option>
        <option value="60">60</option>
        <option value="100">100</option>
      </select>
    </header>
  );
};
