import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navigation = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <LinkContainer to="/">
      <Navbar.Brand>Liam's space</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/about">
          <Nav.Link>Über mich</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/blog">
          <Nav.Link>Blog</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/projects">
          <Nav.Link>Projekte</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
