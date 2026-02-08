import { products } from "../data/products.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getProducts = asyncHandler(async (req, res) => {
  res.status(200).json(products);
});
