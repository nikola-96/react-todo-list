import React from 'react'

function Todo({ todo, toggleComplited, removeTodo }) {
    function handleCheckbox() {
        toggleComplited(todo.id)
    }
    function handleDeleteTodo() {
        removeTodo(todo.id)
    }
    return (
        <div style={{ display: 'flex' }}>
            <input type="checkbox" onClick={handleCheckbox}></input>
            <li style={
                {
                    color: 'white',
                    textDecoration: todo.complited ? 'line-through' : null
                }
            } >{todo.task}</li>
            <button onClick={handleDeleteTodo}>X</button>
        </div>
    )
}

export default Todo
