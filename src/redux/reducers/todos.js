import { ADD_TODO,ADD_TODO_DELAY, DELETE_TODO, UPDATE_TODO, TOGGLE_TODO, DELETE_TODO_DELAY } from "../actionTypes/todos";
import counter from "../../helpers/counter";
import { ofType } from "redux-observable";
import { addTodo, deleteTodo } from "../actions/todos";
import {  delay, map } from 'rxjs/operators';

const initialState = {
  todos: [],
  visibilityFilter: "SHOW_ALL"
};

const todosReducer = (state = initialState, action) => {
    const { todos } = state;
    switch (action.type) {
        case ADD_TODO: {
            const newList = { todos: [...todos, { title: action.title, id: counter(), completed: false }] };
            return { ...state, ...newList };
        }
        
        case TOGGLE_TODO: 
            return { todos: todos.map(todo => {
                if (todo.id !== action.id) return todo;
                return { ...todo, completed: !todo.completed };
            })};
        case DELETE_TODO:
            return { ...state, todos: todos.filter(todo => todo.id !== action.id) };
        case UPDATE_TODO:
            return {
                ...state,
                todos: todos.map(todo => {
                    if (todo.id !== action.id) return todo;
                    return { ...todo, title: action.title };
                }) 
            };
        default:
            return state;
    }
};
export const addTodosEpic = (action$) => action$.pipe(
  ofType(ADD_TODO_DELAY),
  delay(400),
  map(action => addTodo(action.title))
);

export const deleteTodosEpic = (action$) => action$.pipe(
    ofType(DELETE_TODO_DELAY),
    delay(400),
    map(action => deleteTodo(action.id))
);
export default todosReducer;


