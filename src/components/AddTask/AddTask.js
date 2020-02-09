/*
  Add task component, allows user to add a new task
*/

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AddTask.module.scss';

const AddTask = props => {
  const [text, setText] = useState('');

  /**
   * Saves the current data as a new task and resets state,
   * if the text value is valid
   */
  const saveTask = () => {
    if (text && text.length) {
      props.onAddTask({
        text
      });
      setText('');
    }
  };

  /**
   * Handle text input change
   *
   * @param {Event} evt 
   */
  const handleChange = evt => {
    setText(evt.target.value);
  }

  /**
   * Keypress handler to detect return key and save item
   *
   * @param {Event} evt 
   */
  const handleKeyPress = evt => {
    // React normalises the key values nicely so we just check for Enter
    if (evt.key === 'Enter') {
      saveTask();
    }
  }

  return (
    <div className={styles.addTask}>
      <input
        type="text"
        value={text}
        className={styles.textInput}
        placeholder="Add a task..."
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button
        className={styles.addButton}
        onClick={saveTask}
      >
        Add
      </button>
    </div>
  );
};

AddTask.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default AddTask;
