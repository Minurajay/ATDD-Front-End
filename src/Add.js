import { useState } from 'react';
export default function Add() {
    const[data, setData] = useState({
        add_todo: ''
    });

    const onChange = (evt) => {
        const key = evt.target.name;
        const value = evt.target.value;
        setData(oldData => ({...oldData, [key]: value}));
    };
    return(
        <input 
            data-testid="todo-input" 
            value={data.add_todo} 
            onChange={(evt) => setData(oldData => ({...oldData, [evt.target.name]: evt.target.value}))}  
            name="add_todo"  
            />
    );
}