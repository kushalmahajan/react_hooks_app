import * as React from 'react';
import { useState } from "react";
import { useDispatch } from "redux-react-hook";
import { deleteTodoDelay, updateTodo } from '../../redux/actions/todos';

type PropTypes = {
    id: number,
    title: string
}

const TodoItem = ({ id, title }: PropTypes) => {
    const [saveMode, setSaveMode] = useState(false);
    const [inputVal, setInputVal] = useState(title);
    const dispatch = useDispatch();

    return (
        <li>
            {saveMode ? (
                <form onSubmit={ e => {
                    e.preventDefault();
                    dispatch(updateTodo(id, inputVal));
                    setSaveMode(!saveMode);
                }}>
                    <input type="text" value={inputVal} onChange={(e) => {
                        setInputVal(e.target.value);
                    }}/>
                    <button type="submit">Save</button>
                </form>
            ): (
                <div>
                    <span>{title}</span>
                    <button onClick={() => {
                        dispatch(deleteTodoDelay(id));
                    }}>Delete Todo</button>
                    <button onClick={() => {
                        setSaveMode(!saveMode);
                    }}>Update Todo</button>
                </div>
            )}
        </li>
    )
}
export default TodoItem;