const express = require('express');
const TodoList = require('../model/todoList');
const ParentTask = require('../model/parentTask');
const dateformat = require('dateformat')
const router = express.Router();

//Add new Todo
router.post('/todos/:id', async (req, res) => {

	const todos = new TodoList({
		...req.body,
		parentTask: req.params.id
	});

	try {
		await todos.save();
		res.status(201).send(todos)
	} catch (error) {
		res.status(400).send(error.message)
	}
})

//fetch all todos for a specific parent task
router.get('/todos/:id', async (req, res) => {
	try {
		const todos = await TodoList.find({ parentTask: req.params.id }) //getting all todos from db

		res.send(todos)
	} catch (error) {
		res.status(500).send()
	}

})

//Edit a todo
router.patch('/todos/:id', async (req, res) => {
	try {

		const todo = await TodoList.findById(req.params.id);
		const updates = Object.keys(req.body);

		updates.forEach(update => todo[update] = req.body[update])
		await todo.save();
		res.send(todo);

	} catch (error) {
		res.status(400).send(error.message)
	}

})

//Delete the Todo
router.delete('/todos/:id', async (req, res) => {
	try {
		const todo = await TodoList.findByIdAndDelete(req.params.id);
		if (!todo) {
			return res.status(404).send('todo not found!')
		}
		todo.remove()
		res.send(todo)
	} catch (error) {
		res.status(400).send(error)
	}
})

//mark Todo as completed/not completed
router.patch('/todos/completed/:id', async (req, res) => {
	try {

		const todos = await TodoList.findById(req.params.id);
		todos.completed = req.body.completed
		await todos.save();

		const allTodos = await TodoList.find({ parentTask: todos.parentTask })
		const parentTask = await ParentTask.findById(todos.parentTask);
		console.log('allTodos');
		if (!allTodos) {
			return parentTask.completed = false;
		}

		const isAllCompletedTodos = allTodos.find(todo => {
			return todo.completed === false
		})



		if (!isAllCompletedTodos) {

			parentTask.completed = true;

		} else {
			parentTask.completed = false;
		}

		await parentTask.save();
		res.send(todos);


	} catch (error) {
		res.status(400).send(error.message)
	}

})

module.exports = router