const express = require("express");

const {
  createPayment,
  getPayments,
  deletePayment,
  getPaymentById,
} = require("../controllers/payment.controllers");
const authMiddleware =
require("../middlewares/auth.middleware.js");

const Router = express.Router();

Router.post("/create", authMiddleware ,  createPayment);

Router.get("/get", authMiddleware , getPayments);

Router.post("/delete", authMiddleware ,deletePayment);

Router.get(
  "/:id",  authMiddleware , getPaymentById
);

module.exports = Router;