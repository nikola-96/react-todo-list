import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const LOCAL_STORAGE_KEY = "react-todo-lists-todos";


function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (setTodos) {
      setTodos(storageTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function addTodo(todo) {
    setTodos([todo, ...todos])
  }
  function toggleComplited(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complited: !todo.complited
          };
        }
        return todo;
      })
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleComplited={toggleComplited} />
      </header>
    </div>
  );
}

export default App;
