/*
  Main app container component
*/

import React from 'react';
import styles from './App.module.scss';
import TodoList from 'containers/TodoList/TodoList';

const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Header</h1>
      </header>
      <section>
        <TodoList
        />
      </section>
    </div>
  );
}

export default App;
