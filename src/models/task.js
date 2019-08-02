const mongoose = require('mongoose')
const validator = require('validator')

const taskSchema = new mongoose.Schema({
        description: {
            type: String,
            required: true,
            trim: true
        },
        completed: {
            type: Boolean,
            default: false
        },
        owner:{ // to store the id of user who created the task
            type:mongoose.Schema.Types.ObjectId, // the data stored is objectId
            require: true,
            ref:'User'  // to refer to user model to creat the relation ship
        }
}, {
    timestamps:true
})
const Task = mongoose.model('Task', taskSchema)

module.exports = Task