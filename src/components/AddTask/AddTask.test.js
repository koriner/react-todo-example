import React from 'react';
import { renderWithRedux } from 'test-helpers/index';
import { fireEvent } from '@testing-library/react';
import App from 'containers/App/App';

test('creates a task when clicking the add button', () => {
  const { store, getAllByTestId, getByPlaceholderText, getByText, getByTestId } = renderWithRedux(<App />);
  
  let taskItems = getAllByTestId(/TaskItem/i);
  expect (taskItems.length).toBe(3);

  // change the input values
  fireEvent.change(getByPlaceholderText('Add a task...'), {
    target: { value: 'My new task' }
  });
  expect(getByPlaceholderText('Add a task...').value)
    .toEqual('My new task');

  // click add button
  fireEvent.click(getByText('Add'), {
    target: { value: "My new task" }
  });
  expect(getByPlaceholderText('Add a task...').value)
    .toEqual('');

  taskItems = getAllByTestId(/TaskItem/i);
    expect (taskItems.length).toBe(4);
})