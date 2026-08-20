import React, { useState } from "react";
import Book from "../ui/Book";

const Books = ({books: initialBooks}) => {
  const [books, setBooks] = useState(initialBooks);
  function filterBooks(filter){
    if (filter === 'Low_TO_HIGH'){
      setBooks(
      books.slice().sort((a, b) => (a.saleprice || a.originalPrice) - b.saleprice || a.originalPrice))
    }
  }
  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title" books_header--title>
                  All Books
                </h2>
                <select id="filter" defaultValue="DEFAULT" onChange={(event) =>filterBooks(event.target.value)}>
                  <option value="DEFAULT" disabled></option>
                  <option value="Low_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="books">
                {books.map((book) => (
                  <Book book={book} key={book.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;
