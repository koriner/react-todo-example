/*
  Task list - renders a list of Task items
*/

import React from 'react';
import PropTypes from 'prop-types';
import styles from './TaskList.module.scss';
import TaskItem from 'components/TaskItem/TaskItem';

const TaskList = props => {
  const { tasks, onComplete, onDelete } = props;
  
  return (
    <div className={styles.taskList}>
      {
        tasks.map(task => (
          <TaskItem
            key={`task_${task.id}`}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))
      }
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
  tasks: [],
};

export default TaskList;
