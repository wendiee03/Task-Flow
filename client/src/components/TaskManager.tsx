// src/components/TaskManager.tsx

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask } from '/home/mukami/task-management-system/client/src/features/taskSlice';

const TaskManager = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    const dispatch = useDispatch();
    
    const tasks = useSelector((state: { tasks: { tasks: any[] } }) => state.tasks.tasks);

    const handleAddTask = () => {
        const newTask = {
            id: Date.now(), // Simple ID generation
            title,
            description,
            status: 'pending',
        };
        dispatch(addTask(newTask));
        setTitle('');
        setDescription('');
    };

    const handleRemoveTask = (id: number) => {
        dispatch(removeTask(id));
    };

    return (
        <div>
            <h2>Task Manager</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
            />
            <button onClick={handleAddTask}>Add Task</button>

            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <strong>{task.title}</strong>: {task.description}
                        <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskManager;