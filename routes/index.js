const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
  //res.send("Hello, world!");
});

module.exports = router;
