import Task from "../models/Task.js";

import { validateObjectId } from "../utils/validation.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    const simplifiedTasks = tasks.map((task) => ({
      id: task._id,
      description: task.description,
      status: task.status,
          }));

    res.status(200).json({ tasks: simplifiedTasks, status: true, msg: "Tasks found successfully." });
  }
  catch (err) {
    console.error(err);
    return res.status(500).json({ status: false, msg: "Internal Server Error" });
  }
}

export const getTask = async (req, res) => {
  try {
    if (!validateObjectId(req.params.taskId)) {
      return res.status(400).json({ status: false, msg: "Task id not valid" });
    }

    const task = await Task.findOne({ _id: req.params.taskId });
    if (!task) {
      return res.status(400).json({ status: false, msg: "No task found.." });
    }
    res.status(200).json({ task, status: true, msg: "Task found successfully." });
  }
  catch (err) {
    console.error(err);
    return res.status(500).json({ status: false, msg: "Internal Server Error" });
  }
}

export const postTask = async (req, res) => {
  try {
    const { description, status = false } = req.body;
    if (!description) {
      return res.status(400).json({ status: false, msg: "Description of task not found" });
    }
    const task = await Task.create({ description, status });
    res.status(200).json({ task, status: true, msg: "Task created successfully.." });
  }
  catch (err) {
    console.error(err);
    return res.status(500).json({ status: false, msg: "Internal Server Error" + err.message });
  }
}

export const putTask = async (req, res) => {
  try {
    const { description, status } = req.body;
    const validUpdates = {}; // An object to store valid updates

    if (description !== undefined) {
      validUpdates.description = description;
    }

    if (status !== undefined) {
      validUpdates.status = status;
    }

    // Check if both description and status are undefined
    if (Object.keys(validUpdates).length === 0) {
      return res.status(400).json({ status: false, msg: "No valid updates provided" });
    }

    if (!validateObjectId(req.params.taskId)) {
      return res.status(400).json({ status: false, msg: "Task id not valid" });
    }

    let task = await Task.findById(req.params.taskId);
    if (!task) {
      return res.status(400).json({ status: false, msg: "Task with given id not found" });
    }

    // Update the task with the valid updates
    task = await Task.findByIdAndUpdate(req.params.taskId, validUpdates, { new: true });
    res.status(200).json({ task, status: true, msg: "Task updated successfully.." });
  }
  catch (err) {
    console.error(err);
    return res.status(500).json({ status: false, msg: "Internal Server Error" });
  }
};



export const deleteTask = async (req, res) => {
  try {
    if (!validateObjectId(req.params.taskId)) {
      return res.status(400).json({ status: false, msg: "Task id not valid" });
    }

    let task = await Task.findById(req.params.taskId);
    if (!task) {
      return res.status(400).json({ status: false, msg: "Task with given id not found" });
    }

    // if (task.user != userId) {
    //   return res.status(403).json({ status: false, msg: "You can't delete task of another user" });
    // }

    await Task.findByIdAndDelete(req.params.taskId);
    res.status(200).json({ status: true, msg: "Task deleted successfully.." });
  }
  catch (err) {
    console.error(err);
    return res.status(500).json({ status: false, msg: "Internal Server Error" });
  }
}