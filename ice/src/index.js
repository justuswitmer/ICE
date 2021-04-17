import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const sagaMiddleware = createSagaMiddleware();

const middlewareList =
  process.env.NODE_ENV === "development"
    ? [sagaMiddleware, logger]
    : [sagaMiddleware];


const getCustomer = (state = {}, action) => {
  if (action.type === 'SET_CUSTOMER') {
    console.log(action.payload);

    return action.payload;
  }
  return state;
}

const store = createStore(
  combineReducers({
    getCustomer,
  }),
  applyMiddleware(...middlewareList)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
