function ProductCard({ product }) {

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${product.name} added to cart`);
  };

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
      />

      <h3>{product.name}</h3>

      <p className="category">{product.category}</p>

      <h2>₹{product.price}</h2>

      <button onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;