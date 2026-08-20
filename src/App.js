import "./index.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Books from "./components/pages/Books";
import { books } from "./data";
import Bookinfo from "./components/pages/Bookinfo";
import Cart from "./components/pages/Cart";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, book])
  }
 
  useEffect(() => {}, [cart]);
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={<Bookinfo books={books} addToCart={addToCart} />}
          />
          <Route path="/cart" element={<Cart books={books} />} />
          {/* cart={cart} changeQuantity={changeQuantity} */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
