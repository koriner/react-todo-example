/*
  Task item - renders the component for a single todo task in the list.
*/

import React from 'react';
import PropTypes from 'prop-types';
import styles from './TaskItem.module.scss';
import classnames from 'classnames';
import taskStatus from 'constants/taskStatus';
import taskPriority from 'constants/taskPriority';
import classNames from 'classnames';

const TaskItem = props => {
  const { task, onComplete, onDelete } = props;

  /**
   * Handle clicking the complete button
   */
  const handleComplete = () => {
    onComplete(task);
  }

  /**
   * Handle clicking the delete button
   */
  const handleDelete = () => {
    onDelete(task);
  }

  const taskClass = classnames(styles.taskItem, {
    [styles.taskComplete]: task.status === taskStatus.COMPLETE
  });

  const markerClass = classnames(styles.priorityMarker, {
    [styles[`priority_${task.priority}`]]: task.status === taskStatus.INCOMPLETE,
    [styles[`priority_complete`]]: task.status === taskStatus.COMPLETE, 
  });
  
  return (
    <div className={taskClass}>
      <div className={styles.priority}>
        <span className={markerClass}></span>
      </div>

      <div className={styles.text}>
        <p>{task.text}</p>
      </div>

      <div className={styles.actions}>
        <div className={styles.buttons}>
          <div
            className={styles.button}
            onClick={handleDelete}
          >
            <span className={styles.icon}>❌</span>
          </div>
          <div
            className={styles.button}
            onClick={handleComplete}
          >
            <span className={styles.icon}>✔️</span>
          </div>
        </div>
      </div>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskItem;
