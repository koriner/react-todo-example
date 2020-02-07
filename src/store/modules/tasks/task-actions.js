/*
  Task module redux actions & creators
*/

export const ADD_TASK = 'task/add';

/**
 * Add a new task to the list
 *
 * @param {Object} task
 */
export const addTask = task => {
  return {
    type: ADD_TASK,
    payload: {
      task
    }
  }
}
