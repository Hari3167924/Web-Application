import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    navigate("/");
  };

  // return (
  //   <nav>
  //     <Link to="/home">🏠 Home</Link>
  //     <Link to="/categories">📂 Categories</Link>
  //     <Link to="/cart">🛒 Cart</Link>
  //     <Link to="/orders">📦 Orders</Link>
  //     <Link to="/favourites">⭐ Favourites</Link>
  //     <Link to="/profile">👤 Profile</Link>
  //     <button onClick={handleLogout}>Logout</button>
  //   </nav>
  // );
}

export default Navbar;
  