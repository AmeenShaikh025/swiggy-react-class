import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

//1. import applyMiddleware from redux
import { createStore, applyMiddleware } from "redux";
//2. import thunk from redux-thunk
import thunk from "redux-thunk";

import App from "./AppWithReducer";
import reducer from "./reducers";
import "./styles.css";

import { BrowserRouter as Router } from "react-router-dom";

//3. pass it as an argument to createstore
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// npm install --save redux-thunk axios
