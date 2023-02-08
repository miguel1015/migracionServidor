const express = require("express")
const taskShema = require("./schema")
const router = express.Router()

//create task
router.post("/task", (req,res) => {
    const task = taskShema(req.body)
    task
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

//get all tasks
router.get("/task", (req,res) => {
    taskShema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

//get all task
router.get("/task/:id", (req,res) => {
    const { id } = req.params
    taskShema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

//update task
router.put("/task/:id", (req,res) => {
    const { id } = req.params
    const { number, name, state } = req.body
    taskShema
        .updateOne({ _id: id }, { $set: { number, name, state } })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

//Delete task
router.delete("/task/:id", (req,res) => {
    const { id } = req.params
    taskShema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

module.exports = router