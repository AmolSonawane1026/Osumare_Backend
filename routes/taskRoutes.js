const express = require('express');
const router = express.Router();
const tasks = require('../data/tasks');


router.get('/', (req, res) => {
    res.json(tasks);
});


router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
});


router.post('/', (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }

    const newTask = {
        id: tasks.length + 1,
        title,
        description
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});


router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id == id); 

    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }

    const { title, description } = req.body;

    task.title = title || task.title;
    task.description = description || task.description;

    res.json(task);
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex(t => t.id === id);

    if (index == -1) { 
        return res.status(404).json({ error: 'Task not found' });
    }

    tasks.splice(index, 1);
    res.json({ message: 'Task deleted successfully' });
});

module.exports = router;
