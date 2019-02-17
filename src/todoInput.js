import React, { useState, useRef, useEffect } from 'react';
export default function todoInput({ addTodo }) {
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [showAddTask, setShowAddTask] = useState(false);
    const inputRef = useRef();
    useEffect(() => {
        if (showAddTask) {
            inputRef.current.focus();
        }
    }, [showAddTask]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) {
            return;
        }
        addTodo({
            id: Date.now(),
            title,
            details,
            isCompleted: false
        });
        setTitle('');
        setDetails('');
        setShowAddTask(false);
    }
    return (
        <form onSubmit={handleSubmit} className="addform">
            {showAddTask && <div className="footer">
                <input type="text" ref={inputRef} placeholder="New Task" value={title} onChange={e => setTitle(e.target.value)} />
                <input type="text" placeholder="Details" style={{ fontSize: '.8em' }} value={details} onChange={e => setDetails(e.target.value)} />
                <input type="submit" className="formsubmitbtn" value={'+ ADD'} />
            </div>}
            {!showAddTask && <button className="addtodobtn" onClick={() => setShowAddTask(true)}>+</button>}
        </form>
    );
}