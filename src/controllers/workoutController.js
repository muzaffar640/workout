const getAllWorkouts = (req, res) => {
  res.send("Get all workouts");
};

const getOneWorkout = (req, res) => {
  res.send("Get an existing workout");
};

const createOneWorkout = (req, res) => {
  res.send("Create one workout");
};

const updateOneWorkout = (req, res) => {
  res.send("Update an workout");
};

const deleteOneWorkout = (req, res) => {
  res.send("Delete one workouts");
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createOneWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
