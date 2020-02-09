import React from 'react';
import { render } from '@testing-library/react';
import Toolbar from './Toolbar';
import sortMode from 'constants/sortMode';
import taskStatus from 'constants/taskStatus';

const TASKS = [
  {
    id: 0,
    text: 'task 1',
    time: Date.now() - 3000,
    status: taskStatus.INCOMPLETE,
    priority: 0
  },
  {
    id: 0,
    text: 'task 2',
    time: Date.now() - 2000,
    status: taskStatus.INCOMPLETE,
    priority: 0
  },
  {
    id: 0,
    text: 'task 3',
    time: Date.now() - 1000,
    status: taskStatus.COMPLETE,
    priority: 0
  }
];

test('toolbar renders correct item counts', () => {
  const { getByTestId, getAllByTestId } = render(
    <Toolbar
      tasks={TASKS}
      sortMode={sortMode.TIME}
      onSetSortMode={() => {}}
      onClearCompleted={() => {}}
    />
  );
  const compElement = getAllByTestId(/Toolbar/i);
  expect(compElement[0]).toBeInTheDocument();

  const countElement1 = getByTestId(/Toolbar_TaskCount_Complete/i);
  const countElement2 = getByTestId(/Toolbar_TaskCount_Incomplete/i);

  expect(countElement1).toHaveTextContent('Complete: 1');
  expect(countElement2).toHaveTextContent('Incomplete: 2');
});
