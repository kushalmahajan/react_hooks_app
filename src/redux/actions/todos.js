import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
  ADD_TODO_DELAY,
  DELETE_TODO_DELAY
} from "../actionTypes/todos";

export const addTodoDelay = (title, delay = 400) => ({ type: ADD_TODO_DELAY, title, delay })
export const deleteTodoDelay = (id, delay = 400) => ({ type: DELETE_TODO_DELAY, id, delay })
export const addTodo = title => ({ type: ADD_TODO, title });
export const deleteTodo = (id) => ({ type: DELETE_TODO, id });
export const updateTodo = (id, title) => ({ type: UPDATE_TODO, id, title  });
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, id });