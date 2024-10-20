import React from 'react';

interface ProjectCardProps {
    id: number;
    name: string;
    description: string;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, name, description, onEdit, onDelete }) => {
    return (
        <div className="project-card">
            <h3>{name}</h3>
            <p>{description}</p>
            <button onClick={() => onEdit(id)}>Edit</button>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
};

export default ProjectCard;