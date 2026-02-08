import { asyncHandler } from "../utils/asyncHandler.js";

let cart = [];

export const addToCart = asyncHandler(async (req, res) => {
  const { products, totalPrice } = req.body;


  // Loop through incoming products
  products.forEach((incoming) => {
    const existing = cart.find((item) => item.productId === incoming.productId);

    if (existing) {
      // update quantity
      existing.quantity += incoming.quantity;
    } else {
      // add new product
      cart.push({
        productId: incoming.productId,
        quantity: incoming.quantity,
        price: incoming.price,
      });
    }
  });

  res.status(201).json({
    message: "Cart updated successfully",
    cart,
    totalPrice,
  });
});
