const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://tyagiaviral:easypass123@cluster0.odel0li.mongodb.net/todos')

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}

