/*
  Task list - renders a list of Task items
*/

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './TaskList.module.scss';
import TaskItem from 'components/TaskItem/TaskItem';
import sortModes from 'constants/sortMode';
import { sortBy } from 'lodash';

/**
 * Sort tasks by sort mode
 *
 * @param {Array} tasks
 * @param {String} sortMode
 */
const sortTasks = (tasks, sortMode) => {
  let sorted = tasks;

  switch (sortMode) {
    case sortModes.NAME:
      sorted = sortBy(tasks, 'text');
      break;
    
    case sortModes.PRIORITY:
      // Reverse this so high priority comes first
      sorted = sortBy(tasks, 'priority').reverse();
      break;

    case sortModes.TIME:
    default:
      sorted = sortBy(tasks, 'timestamp');
      break;
  }

  return sorted;
}

const TaskList = props => {
  const { tasks, sortMode, onComplete, onDelete, onSetPriority } = props;

  // Get sorted tasks when things change
  const sortedTasks = useMemo(() => {
    return sortTasks(tasks, sortMode);
  }, [tasks, sortMode]);
  
  return (
    <div className={styles.taskList}>
      {
        sortedTasks.map(task => (
          <TaskItem
            key={`task_${task.id}`}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
            onSetPriority={onSetPriority}
          />
        ))
      }
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array,
  sortMode: PropTypes.string.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSetPriority: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
  tasks: [],
};

export default TaskList;
