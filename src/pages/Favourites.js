import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Favourites.css";

function Favourites() {
  const [favs, setFavs] = useState([]);

  // Load favourites on page load
  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavs(storedFavs);
  }, []);

  // Remove favourite
  const removeFavourite = (index) => {
    const updatedFavs = [...favs];
    updatedFavs.splice(index, 1);
    setFavs(updatedFavs);
    localStorage.setItem("favourites", JSON.stringify(updatedFavs));
  };

  return (
    <div className="favourites-page">
      <Navbar />
      <header className="header">Your Favourites</header>

      <div className="container">
        {favs.length === 0 ? (
          <p className="empty">No favourites added yet.</p>
        ) : (
          favs.map((item, index) => (
            <div className="fav-item" key={index}>
              <div>
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
              </div>
              <button
                className="delete-btn"
                onClick={() => removeFavourite(index)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Favourites;
