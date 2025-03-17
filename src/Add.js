import React from 'react';
import './App.css';

export default function Add({ value, onChange, onAdd }) {
  const handleChange = (evt) => {
    onChange(evt.target.value);
  };

  const handleKeyPress = (evt) => {
    if (evt.key === 'Enter') {
      onAdd();
    }
  };

  return (
    <div className="input-container">
      <input 
        className="todo-input"
        data-testid="todo-input" 
        value={value} 
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        name="add_todo"  
        placeholder="Enter a new todo"
      />
      <button 
        className="add-button"
        data-testid="add-todo-button"
        onClick={onAdd}
      >
        Add Todo
      </button>
    </div>
  );
}