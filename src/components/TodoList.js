import React from 'react'
import Todo from './Todo'

function TodoList({ todos, toggleComplited }) {
    console.log(todos)
    return (
        <ul>
            {
                todos.map(todo => (<Todo key={todo.id} todo={todo} toggleComplited={toggleComplited} />))
            }
        </ul>
    )
}

export default TodoList
