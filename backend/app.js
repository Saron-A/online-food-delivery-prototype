const bcrypt = require("bcryptjs");

require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
// Step 1: Initialize passport
passport.use(
  session({ secret: "cats", resave: false, saveUninitialized: false })
);
passport.initialize(); // not mandatory
passport.session();

const PORT = process.env.PORT || 3000;

// define ejs -view engine and where to find the views
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

// define access path for static files
const accessPath = path.join(__dirname, "./public");
app.use(express.static(accessPath));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //parse form data

//Step 2: define strategy
passport.use(
  new localStrategy(async (username, password, done) => {
    try {
      //find user from db (check and authenticate)
    } catch (err) {}
  })
);

//Step 3: Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  try {
    // return the user from db using the id
  } catch (err) {}
});
//routes

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server is running at http://localhost:${PORT}`);
});
