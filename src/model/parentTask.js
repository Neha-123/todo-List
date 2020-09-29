const mongoose = require('mongoose');

const parentTaskSchema = new mongoose.Schema({
    taskName : {
        type: String,
        required: [true, 'Please enter Task name'],
        trim: true
    },
    completed : {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

parentTaskSchema.virtual('todolist', {
    ref: 'TodoList',
    localField: '_id',
    foreignField: 'parentTask'
})

const ParentTask = mongoose.model('ParentTask', parentTaskSchema)

module.exports = ParentTask