import React from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";

const Footer = () => (
  <footer>
    <Nav className="justify-content-center">
      <Nav.Item>
        <LinkContainer to="/about">
          <Nav.Link>Über mich</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/blog">
          <Nav.Link>Blog</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/projects">
          <Nav.Link>Projekte</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/impressum">
          <Nav.Link>Impressum</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  </footer>
);

export default Footer;
