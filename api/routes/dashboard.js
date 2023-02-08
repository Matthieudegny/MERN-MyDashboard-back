const express = require("express");
const cors = require("cors");
const {
  createOrder,
  getOneOrder,
  getOrders,
  deleteOrder,
  updateOrder,
} = require("../controllers/dashboardController");

//require for all routes
const requireAuth = require("../middleware/requireauth");

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://my-dash-board-md.vercel.app/",
    "https://my-dashboard-1h54ooj65-matthieudegny.vercel.app",
  ],
};

const router = express.Router();

// router.use(requireAuth);

router.get("/", cors(corsOptions), getOrders);

router.get("/:id", requireAuth, getOneOrder);

router.post("/", requireAuth, createOrder);

router.delete("/:id", requireAuth, deleteOrder);

router.patch("/:id", requireAuth, updateOrder);

module.exports = router;
