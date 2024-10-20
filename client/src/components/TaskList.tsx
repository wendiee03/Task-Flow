import React from 'react';
import TaskCard from './TaskCard';

interface TaskListProps {
    tasks: Array<{ id: number; title: string; description: string; status: string }>;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onEdit, onDelete }) => {
    return (
        <div className="task-list">
            {tasks.map(task => (
                <TaskCard key={task.id} {...task} onEdit={onEdit} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default TaskList;