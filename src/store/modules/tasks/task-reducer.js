/*
  Task module redux reducer. Uses immer for immutability.
*/

import produce from 'immer';
import {
  ADD_TASK
} from './task-actions';

// Define initial state for tasks module
const INITIAL_STATE = {
  tasks: []
}

/**
 * Main reducer method
 */
export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  return produce(state, draft => {
    switch (type) {

      case ADD_TASK: {
        //
        break;
      }
  
      default:
        break;
    }
  });
};
