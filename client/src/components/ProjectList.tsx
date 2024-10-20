import React from 'react';
import ProjectCard from './ProjectCard';

interface ProjectListProps {
    projects: Array<{ id: number; name: string; description: string }>;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, onEdit, onDelete }) => {
    return (
        <div className="project-list">
            {projects.map(project => (
                <ProjectCard key={project.id} {...project} onEdit={onEdit} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default ProjectList;