const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.send(`<h3> Hey there from ${req.baseUrl}</h3>`);
});

module.exports = router;
