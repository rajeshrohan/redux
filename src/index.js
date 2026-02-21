import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createStore, applyMiddleware, combineReducers } from "redux";
import { accountReducer } from "./reducers/account";
import { bonusReducer } from "./reducers/bonus";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

const store = createStore(
  combineReducers({ account: accountReducer, bonus: bonusReducer }),
  applyMiddleware(logger.default, thunk).default,
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
);


