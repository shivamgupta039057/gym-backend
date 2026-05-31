const express = require("express");

const {
  createFollowup,
  getFollowups,
  deleteFollowup,
  editFollowup
} = require("../controllers/followup.controllers");
const authMiddleware =
require("../middlewares/auth.middleware.js");

const Router = express.Router();

Router.post("/create", authMiddleware ,  createFollowup);

Router.get("/get", authMiddleware ,  getFollowups);

Router.post("/delete",  authMiddleware , deleteFollowup);

Router.post(
  "/edit", authMiddleware ,
  editFollowup
);

module.exports = Router;