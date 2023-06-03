const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8001;

app.use(bodyParser.json());
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is running on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
});
