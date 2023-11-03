import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TaskSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Task = mongoose.model("Task", TaskSchema);

export default Task;
