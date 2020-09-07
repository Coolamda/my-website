import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import BlogList from "../presentational/BlogList";
import lorem from "../presentational/lorem";

class Blog extends Component {
  state = {
    blogs: [
      {
        id: 1,
        title: "Blog 1",
        text: lorem,
      },
      {
        id: 2,
        title: "Blog 2",
        text: lorem,
      },
      {
        id: 3,
        title: "Blog 3",
        text: lorem,
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <h1>Blog</h1>
        <Row>
          <BlogList blogs={this.state.blogs} />
        </Row>
      </React.Fragment>
    );
  }
}

export default Blog;
