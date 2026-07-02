import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };

    updateCart();

    window.addEventListener("storage", updateCart);

    const interval = setInterval(updateCart, 500);

    return () => {
      window.removeEventListener("storage", updateCart);
      clearInterval(interval);
    };
  }, []);

  return (
    <nav className="navbar">
      <h2>ShopEase</h2>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart ({cartCount})</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;