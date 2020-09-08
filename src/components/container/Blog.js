import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

import Loading from "../presentational/Loading";
import BlogList from "../presentational/BlogList";
import Title from "../presentational/Title";
import url from "../../url";

class Blog extends Component {
  state = {
    blogs: null,
  };

  async componentDidMount() {
    const fetchResponse = await fetch(`${url}/blog`);
    const blogs = await fetchResponse.json();

    this.setState({ blogs });
  }

  render() {
    let blogList = this.state.blogs;

    if (!blogList) {
      blogList = <Loading />;
    } else {
      blogList = <BlogList blogs={this.state.blogs} />;
    }

    return (
      <>
        <Title title="Mein Blog" />
        <LinkContainer to="blog/create">
          <Button variant="success">Post erstellen</Button>
        </LinkContainer>
        <Row>{blogList}</Row>
      </>
    );
  }
}

export default Blog;
