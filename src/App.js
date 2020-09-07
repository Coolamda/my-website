import React from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "./components/presentational/Navigation";
import Footer from "./components/presentational/Footer";
import Home from "./components/presentational/Home";
import Blog from "./components/presentational/Blog";
import BlogDetails from "./components/presentational/BlogDetails";
import About from "./components/presentational/About";
import Projects from "./components/presentational/Projects";

const App = () => (
  <div>
    <Navigation />
    <main>
      <Switch>
        <Route path="/about">
          <About />
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
    </main>
    <Footer />
  </div>
);

export default App;
