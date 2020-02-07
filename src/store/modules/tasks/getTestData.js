/*
  Just returns some example data to test with
*/

import taskStatus from 'constants/taskStatus';
import { getPriorityByIndex } from 'constants/taskPriority';

const NUM_ITEMS = 3;

export default () => {
  const tasks = [];
  
  for (let i = 0; i < NUM_ITEMS; i++) {
    // Random value for the task priority
    const rand = Math.floor(Math.random() * 3);

    tasks.push({
      id: i,
      timestamp: Date.now() - (i * 1000),
      text: `Task ${i + 1}`,
      status: taskStatus.INCOMPLETE,
      priority: getPriorityByIndex(rand)
    });
  }

  // Reverse the tasks so the timestamps are in ascending order
  return tasks.reverse();
};
