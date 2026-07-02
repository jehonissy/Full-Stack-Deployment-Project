import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to ShopEase</h1>

          <p>
            Discover premium electronics, fashion, accessories and
            lifestyle products at unbeatable prices.
          </p>

          <Link to="/products">
            <button className="hero-btn">Explore Products</button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;