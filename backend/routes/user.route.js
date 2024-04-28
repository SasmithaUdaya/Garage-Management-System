import express from "express";
import {
  deleteCustomer,
  deleteUser,
  test,
  updateCustomer,
  updateUser,
  getUserListings,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.post("/update/:id", verifyToken, updateCustomer);
router.delete("/delete/:id", verifyToken, deleteCustomer);
router.post("/updatestaff/:id", verifyToken, updateUser);
router.delete("/deletestaff/:id", verifyToken, deleteUser);
router.get("/listings/:id", verifyToken, getUserListings);

export default router;
