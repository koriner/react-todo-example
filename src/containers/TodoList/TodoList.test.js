import React from 'react';
import { renderWithRedux } from 'test-helpers/index';
import App from 'containers/App/App';
import {
  addTask,
  deleteTask
} from 'store/modules/tasks/task-actions';

test('renders the todolist component', () => {
  const { store, getAllByTestId, getByTestId } = renderWithRedux(<App />);
  const todoList = getByTestId(/TodoList/i);
  expect(todoList).toBeInTheDocument();
});


test('add and remove tasks updates list correctly', () => {
  const { store, getAllByTestId, getByTestId } = renderWithRedux(<App />);

  // first list length should be 3
  let taskItems = getAllByTestId(/TaskItem/i);
  expect (taskItems.length).toBe(3);

  // add a new task and check number of list items
  store.dispatch(addTask({
    text: 'new task 1'
  }));
  taskItems = getAllByTestId(/TaskItem/i);
  expect (taskItems.length).toBe(4);
  
  // delete a task and check number of list items
  store.dispatch(deleteTask(
    store.getState().tasks.tasks[0]
  ))
  taskItems = getAllByTestId(/TaskItem/i);
  expect (taskItems.length).toBe(3);
  
})