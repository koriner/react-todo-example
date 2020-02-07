/*
  Task list - renders a list of Task items
*/

import React from 'react';
import PropTypes from 'prop-types';
import styles from './TaskList.module.scss';
import TaskItem from 'components/TaskItem/TaskItem';

const TaskList = props => {
  const { tasks } = props;
  
  return (
    <div className={styles.taskList}>
      {
        tasks.map(task => (
          <TaskItem
            key={`task_${task.id}`}
            task={task}
          />
        ))
      }
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array,
};

TaskList.defaultProps = {
  tasks: [],
};

export default TaskList;
