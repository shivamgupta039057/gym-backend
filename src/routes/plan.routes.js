const express = require("express");

const {
  createPlan,
  getPlans,
  deletePlan,
  editPlan
} = require("../controllers/plan.controllers.js");

const Router = express.Router();

Router.post("/create", authMiddleware , createPlan);

Router.get("/get", authMiddleware , getPlans);

Router.post("/delete", authMiddleware ,deletePlan);

Router.post(
  "/edit", authMiddleware ,
  editPlan
);


module.exports = Router;