import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import objectIdToTimestamp from "objectid-to-timestamp";
import moment from "moment";

import Loading from "./Loading";
import BlogForm from "./BlogForm";
import url from "../../url";

class BlogDetails extends Component {
  state = {
    blog: null,
    edit: false,
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await fetch(`${url}/blog/${id}`);
    const blog = await response.json();

    this.setState({ blog });
  }

  handleClick = async () => {
    const { id } = this.props.match.params;

    await fetch(`${url}/blog/${id}`, {
      method: "DELETE",
    });

    this.props.history.push("/blog");
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { id } = this.props.match.params;

    const response = await fetch(`${url}/blog/${id}`, {
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

    const { title, text, _id } = this.state.blog;

    const timeStamp = objectIdToTimestamp(_id);

    if (!this.state.edit) {
      return (
        <article>
          <h1>{title}</h1>
          <span>{moment.unix(timeStamp).format("DD.MM")}</span>
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
      <BlogForm
        title={this.state.blog.title}
        text={this.state.blog.text}
        change={this.handleChange}
        submit={this.handleSubmit}
        edit={{
          editable: true,
          handleEdit: this.handleEdit,
        }}
      />
    );
  }
}

export default withRouter(BlogDetails);
