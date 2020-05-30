import React from 'react'

function Todo({ todo, toggleComplited }) {
    function handleCheckbox() {
        toggleComplited(todo.id)
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
            <button>X</button>
        </div>
    )
}

export default Todo
