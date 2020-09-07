import React from "react";
import { useParams } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import lorem from "./lorem";

const BlogDetails = () => {
  const { id } = useParams();

  return (
    <article>
      <h1>Blog 1</h1>
      <p className="mt-5">{lorem}</p>
      <LinkContainer to="/blog">
        <Button>Zurück</Button>
      </LinkContainer>
    </article>
  );
};

export default BlogDetails;
