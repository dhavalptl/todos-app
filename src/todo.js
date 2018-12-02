import React from 'react';
export default function todo({ todo, deleteTodo, completedTodo }) {
    const deleteHandle = (event) => {
        event.stopPropagation()
        deleteTodo(todo.id);
    }
    return (
        <div className="todoitem" onClick={() => completedTodo(todo.id)}>
            <div className={`status ${todo.isCompleted ? 'completed' : ''}`}></div>
            <div className="todo">
                <div className="todotitle">{todo.title}</div>
                <div className="tododetails">{todo.details}</div>
            </div>
            <div className="todoremove" onClick={deleteHandle}>&times;</div>
        </div >
    );
}