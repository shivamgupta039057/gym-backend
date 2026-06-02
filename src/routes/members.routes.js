const express = require("express");

const {
  createMember,
  getMembers,
  deleteMember,
  getExpiredMembers,
  getExpiringMembers,
  renewMembership,
  getMemberPaymentHistory,
  changeMemberStatus,
  editMember,
  getAllMember
} = require("../controllers/members.controllers.js");
const upload = require("../middlewares/multer.middleware.js");
const authMiddleware =
require("../middlewares/auth.middleware.js");

const Router = express.Router();

// Router.post("/create", createMember);



Router.post(

  "/create",

  upload.fields([

    {
      name: "photo",
      maxCount: 1,
    },

    {
      name: "aadhaarFront",
      maxCount: 1,
    },

    {
      name: "aadhaarBack",
      maxCount: 1,
    },

  ]),
  authMiddleware,
  createMember

);

Router.get("/getallmembers", authMiddleware , getAllMember);

Router.get("/get", authMiddleware , getMembers);

Router.post("/delete", authMiddleware , deleteMember);

Router.post(
  "/change-status", authMiddleware ,
  changeMemberStatus
);


Router.post(
  "/renew-membership", authMiddleware ,
  renewMembership
);

Router.post(
  "/edit", authMiddleware ,
  editMember
);

Router.get(
  "/member-payment-history/:memberId", authMiddleware ,
  getMemberPaymentHistory
);

Router.get("/expired-members", authMiddleware , getExpiredMembers);

Router.get("/expiring-members", authMiddleware , getExpiringMembers);

module.exports = Router;