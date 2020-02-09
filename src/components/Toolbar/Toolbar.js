/*
  Toolbar - controls for sorting/completing and viewing number of tasks
*/

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './Toolbar.module.scss';
import taskStatus from 'constants/taskStatus';

/**
 * Count the number of incomplete and complete tasks
 * 
 * @param {Array} tasks
 */
const countTaskTypes = tasks => {
  const incomplete = tasks.filter(t => t.status !== taskStatus.COMPLETE).length;
  const complete = tasks.filter(t => t.status === taskStatus.COMPLETE).length;

  return {
    incomplete,
    complete
  };
}

// Toolbar component
const Toolbar = props => {
  const { tasks, sortMode, onSetSortMode } = props;

  // Get the number of tasks by status
  const counts = useMemo(() => {
    return countTaskTypes(tasks);
  }, [tasks]);
  
  return (
    <div className={styles.toolbar}>
      <div className={styles.toolbarLeft}>
        <p className={styles.numTasksText}>
          <span>Complete: {counts.complete}</span>
          <span>Incomplete: {counts.incomplete}</span>
        </p>
      </div>
      <div className={styles.toolbarRight}>
        <span>Sort by: </span>
        <select value={sortMode} onChange={(e) => onSetSortMode(e.target.value)}>
          <option value="time">Time</option>
          <option value="name">Name</option>
          <option value="priority">Priority</option>
        </select>
        <button onClick={props.onClearCompleted}>
          Clear Completed
        </button>
      </div>
    </div>
  )
}

Toolbar.propTypes = {
  sortMode: PropTypes.string.isRequired,
  onSetSortMode: PropTypes.func.isRequired,
}

export default Toolbar;
