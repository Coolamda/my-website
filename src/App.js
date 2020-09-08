import React from "react";
import { Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Navigation from "./components/presentational/Navigation";
import Footer from "./components/presentational/Footer";
import Home from "./components/presentational/Home";
import Blog from "./components/container/Blog";
import BlogDetails from "./components/presentational/BlogDetails";
import About from "./components/presentational/About";
import Projects from "./components/container/Projects";
import AddBlogForm from "./components/container/AddBlogForm.js";

const App = () => (
  <div>
    <Navigation />
    <main>
      <Container className="mt-5">
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
      </Container>
    </main>
    <Footer />
  </div>
);

export default App;
