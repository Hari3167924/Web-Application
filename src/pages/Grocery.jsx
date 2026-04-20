import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Grocery() {
  const [products, setProducts] = useState([]);

  // ✅ Fetch products by category from backend
  useEffect(() => {
    fetch("http://localhost:8080/api/products/category/Grocery")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  // ✅ Get user info from localStorage
  const username = localStorage.getItem("username");
  const userId = username ? parseInt(localStorage.getItem("userId")) : null;

  // ✅ Add to Cart (localStorage)
  const addToCart = (product) => {
    if (!username) return alert("Please login first!");
    const cartKey = "cart_" + username;
    const cart = JSON.parse(localStorage.getItem(cartKey)) || [];
    cart.push(product);
    localStorage.setItem(cartKey, JSON.stringify(cart));
    alert(`${product.name} added to your cart!`);
  };

  // ✅ Add to Favourites (localStorage)
  const addToFavourites = (product) => {
    const favs = JSON.parse(localStorage.getItem("favourites")) || [];
    if (!favs.some(item => item.name === product.name)) {
      favs.push(product);
      localStorage.setItem("favourites", JSON.stringify(favs));
      alert(`${product.name} added to favourites!`);
    } else {
      alert(`${product.name} is already in favourites.`);
    }
  };

  // ✅ Buy product (POST to backend)
  const buyProduct = (product, quantity = 1) => {
    if (!userId) return alert("Please login first!");
    fetch("http://localhost:8080/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, productId: product.id, quantity })
    })
    .then(res => res.json())
    .then(() => alert(`${product.name} purchased successfully!`))
    .catch(err => console.error(err));
  };

  return (
    <div className="grocery-page">
      <Navbar />
      <header className="header">ShopEase Grocery Store</header>

      <div className="container">
        <div className="grid">
          {products.map((product) => (
            <div className="item-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price}</p>
              <button onClick={() => addToCart(product)}>🛒 Add to Cart</button>
              <button onClick={() => addToFavourites(product)}>❤️ Add to Favourites</button>
              <br /><br />
              <button onClick={() => buyProduct(product)}>💰 Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Grocery;
