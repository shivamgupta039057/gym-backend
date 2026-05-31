const express = require("express");
const Router = express.Router();

// const {
//   register,
//   login,
//   getProfile,
// } = require("../controllers/auth.controllers.js");

const authMiddleware =
require("../middlewares/auth.middleware.js");
const { register , login , getProfile } = require("../controllers/auth.controllers.js");

Router.post("/register", register);

Router.post("/login", login);

Router.get(
  "/profile",
  authMiddleware,
  getProfile
);

module.exports = Router;