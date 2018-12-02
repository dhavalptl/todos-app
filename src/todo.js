import React from 'react';
export default function todo({ todo, deleteTodo, completedTodo }) {
    return (
        <div className="todoitem">
            <div className={`todotext ${todo.isCompleted ? 'completed' : ''}`} onClick={() => completedTodo(todo.id)} > {todo.text}</div>
            <div className="todoremove" onClick={() => deleteTodo(todo.id)}>&times;</div>
        </div >
    );
}