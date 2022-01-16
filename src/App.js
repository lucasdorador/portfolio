// import Root from "./Root";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes/indexRoutes";

function App() {
  return (
    // <Root>
    <Router>
      <Routes />
    </Router>
    // </Root>
  );
}

export default App;
