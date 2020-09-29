const express = require('express');
const ParentTask = require('../model/parentTask');
const TodoList = require('../model/todoList');
const dateformat = require('dateformat');

const router = new express.Router();

//Create a new Parent task
router.post('/task', async (req, res) => {
    const task = new ParentTask(req.body);

    try {
        await task.save();
        res.status(201).send(task)
    } catch (error) {
        res.status(400).send(error.message)
    }
})


//Fetch all the parentTasks
router.get('/task', async (req, res) => {
    try {
        const tasks = await ParentTask.find({});

        const localtask = [...tasks]
        const updatedBody = localtask.map(value => {
            const newValue = { ...value };
            newValue._doc.updatedAt = dateformat(newValue._doc.updatedAt, 'ddd, mmm d, h:MM');
            return newValue._doc;
        })
        res.send(updatedBody)
    } catch (error) {
        res.status(500).send()
    }

})

//Edit the parent Task
router.patch('/task/:id', async (req, res) => {
    try {

        const task = await ParentTask.findById(req.params.id);
        const updates = Object.keys(req.body);

        updates.forEach(update => task[update] = req.body[update])
        await task.save();
        res.send(task);

    } catch (error) {
        res.status(400).send(error.message)
    }

})

//Delete the parent Task and its child todos
router.delete('/task/:id', async (req, res) => {
    try {
        //deleting all the todos of the parent task
        const todo = await TodoList.findOneAndDelete({ parentTask: req.params.id });
        await todo.remove();

        //deleting the parent task
        const task = await ParentTask.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).send('task not found!')
        }

        await task.remove();

        res.send(task)
    } catch (error) {
        res.status(400).send(error)
    }
})

//mark parent task as completed 
router.patch('/task/completed/:id', async (req, res) => {
    try {
        const task = await ParentTask.findById(req.params.id);
        const todos = await TodoList.find({ parentTask: req.params.id });
        todos.forEach(element => {
            element.completed = true;
            element.save();
        });
        task.completed = true;
        await task.save();
        res.send(task);
    } catch (error) {
        res.status(400).send(error.message)
    }

})


//mark parent task as uncheck 
router.patch('/task/uncheck/:id', async (req, res) => {
    try {
        const task = await ParentTask.findById(req.params.id);
        const todos = await TodoList.find({ parentTask: req.params.id });
        todos.forEach(element => {
            element.completed = false;
            element.save();
        });
        task.completed = false;
        await task.save();
        res.send(task);
    } catch (error) {
        res.status(400).send(error.message)
    }

})


module.exports = router

