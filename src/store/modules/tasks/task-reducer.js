/*
  Task module redux reducer. Uses immer for immutability.
*/

import produce from 'immer';
import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK
} from './task-actions';
import getTestData from './getTestData';
import taskStatus from 'constants/taskStatus';
import taskPriority from 'constants/taskPriority';
import uuid from 'uuid';

// Define initial state for tasks module
const INITIAL_STATE = {
  tasks: getTestData()
}

/**
 * Main reducer method
 */
export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  return produce(state, draft => {
    switch (type) {

      case ADD_TASK: {
        const { tasks } = draft;
        tasks.push({
          ...payload.task,
          id: uuid.v4(),
          priority: taskPriority.LOW,
          status: taskStatus.INCOMPLETE,
          timestamp: Date.now(),
        });
        break;
      }

      case COMPLETE_TASK: {
        const { tasks } = draft;
        const task = tasks.find(task => task.id === payload.task.id);
        if (task) {
          task.status = taskStatus.COMPLETE;
        }
        draft.tasks = tasks;
        break;
      }

      case DELETE_TASK: {
        draft.tasks = draft.tasks.filter(task => task.id !== payload.task.id);
        break;
      }
  
      default:
        break;
    }
  });
};
