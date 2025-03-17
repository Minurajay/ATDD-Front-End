import React from 'react'; 
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import App from '../App';

// Clear any mocks, timers, or DOM elements after each test
afterEach(() => {
  cleanup();
  // Clear localStorage to ensure tests don't interfere with each other
  localStorage.clear();
});

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
    const todoInput = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-todo-button');

    // Ensure the input is empty
    expect(todoInput).toHaveValue('');
    
    // Try to add an empty todo
    await act(async () => {
      await userEvent.click(addButton);
    });

    // Verify no todo items were added
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
  
  test('allows marking a todo as complete', async () => {
    render(<App />);
    const todoInput = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-todo-button');
    
    await act(async () => {
      await userEvent.type(todoInput, 'Complete this task');
      await userEvent.click(addButton);
    });
    
    const completeButton = screen.getByTitle('Mark as complete');
    
    await act(async () => {
      await userEvent.click(completeButton);
    });
    
    const completedTask = screen.getByText('Complete this task');
    expect(completedTask).toHaveClass('completed');
  });
  
  test('allows deleting a todo item', async () => {
    render(<App />);
    const todoInput = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-todo-button');
    
    await act(async () => {
      await userEvent.type(todoInput, 'Delete this task');
      await userEvent.click(addButton);
    });
    
    expect(screen.getByText('Delete this task')).toBeInTheDocument();
    
    const deleteButton = screen.getByTitle('Delete');
    
    await act(async () => {
      await userEvent.click(deleteButton);
    });
    
    expect(screen.queryByText('Delete this task')).not.toBeInTheDocument();
  });
});