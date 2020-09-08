import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/presentational/Home";
import Blog from "./components/container/Blog";
import BlogDetails from "./components/presentational/BlogDetails";
import About from "./components/presentational/About";
import Projects from "./components/container/Projects";
import AddBlogForm from "./components/container/AddBlogForm.js";

const Routes = () => (
  <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/blog/create">
      <AddBlogForm />
    </Route>
    <Route path="/blog/:id">
      <BlogDetails />
    </Route>
    <Route path="/blog">
      <Blog />
    </Route>
    <Route path="/projects">
      <Projects />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default Routes;
