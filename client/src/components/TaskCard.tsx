import React from 'react';

interface TaskCardProps {
    id: number;
    title: string;
    description: string;
    status: string;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ id, title, description, status, onEdit, onDelete }) => {
    return (
        <div className="task-card">
            <h4>{title}</h4>
            <p>{description}</p>
            <p>Status: {status}</p>
            <button onClick={() => onEdit(id)}>Edit</button>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
};

export default TaskCard;