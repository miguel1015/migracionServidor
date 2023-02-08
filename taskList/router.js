import express  from "express";
import { taskModel } from "./model";

export const taskRouter = express.Router()

taskRouter.post("/tasklist", async (req, res) => {
    const createTask = await taskModel.create(req.body)
    res.status(201).send(createTask)
})