import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Loading from "./Loading";

class BlogDetails extends Component {
  state = {
    blog: null,
    edit: false,
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await fetch(`http://localhost:8080/api/blog/${id}`);
    const blog = await response.json();

    this.setState({ blog });
  }

  handleClick = async () => {
    const { id } = this.props.match.params;

    await fetch(`http://localhost:8080/api/blog/${id}`, {
      method: "DELETE",
    });

    this.props.history.push("/blog");
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { id } = this.props.match.params;

    const response = await fetch(`http://localhost:8080/api/blog/${id}`, {
      method: "PUT",
      body: JSON.stringify(this.state.blog),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const blog = await response.json();

    this.setState({ blog, edit: false });
  };

  handleChange = (e) => {
    this.setState({
      blog: {
        ...this.state.blog,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleEdit = () => this.setState({ edit: !this.state.edit });

  // TODO
  renderBlog() {}

  render() {
    if (!this.state.blog) {
      return <Loading />;
    }

    const { title, text } = this.state.blog;

    if (!this.state.edit) {
      return (
        <article>
          <h1>{title}</h1>
          <p className="mt-5">{text}</p>
          <LinkContainer to="/blog">
            <Button className="mr-2">Zurück</Button>
          </LinkContainer>
          <Button variant="danger" onClick={this.handleClick} className="mr-2">
            Löschen
          </Button>
          <Button variant="warning" onClick={this.handleEdit}>
            Edit
          </Button>
        </article>
      );
    }

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={this.state.blog.title}
            name="title"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Text</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            value={this.state.blog.text}
            name="text"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button type="submit" variant="success" className="mr-2">
          Speichern
        </Button>
        <LinkContainer to="/blog">
          <Button variant="danger" className="mr-2">
            Abrechen
          </Button>
        </LinkContainer>
        <Button variant="warning" onClick={this.handleEdit}>
          Edit
        </Button>
      </Form>
    );
  }
}

export default withRouter(BlogDetails);
