import React from "react";
import Container from "react-bootstrap/Container";

import Navigation from "./components/presentational/Navigation";
import Footer from "./components/presentational/Footer";

import Routes from "./Routes";

const App = () => (
  <div>
    <Navigation />
    <main>
      <Container className="mt-5">
        <Routes />
      </Container>
    </main>
    <Footer />
  </div>
);

export default App;
