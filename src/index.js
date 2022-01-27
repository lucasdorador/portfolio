import React from "react";
import ReactDOM from "react-dom";
import "./GlobalScss/Main.scss";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App className="App" />
  </React.StrictMode>,
  document.getElementById("root")
);
