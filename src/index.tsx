import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Login, Home } from "./pages";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
