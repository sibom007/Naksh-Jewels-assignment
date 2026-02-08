import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/slice/cartSlice";
import "@/styles/product.css";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const alreadyInCart = cartItems.some((item) => item.id === product.id);

  return (
    <div className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} />

        {alreadyInCart && <span className="added-badge">Added</span>}
      </div>

      <div className="product-content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <div className="product-bottom">
          <span className="price">₹{product.price}</span>

          <button
            disabled={alreadyInCart}
            onClick={() => dispatch(addToCart(product))}
            className={alreadyInCart ? "added" : ""}>
            {alreadyInCart ? "In Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};
