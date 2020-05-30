import React from 'react'

function Todo({ todo }) {
    return (
        <div style={{ display: 'flex' }}>
            <input type="checkbox"></input>
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
