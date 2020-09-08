import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";

import Loading from "./Loading";

class BlogDetails extends Component {
  state = {
    blog: null,
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await fetch(`http://localhost:8080/api/blog/${id}`);
    const blog = await response.json();

    this.setState({ blog });
  }

  render() {
    if (!this.state.blog) {
      return <Loading />;
    }

    const { title, text } = this.state.blog;

    return (
      <article>
        <h1>{title}</h1>
        <p className="mt-5">{text}</p>
        <LinkContainer to="/blog">
          <Button>Zurück</Button>
        </LinkContainer>
      </article>
    );
  }
}

export default withRouter(BlogDetails);
