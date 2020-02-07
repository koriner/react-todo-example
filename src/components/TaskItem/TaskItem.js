/*
  Task item - renders the component for a single todo task in the list.
*/

import React from 'react';
import PropTypes from 'prop-types';
import styles from './TaskItem.module.scss';

const TaskItem = props => {
  const { task } = props;
  
  return (
    <div className={styles.taskItem}>
      <p>{task.text}</p>
      <p>{task.priority}</p>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskItem;
