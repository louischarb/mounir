import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import { store } from "./redux";
import "./styles.css";

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  rootElement
);
