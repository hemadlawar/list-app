import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import { store } from "../src/store/index";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
