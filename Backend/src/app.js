import express from "express";
import cors from "cors";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Naksh Jewels Backend API is running 🚀",
    endpoints: {
      products: "/products",
      cart: "/cart",
    },
  });
});

app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

// error middleware (last)
app.use(errorHandler);

export default app;
