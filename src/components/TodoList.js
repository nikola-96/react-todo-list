import React from 'react'
import Todo from './Todo'

function TodoList({ todos }) {
    console.log(todos)
    return (
        <ul>
            {
                todos.map(todo => (<Todo key={todo.id} todo={todo} />))
            }
        </ul>
    )
}

export default TodoList
