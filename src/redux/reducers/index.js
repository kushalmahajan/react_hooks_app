import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import todosReducer, { addTodosEpic, deleteTodosEpic } from './todos';
import sampleReducer from './sample';

export const rootEpic = combineEpics(addTodosEpic, deleteTodosEpic);
export const rootReducer = combineReducers({sampleReducer, todosReducer});
