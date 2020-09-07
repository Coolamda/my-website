import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <nav>
    <Link to="/">Liam's space</Link>
    <ul>
      <li>
        <Link to="/about">Über mich</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/projects">Projekte</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
