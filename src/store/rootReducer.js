/*
  Root reducer to import and combine all reducer modules
*/

import { combineReducers } from 'redux';
import tasks from './modules/tasks/task-reducer';

export default combineReducers({
  tasks
});

