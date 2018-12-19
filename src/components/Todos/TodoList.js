import React from "react";
import { useMappedState } from "redux-react-hook";

const mapState = ({todosReducer}) => ({
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
            todos.map((todo, index) => <li key={index}>{todo.title}</li>)
        }
      </ul>
    </div>
  );
}
