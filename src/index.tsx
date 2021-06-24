import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./services/firebase";

import Providers from "./hooks/index";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
