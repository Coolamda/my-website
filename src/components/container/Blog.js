import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

import BlogList from "../presentational/BlogList";
import Title from "../presentational/Title";

class Blog extends Component {
  state = {
    blogs: null,
  };

  async componentDidMount() {
    const fetchResponse = await fetch("http://localhost:8080/api/blog");
    const blogs = await fetchResponse.json();

    this.setState({ blogs });
  }

  render() {
    let blogList = this.state.blogs;

    if (!blogList) {
      blogList = (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    } else {
      blogList = <BlogList blogs={this.state.blogs} />;
    }

    return (
      <React.Fragment>
        <Title title="Mein Blog" />
        <Row>{blogList}</Row>
      </React.Fragment>
    );
  }
}

export default Blog;
