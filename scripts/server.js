const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

let tasks = []; // This will store your tasks

app.use(bodyParser.json());

// Serve your index.html
app.use(express.static('/Users/iamswis/Documents/SDGKU/Full Stack DEV'));

// Get all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Add a new task
app.post('/tasks', (req, res) => {
    const task = req.body;
    tasks.push(task); // Add the task to the array
    res.status(201).send(task);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
