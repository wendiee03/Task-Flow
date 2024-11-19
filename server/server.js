const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/build')));

// PostgreSQL connection setup
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Test database connection
pool.connect((err) => {
    if (err) {
        console.error('Database connection error', err.stack);
    } else {
        console.log('Connected to the database');
    }
});

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to TaskFlow');
});

// Projects Routes

// Get all projects
app.get('/projects', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM projects');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// Create a new project
app.post('/projects', async (req, res) => {
    const { name, description } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO projects (name, description) VALUES ($1, $2) RETURNING *',
            [name, description]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// Get a project by ID
app.get('/projects/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM projects WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).send('Project not found');
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// Update a project
app.put('/projects/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
        const result = await pool.query(
            'UPDATE projects SET name = $1, description = $2 WHERE id = $3 RETURNING *',
            [name, description, id]
        );
        if (result.rowCount === 0) {
            return res.status(404).send('Project not found');
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// Delete a project
app.delete('/projects/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM projects WHERE id = $1', [id]);
        if (result.rowCount === 0) {
            return res.status(404).send('Project not found');
        }
        res.sendStatus(204);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// Tasks Routes

// Get all tasks
app.get('/tasks', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM tasks');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// Create a new task under a specific project
app.post('/tasks', async (req, res) => {
    const { title, description, project_id } = req.body; // Include project_id in request body
    try {
        const result = await pool.query(
            'INSERT INTO tasks (title, description, project_id) VALUES ($1, $2, $3) RETURNING *',
            [title, description, project_id]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// Get a task by ID
app.get('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).send('Task not found');
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// Update a task
app.put('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, project_id } = req.body; // Include project_id if needed
    try {
        const result = await pool.query(
            'UPDATE tasks SET title = $1, description = $2, project_id = $3 WHERE id = $4 RETURNING *',
            [title, description, project_id, id]
        );
        if (result.rowCount === 0) {
            return res.status(404).send('Task not found');
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// Delete a task
app.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
        if (result.rowCount === 0) {
            return res.status(404).send('Task not found');
        }
        res.sendStatus(204);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// The "catchall" handler: for any request that doesn't match one above,
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});