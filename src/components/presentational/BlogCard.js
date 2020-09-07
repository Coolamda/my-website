import React from "react";
import TextTruncate from "react-text-truncate";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

const BlogCard = ({ blog }) => (
  <Card>
    <Card.Body>
      <Card.Title>{blog.title}</Card.Title>
      <Card.Text>
        <TextTruncate line={5} element="span" text={blog.text} />
      </Card.Text>
      <LinkContainer to={`blog/${blog.id}`}>
        <Button variant="primary">Weiter lesen</Button>
      </LinkContainer>
    </Card.Body>
  </Card>
);

export default BlogCard;
