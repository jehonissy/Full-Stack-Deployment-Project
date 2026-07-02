import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="products-container">
        <h1>About ShopEase</h1>

        <p style={{ textAlign: "center", fontSize: "20px" }}>
          ShopEase is a modern E-Commerce Product Catalog built
          using React, React Router and Local Storage.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default About;