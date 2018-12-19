import React from 'react';

const TodoList = ({todos}) => {
    return (
        <ul>
            {
                todos.map(todo => <li key={todo.id}>{todo.title}</li>)
            }
        </ul>
    )
}
export default TodoList;