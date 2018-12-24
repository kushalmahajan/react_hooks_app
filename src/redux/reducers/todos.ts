import { ADD_TODO,ADD_TODO_DELAY, DELETE_TODO, UPDATE_TODO, TOGGLE_TODO, DELETE_TODO_DELAY } from "../actionTypes/todos";
import counter from "../../helpers/counter";
import { ofType } from "redux-observable";
import { addTodo, deleteTodo } from "../actions/todos";
import {  delay, map } from 'rxjs/operators';
import { Epic } from 'redux-observable';
import { Observable } from "rxjs";

type Todo = {
     id: number, title: string, completed: boolean 
}
type StateShape = {
    readonly todos: Todo[],
    readonly visibilityFilter: string
}
const initialState: StateShape = {
  todos: [{id: 0, title: 'Learn Hooks', completed: false}, {id: 1, title: 'Learn Redux', completed: false}],
  visibilityFilter: "SHOW_ALL"
};
export type TodosAction = {
    type: string,
    payload?:any,
    id?: number,
    title?: string
};

const todosReducer = (state: StateShape = initialState, action: TodosAction) => {
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
type AddTodosActionType = {
    title: string
}
type DeleteTodosActionType = {
    id: number
}
export const addTodosEpic: Epic<TodosAction, StateShape>  = (action$: Observable) => action$.pipe(
  ofType(ADD_TODO_DELAY),
  delay(400),
    map((action: AddTodosActionType) => addTodo(action.title))
);

export const DeleteTodosActionType = (action$: Observable) => action$.pipe(
    ofType(DELETE_TODO_DELAY),
    delay(400),
    map((action: DeleteTodosActionType) => deleteTodo(action.id))
);
export default todosReducer;