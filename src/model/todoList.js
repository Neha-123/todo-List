const mongoose = require('mongoose');

const todoListSchema = new mongoose.Schema({
    todo: {
        type:String,
        required: [true, 'Enter a todo']
    },
    completed: {
        type: Boolean,
        default: false
    },
    deadline: {
        type: Date,
        required: [true, 'Enter the deadline']
    },
    parentTask : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'ParentTask'
    }
}, {
    timestamps: true
})

const TodoList = mongoose.model('TodoList', todoListSchema)

module.exports = TodoList