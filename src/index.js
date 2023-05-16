import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CategoryProvider } from "./context/CategoryContext";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <CategoryProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </CategoryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
