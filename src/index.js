/*
  Entry point index file for the app
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from 'store';
import App from './containers/App/App';
import './styles/index.scss';

const store = createStore();

const MainApp = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(MainApp, document.getElementById('root'));
