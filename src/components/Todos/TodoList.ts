import * as React from "react";
import { useMappedState } from "redux-react-hook";
import TodoItem from "./TodoItem";


const mapState = ({ todosReducer }) => ({
  todoCount: todosReducer.todos.length,
  todos: todosReducer.todos
});

export default function TodoList() {
  const { todoCount, todos } = useMappedState(mapState);
  return (
    <div>
      <div>You have {todoCount} todos</div>
      <ul>
        {
            todos.map((todo: string, index: number) => <li key={index} {...todo}>,/li.)
        }
      </ul>
    </div>
  );
}
