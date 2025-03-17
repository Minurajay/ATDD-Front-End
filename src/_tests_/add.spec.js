import React, { act } from 'react'; // Import act from react
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
    
    await act(async () => {
      await userEvent.type(todoInput, 'Buy groceries');
      await userEvent.click(addButton);
    });

    const todoItem = screen.getByText('Buy groceries');
    expect(todoItem).toBeInTheDocument();
  });

  test('prevents adding empty todo items', async () => {
    render(<App />);
    const addButton = screen.getByTestId('add-todo-button');

    await act(async () => {
      await userEvent.click(addButton);
    });

    const todoItems = screen.queryAllByTestId('todo-item');
    expect(todoItems).toHaveLength(0);
  });

  test('clears input after adding a todo', async () => {
    render(<App />);
    const todoInput = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-todo-button');

    await act(async () => {
      await userEvent.type(todoInput, 'Learn React');
      await userEvent.click(addButton);
    });

    expect(todoInput).toHaveValue('');
  });
});
