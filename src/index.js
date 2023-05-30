const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8001;

app.get("/", (req, res) => {
  res.send("Backend is running... ");
});

app.listen(PORT, () => {
  console.log(`API is running on port ${PORT}`);
});
