import React from "react";

import Navigation from "./components/presentational/Navigation";
import Routes from "./Routes";

const App = () => (
  <div>
    <Navigation />
    <main>
      <Routes />
    </main>
  </div>
);

export default App;
