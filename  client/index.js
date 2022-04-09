import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
//import { createStore } from 'redux';
import App from './App.jsx';
import store from './store';
import axios from 'axios'

//const store = createStore('../reducers/index')

render(
<BrowserRouter>
<Provider store={store}>
  <App/>
</Provider>
</BrowserRouter>,
document.getElementById('app'),
);