import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CategoryProvider } from "./context/CategoryContext";
import { ProductProvider } from "./context/ProductContext";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <CategoryProvider>
      <ProductProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ProductProvider>
    </CategoryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
