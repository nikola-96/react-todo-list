import React from 'react'
import Todo from './Todo'

function TodoList({ todos, toggleComplited, removeTodo }) {
    return (
        <ul>
            {
                todos.map(todo => (<Todo key={todo.id} todo={todo}
                    toggleComplited={toggleComplited}
                    removeTodo={removeTodo} />))
            }
        </ul>
    )
}

export default TodoList
