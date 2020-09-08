import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import BlogForm from "../presentational/BlogForm";
import url from "../../url";

class AddBlogForm extends Component {
  state = {
    blog: {
      title: "",
      text: "",
    },
  };

  handleChange = (e) =>
    this.setState({
      blog: {
        ...this.state.blog,
        [e.target.name]: e.target.value,
      },
    });

  handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`${url}/blog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.blog),
    });

    this.props.history.push("/blog");
  };

  render() {
    return (
      <BlogForm
        submit={this.handleSubmit}
        change={this.handleChange}
        title={this.state.blog.title}
        text={this.state.blog.text}
        editable
      />
    );
  }
}

export default withRouter(AddBlogForm);
