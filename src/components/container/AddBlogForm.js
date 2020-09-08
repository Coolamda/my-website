import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import { withRouter } from "react-router-dom";

class AddBlogForm extends Component {
  state = {
    title: "",
    text: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(this.state));

    await fetch("http://localhost:8080/api/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    });

    this.props.history.push("/blog");
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={this.state.title}
            name="title"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Text</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            value={this.state.text}
            name="text"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button type="submit" variant="success" className="mr-2">
          Speichern
        </Button>
        <LinkContainer to="/blog">
          <Button variant="danger">Abrechen</Button>
        </LinkContainer>
      </Form>
    );
  }
}

export default withRouter(AddBlogForm);
