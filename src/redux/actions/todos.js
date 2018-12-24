import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
  ADD_TODO_DELAY,
  DELETE_TODO_DELAY
} from "../actionTypes/todos";

type ActionShape = {
    type: string
}
export const addTodoDelay = (title: string, delay?: number = 400): {} => ({ type: ADD_TODO_DELAY, title, delay }: ActionShape)
export const deleteTodoDelay = (id: number, delay?: number = 400): {} => ({ type: DELETE_TODO_DELAY, id, delay }: ActionShape)
export const addTodo = (title: string): {} => ({ type: ADD_TODO, title }: ActionShape);
export const deleteTodo = (id: number): {} => ({ type: DELETE_TODO, id }: ActionShape);
export const updateTodo = (id: number, title: string):{} => ({ type: UPDATE_TODO, id, title  }: ActionShape);
export const toggleTodo = (id: string):{} => ({ type: TOGGLE_TODO, id }: ActionShape);

