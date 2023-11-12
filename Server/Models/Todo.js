const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    task: Object
})

const TodoModel = mongoose.model("todos", TodoSchema)
module.exports = TodoModel