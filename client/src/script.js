// script.js

document.addEventListener('DOMContentLoaded', () => {
    const projectForm = document.getElementById('project-form');
    const taskForm = document.getElementById('task-form');
    
    // Sample data for demonstration
    const projects = [];
    const tasks = [];

    // Function to render projects
    function renderProjects() {
        const projectList = document.getElementById('project-list');
        projectList.innerHTML = ''; // Clear existing projects
        projects.forEach((project, index) => {
            const projectCard = `
                <div class='col-md-4'>
                    <div class='card'>
                        <div class='card-body'>
                            <h5>${project.name}</h5>
                            <p>${project.description}</p>
                            <!-- Add more project details here -->
                        </div>
                    </div>
                </div>`;
            projectList.innerHTML += projectCard;
        });
    }

    // Function to render tasks
    function renderTasks() {
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = ''; // Clear existing tasks
        tasks.forEach((task) => {
            const taskCard = `
                <div class='col-md-4'>
                    <div class='card'>
                        <div class='card-body'>
                            <h5>${task.title}</h5>
                            <p>${task.description}</p>
                            <!-- Add more task details here -->
                        </div>
                    </div>
                </div>`;
            taskList.innerHTML += taskCard;
        });
    }

    // Handle project form submission
    projectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newProject = {
            name: document.getElementById('projectName').value,
            description: document.getElementById('projectDescription').value,
        };
        projects.push(newProject);
        renderProjects();
        projectForm.reset();
    });

    // Handle task form submission
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTask = {
            title: document.getElementById('taskTitle').value,
            description: document.getElementById('taskDescription').value,
        };
        tasks.push(newTask);
        renderTasks();
        taskForm.reset();
    });
});