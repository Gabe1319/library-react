import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Rating from "../ui/Rating";
import Price from "../ui/Price";

const Bookinfo = () => {
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
                <img src="https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UF1000,1000_QL80_.jpg" alt="" className="book__selected--ig" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">Crack the coding Interview</h2>
                <Rating rating="4.5" />
                <div className="book__selected--price">
                  <Price originalPrice={50} salePrice={null} />
                </div>
                <div className="book__summary">
                  <div className="book__summary--title">
                    Summary 
                  </div>
                  <p className="book_summary__para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sint autem rem at quidem? Autem quia ab sunt? Eveniet tenetur fuga quaerat tempore dolore laborum repudiandae eius rerum, fugiat temporibus!
                  </p>
                  <p className="book_summary__para">
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
      </main>
    </div>
  )
};

export default Bookinfo;
