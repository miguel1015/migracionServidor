const  mongoose  = require("mongoose");

const taskSchema = mongoose.Schema({
    number:{
        type:Number,
        required: true
    },
    name:{
        type:String,
        required:true
    },state:{
        type:Boolean,
        required:true
    }
})

module.exports = mongoose.model("task", taskSchema)