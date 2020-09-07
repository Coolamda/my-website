import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer>
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
      <li>
        <Link to="/">Impressum</Link>
      </li>
    </ul>
  </footer>
);

export default Footer;
