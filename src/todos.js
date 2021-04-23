import React from 'react'
import './Todo.css'
const Todos = ({todos, deleteTodo}) =>{
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className='collection-item' key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        // <p className='center'>You have no todo's left, YAY!! </p>
        <h1 className='center red-text'>DONE!!</h1>
    )
    return (
        <div className='todos collection'>
            {todoList}
        </div>
    )
}

export default Todos
