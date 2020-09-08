import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import lorem from "./lorem";

class BlogDetails extends Component {
  state = {
    blog: null,
  };

  async componentDidMount() {}

  render() {
    return (
      <article>
        <h1>Blog 1</h1>
        <p className="mt-5">{lorem}</p>
        <LinkContainer to="/blog">
          <Button>Zurück</Button>
        </LinkContainer>
      </article>
    );
  }
}

export default BlogDetails;
