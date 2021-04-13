import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { createStore } from 'redux'
import TestRedux from './reduce'
import { Provider } from 'react-redux';

const store = createStore(
  TestRedux,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById("root")
);

