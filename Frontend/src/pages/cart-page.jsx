import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeFromCart,
  updateQuantity,
} from "@/redux/slice/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import "@/styles/cart.css";
import { useAddAllProductsMutation } from "@/redux/services/all-services";

export const CartPage = () => {
  const [addAllProducts, { isLoading }] = useAddAllProductsMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce((t, i) => t + i.price * i.quantity, 0);

  if (!cartItems.length) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
        <Link to="/">Go shopping →</Link>
      </div>
    );
  }

  const handleSubmit = async () => {
    const payload = {
      products: cartItems.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
        price: item.price,
      })),
      totalPrice,
    };
    try {
      const res = await addAllProducts(payload).unwrap();
      alert(res.message);
      dispatch(clearCart());
      navigate("/");
    } catch (err) {
      console.error("Order failed:", err);
    }
  };

  return (
    <section className="cart">
      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />

          <div className="cart-info">
            <h4>{item.name}</h4>
            <span>₹{item.price}</span>

            <div className="qty">
              <button
                onClick={() =>
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      quantity: item.quantity - 1,
                    }),
                  )
                }
                disabled={item.quantity === 1}>
                −
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() =>
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      quantity: item.quantity + 1,
                    }),
                  )
                }>
                +
              </button>
            </div>
          </div>

          <div className="cart-right">
            <span>₹{item.price * item.quantity}</span>
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <span>Total</span>
        <strong>₹{totalPrice}</strong>
        <button onClick={handleSubmit} disabled={isLoading}>
          Checkout
        </button>
      </div>
    </section>
  );
};
