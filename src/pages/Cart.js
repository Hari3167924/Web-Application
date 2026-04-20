import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Cart.css";

function Cart() {
  const [cart, setCart] = useState([]);
  const [username, setUsername] = useState(null);

  // Load cart on page load
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);

    if (storedUsername) {
      const cartKey = "cart_" + storedUsername;
      const storedCart = JSON.parse(localStorage.getItem(cartKey)) || [];
      setCart(storedCart);
    }
  }, []);

  // Remove item
  const removeItem = (index) => {
    if (!username) return;

    const cartKey = "cart_" + username;
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem(cartKey, JSON.stringify(updatedCart));
  };

const checkout = () => {
  if (!username) {
    alert("Please login to checkout.");
    window.location.href = "/login";
    return;
  }

  const cartKey = "cart_" + username;
  const orderKey = "orders_" + username;

  const orders = JSON.parse(localStorage.getItem(orderKey)) || [];

  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  const totalAmount = cart.reduce(
    (sum, item) => sum + parseFloat(item.price),
    0
  );

  const newOrder = {
    id: "ORD" + Date.now(),
    date: new Date().toLocaleString(),
    items: cart,
    total: totalAmount,
    payment: null,
    status: "Pending",
  };

  // ✅ USER ORDERS (already exists)
  const updatedOrders = [...orders, newOrder];
  localStorage.setItem(orderKey, JSON.stringify(updatedOrders));

  // 🔥🔥🔥 ADD THIS BLOCK (VERY IMPORTANT)
  const allOrders = JSON.parse(localStorage.getItem("all_orders")) || [];

  allOrders.push({
    ...newOrder,
    username: username, // track who ordered
    createdAt: new Date().toISOString() // for date filtering
  });

  localStorage.setItem("all_orders", JSON.stringify(allOrders));
  // 🔥🔥🔥 END

  // Clear cart
  localStorage.setItem(cartKey, JSON.stringify([]));
  setCart([]);

  alert("Checkout successful! See your orders.");
  window.location.href = "/orders";
};

    return (
      <div className="cart-page">
        <Navbar />
        <header className="header">Your Cart</header>

        <div className="container">
          {username ? (
            cart.length === 0 ? (
              <p className="empty">Your cart is empty.</p>
            ) : (
              cart.map((item, index) => (
                <div className="cart-item" key={index}>
                  <div>
                    <h3>{item.name}</h3>
                    <p>Price: ₹{item.price}</p>
                  </div>
                  <button className="delete-btn" onClick={() => removeItem(index)}>
                    Delete
                  </button>
                </div>
              ))
            )
          ) : (
            <p className="empty">Please login to view your cart.</p>
          )}
        </div>


        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button onClick={checkout} className="checkout-btn">
            Checkout
          </button>
        </div>
      </div>
    );
  }

  export default Cart;
























  
  //   const checkout = () => {
  //   if (!username) {
  //     alert("Please login to checkout.");
  //     window.location.href = "/login";
  //     return;
  //   }

  //   const cartKey = "cart_" + username;
  //   const orderKey = "orders_" + username;

  //   const orders = JSON.parse(localStorage.getItem(orderKey)) || [];

  //   if (cart.length === 0) {
  //     alert("Your cart is empty.");
  //     return;
  //   }

  //   const totalAmount = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);

  //   const newOrder = {
  //     id: "ORD" + Date.now(),
  //     date: new Date().toLocaleString(),
  //     items: cart,
  //     total: totalAmount,
  //     payment: null,
  //     status: "Pending",
  //   };

  //   const updatedOrders = [...orders, newOrder];
  //   localStorage.setItem(orderKey, JSON.stringify(updatedOrders));

  //   localStorage.setItem(cartKey, JSON.stringify([]));
  //   setCart([]);

  //   alert("Checkout successful! See your orders.");
  //   window.location.href = "/orders";
  // };
  
  // // Checkout function
  // const checkout = () => {
  //   if (!username) {
  //     alert("Please login to checkout.");
  //     window.location.href = "/login"; // React route
  //     return;
  //   }

  //   const cartKey = "cart_" + username;
  //   const orderKey = "orders_" + username;

  //   const orders = JSON.parse(localStorage.getItem(orderKey)) || [];

  //   if (cart.length === 0) {
  //     alert("Your cart is empty.");
  //     return;
  //   }

  //   // Move cart items to orders
  //   const newOrders = [
  //     ...orders,
  //     ...cart.map((item) => ({
  //       name: item.name,
  //       price: item.price,
  //       date: new Date().toLocaleString(),
  //     })),
  //   ];

  //   localStorage.setItem(orderKey, JSON.stringify(newOrders));
  //   localStorage.setItem(cartKey, JSON.stringify([]));

  //   setCart([]);
  //   alert("Checkout successful!");
  //   window.location.href = "/orders"; // React route
  // };