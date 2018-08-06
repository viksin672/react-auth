import React, { Component } from 'react';
import Main from './Main';
import { Provider } from "react-redux";
import { configureStore } from "../store";

import {  setCurrentUser } from "../store/actions/auth";
import { BrowserRouter as Router } from "react-router-dom";

const store = configureStore();

  try {
    store.dispatch(setCurrentUser(localStorage.user));
  } catch (e) {
    store.dispatch(setCurrentUser({}));
  }

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="onboarding">

        <Main />
      </div>
    </Router>
  </Provider>
);

export default App;
