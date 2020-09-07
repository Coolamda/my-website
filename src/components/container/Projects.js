import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";

import Title from "../presentational/Title";

class Projects extends Component {
  state = {
    projects: null,
  };

  async componentDidMount() {
    const fetchResponse = await fetch(
      "https://api.github.com/users/Coolamda/repos"
    );
    const projects = await fetchResponse.json();

    this.setState({ projects });
  }

  renderProjects = () =>
    this.state.projects.map((project) => (
      <li key={project.id}>
        <a href={project.html_url} target="blank">
          {project.full_name}
        </a>
      </li>
    ));

  render() {
    const { projects } = this.state;

    if (!projects) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    }

    return (
      <React.Fragment>
        <Title title="Projects" />
        <ul>{this.renderProjects()}</ul>
      </React.Fragment>
    );
  }
}

export default Projects;
