import React, { useState, useEffect, useRef } from 'react';
import Todo from './todo';
import TodoInput from './todoInput';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

export default function App() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem('todos')) || []);
        return () => localStorage.setItem('todos', JSON.stringify(todos));
    }, []);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    }
    const deleteTodo = (id) => {
        const filteredTodos = todos.filter(todo => todo.id !== id);
        setTodos(filteredTodos);
    }
    const completedTodo = (id) => {
        const newTodos = [...todos];
        const toBoCompleteTodo = newTodos.find(todo => todo.id === id);
        toBoCompleteTodo.isCompleted = !toBoCompleteTodo.isCompleted;
        setTodos(newTodos);
    }

    const clearAllTodos = () => {
        setTodos(todos.splice());
    }

    return (
        <React.Fragment>
            <div className="header">
                <div className="menuitem title">Todos</div>
                <div className="menuitem" style={{ textAlign: 'right' }} onClick={clearAllTodos}>Clear All</div>
            </div>

            <div className="content">
                <TransitionGroup>
                    {todos.map(todo => (
                        <CSSTransition
                            key={todo.id}
                            classNames="fade"
                            timeout={{ enter: 300, exit: 300 }}
                        >
                            <Todo todo={todo} deleteTodo={deleteTodo} completedTodo={completedTodo} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
                {todos.length === 0 && <div className="emptyText">No todo items for today !! :)</div>}
            </div>
            <TodoInput addTodo={addTodo} />
        </React.Fragment>
    );
}