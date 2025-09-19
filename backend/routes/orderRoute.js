import express from "express";
import {
  placeOrder,
  placeOrderStripe,
  allOrders,
  userOrders,
  UpdateStatus,
  verifyStripe,
} from "../controllers/orderController.js";

import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

//Admin methods
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, UpdateStatus);

//Payment Methods
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);

//User Method

orderRouter.post("/userorders", authUser, userOrders);

//Verify Payment

orderRouter.post("/verifyStripe", authUser, verifyStripe);

export default orderRouter;
