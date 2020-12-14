import React from "react";

export const Header = ({ limit, setLimit, setAuthor }) => {
  const handleOnChange = (event) => {
    setAuthor(event.target.value);
  };

  return (
    <header>
      <h1>Hello happy book club!</h1>

      <div className="bottom-header-container">
        <input
          type="text"
          placeholder="type your favourite author"
          onChange={(event) => handleOnChange(event)}
        />

        <select
          onChange={(event) => setLimit(event.target.value)}
          value={limit}
        >
          <option value="20">20 books per page</option>
          <option value="40">40 books per page</option>
          <option value="60">60 books per page</option>
          <option value="100">100 books per page</option>
        </select>
      </div>
    </header>
  );
};
