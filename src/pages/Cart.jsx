import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Cart() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const items =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(items);
  }, []);

  const removeItem = (index) => {

    const updatedCart = [...cart];

    updatedCart.splice(index, 1);

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <>
      <Navbar />

      <div className="products-container">

        <h1>Shopping Cart</h1>

        <h2>Total : ₹{total}</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item, index) => (
            <div
              key={index}
              className="product-card"
              style={{ marginBottom: "20px" }}
            >
              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>

              <h2>₹{item.price}</h2>

              <button
                onClick={() => removeItem(index)}
              >
                Remove
              </button>

            </div>
          ))
        )}

      </div>
      <Footer />
    </>
  );
}

export default Cart;