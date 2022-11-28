import { Link } from "react-router-dom";
import React from "react";
import "./Nav.css";

const Nav = ({setVideos}) => {
  return (
    <header>
      <article>
        <h1>Youtube</h1>
      </article>
      <nav>
        {/* <div className="home-about"> */}
          <div className="home-nav">
          <Link style={{textDecoration: 'none'}} to="/" onClick={() => setVideos([])}><h4>Home</h4></Link>
        </div>
        <div className="about-nav">
          <Link style={{textDecoration: 'none'}} to="/about"><h4>About</h4></Link>
        </div>
        {/* </div> */}
        
      </nav>
    </header>
  );
};

export default Nav;
