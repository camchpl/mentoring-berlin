const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  // res.render('index');
  res.status(200).json({ message: "Default Api" });
});

module.exports = router;
