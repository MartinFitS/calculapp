import React from 'react';
import ReactDOM from 'react-dom';
import App from './Routes/App.js';
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import reducer from "./reducers/index";
import "./assets/styles/index.css";

const initialState = {
  "users": [],
  "login": [],
  "authenticateUser":[]
}

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
const store = createStore(reducer, initialState, composeEnchancers())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);


