// import "@/styles/navbar.css";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// export const Navbar = () => {
//   const cartItems = useSelector((state) => state.cart.items);
//   const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
//   return (
//     <nav className="navbar">
//       <Link to="/" className="navbar-logo">
//         Naksh Jewels
//       </Link>

//       <Link to="/cart" className="navbar-cart">
//         Cart
//         {/* {cartCount > 0 && <span className="cart-count">{cartCount}</span>} */}
//         <span className="cart-count">{cartCount}</span>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           stroke-width="2"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           class="lucide lucide-shopping-cart-icon lucide-shopping-cart">
//           <circle cx="8" cy="21" r="1" />
//           <circle cx="19" cy="21" r="1" />
//           <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
//         </svg>
//       </Link>
//     </nav>
//   );
// };

import { Link } from "react-router-dom";
import "@/styles/navbar.css";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        ShopFly
      </Link>

      <div className="nav-links">
        <Link to="/cart" className="cart-btn">
          <span className="cart-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.6 13.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6L23 6H6" />
            </svg>

            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </span>

          <span>Cart</span>
        </Link>
      </div>
    </nav>
  );
};
