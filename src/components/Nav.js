import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/main">
          <li>Main</li>
        </Link>
        <Link to="/list">
          <li>List</li>
        </Link>
        <Link to="/search">
          <li>Search</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
