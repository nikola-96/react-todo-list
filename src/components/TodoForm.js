import React, { useState } from 'react'
import uuid from 'react-uuid'

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: null,
        task: "",
        completed: false
    })
    function handleTaskInputChange(event) {
        setTodo({ ...todo, task: event.target.value })
    }
    function handleSubmit(event) {
        event.preventDefault();
        addTodo({ ...todo, id: uuid() })
        setTodo({ ...todo, task: "" }) //praznimo input polje
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={todo.task} onChange={handleTaskInputChange}></input>
                <button type="submit">Submt</button>
            </form>
        </div >
    )
}

export default TodoForm
