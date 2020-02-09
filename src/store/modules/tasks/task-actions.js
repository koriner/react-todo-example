/*
  Task module redux actions & creators
*/

import taskPriority from 'constants/taskPriority';

export const ADD_TASK = 'task/add';
export const COMPLETE_TASK = 'task/complete';
export const DELETE_TASK = 'task/delete';
export const SET_PRIORITY = 'task/set_priority';
export const CLEAR_COMPLETED = 'task/clear_completed';

/**
 * Add a new task to the list
 *
 * @param {Object} task
 */
export const addTask = task => {
  if (!task.priority) {
    task.priority = taskPriority.LOW;
  }

  return {
    type: ADD_TASK,
    payload: {
      task
    }
  }
}

/**
 * Complete a task item
 *
 * @param {Object} task
 */
export const completeTask = task => {
  return {
    type: COMPLETE_TASK,
    payload: {
      task
    }
  }
}

/**
 * Delete a task item
 *
 * @param {Object} task
 */
export const deleteTask = task => {
  return {
    type: DELETE_TASK,
    payload: {
      task
    }
  }
}

/**
 * Sets priority for a task item
 *
 * @param {Object} task
 * @param {Number} priority
 */
export const setTaskPriority = (task, priority) => {
  return {
    type: SET_PRIORITY,
    payload: {
      task,
      priority
    }
  }
}

/**
 * Clears completed tasks
 */
export const clearCompletedTasks = () => {
  return {
    type: CLEAR_COMPLETED,
    payload: {}
  }
}



