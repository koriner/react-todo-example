import React from 'react';
import { renderWithRedux } from 'test-helpers/index';
import { fireEvent } from '@testing-library/react';
import App from 'containers/App/App';
import {
  deleteTask,
  addTask
} from 'store/modules/tasks/task-actions';
import sortMode from 'constants/sortMode';

const TASKS = [
  {
    id: 1,
    timestamp: Date.now() - 1000,
    text: 'C - Task C',
    priority: 1
  },
  {
    id: 2,
    timestamp: Date.now() - 2000,
    text: 'B - Task B',
    priority: 0
  },
  {
    id: 3,
    timestamp: Date.now() - 3000,
    text: 'A - Task A',
    priority: 2
  }
];

test('handles sort mode correctly', () => {
  const { store, getAllByTestId, getByTestId } = renderWithRedux(<App />);

  // remove initial state tasks and add custom ones
  store.getState().tasks.tasks.forEach(task => {
    store.dispatch(deleteTask(task));
  });

  TASKS.forEach(task => {
    store.dispatch(addTask(task));
  });

  let taskItems = getAllByTestId(/TaskItem/i);
  expect (taskItems.length).toBe(3);

  let names = [];

  // default sort mode is by time
  taskItems.forEach((item, index) => {
    names[index] = item.getElementsByTagName('p')[0];
  });
  expect(names[0]).toHaveTextContent('C - Task C');
  expect(names[1]).toHaveTextContent('B - Task B');
  expect(names[2]).toHaveTextContent('A - Task A');

  // sort by name
  fireEvent.change(getByTestId(/SortSelect/i), {
    target: { value: sortMode.NAME }
  });
  taskItems = getAllByTestId(/TaskItem/i);
  taskItems.forEach((item, index) => {
    names[index] = item.getElementsByTagName('p')[0];
  });
  expect(names[0]).toHaveTextContent('A - Task A');
  expect(names[1]).toHaveTextContent('B - Task B');
  expect(names[2]).toHaveTextContent('C - Task C');

  // sort by priority
  fireEvent.change(getByTestId(/SortSelect/i), {
    target: { value: sortMode.PRIORITY }
  });
  taskItems = getAllByTestId(/TaskItem/i);
  taskItems.forEach((item, index) => {
    names[index] = item.getElementsByTagName('p')[0];
  });
  expect(names[0]).toHaveTextContent('A - Task A');
  expect(names[1]).toHaveTextContent('C - Task C');
  expect(names[2]).toHaveTextContent('B - Task B');
});