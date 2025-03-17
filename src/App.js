import React, { useState, useEffect } from 'react';
import Add from './Add';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  // Load todos from localStorage and set current date on component mount
  useEffect(() => {
    const savedItems = localStorage.getItem('todoItems');
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(new Date().toLocaleDateString(undefined, options));
  }, []);

  // Save todos to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(items));
  }, [items]);

  const handleAdd = () => {
    // Trim the new item and prevent adding empty strings
    const trimmedItem = newItem.trim();
    if (trimmedItem) {
      setItems(oldItems => [
        ...oldItems, 
        { 
          id: Date.now(), 
          text: trimmedItem, 
          completed: false 
        }
      ]);
      setNewItem(''); // Clear input after adding
    }
  };

  const handleInputChange = (value) => {
    setNewItem(value);
  };

  const handleDelete = (id) => {
    setItems(oldItems => oldItems.filter(item => item.id !== id));
  };

  const toggleComplete = (id) => {
    setItems(oldItems => 
      oldItems.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="app-container">
      <div className="app-header">
        <h1>My Todo List</h1>
        <div className="date-display">{currentDate}</div>
      </div>
      
      <Add 
        value={newItem}
        onChange={handleInputChange}
        onAdd={handleAdd}
      />
      
      {items.length === 0 ? (
        <div className="empty-state">
          <p>You have no tasks yet. Add one above!</p>
        </div>
      ) : (
        <ul className="todos-list">
          {items.map((item) => (
            <li 
              key={item.id} 
              className="todo-item" 
              data-testid="todo-item"
            >
              <span className={`todo-item-text ${item.completed ? 'completed' : ''}`}>
                {item.text}
              </span>
              <div className="todo-actions">
                <button 
                  className="todo-button complete-btn" 
                  onClick={() => toggleComplete(item.id)}
                  title={item.completed ? "Mark as incomplete" : "Mark as complete"}
                >
                  {item.completed ? '↩️' : '✅'}
                </button>
                <button 
                  className="todo-button delete-btn" 
                  onClick={() => handleDelete(item.id)}
                  title="Delete"
                >
                  🗑️
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;