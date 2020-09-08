import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

const BlogForm = ({
  title,
  text,
  change,
  submit,
  edit = { editable: false },
}) => {
  return (
    <Form onSubmit={submit}>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control value={title} name="title" onChange={change} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Text</Form.Label>
        <Form.Control
          as="textarea"
          rows="5"
          value={text}
          name="text"
          onChange={change}
        />
      </Form.Group>
      <Button type="submit" variant="success" className="mr-2">
        Speichern
      </Button>
      <LinkContainer to="/blog">
        <Button variant="danger">Abrechen</Button>
      </LinkContainer>
      {edit.editable ? (
        <Button variant="warning" onClick={edit.handleEdit}>
          Edit
        </Button>
      ) : null}
    </Form>
  );
};

export default BlogForm;
