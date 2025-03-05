import React from 'react';

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
    <div>
      <input 
        data-testid="todo-input" 
        value={value} 
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        name="add_todo"  
        placeholder="Enter a new todo"
      />
      <button 
        data-testid="add-todo-button"
        onClick={onAdd}
      >
        Add Todo
      </button>
    </div>
  );
}