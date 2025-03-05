import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../App';

describe('Todo App Functionality', () => {
  test('renders the todo input', () => {
    render(<App />);
    const todoInput = screen.getByTestId('todo-input');
    expect(todoInput).toBeInTheDocument();
  });

  test('allows adding a new todo item', async () => {
    render(<App />);
    const todoInput = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-todo-button');
    
    // Type a todo and add it
    await userEvent.type(todoInput, 'Buy groceries');
    await userEvent.click(addButton);

    // Check if the todo item appears in the document
    const todoItem = screen.getByText('Buy groceries');
    expect(todoItem).toBeInTheDocument();
  });

  test('prevents adding empty todo items', async () => {
    render(<App />);
    const addButton = screen.getByTestId('add-todo-button');

    // Try to add an empty todo
    await userEvent.click(addButton);

    // Ensure no items are added
    const todoItems = screen.queryAllByTestId('todo-item');
    expect(todoItems).toHaveLength(0);
  });

  test('clears input after adding a todo', async () => {
    render(<App />);
    const todoInput = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-todo-button');

    // Add a todo item
    await userEvent.type(todoInput, 'Learn React');
    await userEvent.click(addButton);

    // Check if input is cleared
    expect(todoInput).toHaveValue('');
  });
});