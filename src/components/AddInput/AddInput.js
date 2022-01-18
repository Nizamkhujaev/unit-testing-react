import React, { useState } from 'react'
import "./AddInput.css"
import { v4 } from "uuid"
// import TodoList from '../TodoList/TodoList'

function AddInput({
    setTodos, todos
}) {

    const [todo, setTodo] = useState("")

    const addTodo = (e) => {
        e.preventDefault();
        let updatedTodos = [
            ...todos,
            {
                id: v4(),
                task: todo,
                completed: false
            }
        ]
        setTodos(updatedTodos);
        setTodo("")
    }

    return (
        <div className="">
            <form className='input-container' onSubmit={addTodo}>
                <input
                    className="input"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder="Add a new task here..."
                />
                <button
                    className="add-btn"
                >
                    Add
                </button>
            </form>
        </div>
    )
}

export default AddInput
