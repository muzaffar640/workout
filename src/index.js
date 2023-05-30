const express = require("express");
const dotenv = require("dotenv");
const v1Router = require("./v1/routes");
const app = express();
dotenv.config();
const PORT = process.env.PORT || 8001;

app.use("/api/v1", v1Router);

app.listen(PORT, () => {
  console.log(`API is running on port ${PORT}`);
});
