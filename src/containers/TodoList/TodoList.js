/*
  Todo List container component

  This is the main connected component for tasks which handles
  interactivity with redux
*/

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './TodoList.module.scss';
import { addTask } from 'store/modules/tasks/task-actions';
import AddTask from 'components/AddTask/AddTask';
import TaskList from 'components/TaskList/TaskList';

class TodoList extends React.Component {
  render() {
    const { tasks, addTask } = this.props;

    return (
      <div className={styles.todoList}>
        <AddTask onAddTask={addTask} />
        <TaskList tasks={tasks} />
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
  addTask
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
