import React from 'react';
import ProjectList from './components/ProjectList';
import TaskList from './components/TaskList';
import Form from './components/Form';

const App = () => {
  // Sample data for demonstration purposes
  const projects = [
      { id: 1, name: 'Project A', description: 'Description of Project A' },
      { id: 2, name: 'Project B', description: 'Description of Project B' },
  ];

  const tasks = [
      { id: 1, title: 'Task A1', description: 'Task A1 Description', status: 'pending' },
      { id: 2, title: 'Task A2', description: 'Task A2 Description', status: 'completed' },
  ];

  const handleProjectEdit = (id:number) => {
      console.log(`Editing project with ID ${id}`);
      // Implement edit functionality here
  };

  const handleProjectDelete = (id:number) => {
      console.log(`Deleting project with ID ${id}`);
      // Implement delete functionality here
  };

  const handleTaskEdit = (id:number) => {
      console.log(`Editing task with ID ${id}`);
      // Implement edit functionality here
  };

  const handleTaskDelete = (id:number) => {
      console.log(`Deleting task with ID ${id}`);
      // Implement delete functionality here
  };

  const handleFormSubmit = (data:{ title?: string; description?: string }) => {
      console.log('Form submitted with data:', data);
      // Implement form submission logic here
  };

  return (
      <div className="App">
          <h1>Task Management System</h1>
          <h2>Projects</h2>
          <ProjectList projects={projects} onEdit={handleProjectEdit} onDelete={handleProjectDelete} />
          <h2>Tasks</h2>
          <TaskList tasks={tasks} onEdit={handleTaskEdit} onDelete={handleTaskDelete} />
          <h2>Create New Item</h2>
          <Form initialData={{}} onSubmit={handleFormSubmit} />
      </div>
  );
};

export default App;