require("dotenv").config();

const express = require("express");
const app = express();
const session = require("express-session");
const passport = require("passport");

const PORT = process.env.PORT || 3000;

//routes

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server is running at http://localhost:${PORT}`);
});
