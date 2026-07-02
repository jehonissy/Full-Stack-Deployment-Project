import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import products from "../data/products";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />

      <div className="products-container">
        <h1>Our Products</h1>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <div className="filter-box">
          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
          >
            <option>All</option>
            <option>Electronics</option>
            <option>Accessories</option>
            <option>Fashion</option>
          </select>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Products;