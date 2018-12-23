import * as React from "react";
import { useMappedState } from "redux-react-hook";
import TodoItem from "./TodoItem";

type TodosReducer = {
    todos: []
}
type TodosState = { todosReducer: TodosReducer };

const mapState = ({ todosReducer }: TodosState) => ({
  todoCount: todosReducer.todos.length,
  todos: todosReducer.todos
});

export default function TodoList() {
    const { todoCount, todos } = useMappedState <TodosState>(mapState);
    return (
        <div>
            <div>You have {todoCount} todos</div>
            <ul>
                {
                    todos.map((todo: {title: string}, index: number) => <li key={index} {...todo}>{todo.title}</li>)
                }
            </ul>
        </div>
    );
}
