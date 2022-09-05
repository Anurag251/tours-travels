import React from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <h3>LOGO</h3>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/">
              <button className="nav-btn">Home</button>
            </Link>
          </li>

          <li>
            <Link to="/about">
              <button className="nav-btn">About</button>
            </Link>
          </li>

          <li>
            <Link to="/shop">
              <button className="nav-btn">Shop</button>
            </Link>
          </li>

          <li>
            <Link to="/advanture">
              <button className="nav-btn">Advanture</button>
            </Link>
          </li>

          <li>
            <Link to="/blog">
              <button className="nav-btn">Blog</button>
            </Link>
          </li>

          <li>
            <Link to="/contact">
              <button className="nav-btn">Contact</button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default HeaderComponent;
