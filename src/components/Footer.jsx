import React from "react";
import Logo from "../assets/Library.svg"

const Footer = () => {
  return(
    <footer>
      <div className="container">
        <div className="row row__column">
          <a href="/">
          <figure className="footer__logo">
            <img src="{Logo}" class="footer__logo--img" alt="" />
            </figure>
            </a>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
