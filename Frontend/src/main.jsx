import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Providers } from "./lib/providers";
import { ProductsPage } from "./pages/products-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartPage } from "./pages/cart-page";
import { Navbar } from "./feature/shared/navbar";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Providers>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Providers>
    </BrowserRouter>
  </StrictMode>,
);
