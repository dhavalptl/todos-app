import React, { useState, useRef, useEffect } from 'react';
export default function todoInput({ addTodo }) {
    const [value, setValue] = useState('');
    const inputRef = useRef();
    useEffect(() => {
        if (!value) {
            inputRef.current.focus();
        }
    }, [value]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) {
            return;
        }
        addTodo({
            id: Date.now(),
            text: value,
            isCompleted: false
        });
        setValue('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="footer">
                <input type="text" ref={inputRef} placeholder="Add Todo..." value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
        </form>
    );
}