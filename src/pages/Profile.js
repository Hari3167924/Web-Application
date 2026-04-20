import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Profile.css";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [favCount, setFavCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    let username = localStorage.getItem("username");
    if (!username) return;

    // ✅ Load profile details
    let data = JSON.parse(localStorage.getItem("profile_" + username)) || {};
    setProfile(data);

    // ✅ Load cart, favourites, and orders separately
    let cart = JSON.parse(localStorage.getItem("cart_" + username)) || [];
    let favs = JSON.parse(localStorage.getItem("favourites")) || []; // FIXED
    let orders = JSON.parse(localStorage.getItem("orders_" + username)) || [];

    setCartCount(cart.length);
    setFavCount(favs.length);
    setOrderCount(orders.length);
  }, []);

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div>
      <Navbar />
      <header
        style={{
          background: "#2e7d32",
          color: "white",
          padding: "15px",
          textAlign: "center",
        }}
      >
        Profile
      </header>
      <div style={{ padding: "20px" }}>
        <h2>👤 {profile.username}</h2>
        <p><b>Password:</b> {profile.password}</p>
        <p><b>Cart Items:</b> {cartCount}</p>
        <p><b>Favourites:</b> {favCount}</p>
        <p><b>Orders:</b> {orderCount}</p>
      </div>
    </div>
  );
}

export default Profile;
