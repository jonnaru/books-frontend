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
      <div className="book">
        <div className="book-border">
          <div className="book-border">
            <div className="book-border">
              <section>
                <div className="book-content-container">
                  <h3>{theBook?.title ?? "No book"}</h3>
                  <div className="book-content-bottom-container">
                    <div>
                      <p className="authors">
                        By{" "}
                        {theBook?.authors.replace(/-/g, ", ") ?? "No authors"}
                      </p>
                      <p>Rated {theBook?.average_rating ?? "No rating"} of 5</p>
                      <p>{theBook?.num_pages ?? "No pages"} number of pages</p>
                      <p>ISBN: {theBook?.isbn ?? "No isbn"}</p>
                    </div>
                    <button onClick={() => setSelectedBookId(null)}>
                      back
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
