const express = require("express");
const authRoutes = express.Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");

// Signup
authRoutes.get("/signup", (req, res, next) => {
  res.status(200).json({ message: "Everything is ok...so far" });
});

module.exports = authRoutes;
