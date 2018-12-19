import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'redux-react-hook';
import { addTodoDelay } from '../../redux/actions/todos';


const AddTodo = () => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    function handleSubmit(e){
        e.preventDefault();
    
        if(!value){
            alert("You must enter some text");
        }
        
        dispatch(addTodoDelay(value));
        setValue("");
    }
    return (
        <form id="addTodo" onSubmit={e => handleSubmit(e)}>
            <input type="text" placeholder='Add Todo...' value={value} onChange={e => setValue(e.target.value)}  />
            <button type='submit'>Add Todo</button>
        </form>
    )
}

export default AddTodo;