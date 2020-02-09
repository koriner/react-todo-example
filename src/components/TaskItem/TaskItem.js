/*
  Task item - renders the component for a single todo task in the list.
*/

import React from 'react';
import PropTypes from 'prop-types';
import styles from './TaskItem.module.scss';
import classnames from 'classnames';
import taskStatus from 'constants/taskStatus';
import taskPriority from 'constants/taskPriority';

const TaskItem = props => {
  const { task, onComplete, onDelete, onSetPriority } = props;

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

  /**
   * Handle changing task priority
   */
  const handleSetPriority = priority => {
    onSetPriority(task, priority);
  }

  const taskClass = classnames(styles.taskItem, {
    [styles.taskComplete]: task.status === taskStatus.COMPLETE
  });

  const markerClass = classnames(styles.priorityMarker, {
    [styles[`priority_${task.priority}`]]: task.status === taskStatus.INCOMPLETE,
    [styles[`priority_complete`]]: task.status === taskStatus.COMPLETE, 
  });
  
  return (
    <div className={taskClass} data-testid="TaskItem">
      <div className={styles.priority}>
        <span className={markerClass}></span>
      </div>

      <div className={styles.text}>
        <p>{task.text}</p>
      </div>

      <div className={styles.actions}>
        <div className={styles.buttons}>
          <div
            className={styles.buttonPriority}
          >
            <span className={styles.icon}>
              <span className={markerClass}></span>
            </span>
            <span className={styles.editPriority}>
              {
                Object.keys(taskPriority).map(k => {
                const priority = taskPriority[k];
                const editMarkerClass = classnames(styles.editPriorityMarker, {
                  [styles[`priority_${priority}`]]: true
                });
                return (
                  <span
                    key={`priority_${k}`}
                    className={editMarkerClass}
                    onClick={() => handleSetPriority(priority)}
                  >
                </span>
                )
              })
              }
            </span>
            <span className={styles.editPrioritySpacer}></span>
          </div>
          <div
            className={styles.actionButton}
            onClick={handleDelete}
            data-testid="DeleteTaskButton"
          >
            <span className={styles.icon}>❌</span>
          </div>
          <div
            className={styles.actionButton}
            onClick={handleComplete}
            data-testid="CompleteTaskButton"
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
  onSetPriority: PropTypes.func.isRequired,
};

export default TaskItem;
