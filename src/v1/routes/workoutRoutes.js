const express = require("express");
const workoutController = require("../../controllers/workoutController");
const recordController = require("../../controllers/recordController");
const apiCachec = require("apicache");

const router = express.Router();
const cache = apiCachec.middleware;

//for now I have cache the getAllWorkout api we can do it for all the apis on index.js file
router.get("/", cache("2 minutes"), workoutController.getAllWorkouts);

router.get("/:workoutId", workoutController.getOneWorkout);
router.get("/:workoutId/records", recordController.getRecordsForWorkout);

router.post("/", workoutController.createNewWorkout);

router.put("/:workoutId", workoutController.updateOneWorkout);

router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;
