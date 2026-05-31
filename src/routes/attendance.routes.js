const express = require("express");

const {
  createAttendance,
  getAttendance,
  deleteAttendance,
  editAttendance
} = require("../controllers/attendance.controllers");
const authMiddleware =
require("../middlewares/auth.middleware.js");

const Router = express.Router();

Router.post("/create",  authMiddleware , createAttendance);

Router.get("/get", authMiddleware , getAttendance);

Router.post("/delete", authMiddleware , deleteAttendance);

Router.post(
  "/edit",
  editAttendance
);

module.exports = Router;