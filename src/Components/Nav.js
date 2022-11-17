import { Link } from "react-router-dom";
import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <header>
      <article>
        <h1>Youtube</h1>
      </article>
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
