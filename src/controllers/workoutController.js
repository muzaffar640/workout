const workoutService = require("../services/workoutServices");

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send("Get all workouts");
};

const getOneWorkout = (req, res) => {
  const oneWorkout = workoutService.getOneWorkout();
  res.send("Get an existing workout");
};

const createOneWorkout = (req, res) => {
  const createWorkout = workoutService.createOneWorkout();
  res.send("Create one workout");
};

const updateOneWorkout = (req, res) => {
  const updateWorkout = workoutService.updateOneWorkout();
  res.send("Update an workout");
};

const deleteOneWorkout = (req, res) => {
  const deleteWorkout = workoutService.deleteOneWorkout();
  res.send("Delete one workouts");
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createOneWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
