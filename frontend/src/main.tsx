import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import "./index.css";
import reducer from "./reducers";
import { Provider } from "react-redux";

import {legacy_createStore as createStore} from 'redux'

import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

const store = createStore(reducer , applyMiddleware(thunk)); 

ReactDOM.render(
  <Provider store={store}>    
    <App/>
  </Provider>
    ,
  document.getElementById("root")
);
