const mongoose = require("mongoose");

const workoutSchema = mongoose.Schema(
  {
    name: String,
    mode: String,
    equipment: [String],
    exercises: [String],
    trainerTips: [String],
  },
  { timestamps: true }
);

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = { Workout };
