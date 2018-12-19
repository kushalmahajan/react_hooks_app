import React from 'react';
import useReducer from '../hooks/useReducer';
import TodoList from './Todos/TodoList';
import todosReducer from '../redux/reducers/todos';

function App() {
    const [todos] = useReducer(todosReducer, [{id: 0, title: 'Todo 1'}]);
    return (
        <div>
            <TodoList todos={todos} />
        </div>
    );
}
export default App;