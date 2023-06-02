const recordService = require("../services/recordServices");

const getRecordsForWorkout = (req, res) => {
  try {
    const {
      params: { workoutId },
    } = req;

    if (!workoutId) {
      res.status(400).send({
        status: "FAILED",
        data: { error: "Parameter :workoutId can't be empty" },
      });
    }
    const records = recordService.getRecordForWorkout(workoutId);
    console.log("records", records);

    res.status(200).send({ status: "OK", data: records });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = { getRecordsForWorkout };
