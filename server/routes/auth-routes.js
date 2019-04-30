// routes/auth-routes.js
const express = require("express");
const authRoutes = express.Router();
// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

// User model
const User = require("../models/user");

// - Sign up - //
authRoutes.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

authRoutes.post("/register-signup", (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  if (!name || !password) {
    res.render("auth/signup", { message: "Indicate username and password" });
    return;
  }

  User.findOne({ name }, (err, foundUser) => {
    if (err) {
      res.status(500).json({ message: "full_name check went bad." });
      return;
    }

    if (foundUser) {
      res
        .status(400)
        .json({ message: "Your username taken. Choose another one." });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      name: name,
      password: hashPass,
      email: email
    });

    newUser.save(err => {
      if (err) {
        res.render("auth/signup", { message: "Something went wrong" });
      } else {
        res.redirect("/");
      }
    });
  }).catch(error => {
    next(error);
  });

  req.login(NewUser, err => {
    if (err) {
      res.status(500).json({ message: "Login after signup didn't work" });
      return;
    }

    res.status(200).json(aNewUser);
  });
});

// - Login - //

// - Log out - //
authRoutes.post("/logout", (req, res, next) => {
  // req.logout() is defined by passport
  req.logout();
  res.status(200).json({ message: "Log out success!" });
});

module.exports = authRoutes;
