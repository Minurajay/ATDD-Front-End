import React, { useState } from 'react';
import Add from './Add';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAdd = () => {
    // Trim the new item and prevent adding empty strings
    const trimmedItem = newItem.trim();
    if (trimmedItem) {
      setItems(oldItems => [...oldItems, trimmedItem]);
      setNewItem(''); // Clear input after adding
    }
  };

  const handleInputChange = (value) => {
    setNewItem(value);
  };

  return (
    <div>
      <Add 
        value={newItem}
        onChange={handleInputChange}
        onAdd={handleAdd}
      />
      <ul>
        {items.map((item, index) => (
          <li key={index} data-testid="todo-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;