import express from "express";
import { addToCart } from "../controllers/cart.controller.js";
import { validateCart } from "../middleware/validateCart.js";

const router = express.Router();

router.post("/", validateCart, addToCart);

export default router;
