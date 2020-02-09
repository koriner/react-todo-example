/*
  Todo List container component

  This is the main connected component for tasks which handles
  interactivity with redux
*/

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './TodoList.module.scss';
import {
  addTask,
  completeTask,
  deleteTask
} from 'store/modules/tasks/task-actions';
import Toolbar from 'components/Toolbar/Toolbar';
import AddTask from 'components/AddTask/AddTask';
import TaskList from 'components/TaskList/TaskList';
import sortMode from 'constants/sortMode';

class TodoList extends React.Component {
  // Set default sort mode 
  state = {
    sortMode: sortMode.TIME
  };

  /**
   * Sets the sort mode
   */
  handleSetSortMode = sortMode => {
    this.setState({ sortMode });
  }

  render() {
    const { tasks, addTask, completeTask, deleteTask } = this.props;
    const { sortMode } = this.state;

    return (
      <div className={styles.todoList}>
        <Toolbar
          tasks={tasks}
          sortMode={sortMode}
          onSetSortMode={this.handleSetSortMode}
        />
        <AddTask onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          sortMode={sortMode}
          onComplete={completeTask}
          onDelete={deleteTask}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks.tasks
  };
}

const mapDispatchToProps = {
  addTask,
  completeTask,
  deleteTask
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
