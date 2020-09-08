import React from "react";
import { Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Home from "./components/presentational/Home";
import Blog from "./components/container/Blog";
import BlogDetails from "./components/presentational/BlogDetails";
import About from "./components/presentational/About";
import Projects from "./components/container/Projects";
import AddBlogForm from "./components/container/AddBlogForm.js";

const Routes = () => (
  <Switch>
    <Route path="/about">
      <Container className="mt-5">
        <About />
      </Container>
    </Route>
    <Route path="/blog/create">
      <Container className="mt-5">
        <AddBlogForm />
      </Container>
    </Route>
    <Route path="/blog/:id">
      <Container className="mt-5">
        <BlogDetails />
      </Container>
    </Route>
    <Route path="/blog">
      <Container className="mt-5">
        <Blog />
      </Container>
    </Route>
    <Route path="/projects">
      <Container className="mt-5">
        <Projects />
      </Container>
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default Routes;
