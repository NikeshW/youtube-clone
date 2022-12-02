import { Link } from "react-router-dom";
import React from "react";
import "./Nav.css";

const Nav = ({ setVideos }) => {
  return (
    <div className="header">
        <nav>
          <h1>CloneTube</h1>
          <div className="navbtn">
              <Link
                style={{ textDecoration: "none" }}
                to="/"
                onClick={() => setVideos([])}
              >
                <h4>Home</h4>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/about">
                <h4>About</h4>
              </Link>
          </div>
        </nav>
    </div>
  );
};

export default Nav;
