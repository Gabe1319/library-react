import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../ui/Rating";
import Price from "../ui/Price";
import Book from "../ui/Book";

const Bookinfo = ({books}) => {
  const {id} = useParams();
  const book = books.find(book => +book.id === +id);
  return (
    <div id="books__body">
      <main className="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
              <FontAwesomeIcon icon="arrow-left" />
                </Link>
                <Link to="/books" className="book__link">
                <h2 className="books__selected--title--top">
                  Books</h2></Link>
            </div>
            <div className="book__selected">
              <figure className="book_selected--figured">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">
                    Summary 
                  </h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sint autem rem at quidem? Autem quia ab sunt? Eveniet tenetur fuga quaerat tempore dolore laborum repudiandae eius rerum, fugiat temporibus!
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sint autem rem at quidem? Autem quia ab sunt? Eveniet tenetur fuga quaerat tempore dolore laborum repudiandae eius rerum, fugiat temporibus!
                  </p>
                </div>
                <button className="btn">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">
                Recommended Books
              </h2>
              <div className="books">
            </div>
            {
              books
              .filter(book => book.rating === 5 && +books.id !== +id )
              .slice(0, 4)
              .map(book => <Book book={book} key={book.id} />)
            }
            </div>
          </div>
        </div>
      </main>
    </div>
  )
};

export default Bookinfo;
