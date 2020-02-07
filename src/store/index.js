/*
  Redux store base, creates and configures the redux store 
  with reducers.

  Using redux-thunk only for the async-ness to add delays,
  there is no actual API calls used in the app.
*/

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
};

export default configureStore;
