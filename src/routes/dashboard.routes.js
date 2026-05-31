const express = require("express");

const {
  getDashboardStats,
} = require("../controllers/dashboard.controllers.js");
const authMiddleware =
require("../middlewares/auth.middleware.js");

const Router = express.Router();

Router.get(
  "/stats", authMiddleware ,
  getDashboardStats
);

module.exports = Router;