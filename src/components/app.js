import React from 'react';
import TodoList from './Todos/TodoList';
import AddTodo from './Todos/AddTodo';

export default function App() {
  return (
    <div>
      <h1>Todo</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}